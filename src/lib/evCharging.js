import { getDomain, isEntityOn } from './entities';

export function isChargingState(state, attributes = {}) {
  const normalized = String(state || '').toLowerCase();
  if (['charging', 'on', 'true'].includes(normalized)) return true;
  if (['not charging', 'idle', 'off', 'false', 'disconnected', 'complete', 'finished'].includes(normalized)) {
    return false;
  }
  const power = Number(
    attributes.power
    ?? attributes.power_kw
    ?? attributes.current_power
    ?? attributes.charging_power,
  );
  if (Number.isFinite(power) && power > 50) return true;
  return false;
}

export function resolveEvStateEntity(config, widgetDeviceImages, isMock = false) {
  const fromConfig = config?.ev?.stateEntity || '';
  if (fromConfig) return fromConfig;
  const fromWidget = widgetDeviceImages?.ev?.stateEntity || '';
  if (fromWidget) return fromWidget;
  if (isMock) return 'binary_sensor.grandland_charging';
  return '';
}

export function resolveEvBatteryEntity(config, isMock = false) {
  const fromConfig = config?.ev?.batteryEntity || '';
  if (fromConfig) return fromConfig;
  if (isMock) return 'sensor.grandland_battery';
  return '';
}

export function isEvTrackingConfigured(hass, config, widgetDeviceImages, isMock = false) {
  const stateEntity = resolveEvStateEntity(config, widgetDeviceImages, isMock);
  if (!stateEntity) return false;
  if (isMock) return true;
  return Boolean(hass?.states?.[stateEntity]);
}

export function resolveEvCharging(hass, stateEntity, demoFallback = false) {
  if (!stateEntity || !hass?.states?.[stateEntity]) return demoFallback;
  const stateObj = hass.states[stateEntity];
  const domain = getDomain(stateEntity);
  if (domain === 'binary_sensor') return stateObj.state === 'on';
  if (domain === 'switch' || domain === 'input_boolean') return isEntityOn(stateObj.state, domain);
  return isChargingState(stateObj.state, stateObj.attributes);
}

const POWER_ATTRIBUTE_KEYS = ['power', 'power_kw', 'current_power', 'charging_power', 'charge_power'];

function normalizePowerWatts(value, unit = '') {
  if (!Number.isFinite(value)) return null;
  const normalizedUnit = String(unit).toLowerCase();
  if (normalizedUnit === 'kw') return value * 1000;
  if (normalizedUnit === 'w' || normalizedUnit === 'watt') return value;
  if (!normalizedUnit && value > 0 && value <= 50) return value * 1000;
  return value;
}

function readPowerWattsFromState(stateObj) {
  if (!stateObj) return null;
  const fromState = normalizePowerWatts(
    Number(stateObj.state),
    stateObj.attributes?.unit_of_measurement,
  );
  if (fromState != null && fromState > 0) return fromState;

  for (const key of POWER_ATTRIBUTE_KEYS) {
    const watts = normalizePowerWatts(Number(stateObj.attributes?.[key]));
    if (watts != null && watts > 0) return watts;
  }
  return null;
}

export function resolveEvPowerEntity(hass, config, isMock = false) {
  const fromConfig = config?.ev?.powerEntity || '';
  if (fromConfig) return fromConfig;
  if (isMock) return 'sensor.grandland_charge_power';

  const label = (config?.ev?.label || '').trim().toLowerCase();
  if (label && hass?.states) {
    const byName = Object.values(hass.states).find((state) => {
      const name = String(state.attributes?.friendly_name || '').toLowerCase();
      return name.includes(label) && name.includes('ladeleistung');
    });
    if (byName) return byName.entity_id;
  }

  return findEvccEntity(hass, config, ['charge_power']);
}

const EVCC_SUFFIXES = [
  'charging', 'connected', 'enabled', 'charge_power', 'vehicle_soc', 'vehicle_range',
  'charge_remaining_duration', 'session_price', 'session_energy', 'charged_energy',
];
const EVCC_ENTITY_RE = new RegExp(`^(?:binary_)?sensor\\.evcc_(.+?)_(?:${EVCC_SUFFIXES.join('|')})$`);

export function getEvccLoadpoint(hass, config) {
  const ev = config?.ev || {};
  for (const entityId of [ev.stateEntity, ev.powerEntity, ev.batteryEntity, ev.rangeEntity]) {
    const match = String(entityId || '').match(EVCC_ENTITY_RE);
    if (match) return match[1];
  }
  if (!hass?.states) return '';
  const charging = Object.keys(hass.states).find((id) => /^binary_sensor\.evcc_.+_charging$/.test(id));
  return charging ? charging.slice('binary_sensor.evcc_'.length, -'_charging'.length) : '';
}

function findEvccEntity(hass, config, suffixes) {
  const loadpoint = getEvccLoadpoint(hass, config);
  if (!loadpoint || !hass?.states) return '';
  for (const suffix of suffixes) {
    const candidate = `sensor.evcc_${loadpoint}_${suffix}`;
    if (hass.states[candidate]) return candidate;
  }
  return '';
}

function readNumber(hass, entityId) {
  const stateObj = entityId ? hass?.states?.[entityId] : null;
  if (!stateObj) return null;
  const value = Number(stateObj.state);
  return Number.isFinite(value) ? value : null;
}

function readDurationSeconds(hass, entityId) {
  const stateObj = entityId ? hass?.states?.[entityId] : null;
  if (!stateObj) return null;
  const raw = String(stateObj.state ?? '');
  const clock = raw.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);
  if (clock) return Number(clock[1]) * 3600 + Number(clock[2]) * 60 + Number(clock[3] || 0);
  const value = Number(raw);
  if (!Number.isFinite(value)) return null;
  const unit = String(stateObj.attributes?.unit_of_measurement || 's').toLowerCase();
  if (unit === 'h') return value * 3600;
  if (unit === 'min') return value * 60;
  if (unit === 'd') return value * 86400;
  return value;
}

