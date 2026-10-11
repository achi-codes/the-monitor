import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft, Armchair, Baby, Bath, BedDouble, Blinds, ChevronRight, CookingPot, DoorClosed,
  Droplets, Dumbbell, Home, Laptop, Leaf, Lightbulb, Shirt, Sofa, Sparkles, Thermometer,
  Trees, UtensilsCrossed, Warehouse,
} from 'lucide-react';
import EntityIcon from './EntityIcon';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import { turnOffEntity, turnOnEntity } from '../lib/services';
import { useHass } from '../context/HassContext';
import { getPastelCardVars, isBlackColorfulMode } from '../lib/colorThemes';
import { useConfig } from '../context/ConfigContext';
import { AlarmWidget, CoverWidget, QuickActionWidget, SceneWidget } from './widgets/ActionWidgets';
import MediaPlayer from './MediaPlayer';
import SensorWidget from './SensorWidget';
import SensorStatusWidget from './SensorStatusWidget';
import VacuumWidget from './VacuumWidget';
import {
  buildRoomPopupWidget,
  describeRoomSummary,
  formatRoomNumber,
  getRoomAccent,
  getRoomImage,
  getRoomKind,
  getRoomName,
  getRoomSummary,
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

function renderRoomEntityCard(card, hass, getEntity) {
  const props = { widget: card, hass, getEntity, editMode: false };
  switch (card.type) {
    case 'quickAction':
      return <QuickActionWidget {...props} />;
    case 'cover':
      return <CoverWidget {...props} />;
    case 'scene':
      return <SceneWidget {...props} />;
    case 'media':
      return <MediaPlayer widget={card} />;
    case 'sensor':
      return <SensorWidget {...props} />;
    case 'sensorStatus':
      return <SensorStatusWidget {...props} />;
    case 'vacuum':
      return <VacuumWidget widget={card} hass={hass} />;
    case 'alarm':
      return <AlarmWidget {...props} />;
    default:
      return <QuickActionWidget {...props} />;
  }
}

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

export function RoomPopup({ data, hass, onClose }) {
  const { widget } = data;
  const hubRef = useRef(null);
  const { getEntity } = useHass();
  const { config } = useConfig();
  const pastel = isBlackColorfulMode(config.appearance);
  const name = getRoomName(hass, widget);
  const accent = getRoomAccent(widget, name);
  const entityIds = resolveRoomEntityIds(hass, widget);
  const summary = getRoomSummary(hass, entityIds);
  const facts = describeRoomSummary(summary);
  const cards = entityIds.map((id) => buildRoomPopupWidget(id, hass)).filter(Boolean);

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
          {cards.length ? (
            <div className="tm-metro-grid">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`tm-metro-card${card.wide ? ' tm-metro-card--wide' : ''}`}
                  style={{
                    '--tm-metro-i': index,
                    ...(pastel ? getPastelCardVars(card.id, card.type) : null),
                  }}
                >
                  {renderRoomEntityCard(card, hass, getEntity)}
                </div>
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
