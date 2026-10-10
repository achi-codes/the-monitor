import {
  useState, useEffect, useRef, useId,
} from 'react';
import { createPortal } from 'react-dom';
import {
  Plus, Sun, X, Shield, Blinds, ChevronUp, ChevronDown, Pause, Play, Check, Pipette,
} from 'lucide-react';
import EntityIcon from '../EntityIcon';
import {
  toggleEntity,
  activateScene,
  getBrightnessPercent,
  setEntityBrightness,
  turnOnEntity,
  turnOffEntity,
  getCoverPositionPercent,
  setCoverPosition,
  openCover,
  closeCover,
  stopCover,
  setLightRgbColor,
  setLightColorTemp,
} from '../../lib/services';
import {
  formatEntityState, isEntityOn, getDomain, getEntityAreaName,
} from '../../lib/entities';
import { getEnabledEntityIds, SLOT_LIMITS } from '../../lib/layout';
import { SCENE_ART, resolveSceneArtKey, describeSceneTargets } from '../../lib/sceneArt';
import {
  LIGHT_COLOR_PRESETS,
  getActiveLightPresetId,
  getLightColorSupport,
  getLightRgbFromState,
  hexToRgb,
  rgbToHex,
} from '../../lib/lightColors';
import { getOverlayRoot, useOverlayLock } from '../../lib/overlayPortal';
import { useConfig } from '../../context/ConfigContext';

import {
  getSceneGradients,
  isLightMode,
  isColorfulMode,
  isBlackColorfulMode,
  resolveColorTheme,
  getPastelSeriesVars,
} from '../../lib/colorThemes';

const LIGHT_ENTITY_COLORS = {
  light: { bg: 'transparent', icon: '#e4e4e7' },
  switch: { bg: 'transparent', icon: '#e4e4e7' },
  climate: { bg: 'transparent', icon: '#d4d4d8' },
  lock: { bg: 'transparent', icon: '#d4d4d8' },
  alarm_control_panel: { bg: 'transparent', icon: '#d4d4d8' },
  cover: { bg: 'transparent', icon: '#d4d4d8' },
  default: { bg: 'transparent', icon: '#e4e4e7' },
};

export const COLOR_MAP = {
  light: { bg: 'rgba(234, 179, 8, 0.1)', icon: '#fef08a' },
  switch: { bg: 'rgba(234, 179, 8, 0.1)', icon: '#fef08a' },
  climate: { bg: 'rgba(239, 68, 68, 0.1)', icon: '#fecaca' },
  lock: { bg: 'rgba(59, 130, 246, 0.1)', icon: '#bfdbfe' },
  alarm_control_panel: { bg: 'rgba(16, 185, 129, 0.1)', icon: '#a7f3d0' },
  cover: { bg: 'rgba(59, 130, 246, 0.1)', icon: '#bfdbfe' },
  default: { bg: 'rgba(255,255,255,0.05)', icon: 'rgba(255,255,255,0.5)' },
};

