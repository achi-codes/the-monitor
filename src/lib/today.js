import { format, isSameDay, startOfDay, addDays } from 'date-fns';
import { de } from 'date-fns/locale';
import { callService } from './services';

export const EVENT_DOT_COLORS = ['#5B8DEF', '#A78BFA', '#6EE7B7', '#FB923C', '#9CA3AF', '#F472B6'];

const SAARBRUECKEN = { latitude: 49.2354, longitude: 6.9969 };

export function getMockTodayEvents(now = new Date()) {
  const y = now.getFullYear();
  const m = now.getMonth();
  const d = now.getDate();
  return [
    { start: new Date(y, m, d, 9, 0), end: new Date(y, m, d, 10, 30), summary: 'Vorlesung', location: 'Hörsaal 2' },
    { start: new Date(y, m, d, 11, 0), end: new Date(y, m, d, 12, 0), summary: 'Teammeeting', location: 'Online' },
    { start: new Date(y, m, d, 13, 0), end: new Date(y, m, d, 14, 0), summary: 'Mittagessen', location: 'Mensa' },
    { start: new Date(y, m, d, 15, 0), end: new Date(y, m, d, 16, 30), summary: 'Projektarbeit', location: 'Büro' },
    { start: new Date(y, m, d, 19, 0), end: new Date(y, m, d, 20, 0), summary: 'Sport', location: 'Fitnessstudio' },
  ];
}

function utcHoursToDate(year, month, day, utcHours) {
  const hours = Math.floor(utcHours);
  const minutes = Math.round((utcHours - hours) * 60);
  return new Date(Date.UTC(year, month, day, hours, minutes, 0));
}

/** Approximate local sunrise/sunset. Default location: Saarbrücken. */
export function computeSolarTimes(date = new Date(), latitude = SAARBRUECKEN.latitude, longitude = SAARBRUECKEN.longitude) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfYear = Math.floor((Date.UTC(year, month, day) - Date.UTC(year, 0, 0)) / 86400000);

  const declDeg = 23.44 * Math.sin(((360 / 365) * (dayOfYear - 81) * Math.PI) / 180);
  const latRad = (latitude * Math.PI) / 180;
  const declRad = (declDeg * Math.PI) / 180;
  const cosHa = -Math.tan(latRad) * Math.tan(declRad);
  const haDeg = (Math.acos(Math.min(1, Math.max(-1, cosHa))) * 180) / Math.PI;

  const b = ((360 / 365) * (dayOfYear - 81) * Math.PI) / 180;
  const eot = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
  const solarNoonUtc = 12 - longitude / 15 - eot / 60;

  return {
    sunrise: utcHoursToDate(year, month, day, solarNoonUtc - haDeg / 15),
    sunset: utcHoursToDate(year, month, day, solarNoonUtc + haDeg / 15),
  };
}

function parseDate(value) {
  if (!value) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof value === 'string') {
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const [year, month, day] = value.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  if (value.dateTime) return parseDate(value.dateTime);
  if (value.date) {
    const [year, month, day] = value.date.split('-').map(Number);
    if (!year || !month || !day) return null;
    return new Date(year, month - 1, day);
  }
  return null;
}

export function resolveSunTimes(entity, now = new Date()) {
  const nextRising = parseDate(entity?.attributes?.next_rising);
  const nextSetting = parseDate(entity?.attributes?.next_setting);
  if (!nextRising || !nextSetting) return computeSolarTimes(now);

  const sunrise = isSameDay(nextRising, now)
    ? nextRising
    : new Date(nextRising.getTime() - 86400000);
  const sunset = isSameDay(nextSetting, now)
    ? nextSetting
    : new Date(nextSetting.getTime() - 86400000);

  return { sunrise, sunset };
}

export function sunProgress(now, sunrise, sunset) {
  if (!sunrise || !sunset || sunset <= sunrise) return 0;
  return Math.min(1, Math.max(0, (now.getTime() - sunrise.getTime()) / (sunset.getTime() - sunrise.getTime())));
}

export function formatClock(date) {
  return format(date, 'HH:mm');
}

export function formatSunTime(date) {
  if (!date) return '—';
  return format(date, 'HH:mm');
}

export function formatWeekday(date) {
  return format(date, 'EEEE', { locale: de });
}

