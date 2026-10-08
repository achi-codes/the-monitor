#!/usr/bin/env node
import { readFileSync, statSync, mkdirSync, cpSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const localFile = resolve(root, 'dist/the-monitor.js');
const weatherDir = resolve(root, 'public/weather');
const publicAssets = [
  resolve(root, 'public/grandland.png'),
];
const remotePath = 'www/the-monitor.js';
const smbPassword = process.env.HA_SAMBA_PASSWORD || '';

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

async function ensureSamba(token) {
  const { addons } = await supervisor(token, '/addons');
  if (!addons.some((addon) => addon.slug === 'core_samba')) {
    await supervisor(token, '/addons/core_samba/install', 'post');
  }
  let current = {};
  try {
    current = await supervisor(token, '/addons/core_samba/options');
  } catch {
    current = {};
  }
  await supervisor(token, '/addons/core_samba/options', 'post', {
    options: {
      username: current.username || 'homeassistant',
      password: smbPassword,
      workgroup: current.workgroup || 'WORKGROUP',
      local_master: current.local_master ?? true,
      enabled_shares: current.enabled_shares || ['config'],
      compatibility_mode: current.compatibility_mode ?? false,
      apple_compatibility_mode: current.apple_compatibility_mode ?? true,
      server_signing: current.server_signing || 'default',
      veto_files: current.veto_files || ['._*', '.DS_Store', 'Thumbs.db', 'icon?', '.Trashes'],
      allow_hosts: current.allow_hosts || ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', '169.254.0.0/16', 'fe80::/10', 'fc00::/7'],
    },
  });
  const info = await supervisor(token, '/addons/core_samba/info');
  if (info.state !== 'started') {
    await supervisor(token, '/addons/core_samba/start', 'post');
  }
}

function copyViaSmb() {
  const host = process.env.HA_HOST || 'homeassistant.local';
  const user = process.env.HA_SAMBA_USER || 'homeassistant';
  const mountPoint = mkdtempSync(`${tmpdir()}/ha-config-`);
  mkdirSync(`${mountPoint}/www`, { recursive: true });
  const mountTarget = `${mountPoint}`;
  const mountSource = `//${user}:${encodeURIComponent(smbPassword)}@${host}/config`;
  const mount = spawnSync('mount_smbfs', [mountSource, mountTarget], { encoding: 'utf8' });
  if (mount.status !== 0) {
    throw new Error(mount.stderr || mount.stdout || 'mount_smbfs failed');
  }
  try {
    cpSync(localFile, `${mountPoint}/${remotePath}`);
    for (const localAsset of publicAssets) {
      if (!existsSync(localAsset)) continue;
      const fileName = localAsset.split('/').pop();
      cpSync(localAsset, `${mountPoint}/www/${fileName}`);
      console.log(`Uploaded asset: ${fileName} (${statSync(localAsset).size} bytes)`);
    }
    if (existsSync(weatherDir)) {
      mkdirSync(`${mountPoint}/www/weather`, { recursive: true });
      for (const file of readdirSync(weatherDir)) {
        const localAsset = resolve(weatherDir, file);
        cpSync(localAsset, `${mountPoint}/www/weather/${file}`);
        console.log(`Uploaded weather asset: ${file} (${statSync(localAsset).size} bytes)`);
      }
    }
  } finally {
    spawnSync('umount', [mountTarget], { encoding: 'utf8' });
  }
}

async function main() {
  if (!smbPassword) {
    throw new Error('HA_SAMBA_PASSWORD is not set');
  }
  const token = loadToken();
  console.log(`Preparing Samba and uploading ${localFile} (${statSync(localFile).size} bytes)`);
  await ensureSamba(token);
  copyViaSmb();
  const baseUrl = (process.env.HA_URL || 'http://homeassistant.local:8123').replace(/\/$/, '');
  const head = await fetch(`${baseUrl}/local/the-monitor.js`, { method: 'HEAD' });
  console.log(`Remote size after upload: ${head.headers.get('content-length')} bytes`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
