import { getDomain } from './entities';
import { getRoomKind, getRoomSummary, resolveRoomEntityIds } from './roomWidget';

export const ROOMS_OVERVIEW_ID = '__overview__';
export const RAIL_LIMIT = 6;

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
      tiles: getRoomTiles(room),
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

/** Tiles show with favourites and under "Alle"; the type filters only list devices. */
export function tilesVisible(filter) {
  return filter === 'fav' || filter === 'all';
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
