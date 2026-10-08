import { useState, useMemo, useRef, useEffect } from 'react';
import { format, parseISO, isToday } from 'date-fns';
import { de } from 'date-fns/locale';
import { Settings as SettingsIcon, X, Droplets, Wind, Gauge } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import {
  getConditionMeta,
  getConditionIcon,
  extractWeatherData,
  getWeatherVideoSrc,
} from '../lib/weather.jsx';
import { useHourlyForecast } from '../lib/useHourlyForecast';

const WEATHER_VIDEO_SLOW_DELAY_MS = 1000;
const WEATHER_VIDEO_SLOW_RATE = 0.2;
const WEATHER_VIDEO_BLEND_MS = 2000;

function syncVideoTime(from, to) {
  const t = from.currentTime;
  if (Number.isFinite(to.duration) && to.duration > 0) {
    to.currentTime = t % to.duration;
  } else {
    to.currentTime = t;
  }
}

function WeatherBackground({ condition, meta, hass, flat = false }) {
  const videoSrc = flat ? null : getWeatherVideoSrc(hass, condition);
  const fastRef = useRef(null);
  const slowRef = useRef(null);
  const [mode, setMode] = useState('fast');

  useEffect(() => {
    setMode('fast');
    const fast = fastRef.current;
    const slow = slowRef.current;

    if (fast) {
      fast.playbackRate = 1;
      fast.play().catch(() => {});
    }
    if (slow) {
      slow.playbackRate = WEATHER_VIDEO_SLOW_RATE;
      slow.pause();
      slow.currentTime = 0;
    }

    if (!videoSrc) return undefined;

    let cancelled = false;

    const startBlend = () => {
      if (cancelled) return;
      const f = fastRef.current;
      const s = slowRef.current;
      if (!f || !s) return;

      f.pause();
      syncVideoTime(f, s);
      s.play().catch(() => {});
      setMode('blending');
    };

    const blendTimer = window.setTimeout(() => {
      const s = slowRef.current;
      if (!s) return;
      if (s.readyState >= 1) startBlend();
      else s.addEventListener('loadedmetadata', startBlend, { once: true });
    }, WEATHER_VIDEO_SLOW_DELAY_MS);

    const endTimer = window.setTimeout(() => {
      if (!cancelled) setMode('slow');
    }, WEATHER_VIDEO_SLOW_DELAY_MS + WEATHER_VIDEO_BLEND_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(blendTimer);
      window.clearTimeout(endTimer);
    };
  }, [videoSrc]);

  return (
    <>
      {videoSrc && (
        <div className={`tm-weather-bg tm-weather-video-stack${mode !== 'fast' ? ` is-${mode}` : ''}`}>
          <video
            ref={slowRef}
            className="tm-weather-video tm-weather-video-slow"
            src={videoSrc}
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden
          />
          <video
            ref={fastRef}
            className="tm-weather-video tm-weather-video-fast"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden
          />
        </div>
      )}
      <div
        className="tm-weather-bg"
        style={{
          background: meta.gradient,
          opacity: videoSrc ? 0.45 : 1,
        }}
      />
      {!flat && (
        <div
          className="tm-weather-bg"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)',
          }}
        />
      )}
    </>
  );
}

function WeatherPlaceholder({ onConfigure }) {
  return (
    <button type="button" className="tm-card tm-weather-widget empty" onClick={onConfigure} style={{ cursor: onConfigure ? 'pointer' : 'default' }}>
      <div className="tm-weather-content">
        <div className="tm-placeholder-widget">
          <SettingsIcon size={32} />
          <span className="tm-text-sm">Wetter konfigurieren</span>
        </div>
      </div>
    </button>
  );
}

function DayStrip({ slots, compact = false, className = '' }) {
  return (
    <div className={`${compact ? 'tm-weather-day-strip' : 'tm-weather-hourly'}${className ? ` ${className}` : ''}`}>
      {slots.map((slot) => (
        <div
          key={slot.datetime || `${slot.label}-${slot.hour}`}
          className={`${compact ? 'tm-weather-slot' : 'tm-weather-hourly-slot'}${slot.label === 'Jetzt' ? ' now' : ''}`}
        >
          <span className="tm-weather-slot-time">{slot.label}</span>
          {getConditionIcon(slot.condition, { size: compact ? 14 : 22, strokeWidth: 1.75 })}
          <span className="tm-weather-slot-temp">{slot.temp}°</span>
        </div>
      ))}
    </div>
  );
}

