import { format, parseISO, addHours, startOfHour, isSameDay } from 'date-fns';
import { de } from 'date-fns/locale';
import {
  Sun, Moon, Cloud, CloudRain, CloudSnow, CloudFog, CloudLightning,
  CloudSun, Wind,
} from 'lucide-react';

import { getHassBaseUrl, isHomeAssistant } from './hass';
import {
  isLightMode,
  isColorfulMode,
  isBlackColorfulMode,
  getColorSet,
  buildShadePalette,
  PASTEL_CARD_COLORS,
} from './colorThemes';

export const WEATHER_VIDEOS = {
  clear: 'clear.mp4',
  'clear-night': 'clear.mp4',
  partlycloudy: 'partlycloudy.mp4',
};

export function getWeatherVideoKey(condition) {
  const hour = new Date().getHours();
  if (condition === 'clear' && (hour < 6 || hour >= 20)) return 'clear-night';
  if (WEATHER_VIDEOS[condition]) return condition;
  return null;
}

export function getWeatherVideoSrc(hass, condition) {
  const key = getWeatherVideoKey(condition);
  if (!key) return null;

  const file = WEATHER_VIDEOS[key];
  const haPath = `/local/weather/${file}`;

  if (isHomeAssistant(hass)) {
    const base = getHassBaseUrl(hass);
    return base ? `${base}${haPath}` : haPath;
  }

  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}/weather/${file}`;
  }

  return `/weather/${file}`;
}

export const CONDITION_META = {
  sunny: { label: 'Sonnig', Icon: Sun, gradient: 'linear-gradient(160deg, #f59e0b 0%, #3b82f6 100%)' },
  clear: { label: 'Klar', Icon: Sun, gradient: 'linear-gradient(160deg, #38bdf8 0%, #6366f1 100%)' },
  'clear-night': { label: 'Klare Nacht', Icon: Moon, gradient: 'linear-gradient(160deg, #1e1b4b 0%, #0f172a 100%)' },
  partlycloudy: { label: 'Teilweise bewölkt', Icon: CloudSun, gradient: 'linear-gradient(160deg, #94a3b8 0%, #3b82f6 100%)' },
  cloudy: { label: 'Bewölkt', Icon: Cloud, gradient: 'linear-gradient(160deg, #64748b 0%, #334155 100%)' },
  rainy: { label: 'Regen', Icon: CloudRain, gradient: 'linear-gradient(160deg, #475569 0%, #1e40af 100%)' },
  pouring: { label: 'Starkregen', Icon: CloudRain, gradient: 'linear-gradient(160deg, #334155 0%, #1e3a8a 100%)' },
  snowy: { label: 'Schnee', Icon: CloudSnow, gradient: 'linear-gradient(160deg, #cbd5e1 0%, #64748b 100%)' },
  fog: { label: 'Nebel', Icon: CloudFog, gradient: 'linear-gradient(160deg, #9ca3af 0%, #6b7280 100%)' },
  lightning: { label: 'Gewitter', Icon: CloudLightning, gradient: 'linear-gradient(160deg, #4c1d95 0%, #1e3a8a 100%)' },
  hail: { label: 'Hagel', Icon: CloudSnow, gradient: 'linear-gradient(160deg, #94a3b8 0%, #475569 100%)' },
  windy: { label: 'Windig', Icon: Wind, gradient: 'linear-gradient(160deg, #38bdf8 0%, #64748b 100%)' },
  'windy-variant': { label: 'Windig', Icon: Wind, gradient: 'linear-gradient(160deg, #38bdf8 0%, #64748b 100%)' },
  'lightning-rainy': { label: 'Gewitter', Icon: CloudLightning, gradient: 'linear-gradient(160deg, #4c1d95 0%, #1e3a8a 100%)' },
  'snowy-rainy': { label: 'Schneeregen', Icon: CloudSnow, gradient: 'linear-gradient(160deg, #cbd5e1 0%, #64748b 100%)' },
  exceptional: { label: 'Extrem', Icon: CloudLightning, gradient: 'linear-gradient(160deg, #7c2d12 0%, #1e293b 100%)' },
};

const LIGHT_GRADIENT = 'linear-gradient(160deg, #a1a1aa 0%, #3f3f46 100%)';
const LIGHT_NIGHT_GRADIENT = 'linear-gradient(160deg, #71717a 0%, #27272a 100%)';

function getColorfulWeatherGradient(condition, hour, appearance) {
  const shades = buildShadePalette(getColorSet(appearance?.colorSet).accent);
  const isNight = hour < 6 || hour >= 20;
  if (condition === 'clear' && isNight) {
    return `linear-gradient(160deg, ${shades[4]} 0%, ${shades[7]} 100%)`;
  }
  return `linear-gradient(160deg, ${shades[1]} 0%, ${shades[4]} 100%)`;
}

function getBlackColorfulWeatherGradient(condition, hour) {
  const isNight = hour < 6 || hour >= 20;
  if (condition === 'clear' && isNight) return PASTEL_CARD_COLORS[4].bg; // lavender
  if (condition === 'sunny' || condition === 'clear') return PASTEL_CARD_COLORS[2].bg; // yellow
  if (condition === 'rainy' || condition === 'pouring') return PASTEL_CARD_COLORS[3].bg; // sky
  if (condition === 'snowy' || condition === 'hail') return PASTEL_CARD_COLORS[5].bg; // off-white
  return PASTEL_CARD_COLORS[3].bg; // sky default
}

export function getConditionMeta(condition, hour = new Date().getHours(), appearance) {
  const isNight = hour < 6 || hour >= 20;
  if (isLightMode(appearance)) {
    return {
      ...(CONDITION_META[condition] || CONDITION_META.cloudy),
      gradient: condition === 'clear' && isNight ? LIGHT_NIGHT_GRADIENT : LIGHT_GRADIENT,
    };
  }
  if (isColorfulMode(appearance)) {
    return {
      ...(CONDITION_META[condition] || CONDITION_META.cloudy),
      gradient: getColorfulWeatherGradient(condition, hour, appearance),
    };
  }
  if (isBlackColorfulMode(appearance)) {
    return {
      ...(CONDITION_META[condition] || CONDITION_META.cloudy),
      gradient: getBlackColorfulWeatherGradient(condition, hour),
    };
  }
  if (condition === 'clear' && isNight) return CONDITION_META['clear-night'];
  return CONDITION_META[condition] || CONDITION_META.cloudy;
}

export function getConditionIcon(condition, props = {}) {
  const { Icon } = getConditionMeta(condition);
  return <Icon {...props} />;
}

export function parseForecastDay(day) {
  const high = day.temperature ?? day.temp ?? day.temp_max;
  const low = day.templow ?? day.temp_min ?? (high != null ? high - 6 : null);
  return {
    datetime: day.datetime,
    condition: day.condition,
    high,
    low,
    precipitation: day.precipitation ?? day.precipitation_probability,
  };
}

export const WEATHER_FORECAST_DAILY = 1;
export const WEATHER_FORECAST_HOURLY = 2;

export function weatherSupportsDailyForecast(entity) {
  return Boolean((entity?.attributes?.supported_features ?? 0) & WEATHER_FORECAST_DAILY);
}

const EIGHT_HOURS_MS = 8 * 60 * 60 * 1000;

export function weatherSupportsHourlyForecast(entity) {
  const features = entity?.attributes?.supported_features ?? 0;
  if (features & WEATHER_FORECAST_HOURLY) return true;
  return isHourlyForecastSeries(entity?.attributes?.forecast);
}

function isHourlyForecastSeries(forecast) {
  if (!Array.isArray(forecast) || forecast.length < 3) return false;
  const first = parseISO(forecast[1].datetime);
  const second = parseISO(forecast[2].datetime);
  if (Number.isNaN(first.getTime()) || Number.isNaN(second.getTime())) return false;
  return second.getTime() - first.getTime() < EIGHT_HOURS_MS;
}

function readHourlyForecastAttributes(attributes = {}) {
  const sources = [
    attributes.hourly_forecast,
    attributes.forecast_hourly,
    attributes.hourly,
  ];

  for (const source of sources) {
    if (Array.isArray(source) && source.length) return source;
  }

  if (isHourlyForecastSeries(attributes.forecast)) {
    return attributes.forecast;
  }

  return null;
}

export function mapForecastSlots(forecast, entity, limit, { todayOnly = false } = {}) {
  const { state, attributes } = entity;
  const currentTemp = attributes.temperature;
  const now = new Date();
  const cutoff = addHours(startOfHour(now), -1);

  return forecast
    .map((slot) => ({
      slot,
      dt: slot.datetime ? parseISO(slot.datetime) : null,
    }))
    .filter(({ dt }) => {
      if (!dt || dt < cutoff) return false;
      if (todayOnly && !isSameDay(dt, now)) return false;
      return true;
    })
    .slice(0, limit)
    .map(({ slot, dt }, index) => {
      const isNow = index === 0 || (dt && Math.abs(dt.getTime() - now.getTime()) < 45 * 60 * 1000);
      const temp = slot.temperature ?? slot.temp ?? currentTemp;
      const hour = dt ? dt.getHours() : index;
      return {
        datetime: slot.datetime,
        hour,
        label: isNow ? 'Jetzt' : dt ? format(dt, 'HH:mm') : `${index}`,
        temp: temp != null ? Math.round(temp) : '—',
        condition: slot.condition ?? state,
      };
    });
}

export function buildForwardPreview(currentTemp, condition, forecastToday = null, limit = 8) {
  const now = new Date();
  const start = startOfHour(now);
  const high = forecastToday?.high ?? (typeof currentTemp === 'number' ? currentTemp + 4 : 22);
  const low = forecastToday?.low ?? (typeof currentTemp === 'number' ? currentTemp - 4 : 14);

  return Array.from({ length: limit }, (_, index) => {
    const dt = addHours(start, index);
    const hour = dt.getHours();
    const isNow = index === 0;
    const dayProgress = Math.max(0, Math.min(1, (hour - 6) / 17));
    const curve = Math.sin(dayProgress * Math.PI);
    const base = low + (high - low) * curve;
    const temp = isNow && typeof currentTemp === 'number'
      ? Math.round(currentTemp)
      : Math.round(base);

    let slotCondition = condition;
    if (hour >= 20 || hour < 6) {
      slotCondition = condition === 'sunny' || condition === 'clear' ? 'clear-night' : condition;
    } else if (condition === 'rainy' && hour < 12) {
      slotCondition = 'partlycloudy';
    }

    return {
      datetime: dt.toISOString(),
      hour,
      label: isNow ? 'Jetzt' : format(dt, 'HH:mm'),
      temp,
      condition: slotCondition,
    };
  });
}

export function buildDayPreview(currentTemp, condition, forecastToday = null) {
  return buildForwardPreview(currentTemp, condition, forecastToday, 6)
    .filter((slot) => {
      if (!slot.datetime) return true;
      return isSameDay(parseISO(slot.datetime), new Date());
    });
}

export function buildHourlyPreview(entity, limit = 6) {
  const hourlySource = readHourlyForecastAttributes(entity.attributes);
  if (hourlySource?.length) {
    return mapForecastSlots(hourlySource, entity, limit, { todayOnly: false });
  }

  const { state, attributes } = entity;
  const forecast = (attributes.forecast || []).map(parseForecastDay);
  const today = forecast[0] || null;
  return buildForwardPreview(attributes.temperature, state, today, limit);
}

export function buildWeatherPreviews(entity, hourlyForecast = null) {
  const hourlySource = hourlyForecast || readHourlyForecastAttributes(entity.attributes);
  if (hourlySource?.length) {
    return {
      dayPreview: mapForecastSlots(hourlySource, entity, 6, { todayOnly: true }),
      hourlyPreview: mapForecastSlots(hourlySource, entity, 8, { todayOnly: false }),
    };
  }

  const { state, attributes } = entity;
  const forecast = (attributes.forecast || []).map(parseForecastDay);
  const today = forecast[0] || null;
  const forward = buildForwardPreview(attributes.temperature, state, today, 8);

  return {
    dayPreview: forward.filter((slot) => (
      !slot.datetime || isSameDay(parseISO(slot.datetime), new Date())
    )).slice(0, 6),
    hourlyPreview: forward.slice(0, 8),
  };
}

function roundTemp(value) {
  return value != null && Number.isFinite(Number(value)) ? Math.round(Number(value)) : null;
}

export function buildUpcomingHours(entity, hourlySource, today, limit = 6) {
  const now = new Date();
  const slots = (hourlySource || [])
    .map((slot) => ({ slot, dt: slot.datetime ? parseISO(slot.datetime) : null }))
    .filter(({ dt }) => dt && !Number.isNaN(dt.getTime()) && dt > now)
    .slice(0, limit)
    .map(({ slot, dt }) => ({
      datetime: slot.datetime,
      hour: dt.getHours(),
      label: `${dt.getHours()} Uhr`,
      temp: roundTemp(slot.temperature ?? slot.temp),
      condition: slot.condition ?? entity.state,
    }));
  if (slots.length >= Math.min(limit, 3)) return slots;

  return buildForwardPreview(entity.attributes.temperature, entity.state, today, limit + 1)
    .slice(1)
    .map((slot) => ({ ...slot, label: `${slot.hour} Uhr` }));
}

export function buildUpcomingDays(forecast, limit = 6) {
  const now = new Date();
  return forecast
    .map((day) => ({ day, dt: day.datetime ? parseISO(day.datetime) : null }))
    .filter(({ dt }) => dt && !Number.isNaN(dt.getTime()) && dt > now && !isSameDay(dt, now))
    .slice(0, limit)
    .map(({ day, dt }) => ({
      ...day,
      label: format(dt, 'EEEEEE', { locale: de }),
      high: roundTemp(day.high),
      low: roundTemp(day.low),
    }));
}

export function extractWeatherData(entity, hourlyForecast = null, dailyForecast = null) {
  const { state, attributes, name } = entity;
  const forecast = (dailyForecast || attributes.forecast || []).map(parseForecastDay);
  const now = new Date();
  const today = forecast.find((day) => day.datetime && isSameDay(parseISO(day.datetime), now))
    || forecast[0]
    || null;
  const previews = buildWeatherPreviews(entity, hourlyForecast);
  const hourlySource = hourlyForecast || readHourlyForecastAttributes(attributes);

  return {
    name,
    condition: state,
    temp: attributes.temperature,
    humidity: attributes.humidity,
    pressure: attributes.pressure,
    windSpeed: attributes.wind_speed,
    windGust: attributes.wind_gust_speed,
    visibility: attributes.visibility,
    forecast,
    today,
    dayPreview: previews.dayPreview,
    hourlyPreview: previews.hourlyPreview,
    upcomingHours: buildUpcomingHours(entity, hourlySource, today),
    upcomingDays: buildUpcomingDays(forecast),
  };
}
