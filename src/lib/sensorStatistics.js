import {
  addDays,
  addHours,
  addMonths,
  addWeeks,
  addYears,
  format,
  getDaysInMonth,
  startOfDay,
  startOfHour,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from 'date-fns';
import { de } from 'date-fns/locale';
import { getEntity } from './entities';
import { isMockHass } from './hass';
import { fetchSensorHistoryRange } from './sensorHistory';

export const CHART_RANGES = {
  today: { label: 'Heute', compare: 'zu gestern' },
  '24h': { label: '24 Stunden', compare: 'zu den 24 Stunden davor' },
  week: { label: 'Diese Woche', compare: 'zur Vorwoche' },
  '7d': { label: '7 Tage', compare: 'zu den 7 Tagen davor' },
  month: { label: 'Dieser Monat', compare: 'zum Vormonat' },
  '30d': { label: '30 Tage', compare: 'zu den 30 Tagen davor' },
  year: { label: 'Dieses Jahr', compare: 'zum Vorjahr' },
};

export const CHART_AGGREGATES = {
  auto: 'Automatisch',
  sum: 'Verbrauch (Summe)',
  mean: 'Durchschnitt',
  max: 'Maximum',
  min: 'Minimum',
};

export const CHART_TYPES = { bar: 'Balken', line: 'Linie' };

export const THRESHOLD_OPS = {
  '>': 'größer als',
  '>=': 'mindestens',
  '<': 'kleiner als',
  '<=': 'höchstens',
};

export const THRESHOLD_TONES = {
  red: 'Rot',
  orange: 'Orange',
  yellow: 'Gelb',
  green: 'Grün',
  blue: 'Blau',
  purple: 'Lila',
};

export const THRESHOLD_TARGETS = {
  hero: 'Großer Wert',
  current: 'Aktueller Wert',
  today: 'Heute',
};

export const MAX_THRESHOLDS = 4;

function toNumberOrNull(value) {
  if (value === '' || value == null) return null;
  const num = Number(String(value).replace(',', '.'));
  return Number.isFinite(num) ? num : null;
}

function pickKey(map, value, fallback) {
  return Object.hasOwn(map, value) ? value : fallback;
}

export function normalizeSensorChart(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};
  return {
    range: pickKey(CHART_RANGES, src.range, ''),
    type: pickKey(CHART_TYPES, src.type, 'bar'),
    aggregate: pickKey(CHART_AGGREGATES, src.aggregate, 'auto'),
    min: toNumberOrNull(src.min),
    max: toNumberOrNull(src.max),
    price: toNumberOrNull(src.price),
    priceEntity: typeof src.priceEntity === 'string' ? src.priceEntity : '',
    thresholdTarget: pickKey(THRESHOLD_TARGETS, src.thresholdTarget, 'hero'),
    thresholds: Array.isArray(src.thresholds)
      ? src.thresholds.slice(0, MAX_THRESHOLDS).map((rule) => ({
        op: pickKey(THRESHOLD_OPS, rule?.op, '>'),
        value: toNumberOrNull(rule?.value),
        tone: pickKey(THRESHOLD_TONES, rule?.tone, 'red'),
      }))
      : [],
  };
}

export function resolveChartRange(chart, historyHours = 24) {
  if (chart.range) return chart.range;
  return historyHours >= 168 ? '7d' : '24h';
}

export function isCumulativeEntity(entity) {
  const stateClass = entity.attributes?.state_class;
  return stateClass === 'total' || stateClass === 'total_increasing';
}

export function resolveAggregate(chart, entity) {
  if (chart.aggregate !== 'auto') return chart.aggregate;
  return isCumulativeEntity(entity) ? 'sum' : 'mean';
}

export function matchThreshold(rules, value) {
  if (value == null || !Number.isFinite(value)) return null;
  return rules.find((rule) => {
    if (rule.value == null) return false;
    switch (rule.op) {
      case '>': return value > rule.value;
      case '>=': return value >= rule.value;
      case '<': return value < rule.value;
      case '<=': return value <= rule.value;
      default: return false;
    }
  }) || null;
}

