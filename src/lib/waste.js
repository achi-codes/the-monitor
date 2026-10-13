import { addDays, differenceInCalendarDays, format, isValid, parseISO, startOfDay } from 'date-fns';
import { de } from 'date-fns/locale';
import { fetchCalendarEvents } from './today';

export const WASTE_TYPES = {
  rest: { id: 'rest', label: 'Restmüll', color: '#3a3a3c', lid: '#1f1f21', kind: 'bin' },
  bio: { id: 'bio', label: 'Bioabfall', color: '#8b6b3d', lid: '#6b4a28', kind: 'bin' },
  paper: { id: 'paper', label: 'Papier', color: '#2f6db5', lid: '#1e4d86', kind: 'bin' },
  yellow: { id: 'yellow', label: 'Gelbe Tonne', color: '#e6c234', lid: '#c9a41c', kind: 'bin' },
  glass: { id: 'glass', label: 'Glas', color: '#2f8a58', lid: '#1f6140', kind: 'bin' },
  bulk: { id: 'bulk', label: 'Sperrmüll', color: '#7b5ea7', lid: '#5a427d', kind: 'bin' },
};

const TYPE_ORDER = ['yellow', 'paper', 'rest', 'bio', 'glass', 'bulk'];

const TYPE_MATCHERS = [
  ['yellow', /gelb|wertstoff|plastik|dual|gruenpunkt|grünpunkt|verpack/i],
  ['paper', /papier|pappe|altpapier|blau/i],
  ['bio', /bio|braun|garten|kompost|organic/i],
  ['glass', /glas/i],
  ['bulk', /sperr/i],
  ['rest', /rest|hausmüll|hausmuell|grau|gray|grey|general/i],
];

const WASTE_HINT = /müll|muell|abfall|waste|garbage|trash|restmüll|biomüll|papier|gelb|wertstoff|gelber|sperrmüll|glas|zke/i;

export function classifyWasteType(name = '', entityId = '') {
  const hay = `${name} ${entityId}`;
  const match = TYPE_MATCHERS.find(([, pattern]) => pattern.test(hay));
  return match?.[0] || 'rest';
}

export function isWasteEntity(entityId, entity) {
  const hay = `${entityId} ${entity?.attributes?.friendly_name || entity?.name || ''}`;
  return WASTE_HINT.test(hay);
}

function parseFlexibleDate(value, now = new Date()) {
  if (!value && value !== 0) return null;
  if (value instanceof Date) return isValid(value) ? startOfDay(value) : null;
  if (typeof value === 'number' && Number.isFinite(value)) {
    if (value >= 0 && value < 400) return startOfDay(addDays(now, value));
    const fromEpoch = new Date(value);
    return isValid(fromEpoch) ? startOfDay(fromEpoch) : null;
  }
  const raw = String(value).trim();
  if (!raw || raw === 'unknown' || raw === 'unavailable') return null;
  if (/^\d+$/.test(raw)) return startOfDay(addDays(now, Number(raw)));
  if (/^\d{2}\.\d{2}\.\d{4}/.test(raw)) {
    const [day, month, year] = raw.split(/[.\s]/).map(Number);
    const date = new Date(year, month - 1, day);
    return isValid(date) ? startOfDay(date) : null;
  }
  if (/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}/.test(raw)) {
    const parsed = new Date(raw.replace(' ', 'T'));
    return isValid(parsed) ? startOfDay(parsed) : null;
  }
  const iso = parseISO(raw);
  if (isValid(iso)) return startOfDay(iso);
  const parsed = new Date(raw);
  return isValid(parsed) ? startOfDay(parsed) : null;
}

function firstDefined(...values) {
  return values.find((value) => value != null && value !== '');
}

export function parseWasteCalendarState(entity, now = new Date()) {
  if (!entity) return null;
  const attrs = entity.attributes || {};
  const name = String(attrs.message || '').trim();
  const date = parseFlexibleDate(firstDefined(attrs.start_time, attrs.start, attrs.next_date), now);
  if (!date || !name) return null;
  const days = differenceInCalendarDays(date, startOfDay(now));
  if (days < 0 || days > 90) return null;
  const type = classifyWasteType(name, entity.entity_id || entity.id || '');
  return {
    id: `${entity.entity_id || entity.id || type}:${date.toISOString()}`,
    type,
    name,
    date,
    days,
  };
}

export function parseWasteSensor(entity, now = new Date()) {
  if (!entity || entity.state === 'unavailable' || entity.state === 'unknown') return null;
  const attrs = entity.attributes || {};
  const daysAttr = firstDefined(attrs.days, attrs.days_to, attrs.daysTo, attrs.daysuntil);
  const date = parseFlexibleDate(
    firstDefined(attrs.next_date, attrs.next_collection, attrs.date, daysAttr, entity.state),
    now,
  );
  if (!date) return null;

  const days = differenceInCalendarDays(date, startOfDay(now));
  if (days < 0 || days > 90) return null;

  const name = entity.attributes?.friendly_name || entity.name || entity.entity_id || entity.id || '';
  const type = classifyWasteType(name, entity.entity_id || entity.id || '');
  return {
    id: entity.entity_id || entity.id || `${type}:${date.toISOString()}`,
    type,
    name,
    date,
    days,
  };
}

