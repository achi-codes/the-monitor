#!/usr/bin/env node
import { readFileSync } from 'node:fs';

function loadToken() {
  if (process.env.HA_TOKEN) return process.env.HA_TOKEN.trim();
  const data = JSON.parse(readFileSync(`${process.env.HOME}/.cursor/mcp.json`, 'utf8'));
  return data.mcpServers['home-assistant'].env.API_ACCESS_TOKEN;
}

async function wsRequest(token, type, extra = {}) {
  const baseUrl = (process.env.HA_URL || 'http://homeassistant.local:8123').replace(/\/$/, '');
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
  const id = Math.floor(Math.random() * 1e9);
  ws.send(JSON.stringify({ id, type, ...extra }));
  const response = await readMessage();
  ws.close();
  if (!response.success) throw new Error(response.error?.message || JSON.stringify(response.error || response));
  return response.result;
}

async function supervisor(token, endpoint, method = 'get', data) {
  const payload = { endpoint, method };
  if (data !== undefined) payload.data = data;
  return wsRequest(token, 'supervisor/api', payload);
}

const token = loadToken();
const { addons } = await supervisor(token, '/addons');
const slugs = addons.map((a) => a.slug);
console.log('Has samba:', slugs.includes('core_samba'));
console.log('Has vscode:', slugs.some((s) => s.includes('vscode')));
console.log('Has file editor:', slugs.some((s) => /file|editor|configurator/.test(s)));

if (!slugs.includes('core_samba')) {
  console.log('Installing Samba add-on...');
  await supervisor(token, '/addons/core_samba/install', 'post');
}

const info = await supervisor(token, '/addons/core_samba/info');
console.log('Samba state:', info.state);

if (info.state !== 'started') {
  console.log('Starting Samba add-on...');
  await supervisor(token, '/addons/core_samba/start', 'post');
}

const started = await supervisor(token, '/addons/core_samba/info');
console.log('Samba started:', started.state);