function DailyForecast({ forecast }) {
  if (!forecast.length) return null;

  const temps = forecast.flatMap((d) => [d.high, d.low]).filter((t) => t != null);
  const minAll = Math.min(...temps);
  const maxAll = Math.max(...temps);
  const range = maxAll - minAll || 1;

  return (
    <div>
      <div className="tm-text-sm tm-opacity-50" style={{ marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        10-Tage-Vorschau
      </div>
      <div className="tm-weather-daily-list">
        {forecast.slice(0, 10).map((day, i) => {
          const date = day.datetime ? parseISO(day.datetime) : null;
          const dayLabel = date
            ? (isToday(date) ? 'Heute' : format(date, 'EEE', { locale: de }))
            : `Tag ${i + 1}`;
          const left = ((day.low ?? minAll) - minAll) / range * 100;
          const width = ((day.high ?? maxAll) - (day.low ?? minAll)) / range * 100;

          return (
            <div key={day.datetime || i} className="tm-weather-daily-row">
              <span className="tm-weather-daily-day">{dayLabel}</span>
              <div className="tm-weather-daily-bar">
                <div
                  className="tm-weather-daily-bar-fill"
                  style={{ left: `${left}%`, width: `${Math.max(width, 8)}%` }}
                />
              </div>
              {getConditionIcon(day.condition, { size: 20, strokeWidth: 1.75 })}
              <span className="tm-weather-daily-temp">{day.low != null ? `${Math.round(day.low)}°` : '—'}</span>
              <span className="tm-weather-daily-temp high">{day.high != null ? `${Math.round(day.high)}°` : '—'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WeatherExpanded({ data, onClose, hass, appearance }) {
  const meta = getConditionMeta(data.condition, new Date().getHours(), appearance);

  return (
    <div className="tm-weather-overlay" onClick={onClose}>
      <div className="tm-weather-overlay-backdrop" />
      <div
        className="tm-weather-expanded"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Wetterdetails"
      >
        <div className="tm-weather-expanded-header">
          <WeatherBackground condition={data.condition} meta={meta} hass={hass} />
          <button type="button" className="tm-weather-expanded-close" onClick={onClose} aria-label="Schließen">
            <X size={18} />
          </button>
          <div className="tm-weather-location">{data.name}</div>
          <div className="tm-weather-expanded-temp">
            {data.temp != null ? Math.round(data.temp) : '—'}°
          </div>
          <div className="tm-weather-condition">{meta.label}</div>
          {data.today && (
            <div className="tm-weather-hilo">
              H:{data.today.high != null ? Math.round(data.today.high) : '—'}° · L:{data.today.low != null ? Math.round(data.today.low) : '—'}°
            </div>
          )}
        </div>

        <div className="tm-weather-expanded-body">
          <div className="tm-text-sm tm-opacity-50" style={{ marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Heute
          </div>
          <DayStrip slots={data.dayPreview} />

          <div className="tm-text-sm tm-opacity-50" style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Nächste Stunden
          </div>
          <DayStrip slots={data.hourlyPreview.slice(0, 8)} />

          <div className="tm-weather-stats">
            <Stat label="Luftfeuchtigkeit" value={data.humidity != null ? `${data.humidity}%` : '—'} icon={Droplets} />
            <Stat label="Wind" value={data.windSpeed != null ? `${data.windSpeed} km/h` : '—'} icon={Wind} />
            <Stat label="Luftdruck" value={data.pressure != null ? `${data.pressure} hPa` : '—'} icon={Gauge} />
            <Stat
              label="Niederschlag"
              value={data.today?.precipitation != null ? `${data.today.precipitation}%` : '—'}
              icon={Droplets}
            />
          </div>

          <DailyForecast forecast={data.forecast} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, icon: Icon }) {
  return (
    <div className="tm-weather-stat">
      <span className="tm-weather-stat-label">{label}</span>
      <span className="tm-weather-stat-value tm-flex-center tm-gap-2" style={{ justifyContent: 'flex-start' }}>
        <Icon size={16} style={{ opacity: 0.6 }} />
        {value}
      </span>
    </div>
  );
}

export default function WeatherWidget({ entityId: entityIdProp, compact = false, onConfigure, editMode = false }) {
  const [expanded, setExpanded] = useState(false);
  const { hass, getEntity, revision } = useHass();
  const { config } = useConfig();
  const entityId = entityIdProp || config.weather?.entity_id || '';
  const entity = entityId ? getEntity(entityId) : null;
  const hourlyForecast = useHourlyForecast(hass, entityId, entity);
  const data = useMemo(
    () => (entity ? extractWeatherData(entity, hourlyForecast) : null),
    [entity, hourlyForecast, revision],
  );

  if (!entityId || !data) return <WeatherPlaceholder onConfigure={onConfigure} />;
  const meta = getConditionMeta(data.condition, new Date().getHours(), config.appearance);
  const flatPastel = config.appearance?.mode === 'blackColorful';

  return (
    <>
      <button
        type="button"
        className={`tm-card tm-weather-widget${compact ? ' tm-weather-compact' : ''}${flatPastel ? ' tm-weather-widget--pastel' : ''}`}
        onClick={() => {
          if (editMode) {
            onConfigure?.();
            return;
          }
          setExpanded(true);
        }}
        aria-label="Wetterdetails öffnen"
      >
        <WeatherBackground condition={data.condition} meta={meta} hass={hass} flat={flatPastel} />

        <div className="tm-weather-content">
          <div className="tm-weather-main">
            <div className="tm-weather-location">{data.name}</div>
            <div className="tm-weather-temp-xl">
              {data.temp != null ? Math.round(data.temp) : '—'}°
            </div>
            <div className="tm-weather-condition">{meta.label}</div>
            {data.today && (
              <div className="tm-weather-hilo">
                H:{data.today.high != null ? Math.round(data.today.high) : '—'}° · L:{data.today.low != null ? Math.round(data.today.low) : '—'}°
              </div>
            )}
          </div>

          <DayStrip slots={data.hourlyPreview.slice(0, 6)} compact className="tm-weather-hourly-preview" />
        </div>
      </button>

      {expanded && (
        <WeatherExpanded
          data={data}
          onClose={() => setExpanded(false)}
          hass={hass}
          appearance={config.appearance}
        />
      )}
    </>
  );
}
