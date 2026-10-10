import { getDomain } from './entities';
import { getHassBaseUrl, resolveHassUrl, isMockHass, getHassAccessToken } from './hass';

export async function callService(hass, domain, service, data = {}, returnResponse = false) {
  if (!hass?.callService) {
    console.warn('HA not connected, service call skipped:', domain, service, data);
    return null;
  }
  return hass.callService(domain, service, data, undefined, returnResponse);
}

export async function turnOnEntity(hass, entityId) {
  const domain = getDomain(entityId);
  if (!domain || !hass?.states?.[entityId]) return;

  if (domain === 'light') {
    return callService(hass, 'light', 'turn_on', { entity_id: entityId });
  }
  if (domain === 'cover') {
    return callService(hass, 'cover', 'open_cover', { entity_id: entityId });
  }
  if (domain === 'lock') {
    return callService(hass, 'lock', 'lock', { entity_id: entityId });
  }
  if (domain === 'input_button' || domain === 'button') {
    return callService(hass, domain, 'press', { entity_id: entityId });
  }
  if (domain === 'scene' || domain === 'script') {
    return activateScene(hass, entityId);
  }
  return callService(hass, domain, 'turn_on', { entity_id: entityId });
}

export async function turnOffEntity(hass, entityId) {
  const domain = getDomain(entityId);
  if (!domain || !hass?.states?.[entityId]) return;

  if (domain === 'cover') {
    return callService(hass, 'cover', 'close_cover', { entity_id: entityId });
  }
  if (domain === 'lock') {
    return callService(hass, 'lock', 'unlock', { entity_id: entityId });
  }
  if (domain === 'input_button' || domain === 'button') {
    return;
  }
  if (domain === 'light') {
    return callService(hass, 'light', 'turn_off', { entity_id: entityId });
  }
  return callService(hass, domain, 'turn_off', { entity_id: entityId });
}

export async function toggleEntity(hass, entityId) {
  const domain = getDomain(entityId);
  if (!domain || !hass?.states?.[entityId]) return;

  if (['light', 'switch', 'fan', 'input_boolean', 'automation'].includes(domain)) {
    return callService(hass, domain, 'toggle', { entity_id: entityId });
  }
  if (domain === 'input_button' || domain === 'button') {
    return callService(hass, domain, 'press', { entity_id: entityId });
  }
  if (domain === 'cover') {
    const state = hass.states[entityId]?.state;
    const service = state === 'open' ? 'close_cover' : 'open_cover';
    return callService(hass, domain, service, { entity_id: entityId });
  }
  if (domain === 'lock') {
    const state = hass.states[entityId]?.state;
    const service = state === 'locked' ? 'unlock' : 'lock';
    return callService(hass, domain, service, { entity_id: entityId });
  }
  if (domain === 'alarm_control_panel') {
    const state = hass.states[entityId]?.state;
    if (state === 'disarmed') {
      return callService(hass, domain, 'alarm_arm_home', { entity_id: entityId });
    }
    return callService(hass, domain, 'alarm_disarm', { entity_id: entityId });
  }
  if (domain === 'climate' || domain === 'sensor' || domain === 'binary_sensor') {
    return;
  }
  return callService(hass, 'homeassistant', 'toggle', { entity_id: entityId });
}

export function getBrightnessPercent(hass, entityId) {
  const state = hass?.states?.[entityId];
  if (!state) return 0;
  if (state.state === 'off') {
    const last = state.attributes?.brightness;
    return typeof last === 'number' ? Math.round((last / 255) * 100) : 0;
  }
  const brightness = state.attributes?.brightness;
  if (typeof brightness === 'number') return Math.round((brightness / 255) * 100);
  return state.state === 'on' ? 100 : 0;
}

