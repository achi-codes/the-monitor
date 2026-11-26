import { getDomain } from './entities';
import { getRoomKind, getRoomSummary, resolveRoomEntityIds } from './roomWidget';

export const ROOMS_OVERVIEW_ID = '__overview__';
export const RAIL_LIMIT = 6;

export const CARD_DOMAINS = [
  'light', 'climate', 'media_player', 'cover', 'binary_sensor', 'sensor',
  'switch', 'fan', 'input_boolean', 'lock', 'vacuum',
];

export const ROOM_FILTERS = [
  { id: 'fav', label: 'Favoriten' },
  { id: 'light', label: 'Licht' },
  { id: 'climate', label: 'Klima' },
  { id: 'media', label: 'Medien' },
  { id: 'devices', label: 'Geräte' },
  { id: 'all', label: 'Alle' },
];

const HEADER_SENSOR_CLASSES = new Set(['temperature', 'humidity']);

const CATEGORY_BY_DOMAIN = {
  light: 'light',
  climate: 'climate',
  sensor: 'climate',
  binary_sensor: 'climate',
  media_player: 'media',
  cover: 'devices',
  switch: 'devices',
  fan: 'devices',
  input_boolean: 'devices',
  lock: 'devices',
  vacuum: 'devices',
};

const CARD_KIND_BY_DOMAIN = {
  light: 'light',
  climate: 'climate',
  media_player: 'media',
  cover: 'cover',
  binary_sensor: 'contact',
  sensor: 'sensor',
  switch: 'toggle',
  fan: 'toggle',
  input_boolean: 'toggle',
  lock: 'toggle',
  vacuum: 'toggle',
};

/** The widgets a room shows as tiles: its own tile list, else its grid widgets in reading order. */
export function getRoomTiles(room) {
  if (Array.isArray(room?.tiles)) return room.tiles;
  return (room?.layout?.pages || []).flatMap((page) => [...(page.widgets || [])]
    .sort((a, b) => (a.y - b.y) || (a.x - b.x)));
}

export function presetLabel(preset) {
  return ROOM_FILTERS.find((item) => item.id === preset)?.label || '';
}

