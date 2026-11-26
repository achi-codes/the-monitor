import { getEntity } from './entities';
import { formatVacuumMinutes, resolveRemainingMinutes } from './vacuumStatus';

// Washer, dryer, dishwasher …: one picked entity, sibling sensors found on the same HA device.

const PATTERNS = {
  progress: /progress|fortschritt/i,
  remaining: /remaining|restzeit|rest_zeit|time_left|verbleibend|finish|end_time|fertig_um/i,
  program: /program|programm/i,
};

const RUNNING_STATES = new Set([
  'run', 'running', 'on', 'active', 'washing', 'drying', 'rinsing', 'spinning', 'cleaning', 'läuft', 'in_betrieb', 'inbetrieb',
]);
const FINISHED_STATES = new Set(['finished', 'finish', 'done', 'end', 'fertig', 'beendet', 'complete', 'completed']);
const OFF_STATES = new Set(['off', 'aus', 'unavailable', 'unknown', 'inactive', 'ready', 'bereit', 'idle', 'standby']);

function deviceSiblings(hass, entityId) {
  const deviceId = hass?.entities?.[entityId]?.device_id;
  if (!deviceId) return [];
  return Object.entries(hass.entities || {})
    .filter(([id, entry]) => entry.device_id === deviceId && id !== entityId && hass.states?.[id])
    .map(([id]) => id);
}

function findSibling(hass, ids, pattern, accept = () => true) {
  return ids.find((id) => {
    const name = `${id} ${hass.states[id]?.attributes?.friendly_name || ''}`;
    return pattern.test(name) && accept(id);
  }) || '';
}

function readNumber(value) {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) ? n : null;
}

function remainingMinutes(hass, entityId, now) {
  if (!entityId) return null;
  const entity = getEntity(hass, entityId);
  const isTime = entity.attributes.device_class === 'timestamp' || /^\d{4}-\d{2}-\d{2}T/.test(entity.state || '');
  if (isTime) {
    const end = Date.parse(entity.state);
    if (!Number.isFinite(end)) return null;
    return Math.max(0, Math.round((end - now) / 60000));
  }
  return resolveRemainingMinutes(hass, entityId);
}

function prettifyProgram(value) {
  if (!value || ['unknown', 'unavailable', 'none', ''].includes(String(value).toLowerCase())) return '';
  const last = String(value).split('.').pop();
  return last.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
}

export function resolveApplianceEntities(hass, widget) {
  const main = widget.entity_id || '';
  const siblings = main ? deviceSiblings(hass, main) : [];
  const isPercent = (id) => /%/.test(hass.states[id]?.attributes?.unit_of_measurement || '');
  return {
    main,
    progress: widget.progress_entity
      || (main && isPercent(main) ? main : findSibling(hass, siblings, PATTERNS.progress, isPercent)),
    remaining: widget.remaining_entity || findSibling(hass, siblings, PATTERNS.remaining),
    program: widget.program_entity || findSibling(hass, siblings, PATTERNS.program),
  };
}

export function readAppliance(hass, widget, now = Date.now()) {
  const ids = resolveApplianceEntities(hass, widget);
  const main = ids.main ? getEntity(hass, ids.main) : null;
  const state = String(main?.state || '').toLowerCase().replace(/\s+/g, '_');
  const progress = ids.progress ? readNumber(getEntity(hass, ids.progress).state) : null;
  const remaining = remainingMinutes(hass, ids.remaining, now);
  const program = ids.program ? prettifyProgram(getEntity(hass, ids.program).state) : '';

  let phase = 'idle';
  if (FINISHED_STATES.has(state) || (progress != null && progress >= 100)) phase = 'done';
  else if (RUNNING_STATES.has(state) || (progress != null && progress > 0) || (remaining != null && remaining > 0 && !OFF_STATES.has(state))) phase = 'running';

  const name = widget.label?.trim()
    || (main?.attributes?.friendly_name || '').replace(/\s+(status|betriebszustand|operation state|zustand)$/i, '')
    || 'Gerät';

  return {
    name,
    phase,
    progress: progress != null ? Math.min(100, Math.max(0, Math.round(progress))) : null,
    remaining,
    remainingLabel: remaining != null && phase === 'running' ? `${formatVacuumMinutes(remaining)} übrig` : '',
    program,
    statusLabel: { running: 'Läuft', done: 'Fertig', idle: main ? 'Bereit' : 'Nicht eingerichtet' }[phase],
  };
}
