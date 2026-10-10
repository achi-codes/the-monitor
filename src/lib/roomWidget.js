import { getDomain, getEntity, isEntityOn } from './entities';
import { getBrightnessPercent, getCoverPositionPercent } from './services';

export const ROOM_ACCENTS = {
  cobalt: { label: 'Kobalt', color: '#0050ef' },
  teal: { label: 'Petrol', color: '#00aba9' },
  emerald: { label: 'Smaragd', color: '#008a00' },
  lime: { label: 'Limette', color: '#60a917' },
  amber: { label: 'Bernstein', color: '#f0a30a' },
  orange: { label: 'Orange', color: '#fa6800' },
  crimson: { label: 'Karmin', color: '#a20025' },
  magenta: { label: 'Magenta', color: '#d80073' },
  violet: { label: 'Violett', color: '#aa00ff' },
  indigo: { label: 'Indigo', color: '#6a00ff' },
  steel: { label: 'Stahl', color: '#647687' },
  mauve: { label: 'Mauve', color: '#76608a' },
};

const AUTO_ACCENT_KEYS = Object.keys(ROOM_ACCENTS);

const ROOM_DOMAINS = new Set([
  'light', 'switch', 'fan', 'input_boolean', 'cover', 'climate', 'media_player',
  'lock', 'sensor', 'binary_sensor', 'scene', 'script', 'vacuum',
]);

const ROOM_SENSOR_CLASSES = new Set([
  'temperature', 'humidity', 'illuminance', 'carbon_dioxide', 'pm25', 'power',
]);

const ROOM_BINARY_CLASSES = new Set([
  'window', 'door', 'opening', 'garage_door', 'motion', 'occupancy', 'presence',
]);

const DOMAIN_ORDER = [
  'light', 'switch', 'fan', 'input_boolean', 'cover', 'climate', 'media_player',
  'scene', 'script', 'lock', 'vacuum', 'binary_sensor', 'sensor',
];

const ROOM_KINDS = [
  { kind: 'living', pattern: /wohn|living|lounge/i },
  { kind: 'kitchen', pattern: /küche|kueche|kitchen/i },
  { kind: 'dining', pattern: /ess|dining/i },
  { kind: 'bedroom', pattern: /schlaf|bed/i },
  { kind: 'kids', pattern: /kind|baby|nursery/i },
  { kind: 'bath', pattern: /bad|wc|toilet|dusch|bath/i },
  { kind: 'office', pattern: /büro|buero|office|arbeit/i },
  { kind: 'hall', pattern: /flur|diele|eingang|hall|treppe/i },
  { kind: 'garage', pattern: /garage|carport|keller|abstell/i },
  { kind: 'garden', pattern: /garten|terrass|balkon|garden|außen|aussen/i },
  { kind: 'laundry', pattern: /wasch|hauswirtschaft|laundry/i },
  { kind: 'gym', pattern: /fitness|sport|gym/i },
];

export function getRoomKind(name) {
  return ROOM_KINDS.find(({ pattern }) => pattern.test(name || ''))?.kind || 'home';
}

export function getRoomAccent(widget, name) {
  const key = Object.hasOwn(ROOM_ACCENTS, widget?.accent) ? widget.accent : null;
  if (key) return ROOM_ACCENTS[key].color;
  const seed = widget?.area_id || name || widget?.id || '';
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  return ROOM_ACCENTS[AUTO_ACCENT_KEYS[Math.abs(hash) % AUTO_ACCENT_KEYS.length]].color;
}

export function getRoomName(hass, widget) {
  if (widget.label) return widget.label;
  return hass?.areas?.[widget.area_id]?.name || widget.area_name || 'Raum';
}

function isRelevantForRoom(hass, entityId) {
  const domain = getDomain(entityId);
  if (!ROOM_DOMAINS.has(domain)) return false;
  const deviceClass = hass.states[entityId]?.attributes?.device_class;
  if (domain === 'sensor') return ROOM_SENSOR_CLASSES.has(deviceClass);
  if (domain === 'binary_sensor') return ROOM_BINARY_CLASSES.has(deviceClass);
  return true;
}

export function resolveAreaEntityIds(hass, areaId) {
  if (!areaId || !hass?.entities || !hass?.states) return [];
  return Object.entries(hass.entities)
    .filter(([entityId, entry]) => {
      if (!hass.states[entityId] || entry.hidden || entry.entity_category) return false;
      const entityArea = entry.area_id || hass.devices?.[entry.device_id]?.area_id;
      return entityArea === areaId && isRelevantForRoom(hass, entityId);
    })
    .map(([entityId]) => entityId);
}

export function resolveRoomEntityIds(hass, widget) {
  const ids = [...resolveAreaEntityIds(hass, widget.area_id), ...(widget.entity_ids || [])];
  const excluded = new Set(widget.disabled_entity_ids || []);
  return [...new Set(ids)]
    .filter((id) => !excluded.has(id))
    .sort((a, b) => DOMAIN_ORDER.indexOf(getDomain(a)) - DOMAIN_ORDER.indexOf(getDomain(b)));
}

function readNumber(value) {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) ? n : null;
}

function findSensorValue(hass, ids, deviceClass) {
  for (const id of ids) {
    const stateObj = hass.states[id];
    if (getDomain(id) === 'sensor' && stateObj?.attributes?.device_class === deviceClass) {
      const value = readNumber(stateObj.state);
      if (value != null) return value;
    }
  }
  return null;
}

function isContactOpen(stateObj) {
  return stateObj?.state === 'on'
    && ['window', 'door', 'opening', 'garage_door'].includes(stateObj.attributes?.device_class);
}