export async function setEntityBrightness(hass, entityId, percent) {
  const domain = getDomain(entityId);
  if (!domain || !hass?.states?.[entityId]) return;

  const clamped = Math.min(100, Math.max(0, Math.round(percent)));

  if (clamped === 0) {
    if (domain === 'light') {
      return callService(hass, 'light', 'turn_off', { entity_id: entityId });
    }
    return callService(hass, domain, 'turn_off', { entity_id: entityId });
  }

  const brightness = Math.max(1, Math.round((clamped / 100) * 255));

  if (domain === 'light') {
    return callService(hass, 'light', 'turn_on', { entity_id: entityId, brightness });
  }

  return callService(hass, domain, 'turn_on', { entity_id: entityId });
}

export async function setLightRgbColor(hass, entityId, rgb) {
  if (!hass?.states?.[entityId] || getDomain(entityId) !== 'light') return;
  if (!Array.isArray(rgb) || rgb.length < 3) return;
  return callService(hass, 'light', 'turn_on', {
    entity_id: entityId,
    rgb_color: rgb.slice(0, 3).map((v) => Math.min(255, Math.max(0, Math.round(v)))),
  });
}

export async function setLightColorTemp(hass, entityId, kelvin) {
  if (!hass?.states?.[entityId] || getDomain(entityId) !== 'light') return;
  return callService(hass, 'light', 'turn_on', {
    entity_id: entityId,
    color_temp_kelvin: Math.round(kelvin),
  });
}

export async function setClimateTemperature(hass, entityId, temperature) {
  if (getDomain(entityId) !== 'climate' || !hass?.states?.[entityId]) return;
  return callService(hass, 'climate', 'set_temperature', { entity_id: entityId, temperature });
}

export async function activateScene(hass, entityId) {
  const domain = getDomain(entityId);
  if (!domain) return;
  if (domain === 'script') {
    return callService(hass, 'script', 'turn_on', { entity_id: entityId });
  }
  if (domain === 'scene') {
    return callService(hass, 'scene', 'turn_on', { entity_id: entityId });
  }
  return callService(hass, domain, 'turn_on', { entity_id: entityId });
}

export async function mediaPlayPause(hass, entityId) {
  const state = hass.states[entityId]?.state;
  if (state === 'playing') {
    return callService(hass, 'media_player', 'media_pause', { entity_id: entityId });
  }
  return callService(hass, 'media_player', 'media_play', { entity_id: entityId });
}

export async function mediaNext(hass, entityId) {
  return callService(hass, 'media_player', 'media_next_track', { entity_id: entityId });
}

export async function mediaPrevious(hass, entityId) {
  return callService(hass, 'media_player', 'media_previous_track', { entity_id: entityId });
}

export async function mediaSeek(hass, entityId, seconds) {
  return callService(hass, 'media_player', 'media_seek', { entity_id: entityId, seek_position: seconds });
}

export async function mediaSetVolume(hass, entityId, level) {
  return callService(hass, 'media_player', 'volume_set', {
    entity_id: entityId,
    volume_level: Math.min(1, Math.max(0, level)),
  });
}

export async function fetchTodoItems(hass, entityId) {
  if (!hass || !entityId) return [];

  if (hass.connection?.sendMessagePromise) {
    try {
      const result = await hass.connection.sendMessagePromise({
        type: 'todo/item/list',
        entity_id: entityId,
      });
      if (result?.items) return result.items;
    } catch {
      // fallback to service call
    }
  }

  try {
    const response = await callService(
      hass,
      'todo',
      'get_items',
      { entity_id: entityId },
      true,
    );
    const items = response?.response?.[entityId]?.items || response?.items;
    if (items) return items;
  } catch {
    // ignore
  }

  return [];
}

export async function completeTodoItem(hass, entityId, uid) {
  return callService(hass, 'todo', 'update_item', {
    entity_id: entityId,
    item: uid,
    status: 'completed',
  });
}

export async function addTodoItem(hass, entityId, name) {
  return callService(hass, 'todo', 'add_item', {
    entity_id: entityId,
    item: name,
  });
}

export async function vacuumPause(hass, entityId) {
  return callService(hass, 'vacuum', 'pause', { entity_id: entityId });
}

export async function vacuumStop(hass, entityId) {
  return callService(hass, 'vacuum', 'stop', { entity_id: entityId });
}