const RANGE_SPECS = {
  today: {
    period: 'hour',
    start: (now) => startOfDay(now),
    count: () => 24,
    step: addHours,
    shift: addDays,
    label: (date) => (date.getHours() % 6 === 0 ? String(date.getHours()) : ''),
    title: (date) => format(date, 'HH:mm'),
  },
  '24h': {
    period: 'hour',
    start: (now) => addHours(startOfHour(now), -23),
    count: () => 24,
    step: addHours,
    shift: (date, amount) => addHours(date, amount * 24),
    label: (date) => (date.getHours() % 6 === 0 ? String(date.getHours()) : ''),
    title: (date) => format(date, 'EEEEEE., HH:mm', { locale: de }),
  },
  week: {
    period: 'day',
    start: (now) => startOfWeek(now, { weekStartsOn: 1 }),
    count: () => 7,
    step: addDays,
    shift: addWeeks,
    label: (date) => format(date, 'EEEEEE', { locale: de }),
    title: (date) => format(date, 'EEEE, d. MMM', { locale: de }),
  },
  '7d': {
    period: 'day',
    start: (now) => addDays(startOfDay(now), -6),
    count: () => 7,
    step: addDays,
    shift: (date, amount) => addDays(date, amount * 7),
    label: (date) => format(date, 'EEEEEE', { locale: de }),
    title: (date) => format(date, 'EEEE, d. MMM', { locale: de }),
  },
  month: {
    period: 'day',
    start: (now) => startOfMonth(now),
    count: (now) => getDaysInMonth(now),
    step: addDays,
    shift: addMonths,
    label: (date) => ([1, 8, 15, 22, 29].includes(date.getDate()) ? String(date.getDate()) : ''),
    title: (date) => format(date, 'EEEE, d. MMM', { locale: de }),
  },
  '30d': {
    period: 'day',
    start: (now) => addDays(startOfDay(now), -29),
    count: () => 30,
    step: addDays,
    shift: (date, amount) => addDays(date, amount * 30),
    label: (date, index) => ((29 - index) % 7 === 0 ? format(date, 'd.M.') : ''),
    title: (date) => format(date, 'EEEE, d. MMM', { locale: de }),
  },
  year: {
    period: 'month',
    start: (now) => startOfYear(now),
    count: () => 12,
    step: addMonths,
    shift: addYears,
    label: (date) => format(date, 'MMMMM', { locale: de }),
    title: (date) => format(date, 'MMMM yyyy', { locale: de }),
  },
};

export function getChartWindow(range, now = new Date()) {
  const spec = RANGE_SPECS[range] || RANGE_SPECS['24h'];
  const start = spec.start(now);
  const count = spec.count(now);
  const slots = Array.from({ length: count }, (_, index) => {
    const slotStart = spec.step(start, index);
    const slotEnd = spec.step(start, index + 1);
    return {
      start: slotStart.getTime(),
      end: slotEnd.getTime(),
      label: spec.label(slotStart, index),
      title: spec.title(slotStart),
      future: slotStart > now,
      current: slotStart <= now && now < slotEnd,
    };
  });
  const end = spec.step(start, count);
  const prevStart = spec.shift(start, -1);
  const elapsed = Math.min(now.getTime(), end.getTime()) - start.getTime();
  return {
    period: spec.period,
    start,
    end,
    now,
    slots,
    prevStart,
    prevEnd: new Date(prevStart.getTime() + elapsed),
  };
}

function seeded(key) {
  let hash = 2166136261;
  for (let i = 0; i < key.length; i += 1) {
    hash ^= key.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 10000) / 10000;
}

const PERIOD_STEP = { hour: addHours, day: addDays, month: addMonths };

function hourProfile(hour) {
  return 0.2 + 0.6 * Math.exp(-((hour - 7.5) ** 2) / 4) + 0.9 * Math.exp(-((hour - 19) ** 2) / 6);
}

function buildMockRows(entity, start, end, period) {
  const rows = [];
  const step = PERIOD_STEP[period];
  const cumulative = isCumulativeEntity(entity);
  const current = Number(entity.state);
  const base = Number.isFinite(current) ? current : 20;
  for (let t = start; t < end; t = step(t, 1)) {
    const next = step(t, 1);
    const fraction = Math.min(1, (end - t) / (next - t));
    const rand = seeded(`${entity.id}:${t.getTime()}`);
    if (cumulative) {
      const hourly = (hour) => (0.12 + 0.55 * hourProfile(hour)) * (0.7 + 0.6 * rand);
      let change = hourly(t.getHours());
      if (period === 'day') change = (6 + 9 * rand) * fraction;
      if (period === 'month') change = (240 + 120 * rand) * fraction;
      rows.push({ t: t.getTime(), change });
    } else {
      const amplitude = Math.abs(base) * 0.08 + 1;
      const wave = Math.sin((t.getHours() / 24) * Math.PI * 2 - Math.PI / 2);
      const mean = base + amplitude * (period === 'hour' ? wave : (rand - 0.5) * 1.6);
      rows.push({ t: t.getTime(), mean, min: mean - amplitude * 0.4, max: mean + amplitude * 0.4 });
    }
  }
  return rows;
}

async function fetchStatisticsRows(hass, entityId, start, end, period) {
  const result = await hass.connection.sendMessagePromise({
    type: 'recorder/statistics_during_period',
    start_time: start.toISOString(),
    end_time: end.toISOString(),
    statistic_ids: [entityId],
    period,
    types: ['change', 'state', 'mean', 'min', 'max'],
  });
  return (result?.[entityId] || []).map((row) => ({
    t: typeof row.start === 'number' ? row.start : new Date(row.start).getTime(),
    change: row.change,
    state: row.state,
    mean: row.mean,
    min: row.min,
    max: row.max,
  }));
}

function valueAt(points, time) {
  let value = null;
  for (const point of points) {
    if (point.t > time) break;
    value = point.v;
  }
  return value;
}

