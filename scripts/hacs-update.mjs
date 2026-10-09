#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const baseUrl = (process.env.HA_URL || 'http://homeassistant.local:8123').replace(/\/$/, '');
const repo = process.env.HACS_REPO_ID || '1410124186';
const checkOnly = process.argv.includes('--check');

function loadToken() {
  if (process.env.HA_TOKEN) return process.env.HA_TOKEN.trim();
  const data = JSON.parse(readFileSync(`${process.env.HOME}/.cursor/mcp.json`, 'utf8'));
  return data.mcpServers['home-assistant'].env.API_ACCESS_TOKEN;
}

async function wsCall(token, type, extra = {}) {
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
    const timer = setTimeout(() => reject(new Error(`timeout waiting for ${type}`)), 90000);
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
  ws.send(JSON.stringify({ id: 1, type, ...extra }));
  for (;;) {
    const response = await next();
    if (response.id !== 1) continue;
    ws.close();
    if (response.success) return response.result;
    throw new Error(JSON.stringify(response.error || response));
  }
}

const token = loadToken();
const summary = (info) => ({
  installed: info.installed_version,
  available: info.available_version,
  pending: info.pending_upgrade,
});

await wsCall(token, 'hacs/repository/refresh', { repository: repo });
const before = await wsCall(token, 'hacs/repository/info', { repository_id: repo });
console.log('HACS before', summary(before));

if (!checkOnly && before.installed_version !== before.available_version) {
  await wsCall(token, 'hacs/repository/download', { repository: repo });
  const after = await wsCall(token, 'hacs/repository/info', { repository_id: repo });
  console.log('HACS after', summary(after));
}

const resources = await wsRequestResources(token);
console.log('Resource', resources);

async function wsRequestResources(authToken) {
  const list = await wsCall(authToken, 'lovelace/resources');
  return list.filter((item) => /the-monitor\.js/.test(item.url || '')).map((item) => item.url);
}
