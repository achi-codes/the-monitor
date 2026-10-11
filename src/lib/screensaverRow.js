import { resolveHassUrl } from './hass';
import { formatSensorValue } from './sensorFormat';

export const SCREENSAVER_ROW_LIMIT = 4;

export const SCREENSAVER_ROW_KINDS = [
  { id: 'weather', label: 'Wetter', once: true },
  { id: 'media', label: 'Musik', once: false },
  { id: 'people', label: 'Anwesenheit', once: true },
  { id: 'entity', label: 'Sensor', once: false },
];

const KIND_IDS = new Set(SCREENSAVER_ROW_KINDS.map((kind) => kind.id));

let rowCounter = 0;

export function createScreensaverRowId() {
  rowCounter += 1;
  return `ssx-${Date.now().toString(36)}-${rowCounter}`;
}

export function createScreensaverRowItem(kind = 'entity', extra = {}) {
  return {
    id: createScreensaverRowId(),
    kind,
    entity_id: '',
    label: '',
    ...extra,
  };
}

export function normalizeScreensaverRow(raw) {
  if (!Array.isArray(raw)) return [];
  const used = new Set();
  return raw
    .filter((item) => item && KIND_IDS.has(item.kind))
    .slice(0, SCREENSAVER_ROW_LIMIT)
    .map((item) => {
      let id = typeof item.id === 'string' ? item.id.trim() : '';
      if (!id || used.has(id)) id = createScreensaverRowId();
      used.add(id);
      return {
        id,
        kind: item.kind,
        entity_id: typeof item.entity_id === 'string' ? item.entity_id : '',
        label: typeof item.label === 'string' ? item.label : '',
      };
    });
}

function formatTemp(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return num.toLocaleString('de-DE', { maximumFractionDigits: 1 });
}

function roomWidgets(room) {
  return (room?.layout?.pages || []).flatMap((page) => page.widgets || []);
}

function widgetEntityIds(widget) {
  const ids = [];
  if (widget?.entity_id) ids.push(widget.entity_id);
  (widget?.entity_ids || []).forEach((id) => {
    if (id) ids.push(id);
  });
  return ids;
}

function resolveMediaId(config, room, overrideId = '') {
  if (overrideId) return overrideId;
  const mediaWidget = roomWidgets(room).find((widget) => widget.type === 'media' && widget.entity_id);
  return mediaWidget?.entity_id || config.mediaPlayer?.entity_id || '';
}

function weatherTile(config, getEntity) {
  if (!config.screensaver?.showWeather || !config.weather?.entity_id) return null;
  const entity = getEntity(config.weather.entity_id);
  if (!entity.state || entity.state === 'unavailable' || entity.attributes?.temperature == null) return null;
  return { kind: 'weather', entity };
}

function mediaTile(entityId, getEntity, { requireContent = true } = {}) {
  if (!entityId) return null;
  const entity = getEntity(entityId);
  const title = entity.attributes?.media_title;
  const artist = entity.attributes?.media_artist;
  const active = entity.state === 'playing' || entity.state === 'paused';
  if (requireContent && !active && !title && !artist) return null;
  if (entity.state === 'unavailable' && !title && !artist) return null;
  return { kind: 'media', entity, entityId };
}

function peopleTile(config, getEntity, hass) {
  const people = (config.presence || [])
    .map((person) => {
      const entity = getEntity(person.entity_id);
      if (!person.entity_id || entity.state === 'unavailable') return null;
      return {
        id: person.entity_id,
        name: person.label || entity.name,
        home: entity.state === 'home',
        picture: resolveHassUrl(hass, entity.attributes?.entity_picture),
      };
    })
    .filter(Boolean);
  if (!people.length) return null;
  return { kind: 'people', people };
}