export function formatWasteWhen(days, date) {
  if (days === 0) return 'Heute';
  if (days === 1) return 'Morgen';
  if (days === 2) return 'Übermorgen';
  if (days < 7) return format(date, 'EEEE', { locale: de });
  return format(date, 'EEEEEE, d. MMM', { locale: de });
}

export function formatWasteDate(date) {
  return format(date, 'd. MMM', { locale: de });
}

export function formatWasteWeekday(date) {
  return format(date, 'EEEE', { locale: de });
}

export function formatWasteMonth(date) {
  return format(date, 'MMMM', { locale: de });
}

export function formatWasteListDate(date) {
  return format(date, 'EEEEEE, d. MMM', { locale: de });
}

export function formatWasteInDays(days) {
  if (days === 0) return 'Heute';
  if (days === 1) return 'Morgen';
  return `in ${days} Tagen`;
}

export function wasteLocation(widget, pickups = []) {
  if (widget?.location) return widget.location;
  const raw = pickups.find((pickup) => pickup.location)?.location || '';
  const city = raw.split(',').pop()?.trim().replace(/^\d+\s*/, '') || '';
  if (city) return city.replace(/Saarbruecken/i, 'Saarbrücken');
  return 'Saarbrücken';
}

export function getMockWastePickups(now = new Date()) {
  const start = startOfDay(now);
  return [
    { id: 'mock-yellow', type: 'yellow', name: 'Gelber Sack', date: addDays(start, 1), days: 1 },
    { id: 'mock-paper', type: 'paper', name: 'Papier', date: addDays(start, 1), days: 1 },
    { id: 'mock-rest', type: 'rest', name: 'Restmüll', date: addDays(start, 3), days: 3 },
    { id: 'mock-bio', type: 'bio', name: 'Bio', date: addDays(start, 4), days: 4 },
  ];
}

export function resolveWasteEntityIds(widget, hass) {
  const configured = widget?.entity_ids?.length
    ? widget.entity_ids.filter(Boolean)
    : (widget?.entity_id ? [widget.entity_id] : []);
  if (configured.length) return configured;
  const matches = Object.entries(hass?.states || {})
    .filter(([id, state]) => (
      id.startsWith('calendar.') || id.startsWith('sensor.')
    ) && isWasteEntity(id, state))
    .sort(([a], [b]) => {
      const aCal = a.startsWith('calendar.') ? 0 : 1;
      const bCal = b.startsWith('calendar.') ? 0 : 1;
      return aCal - bCal || a.localeCompare(b);
    })
    .map(([id]) => id);
  return matches.slice(0, 8);
}

export function groupWastePickups(pickups) {
  const sorted = [...pickups].sort((a, b) => {
    if (a.days !== b.days) return a.days - b.days;
    return TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type);
  });
  if (!sorted.length) return { next: null, upcoming: [] };

  const nextDays = sorted[0].days;
  const next = sorted.filter((item) => item.days === nextDays);
  const upcoming = sorted.filter((item) => item.days !== nextDays);
  return { next, upcoming };
}

export function pickupLabel(pickup) {
  return WASTE_TYPES[pickup.type]?.label || pickup.name || 'Abfall';
}

function dedupePickups(pickups) {
  const seen = new Set();
  return pickups.filter((pickup) => {
    const key = `${pickup.type}:${pickup.date.toISOString().slice(0, 10)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export async function loadWastePickups(hass, entityIds, now = new Date()) {
  if (!entityIds?.length) return [];

  const sensors = entityIds.filter((id) => !id.startsWith('calendar.'));
  const calendars = entityIds.filter((id) => id.startsWith('calendar.'));
  const pickups = sensors
    .map((id) => parseWasteSensor(hass?.states?.[id] ? { ...hass.states[id], entity_id: id } : null, now))
    .filter(Boolean);

  calendars.forEach((id) => {
    const fromState = parseWasteCalendarState(
      hass?.states?.[id] ? { ...hass.states[id], entity_id: id } : null,
      now,
    );
    if (fromState) pickups.push(fromState);
  });

  if (calendars.length) {
    const events = await fetchCalendarEvents(hass, calendars, now, addDays(now, 45));
    events.forEach((event) => {
      const type = classifyWasteType(event.summary, event.entityId);
      const date = startOfDay(event.start);
      const days = differenceInCalendarDays(date, startOfDay(now));
      if (days < 0 || days > 90) return;
      pickups.push({
        id: event.id,
        type,
        name: event.summary,
        date,
        days,
        location: event.location || '',
      });
    });
  }

  return dedupePickups(pickups);
}
