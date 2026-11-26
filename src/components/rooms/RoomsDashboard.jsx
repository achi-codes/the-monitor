import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import {
  Home, CookingPot, Sofa, BedDouble, Bath, Briefcase, DoorOpen, Warehouse, Trees,
  WashingMachine, Dumbbell, Baby, Utensils, Star, Lightbulb, Thermometer, Music, Plug,
  LayoutGrid, LayoutDashboard, MoreHorizontal, Settings, Monitor, Pencil,
} from 'lucide-react';
import { useHass } from '../../context/HassContext';
import { useConfig } from '../../context/ConfigContext';
import { describeRoomSummary, formatRoomNumber } from '../../lib/roomWidget';
import {
  ROOMS_OVERVIEW_ID, ROOM_FILTERS, buildModeRooms, filterCardIds, getCardEntityIds,
  getFavorites, getRailRoomIds, getSceneIds, packTileColumns, tileColumnWidth, tilesVisible,
} from '../../lib/roomsMode';
import { updateTile } from '../../lib/roomsModeConfig';
import { renderDashboardWidget } from '../widgets/WidgetRenderer';
import { RoomCard, SceneRow } from './RoomCards';

const ROOM_ICONS = {
  home: Home,
  grid: LayoutGrid,
  page: LayoutDashboard,
  living: Sofa,
  kitchen: CookingPot,
  dining: Utensils,
  bedroom: BedDouble,
  kids: Baby,
  bath: Bath,
  office: Briefcase,
  hall: DoorOpen,
  garage: Warehouse,
  garden: Trees,
  laundry: WashingMachine,
  gym: Dumbbell,
};

const FILTER_ICONS = {
  fav: Star,
  light: Lightbulb,
  climate: Thermometer,
  media: Music,
  devices: Plug,
  all: LayoutGrid,
};

function roomIcon(room) {
  return ROOM_ICONS[room.kind] || Home;
}

function roomLine(summary) {
  const parts = [];
  if (summary.temperature != null) parts.push(`${formatRoomNumber(summary.temperature)}°`);
  if (summary.humidity != null) parts.push(`${formatRoomNumber(summary.humidity, 0)} % Luftfeuchte`);
  return parts;
}

function RailButton({ room, active, onClick }) {
  const Icon = roomIcon(room);
  return (
    <button
      type="button"
      className={`tm-rooms-rail-btn${active ? ' active' : ''}`}
      onClick={onClick}
      aria-label={room.alert ? `${room.name}: ${room.alert}` : room.name}
      aria-current={active ? 'page' : undefined}
      title={room.name}
    >
      <Icon size={26} />
      {room.alert && <span className="tm-rooms-dot" />}
    </button>
  );
}