export function getRoomSummary(hass, entityIds) {
  const states = hass?.states || {};
  const lights = entityIds.filter((id) => getDomain(id) === 'light');
  const covers = entityIds.filter((id) => getDomain(id) === 'cover');
  const climate = entityIds.find((id) => getDomain(id) === 'climate');
  const media = entityIds.find((id) => getDomain(id) === 'media_player');
  const climateAttrs = climate ? states[climate]?.attributes || {} : {};

  const temperature = findSensorValue(hass, entityIds, 'temperature')
    ?? readNumber(climateAttrs.current_temperature);
  const humidity = findSensorValue(hass, entityIds, 'humidity')
    ?? readNumber(climateAttrs.current_humidity);

  const openCovers = covers.filter((id) => getCoverPositionPercent(hass, id) > 0);
  const coverPosition = covers.length
    ? Math.round(covers.reduce((sum, id) => sum + getCoverPositionPercent(hass, id), 0) / covers.length)
    : null;

  return {
    temperature,
    humidity,
    lightsOn: lights.filter((id) => states[id]?.state === 'on').length,
    lightsTotal: lights.length,
    lights,
    openContacts: entityIds.filter((id) => isContactOpen(states[id])).length,
    motion: entityIds.some((id) => (
      states[id]?.state === 'on'
      && ['motion', 'occupancy', 'presence'].includes(states[id]?.attributes?.device_class)
    )),
    coversTotal: covers.length,
    coversOpen: openCovers.length,
    coverPosition,
    climate,
    climateTarget: readNumber(climateAttrs.temperature),
    climateActive: climate ? isEntityOn(states[climate]?.state, 'climate') : false,
    media,
    mediaPlaying: media ? states[media]?.state === 'playing' : false,
  };
}

export function formatRoomNumber(value, digits = 1) {
  if (value == null) return '';
  return value.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: digits });
}

export function describeRoomSummary(summary) {
  const parts = [];
  if (summary.lightsTotal) {
    parts.push(summary.lightsOn
      ? `${summary.lightsOn} ${summary.lightsOn === 1 ? 'Licht' : 'Lichter'} an`
      : 'Licht aus');
  }
  if (summary.openContacts) {
    parts.push(`${summary.openContacts} ${summary.openContacts === 1 ? 'Fenster/Tür' : 'Fenster/Türen'} offen`);
  }
  if (summary.coversTotal) {
    parts.push(summary.coversOpen ? `Rollläden ${summary.coverPosition} %` : 'Rollläden zu');
  }
  if (summary.mediaPlaying) parts.push('Musik läuft');
  if (summary.motion) parts.push('Bewegung');
  return parts;
}

export function getRoomTileModel(hass, entityId) {
  const entity = getEntity(hass, entityId);
  const domain = getDomain(entityId);
  const { state, attributes } = entity;
  const unavailable = state === 'unavailable' || state === 'unknown';

  const model = {
    entityId,
    entity,
    domain,
    name: entity.name,
    unavailable,
    active: isEntityOn(state, domain),
    wide: false,
    value: '',
    unit: '',
    detail: '',
  };

  if (domain === 'light') {
    model.brightness = getBrightnessPercent(hass, entityId);
    model.detail = model.active ? `${model.brightness} %` : 'Aus';
  } else if (['switch', 'fan', 'input_boolean'].includes(domain)) {
    model.detail = model.active ? 'An' : 'Aus';
  } else if (domain === 'cover') {
    const position = getCoverPositionPercent(hass, entityId);
    model.wide = true;
    model.active = position > 0;
    model.value = String(position);
    model.unit = '%';
    model.detail = state === 'opening' ? 'Öffnet …' : state === 'closing' ? 'Schließt …' : (position > 0 ? 'Offen' : 'Geschlossen');
  } else if (domain === 'climate') {
    model.wide = true;
    model.value = formatRoomNumber(readNumber(attributes.current_temperature));
    model.unit = '°';
    model.target = readNumber(attributes.temperature);
    model.step = readNumber(attributes.target_temp_step) || 0.5;
    model.detail = model.target != null ? `Ziel ${formatRoomNumber(model.target)}°` : (model.active ? 'An' : 'Aus');
  } else if (domain === 'media_player') {
    model.wide = true;
    model.active = state === 'playing';
    model.detail = attributes.media_title
      ? [attributes.media_title, attributes.media_artist].filter(Boolean).join(' · ')
      : (state === 'playing' ? 'Spielt' : state === 'paused' ? 'Pausiert' : 'Aus');
  } else if (domain === 'sensor') {
    const value = readNumber(state);
    model.value = value != null ? formatRoomNumber(value) : state;
    model.unit = attributes.unit_of_measurement || '';
  } else if (domain === 'binary_sensor') {
    const deviceClass = attributes.device_class;
    if (['motion', 'occupancy', 'presence'].includes(deviceClass)) {
      model.detail = model.active ? 'Bewegung' : 'Ruhig';
    } else {
      model.detail = model.active ? 'Offen' : 'Geschlossen';
    }
  } else if (domain === 'lock') {
    model.active = state === 'unlocked';
    model.detail = state === 'locked' ? 'Verriegelt' : state === 'unlocked' ? 'Offen' : state;
  } else if (domain === 'scene' || domain === 'script') {
    model.active = false;
    model.detail = domain === 'scene' ? 'Szene' : 'Skript';
  } else if (domain === 'vacuum') {
    model.active = ['cleaning', 'returning'].includes(state);
    model.detail = attributes.status || state;
  }

  if (unavailable) model.detail = 'Nicht verfügbar';
  return model;
}
