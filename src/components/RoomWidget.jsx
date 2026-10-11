import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft, Armchair, Baby, Bath, BedDouble, Blinds, ChevronDown, ChevronRight, ChevronUp,
  CookingPot, DoorClosed, Droplets, Dumbbell, Home, Laptop, Leaf, Lightbulb, Minus, Pause,
  Play, Plus, Shirt, Sofa, Sparkles, Square, Thermometer, Trees, UtensilsCrossed, Warehouse,
} from 'lucide-react';
import EntityIcon from './EntityIcon';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import {
  activateScene,
  closeCover,
  mediaPlayPause,
  openCover,
  setClimateTemperature,
  stopCover,
  toggleEntity,
  turnOffEntity,
  turnOnEntity,
} from '../lib/services';
import {
  describeRoomSummary,
  formatRoomNumber,
  getRoomAccent,
  getRoomImage,
  getRoomKind,
  getRoomName,
  getRoomSummary,
  getRoomTileModel,
  resolveRoomEntityIds,
} from '../lib/roomWidget';

const ROOM_ICONS = {
  living: Sofa,
  kitchen: CookingPot,
  dining: UtensilsCrossed,
  bedroom: BedDouble,
  kids: Baby,
  bath: Bath,
  office: Laptop,
  hall: DoorClosed,
  garage: Warehouse,
  garden: Trees,
  laundry: Shirt,
  gym: Dumbbell,
  home: Home,
};

function RoomIcon({ widget, name, size }) {
  if (widget.icon) return <EntityIcon overrideIcon={widget.icon} size={size} />;
  const Icon = ROOM_ICONS[getRoomKind(name)] || Armchair;
  return <Icon size={size} strokeWidth={1.75} />;
}

function RoomStat({ icon: Icon, value, unit, label, tone }) {
  return (
    <div className={`tm-room-stat tm-room-stat--${tone}`}>
      <Icon className="tm-room-stat-icon" size={18} strokeWidth={2.2} />
      <div className="tm-room-stat-text">
        <span className="tm-room-stat-value">
          {value}
          {unit && <span className="tm-room-stat-unit">{unit}</span>}
        </span>
        <span className="tm-room-stat-label">{label}</span>
      </div>
    </div>
  );
}

function RoomAction({ kind, icon: Icon, title, detail, active, onClick }) {
  return (
    <button
      type="button"
      className={`tm-room-action tm-room-action--${kind}${active ? ' is-on' : ''}`}
      onClick={onClick}
    >
      <Icon className="tm-room-action-icon" size={26} strokeWidth={1.8} />
      <span className="tm-room-action-copy">
        <span className="tm-room-action-title">{title}</span>
        <span className="tm-room-action-detail">{detail}</span>
      </span>
      <ChevronRight className="tm-room-action-chevron" size={18} strokeWidth={2.2} />
    </button>
  );
}