export function getSceneGradient(index, entityId, appearance) {
  const gradients = getSceneGradients(appearance);
  const key = entityId || String(index);
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = key.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export function getEntityColors(domain, appearance) {
  if (isLightMode(appearance)) return LIGHT_ENTITY_COLORS[domain] || LIGHT_ENTITY_COLORS.default;
  if (isBlackColorfulMode(appearance)) {
    return {
      bg: 'var(--tm-surface)',
      icon: 'var(--tm-tile-fg)',
    };
  }
  if (isColorfulMode(appearance)) {
    const { accentRgb } = resolveColorTheme(appearance);
    return {
      bg: `rgba(${accentRgb}, 0.22)`,
      icon: '#ffffff',
    };
  }
  return COLOR_MAP[domain] || COLOR_MAP.default;
}

export function isActionableDomain(domain) {
  return !['climate', 'sensor', 'binary_sensor'].includes(domain);
}

export function getPopupSummary(entities, slotLabel) {
  const activeCount = entities.filter((item) => item.active).length;
  const total = entities.length;
  const label = slotLabel || (total === 1 ? entities[0]?.label : `${total} Geräte`);

  let sub;
  if (total === 0) sub = '';
  else if (activeCount === 0) sub = 'Alle aus';
  else if (activeCount === total) sub = 'Alle an';
  else sub = `${activeCount} von ${total} an`;

  return {
    label,
    sub,
    active: activeCount > 0,
    activeCount,
    total,
  };
}

export function isCoverOpen(hass, entityId) {
  const position = getCoverPositionPercent(hass, entityId);
  return position > 0;
}

export function getCoverPopupSummary(hass, entityIds, slotLabel, getEntity) {
  const items = entityIds.map((entityId) => {
    const entity = getEntity(entityId);
    return {
      entityId,
      position: getCoverPositionPercent(hass, entityId),
      label: entity.name,
    };
  });
  const openCount = items.filter((item) => item.position > 0).length;
  const total = items.length;
  const label = slotLabel || (total === 1 ? items[0]?.label : `${total} Rolläden`);

  let sub;
  if (total === 0) sub = '';
  else if (openCount === 0) sub = 'Alle geschlossen';
  else if (openCount === total) sub = 'Alle offen';
  else sub = `${openCount} von ${total} offen`;

  return {
    label,
    sub,
    active: openCount > 0,
    openCount,
    total,
    items,
  };
}

const DEFAULT_LIGHT_RGB = [255, 196, 120];

function getLightStatusLabel(state) {
  if (state === 'unavailable' || state === 'unknown') return 'Nicht verfügbar';
  return state === 'on' ? 'Eingeschaltet' : 'Ausgeschaltet';
}

function LightLampVisual({ on, onToggle, disabled, label }) {
  const uid = useId().replace(/:/g, '');
  const coneId = `tm-light-cone-${uid}`;
  const shadeId = `tm-light-shade-${uid}`;
  return (
    <button
      type="button"
      className={`tm-light-card-visual${on ? ' on' : ''}`}
      onClick={onToggle}
      disabled={disabled}
      aria-label={`${label} ${on ? 'ausschalten' : 'einschalten'}`}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMin meet" aria-hidden>
        <defs>
          <linearGradient id={coneId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="tm-light-card-cone-stop" stopOpacity="0.85" />
            <stop offset="100%" className="tm-light-card-cone-stop" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={shadeId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdf6f0" />
            <stop offset="100%" stopColor="#f1ddd0" />
          </linearGradient>
        </defs>
        <polygon className="tm-light-card-cone" points="22,56 78,56 104,104 -4,104" fill={`url(#${coneId})`} />
        <line x1="50" y1="-2" x2="50" y2="24" className="tm-light-card-cord" />
        <rect x="45" y="22" width="10" height="5" rx="1.5" className="tm-light-card-cap" />
        <path d="M20 56 C20 36 33 26 50 26 C67 26 80 36 80 56 Z" fill={`url(#${shadeId})`} />
        <ellipse cx="50" cy="56" rx="30" ry="4.5" className="tm-light-card-rim" />
      </svg>
    </button>
  );
}

function LightCard({ widget, hass, entity, editMode }) {
  const entityId = widget.entity_id;
  const label = widget.label || entity.name;
  const area = getEntityAreaName(hass, entityId);
  const isLight = getDomain(entityId) === 'light';
  const active = entity.state === 'on';
  const brightness = active ? getBrightnessPercent(hass, entityId) : 0;
  const colorSupport = isLight ? getLightColorSupport(hass, entityId) : { colorTemp: false, rgb: false };
  const presets = LIGHT_COLOR_PRESETS.filter((preset) => (
    colorSupport.rgb || (colorSupport.colorTemp && preset.kelvin)
  ));
  const activePresetId = isLight ? getActiveLightPresetId(hass, entityId) : null;
  const lightRgb = (isLight && getLightRgbFromState(hass, entityId)) || DEFAULT_LIGHT_RGB;

  const [value, setValue] = useState(brightness);
  const [isDragging, setIsDragging] = useState(false);
  const dragging = useRef(false);
  const trackRef = useRef(null);
  const colorInputRef = useRef(null);

  useEffect(() => {
    if (!dragging.current) setValue(brightness);
  }, [brightness]);

  useEffect(() => {
    const input = colorInputRef.current;
    if (!input) return undefined;
    const onChange = () => {
      const rgb = hexToRgb(input.value);
      if (rgb) setLightRgbColor(hass, entityId, rgb);
    };
    input.addEventListener('change', onChange);
    return () => input.removeEventListener('change', onChange);
  }, [hass, entityId]);

  const valueFromPointer = (clientX) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return value;
    return Math.min(100, Math.max(0, Math.round(((clientX - rect.left) / rect.width) * 100)));
  };

  const handlePointerDown = (event) => {
    if (editMode) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = true;
    setIsDragging(true);
    setValue(valueFromPointer(event.clientX));
  };

  const handlePointerMove = (event) => {
    if (!dragging.current) return;
    setValue(valueFromPointer(event.clientX));
  };

  const handleRelease = (event) => {
    if (!dragging.current) return;
    dragging.current = false;
    setIsDragging(false);
    const next = valueFromPointer(event.clientX);
    setValue(next);
    setEntityBrightness(hass, entityId, next);
  };

  const handleKeyDown = (event) => {
    if (editMode) return;
    const step = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = Math.min(100, Math.max(0, value + step));
    setValue(next);
    setEntityBrightness(hass, entityId, next);
  };

  const handlePreset = (preset) => {
    if (editMode) return;
    if (preset.kelvin && colorSupport.colorTemp) setLightColorTemp(hass, entityId, preset.kelvin);
    else setLightRgbColor(hass, entityId, preset.rgb);
  };

  const customActive = activePresetId === 'custom';

  return (
    <div
      className={`tm-quick-action tm-light-card${active ? ' on' : ''}${isDragging ? ' dragging' : ''}`}
      style={{
        '--tm-light-rgb': lightRgb.join(', '),
        '--tm-light-level': active ? Math.max(0.25, value / 100) : 0,
      }}
    >
      <div className="tm-light-card-main">
        <div className="tm-light-card-info">
          <div className="tm-light-card-title">{label}</div>
          {area && <div className="tm-light-card-area">{area}</div>}
          <div className="tm-light-card-value">
            {value}
            <span className="tm-light-card-unit">%</span>
          </div>
          <div className="tm-light-card-status">{getLightStatusLabel(entity.state)}</div>
        </div>
        <LightLampVisual
          on={active}
          label={label}
          disabled={editMode}
          onToggle={() => toggleEntity(hass, entityId)}
        />
      </div>

      <div
        ref={trackRef}
        className="tm-light-card-slider"
        style={{ '--tm-light-ratio': value / 100 }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handleRelease}
        onPointerCancel={handleRelease}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label={`Helligkeit ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        tabIndex={editMode ? -1 : 0}
      >
        <div className="tm-light-card-slider-fill" />
        <div className="tm-light-card-slider-thumb" />
      </div>

      {presets.length > 0 && (
        <div className="tm-light-card-colors" role="group" aria-label="Lichtfarbe wählen">
          {presets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className={`tm-light-card-color${activePresetId === preset.id ? ' active' : ''}`}
              style={{ '--tm-swatch': preset.swatch }}
              onClick={() => handlePreset(preset)}
              disabled={editMode}
              aria-pressed={activePresetId === preset.id}
            >
              <span className="tm-light-card-swatch" />
              <span className="tm-light-card-color-label">{preset.label}</span>
            </button>
          ))}
          {colorSupport.rgb && (
            <label
              className={`tm-light-card-color tm-light-card-color--picker${customActive ? ' active' : ''}${editMode ? ' disabled' : ''}`}
              style={customActive ? { '--tm-swatch': `rgb(${lightRgb.join(', ')})` } : undefined}
            >
              <span className="tm-light-card-swatch">
                {!customActive && <Pipette size={20} strokeWidth={2} />}
              </span>
              <span className="tm-light-card-color-label">Farbe</span>
              <input
                ref={colorInputRef}
                type="color"
                className="tm-light-card-color-input"
                defaultValue={rgbToHex(lightRgb)}
                disabled={editMode}
                aria-label="Eigene Farbe wählen"
              />
            </label>
          )}
        </div>
      )}
    </div>
  );
}

function BrightnessQuickAction({ widget, hass, getEntity, onConfigure, editMode }) {
  if (!widget.entity_id) {
    return (
      <button type="button" className="tm-quick-action tm-light-card empty" onClick={onConfigure}>
        <Sun size={24} />
        <span className="tm-text-sm">Licht konfigurieren</span>
      </button>
    );
  }

  return (
    <LightCard
      widget={widget}
      hass={hass}
      entity={getEntity(widget.entity_id)}
      editMode={editMode}
    />
  );
}

export function QuickActionWidget({ widget, hass, getEntity, onConfigure, editMode }) {
  const { config } = useConfig();
  const appearance = config.appearance;

  if (widget.mode === 'brightness') {
    return <BrightnessQuickAction widget={widget} hass={hass} getEntity={getEntity} onConfigure={onConfigure} editMode={editMode} />;
  }

  if (!widget.entity_id) {
    return (
      <button type="button" className="tm-quick-action empty" onClick={onConfigure}>
        <Plus size={24} />
        <span className="tm-text-sm">Konfigurieren</span>
      </button>
    );
  }

  const entity = getEntity(widget.entity_id);
  const domain = getDomain(widget.entity_id);
  const active = isEntityOn(entity.state, domain);
  const colors = getEntityColors(domain, appearance);
  const label = widget.label || entity.name;
  const sub = formatEntityState(hass, widget.entity_id);
  const isActionable = isActionableDomain(domain);

  const handleClick = () => {
    if (editMode || !isActionable) return;
    toggleEntity(hass, widget.entity_id);
  };

  const activeStyle = active
    ? (isLightMode(appearance)
      ? { background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff' }
      : isBlackColorfulMode(appearance)
        ? {
          background: 'var(--tm-surface)',
          color: 'var(--tm-tile-fg)',
          boxShadow: 'inset 0 0 0 2.5px var(--tm-tile-fg)',
        }
        : isColorfulMode(appearance)
          ? { background: `rgba(${resolveColorTheme(appearance).accentRgb}, 0.45)`, color: '#ffffff' }
          : { background: 'rgba(234, 179, 8, 0.2)', color: '#fef08a' })
    : { background: colors.bg };

  return (
    <button
      type="button"
      className={`tm-quick-action${active ? ' active' : ''}`}
      style={{ ...activeStyle, cursor: isActionable && !editMode ? 'pointer' : 'default' }}
      onClick={handleClick}
    >
      <div className="tm-flex-row tm-justify-between tm-items-center" style={{ width: '100%' }}>
        <EntityIcon hass={hass} entity={entity} overrideIcon={widget.icon} size={24} style={active ? {} : { opacity: 0.7, color: colors.icon }} />
        {active && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor' }} />}
      </div>
      <div className="tm-flex-col" style={{ marginTop: 'auto' }}>
        <div className="tm-font-bold" style={{ fontSize: '1.125rem', lineHeight: 1.25 }}>{label}</div>
        <div className="tm-text-xs tm-opacity-70" style={{ marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{sub}</div>
      </div>
    </button>
  );
}

function isAlarmArmed(state) {
  return state !== 'disarmed' && state !== 'unavailable';
}

function isAlarmTriggered(state) {
  return state === 'triggered' || state === 'triggering' || state === 'pending';
}

export function AlarmWidget({ widget, hass, getEntity, onConfigure, editMode }) {
  if (!widget.entity_id) {
    return (
      <button type="button" className="tm-alarm-widget empty" onClick={onConfigure}>
        <Shield size={24} />
        <span className="tm-text-sm">Alarm konfigurieren</span>
      </button>
    );
  }

  const entity = getEntity(widget.entity_id);
  const { state } = entity;
  const armed = isAlarmArmed(state);
  const triggered = isAlarmTriggered(state);
  const label = widget.label || entity.name;
  const sub = formatEntityState(hass, widget.entity_id);

  const handleClick = () => {
    if (editMode) return;
    toggleEntity(hass, widget.entity_id);
  };

  return (
    <button
      type="button"
      className={`tm-alarm-widget${armed ? ' armed' : ''}${triggered ? ' triggered' : ''}`}
      onClick={handleClick}
      aria-label={`${label}: ${sub}`}
    >
      <div className="tm-alarm-widget-top">
        <EntityIcon
          hass={hass}
          entity={entity}
          overrideIcon={widget.icon || 'mdi:shield-home'}
          size={26}
          className="tm-alarm-widget-icon"
        />
        {armed && <span className="tm-alarm-widget-dot" aria-hidden />}
      </div>
      <div className="tm-alarm-widget-body">
        <div className="tm-alarm-widget-label">{label}</div>
        <div className="tm-alarm-widget-state">{sub}</div>
      </div>
    </button>
  );
}

function SceneCard({
  entityId, label, artKey, hass, getEntity, editMode, colorVars,
}) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return undefined;
    const timer = setTimeout(() => setStarted(false), 1600);
    return () => clearTimeout(timer);
  }, [started]);

  const entity = getEntity(entityId);
  const name = label || entity.name;
  const description = describeSceneTargets(hass, entityId);
  const art = SCENE_ART[resolveSceneArtKey(name, artKey)];

  const handleStart = () => {
    if (editMode) return;
    activateScene(hass, entityId);
    setStarted(true);
  };

  return (
    <div className="tm-scene-card" style={colorVars}>
      <div className="tm-scene-card-inner">
        <div className="tm-scene-card-text">
          <div className="tm-scene-card-kicker">{getDomain(entityId) === 'script' ? 'Skript' : 'Szene'}</div>
          <div className="tm-scene-card-title">{name}</div>
          {description && <div className="tm-scene-card-sub">{description}</div>}
        </div>
        <div className="tm-scene-card-art">
          {!art.ownBackdrop && <div className="tm-scene-card-art-disc" />}
          <img src={art.src} alt="" draggable={false} />
        </div>
        <button
          type="button"
          className={`tm-scene-card-start${started ? ' started' : ''}`}
          onClick={handleStart}
          disabled={editMode}
          aria-label={`${name} starten`}
        >
          {started
            ? <Check size={26} strokeWidth={2.75} />
            : <Play size={26} fill="currentColor" strokeWidth={0} />}
          <span className="tm-scene-card-start-label">{started ? 'Gestartet' : 'Szene starten'}</span>
        </button>
      </div>
    </div>
  );
}

export function SceneWidget({ widget, hass, getEntity, onConfigure, editMode }) {
  const { config } = useConfig();
  const entityIds = widget.entity_ids?.length
    ? widget.entity_ids.slice(0, SLOT_LIMITS.sceneEntities)
    : (widget.entity_id ? [widget.entity_id] : []);

  if (entityIds.length === 0) {
    return (
      <button type="button" className="tm-scene-btn empty" onClick={onConfigure}>
        <Plus size={20} />
        <span className="tm-text-sm">Szene</span>
      </button>
    );
  }

  const pastel = isBlackColorfulMode(config.appearance);

  return (
    <div className="tm-scenes">
      <div className={`tm-scenes-grid tm-scenes-grid--${entityIds.length}`}>
        {entityIds.map((entityId, index) => (
          <SceneCard
            key={entityId}
            entityId={entityId}
            label={entityIds.length === 1 ? widget.label : ''}
            artKey={widget.scene_art?.[entityId]}
            hass={hass}
            getEntity={getEntity}
            editMode={editMode}
            colorVars={pastel ? getPastelSeriesVars(widget.id, index) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function PopupTrigger({
  variant, summary, gradient, active, slot, primaryEntity, entityCount, hass, onClick, appearance,
}) {
  const blackColorful = isBlackColorfulMode(appearance);
  return (
    <button
      type="button"
      className={`tm-scene-btn tm-qa-scene-trigger${active ? ' active' : ''}${blackColorful && active ? ' tm-scene-btn--pastel-active' : ''}`}
      onClick={onClick}
      aria-label={`${summary.label} ${summary.sub}`}
    >
      <div
        className="tm-scene-gradient"
        style={{
          background: active
            ? (blackColorful
              ? gradient
              : 'linear-gradient(135deg, rgba(234, 179, 8, 0.55), rgba(180, 130, 0, 0.35))')
            : gradient,
          opacity: blackColorful ? 1 : (active ? 1 : 0.55),
        }}
      />
      {variant === 'status' ? (
        <>
          <div className="tm-scene-icon">
            <span className="tm-qa-scene-state">{summary.sub}</span>
          </div>
          <div className="tm-scene-label">{active ? 'An' : 'Aus'}</div>
        </>
      ) : (
        <>
          <div className="tm-scene-icon tm-qa-scene-icon-wrap">
            <EntityIcon
              hass={hass}
              entity={primaryEntity}
              overrideIcon={slot.icon || (entityCount > 1 ? 'mdi:layers' : '')}
              size={18}
              style={{ color: blackColorful ? 'currentColor' : 'white' }}
            />
            {entityCount > 1 && <span className="tm-qa-entity-count">{entityCount}</span>}
          </div>
          <div className="tm-scene-label">{summary.label}</div>
        </>
      )}
    </button>
  );
}

export function PopupWidget({
  widget, widgetIndex, hass, getEntity, onConfigure, onOpen, editMode,
}) {
  const { config } = useConfig();
  const entityIds = getEnabledEntityIds(widget);
  if (entityIds.length === 0) {
    return (
      <button type="button" className="tm-scene-btn empty" onClick={onConfigure}>
        <Plus size={20} />
        <span className="tm-text-sm">Entitäten konfigurieren</span>
      </button>
    );
  }

  const entities = entityIds.map((entityId) => {
    const entity = getEntity(entityId);
    const domain = getDomain(entityId);
    return {
      entityId,
      entity,
      domain,
      active: isEntityOn(entity.state, domain),
      label: entity.name,
      sub: formatEntityState(hass, entityId),
      actionable: isActionableDomain(domain),
    };
  });
  const summary = getPopupSummary(entities, widget.label);
  const gradient = getSceneGradient(widgetIndex, entityIds[0], config.appearance);
  const primaryEntity = entities[0]?.entity;

  const openPopup = () => {
    if (editMode) {
      onConfigure?.();
      return;
    }
    onOpen?.({
      slot: widget,
      entities,
      summary,
      index: widgetIndex,
      gradient,
    });
  };

  return (
    <div className="tm-popup-widget-stack">
      <PopupTrigger
        variant="icon"
        summary={summary}
        gradient={gradient}
        active={summary.active}
        slot={widget}
        primaryEntity={primaryEntity}
        entityCount={entityIds.length}
        hass={hass}
        onClick={openPopup}
        appearance={config.appearance}
      />
      <PopupTrigger
        variant="status"
        summary={summary}
        gradient={gradient}
        active={summary.active}
        slot={widget}
        primaryEntity={primaryEntity}
        entityCount={entityIds.length}
        hass={hass}
        onClick={openPopup}
        appearance={config.appearance}
      />
    </div>
  );
}

function PopupEntityRow({ item, hass, onToggle }) {
  return (
    <div className={`tm-qa-popup-entity${item.active ? ' active' : ''}${item.disabled ? ' disabled' : ''}`}>
      <EntityIcon
        hass={hass}
        entity={item.entity}
        size={18}
        style={{ color: item.active ? '#fef08a' : 'rgba(255,255,255,0.7)' }}
      />
      <div className="tm-qa-popup-entity-text">
        <span className="tm-qa-popup-entity-name">{item.label}</span>
        <span className="tm-qa-popup-entity-state">{item.sub}</span>
      </div>
      {item.actionable ? (
        <button type="button" className="tm-qa-popup-entity-toggle" onClick={() => onToggle(item.entityId)}>
          {item.active ? 'Aus' : 'An'}
        </button>
      ) : (
        <span className="tm-qa-popup-entity-readonly" aria-hidden />
      )}
    </div>
  );
}

export function QuickActionPopup({ data, hass, onClose }) {
  const { slot, entities, summary, gradient } = data;
  const actionableEntities = entities.filter((item) => item.actionable);
  const allActive = actionableEntities.length > 0 && actionableEntities.every((item) => item.active);
  const primaryEntity = entities[0]?.entity;

  useOverlayLock(true);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleToggleEntity = (entityId) => {
    toggleEntity(hass, entityId);
  };

  const handleToggleAll = () => {
    const action = allActive ? turnOffEntity : turnOnEntity;
    actionableEntities.forEach((item) => action(hass, item.entityId));
  };

  return createPortal(
    <div className="tm-qa-popup-overlay" role="presentation">
      <button
        type="button"
        className="tm-qa-popup-backdrop"
        onClick={onClose}
        aria-label="Schließen"
      />
      <div
        className="tm-qa-popup-panel tm-qa-popup-panel--multi"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={summary.label}
      >
        <div
          className="tm-scene-gradient"
          style={{
            background: summary.active
              ? 'linear-gradient(135deg, rgba(234, 179, 8, 0.55), rgba(180, 130, 0, 0.35))'
              : gradient,
            opacity: 0.45,
          }}
        />
        <button type="button" className="tm-qa-popup-close" onClick={onClose} aria-label="Schließen">
          <X size={16} />
        </button>

        <div className="tm-qa-popup-header">
          <div className="tm-scene-icon tm-qa-popup-header-icon">
            <EntityIcon
              hass={hass}
              entity={primaryEntity}
              overrideIcon={slot.icon || (entities.length > 1 ? 'mdi:layers' : '')}
              size={22}
              style={{ color: 'white' }}
            />
          </div>
          <div className="tm-qa-popup-header-text">
            <div className="tm-scene-label">{summary.label}</div>
            <div className="tm-qa-popup-state">{summary.sub}</div>
          </div>
        </div>

        <div className="tm-qa-popup-entities">
          {entities.map((item) => (
            <PopupEntityRow
              key={item.entityId}
              item={item}
              hass={hass}
              onToggle={handleToggleEntity}
            />
          ))}
        </div>

        {actionableEntities.length > 1 && (
          <button type="button" className="tm-qa-popup-toggle" onClick={handleToggleAll}>
            {allActive ? 'Alle ausschalten' : 'Alle einschalten'}
          </button>
        )}
      </div>
    </div>,
    getOverlayRoot(),
  );
}

function CoverPositionSlider({
  entityId,
  label,
  entity,
  hass,
  overrideIcon,
  editMode,
  variant = 'group',
}) {
  const position = getCoverPositionPercent(hass, entityId);
  const [value, setValue] = useState(position);
  const [isDragging, setIsDragging] = useState(false);
  const dragging = useRef(false);
  const tileRef = useRef(null);

  useEffect(() => {
    if (!dragging.current) setValue(position);
  }, [position]);

  const handleRelease = () => {
    dragging.current = false;
    setIsDragging(false);
  };

  const updateFromPointer = (clientY) => {
    const rect = tileRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = Math.min(100, Math.max(0, Math.round(((rect.bottom - clientY) / rect.height) * 100)));
    setValue(next);
    setCoverPosition(hass, entityId, next);
  };

  const handlePointerDown = (e) => {
    if (editMode) return;
    tileRef.current?.setPointerCapture(e.pointerId);
    dragging.current = true;
    setIsDragging(true);
    updateFromPointer(e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!dragging.current) return;
    updateFromPointer(e.clientY);
  };

  if (variant === 'row') {
    return (
      <div className={`tm-cover-popup-entity${value > 0 ? ' active' : ''}`}>
        <EntityIcon hass={hass} entity={entity} size={18} style={{ color: value > 0 ? '#bfdbfe' : 'rgba(255,255,255,0.7)' }} />
        <div className="tm-cover-popup-entity-text">
          <span className="tm-cover-popup-entity-name">{label}</span>
          <span className="tm-cover-popup-entity-state">{value}%</span>
        </div>
        <input
          type="range"
          className="tm-cover-popup-slider"
          min={0}
          max={100}
          value={value}
          disabled={editMode}
          onChange={(e) => {
            const next = Number(e.target.value);
            setValue(next);
            setCoverPosition(hass, entityId, next);
          }}
          aria-label={`Position ${label}`}
        />
      </div>
    );
  }

  return (
    <div
      ref={tileRef}
      className={`tm-quick-action tm-cover-action tm-cover-action--group${value > 0 ? ' active' : ''}${isDragging ? ' dragging' : ''}`}
      style={{ '--tm-cover-position': `${value}%` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handleRelease}
      onPointerCancel={handleRelease}
      role="slider"
      aria-label={`Position ${label}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      tabIndex={editMode ? -1 : 0}
    >
      <div className="tm-cover-fill" />
      <div className="tm-cover-header">
        <EntityIcon hass={hass} entity={entity} overrideIcon={overrideIcon} size={20} style={{ opacity: 0.9, color: '#bfdbfe' }} />
        <div className="tm-flex-col" style={{ minWidth: 0, flex: 1 }}>
          <div className="tm-font-bold tm-cover-group-label">{label}</div>
          <div className="tm-text-xs tm-opacity-70">{value}%</div>
        </div>
      </div>
    </div>
  );
}

function getCoverStatusLabel(state, position) {
  if (state === 'opening') return 'Öffnet …';
  if (state === 'closing') return 'Schließt …';
  if (state === 'unavailable' || state === 'unknown') return 'Nicht verfügbar';
  return position > 0 ? 'Geöffnet' : 'Geschlossen';
}

function CoverCard({ entityId, label, entity, hass, editMode }) {
  const position = getCoverPositionPercent(hass, entityId);
  const [value, setValue] = useState(position);
  const [isDragging, setIsDragging] = useState(false);
  const dragging = useRef(false);
  const windowRef = useRef(null);
  const area = getEntityAreaName(hass, entityId);

  useEffect(() => {
    if (!dragging.current) setValue(position);
  }, [position]);

  const valueFromPointer = (clientY) => {
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return value;
    const closedShare = (clientY - rect.top) / rect.height;
    return Math.min(100, Math.max(0, Math.round((1 - closedShare) * 100)));
  };

  const handlePointerDown = (event) => {
    if (editMode) return;
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = true;
    setIsDragging(true);
    setValue(valueFromPointer(event.clientY));
  };

  const handlePointerMove = (event) => {
    if (!dragging.current) return;
    setValue(valueFromPointer(event.clientY));
  };

  const handleRelease = (event) => {
    if (!dragging.current) return;
    dragging.current = false;
    setIsDragging(false);
    const next = valueFromPointer(event.clientY);
    setValue(next);
    setCoverPosition(hass, entityId, next);
  };

  const status = getCoverStatusLabel(entity.state, value);

  return (
    <div className={`tm-quick-action tm-cover-card${isDragging ? ' dragging' : ''}`}>
      <div className="tm-cover-card-main">
        <div className="tm-cover-card-info">
          <div className="tm-cover-card-title">{label}</div>
          {area && <div className="tm-cover-card-area">{area}</div>}
          <div className="tm-cover-card-value">
            {value}
            <span className="tm-cover-card-unit">%</span>
          </div>
          <div className="tm-cover-card-status">{status}</div>
        </div>

        <div
          className="tm-cover-visual"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handleRelease}
          onPointerCancel={handleRelease}
          role="slider"
          aria-label={`Position ${label}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
          tabIndex={editMode ? -1 : 0}
        >
          <div className="tm-cover-visual-box" />
          <div ref={windowRef} className="tm-cover-visual-window">
            <div className="tm-cover-visual-view" />
            <div className="tm-cover-visual-slats" style={{ height: `${100 - value}%` }} />
          </div>
        </div>
      </div>

      <div className="tm-cover-card-controls">
        <button
          type="button"
          className="tm-cover-card-btn"
          disabled={editMode}
          onClick={() => openCover(hass, entityId)}
          aria-label={`${label} öffnen`}
        >
          <ChevronUp size={22} strokeWidth={2.25} />
        </button>
        <button
          type="button"
          className="tm-cover-card-btn tm-cover-card-btn--stop"
          disabled={editMode}
          onClick={() => stopCover(hass, entityId)}
          aria-label={`${label} stoppen`}
        >
          <Pause size={22} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          className="tm-cover-card-btn"
          disabled={editMode}
          onClick={() => closeCover(hass, entityId)}
          aria-label={`${label} schließen`}
        >
          <ChevronDown size={22} strokeWidth={2.25} />
        </button>
      </div>
    </div>
  );
}

export function CoverWidget({ widget, hass, getEntity, onConfigure, editMode }) {
  if (!widget.entity_id) {
    return (
      <button type="button" className="tm-quick-action tm-cover-action empty" onClick={onConfigure}>
        <Blinds size={24} />
        <span className="tm-text-sm">Rolladen konfigurieren</span>
      </button>
    );
  }

  const entity = getEntity(widget.entity_id);
  const label = widget.label || entity.name;

  return (
    <CoverCard
      entityId={widget.entity_id}
      label={label}
      entity={entity}
      hass={hass}
      editMode={editMode}
    />
  );
}

export function CoverPopupWidget({
  widget, hass, getEntity, onConfigure, editMode,
}) {
  const entityIds = widget.entity_ids || [];
  if (entityIds.length === 0) {
    return (
      <button type="button" className="tm-quick-action tm-cover-action empty" onClick={onConfigure}>
        <Blinds size={24} />
        <span className="tm-text-sm">Rolladen-Gruppe</span>
      </button>
    );
  }

  return (
    <div
      className={`tm-cover-group${editMode ? ' tm-cover-group--edit' : ''}`}
      onClick={editMode ? onConfigure : undefined}
      onKeyDown={editMode ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onConfigure?.();
        }
      } : undefined}
      role={editMode ? 'button' : undefined}
      tabIndex={editMode ? 0 : undefined}
    >
      {entityIds.map((entityId) => {
        const entity = getEntity(entityId);
        const label = entity.name;
        return (
          <CoverPositionSlider
            key={entityId}
            entityId={entityId}
            label={label}
            entity={entity}
            hass={hass}
            overrideIcon={widget.icon || 'mdi:window-shutter'}
            editMode={editMode}
            variant="group"
          />
        );
      })}
    </div>
  );
}

export function CoverPopup({ data, hass, getEntity, onClose }) {
  const { slot, entityIds, summary, gradient } = data;
  const entities = entityIds.map((entityId) => {
    const entity = getEntity(entityId);
    return {
      entityId,
      entity,
      label: entity.name,
      position: getCoverPositionPercent(hass, entityId),
    };
  });
  const allOpen = entities.length > 0 && entities.every((item) => item.position >= 100);
  const primaryEntity = entities[0]?.entity;

  useOverlayLock(true);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleOpenAll = () => {
    entities.forEach((item) => openCover(hass, item.entityId));
  };

  const handleCloseAll = () => {
    entities.forEach((item) => closeCover(hass, item.entityId));
  };

  return createPortal(
    <div className="tm-qa-popup-overlay" role="presentation">
      <button
        type="button"
        className="tm-qa-popup-backdrop"
        onClick={onClose}
        aria-label="Schließen"
      />
      <div
        className="tm-qa-popup-panel tm-qa-popup-panel--multi tm-cover-popup-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={summary.label}
      >
        <div
          className="tm-scene-gradient"
          style={{
            background: summary.active
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.55), rgba(37, 99, 235, 0.35))'
              : gradient,
            opacity: 0.45,
          }}
        />
        <button type="button" className="tm-qa-popup-close" onClick={onClose} aria-label="Schließen">
          <X size={16} />
        </button>

        <div className="tm-qa-popup-header">
          <div className="tm-scene-icon tm-qa-popup-header-icon">
            <EntityIcon
              hass={hass}
              entity={primaryEntity}
              overrideIcon={slot.icon || (entities.length > 1 ? 'mdi:window-shutter-open' : 'mdi:window-shutter')}
              size={22}
              style={{ color: 'white' }}
            />
          </div>
          <div className="tm-qa-popup-header-text">
            <div className="tm-scene-label">{summary.label}</div>
            <div className="tm-qa-popup-state">{summary.sub}</div>
          </div>
        </div>

        <div className="tm-cover-popup-entities">
          {entities.map((item) => (
            <CoverPositionSlider
              key={item.entityId}
              entityId={item.entityId}
              label={item.label}
              entity={item.entity}
              hass={hass}
              variant="row"
            />
          ))}
        </div>

        {entities.length > 1 && (
          <button type="button" className="tm-qa-popup-toggle tm-cover-popup-toggle" onClick={allOpen ? handleCloseAll : handleOpenAll}>
            {allOpen ? 'Alle schließen' : 'Alle öffnen'}
          </button>
        )}
      </div>
    </div>,
    getOverlayRoot(),
  );
}
