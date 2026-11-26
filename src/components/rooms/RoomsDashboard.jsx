import { useCallback, useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import {
  Home, CookingPot, Sofa, BedDouble, Bath, Briefcase, DoorOpen, Warehouse, Trees,
  WashingMachine, Dumbbell, Baby, Utensils, Star, Lightbulb, Thermometer, Music, Plug,
  LayoutGrid, Settings, Monitor,
} from 'lucide-react';
import { useHass } from '../../context/HassContext';
import { useConfig } from '../../context/ConfigContext';
import { describeRoomSummary, formatRoomNumber } from '../../lib/roomWidget';
import {
  ROOMS_OVERVIEW_ID, ROOM_FILTERS, buildModeRooms, describeRoom, filterCardIds,
  getCardEntityIds, getFavorites, getSceneIds,
} from '../../lib/roomsMode';
import { RoomCard, SceneRow } from './RoomCards';

const ROOM_ICONS = {
  home: Home,
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

function roomLine(summary) {
  const parts = [];
  if (summary.temperature != null) parts.push(`${formatRoomNumber(summary.temperature)}°`);
  if (summary.humidity != null) parts.push(`${formatRoomNumber(summary.humidity, 0)} % Luftfeuchte`);
  return parts;
}

export default function RoomsDashboard({ onSettings, onScreensaver }) {
  const { hass, revision } = useHass();
  const { config, updateDisplay } = useConfig();
  const [roomId, setRoomId] = useState(ROOMS_OVERVIEW_ID);
  const [filter, setFilter] = useState('fav');
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
    () => buildModeRooms(hass, config).map((room) => describeRoom(hass, room)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hass, config, revision, tick],
  );

  const room = rooms.find((candidate) => candidate.id === roomId) || null;
  const isOverview = !room;

  const cardIds = room ? getCardEntityIds(hass, room.entityIds) : [];
  const favorites = room ? getFavorites(config, room, cardIds) : [];
  const visibleIds = filterCardIds(cardIds, filter, favorites);
  const sceneIds = room ? getSceneIds(room.entityIds) : [];
  const alerts = rooms.filter((candidate) => candidate.alert);

  const toggleFavorite = (entityId) => {
    const next = favorites.includes(entityId)
      ? favorites.filter((id) => id !== entityId)
      : [...favorites, entityId];
    updateDisplay({ roomFavorites: { ...config.roomFavorites, [room.areaId]: next } });
  };

  const openRoom = (id) => {
    setRoomId(id);
    setFilter('fav');
  };

  const title = room ? room.name : 'Übersicht';
  const subtitle = room
    ? [`${room.summary.activeDevices} aktiv`, ...roomLine(room.summary)].join(' · ')
    : `${rooms.length} Räume · ${rooms.reduce((sum, r) => sum + r.summary.activeDevices, 0)} Geräte aktiv`;
  const alertText = room ? room.alert : (alerts.length ? `${alerts.length} ${alerts.length === 1 ? 'Hinweis' : 'Hinweise'}` : '');

  return (
    <div className="tm-rooms">
      <nav className="tm-rooms-rail" aria-label="Räume">
        <div className="tm-rooms-pill">
          <button
            type="button"
            className={`tm-rooms-rail-btn${isOverview ? ' active' : ''}`}
            onClick={() => setRoomId(ROOMS_OVERVIEW_ID)}
            aria-label="Übersicht"
            title="Übersicht"
          >
            <LayoutGrid size={26} />
          </button>
          {rooms.map((candidate) => {
            const Icon = ROOM_ICONS[candidate.kind] || Home;
            return (
              <button
                key={candidate.id}
                type="button"
                className={`tm-rooms-rail-btn${candidate.id === roomId ? ' active' : ''}`}
                onClick={() => openRoom(candidate.id)}
                aria-label={candidate.alert ? `${candidate.name}: ${candidate.alert}` : candidate.name}
                title={candidate.name}
              >
                <Icon size={26} />
                {candidate.alert && <span className="tm-rooms-dot" />}
              </button>
            );
          })}
        </div>
      </nav>

      <main className="tm-rooms-main">
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
            const lines = describeRoomSummary(candidate.summary);
            const Icon = ROOM_ICONS[candidate.kind] || Home;
            return (
              <button key={candidate.id} type="button" className="tm-rc tm-rc--tile" onClick={() => openRoom(candidate.id)}>
                <div className="tm-rc-head">
                  <div className="tm-rc-head-text">
                    <h2 className="tm-rc-title">{candidate.name}</h2>
                    <p className="tm-rc-sub">{candidate.entityIds.length} Geräte</p>
                  </div>
                  <Icon size={26} />
                </div>
                <strong className="tm-rc-tile-temp">
                  {candidate.summary.temperature != null ? `${formatRoomNumber(candidate.summary.temperature)}°` : '–'}
                </strong>
                <ul className="tm-rc-lines">
                  {(lines.length ? lines : ['Alles ruhig']).slice(0, 3).map((line) => <li key={line}>{line}</li>)}
                </ul>
                <span className={`tm-rc-chip tm-rc-chip--static${candidate.alert ? ' alert' : ' ok'}`}>
                  {candidate.alert || 'Alles in Ordnung'}
                </span>
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

          {room && !visibleIds.length && (
            <div className="tm-rc tm-rc--empty">
              <h2 className="tm-rc-title">Nichts hier</h2>
              <p className="tm-rc-sub">
                {filter === 'fav'
                  ? 'Markiere Geräte mit dem Stern, damit sie hier erscheinen.'
                  : `In ${room.name} gibt es keine Geräte dieser Art.`}
              </p>
            </div>
          )}

          {!rooms.length && (
            <div className="tm-rc tm-rc--empty">
              <h2 className="tm-rc-title">Keine Räume gefunden</h2>
              <p className="tm-rc-sub">Ordne in Home Assistant Geräte Bereichen zu oder verknüpfe Räume in den Einstellungen mit einem Bereich.</p>
            </div>
          )}
        </div>
      </main>

      {room && (
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
