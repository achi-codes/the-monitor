import { getEntity } from './entities';

export const MAX_VACUUM_ZONES = 8;
export const VACUUM_ZONE_DOMAINS = ['script', 'button', 'input_button', 'scene', 'automation'];

const MOVING_STATES = new Set(['cleaning', 'returning']);
const BATTERY_SUFFIXES = ['_battery', '_batterie', '_battery_level', '_akku'];

export function getVacuumPhase(entity) {
  const { state } = entity;
  if (!entity.id || state === 'unavailable' || state === 'unknown') return 'offline';
  if (state === 'error') return 'error';
  if (state === 'cleaning') return 'cleaning';
  if (state === 'returning') return 'returning';
  if (state === 'paused') return 'paused';
  if (state === 'docked' || state === 'charging') return 'docked';
  return 'idle';
}

export function isVacuumMoving(phase) {
  return MOVING_STATES.has(phase);
}

export function getVacuumPhaseLabel(phase, battery) {
  switch (phase) {
    case 'cleaning': return 'Reinigt gerade';
    case 'returning': return 'Fährt zur Ladestation';
    case 'paused': return 'Pausiert';
    case 'docked': return battery != null && battery < 100 ? 'Lädt' : 'In der Ladestation';
    case 'error': return 'Fehler';
    case 'offline': return 'Nicht erreichbar';
    default: return 'Bereit';
  }
}

export function getVacuumTone(phase) {
  if (phase === 'cleaning') return 'active';
  if (phase === 'returning' || phase === 'paused') return 'warn';
  if (phase === 'error') return 'error';
  return 'idle';
}

function readNumber(value) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) ? number : null;
}

export function resolveVacuumBattery(hass, entity, batteryEntityId) {
  if (batteryEntityId) return readNumber(hass?.states?.[batteryEntityId]?.state);
  const attr = readNumber(entity.attributes?.battery_level);
  if (attr != null) return attr;
  const objectId = entity.id.split('.')[1];
  if (!objectId) return null;
  for (const suffix of BATTERY_SUFFIXES) {
    const value = readNumber(hass?.states?.[`sensor.${objectId}${suffix}`]?.state);
    if (value != null) return value;
  }
  return null;
}

export function resolveRemainingMinutes(hass, entityId) {
  if (!entityId) return null;
  const sensor = getEntity(hass, entityId);
  const value = readNumber(sensor.state);
  if (value == null || value < 0) return null;
  const unit = String(sensor.attributes?.unit_of_measurement || 'min').toLowerCase();
  if (unit === 's') return Math.round(value / 60);
  if (unit === 'h') return Math.round(value * 60);
  if (unit === 'd') return Math.round(value * 1440);
  return Math.round(value);
}

export function formatVacuumMinutes(minutes) {
  if (minutes < 60) return `${minutes} Min.`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} Std. ${rest} Min.` : `${hours} Std.`;
}

export function normalizeVacuumZones(zones) {
  if (!Array.isArray(zones)) return [];
  return zones
    .filter((zone) => zone && typeof zone.entity_id === 'string' && zone.entity_id)
    .slice(0, MAX_VACUUM_ZONES)
    .map((zone) => ({
      entity_id: zone.entity_id,
      name: typeof zone.name === 'string' ? zone.name : '',
    }));
}

export function getZoneLabel(hass, zone) {
  if (zone.name) return zone.name;
  const name = hass?.states?.[zone.entity_id]?.attributes?.friendly_name || zone.entity_id;
  return name.replace(/^(saugen|staubsaugen|reinigen|vacuum|clean)\s+/i, '');
}
