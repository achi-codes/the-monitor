import { createWidget } from './layout';
import { createRoom, ROOM_LIMIT, SUBPAGE_LIMIT, TILE_LIMIT } from './rooms';
import { RAIL_LIMIT, createSubpage, getRailRoomIds, getRoomSubpages } from './roomsMode';

// Pure config transforms for the rooms-mode configurator; use with setConfig(prev => …).

function mapRoom(config, roomId, fn) {
  return { ...config, rooms: config.rooms.map((room) => (room.id === roomId ? fn(room) : room)) };
}

function withSubpages(config, roomId, fn) {
  return mapRoom(config, roomId, (room) => ({ ...room, subpages: fn(getRoomSubpages(room).map((sub) => ({ ...sub }))) }));
}

function withSubpage(config, roomId, subId, fn) {
  return withSubpages(config, roomId, (subs) => subs.map((sub) => (sub.id === subId ? fn(sub) : sub)));
}

function withTiles(config, roomId, subId, fn) {
  return withSubpage(config, roomId, subId, (sub) => ({ ...sub, tiles: fn([...sub.tiles]) }));
}

function move(list, index, delta) {
  const target = index + delta;
  if (index < 0 || target < 0 || target >= list.length) return list;
  const next = [...list];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

export function addModeRoom(config, { name, areaId = '' }) {
  if (config.rooms.length >= ROOM_LIMIT) return config;
  if (areaId && config.rooms.some((room) => room.areaId === areaId)) return config;
  const room = createRoom(name, { areaId, tiles: [] });
  const pinned = getRailRoomIds(config);
  return {
    ...config,
    rooms: [...config.rooms, room],
    railRoomIds: pinned.length < RAIL_LIMIT ? [...pinned, room.id] : pinned,
  };
}

export function updateModeRoom(config, roomId, patch) {
  return mapRoom(config, roomId, (room) => ({ ...room, ...patch }));
}

export function removeModeRoom(config, roomId) {
  if (config.rooms.length <= 1) return config;
  const { [roomId]: _dropped, ...favorites } = config.roomFavorites || {};
  return {
    ...config,
    rooms: config.rooms.filter((room) => room.id !== roomId),
    railRoomIds: getRailRoomIds(config).filter((id) => id !== roomId),
    roomFavorites: favorites,
  };
}

export function moveModeRoom(config, roomId, delta) {
  const index = config.rooms.findIndex((room) => room.id === roomId);
  return { ...config, rooms: move(config.rooms, index, delta), railRoomIds: getRailRoomIds(config) };
}

export function toggleRailRoom(config, roomId) {
  const pinned = getRailRoomIds(config);
  if (pinned.includes(roomId)) return { ...config, railRoomIds: pinned.filter((id) => id !== roomId) };
  if (pinned.length >= RAIL_LIMIT) return config;
  return { ...config, railRoomIds: [...pinned, roomId] };
}

export function addSubpage(config, roomId, preset = null, subpage = createSubpage({ preset })) {
  return withSubpages(config, roomId, (subs) => (
    subs.length >= SUBPAGE_LIMIT ? subs : [...subs, subpage]
  ));
}

export function updateSubpage(config, roomId, subId, patch) {
  return withSubpage(config, roomId, subId, (sub) => ({ ...sub, ...patch }));
}

export function removeSubpage(config, roomId, subId) {
  return withSubpages(config, roomId, (subs) => (subs.length <= 1 ? subs : subs.filter((sub) => sub.id !== subId)));
}

export function moveSubpage(config, roomId, subId, delta) {
  return withSubpages(config, roomId, (subs) => move(subs, subs.findIndex((sub) => sub.id === subId), delta));
}

export function toggleHiddenDevice(config, roomId, subId, entityId) {
  return withSubpage(config, roomId, subId, (sub) => ({
    ...sub,
    hidden: sub.hidden.includes(entityId) ? sub.hidden.filter((id) => id !== entityId) : [...sub.hidden, entityId],
  }));
}

export function addSubpageDevice(config, roomId, subId, entityId) {
  return withSubpage(config, roomId, subId, (sub) => ({
    ...sub,
    devices: sub.devices.includes(entityId) ? sub.devices : [...sub.devices, entityId],
    hidden: sub.hidden.filter((id) => id !== entityId),
  }));
}

export function removeSubpageDevice(config, roomId, subId, entityId) {
  return withSubpage(config, roomId, subId, (sub) => ({ ...sub, devices: sub.devices.filter((id) => id !== entityId) }));
}

export function addTile(config, roomId, subId, type) {
  return withTiles(config, roomId, subId, (tiles) => (tiles.length >= TILE_LIMIT ? tiles : [...tiles, createWidget(type)]));
}

export function updateTile(config, roomId, subId, tileId, patch) {
  return withTiles(config, roomId, subId, (tiles) => tiles.map((tile) => (tile.id === tileId ? { ...tile, ...patch } : tile)));
}

export function removeTile(config, roomId, subId, tileId) {
  return withTiles(config, roomId, subId, (tiles) => tiles.filter((tile) => tile.id !== tileId));
}

export function moveTile(config, roomId, subId, tileId, delta) {
  return withTiles(config, roomId, subId, (tiles) => move(tiles, tiles.findIndex((tile) => tile.id === tileId), delta));
}

export function setItemOrder(config, roomId, subId, keys) {
  return withSubpage(config, roomId, subId, (sub) => ({ ...sub, order: keys }));
}

/** Removes a card: a tile is deleted, a picked device dropped, a preset device hidden. */
export function removeItem(config, roomId, subId, key) {
  return withSubpage(config, roomId, subId, (sub) => {
    const order = (sub.order || []).filter((k) => k !== key);
    if (key.startsWith('t:')) {
      const tileId = key.slice(2);
      return { ...sub, order, tiles: sub.tiles.filter((tile) => tile.id !== tileId) };
    }
    const entityId = key.slice(2);
    if (sub.devices.includes(entityId)) {
      return { ...sub, order, devices: sub.devices.filter((id) => id !== entityId) };
    }
    return { ...sub, order, hidden: [...new Set([...sub.hidden, entityId])] };
  });
}

export function setSubpageOrder(config, roomId, ids) {
  return withSubpages(config, roomId, (subs) => ids.map((id) => subs.find((sub) => sub.id === id)).filter(Boolean));
}

/**
 * Swaps the entity behind a device card in place: a picked device is replaced,
 * a preset device is hidden and the new one picked at the same position.
 */
export function replaceDevice(config, roomId, subId, oldId, newId, currentKeys = []) {
  if (!newId || newId === oldId) return config;
  return withSubpage(config, roomId, subId, (sub) => {
    const devices = sub.devices.includes(oldId)
      ? sub.devices.map((id) => (id === oldId ? newId : id))
      : [...sub.devices.filter((id) => id !== newId), newId];
    const hidden = sub.devices.includes(oldId) ? sub.hidden : [...new Set([...sub.hidden, oldId])];
    const baseOrder = sub.order?.length ? sub.order : currentKeys;
    const order = baseOrder
      .filter((key) => key !== `d:${newId}`)
      .map((key) => (key === `d:${oldId}` ? `d:${newId}` : key));
    const { [oldId]: oldLabel, ...labels } = sub.labels || {};
    const { [oldId]: oldGroup, ...groups } = sub.groups || {};
    const keptGroup = (oldGroup || []).filter((id) => id !== newId);
    return {
      ...sub,
      devices,
      hidden: hidden.filter((id) => id !== newId),
      order,
      labels: oldLabel ? { ...labels, [newId]: oldLabel } : labels,
      groups: keptGroup.length ? { ...groups, [newId]: keptGroup } : groups,
    };
  });
}

export function setDeviceLabel(config, roomId, subId, entityId, label) {
  return withSubpage(config, roomId, subId, (sub) => {
    const { [entityId]: _old, ...labels } = sub.labels || {};
    return { ...sub, labels: label.trim() ? { ...labels, [entityId]: label.trim() } : labels };
  });
}

/** Extra lamps sharing one light card (up to three besides the card's own). */
export function setDeviceGroup(config, roomId, subId, entityId, members) {
  return withSubpage(config, roomId, subId, (sub) => {
    const { [entityId]: _old, ...groups } = sub.groups || {};
    const next = [...new Set(members.filter((id) => id && id !== entityId))].slice(0, 3);
    return { ...sub, groups: next.length ? { ...groups, [entityId]: next } : groups };
  });
}

export function setDeviceSize(config, roomId, subId, entityId, size) {
  return withSubpage(config, roomId, subId, (sub) => ({
    ...sub,
    sizes: { ...(sub.sizes || {}), [entityId]: { w: size.w, h: size.h } },
  }));
}

export function setDeviceColors(config, roomId, subId, entityId, show) {
  return withSubpage(config, roomId, subId, (sub) => {
    const rest = (sub.noColors || []).filter((id) => id !== entityId);
    return { ...sub, noColors: show ? rest : [...rest, entityId] };
  });
}