function findAmbience(widgets, getEntity, config) {
  for (const widget of widgets) {
    if (widget.type !== 'sensor') continue;
    const ids = widget.entity_ids?.length
      ? widget.entity_ids
      : (widget.entity_id ? [widget.entity_id] : []);
    for (const id of ids) {
      const entity = getEntity(id);
      const deviceClass = entity.attributes?.device_class;
      if (!['temperature', 'humidity', 'illuminance'].includes(deviceClass)) continue;
      if (entity.state === 'unavailable' || entity.state === 'unknown') continue;
      return {
        kind: 'stat',
        kicker: widget.label || entity.name,
        entityId: id,
      };
    }
  }

  for (const widget of widgets) {
    for (const id of widgetEntityIds(widget)) {
      if (!id.startsWith('climate.')) continue;
      const entity = getEntity(id);
      const temp = formatTemp(entity.attributes?.current_temperature);
      if (!temp) continue;
      return {
        kind: 'stat',
        kicker: widget.label || entity.name,
        entityId: id,
        value: temp,
        unit: '°',
        detail: 'Raumklima',
      };
    }
  }

  const batteryId = config.ev?.batteryEntity;
  if (batteryId) {
    const entity = getEntity(batteryId);
    if (entity.state !== 'unavailable' && entity.state !== 'unknown') {
      const charging = config.ev.stateEntity ? getEntity(config.ev.stateEntity) : null;
      return {
        kind: 'stat',
        kicker: config.ev.label || entity.name,
        entityId: batteryId,
        detail: charging?.state === 'on' ? 'Lädt' : 'Akku',
        powerEntityId: charging?.state === 'on' ? config.ev.powerEntity : '',
      };
    }
  }

  return null;
}

function entityStat(item, getEntity) {
  const entity = getEntity(item.entity_id);
  const kicker = item.label?.trim() || entity.name || item.entity_id;
  if (entity.domain === 'climate') {
    const temp = formatTemp(entity.attributes?.current_temperature);
    return {
      kind: 'stat',
      kicker,
      entityId: item.entity_id,
      value: temp || '—',
      unit: temp ? '°' : '',
      detail: 'Raumklima',
    };
  }
  return {
    kind: 'stat',
    kicker,
    entityId: item.entity_id,
  };
}

function buildAutoTiles({ config, room, hass, getEntity }) {
  const widgets = roomWidgets(room);
  const tiles = [];

  const weather = weatherTile(config, getEntity);
  if (weather) tiles.push(weather);

  const media = mediaTile(resolveMediaId(config, room), getEntity);
  if (media) tiles.push(media);

  const people = peopleTile(config, getEntity, hass);
  if (people) tiles.push(people);

  const ambience = findAmbience(widgets, getEntity, config);
  if (ambience) tiles.push(ambience);

  return tiles.slice(0, SCREENSAVER_ROW_LIMIT);
}

function buildCustomTiles({ config, room, hass, getEntity }) {
  const tiles = [];
  const seen = new Set();

  (config.screensaver?.row || []).forEach((item) => {
    let tile = null;
    if (item.kind === 'weather') tile = weatherTile(config, getEntity);
    if (item.kind === 'media') {
      tile = mediaTile(resolveMediaId(config, room, item.entity_id), getEntity, { requireContent: false });
    }
    if (item.kind === 'people') tile = peopleTile(config, getEntity, hass);
    if (item.kind === 'entity' && item.entity_id) tile = entityStat(item, getEntity);
    if (!tile) return;

    const dedupeKey = `${tile.kind}:${tile.entityId || ''}`;
    if (seen.has(dedupeKey)) return;
    seen.add(dedupeKey);
    tiles.push({ ...tile, key: item.id });
  });

  return tiles.slice(0, SCREENSAVER_ROW_LIMIT);
}

export function buildScreensaverTiles(args) {
  if (args.config?.screensaver?.rowMode === 'custom') return buildCustomTiles(args);
  return buildAutoTiles(args);
}

export function suggestScreensaverRow({ config, room, getEntity }) {
  return buildAutoTiles({ config, room, getEntity }).map((tile) => {
    if (tile.kind === 'weather') return createScreensaverRowItem('weather');
    if (tile.kind === 'media') {
      return createScreensaverRowItem('media', { entity_id: tile.entityId || '' });
    }
    if (tile.kind === 'people') return createScreensaverRowItem('people');
    return createScreensaverRowItem('entity', {
      entity_id: tile.entityId || '',
      label: tile.kicker || '',
    });
  });
}

export function screensaverStatReading(tile, hass) {
  let value = tile.value;
  let unit = tile.unit || '';
  let detail = tile.detail || '';

  if (tile.entityId && value == null) {
    const reading = formatSensorValue(hass, tile.entityId);
    value = reading.value;
    unit = reading.unit || '';
  }

  if (tile.powerEntityId) {
    const power = formatSensorValue(hass, tile.powerEntityId);
    if (power.value && power.value !== '—') {
      detail = `${power.value}${power.unit ? ` ${power.unit}` : ''}`;
    }
  }

  return { value, unit, detail };
}