export function formatLongDate(date) {
  return format(date, 'd. MMMM yyyy', { locale: de });
}

export function formatEventRange(event) {
  if (event.allDay) return 'Ganztägig';
  if (!event.start) return '';
  const start = format(event.start, 'HH:mm');
  if (!event.end) return start;
  return `${start}–${format(event.end, 'HH:mm')}`;
}

export function eventDotColor(key, index = 0) {
  const value = String(key || index);
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  return EVENT_DOT_COLORS[Math.abs(hash) % EVENT_DOT_COLORS.length];
}

export function resolveCalendarIds(widget, hass) {
  const configured = widget?.entity_ids?.length
    ? widget.entity_ids.filter(Boolean)
    : (widget?.entity_id ? [widget.entity_id] : []);
  if (configured.length) return configured;
  return Object.keys(hass?.states || {})
    .filter((id) => id.startsWith('calendar.'))
    .slice(0, 6);
}

export function resolveSunEntity(widget, hass) {
  const configured = widget?.sun_entity;
  if (configured && hass?.states?.[configured]) return hass.states[configured];
  if (hass?.states?.['sun.sun']) return hass.states['sun.sun'];
  return null;
}

function isAllDay(startRaw, endRaw, start, end) {
  if (typeof startRaw === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(startRaw)) return true;
  if (startRaw?.date && !startRaw?.dateTime) return true;
  if (!start || !end) return false;
  return start.getHours() === 0
    && start.getMinutes() === 0
    && (end.getTime() - start.getTime()) % 86400000 === 0
    && end.getTime() - start.getTime() >= 86400000;
}

export function normalizeCalendarEvent(raw, entityId = '') {
  const start = parseDate(raw.start);
  const end = parseDate(raw.end);
  const summary = String(raw.summary || raw.title || '').trim();
  if (!summary || !start) return null;
  return {
    id: raw.uid || raw.id || `${entityId}:${start.toISOString()}:${summary}`,
    summary,
    location: String(raw.location || '').trim(),
    start,
    end,
    allDay: isAllDay(raw.start, raw.end, start, end),
    entityId,
  };
}

export function eventsForDay(events, day = new Date()) {
  const start = startOfDay(day);
  const end = addDays(start, 1);
  return events
    .filter((event) => {
      if (!event.start) return false;
      const eventEnd = event.end || event.start;
      return event.start < end && eventEnd > start;
    })
    .sort((a, b) => {
      if (a.allDay !== b.allDay) return a.allDay ? -1 : 1;
      return a.start - b.start;
    });
}

function collectServiceEvents(payload) {
  const body = payload?.response || payload;
  if (!body || typeof body !== 'object') return [];
  const events = [];
  Object.entries(body).forEach(([entityId, data]) => {
    const list = data?.events || (Array.isArray(data) ? data : []);
    list.forEach((raw) => {
      const event = normalizeCalendarEvent(raw, entityId);
      if (event) events.push(event);
    });
  });
  return events;
}

export async function fetchCalendarEvents(hass, entityIds, day = new Date(), until = null) {
  if (!hass || !entityIds?.length) return [];

  const start = startOfDay(day);
  const end = until ? startOfDay(until) : addDays(start, 1);

  if (hass.connection?.sendMessagePromise) {
    try {
      let wsSupported = true;
      const batches = await Promise.all(entityIds.map(async (entityId) => {
        try {
          const result = await hass.connection.sendMessagePromise({
            type: 'calendar/events',
            entity_id: entityId,
            start: start.toISOString(),
            end: end.toISOString(),
          });
          const list = Array.isArray(result) ? result : result?.events || [];
          return list
            .map((raw) => normalizeCalendarEvent(raw, entityId))
            .filter(Boolean);
        } catch (error) {
          const message = `${error?.code || ''} ${error?.message || error}`;
          if (/unknown_command/i.test(message)) wsSupported = false;
          return null;
        }
      }));
      if (wsSupported) return batches.flatMap((batch) => batch || []);
    } catch {
      // fall through to service call
    }
  }

  try {
    const response = await callService(
      hass,
      'calendar',
      'get_events',
      {
        entity_id: entityIds,
        start_date_time: start.toISOString(),
        end_date_time: end.toISOString(),
      },
      true,
    );
    return collectServiceEvents(response);
  } catch {
    return [];
  }
}
