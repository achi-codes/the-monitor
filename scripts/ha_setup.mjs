#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const localFile = resolve(root, 'dist/the-monitor.js');
const cardConfigFile = resolve(root, 'deploy/the-monitor-config.json');
const kioskModeFile = resolve(root, 'deploy/kiosk-mode-config.json');
const baseUrl = (process.env.HA_URL || 'http://homeassistant.local:8123').replace(/\/$/, '');
const dashboardPath = 'the-monitor';
const resourceBasePath = '/local/the-monitor.js';

function buildResourceUrl() {
  const hash = createHash('sha256').update(readFileSync(localFile)).digest('hex').slice(0, 12);
  return `${resourceBasePath}?v=${hash}`;
}

function loadToken() {
  if (process.env.HA_TOKEN) return process.env.HA_TOKEN.trim();
  const mcpPath = `${process.env.HOME}/.cursor/mcp.json`;
  const data = JSON.parse(readFileSync(mcpPath, 'utf8'));
  return data.mcpServers['home-assistant'].env.API_ACCESS_TOKEN;
}

function loadKioskModeConfig() {
  return JSON.parse(readFileSync(kioskModeFile, 'utf8'));
}

function loadCardConfig() {
  return JSON.parse(readFileSync(cardConfigFile, 'utf8'));
}

async function wsRequest(token, type, extra = {}) {
  const ws = new WebSocket(`${baseUrl.replace(/^http/, 'ws')}/api/websocket`);
  await new Promise((resolvePromise, reject) => {
    ws.addEventListener('open', resolvePromise);
    ws.addEventListener('error', reject);
  });

  const readMessage = () =>
    new Promise((resolvePromise, reject) => {
      ws.addEventListener('message', (event) => resolvePromise(JSON.parse(String(event.data))), { once: true });
      ws.addEventListener('error', reject, { once: true });
    });

  await readMessage();
  ws.send(JSON.stringify({ type: 'auth', access_token: token }));
  const auth = await readMessage();
  if (auth.type !== 'auth_ok') {
    ws.close();
    throw new Error(auth.message || 'WebSocket auth failed');
  }

  const id = 1;
  ws.send(JSON.stringify({ id, type, ...extra }));
  const response = await readMessage();
  ws.close();

  if (!response.success) {
    throw new Error(response.error?.message || JSON.stringify(response.error || response));
  }
  return response.result;
}

async function checkRemoteBundle(resourceUrl) {
  const response = await fetch(`${baseUrl}${resourceUrl}`, { method: 'HEAD' });
  const remoteSize = Number(response.headers.get('content-length') || 0);
  return { status: response.status, remoteSize };
}

function isMonitorResource(item) {
  return item.url === resourceBasePath || item.url.startsWith(`${resourceBasePath}?`);
}

async function ensureLovelaceResource(token, resourceUrl) {
  const resources = await wsRequest(token, 'lovelace/resources');
  const monitorResources = resources.filter(isMonitorResource);
  const exact = monitorResources.find((item) => item.url === resourceUrl);

  if (exact) {
    console.log(`Lovelace resource already registered: ${resourceUrl}`);
    return;
  }

  if (monitorResources.length > 0) {
    const [primary, ...duplicates] = monitorResources;
    await wsRequest(token, 'lovelace/resources/update', {
      resource_id: primary.id,
      url: resourceUrl,
      res_type: 'module',
    });
    console.log(`Lovelace resource updated: ${primary.url} -> ${resourceUrl}`);

    for (const duplicate of duplicates) {
      await wsRequest(token, 'lovelace/resources/delete', { resource_id: duplicate.id });
      console.log(`Removed duplicate Lovelace resource: ${duplicate.url}`);
    }
    return;
  }

  await wsRequest(token, 'lovelace/resources/create', {
    url: resourceUrl,
    res_type: 'module',
  });
  console.log(`Lovelace resource created: ${resourceUrl}`);
}

function buildDashboardConfig(cardConfig, kioskMode) {
  return {
    kiosk_mode: kioskMode,
    views: [
      {
        title: 'Monitor',
        type: 'panel',
        cards: [
          {
            type: 'custom:the-monitor-dashboard',
            ...cardConfig,
          },
        ],
      },
    ],
  };
}

async function saveDashboardConfig(token, cardConfig, kioskMode) {
  await wsRequest(token, 'lovelace/config/save', {
    url_path: dashboardPath,
    config: buildDashboardConfig(cardConfig, kioskMode),
  });
  console.log('Dashboard config updated.');
}

async function ensureKioskMode(token, kioskMode) {
  const config = await wsRequest(token, 'lovelace/config', { url_path: dashboardPath });
  const current = config?.kiosk_mode?.non_admin_settings;
  const desired = kioskMode.non_admin_settings;

  if (
    current?.hide_header === desired.hide_header
    && current?.hide_sidebar === desired.hide_sidebar
  ) {
    console.log('Kiosk mode already configured for non-admin users.');
    return;
  }

  await wsRequest(token, 'lovelace/config/save', {
    url_path: dashboardPath,
    config: { ...config, kiosk_mode: kioskMode },
  });
  console.log('Kiosk mode enabled: non-admin users hide header + sidebar.');
}

async function saveDashboardConfigLegacy(token, cardConfig) {
  const kioskMode = loadKioskModeConfig();
  await saveDashboardConfig(token, cardConfig, kioskMode);
}

async function ensureLovelace(token, cardConfig, resourceUrl, initDashboardConfig) {
  await ensureLovelaceResource(token, resourceUrl);

  const dashboards = await wsRequest(token, 'lovelace/dashboards/list');
  if (!dashboards.some((item) => item.url_path === dashboardPath)) {
    await wsRequest(token, 'lovelace/dashboards/create', {
      title: 'The Monitor',
      icon: 'mdi:monitor-dashboard',
      url_path: dashboardPath,
      require_admin: false,
      show_in_sidebar: true,
    });
    console.log('Dashboard created.');
    await saveDashboardConfigLegacy(token, cardConfig);
  } else {
    console.log(`Dashboard exists: ${baseUrl}/${dashboardPath}/0`);
    await ensureKioskMode(token, loadKioskModeConfig());
    if (initDashboardConfig) {
      await saveDashboardConfigLegacy(token, cardConfig);
    } else {
      console.log('Skipping dashboard entity reset (pass --init-config to overwrite).');
    }
  }

  return `${baseUrl}/${dashboardPath}/0`;
}

async function main() {
  const initDashboardConfig = process.argv.includes('--init-config') || process.env.HA_INIT_CONFIG === '1';
  const token = loadToken();
  const cardConfig = loadCardConfig();
  const resourceUrl = buildResourceUrl();
  const localStat = await import('node:fs/promises').then((fs) => fs.stat(localFile));
  const { status, remoteSize } = await checkRemoteBundle(resourceUrl);

  if (status === 200) {
    if (remoteSize === localStat.size) {
      console.log(`Remote bundle up to date (${remoteSize} bytes).`);
    } else {
      console.log(
        `Remote bundle differs (remote=${remoteSize}, local=${localStat.size}). ` +
          'Run upload-via-samba.mjs to sync dist/the-monitor.js.'
      );
    }
  } else {
    console.log(`Remote bundle missing (HTTP ${status}).`);
  }

  const dashboardUrl = await ensureLovelace(token, cardConfig, resourceUrl, initDashboardConfig);
  console.log(`Resource URL: ${resourceUrl}`);
  console.log(`Open dashboard: ${dashboardUrl}`);
  console.log('Hard-refresh the dashboard once (Cmd+Shift+R) if layout still looks cached.');
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
