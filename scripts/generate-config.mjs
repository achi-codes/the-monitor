#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

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
  if (!response.success) throw new Error(response.error?.message || JSON.stringify(response.error || response));
  return response.result;
}

function pickEntity(states, { name, domain, includes = [] }) {
  const byName = states.filter((state) => state.attributes?.friendly_name === name);
  if (domain) {
    const match = byName.find((state) => state.entity_id.startsWith(`${domain}.`));
    if (match) return match.entity_id;
  }
  for (const needle of includes) {
    const match = states.find(
      (state) =>
        (!domain || state.entity_id.startsWith(`${domain}.`)) &&
        state.entity_id.includes(needle)
    );
    if (match) return match.entity_id;
  }
  return byName[0]?.entity_id || '';
}

async function main() {
  const token = loadToken();
  const states = await wsRequest(token, 'get_states');

  const config = {
    quickActions: [
      { entity_id: pickEntity(states, { name: 'Couch links', domain: 'light', includes: ['couch_links', 'couchlinks'] }), label: 'Couch links', icon: '' },
      { entity_id: pickEntity(states, { name: 'Couch rechts', domain: 'light', includes: ['couch_rechts', 'couchrechts'] }), label: 'Couch rechts', icon: '' },
      { entity_id: pickEntity(states, { name: 'Kaffee Mühle', domain: 'switch', includes: ['kaffee'] }), label: 'Kaffee Mühle', icon: '' },
      { entity_id: pickEntity(states, { name: 'Wasserkocher', domain: 'switch', includes: ['wasserkocher'] }), label: 'Wasserkocher', icon: '' },
    ],
    scenes: [
      { entity_id: pickEntity(states, { name: 'Kino', domain: 'scene' }), label: 'Kino', icon: '' },
      { entity_id: pickEntity(states, { name: 'Wohnzimmer Abend', domain: 'scene', includes: ['wohnzimmer_abend'] }), label: 'Abend', icon: '' },
      { entity_id: pickEntity(states, { name: 'Gute Nacht', domain: 'scene', includes: ['gute_nacht'] }), label: 'Gute Nacht', icon: '' },
      { entity_id: pickEntity(states, { name: 'Wohnzimmer normal', domain: 'scene', includes: ['wohnzimmer_normal'] }), label: 'Normal', icon: '' },
    ],
    weather: { entity_id: states.find((state) => state.entity_id.startsWith('weather.'))?.entity_id || '' },
    mediaPlayer: { entity_id: pickEntity(states, { name: 'Wohnzimmer', domain: 'media_player', includes: ['wohnzimmer'] }) },
    camera: { entity_id: '' },
    shoppingList: { entity_id: pickEntity(states, { name: 'Einkaufsliste', domain: 'todo', includes: ['einkaufsliste'] }) },
    vacuum: { entity_id: pickEntity(states, { name: 'Elon', domain: 'vacuum', includes: ['elon'] }) },
    presence: [],
    backgroundImage:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop',
  };

  const output = resolve(root, 'deploy/the-monitor-config.json');
  await import('node:fs/promises').then((fs) => fs.mkdir(resolve(root, 'deploy'), { recursive: true }));
  await import('node:fs/promises').then((fs) => fs.writeFile(output, JSON.stringify(config, null, 2)));
  console.log(`Wrote ${output}`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
