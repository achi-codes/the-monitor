import { getEntityAreaName, getFriendlyName } from './entities';

export const MAX_MEDIA_DEVICES = 6;

const SUPPORT_SEEK = 2;
const SUPPORT_VOLUME_SET = 4;
const SUPPORT_PREVIOUS_TRACK = 16;
const SUPPORT_NEXT_TRACK = 32;
const SUPPORT_TURN_ON = 128;
const SUPPORT_TURN_OFF = 256;

export function getMediaDeviceIds(widget) {
  const ids = widget?.entity_ids?.length
    ? widget.entity_ids
    : (widget?.entity_id ? [widget.entity_id] : []);
  return [...new Set(ids.filter(Boolean))].slice(0, MAX_MEDIA_DEVICES);
}

export function getMediaDeviceLabel(hass, widget, entityId) {
  return widget?.device_names?.[entityId]?.trim()
    || getEntityAreaName(hass, entityId)
    || getFriendlyName(hass, entityId);
}

export function mediaSupports(attributes, feature) {
  const features = attributes?.supported_features;
  if (typeof features !== 'number') return true;
  return Boolean(features & feature);
}

export const MEDIA_FEATURES = {
  seek: SUPPORT_SEEK,
  volume: SUPPORT_VOLUME_SET,
  previous: SUPPORT_PREVIOUS_TRACK,
  next: SUPPORT_NEXT_TRACK,
  power: SUPPORT_TURN_ON | SUPPORT_TURN_OFF,
};

export function getLivePosition(attributes, isPlaying, now = Date.now()) {
  const position = attributes?.media_position;
  const duration = attributes?.media_duration;
  if (typeof position !== 'number' || typeof duration !== 'number' || duration <= 0) return null;
  let current = position;
  const updatedAt = Date.parse(attributes.media_position_updated_at || '');
  if (isPlaying && Number.isFinite(updatedAt)) current += (now - updatedAt) / 1000;
  return { position: Math.min(duration, Math.max(0, current)), duration };
}

export function formatMediaTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const total = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = String(total % 60).padStart(2, '0');
  return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${secs}` : `${minutes}:${secs}`;
}
