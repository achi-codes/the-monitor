import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft, Armchair, Baby, Bath, BedDouble, Blinds, ChevronDown, ChevronUp, CookingPot,
  DoorClosed, Droplets, Dumbbell, Flame, Home, Laptop, Lightbulb, Minus, Pause, Play, Plus,
  Shirt, Sofa, Square, Trees, UtensilsCrossed, Warehouse, AppWindow,
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

function RoomChip({ icon: Icon, children, active }) {
  return (
    <span className={`tm-room-chip${active ? ' tm-room-chip--active' : ''}`}>
      <Icon size={14} strokeWidth={2.25} />
      {children}
    </span>
  );
}

export default function RoomWidget({ widget, hass, onConfigure, onOpen, editMode }) {
  const name = getRoomName(hass, widget);
  const accent = getRoomAccent(widget, name);
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
  const activeCount = summary.lightsOn + (summary.mediaPlaying ? 1 : 0) + (summary.climateActive ? 1 : 0);

  const handleClick = () => {
    if (editMode) {
      onConfigure?.();
      return;
    }
    onOpen?.({ variant: 'room', widget });
  };

  return (
    <button
      type="button"
      className={`tm-quick-action tm-room-card${summary.lightsOn ? ' tm-room-card--lit' : ''}`}
      style={{ '--tm-room-accent': accent }}
      onClick={handleClick}
      aria-label={`${name} öffnen`}
    >
      <div className="tm-room-card-inner">
        <div className="tm-room-card-head">
          <span className="tm-room-card-badge" aria-hidden="true">
            <RoomIcon widget={widget} name={name} size={22} />
          </span>
          <span className="tm-room-card-titles">
            <span className="tm-room-card-title">{name}</span>
            <span className="tm-room-card-sub">
              {activeCount ? `${activeCount} aktiv` : `${entityIds.length} Geräte`}
            </span>
          </span>
          {summary.motion && <span className="tm-room-card-motion" aria-label="Bewegung" />}
        </div>

        {(summary.temperature != null || summary.humidity != null) && (
          <div className="tm-room-card-climate">
            {summary.temperature != null && (
              <span className="tm-room-card-temp">
                {formatRoomNumber(summary.temperature)}
                <span className="tm-room-card-temp-unit">°</span>
              </span>
            )}
            {summary.humidity != null && (
              <span className="tm-room-card-humidity">
                <Droplets size={14} strokeWidth={2.25} />
                {`${formatRoomNumber(summary.humidity, 0)} %`}
              </span>
            )}
          </div>
        )}

        <div className="tm-room-card-chips">
          {summary.lightsTotal > 0 && (
            <RoomChip icon={Lightbulb} active={summary.lightsOn > 0}>
              {summary.lightsOn ? `${summary.lightsOn}/${summary.lightsTotal}` : 'Aus'}
            </RoomChip>
          )}
          {summary.openContacts > 0 && (
            <RoomChip icon={AppWindow} active>{`${summary.openContacts} offen`}</RoomChip>
          )}
          {summary.coversTotal > 0 && (
            <RoomChip icon={Blinds} active={summary.coversOpen > 0}>{`${summary.coverPosition} %`}</RoomChip>
          )}
          {summary.climate && summary.climateTarget != null && (
            <RoomChip icon={Flame} active={summary.climateActive}>{`${formatRoomNumber(summary.climateTarget)}°`}</RoomChip>
          )}
        </div>
      </div>
    </button>
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
