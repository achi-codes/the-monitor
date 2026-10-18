import { useEffect, useRef, useState } from 'react';
import {
  Briefcase,
  ChevronRight,
  Clock3,
  Droplets,
  Fan,
  Flame,
  Home,
  Leaf,
  Minus,
  Moon,
  Plus,
  Power,
  Snowflake,
  Thermometer,
} from 'lucide-react';
import {
  formatTemp,
  readClimate,
  sliderBounds,
  snapTemperature,
  temperaturesFromSlider,
} from '../lib/climate';
import { setClimateHvacMode, setClimatePresetMode, setClimateTemperature } from '../lib/services';

const ICONS = {
  home: Home,
  leaf: Leaf,
  moon: Moon,
  luggage: Briefcase,
  flame: Flame,
  snowflake: Snowflake,
  fan: Fan,
  power: Power,
  thermometer: Thermometer,
  droplet: Droplets,
};

function sameTemp(left, right) {
  if (left == null || right == null) return left == null && right == null;
  return Math.abs(left - right) < 0.05;
}

function ModeIcon({ name, size = 18 }) {
  const Icon = ICONS[name] || Thermometer;
  return <Icon size={size} strokeWidth={1.8} />;
}

function TemperatureSlider({
  min,
  max,
  step,
  value,
  disabled,
  onChange,
  onCommit,
}) {
  const trackRef = useRef(null);
  const span = Math.max(step, max - min);
  const percent = Math.min(100, Math.max(0, ((value - min) / span) * 100));

  const valueFromPointer = (event) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect?.width) return value;
    const ratio = (event.clientX - rect.left) / rect.width;
    return snapTemperature(min + Math.min(1, Math.max(0, ratio)) * (max - min), min, max, step);
  };

  const nudge = (direction) => {
    if (disabled) return;
    const next = snapTemperature(value + direction * step, min, max, step);
    onChange(next);
    onCommit(next);
  };

  return (
    <div
      ref={trackRef}
      className="tm-thermo-track"
      role="slider"
      tabIndex={disabled ? -1 : 0}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={`${formatTemp(value)} Grad`}
      aria-disabled={disabled || undefined}
      aria-label="Solltemperatur"
      onPointerDown={(event) => {
        if (disabled) return;
        event.stopPropagation();
        event.currentTarget.setPointerCapture(event.pointerId);
        onChange(valueFromPointer(event));
      }}
      onPointerMove={(event) => {
        if (!event.currentTarget.hasPointerCapture?.(event.pointerId)) return;
        onChange(valueFromPointer(event));
      }}
      onPointerUp={(event) => {
        if (!event.currentTarget.hasPointerCapture?.(event.pointerId)) return;
        const next = valueFromPointer(event);
        onChange(next);
        onCommit(next);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
          event.preventDefault();
          nudge(1);
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
          event.preventDefault();
          nudge(-1);
        }
      }}
    >
      <div className="tm-thermo-track-fill" style={{ width: `${percent}%` }} />
      <div className="tm-thermo-thumb" style={{ left: `${percent}%` }} />
    </div>
  );
}

