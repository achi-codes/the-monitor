import { buildLayoutFromPreset } from './layoutPresets';
import { createDefaultLayout, layoutHasWidgetEntities, normalizeLayout } from './layout';

export const ROOM_LIMIT = 12;
export const TILE_LIMIT = 24;
export const SUBPAGE_LIMIT = 8;
export const SUBPAGE_PRESETS = ['fav', 'light', 'climate', 'media', 'devices', 'all'];
export const SUBPAGE_ICONS = ['fav', 'light', 'climate', 'media', 'devices', 'all', 'energy', 'security', 'camera', 'scenes', 'home'];
export const ACTIVE_ROOM_KEY = 'the-monitor-active-room';

export function createRoomId() {
  return `room-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

export function createRoom(name, {
  areaId = '', layout = null, layoutPreset = 'classic', tiles = null,
} = {}) {
  return {
    id: createRoomId(),
    name: (name || 'Raum').trim() || 'Raum',
    areaId: areaId || '',
    layoutPreset,
    layout: layout || buildLayoutFromPreset(layoutPreset),
    tiles,
    subpages: null,
  };
}

function stringList(raw) {
  return Array.isArray(raw) ? [...new Set(raw.filter((id) => typeof id === 'string' && id))] : [];
}

/** Sub pages of a room (the dock tabs): a device preset and/or picked devices plus tiles. */
export function normalizeSubpages(rawSubpages) {
  if (!Array.isArray(rawSubpages) || !rawSubpages.length) return null;
  return rawSubpages
    .filter((sub) => sub && typeof sub === 'object')
    .slice(0, SUBPAGE_LIMIT)
    .map((sub, index) => {
      const preset = SUBPAGE_PRESETS.includes(sub.preset) ? sub.preset : null;
      return {
        id: typeof sub.id === 'string' && sub.id ? sub.id : `sp-${Date.now().toString(36)}-${index}`,
        name: typeof sub.name === 'string' && sub.name.trim() ? sub.name : 'Unterseite',
        icon: SUBPAGE_ICONS.includes(sub.icon) ? sub.icon : (preset || 'all'),
        preset,
        hidden: stringList(sub.hidden),
        devices: stringList(sub.devices),
        order: stringList(sub.order),
        groups: sub.groups && typeof sub.groups === 'object' && !Array.isArray(sub.groups)
          ? Object.fromEntries(Object.entries(sub.groups)
            .map(([id, members]) => [id, stringList(members).filter((m) => m !== id).slice(0, 3)])
            .filter(([id, members]) => id && members.length))
          : {},
        labels: sub.labels && typeof sub.labels === 'object' && !Array.isArray(sub.labels)
          ? Object.fromEntries(Object.entries(sub.labels).filter(([id, label]) => id && typeof label === 'string' && label.trim()))
          : {},
        tiles: normalizeTiles(sub.tiles) || [],
      };
    });
}

/** Tiles of the rooms mode: one widget list in display order, no grid positions. */
export function normalizeTiles(rawTiles) {
  if (!Array.isArray(rawTiles)) return null;
  return rawTiles
    .filter((tile) => tile && typeof tile.type === 'string')
    .slice(0, TILE_LIMIT)
    .map((tile) => normalizeLayout({ pages: [{ widgets: [tile] }] }).pages[0].widgets[0]);
}

export function normalizeRoom(raw = {}) {
  const layoutPreset = raw.layoutPreset || 'classic';
  const layout = raw.layout?.pages?.length
    ? normalizeLayout(raw.layout)
    : buildLayoutFromPreset(layoutPreset);

  return {
    id: raw.id || createRoomId(),
    name: (raw.name || 'Raum').trim() || 'Raum',
    areaId: raw.areaId || '',
    layoutPreset,
    layout,
    tiles: normalizeTiles(raw.tiles),
    subpages: normalizeSubpages(raw.subpages),
  };
}

export function normalizeRooms(rawRooms) {
  if (!Array.isArray(rawRooms) || !rawRooms.length) {
    return [createRoom('Zuhause')];
  }
  return rawRooms.slice(0, ROOM_LIMIT).map(normalizeRoom);
}

export function migrateConfigToRooms(config, raw = {}) {
  if (Array.isArray(raw.rooms) && raw.rooms.length) {
    return normalizeRooms(raw.rooms);
  }

  const layout = config.layout?.pages?.length
    ? config.layout
    : buildLayoutFromPreset(config.layoutPreset || 'classic');

  return [createRoom('Zuhause', {
    layout,
    layoutPreset: config.layoutPreset || 'classic',
  })];
}

export function getRoomById(rooms, roomId) {
  return rooms?.find((room) => room.id === roomId) || rooms?.[0] || null;
}

export function loadActiveRoomId(rooms) {
  try {
    const stored = localStorage.getItem(ACTIVE_ROOM_KEY);
    if (stored && rooms?.some((room) => room.id === stored)) return stored;
  } catch {
    // ignore
  }
  return rooms?.[0]?.id || '';
}

export function saveActiveRoomId(roomId) {
  try {
    if (roomId) localStorage.setItem(ACTIVE_ROOM_KEY, roomId);
  } catch {
    // ignore
  }
}

export function configHasWidgetEntities(config) {
  return config.rooms?.some((room) => layoutHasWidgetEntities(room.layout));
}

export function findWeatherEntityInRooms(rooms) {
  for (const room of rooms || []) {
    const widget = room.layout?.pages
      ?.flatMap((page) => page.widgets)
      ?.find((w) => w.type === 'weather' && w.entity_id);
    if (widget?.entity_id) return widget.entity_id;
  }
  return '';
}

export function layoutHasEntities(rooms) {
  return rooms?.some((room) => room.layout?.pages?.some((page) => (
    page.widgets?.some((w) => w.entity_id || w.entity_ids?.length)
  )));
}
