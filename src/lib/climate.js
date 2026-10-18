import { getEntityPicture } from './hass';

const PRESET_META = {
  none: { label: 'Normal', icon: 'home' },
  home: { label: 'Zuhause', icon: 'home' },
  comfort: { label: 'Komfort', icon: 'home' },
  normal: { label: 'Normal', icon: 'home' },
  eco: { label: 'Eco', icon: 'leaf' },
  economy: { label: 'Eco', icon: 'leaf' },
  sleep: { label: 'Nacht', icon: 'moon' },
  night: { label: 'Nacht', icon: 'moon' },
  nacht: { label: 'Nacht', icon: 'moon' },
  away: { label: 'Abwesend', icon: 'luggage' },
  not_home: { label: 'Abwesend', icon: 'luggage' },
  abwesend: { label: 'Abwesend', icon: 'luggage' },
  boost: { label: 'Boost', icon: 'flame' },
  activity: { label: 'Aktiv', icon: 'flame' },
};

const HVAC_META = {
  heat: { label: 'Heizen', icon: 'flame' },
  cool: { label: 'Kühlen', icon: 'snowflake' },
  heat_cool: { label: 'Auto', icon: 'thermometer' },
  auto: { label: 'Auto', icon: 'thermometer' },
  dry: { label: 'Trocken', icon: 'droplet' },
  fan_only: { label: 'Lüften', icon: 'fan' },
  off: { label: 'Aus', icon: 'power' },
};

const STATUS_META = {
  heating: { label: 'Heizt', icon: 'flame', tone: 'heat' },
  preheating: { label: 'Vorheizen', icon: 'flame', tone: 'heat' },
  cooling: { label: 'Kühlt', icon: 'snowflake', tone: 'cool' },
  drying: { label: 'Trocknet', icon: 'droplet', tone: 'dry' },
  defrosting: { label: 'Abtauen', icon: 'snowflake', tone: 'cool' },
  fan: { label: 'Lüftet', icon: 'fan', tone: 'fan' },
  idle: { label: 'Bereit', icon: 'thermometer', tone: 'idle' },
  off: { label: 'Aus', icon: 'power', tone: 'off' },
};

export function readNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value.replace(',', '.'));
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

export function formatTemp(value) {
  const number = readNumber(value);
  if (number == null) return '—';
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(number);
}

export function snapTemperature(value, min, max, step) {
  const safeStep = step > 0 ? step : 0.5;
  const safeMin = Number.isFinite(min) ? min : 5;
  const safeMax = Number.isFinite(max) && max > safeMin ? max : safeMin + safeStep;
  const steps = Math.round((value - safeMin) / safeStep);
  const digits = (String(safeStep).split('.')[1] || '').length;
  const snapped = Number((safeMin + steps * safeStep).toFixed(Math.min(4, digits || 0)));
  return Math.min(safeMax, Math.max(safeMin, snapped));
}