export default function ThermostatWidget({ widget, hass }) {
  const model = readClimate(hass, widget);
  const [draftLow, setDraftLow] = useState(null);
  const [draftHigh, setDraftHigh] = useState(null);
  const [draftMode, setDraftMode] = useState(null);
  const [, bump] = useState(0);
  const dragging = useRef(false);

  useEffect(() => {
    if (draftLow == null || dragging.current) return undefined;
    if (sameTemp(draftLow, model.target) && (draftHigh == null || sameTemp(draftHigh, model.targetHigh))) {
      setDraftLow(null);
      setDraftHigh(null);
      return undefined;
    }
    const timer = setTimeout(() => {
      setDraftLow(null);
      setDraftHigh(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [draftHigh, draftLow, model.target, model.targetHigh]);

  useEffect(() => {
    if (!draftMode) return undefined;
    if (model.activeModeId === draftMode) {
      setDraftMode(null);
      return undefined;
    }
    const timer = setTimeout(() => setDraftMode(null), 2500);
    return () => clearTimeout(timer);
  }, [draftMode, model.activeModeId]);

  if (!widget?.entity_id) {
    return (
      <div className="tm-thermo tm-thermo--empty">
        <Thermometer size={28} strokeWidth={1.6} />
        <div className="tm-thermo-empty-title">Thermostat</div>
        <p>Klima-Entität wählen — die Kachel übernimmt Profile, Betriebsart und Sollbereich.</p>
      </div>
    );
  }

  const low = draftLow ?? model.target;
  const high = draftHigh ?? model.targetHigh;
  const bounds = sliderBounds(model, low ?? model.min, high);
  const activeModeId = draftMode ?? model.activeModeId;
  const targetText = model.range && high != null
    ? `${formatTemp(low)}–${formatTemp(high)}°`
    : `${formatTemp(low)}°`;

  const commitTemperatures = async (sliderValue) => {
    dragging.current = false;
    if (model.locked || !model.entityId) return;
    const next = temperaturesFromSlider(model, sliderValue, high);
    setDraftLow(next.low);
    setDraftHigh(next.high);
    if (next.high != null) {
      await setClimateTemperature(hass, model.entityId, null, { low: next.low, high: next.high });
    } else {
      await setClimateTemperature(hass, model.entityId, next.low);
    }
    bump((value) => value + 1);
  };

  const stepTarget = (direction) => {
    if (model.locked) return;
    const next = snapTemperature((bounds.value ?? model.min) + direction * model.step, bounds.min, bounds.max, model.step);
    commitTemperatures(next);
  };

  const selectMode = async (mode) => {
    if (model.locked || mode.id === activeModeId) return;
    setDraftMode(mode.id);
    if (mode.temperature != null && !model.range) {
      setDraftLow(mode.temperature);
      setDraftHigh(null);
    }
    if (mode.kind === 'preset') {
      await setClimatePresetMode(hass, model.entityId, mode.id);
    } else {
      await setClimateHvacMode(hass, model.entityId, mode.id);
    }
    bump((value) => value + 1);
  };

  return (
    <div
      className={`tm-thermo${model.schedule ? ' tm-thermo--schedule' : ''}${model.modes.length ? ' tm-thermo--modes' : ''}${model.image ? ' tm-thermo--photo' : ''}`}
      data-tone={model.status.tone === 'cool' ? 'cool' : model.status.tone === 'off' ? 'off' : model.tone}
    >
      <div className="tm-thermo-top">
        <div className="tm-thermo-copy">
          <div className="tm-thermo-head">
            <div className="tm-thermo-heading">
              <div className="tm-thermo-title">{model.missing ? 'Nicht gefunden' : model.title}</div>
              <div className="tm-thermo-subtitle">{model.subtitle}</div>
            </div>
            <div className={`tm-thermo-badge tm-thermo-badge--${model.status.tone}`}>
              <ModeIcon name={model.status.icon} size={15} />
              <span>{model.status.label}</span>
            </div>
          </div>
          <div className="tm-thermo-temps">
            <div className="tm-thermo-temp-block">
              <div className="tm-thermo-current">{formatTemp(model.current)}°</div>
              <div className="tm-thermo-caption">Aktuell</div>
            </div>
            <div className="tm-thermo-divider" aria-hidden="true" />
            <div className="tm-thermo-temp-block tm-thermo-temp-block--target">
              <div className="tm-thermo-target">{targetText}</div>
              <div className="tm-thermo-caption">Solltemperatur</div>
            </div>
          </div>
        </div>

        <div className="tm-thermo-scene" aria-hidden="true">
          {model.image ? (
            <img src={model.image} alt="" draggable="false" />
          ) : (
            <div className={`tm-thermo-art tm-thermo-art--${model.tone === 'cool' ? 'cool' : 'heat'}`}>
              <div className="tm-thermo-art-window" />
              <div className="tm-thermo-art-glow" />
              <div className="tm-thermo-art-sofa" />
              <div className="tm-thermo-art-radiator" />
            </div>
          )}
        </div>
      </div>

      <div className="tm-thermo-controls">
        <button
          type="button"
          className="tm-thermo-step"
          onClick={() => stepTarget(-1)}
          disabled={model.locked}
          aria-label="Kälter"
        >
          <Minus size={18} />
        </button>
        <TemperatureSlider
          min={bounds.min}
          max={bounds.max}
          step={model.step}
          value={bounds.value ?? bounds.min}
          disabled={model.locked}
          onChange={(value) => {
            dragging.current = true;
            const next = temperaturesFromSlider(model, value, high);
            setDraftLow(next.low);
            setDraftHigh(next.high);
          }}
          onCommit={commitTemperatures}
        />
        <button
          type="button"
          className="tm-thermo-step"
          onClick={() => stepTarget(1)}
          disabled={model.locked}
          aria-label="Wärmer"
        >
          <Plus size={18} />
        </button>
      </div>

      {(model.modes.length > 0 || model.schedule) && (
        <div className="tm-thermo-foot">
          {model.modes.length > 0 && (
            <div className="tm-thermo-modes" role="group" aria-label={model.modeKind === 'preset' ? 'Profile' : 'Betriebsart'}>
              {model.modes.map((mode) => {
                const active = mode.id === activeModeId;
                const detail = active && model.schedule?.next?.until
                  ? model.schedule.next.until
                  : mode.detail;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    className={`tm-thermo-mode${active ? ' is-active' : ''}`}
                    aria-pressed={active}
                    disabled={model.locked}
                    onClick={() => selectMode(mode)}
                  >
                    <span className="tm-thermo-mode-icon"><ModeIcon name={mode.icon} /></span>
                    <span className="tm-thermo-mode-label">{mode.label}</span>
                    {detail ? <span className="tm-thermo-mode-detail">{detail}</span> : null}
                  </button>
                );
              })}
            </div>
          )}

          {model.schedule && (
            <div className="tm-thermo-next">
              <div className="tm-thermo-next-head">
                <span className="tm-thermo-next-clock" aria-hidden="true"><Clock3 size={16} /></span>
                <div className="tm-thermo-next-copy">
                  <div className="tm-thermo-next-title">Nächste Änderung</div>
                  <div className="tm-thermo-next-when">
                    {model.schedule.next ? `${model.schedule.next.day}, ${model.schedule.next.time}` : 'Kein Termin'}
                  </div>
                </div>
                <ChevronRight className="tm-thermo-next-chevron" size={16} aria-hidden="true" />
              </div>
              <div className="tm-thermo-timeline" aria-hidden="true">
                <div className="tm-thermo-timeline-track">
                  {model.schedule.segments.map((segment) => {
                    const span = (model.schedule.endHour - model.schedule.startHour) * 60;
                    const left = ((segment.start - model.schedule.startHour * 60) / span) * 100;
                    const width = ((segment.end - segment.start) / span) * 100;
                    return (
                      <span
                        key={`${segment.start}-${segment.end}`}
                        className="tm-thermo-timeline-block"
                        style={{ left: `${Math.max(0, left)}%`, width: `${Math.min(100 - Math.max(0, left), width)}%` }}
                      />
                    );
                  })}
                </div>
                <div className="tm-thermo-timeline-ticks">
                  {model.schedule.ticks.map((hour) => (
                    <span key={hour}>{String(hour).padStart(2, '0')}:00</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
