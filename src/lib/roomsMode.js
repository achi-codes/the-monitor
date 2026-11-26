import { getDomain } from './entities';
import { getRoomKind, getRoomSummary, resolveRoomEntityIds } from './roomWidget';

export const ROOMS_OVERVIEW_ID = '__overview__';

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

/**
 * Rooms shown in the rooms mode. Configured rooms linked to an HA area win;
 * without any, every HA area that has at least one usable entity is listed.
 */
export function buildModeRooms(hass, config) {
  const linked = (config.rooms || []).filter((room) => room.areaId);
  const source = linked.length
    ? linked.map((room) => ({ id: room.areaId, name: room.name, areaId: room.areaId }))
    : Object.values(hass?.areas || {}).map((area) => ({ id: area.area_id, name: area.name, areaId: area.area_id }));

  return source
    .map((room) => {
      const entityIds = resolveRoomEntityIds(hass, { area_id: room.areaId });
      return { ...room, kind: getRoomKind(room.name), entityIds };
    })
    .filter((room) => room.entityIds.length > 0);
}

export function getRoomAlert(summary) {
  if (summary.openContacts) {
    return summary.openContacts === 1 ? 'Fenster/Tür offen' : `${summary.openContacts} Fenster/Türen offen`;
  }
  if (summary.humidity != null && summary.humidity >= 65) return 'Luftfeuchte hoch';
  if (summary.carbonDioxide != null && summary.carbonDioxide >= 1000) return 'Lüften empfohlen';
  return '';
}

export function describeRoom(hass, room) {
  const summary = getRoomSummary(hass, room.entityIds);
  return { ...room, summary, alert: getRoomAlert(summary) };
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
  const stored = config.roomFavorites?.[room.areaId];
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