export async function vacuumReturnToBase(hass, entityId) {
  return callService(hass, 'vacuum', 'return_to_base', { entity_id: entityId });
}

export async function vacuumStart(hass, entityId) {
  return callService(hass, 'vacuum', 'start', { entity_id: entityId });
}

const RUN_SERVICE_BY_DOMAIN = {
  script: 'turn_on',
  scene: 'turn_on',
  button: 'press',
  input_button: 'press',
  automation: 'trigger',
};

export async function runEntity(hass, entityId) {
  const domain = getDomain(entityId);
  const service = RUN_SERVICE_BY_DOMAIN[domain];
  if (!service) return null;
  return callService(hass, domain, service, { entity_id: entityId });
}

export async function closeCover(hass, entityId) {
  return callService(hass, 'cover', 'close_cover', { entity_id: entityId });
}

export async function openCover(hass, entityId) {
  return callService(hass, 'cover', 'open_cover', { entity_id: entityId });
}

export async function stopCover(hass, entityId) {
  return callService(hass, 'cover', 'stop_cover', { entity_id: entityId });
}

export function getCoverPositionPercent(hass, entityId) {
  const state = hass?.states?.[entityId];
  if (!state) return 0;

  const position = state.attributes?.current_position;
  if (typeof position === 'number') return Math.round(position);
  if (state.state === 'open') return 100;
  if (state.state === 'closed') return 0;
  return 0;
}

export async function setCoverPosition(hass, entityId, percent) {
  const domain = getDomain(entityId);
  if (domain !== 'cover' || !hass?.states?.[entityId]) return;

  const clamped = Math.min(100, Math.max(0, Math.round(percent)));

  if (clamped === 0) {
    return callService(hass, 'cover', 'close_cover', { entity_id: entityId });
  }
  if (clamped === 100) {
    return callService(hass, 'cover', 'open_cover', { entity_id: entityId });
  }
  return callService(hass, 'cover', 'set_cover_position', {
    entity_id: entityId,
    position: clamped,
  });
}

export const CAMERA_SUPPORT_STREAM = 2;

export function cameraSupportsStream(hass, entityId) {
  const state = hass?.states?.[entityId];
  if (!state) return false;
  return Boolean((state.attributes?.supported_features ?? 0) & CAMERA_SUPPORT_STREAM);
}

function getCameraAccessToken(hass, entityId) {
  const accessToken = hass?.states?.[entityId]?.attributes?.access_token;
  if (accessToken) return accessToken;
  return getHassAccessToken(hass);
}

export function getCameraStreamUrl(hass, entityId) {
  if (!hass || !entityId || isMockHass(hass)) return null;

  const state = hass.states[entityId];
  if (!state) return null;

  const base = getHassBaseUrl(hass);
  if (!base) return null;

  const params = new URLSearchParams();
  const token = getCameraAccessToken(hass, entityId);
  if (token) params.set('token', token);

  const query = params.toString();
  return query
    ? `${base}/api/camera_proxy_stream/${entityId}?${query}`
    : `${base}/api/camera_proxy_stream/${entityId}`;
}

export function getCameraSnapshotUrl(hass, entityId, { cacheBust = null } = {}) {
  if (!hass || !entityId) return null;

  const state = hass.states[entityId];
  if (!state) return null;

  if (isMockHass(hass)) {
    const picture = resolveHassUrl(hass, state.attributes?.entity_picture);
    if (!picture) return null;
    if (cacheBust == null) return picture;
    return `${picture}${picture.includes('?') ? '&' : '?'}t=${cacheBust}`;
  }

  const params = new URLSearchParams();
  if (cacheBust != null) params.set('t', String(cacheBust));
  const token = getCameraAccessToken(hass, entityId);
  if (token) params.set('token', token);

  const base = getHassBaseUrl(hass);
  const query = params.toString();
  const path = query ? `/api/camera_proxy/${entityId}?${query}` : `/api/camera_proxy/${entityId}`;
  return base ? `${base}${path}` : path;
}

export function getCameraImageUrl(hass, entityId, options = {}) {
  return getCameraSnapshotUrl(hass, entityId, options);
}
