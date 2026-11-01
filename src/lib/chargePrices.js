/** Read-only charging-price outlook. Recommendations never start or stop charging. */

export const TIBBER_PRICE_ENTITY = 'sensor.schloss_aktueller_strompreis';
export const FORECAST_ENTITY = 'sensor.energyforecast_ladeprognose';
export const COMPARISON_ENTITY = 'sensor.ladeprognose_prufung';
export const YEAR_PRICE_ENTITY = 'sensor.evcc_stat_this_year_avg_price';
export const YEAR_ENERGY_ENTITY = 'sensor.evcc_stat_this_year_charged_kwh';

export const BATTERY_KWH = 73;
export const HALF_BATTERY_KWH = 36.5;

const BERLIN = 'Europe/Berlin';
const QUARTER_MS = 15 * 60 * 1000;
const WINDOW_SLOTS = 8;
const DAY_COUNT = 7;
const VAT = 1.19;
const MIN_SURCHARGE_SAMPLES = 8;
const SURCHARGE_TOLERANCE = 0.3;
const SURCHARGE_AGREEMENT = 0.9;
const WAIT_ADVANTAGE_CT = 3;
const TIBBER_STALE_MS = 3 * 60 * 60 * 1000;
const FORECAST_STALE_MS = 12 * 60 * 60 * 1000;

const DEAD_STATES = new Set(['unavailable', 'unknown', 'none', '']);

function pad(value) {
  return String(value).padStart(2, '0');
}

function round1(value) {
  return Math.round((value + Number.EPSILON) * 10) / 10;
}

export function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[mid];
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

function snapQuarter(ms) {
  if (!Number.isFinite(ms)) return NaN;
  return Math.round(ms / QUARTER_MS) * QUARTER_MS;
}

function berlinWallParts(date) {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: BERLIN,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });
  const bag = {};
  fmt.formatToParts(date).forEach((part) => {
    if (part.type !== 'literal') bag[part.type] = part.value;
  });
  let year = Number(bag.year);
  let month = Number(bag.month);
  let day = Number(bag.day);
  let hour = Number(bag.hour);
  if (hour === 24) {
    hour = 0;
    const next = new Date(Date.UTC(year, month - 1, day + 1));
    year = next.getUTCFullYear();
    month = next.getUTCMonth() + 1;
    day = next.getUTCDate();
  }
  return {
    year,
    month,
    day,
    hour,
    minute: Number(bag.minute),
    second: Number(bag.second),
  };
}

function berlinOffsetMs(utcMs) {
  const parts = berlinWallParts(new Date(utcMs));
  const asUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  return asUtc - utcMs;
}

function berlinDateTimeToUtc(year, month, day, hour, minute) {
  const guess = Date.UTC(year, month - 1, day, hour, minute);
  const utc = guess - berlinOffsetMs(guess);
  return guess - berlinOffsetMs(utc);
}

function shiftBerlinDay(parts, offset) {
  const noon = berlinDateTimeToUtc(parts.year, parts.month, parts.day, 12, 0) + offset * 86400000;
  return berlinWallParts(new Date(noon));
}

function dayKey(parts) {
  return `${parts.year}-${pad(parts.month)}-${pad(parts.day)}`;
}

function weekdayLabel(parts) {
  const noon = berlinDateTimeToUtc(parts.year, parts.month, parts.day, 12, 0);
  return new Intl.DateTimeFormat('de-DE', { timeZone: BERLIN, weekday: 'long' }).format(new Date(noon));
}

function dayLabel(parts, offset) {
  if (offset === 0) return 'Heute';
  if (offset === 1) return 'Morgen';
  return weekdayLabel(parts);
}

