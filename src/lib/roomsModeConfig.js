import { createWidget } from './layout';
import { createRoom, ROOM_LIMIT, TILE_LIMIT } from './rooms';
import { RAIL_LIMIT, getRailRoomIds, getRoomTiles } from './roomsMode';

// Pure config transforms for the rooms-mode configurator; use with setConfig(prev => …).

function mapRoom(config, roomId, fn) {
  return { ...config, rooms: config.rooms.map((room) => (room.id === roomId ? fn(room) : room)) };
}

function withTiles(config, roomId, fn) {
  return mapRoom(config, roomId, (room) => ({ ...room, tiles: fn([...getRoomTiles(room)]) }));
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

export function addTile(config, roomId, type) {
  return withTiles(config, roomId, (tiles) => (tiles.length >= TILE_LIMIT ? tiles : [...tiles, createWidget(type)]));
}

export function updateTile(config, roomId, tileId, patch) {
  return withTiles(config, roomId, (tiles) => tiles.map((tile) => (tile.id === tileId ? { ...tile, ...patch } : tile)));
}

export function removeTile(config, roomId, tileId) {
  return withTiles(config, roomId, (tiles) => tiles.filter((tile) => tile.id !== tileId));
}

export function moveTile(config, roomId, tileId, delta) {
  return withTiles(config, roomId, (tiles) => move(tiles, tiles.findIndex((tile) => tile.id === tileId), delta));
}
