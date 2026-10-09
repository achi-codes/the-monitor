const CORE_CARDS = [
  { type: 'tile', name: 'Kachel' },
  { type: 'entities', name: 'Entitäten' },
  { type: 'entity', name: 'Entität' },
  { type: 'button', name: 'Schaltfläche' },
  { type: 'light', name: 'Licht' },
  { type: 'thermostat', name: 'Thermostat' },
  { type: 'climate', name: 'Klima' },
  { type: 'media-control', name: 'Mediensteuerung' },
  { type: 'weather-forecast', name: 'Wetter' },
  { type: 'gauge', name: 'Gauge' },
  { type: 'sensor', name: 'Sensor' },
  { type: 'statistic', name: 'Statistik' },
  { type: 'history-graph', name: 'Verlaufsdiagramm' },
  { type: 'statistics-graph', name: 'Statistikdiagramm' },
  { type: 'humidifier', name: 'Luftbefeuchter' },
  { type: 'humidifier-card', name: 'Luftbefeuchter' },
  { type: 'alarm-panel', name: 'Alarmanlage' },
  { type: 'lock', name: 'Schloss' },
  { type: 'cover', name: 'Abdeckung' },
  { type: 'fan', name: 'Lüfter' },
  { type: 'vacuum', name: 'Staubsauger' },
  { type: 'plant-status', name: 'Pflanzenstatus' },
  { type: 'calendar', name: 'Kalender' },
  { type: 'map', name: 'Karte' },
  { type: 'markdown', name: 'Markdown' },
  { type: 'iframe', name: 'Webseite' },
  { type: 'picture', name: 'Bild' },
  { type: 'picture-entity', name: 'Bild-Entität' },
  { type: 'picture-glance', name: 'Bild-Glance' },
  { type: 'glance', name: 'Glance' },
  { type: 'area', name: 'Bereich' },
  { type: 'heading', name: 'Überschrift' },
  { type: 'grid', name: 'Raster' },
  { type: 'horizontal-stack', name: 'Horizontaler Stapel' },
  { type: 'vertical-stack', name: 'Vertikaler Stapel' },
  { type: 'conditional', name: 'Bedingt' },
  { type: 'entity-filter', name: 'Entitätsfilter' },
  { type: 'logbook', name: 'Logbuch' },
  { type: 'todo-list', name: 'To-do-Liste' },
  { type: 'energy-distribution', name: 'Energieverteilung' },
  { type: 'energy-date-selection', name: 'Energiedatum' },
];

const DOMAIN_CARD = {
  light: 'tile',
  switch: 'tile',
  input_boolean: 'tile',
  fan: 'tile',
  cover: 'tile',
  lock: 'tile',
  binary_sensor: 'tile',
  sensor: 'tile',
  person: 'tile',
  device_tracker: 'tile',
  scene: 'tile',
  script: 'tile',
  button: 'tile',
  input_button: 'tile',
  climate: 'thermostat',
  weather: 'weather-forecast',
  media_player: 'media-control',
  camera: 'picture-entity',
  alarm_control_panel: 'alarm-panel',
  vacuum: 'vacuum',
  humidifier: 'humidifier',
  plant: 'plant-status',
  calendar: 'calendar',
  todo: 'todo-list',
};

const HIDDEN_DOMAINS = new Set([
  'zone',
  'sun',
  'persistent_notification',
  'tts',
  'conversation',
  'stt',
  'ai_task',
  'update',
]);

function customType(type) {
  const value = String(type || '').trim();
  if (!value) return '';
  return value.startsWith('custom:') ? value : `custom:${value}`;
}

export function listCardTypes() {
  const core = CORE_CARDS.map((card) => ({
    id: `core:${card.type}`,
    type: card.type,
    name: card.name,
    group: 'Home Assistant',
  }));

  const seen = new Set(core.map((card) => card.type));
  const custom = (typeof window !== 'undefined' && Array.isArray(window.customCards)
    ? window.customCards
    : []
  )
    .map((entry) => {
      const type = customType(entry?.type);
      if (!type || seen.has(type)) return null;
      seen.add(type);
      return {
        id: `custom:${type}`,
        type,
        name: entry.name || type.replace(/^custom:/, ''),
        description: entry.description || '',
        group: 'Community',
      };
    })
    .filter(Boolean)
    .sort((left, right) => left.name.localeCompare(right.name, 'de'));

  return [...core, ...custom];
}

export function stubCardForType(type) {
  const normalized = String(type || '').trim();
  if (!normalized) return null;
  if (normalized === 'markdown') {
    return { type: 'markdown', content: '## Text' };
  }
  if (normalized === 'heading') {
    return { type: 'heading', heading: 'Überschrift' };
  }
  if (normalized === 'entities') {
    return { type: 'entities', entities: [] };
  }
  if (normalized === 'vertical-stack' || normalized === 'horizontal-stack' || normalized === 'grid') {
    return { type: normalized, cards: [] };
  }
  if (normalized === 'conditional') {
    return { type: 'conditional', conditions: [], card: { type: 'tile' } };
  }
  return { type: normalized };
}

export function stubCardForEntity(entityId, hass) {
  const id = String(entityId || '').trim();
  if (!id || !id.includes('.')) return null;
  const domain = id.split('.')[0];
  const type = DOMAIN_CARD[domain] || 'tile';
  if (type === 'weather-forecast') {
    return { type, entity: id, forecast_type: 'daily' };
  }
  if (type === 'entities') {
    return { type, entities: [id] };
  }
  if (type === 'picture-entity') {
    return { type, entity: id };
  }
  const name = hass?.states?.[id]?.attributes?.friendly_name;
  return name ? { type, entity: id, name } : { type, entity: id };
}

export function listSelectableEntities(hass, { query = '', limit = 120 } = {}) {
  const states = hass?.states || {};
  const needle = String(query || '').trim().toLowerCase();
  const rows = [];

  Object.keys(states).forEach((entityId) => {
    const domain = entityId.split('.')[0];
    if (HIDDEN_DOMAINS.has(domain)) return;
    const state = states[entityId];
    const name = state?.attributes?.friendly_name || entityId;
    const haystack = `${name} ${entityId} ${domain}`.toLowerCase();
    if (needle && !haystack.includes(needle)) return;
    rows.push({
      id: entityId,
      entityId,
      name,
      domain,
      label: name === entityId ? entityId : `${name}`,
      detail: entityId,
    });
  });

  rows.sort((left, right) => {
    if (needle) {
      const leftStarts = left.name.toLowerCase().startsWith(needle) ? 0 : 1;
      const rightStarts = right.name.toLowerCase().startsWith(needle) ? 0 : 1;
      if (leftStarts !== rightStarts) return leftStarts - rightStarts;
    }
    return left.name.localeCompare(right.name, 'de');
  });

  return {
    total: rows.length,
    items: rows.slice(0, limit),
  };
}