function humanize(id) {
  return String(id || '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function splitClimateName(name) {
  const text = String(name || '').trim();
  const prefix = text.match(/^(Heizung|Thermostat|Klimaanlage|Klima)\s+(.+)$/i);
  if (prefix) return { title: prefix[2], subtitle: subtitleFromWord(prefix[1]) };
  const suffix = text.match(/^(.+?)\s+(Heizung|Thermostat|Klimaanlage|Klima)$/i);
  if (suffix) return { title: suffix[1], subtitle: subtitleFromWord(suffix[2]) };
  return { title: text || 'Thermostat', subtitle: '' };
}

function subtitleFromWord(word) {
  const value = String(word || '').toLowerCase();
  if (value.startsWith('klima')) return 'Klima';
  if (value === 'thermostat') return 'Thermostat';
  return 'Heizung';
}

function defaultSubtitle(tone) {
  if (tone === 'cool') return 'Klima';
  if (tone === 'dry') return 'Entfeuchten';
  if (tone === 'fan') return 'Lüftung';
  return 'Heizung';
}

function parseClock(value) {
  if (value == null || value === '') return null;
  if (typeof value === 'number' && Number.isFinite(value)) {
    if (value > 24 * 60) {
      const date = new Date(value);
      if (!Number.isNaN(date.getTime())) return date.getHours() * 60 + date.getMinutes();
    }
    if (value <= 24) return Math.round(value * 60);
    return Math.round(value);
  }
  const text = String(value).trim();
  const clock = text.match(/^(\d{1,2}):(\d{2})/);
  if (clock && text.length <= 8) {
    return Math.min(24 * 60, Number(clock[1]) * 60 + Number(clock[2]));
  }
  const date = new Date(text);
  if (!Number.isNaN(date.getTime())) return date.getHours() * 60 + date.getMinutes();
  return null;
}

function parseDate(value) {
  if (value == null || value === '') return null;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
  if (typeof value === 'number' && value > 24 * 60) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  const text = String(value).trim();
  if (/^\d{1,2}:\d{2}/.test(text) && text.length <= 8) {
    const minutes = parseClock(text);
    if (minutes == null) return null;
    const date = new Date();
    date.setSeconds(0, 0);
    date.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
    if (date.getTime() <= Date.now()) date.setDate(date.getDate() + 1);
    return date;
  }
  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatNextChange(date) {
  if (!date) return null;
  const time = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit' }).format(date);
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  let day = new Intl.DateTimeFormat('de-DE', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
  if (date.toDateString() === now.toDateString()) day = 'Heute';
  else if (date.toDateString() === tomorrow.toDateString()) day = 'Morgen';
  return { day, time, until: `Bis ${time}` };
}

function asList(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function readSegments(attributes) {
  const raw = attributes.schedule || attributes.schedule_periods || attributes.today_schedule;
  return asList(raw).map((item) => {
    if (!item || typeof item !== 'object') return null;
    const start = parseClock(item.start ?? item.from ?? item.start_time);
    const end = parseClock(item.end ?? item.to ?? item.end_time);
    if (start == null || end == null || end <= start) return null;
    return { start, end };
  }).filter(Boolean);
}

function readSchedule(attributes) {
  const segments = readSegments(attributes);
  const next = parseDate(attributes.next_change ?? attributes.next_change_time ?? attributes.next_schedule);
  if (!segments.length && !next) return null;
  const earliest = segments.reduce((min, segment) => Math.min(min, segment.start), 24 * 60);
  const startHour = earliest < 6 * 60 ? 0 : 6;
  const endHour = 24;
  const ticks = [];
  const span = endHour - startHour;
  for (let index = 0; index < 4; index += 1) {
    ticks.push(startHour + Math.round((span * index) / 3));
  }
  return {
    segments,
    startHour,
    endHour,
    ticks,
    next: formatNextChange(next),
  };
}

function readPresetTemperatures(attributes) {
  const raw = attributes.preset_temperatures || attributes.preset_temps;
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
  return Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, readNumber(value)]),
  );
}

function meaningfulPresets(modes) {
  const list = (Array.isArray(modes) ? modes : []).filter((mode) => mode && mode !== 'null');
  if (!list.some((mode) => mode !== 'none')) return [];
  return list;
}

function resolveTone({ state, action, hvacModes }) {
  if (action === 'cooling' || action === 'defrosting' || state === 'cool') return 'cool';
  if (action === 'drying' || state === 'dry') return 'dry';
  if (action === 'fan' || state === 'fan_only') return 'fan';
  if (state === 'off' || action === 'off') return 'off';
  if (action === 'heating' || action === 'preheating' || state === 'heat') return 'heat';
  const modes = hvacModes || [];
  if (modes.includes('cool') && !modes.includes('heat')) return 'cool';
  return 'heat';
}

function resolveStatus({ state, action, tone }) {
  if (state === 'unavailable') return { label: 'Offline', icon: 'power', tone: 'off' };
  if (STATUS_META[action]) return STATUS_META[action];
  if (state === 'unknown') return { label: 'Unbekannt', icon: 'thermometer', tone: 'idle' };
  if (state === 'off') return STATUS_META.off;
  if (tone === 'cool') return { label: 'Kühlt', icon: 'snowflake', tone: 'cool' };
  if (tone === 'dry') return STATUS_META.drying;
  if (tone === 'fan') return STATUS_META.fan;
  if (tone === 'off') return STATUS_META.off;
  return STATUS_META.heating;
}

function buildModes({ attributes, modeKind, activePreset, activeHvac, temperatures }) {
  const presets = meaningfulPresets(attributes.preset_modes);
  const hvacModes = (Array.isArray(attributes.hvac_modes) ? attributes.hvac_modes : []).filter(Boolean);
  let kind = modeKind === 'preset' || modeKind === 'hvac' ? modeKind : 'auto';
  if (kind === 'auto') kind = presets.length ? 'preset' : 'hvac';
  if (kind === 'preset' && !presets.length) kind = 'hvac';

  const source = kind === 'preset' ? presets : hvacModes;
  const meta = kind === 'preset' ? PRESET_META : HVAC_META;
  const activeId = kind === 'preset' ? (activePreset || 'none') : activeHvac;

  const modes = source.map((id) => {
    const info = meta[id] || { label: humanize(id), icon: 'thermometer' };
    const temperature = kind === 'preset' ? temperatures[id] : null;
    return {
      id,
      kind,
      label: info.label,
      icon: info.icon,
      temperature,
      active: id === activeId,
      detail: temperature != null ? `${formatTemp(temperature)}°` : '',
    };
  });

  if (kind === 'hvac') {
    modes.sort((a, b) => Number(a.id === 'off') - Number(b.id === 'off'));
  }
  return { modes, modeKind: kind, activeModeId: activeId || '' };
}

export function readClimate(hass, widget = {}) {
  const entityId = widget.entity_id || '';
  const entity = entityId ? hass?.states?.[entityId] : null;
  const attributes = entity?.attributes || {};
  const sensorState = widget.temperature_entity ? hass?.states?.[widget.temperature_entity]?.state : null;
  const state = entity?.state || '';
  const hvacModes = Array.isArray(attributes.hvac_modes) ? attributes.hvac_modes : [];
  const action = attributes.hvac_action || '';
  const tone = resolveTone({ state, action, hvacModes });
  const named = splitClimateName(attributes.friendly_name);
  const single = readNumber(attributes.temperature);
  const low = readNumber(attributes.target_temp_low);
  const high = readNumber(attributes.target_temp_high);
  const range = (state === 'heat_cool' || (single == null && low != null && high != null)) && low != null && high != null;
  const schedule = readSchedule(attributes);
  const temperatures = readPresetTemperatures(attributes);
  const modeInfo = buildModes({
    attributes,
    modeKind: widget.modeKind,
    activePreset: attributes.preset_mode,
    activeHvac: state,
    temperatures,
  });

  return {
    entityId,
    missing: Boolean(entityId) && !entity,
    state,
    locked: state === 'unavailable',
    title: widget.label?.trim() || named.title,
    subtitle: widget.subtitle?.trim() || named.subtitle || defaultSubtitle(tone),
    current: readNumber(attributes.current_temperature) ?? readNumber(sensorState),
    target: range ? low : (single ?? low ?? high),
    targetHigh: range ? high : null,
    range,
    min: readNumber(attributes.min_temp) ?? 5,
    max: readNumber(attributes.max_temp) ?? 30,
    step: readNumber(attributes.target_temp_step) || 0.5,
    tone: tone === 'idle' ? 'heat' : tone,
    status: resolveStatus({ state, action, tone }),
    image: widget.image?.trim() || (entityId ? getEntityPicture(hass, entityId) : '') || '',
    schedule,
    ...modeInfo,
  };
}

export function sliderBounds(model, low, high) {
  const min = model.min;
  const max = model.max;
  if (!model.range || high == null || low == null) {
    return { min, max, value: low ?? min };
  }
  const span = Math.max(model.step, high - low);
  return {
    min,
    max: Math.max(min, max - span),
    value: low,
    span,
  };
}

export function temperaturesFromSlider(model, sliderValue, currentHigh) {
  const low = snapTemperature(sliderValue, model.min, model.max, model.step);
  if (!model.range) return { low, high: null };
  const span = Math.max(model.step, (currentHigh ?? low) - (model.target ?? low));
  const nextLow = snapTemperature(sliderValue, model.min, model.max - span, model.step);
  const nextHigh = snapTemperature(nextLow + span, model.min, model.max, model.step);
  return { low: nextLow, high: nextHigh };
}
