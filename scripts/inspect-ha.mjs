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
  const id = 1;
  ws.send(JSON.stringify({ id, type, ...extra }));
  const response = await readMessage();
  ws.close();
  if (!response.success) throw new Error(JSON.stringify(response.error || response));
  return response.result;
}

const token = loadToken();
const resources = await wsRequest(token, 'lovelace/resources');
const config = await wsRequest(token, 'lovelace/config', { url_path: 'the-monitor' });
console.log('RESOURCES:');
for (const r of resources) console.log(`- ${r.url} (${r.type || r.res_type}) id=${r.id}`);
console.log('\nDASHBOARD the-monitor:');
console.log(JSON.stringify(config, null, 2));
