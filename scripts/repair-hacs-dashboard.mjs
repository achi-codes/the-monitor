#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const baseUrl = (process.env.HA_URL || 'http://homeassistant.local:8123').replace(/\/$/, '');
const dashboardPath = 'the-monitor';
const hacsResource = '/hacsfiles/the-monitor/the-monitor.js';

const dashboardConfig = {
  views: [
    {
      title: 'Monitor',
      type: 'panel',
      cards: [{ type: 'custom:the-monitor-dashboard' }],
    },
  ],
};

function loadToken() {
  if (process.env.HA_TOKEN) return process.env.HA_TOKEN.trim();
  const data = JSON.parse(readFileSync(`${process.env.HOME}/.cursor/mcp.json`, 'utf8'));
  return data.mcpServers['home-assistant'].env.API_ACCESS_TOKEN;
}

async function wsRequest(token, type, extra = {}) {
  const ws = new WebSocket(`${baseUrl.replace(/^http/, 'ws')}/api/websocket`);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve);
    ws.addEventListener('error', reject);
  });
  const readMessage = () =>
    new Promise((resolve, reject) => {
      ws.addEventListener('message', (event) => resolve(JSON.parse(String(event.data))), { once: true });
      ws.addEventListener('error', reject, { once: true });
    });
  await readMessage();
  ws.send(JSON.stringify({ type: 'auth', access_token: token }));
  const auth = await readMessage();
  if (auth.type !== 'auth_ok') throw new Error(auth.message || 'auth failed');
  const id = 1;
  ws.send(JSON.stringify({ id, type, ...extra }));
  const response = await readMessage();
  ws.close();
  if (!response.success) {
    const error = new Error(response.error?.message || JSON.stringify(response.error || response));
    error.code = response.error?.code;
    throw error;
  }
  return response.result;
}

function isMissingConfig(error) {
  return error?.code === 'config_not_found' || /No config found/i.test(error?.message || '');
}

const token = loadToken();
const dashboards = await wsRequest(token, 'lovelace/dashboards/list');
const existing = dashboards.find((item) => item.url_path === dashboardPath);
if (!existing) {
  await wsRequest(token, 'lovelace/dashboards/create', {
    url_path: dashboardPath,
    title: 'The Monitor',
    icon: 'mdi:monitor-dashboard',
    require_admin: false,
    show_in_sidebar: true,
  });
  console.log('Created sidebar dashboard.');
} else {
  console.log(`Dashboard exists: ${existing.title} (${existing.url_path}), sidebar=${existing.show_in_sidebar}`);
  if (existing.show_in_sidebar === false) {
    await wsRequest(token, 'lovelace/dashboards/update', {
      dashboard_id: existing.id,
      show_in_sidebar: true,
    });
    console.log('Enabled sidebar entry.');
  }
}

let needsView = true;
try {
  const config = await wsRequest(token, 'lovelace/config', { url_path: dashboardPath, force: false });
  needsView = !config?.views?.length;
  console.log(`Existing views: ${config?.views?.length || 0}`);
} catch (error) {
  if (!isMissingConfig(error)) throw error;
  console.log('Dashboard has no saved view.');
}

if (needsView) {
  await wsRequest(token, 'lovelace/config/save', {
    url_path: dashboardPath,
    config: dashboardConfig,
  });
  console.log('Saved panel view with the Monitor card.');
}

const resources = await wsRequest(token, 'lovelace/resources');
const monitorResources = resources.filter((item) => /the-monitor\.js/.test(item.url || ''));
for (const resource of monitorResources) {
  console.log(`Resource: ${resource.url}`);
}
const hacs = monitorResources.find((item) => item.url.split('?')[0] === hacsResource);
if (!hacs) {
  await wsRequest(token, 'lovelace/resources/create', {
    url: hacsResource,
    res_type: 'module',
  });
  console.log(`Registered ${hacsResource}`);
}
for (const resource of monitorResources) {
  if (resource.url.startsWith('/local/the-monitor.js')) {
    await wsRequest(token, 'lovelace/resources/delete', { resource_id: resource.id });
    console.log(`Removed old resource ${resource.url}`);
  }
}
console.log(`Open ${baseUrl}/${dashboardPath}/0 and reload once.`);
