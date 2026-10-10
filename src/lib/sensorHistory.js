import { getDomain, getEntity } from './entities';
import { getHassAccessToken, getHassBaseUrl, isMockHass } from './hass';

export const SENSOR_HISTORY_HOURS = [6, 24, 48, 168];

function stateToNumber(state, domain) {
  if (domain === 'binary_sensor') {
    if (state === 'on' || state === 'open' || state === 'detected') return 1;
    if (state === 'off' || state === 'closed' || state === 'clear') return 0;
    return null;
  }
  const num = Number(state);
  return Number.isFinite(num) ? num : null;
}

export function canShowSensorHistory(hass, entityId) {
  const entity = getEntity(hass, entityId);
  if (entity.state === 'unavailable' || entity.state === 'unknown') return false;
  return stateToNumber(entity.state, entity.domain) != null;
}

function historyTimestamp(entry) {
  if (entry.lu != null) return entry.lu * 1000;
  if (entry.lc != null) return entry.lc * 1000;
  const raw = entry.last_changed || entry.last_updated;
  if (!raw) return NaN;
  return new Date(raw).getTime();
}

export function parseHistoryStates(states, entityId) {
  const domain = getDomain(entityId);
  const points = [];

  (states || []).forEach((entry) => {
    const state = entry.s ?? entry.state;
    const value = stateToNumber(state, domain);
    if (value == null) return;
    const time = historyTimestamp(entry);
    if (!Number.isFinite(time)) return;
    points.push({ t: time, v: value });
  });

  points.sort((a, b) => a.t - b.t);
  return points;
}

function extractHistoryStates(result, entityId) {
  if (!result) return [];
  if (!Array.isArray(result)) {
    return result[entityId] || [];
  }
  return result[0] || [];
}

export function ensureHistoryPoints(points, hass, entityId, hours = 24) {
  if (points.length >= 2) return points;

  const entity = getEntity(hass, entityId);
  const domain = getDomain(entityId);
  const current = stateToNumber(entity.state, domain);
  if (current == null) return points;

  const now = Date.now();
  const span = hours * 60 * 60 * 1000;

  if (points.length === 1) {
    const only = points[0];
    return [
      { t: Math.min(only.t, now - span), v: only.v },
      { t: now, v: current },
    ];
  }

  return [
    { t: now - span, v: current },
    { t: now, v: current },
  ];
}

function buildMockHistory(hass, entityId, hours) {
  const entity = getEntity(hass, entityId);
  const domain = getDomain(entityId);
  const current = stateToNumber(entity.state, domain) ?? 20;
  const points = [];
  const end = Date.now();
  const span = hours * 60 * 60 * 1000;
  const steps = 36;
  let value = current;

  for (let i = 0; i <= steps; i += 1) {
    const t = end - span + (span / steps) * i;
    if (domain === 'binary_sensor') {
      value = Math.random() > 0.85 ? (value === 1 ? 0 : 1) : value;
    } else {
      value += (Math.random() - 0.5) * (Math.abs(current) * 0.08 + 0.5);
    }
    points.push({ t, v: value });
  }

  return points;
}

async function fetchViaWebSocket(hass, entityId, start, end) {
  const result = await hass.connection.sendMessagePromise({
    type: 'history/history_during_period',
    start_time: start.toISOString(),
    end_time: end.toISOString(),
    entity_ids: [entityId],
    include_start_time_state: true,
    minimal_response: true,
    no_attributes: true,
    significant_changes_only: false,
  });
  return parseHistoryStates(extractHistoryStates(result, entityId), entityId);
}

async function fetchViaRest(hass, entityId, start, end) {
  const token = getHassAccessToken(hass);
  const base = getHassBaseUrl(hass);
  if (!token || !base) return [];

  const params = new URLSearchParams({
    filter_entity_id: entityId,
    end_time: end.toISOString(),
    minimal_response: 'true',
  });
  const response = await fetch(
    `${base}/api/history/period/${encodeURIComponent(start.toISOString())}?${params}`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  if (!response.ok) return [];
  const data = await response.json();
  return parseHistoryStates(extractHistoryStates(data, entityId), entityId);
}

export async function fetchSensorHistory(hass, entityId, { hours = 24 } = {}) {
  if (!entityId || !hass) return [];

  const safeHours = SENSOR_HISTORY_HOURS.includes(hours) ? hours : 24;
  if (isMockHass(hass)) {
    return buildMockHistory(hass, entityId, safeHours);
  }

  const end = new Date();
  const start = new Date(end.getTime() - safeHours * 60 * 60 * 1000);

  try {
    let points = [];
    if (hass.connection?.sendMessagePromise) {
      points = await fetchViaWebSocket(hass, entityId, start, end);
    } else {
      points = await fetchViaRest(hass, entityId, start, end);
    }
    return ensureHistoryPoints(points, hass, entityId, safeHours);
  } catch (err) {
    console.warn('The Monitor: Sensor-Verlauf konnte nicht geladen werden', err);
    return ensureHistoryPoints([], hass, entityId, safeHours);
  }
}

export async function fetchSensorHistoryRange(hass, entityId, start, end) {
  if (!entityId || !hass) return [];
  try {
    if (hass.connection?.sendMessagePromise) return await fetchViaWebSocket(hass, entityId, start, end);
    return await fetchViaRest(hass, entityId, start, end);
  } catch (err) {
    console.warn('The Monitor: Sensor-Verlauf konnte nicht geladen werden', err);
    return [];
  }
}

export function normalizeSensorHistoryHours(value) {
  const hours = Number(value);
  return SENSOR_HISTORY_HOURS.includes(hours) ? hours : 24;
}
