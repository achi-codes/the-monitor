import { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
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
  Rocket,
  Snowflake,
  Sofa,
  Thermometer,
} from 'lucide-react';
import {
  formatTemp,
  readClimate,
  sliderBounds,
  snapTemperature,
  temperaturesFromSlider,
} from '../lib/climate';
import { setClimateHvacMode, setClimatePower, setClimatePresetMode, setClimateTemperature } from '../lib/services';

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
  alert: AlertCircle,
  sofa: Sofa,
  rocket: Rocket,
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
      style={{ '--tm-thermo-ratio': percent / 100 }}
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
        event.currentTarget.classList.add('is-dragging');
        event.currentTarget.setPointerCapture(event.pointerId);
        onChange(valueFromPointer(event));
      }}
      onPointerMove={(event) => {
        if (!event.currentTarget.hasPointerCapture?.(event.pointerId)) return;
        onChange(valueFromPointer(event));
      }}
      onPointerUp={(event) => {
        event.currentTarget.classList.remove('is-dragging');
        if (!event.currentTarget.hasPointerCapture?.(event.pointerId)) return;
        const next = valueFromPointer(event);
        onChange(next);
        onCommit(next);
      }}
      onPointerCancel={(event) => {
        event.currentTarget.classList.remove('is-dragging');
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
      <div className="tm-thermo-track-fill" />
      <div className="tm-thermo-thumb" />
    </div>
  );
}

export default function ThermostatWidget({ widget, hass }) {
  const model = readClimate(hass, widget);
  const [draftLow, setDraftLow] = useState(null);
  const [draftHigh, setDraftHigh] = useState(null);
  const [draftMode, setDraftMode] = useState(null);
  const [draftPower, setDraftPower] = useState(null);
  const [, bump] = useState(0);
  const dragging = useRef(false);
  const resumeRef = useRef(null);

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

  useEffect(() => {
    if (model.powerOn && model.state && model.state !== 'off') resumeRef.current = model.state;
  }, [model.powerOn, model.state]);

  useEffect(() => {
    if (draftPower == null) return undefined;
    if (model.powerKnown && draftPower === model.powerOn) {
      setDraftPower(null);
      return undefined;
    }
    const timer = setTimeout(() => setDraftPower(null), 2500);
    return () => clearTimeout(timer);
  }, [draftPower, model.powerKnown, model.powerOn]);

  if (!widget?.entity_id) {
    return (
      <div className="tm-quick-action tm-thermo tm-thermo--empty">
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
  const powerOn = draftPower ?? (model.powerKnown ? model.powerOn : null);
  const targetText = model.range && high != null
    ? `${formatTemp(low)}–${formatTemp(high)}°`
    : `${formatTemp(low)}°`;

  const resumeMode = () => {
    const modes = model.hvacModes.filter((mode) => mode && mode !== 'off');
    if (resumeRef.current && modes.includes(resumeRef.current)) return resumeRef.current;
    const order = ['heat', 'heat_cool', 'auto', 'cool', 'dry', 'fan_only'];
    return order.find((mode) => modes.includes(mode)) || modes[0] || 'heat';
  };

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
    if (model.locked) return;
    if (mode.id === activeModeId && powerOn !== false) return;
    setDraftMode(mode.id);
    if (powerOn === false) setDraftPower(true);
    if (mode.temperature != null && !model.range) {
      setDraftLow(mode.temperature);
      setDraftHigh(null);
    }
    if (powerOn === false && model.powerSupported && mode.kind === 'preset') {
      await setClimatePower(hass, model.entityId, true, resumeMode());
    }
    if (mode.kind === 'preset') {
      await setClimatePresetMode(hass, model.entityId, mode.id);
    } else {
      await setClimateHvacMode(hass, model.entityId, mode.id);
    }
    bump((value) => value + 1);
  };

  const setPower = async (on) => {
    if (model.locked || !model.powerSupported || on === powerOn) return;
    setDraftPower(on);
    await setClimatePower(hass, model.entityId, on, on ? resumeMode() : undefined);
    bump((value) => value + 1);
  };

  return (
    <div
      className={`tm-quick-action tm-thermo${model.schedule ? ' tm-thermo--schedule' : ''}${powerOn === true ? ' is-on' : ''}${powerOn === false ? ' is-off' : ''}`}
      data-tone={model.accent === 'cool' || model.accent === 'dry' || model.accent === 'fan' ? model.accent : 'heat'}
    >
      <div className="tm-thermo-main">
        <div className="tm-thermo-info">
          <div className="tm-thermo-title">{model.missing ? 'Nicht gefunden' : model.title}</div>
          {model.subtitle ? <div className="tm-thermo-subtitle">{model.subtitle}</div> : null}
          <div className="tm-thermo-value">
            {formatTemp(model.current)}
            <span className="tm-thermo-unit">°</span>
          </div>
          <div className="tm-thermo-meta">
            <span className={`tm-thermo-status tm-thermo-status--${model.status.tone}`}>
              <ModeIcon name={model.status.icon} size={14} />
              {model.status.label}
            </span>
            <span className="tm-thermo-meta-dot" aria-hidden="true" />
            <span>Soll {targetText}</span>
          </div>
        </div>

        {model.powerSupported && (
          <div className="tm-thermo-power" role="group" aria-label="Betrieb">
            <button
              type="button"
              className={`tm-thermo-power-btn tm-thermo-power-btn--on${powerOn === true ? ' is-active' : ''}`}
              aria-pressed={powerOn === true}
              disabled={model.locked}
              onClick={() => setPower(true)}
            >
              An
            </button>
            <button
              type="button"
              className={`tm-thermo-power-btn tm-thermo-power-btn--off${powerOn === false ? ' is-active' : ''}`}
              aria-pressed={powerOn === false}
              disabled={model.locked}
              onClick={() => setPower(false)}
            >
              Aus
            </button>
          </div>
        )}
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