function rowsFromHistory(points, start, end, period, cumulative) {
  const rows = [];
  const step = PERIOD_STEP[period];
  for (let t = start; t < end; t = step(t, 1)) {
    const from = t.getTime();
    const to = Math.min(step(t, 1).getTime(), end.getTime());
    if (cumulative) {
      const first = valueAt(points, from);
      const last = valueAt(points, to);
      if (last == null) continue;
      const change = first == null || last < first ? 0 : last - first;
      rows.push({ t: from, change, state: last });
    } else {
      const inside = points.filter((point) => point.t >= from && point.t < to).map((point) => point.v);
      const carried = valueAt(points, from);
      const values = inside.length ? inside : carried != null ? [carried] : [];
      if (!values.length) continue;
      rows.push({
        t: from,
        mean: values.reduce((sum, v) => sum + v, 0) / values.length,
        min: Math.min(...values),
        max: Math.max(...values),
      });
    }
  }
  return rows;
}

export async function fetchChartRows(hass, entityId, start, end, period) {
  const entity = getEntity(hass, entityId);
  if (isMockHass(hass)) return { rows: buildMockRows(entity, start, end, period), source: 'mock' };
  if (hass.connection?.sendMessagePromise) {
    try {
      const rows = await fetchStatisticsRows(hass, entityId, start, end, period);
      if (rows.length) return { rows, source: 'statistics' };
    } catch (err) {
      console.warn('The Monitor: Statistiken konnten nicht geladen werden', err);
    }
  }
  const points = await fetchSensorHistoryRange(hass, entityId, start, end);
  return { rows: rowsFromHistory(points, start, end, period, isCumulativeEntity(entity)), source: 'history' };
}

function rowValue(row, aggregate) {
  const value = aggregate === 'sum' ? row.change : row[aggregate];
  return Number.isFinite(value) ? value : null;
}

function combine(values, aggregate) {
  const list = values.filter((value) => value != null);
  if (!list.length) return null;
  if (aggregate === 'sum') return list.reduce((sum, v) => sum + v, 0);
  if (aggregate === 'max') return Math.max(...list);
  if (aggregate === 'min') return Math.min(...list);
  return list.reduce((sum, v) => sum + v, 0) / list.length;
}

/** Meter delta since the last compiled statistic, so the running hour/day is not missing. */
function pendingChange(rows, currentValue) {
  if (currentValue == null) return 0;
  const last = [...rows].reverse().find((row) => Number.isFinite(row.state));
  if (!last) return 0;
  const delta = currentValue - last.state;
  return delta > 0 ? delta : 0;
}

export function summarizeChart(rows, windowInfo, aggregate, currentValue) {
  const { slots, prevStart, prevEnd, start } = windowInfo;
  const currentRows = rows.filter((row) => row.t >= start.getTime());
  const pending = aggregate === 'sum' ? pendingChange(currentRows, currentValue) : 0;

  const values = slots.map((slot) => {
    if (slot.future) return null;
    const inSlot = currentRows.filter((row) => row.t >= slot.start && row.t < slot.end);
    let value = combine(inSlot.map((row) => rowValue(row, aggregate)), aggregate);
    if (slot.current) {
      if (aggregate === 'sum') value = (value || 0) + pending;
      else if (value == null) value = currentValue;
    }
    return value;
  });

  const prevRows = rows.filter((row) => row.t >= prevStart.getTime() && row.t < prevEnd.getTime());
  return {
    values,
    total: combine(values, aggregate),
    previous: combine(prevRows.map((row) => rowValue(row, aggregate)), aggregate),
    pending,
  };
}

export function formatChartNumber(value, decimals) {
  if (value == null || !Number.isFinite(value)) return '—';
  const abs = Math.abs(value);
  const digits = decimals ?? (abs >= 100 ? 0 : abs >= 10 ? 1 : abs >= 1 ? 1 : 2);
  return value.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: digits });
}

export function formatCurrency(value) {
  if (value == null || !Number.isFinite(value)) return '—';
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}

function niceStep(raw) {
  if (raw <= 0 || !Number.isFinite(raw)) return 1;
  const power = 10 ** Math.floor(Math.log10(raw));
  const unit = raw / power;
  const nice = unit <= 1 ? 1 : unit <= 2 ? 2 : unit <= 2.5 ? 2.5 : unit <= 5 ? 5 : 10;
  return nice * power;
}

export function buildScale(values, { min, max, zeroBased }) {
  const list = values.filter((value) => value != null);
  const dataMin = list.length ? Math.min(...list) : 0;
  const dataMax = list.length ? Math.max(...list) : 1;
  let low = min ?? (zeroBased ? Math.min(0, dataMin) : dataMin);
  let high = max ?? dataMax;
  if (high <= low) high = low + (Math.abs(low) * 0.1 || 1);
  if (min != null || max != null) {
    const step = (high - low) / 4;
    return { low, high, ticks: [0, 1, 2, 3, 4].map((i) => Number((low + step * i).toFixed(6))) };
  }
  const step = niceStep((high - low) / 4);
  low = Math.floor(low / step) * step;
  high = Math.ceil(high / step) * step;
  if (high <= low) high = low + step;
  const ticks = [];
  for (let tick = low; tick <= high + step / 1000; tick += step) ticks.push(Number(tick.toFixed(6)));
  return { low, high, ticks };
}
