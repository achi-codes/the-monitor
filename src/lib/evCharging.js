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

  const stateEntity = resolveEvStateEntity(config, null, false);
  const match = stateEntity?.match(/^sensor\.evcc_([^_]+)_/);
  if (match) {
    const candidate = `sensor.evcc_${match[1]}_charge_power`;
    if (hass?.states?.[candidate]) return candidate;
  }

  return '';
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
  if (kw >= 10) return `${kw.toFixed(1)} kW`;
  if (kw >= 1) return `${kw.toFixed(1)} kW`;
  return `${kw.toFixed(2)} kW`;
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
