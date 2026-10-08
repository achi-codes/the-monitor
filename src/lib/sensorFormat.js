import { getDomain, getEntity } from './entities';

const BINARY_LABELS = {
  on: 'An',
  off: 'Aus',
  open: 'Offen',
  closed: 'Geschlossen',
  home: 'Zuhause',
  not_home: 'Abwesend',
  detected: 'Erkannt',
  clear: 'Frei',
  wet: 'Nass',
  dry: 'Trocken',
  moving: 'Bewegung',
  plugged_in: 'Angeschlossen',
  unplugged: 'Getrennt',
  locked: 'Gesperrt',
  unlocked: 'Offen',
};

function formatNumber(value, decimals = 1) {
  const num = Number(value);
  if (!Number.isFinite(num)) return value;
  return num.toLocaleString('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
}

function inferDecimals(deviceClass, unit) {
  if (deviceClass === 'temperature' || unit === '°C' || unit === '°F') return 1;
  if (deviceClass === 'humidity' || unit === '%') return 0;
  if (deviceClass === 'power' || deviceClass === 'energy' || deviceClass === 'voltage') return 1;
  if (deviceClass === 'illuminance') return 0;
  return 1;
}

export function formatSensorValue(hass, entityId) {
  const entity = getEntity(hass, entityId);
  const { state, attributes, domain } = entity;
  const unit = attributes.unit_of_measurement || '';
  const deviceClass = attributes.device_class || '';

  if (state === 'unavailable' || state === 'unknown') {
    return { value: '—', unit: '', stateLabel: 'Nicht verfügbar' };
  }

  if (domain === 'binary_sensor') {
    const label = BINARY_LABELS[state] || state;
    return { value: label, unit: '', stateLabel: '' };
  }

  if (domain === 'sensor') {
    const num = Number(state);
    if (Number.isFinite(num)) {
      const decimals = inferDecimals(deviceClass, unit);
      return {
        value: formatNumber(num, decimals),
        unit,
        stateLabel: '',
      };
    }
    return { value: state, unit, stateLabel: '' };
  }

  return { value: state, unit, stateLabel: '' };
}

export function formatHistoryPointValue(value, entity) {
  const { domain, attributes } = entity;
  const unit = attributes.unit_of_measurement || '';
  const deviceClass = attributes.device_class || '';

  if (domain === 'binary_sensor') {
    return value >= 0.5 ? 'An' : 'Aus';
  }

  const num = Number(value);
  if (!Number.isFinite(num)) return String(value);
  return formatNumber(num, inferDecimals(deviceClass, unit));
}

export function resolveSensorEntityIds(widget) {
  if (widget.entity_ids?.length) return widget.entity_ids.filter(Boolean);
  if (widget.entity_id) return [widget.entity_id];
  return [];
}