function MoreMenu({ rooms, activeId, onPick, onEdit, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const onDown = (event) => {
      const path = event.composedPath?.() || [event.target];
      if (ref.current && !path.includes(ref.current)) onClose();
    };
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="tm-rooms-more" ref={ref} role="dialog" aria-label="Weitere Räume und Seiten">
      <p className="tm-rooms-more-title">Weitere Räume & Seiten</p>
      {rooms.length ? (
        <ul>
          {rooms.map((room) => {
            const Icon = roomIcon(room);
            return (
              <li key={room.id}>
                <button
                  type="button"
                  className={`tm-rooms-more-item${room.id === activeId ? ' active' : ''}`}
                  onClick={() => onPick(room.id)}
                >
                  <Icon size={20} />
                  <span>{room.name}</span>
                  {room.alert && <span className="tm-rooms-more-alert">{room.alert}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="tm-rooms-more-empty">Alle Räume sind schon in der Leiste.</p>
      )}
      <button type="button" className="tm-rooms-more-edit" onClick={onEdit}>
        <Pencil size={16} />
        Räume & Seiten bearbeiten
      </button>
    </div>
  );
}

function TileColumns({ room, hass, getEntity, onOpenPopup, onUpdateTile }) {
  return packTileColumns(room.tiles).map((column) => (
    <div
      key={column.id}
      className={`tm-rooms-tile-col${column.tall ? ' tall' : ''}`}
      style={{ width: `${tileColumnWidth(column)}px` }}
    >
      {column.tiles.map((tile, index) => (
        <div
          key={tile.id}
          className={`tm-rooms-tile tm-dashboard-grid-item${['energyTile', 'ev', 'chargePrice'].includes(tile.type) ? ' tm-dashboard-grid-item--energy-tile' : ''}${tile.type === 'sankey' ? ' tm-dashboard-grid-item--sankey' : ''}`}
        >
          <div className="tm-dashboard-grid-content">
            {renderDashboardWidget({
              widget: tile,
              hass,
              getEntity,
              editMode: false,
              onOpenPopup,
              onUpdateWidget: (_pageIndex, tileId, patch) => onUpdateTile(room.id, tileId, patch),
              widgetIndex: index,
            })}
          </div>
        </div>
      ))}
    </div>
  ));
}

export default function RoomsDashboard({ onSettings, onScreensaver, onOpenPopup }) {
  const { hass, revision, getEntity } = useHass();
  const { config, updateDisplay, setConfig } = useConfig();
  const [roomId, setRoomId] = useState(ROOMS_OVERVIEW_ID);
  const [filter, setFilter] = useState('fav');
  const [moreOpen, setMoreOpen] = useState(false);
  const [tick, setTick] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 15000);
    return () => clearInterval(timer);
  }, []);

  // Mock HA mutates states in place, so re-render after each call as well.
  const run = useCallback((promise) => {
    Promise.resolve(promise).finally(() => setTick((value) => value + 1));
  }, []);

  const rooms = useMemo(
    () => buildModeRooms(hass, config),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hass, config, revision, tick],
  );
  const railIds = getRailRoomIds(config);
  const railRooms = railIds.map((id) => rooms.find((room) => room.id === id)).filter(Boolean);
  const moreRooms = rooms.filter((room) => !railIds.includes(room.id));
  const moreAlert = moreRooms.some((room) => room.alert);

  const room = rooms.find((candidate) => candidate.id === roomId) || null;
  const isOverview = !room;
  const hasDevices = Boolean(room?.entityIds.length);

  const cardIds = room ? getCardEntityIds(hass, room.entityIds) : [];
  const favorites = room ? getFavorites(config, room, cardIds) : [];
  const visibleIds = hasDevices ? filterCardIds(cardIds, filter, favorites) : [];
  const showTiles = room && (!hasDevices || tilesVisible(filter));
  const sceneIds = room ? getSceneIds(room.entityIds) : [];
  const alerts = rooms.filter((candidate) => candidate.alert);

  const toggleFavorite = (entityId) => {
    const next = favorites.includes(entityId)
      ? favorites.filter((id) => id !== entityId)
      : [...favorites, entityId];
    updateDisplay({ roomFavorites: { ...config.roomFavorites, [room.id]: next } });
  };

  const onUpdateTile = (targetRoomId, tileId, patch) => {
    setConfig((prev) => updateTile(prev, targetRoomId, tileId, patch));
  };

  const openRoom = (id) => {
    setRoomId(id);
    setFilter('fav');
    setMoreOpen(false);
  };

  const title = room ? room.name : 'Übersicht';
  let subtitle;
  if (isOverview) {
    subtitle = `${rooms.length} Räume & Seiten · ${rooms.reduce((sum, r) => sum + r.summary.activeDevices, 0)} Geräte aktiv`;
  } else if (hasDevices) {
    subtitle = [`${room.summary.activeDevices} aktiv`, ...roomLine(room.summary)].join(' · ');
  } else {
    subtitle = `${room.tiles.length} ${room.tiles.length === 1 ? 'Kachel' : 'Kacheln'}`;
  }
  const alertText = room ? room.alert : (alerts.length ? `${alerts.length} ${alerts.length === 1 ? 'Hinweis' : 'Hinweise'}` : '');
  const nothingVisible = room && !visibleIds.length && !(showTiles && room.tiles.length);

  return (
    <div className="tm-rooms">
      <nav className="tm-rooms-rail" aria-label="Räume">
        <div className="tm-rooms-pill">
          <RailButton
            room={{ id: ROOMS_OVERVIEW_ID, name: 'Übersicht', kind: 'grid' }}
            active={isOverview}
            onClick={() => openRoom(ROOMS_OVERVIEW_ID)}
          />
          {railRooms.map((candidate) => (
            <RailButton key={candidate.id} room={candidate} active={candidate.id === roomId} onClick={() => openRoom(candidate.id)} />
          ))}
          <button
            type="button"
            className={`tm-rooms-rail-btn tm-rooms-rail-more${moreOpen || (room && !railIds.includes(room.id)) ? ' active' : ''}`}
            onClick={() => setMoreOpen((open) => !open)}
            aria-label="Weitere Räume und Seiten"
            aria-expanded={moreOpen}
            title="Mehr"
          >
            <MoreHorizontal size={26} />
            {moreAlert && <span className="tm-rooms-dot" />}
          </button>
        </div>
        {moreOpen && (
          <MoreMenu
            rooms={moreRooms}
            activeId={roomId}
            onPick={openRoom}
            onEdit={() => { setMoreOpen(false); onSettings(); }}
            onClose={() => setMoreOpen(false)}
          />
        )}
      </nav>

      <main className={`tm-rooms-main${room && hasDevices ? '' : ' tm-rooms-main--no-dock'}`}>
        <header className="tm-rooms-header">
          <div>
            <h1 className="tm-rooms-title">{title}</h1>
            <p className="tm-rooms-subtitle">{subtitle}</p>
          </div>
          <div className="tm-rooms-header-right">
            {alertText && <span className="tm-rooms-alert"><span />{alertText}</span>}
            <span className="tm-rooms-clock">{format(time, 'HH:mm')}</span>
            <button type="button" className="tm-btn-round" onClick={onScreensaver} aria-label="Bildschirmschoner"><Monitor size={22} /></button>
            <button type="button" className="tm-btn-round" onClick={onSettings} aria-label="Einstellungen"><Settings size={22} /></button>
          </div>
        </header>

        {room && <SceneRow hass={hass} sceneIds={sceneIds} run={run} />}

        <div className="tm-rooms-strip">
          {isOverview && rooms.map((candidate) => {
            const lines = candidate.isPage
              ? [`${candidate.tiles.length} ${candidate.tiles.length === 1 ? 'Kachel' : 'Kacheln'}`]
              : describeRoomSummary(candidate.summary);
            const Icon = roomIcon(candidate);
            return (
              <button key={candidate.id} type="button" className="tm-rc tm-rc--tile" onClick={() => openRoom(candidate.id)}>
                <div className="tm-rc-head">
                  <div className="tm-rc-head-text">
                    <h2 className="tm-rc-title">{candidate.name}</h2>
                    <p className="tm-rc-sub">{candidate.isPage ? 'Seite' : `${candidate.entityIds.length} Geräte`}</p>
                  </div>
                  <Icon size={26} />
                </div>
                <strong className="tm-rc-tile-temp">
                  {candidate.summary.temperature != null ? `${formatRoomNumber(candidate.summary.temperature)}°` : ''}
                </strong>
                <ul className="tm-rc-lines">
                  {(lines.length ? lines : ['Alles ruhig']).slice(0, 3).map((line) => <li key={line}>{line}</li>)}
                </ul>
                {!candidate.isPage && (
                  <span className={`tm-rc-chip tm-rc-chip--static${candidate.alert ? ' alert' : ' ok'}`}>
                    {candidate.alert || 'Alles in Ordnung'}
                  </span>
                )}
              </button>
            );
          })}

          {room && visibleIds.map((entityId) => (
            <RoomCard
              key={entityId}
              hass={hass}
              entityId={entityId}
              roomName={room.name}
              favorite={favorites.includes(entityId)}
              onToggleFavorite={() => toggleFavorite(entityId)}
              run={run}
            />
          ))}

          {showTiles && (
            <TileColumns room={room} hass={hass} getEntity={getEntity} onOpenPopup={onOpenPopup} onUpdateTile={onUpdateTile} />
          )}

          {nothingVisible && (
            <div className="tm-rc tm-rc--empty">
              <h2 className="tm-rc-title">Nichts hier</h2>
              <p className="tm-rc-sub">
                {!hasDevices && 'Diese Seite hat noch keine Kacheln. Füge sie in den Einstellungen hinzu.'}
                {hasDevices && filter === 'fav' && 'Markiere Geräte mit dem Stern oder füge Kacheln hinzu.'}
                {hasDevices && filter !== 'fav' && `In ${room.name} gibt es keine Geräte dieser Art.`}
              </p>
              <button type="button" className="tm-rc-chip tm-rc-chip--static" style={{ cursor: 'pointer' }} onClick={onSettings}>
                <Pencil size={16} />
                Bearbeiten
              </button>
            </div>
          )}
        </div>
      </main>

      {room && hasDevices && (
        <nav className="tm-rooms-dock" aria-label="Filter nach Gerätetyp">
          {ROOM_FILTERS.map((item) => {
            const Icon = FILTER_ICONS[item.id];
            return (
              <button
                key={item.id}
                type="button"
                className={`tm-rooms-dock-btn${filter === item.id ? ' active' : ''}`}
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