export function formatBerlinClock(ms) {
  if (!Number.isFinite(ms)) return '';
  return new Intl.DateTimeFormat('de-DE', {
    timeZone: BERLIN,
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(ms));
}

export function formatBerlinRange(startMs, endMs) {
  return `${formatBerlinClock(startMs)}–${formatBerlinClock(endMs)}`;
}

export function formatBerlinDate(ms) {
  if (!Number.isFinite(ms)) return '';
  return new Intl.DateTimeFormat('de-DE', {
    timeZone: BERLIN,
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
  }).format(new Date(ms));
}

function readPrice(value) {
  if (value == null) return null;
  if (typeof value === 'string' && value.trim() === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function stateNumber(stateObj) {
  if (!stateObj) return null;
  const raw = String(stateObj.state ?? '').trim().toLowerCase();
  if (DEAD_STATES.has(raw)) return null;
  const value = Number(stateObj.state);
  return Number.isFinite(value) ? value : null;
}

function tibberStatus(stateObj, now) {
  if (!stateObj) return 'missing';
  const raw = String(stateObj.state ?? '').trim().toLowerCase();
  if (raw === 'unavailable' || raw === 'none' || raw === '') return 'unavailable';
  if (!Number.isFinite(Number(stateObj.state))) return 'unavailable';
  const timestamp = Date.parse(stateObj.attributes?.timestamp || '');
  if (Number.isFinite(timestamp) && now - timestamp > TIBBER_STALE_MS) return 'stale';
  return 'ok';
}

function forecastStatus(stateObj, now) {
  if (!stateObj) return 'missing';
  const raw = String(stateObj.state ?? '').trim().toLowerCase();
  if (DEAD_STATES.has(raw)) return 'unavailable';
  const data = stateObj.attributes?.data;
  if (!Array.isArray(data) || data.length === 0) return 'empty';
  const validUntil = Date.parse(stateObj.attributes?.valid_until || '');
  if (Number.isFinite(validUntil)) return now > validUntil ? 'expired' : 'ok';
  const generated = Date.parse(stateObj.attributes?.generated_at || stateObj.state || '');
  if (Number.isFinite(generated) && now - generated > FORECAST_STALE_MS) return 'stale';
  return 'ok';
}

function readTibber(stateObj, now) {
  const status = tibberStatus(stateObj, now);
  if (status !== 'ok') {
    return { ok: false, status, current: null, timestamp: null, quarters: [] };
  }
  const outlook = stateObj.attributes?.outlook_quarters;
  const quarters = [];
  if (outlook && Array.isArray(outlook.prices) && outlook.start) {
    const startMs = Date.parse(outlook.start);
    const minutes = Number(outlook.minutes) || 15;
    if (Number.isFinite(startMs) && minutes === 15) {
      outlook.prices.forEach((price, index) => {
        const value = readPrice(price);
        if (value == null) return;
        quarters.push({
          startMs: snapQuarter(startMs + index * QUARTER_MS),
          price: value,
        });
      });
    }
  }
  const timestamp = Date.parse(stateObj.attributes?.timestamp || '');
  return {
    ok: true,
    status,
    current: Number(stateObj.state),
    timestamp: Number.isFinite(timestamp) ? timestamp : null,
    quarters,
  };
}

function readForecast(stateObj, now) {
  const status = forecastStatus(stateObj, now);
  if (status !== 'ok') return { ok: false, status, quarters: [] };
  const quarters = [];
  stateObj.attributes.data.forEach((row) => {
    const startMs = snapQuarter(Date.parse(row?.start));
    const exchange = readPrice(row?.price_ct_kwh ?? row?.total_ct_kwh);
    if (!Number.isFinite(startMs) || exchange == null) return;
    quarters.push({
      startMs,
      exchange,
      origin: row?.price_origin === 'market' ? 'market' : 'forecast',
    });
  });
  if (!quarters.length) return { ok: false, status: 'empty', quarters: [] };
  return { ok: true, status, quarters };
}

export function assessSurcharge(tibberQuarters, forecastQuarters) {
  const forecastByStart = new Map(forecastQuarters.map((quarter) => [quarter.startMs, quarter]));
  const offsets = [];
  tibberQuarters.forEach((slot) => {
    const forecast = forecastByStart.get(slot.startMs);
    if (!forecast) return;
    offsets.push(slot.price - forecast.exchange * VAT);
  });
  if (offsets.length < MIN_SURCHARGE_SAMPLES) {
    return { ok: false, median: null, samples: offsets.length, agreement: 0 };
  }
  const mid = median(offsets);
  const close = offsets.filter((value) => Math.abs(value - mid) <= SURCHARGE_TOLERANCE + 1e-6).length;
  const agreement = close / offsets.length;
  return {
    ok: agreement + 1e-9 >= SURCHARGE_AGREEMENT,
    median: mid,
    samples: offsets.length,
    agreement,
  };
}

function cheapestWindow(slots, parts, now) {
  let best = null;
  for (let index = 0; index <= 88; index += 1) {
    const hour = Math.floor(index / 4);
    const minute = (index % 4) * 15;
    const startMs = snapQuarter(berlinDateTimeToUtc(parts.year, parts.month, parts.day, hour, minute));
    if (startMs < now) continue;
    const points = [];
    let complete = true;
    for (let step = 0; step < WINDOW_SLOTS; step += 1) {
      const slot = slots.get(startMs + step * QUARTER_MS);
      if (!slot) {
        complete = false;
        break;
      }
      points.push(slot);
    }
    if (!complete) continue;
    const avg = points.reduce((sum, slot) => sum + slot.price, 0) / WINDOW_SLOTS;
    if (!best || avg < best.avg - 1e-6 || (Math.abs(avg - best.avg) <= 1e-6 && startMs < best.startMs)) {
      const estimated = points.some((slot) => slot.estimated);
      best = {
        startMs,
        endMs: startMs + WINDOW_SLOTS * QUARTER_MS,
        avg,
        estimated,
        badge: !estimated ? null : (points.some((slot) => slot.origin === 'forecast') ? 'Prognose' : 'geschätzt'),
        dayKey: dayKey(parts),
      };
    }
  }
  return best;
}

function quarterCount(slots, parts) {
  let count = 0;
  for (let index = 0; index < 96; index += 1) {
    const hour = Math.floor(index / 4);
    const minute = (index % 4) * 15;
    const startMs = snapQuarter(berlinDateTimeToUtc(parts.year, parts.month, parts.day, hour, minute));
    if (slots.has(startMs)) count += 1;
  }
  return count;
}

function buildDays(slots, now) {
  const today = berlinWallParts(new Date(now));
  const days = [];
  for (let offset = 0; offset < DAY_COUNT; offset += 1) {
    const parts = shiftBerlinDay(today, offset);
    const window = cheapestWindow(slots, parts, now);
    days.push({
      key: dayKey(parts),
      label: dayLabel(parts, offset),
      weekday: weekdayLabel(parts),
      quarterCount: quarterCount(slots, parts),
      window,
    });
  }
  return days;
}

function buildRecommendation(days) {
  const todayWindow = days[0]?.window || null;
  let bestFuture = null;
  days.slice(1).forEach((day) => {
    if (!day.window) return;
    if (
      !bestFuture
      || day.window.avg < bestFuture.avg - 1e-6
      || (Math.abs(day.window.avg - bestFuture.avg) <= 1e-6 && day.window.startMs < bestFuture.startMs)
    ) {
      bestFuture = day.window;
    }
  });

  const base = {
    todayWindow,
    diffCt: null,
    saveHalfEuro: null,
    saveFullEuro: null,
    nearMiss: null,
  };

  if (!todayWindow && !bestFuture) {
    return { ...base, status: 'none', reason: 'empty', window: null };
  }
  if (!todayWindow) {
    return { ...base, status: 'next', reason: null, window: bestFuture };
  }
  if (!bestFuture) {
    return { ...base, status: 'today', reason: null, window: todayWindow, diffCt: 0 };
  }

  const diffCt = round1(round1(todayWindow.avg) - round1(bestFuture.avg));
  if (diffCt >= WAIT_ADVANTAGE_CT) {
    return {
      ...base,
      status: 'wait',
      reason: null,
      window: bestFuture,
      diffCt,
      saveHalfEuro: (diffCt * HALF_BATTERY_KWH) / 100,
      saveFullEuro: (diffCt * BATTERY_KWH) / 100,
    };
  }

  return {
    ...base,
    status: 'today',
    reason: null,
    window: todayWindow,
    diffCt,
    nearMiss: diffCt > 0 ? { diffCt, window: bestFuture } : null,
  };
}

function recommendationReason(recommendation, tibberState, forecastState, surcharge) {
  if (recommendation.status !== 'none') return null;
  const tibberDown = tibberState.status !== 'ok';
  const forecastDown = forecastState.status !== 'ok';
  if (tibberDown && forecastDown) {
    if (
      tibberState.status === 'stale'
      || forecastState.status === 'stale'
      || forecastState.status === 'expired'
    ) return 'stale';
    return 'missing';
  }
  if (forecastState.status === 'ok' && !surcharge.ok && tibberDown) return 'incomparable';
  return 'empty';
}

function buildNotes(tibberState, forecastState, surcharge) {
  const notes = [];
  if (tibberState.status === 'stale') notes.push('Der Tibber-Preis ist veraltet.');
  if (forecastState.status === 'expired' || forecastState.status === 'stale') {
    notes.push('Die Prognose ist veraltet und wird nicht verwendet.');
  } else if (forecastState.status === 'ok' && !surcharge.ok) {
    notes.push(surcharge.samples < MIN_SURCHARGE_SAMPLES
      ? 'Zu wenige zeitgleiche Preise, um die Prognose auf das Tibber-Niveau umzurechnen.'
      : 'Die Prognose passt gerade nicht stabil zum Tibber-Preis und wird nicht umgerechnet.');
  }
  notes.push('Die Empfehlung startet oder stoppt die Ladung nicht.');
  return notes;
}

function normalizeSample(sample) {
  if (!sample || typeof sample !== 'object') return null;
  const predicted = Number(sample.predicted);
  if (!Number.isFinite(predicted)) return null;
  const actualNumber = Number(sample.actual);
  const actual = sample.actual == null || sample.actual === 'null' || !Number.isFinite(actualNumber)
    ? null
    : actualNumber;
  const leadHours = Number(sample.lead_hours);
  return {
    date: typeof sample.date === 'string' ? sample.date : '',
    start: typeof sample.start === 'string' ? sample.start : '',
    end: typeof sample.end === 'string' ? sample.end : '',
    predicted,
    actual,
    leadHours: Number.isFinite(leadHours) ? leadHours : null,
    captured: typeof sample.captured === 'string' ? sample.captured : '',
  };
}

function readComparison(stateObj) {
  const empty = {
    status: 'missing',
    mae: null,
    bias: null,
    comparisons: 0,
    stored: 0,
    mixedLeads: false,
    method: '',
    samples: [],
  };
  if (!stateObj) return empty;
  const raw = String(stateObj.state ?? '').trim().toLowerCase();
  if (raw === 'unavailable' || raw === 'none' || raw === '') return empty;
  const attributes = stateObj.attributes || {};
  const samples = (Array.isArray(attributes.samples) ? attributes.samples : [])
    .map(normalizeSample)
    .filter(Boolean)
    .sort((a, b) => String(a.start).localeCompare(String(b.start)));
  const comparisonCount = Number(attributes.comparisons);
  const comparisons = Number.isFinite(comparisonCount)
    ? comparisonCount
    : samples.filter((sample) => sample.actual != null).length;
  const mae = Number(stateObj.state);
  const biasNumber = Number(attributes.bias);
  const bias = attributes.bias == null || attributes.bias === 'null' || !Number.isFinite(biasNumber)
    ? null
    : biasNumber;
  const leads = samples.map((sample) => sample.leadHours).filter((value) => value != null);
  const mixedLeads = new Set(leads.map((value) => round1(value))).size > 1;
  const ready = comparisons > 0 && Number.isFinite(mae);
  return {
    status: ready ? 'ready' : 'waiting',
    mae: Number.isFinite(mae) ? mae : null,
    bias,
    comparisons,
    stored: samples.length,
    mixedLeads,
    method: typeof attributes.method === 'string' ? attributes.method : '',
    samples,
  };
}

function readYear(priceState, energyState) {
  const avgEuro = stateNumber(priceState);
  const kwh = stateNumber(energyState);
  if (avgEuro == null && kwh == null) return { status: 'missing', avgEuro: null, ct: null, kwh: null, costEuro: null };
  return {
    status: 'ok',
    avgEuro,
    ct: avgEuro == null ? null : avgEuro * 100,
    kwh,
    costEuro: avgEuro != null && kwh != null ? avgEuro * kwh : null,
  };
}

export function buildChargeOutlook(states, now = Date.now()) {
  const tibberState = readTibber(states?.[TIBBER_PRICE_ENTITY], now);
  const forecastState = readForecast(states?.[FORECAST_ENTITY], now);
  const surcharge = tibberState.ok && forecastState.ok
    ? assessSurcharge(tibberState.quarters, forecastState.quarters)
    : { ok: false, median: null, samples: 0, agreement: 0 };

  const slots = new Map();
  if (forecastState.ok && surcharge.ok) {
    forecastState.quarters.forEach((quarter) => {
      slots.set(quarter.startMs, {
        price: quarter.exchange * VAT + surcharge.median,
        estimated: true,
        origin: quarter.origin,
      });
    });
  }
  if (tibberState.ok) {
    tibberState.quarters.forEach((quarter) => {
      slots.set(quarter.startMs, {
        price: quarter.price,
        estimated: false,
        origin: 'tibber',
      });
    });
  }

  const days = buildDays(slots, now);
  const recommendation = buildRecommendation(days);
  recommendation.reason = recommendationReason(recommendation, tibberState, forecastState, surcharge);

  return {
    now,
    current: tibberState.ok ? { price: tibberState.current, timestamp: tibberState.timestamp } : null,
    tibberStatus: tibberState.status,
    forecastStatus: forecastState.status,
    surcharge,
    days,
    recommendation,
    notes: buildNotes(tibberState, forecastState, surcharge),
    comparison: readComparison(states?.[COMPARISON_ENTITY]),
    year: readYear(states?.[YEAR_PRICE_ENTITY], states?.[YEAR_ENERGY_ENTITY]),
  };
}

function mockExchange(hour, minute) {
  const clock = hour + minute / 60;
  let price = 16;
  if (clock >= 1 && clock < 5) price = 7 + (clock - 1) * 0.4;
  else if (clock >= 17 && clock < 21) price = 32;
  else if (clock >= 21 && clock < 23) price = 20;
  return price + minute / 60 * 0.05;
}

function iso(ms) {
  return new Date(ms).toISOString();
}

export function createMockChargeStates(now = Date.now()) {
  const surcharge = 13.4;
  const today = berlinWallParts(new Date(now));
  const originMs = berlinDateTimeToUtc(today.year, today.month, today.day, 0, 0);
  const forecastRows = [];
  for (let index = 0; index < DAY_COUNT * 96; index += 1) {
    const startMs = originMs + index * QUARTER_MS;
    const wall = berlinWallParts(new Date(startMs));
    const exchange = mockExchange(wall.hour, wall.minute);
    forecastRows.push({
      start: iso(startMs),
      end: iso(startMs + QUARTER_MS),
      price_ct_kwh: exchange,
      total_ct_kwh: exchange,
      price_origin: startMs < now + 36 * 60 * 60 * 1000 ? 'market' : 'forecast',
    });
  }

  const tibberUntil = now + 40 * 60 * 60 * 1000;
  const tibberRows = forecastRows.filter((row) => Date.parse(row.start) < tibberUntil);
  const currentRow = tibberRows.find((row) => {
    const startMs = Date.parse(row.start);
    return startMs <= now && now < startMs + QUARTER_MS;
  }) || tibberRows[tibberRows.length - 1];
  const currentExchange = currentRow?.price_ct_kwh ?? 16;
  const currentPrice = currentExchange * VAT + surcharge;

  const yesterday = shiftBerlinDay(today, -1);
  const yesterdayStart = berlinDateTimeToUtc(yesterday.year, yesterday.month, yesterday.day, 2, 0);
  const tomorrow = shiftBerlinDay(today, 1);
  const tomorrowStart = berlinDateTimeToUtc(tomorrow.year, tomorrow.month, tomorrow.day, 2, 0);

  const entity = (entityId, state, attributes) => ({
    entity_id: entityId,
    state: String(state),
    attributes,
    last_changed: iso(now),
    last_updated: iso(now),
  });

  return {
    [TIBBER_PRICE_ENTITY]: entity(TIBBER_PRICE_ENTITY, currentPrice, {
      friendly_name: 'Aktueller Strompreis',
      unit_of_measurement: 'ct/kWh',
      timestamp: currentRow ? iso(Date.parse(currentRow.start)) : iso(now),
      energy_price: currentExchange,
      tax: currentPrice - currentExchange,
      outlook_quarters: {
        start: tibberRows[0]?.start,
        minutes: 15,
        prices: tibberRows.map((row) => row.price_ct_kwh * VAT + surcharge),
      },
    }),
    [FORECAST_ENTITY]: entity(FORECAST_ENTITY, iso(now), {
      friendly_name: 'Ladeprognose',
      generated_at: iso(now),
      valid_until: iso(now + 24 * 60 * 60 * 1000),
      plan: 'pro',
      market_zone: 'DE-LU',
      data: forecastRows,
    }),
    [COMPARISON_ENTITY]: entity(COMPARISON_ENTITY, '1.7', {
      friendly_name: 'Ladeprognose Prüfung',
      comparisons: 1,
      bias: 1.7,
      started: iso(now - 2 * 86400000),
      checked: iso(now),
      method: 'Erstes gespeichertes 2-Stunden-Fenster gegen denselben späteren Tibber-Preis.',
      samples: [
        {
          date: dayKey(yesterday),
          start: iso(yesterdayStart),
          end: iso(yesterdayStart + 2 * 60 * 60 * 1000),
          predicted: 22.4,
          actual: 24.1,
          lead_hours: 30,
          captured: iso(now - 30 * 60 * 60 * 1000),
          checked: iso(now),
        },
        {
          date: dayKey(tomorrow),
          start: iso(tomorrowStart),
          end: iso(tomorrowStart + 2 * 60 * 60 * 1000),
          predicted: 21.8,
          actual: null,
          lead_hours: 14,
          captured: iso(now),
        },
      ],
    }),
    [YEAR_PRICE_ENTITY]: entity(YEAR_PRICE_ENTITY, '0.214', {
      friendly_name: 'evcc Preis dieses Jahr',
      unit_of_measurement: '€',
    }),
    [YEAR_ENERGY_ENTITY]: entity(YEAR_ENERGY_ENTITY, '860.4', {
      friendly_name: 'evcc geladen dieses Jahr',
      unit_of_measurement: 'kWh',
    }),
  };
}
