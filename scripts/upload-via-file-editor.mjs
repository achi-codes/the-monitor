import { readFileSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const localFile = resolve(root, 'dist/the-monitor.js');
const baseUrl = (process.env.HA_URL || 'http://homeassistant.local:8123').replace(/\/$/, '');
const targets = [
  '/homeassistant/www/community/the-monitor/the-monitor.js',
  '/homeassistant/www/the-monitor.js',
];

function loadToken() {
  if (process.env.HA_TOKEN) return process.env.HA_TOKEN.trim();
  const data = JSON.parse(readFileSync(`${process.env.HOME}/.cursor/mcp.json`, 'utf8'));
  return data.mcpServers['home-assistant'].env.API_ACCESS_TOKEN;
}

async function wsRequest(token, type, extra = {}) {
  const ws = new WebSocket(`${baseUrl.replace(/^http/, 'ws')}/api/websocket`);
  const queue = [];
  const waiters = [];
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(String(event.data));
    const waiter = waiters.shift();
    if (waiter) waiter(message);
    else queue.push(message);
  });
  const next = () => new Promise((resolve, reject) => {
    if (queue.length) {
      resolve(queue.shift());
      return;
    }
    const timer = setTimeout(() => reject(new Error(`timeout ${type}`)), 90000);
    waiters.push((message) => {
      clearTimeout(timer);
      resolve(message);
    });
  });
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  await next();
  ws.send(JSON.stringify({ type: 'auth', access_token: token }));
  const auth = await next();
  if (auth.type !== 'auth_ok') throw new Error(auth.message || 'auth failed');
  const id = Math.floor(Math.random() * 1e9);
  ws.send(JSON.stringify({ id, type, ...extra }));
  for (;;) {
    const response = await next();
    if (response.id !== id) continue;
    ws.close();
    if (response.success) return response.result;
    throw new Error(JSON.stringify(response.error || response));
  }
}

const token = loadToken();
const info = await wsRequest(token, 'supervisor/api', {
  endpoint: '/addons/core_configurator/info',
  method: 'get',
});
const ingressUrl = `${baseUrl}${info.ingress_entry || info.ingress_url}`.replace(/\/$/, '');
const session = await wsRequest(token, 'supervisor/api', {
  endpoint: '/ingress/session',
  method: 'post',
  data: {},
});

async function ingress(path, options = {}) {
  const response = await fetch(`${ingressUrl}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: `ingress_session=${session.session}`,
      ...(options.headers || {}),
    },
  });
  return { status: response.status, text: await response.text() };
}

const contents = readFileSync(localFile, 'utf8');
console.log(`Uploading ${localFile} (${statSync(localFile).size} bytes)`);

for (const filename of targets) {
  const body = new URLSearchParams();
  body.set('filename', filename);
  body.set('text', contents);
  const saved = await ingress('/api/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  console.log('save', filename, saved.text);
  if (saved.status !== 200 || /"error": true/.test(saved.text)) {
    throw new Error(`Failed to save ${filename}`);
  }
}

const staleGzip = '/homeassistant/www/community/the-monitor/the-monitor.js.gz';
const deleted = await ingress('/api/delete', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ path: staleGzip }),
});
console.log('gzip', deleted.text);

const resourceUrl = `/hacsfiles/the-monitor/the-monitor.js?v=${Date.now().toString(36)}`;
const resources = await wsRequest(token, 'lovelace/resources');
const monitor = resources.find((item) => /the-monitor\.js/.test(item.url || ''));
if (monitor) {
  await wsRequest(token, 'lovelace/resources/update', {
    resource_id: monitor.id,
    url: resourceUrl,
    res_type: 'module',
  });
  console.log('resource', monitor.url, '->', resourceUrl);
}