function readEnergyKwh(hass, entityId) {
  const value = readNumber(hass, entityId);
  if (value == null) return null;
  const unit = String(hass.states[entityId].attributes?.unit_of_measurement || 'kWh').toLowerCase();
  return unit === 'wh' ? value / 1000 : value;
}

export function getEvOverview(hass, config, isMock = false) {
  const ev = config?.ev || {};
  const mockId = (suffix) => (isMock ? `sensor.grandland_${suffix}` : '');
  const pick = (configured, evccSuffixes, mockSuffix) => (
    configured || findEvccEntity(hass, config, evccSuffixes) || mockId(mockSuffix)
  );

  const stateEntity = resolveEvStateEntity(config, null, isMock);
  const charging = resolveEvCharging(hass, stateEntity, isMock);
  const loadpoint = getEvccLoadpoint(hass, config);
  const connectedEntity = loadpoint ? `binary_sensor.evcc_${loadpoint}_connected` : '';
  const connected = hass?.states?.[connectedEntity]
    ? hass.states[connectedEntity].state === 'on'
    : null;

  let soc = getEvBatteryPercent(hass, resolveEvBatteryEntity(config, isMock), null);
  if (soc == null || soc <= 0) {
    const evccSoc = readNumber(hass, findEvccEntity(hass, config, ['vehicle_soc']));
    if (evccSoc != null && evccSoc > 0) soc = Math.min(100, Math.round(evccSoc));
  }

  const rangeKm = readNumber(hass, pick(ev.rangeEntity, ['vehicle_range'], 'range'));
  const limitSoc = readNumber(hass, findEvccEntity(hass, config, ['effective_limit_soc', 'limit_soc']));
  const powerWatts = getEvChargingPowerWatts(hass, config, isMock);
  const remainingSeconds = readDurationSeconds(
    hass,
    pick(ev.chargeTimeEntity, ['charge_remaining_duration'], 'charge_remaining'),
  );
  const costEntity = pick(ev.costEntity, ['session_price'], 'cost_today');

  return {
    label: ev.label || 'E-Auto',
    charging,
    connected,
    soc,
    rangeKm: rangeKm != null && rangeKm > 0 ? rangeKm : null,
    limitSoc: limitSoc != null && limitSoc > 0 ? Math.min(100, Math.round(limitSoc)) : 100,
    powerWatts: charging ? powerWatts : 0,
    remainingSeconds: charging && remainingSeconds > 0 ? remainingSeconds : null,
    lastTripKm: readNumber(hass, ev.lastTripEntity || mockId('last_trip')),
    cost: readNumber(hass, costEntity),
    costIsSession: !ev.costEntity && !isMock,
    sessionKwh: readEnergyKwh(hass, findEvccEntity(hass, config, ['session_energy', 'charged_energy'])),
  };
}

export function formatEvDuration(seconds) {
  if (seconds == null || !Number.isFinite(seconds)) return '—';
  const totalMinutes = Math.max(1, Math.round(seconds / 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (!hours) return `${minutes} min`;
  return minutes ? `${hours} h ${minutes} min` : `${hours} h`;
}

export function getEvChargingPowerWatts(hass, config, isMock = false) {
  const powerEntity = resolveEvPowerEntity(hass, config, isMock);
  if (powerEntity && hass?.states?.[powerEntity]) {
    const watts = readPowerWattsFromState(hass.states[powerEntity]);
    if (watts != null) return watts;
  }

  const stateEntity = resolveEvStateEntity(config, null, isMock);
  if (stateEntity && hass?.states?.[stateEntity]) {
    const watts = readPowerWattsFromState(hass.states[stateEntity]);
    if (watts != null) return watts;
  }

  return isMock ? 11000 : null;
}

export function formatEvChargingPower(watts) {
  if (watts == null || !Number.isFinite(watts) || watts <= 0) return '—';
  const kw = watts / 1000;
  return `${kw.toLocaleString('de-DE', { maximumFractionDigits: kw >= 1 ? 1 : 2 })} kW`;
}

export function getEvBatteryPercent(hass, batteryEntity, demoFallback = null) {
  if (!batteryEntity || !hass?.states?.[batteryEntity]) {
    return demoFallback;
  }
  const stateObj = hass.states[batteryEntity];
  const fromState = Number(stateObj.state);
  if (Number.isFinite(fromState)) {
    return Math.min(100, Math.max(0, Math.round(fromState)));
  }
  const fromAttr = Number(
    stateObj.attributes?.battery_level
    ?? stateObj.attributes?.state_of_charge
    ?? stateObj.attributes?.soc,
  );
  if (Number.isFinite(fromAttr)) {
    return Math.min(100, Math.max(0, Math.round(fromAttr)));
  }
  return demoFallback;
}

export function getEvChargingLabel(config, charging) {
  const name = config?.ev?.label || 'E-Auto';
  return charging ? `${name} lädt` : name;
}

export function getEvChargingSubtitle(config, batteryPercent, powerWatts = null) {
  const name = config?.ev?.label || 'Grandland';
  const parts = [`${name} wird geladen`];
  const powerLabel = formatEvChargingPower(powerWatts);
  if (powerLabel !== '—') parts.push(powerLabel);
  if (batteryPercent != null) parts.push(`Akku ${batteryPercent}%`);
  return parts.join(' · ');
}