export default function RoomWidget({ widget, hass, onConfigure, onOpen, editMode }) {
  const name = getRoomName(hass, widget);
  const accent = getRoomAccent(widget, name);
  const image = getRoomImage(hass, widget);
  const entityIds = resolveRoomEntityIds(hass, widget);

  if (!widget.area_id && !entityIds.length) {
    return (
      <button type="button" className="tm-quick-action tm-room-card empty" onClick={onConfigure}>
        <Home size={24} />
        <span className="tm-text-sm">Raum wählen</span>
      </button>
    );
  }

  const summary = getRoomSummary(hass, entityIds);
  const activeCount = summary.activeDevices;
  const coverLabel = !summary.coversTotal
    ? ''
    : summary.coversOpen === 0
      ? 'Geschlossen'
      : summary.coversOpen === summary.coversTotal
        ? 'Geöffnet'
        : `${summary.coversOpen} offen`;

  const openRoom = (event) => {
    event?.stopPropagation();
    if (editMode) {
      onConfigure?.();
      return;
    }
    onOpen?.({ variant: 'room', widget });
  };

  return (
    <div
      className={`tm-quick-action tm-room-card${summary.lightsOn ? ' tm-room-card--lit' : ''}${editMode ? ' tm-room-card--edit' : ''}`}
      style={{ '--tm-room-accent': accent, '--tm-room-title-chars': Math.max(8, name.length) }}
    >
      <div className="tm-room-card-inner">
        <button type="button" className="tm-room-card-info" onClick={openRoom} aria-label={`${name} öffnen`}>
          <span className="tm-room-card-title">{name}</span>
          <span className="tm-room-card-sub">
            {activeCount ? `${activeCount} ${activeCount === 1 ? 'Gerät' : 'Geräte'} an` : 'Alles aus'}
          </span>
          <span className="tm-room-card-stats">
            {summary.temperature != null && (
              <RoomStat
                icon={Thermometer}
                value={`${formatRoomNumber(summary.temperature)}°`}
                label="Temperatur"
                tone="temp"
              />
            )}
            {summary.humidity != null && (
              <RoomStat
                icon={Droplets}
                value={`${formatRoomNumber(summary.humidity, 0)} %`}
                label="Luftfeuchtigkeit"
                tone="humidity"
              />
            )}
            {summary.carbonDioxide != null && (
              <RoomStat
                icon={Leaf}
                value={formatRoomNumber(summary.carbonDioxide, 0)}
                unit={summary.carbonDioxideUnit}
                label="Luftqualität"
                tone="air"
              />
            )}
          </span>
        </button>

        <button type="button" className="tm-room-card-photo" onClick={openRoom} aria-label={`${name} öffnen`}>
          {image
            ? <img src={image} alt="" draggable={false} />
            : <span className="tm-room-card-photo-fallback"><RoomIcon widget={widget} name={name} size={72} /></span>}
          <span className={`tm-room-card-badge${activeCount ? ' tm-room-card-badge--on' : ''}`}>
            {activeCount > 0 && <span className="tm-room-card-motion" aria-hidden="true" />}
            {activeCount ? `${activeCount} an` : 'Aus'}
            <ChevronRight size={14} strokeWidth={2.4} />
          </span>
        </button>

        <div className="tm-room-card-actions">
          {summary.lightsTotal > 0 && (
            <RoomAction
              kind="light"
              icon={Lightbulb}
              title="Licht"
              detail={summary.lightsOn ? `${summary.lightsOn} an` : 'Aus'}
              active={summary.lightsOn > 0}
              onClick={openRoom}
            />
          )}
          {summary.climate && (
            <RoomAction
              kind="climate"
              icon={Thermometer}
              title={summary.climateCurrent != null ? `${formatRoomNumber(summary.climateCurrent)}°` : 'Klima'}
              detail={summary.climateTarget != null ? `Soll: ${formatRoomNumber(summary.climateTarget)}°` : (summary.climateActive ? 'An' : 'Aus')}
              active={summary.climateActive}
              onClick={openRoom}
            />
          )}
          {summary.coversTotal > 0 && (
            <RoomAction
              kind="cover"
              icon={Blinds}
              title="Rollläden"
              detail={coverLabel}
              active={summary.coversOpen > 0}
              onClick={openRoom}
            />
          )}
          {summary.scenes.length > 0 && (
            <RoomAction
              kind="scene"
              icon={Sparkles}
              title="Szenen"
              detail={summary.sceneLabel || `${summary.scenes.length}`}
              onClick={openRoom}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function stop(event) {
  event.stopPropagation();
}

function MetroTile({ model, hass, index }) {
  const [flash, setFlash] = useState(false);
  const { domain, entityId } = model;

  useEffect(() => {
    if (!flash) return undefined;
    const timer = setTimeout(() => setFlash(false), 900);
    return () => clearTimeout(timer);
  }, [flash]);

  const togglable = ['light', 'switch', 'fan', 'input_boolean'].includes(domain);
  const tappable = !model.unavailable && (
    togglable || domain === 'scene' || domain === 'script' || (domain === 'lock' && model.active)
  );

  const handleTap = () => {
    if (!tappable) return;
    if (domain === 'scene' || domain === 'script') {
      activateScene(hass, entityId);
      setFlash(true);
      return;
    }
    if (domain === 'lock') {
      turnOnEntity(hass, entityId);
      return;
    }
    toggleEntity(hass, entityId);
  };

  const className = [
    'tm-metro-tile',
    `tm-metro-tile--${domain}`,
    model.wide && 'tm-metro-tile--wide',
    (model.active || flash) && 'tm-metro-tile--on',
    model.unavailable && 'tm-metro-tile--unavailable',
    tappable && 'tm-metro-tile--tappable',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={className}
      style={{ '--tm-metro-i': index }}
      role={tappable ? 'button' : undefined}
      tabIndex={tappable ? 0 : undefined}
      onClick={handleTap}
      onKeyDown={tappable ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleTap();
        }
      } : undefined}
      aria-label={tappable ? `${model.name}: ${model.detail}` : undefined}
    >
      <div className="tm-metro-tile-top">
        <EntityIcon hass={hass} entity={model.entity} size={30} className="tm-metro-tile-icon" />
        {model.detail && !model.wide && <span className="tm-metro-tile-detail">{model.detail}</span>}
      </div>

      {model.value !== '' && (
        <div className="tm-metro-tile-value">
          {model.value}
          {model.unit && <span className="tm-metro-tile-unit">{model.unit}</span>}
        </div>
      )}

      <div className="tm-metro-tile-name">
        {model.name}
        {model.wide && model.detail && <span className="tm-metro-tile-wide-detail">{model.detail}</span>}
      </div>

      {domain === 'light' && model.active && (
        <span className="tm-metro-tile-level" style={{ width: `${model.brightness}%` }} aria-hidden="true" />
      )}

      {domain === 'cover' && !model.unavailable && (
        <div className="tm-metro-tile-actions" onClick={stop}>
          <button type="button" onClick={() => openCover(hass, entityId)} aria-label={`${model.name} öffnen`}>
            <ChevronUp size={22} />
          </button>
          <button type="button" onClick={() => stopCover(hass, entityId)} aria-label={`${model.name} stoppen`}>
            <Square size={14} fill="currentColor" />
          </button>
          <button type="button" onClick={() => closeCover(hass, entityId)} aria-label={`${model.name} schließen`}>
            <ChevronDown size={22} />
          </button>
        </div>
      )}

      {domain === 'climate' && model.target != null && !model.unavailable && (
        <div className="tm-metro-tile-actions" onClick={stop}>
          <button
            type="button"
            onClick={() => setClimateTemperature(hass, entityId, model.target - model.step)}
            aria-label="Zieltemperatur senken"
          >
            <Minus size={20} />
          </button>
          <span className="tm-metro-tile-target">{`${formatRoomNumber(model.target)}°`}</span>
          <button
            type="button"
            onClick={() => setClimateTemperature(hass, entityId, model.target + model.step)}
            aria-label="Zieltemperatur erhöhen"
          >
            <Plus size={20} />
          </button>
        </div>
      )}

      {domain === 'media_player' && !model.unavailable && (
        <div className="tm-metro-tile-actions" onClick={stop}>
          <button type="button" onClick={() => mediaPlayPause(hass, entityId)} aria-label={model.active ? 'Pause' : 'Abspielen'}>
            {model.active ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>
        </div>
      )}
    </div>
  );
}

export function RoomPopup({ data, hass, onClose }) {
  const { widget } = data;
  const hubRef = useRef(null);
  const name = getRoomName(hass, widget);
  const accent = getRoomAccent(widget, name);
  const entityIds = resolveRoomEntityIds(hass, widget);
  const summary = getRoomSummary(hass, entityIds);
  const facts = describeRoomSummary(summary);
  const tiles = entityIds.map((id) => getRoomTileModel(hass, id));

  useOverlayLock(true);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const hub = hubRef.current;
    if (!hub) return undefined;
    const onWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      hub.scrollLeft += event.deltaY;
    };
    hub.addEventListener('wheel', onWheel, { passive: false });
    return () => hub.removeEventListener('wheel', onWheel);
  }, []);

  const handleAllLights = () => {
    const action = summary.lightsOn ? turnOffEntity : turnOnEntity;
    summary.lights.forEach((id) => action(hass, id));
  };

  const headline = [
    summary.temperature != null && `${formatRoomNumber(summary.temperature)} °C`,
    summary.humidity != null && `${formatRoomNumber(summary.humidity, 0)} % Luftfeuchte`,
  ].filter(Boolean).join('   ');

  return createPortal(
    <div className="tm-metro-overlay" role="presentation">
      <button type="button" className="tm-metro-backdrop" onClick={onClose} aria-label="Schließen" />
      <section
        className="tm-metro-band"
        style={{ '--tm-room-accent': accent }}
        role="dialog"
        aria-modal="true"
        aria-label={name}
      >
        <header className="tm-metro-header">
          <button type="button" className="tm-metro-back" onClick={onClose} aria-label="Zurück">
            <ArrowLeft size={22} strokeWidth={2.25} />
          </button>
          <div className="tm-metro-titles">
            <h2 className="tm-metro-title">{name}</h2>
            {(headline || facts.length > 0) && (
              <p className="tm-metro-subtitle">
                {headline && <span className="tm-metro-subtitle-climate">{headline}</span>}
                {facts.map((fact) => <span key={fact}>{fact}</span>)}
              </p>
            )}
          </div>
        </header>

        <div className="tm-metro-hub" ref={hubRef}>
          {tiles.length ? (
            <div className="tm-metro-grid">
              {tiles.map((model, index) => (
                <MetroTile key={model.entityId} model={model} hass={hass} index={index} />
              ))}
            </div>
          ) : (
            <p className="tm-metro-empty">Diesem Raum sind keine passenden Geräte zugeordnet.</p>
          )}
        </div>

        <footer className="tm-metro-footer">
          {summary.lightsTotal > 0 && (
            <button type="button" className="tm-metro-button" onClick={handleAllLights}>
              {summary.lightsOn ? 'Alle Lichter aus' : 'Alle Lichter an'}
            </button>
          )}
          <button type="button" className="tm-metro-button tm-metro-button--primary" onClick={onClose}>
            Schließen
          </button>
        </footer>
      </section>
    </div>,
    getOverlayRoot(),
  );
}