export function createSubpage({ preset = null, name = '', tiles = [] } = {}) {
  return {
    id: `sp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    name: name || presetLabel(preset) || 'Unterseite',
    icon: preset || 'all',
    preset,
    hidden: [],
    devices: [],
    tiles,
  };
}

/**
 * The dock tabs of a room. Stored ones win; otherwise rooms get the device
 * presets (their tiles on "Favoriten") and pages one "Start" tab with their tiles.
 */
export function getRoomSubpages(room) {
  if (Array.isArray(room?.subpages) && room.subpages.length) return room.subpages;
  const tiles = getRoomTiles(room);
  if (room?.areaId) {
    return ROOM_FILTERS.map((item) => ({
      id: `sp-${item.id}`,
      name: item.label,
      icon: item.id,
      preset: item.id,
      hidden: [],
      devices: [],
      tiles: item.id === 'fav' ? tiles : [],
    }));
  }
  return [{ id: 'sp-start', name: 'Start', icon: 'home', preset: null, hidden: [], devices: [], tiles }];
}

/** Device cards and tiles of one sub page. */
export function getSubpageContent(hass, config, room, subpage) {
  const cardIds = getCardEntityIds(hass, room.entityIds);
  const favorites = getFavorites(config, room, cardIds);
  const auto = subpage.preset ? filterCardIds(cardIds, subpage.preset, favorites) : [];
  const hidden = new Set(subpage.hidden);
  const picked = subpage.devices.filter((id) => hass?.states?.[id]);
  const deviceIds = [...new Set([...auto.filter((id) => !hidden.has(id)), ...picked])];
  return { deviceIds, autoIds: auto, favorites, tiles: subpage.tiles };
}

export function normalizeRailRoomIds(raw, rooms = []) {
  if (!Array.isArray(raw)) return null;
  const known = new Set(rooms.map((room) => room.id));
  return [...new Set(raw.filter((id) => known.has(id)))].slice(0, RAIL_LIMIT);
}

/** Pinned rooms in config order; without a stored choice the first six. */
export function getRailRoomIds(config) {
  const rooms = config.rooms || [];
  if (!Array.isArray(config.railRoomIds)) return rooms.slice(0, RAIL_LIMIT).map((room) => room.id);
  const pinned = new Set(config.railRoomIds);
  return rooms.filter((room) => pinned.has(room.id)).map((room) => room.id).slice(0, RAIL_LIMIT);
}

/** Every configured room or page, with its HA devices and tiles resolved. */
export function buildModeRooms(hass, config) {
  return (config.rooms || []).map((room) => {
    const entityIds = room.areaId ? resolveRoomEntityIds(hass, { area_id: room.areaId }) : [];
    const summary = getRoomSummary(hass, entityIds);
    return {
      id: room.id,
      name: room.name,
      areaId: room.areaId || '',
      isPage: !room.areaId,
      kind: room.areaId ? getRoomKind(room.name) : 'page',
      entityIds,
      subpages: getRoomSubpages(room),
      summary,
      alert: getRoomAlert(summary),
    };
  });
}

export function getRoomAlert(summary) {
  if (summary.openContacts) {
    return summary.openContacts === 1 ? 'Fenster/Tür offen' : `${summary.openContacts} Fenster/Türen offen`;
  }
  if (summary.humidity != null && summary.humidity >= 65) return 'Luftfeuchte hoch';
  if (summary.carbonDioxide != null && summary.carbonDioxide >= 1000) return 'Lüften empfohlen';
  return '';
}

/** Entities that get their own card (header sensors and scenes are shown elsewhere). */
export function getCardEntityIds(hass, entityIds) {
  return entityIds.filter((id) => {
    const domain = getDomain(id);
    if (!CARD_KIND_BY_DOMAIN[domain]) return false;
    if (domain === 'sensor') {
      return !HEADER_SENSOR_CLASSES.has(hass?.states?.[id]?.attributes?.device_class);
    }
    return true;
  });
}

export function getCardKind(entityId) {
  return CARD_KIND_BY_DOMAIN[getDomain(entityId)] || 'toggle';
}

export function getSceneIds(entityIds) {
  return entityIds.filter((id) => ['scene', 'script'].includes(getDomain(id)));
}

/** Default favourites: the first entity of each main kind, at most four. */
export function defaultFavorites(cardIds) {
  const picked = [];
  ['light', 'climate', 'media_player', 'cover', 'binary_sensor', 'switch'].forEach((domain) => {
    const id = cardIds.find((candidate) => getDomain(candidate) === domain);
    if (id && picked.length < 4) picked.push(id);
  });
  return picked;
}

export function getFavorites(config, room, cardIds) {
  const stored = config.roomFavorites?.[room.id];
  if (Array.isArray(stored)) return stored.filter((id) => cardIds.includes(id));
  return defaultFavorites(cardIds);
}

export function filterCardIds(cardIds, filter, favorites) {
  if (filter === 'all') return cardIds;
  if (filter === 'fav') return cardIds.filter((id) => favorites.includes(id));
  return cardIds.filter((id) => CATEGORY_BY_DOMAIN[getDomain(id)] === filter);
}

export function normalizeRoomFavorites(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
  return Object.fromEntries(Object.entries(raw)
    .filter(([key, ids]) => key && Array.isArray(ids))
    .map(([key, ids]) => [key, ids.filter((id) => typeof id === 'string')]));
}

/**
 * Packs tiles into strip columns: tall tiles (3+ rows) fill a column,
 * smaller ones stack two to a column.
 */
export function packTileColumns(tiles) {
  const columns = [];
  let pending = null;
  tiles.forEach((tile) => {
    if ((tile.h || 1) >= 3) {
      columns.push({ id: tile.id, tiles: [tile], tall: true });
      return;
    }
    if (pending) {
      pending.tiles.push(tile);
      pending = null;
      return;
    }
    pending = { id: tile.id, tiles: [tile], tall: false };
    columns.push(pending);
  });
  return columns;
}

export function tileColumnWidth(column) {
  const cols = Math.max(...column.tiles.map((tile) => tile.w || 3));
  return Math.min(720, Math.max(260, cols * 105));
}
