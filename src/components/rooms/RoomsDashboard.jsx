import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import {
  Home, CookingPot, Sofa, BedDouble, Bath, Briefcase, DoorOpen, Warehouse, Trees,
  WashingMachine, Dumbbell, Baby, Utensils, LayoutGrid, LayoutDashboard, MoreHorizontal,
  Settings, Monitor, Pencil, Plus, X, Check,
} from 'lucide-react';
import { useHass } from '../../context/HassContext';
import { useConfig } from '../../context/ConfigContext';
import { describeRoomSummary, formatRoomNumber } from '../../lib/roomWidget';
import {
  ROOMS_OVERVIEW_ID, ROOM_FILTERS, buildModeRooms, createSubpage, getRailRoomIds, getSceneIds, getSubpageContent,
  packItems, tileColumnWidth,
} from '../../lib/roomsMode';
import {
  addSubpage, addSubpageDevice, addTile, removeItem, removeSubpage, setItemOrder,
  setSubpageOrder, updateSubpage, updateTile,
} from '../../lib/roomsModeConfig';
import useHorizontalReorder from './useHorizontalReorder';
import {
  AddItemPanel, AddSubpagePopover, SubpagePopover, TileInspectorPanel,
} from './RoomEditParts';
import { renderDashboardWidget } from '../widgets/WidgetRenderer';
import { RoomCard, SceneRow } from './RoomCards';
import { SUBPAGE_ICON_MAP } from './subpageIcons';

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

function countTiles(room) {
  return room.subpages.reduce((sum, sub) => sum + sub.tiles.length, 0);
}

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
      if (path.some((el) => el?.dataset?.moreToggle)) return;
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

function TileView({ tile, hass, getEntity, onOpenPopup, onUpdateTile, index }) {
  return (
    <div
      className={`tm-rooms-tile tm-dashboard-grid-item${['energyTile', 'ev', 'chargePrice'].includes(tile.type) ? ' tm-dashboard-grid-item--energy-tile' : ''}${tile.type === 'sankey' ? ' tm-dashboard-grid-item--sankey' : ''}`}
    >
      <div className="tm-dashboard-grid-content">
        {renderDashboardWidget({
          widget: tile,
          hass,
          getEntity,
          editMode: false,
          onOpenPopup,
          onUpdateWidget: (_pageIndex, tileId, patch) => onUpdateTile(tileId, patch),
          widgetIndex: index,
        })}
      </div>
    </div>
  );
}

function EditOverlay({ label, onRemove, onEdit }) {
  return (
    <div className="tm-rooms-edit-overlay">
      <div className="tm-rooms-edit-actions">
        {onEdit && (
          <button type="button" className="tm-rooms-edit-btn" onClick={onEdit} aria-label={`${label} bearbeiten`}><Pencil size={18} /></button>
        )}
        <button type="button" className="tm-rooms-edit-btn tm-rooms-edit-btn--remove" onClick={onRemove} aria-label={`${label} entfernen`}><X size={20} /></button>
      </div>
    </div>
  );
}

export default function RoomsDashboard({ onSettings, onScreensaver, onOpenPopup }) {
  const { hass, revision, getEntity } = useHass();
  const { config, updateDisplay, setConfig } = useConfig();
  const [roomId, setRoomId] = useState(ROOMS_OVERVIEW_ID);
  const [subId, setSubId] = useState(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [panel, setPanel] = useState(null);
  const [tick, setTick] = useState(0);
  const [time, setTime] = useState(new Date());
  const stripRef = useRef(null);
  const dockRef = useRef(null);

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
  const isEditing = editing && Boolean(room);
  const hasDevices = Boolean(room?.entityIds.length);
  const subpage = room ? (room.subpages.find((sub) => sub.id === subId) || room.subpages[0]) : null;
  const showDock = Boolean(room && (room.subpages.length > 1 || isEditing));
  const content = subpage
    ? getSubpageContent(hass, config, room, subpage)
    : { items: [], hiddenIds: [], favorites: [] };
  const { items, favorites, hiddenIds } = content;
  const itemKeys = items.map((item) => item.key);
  const sceneIds = room ? getSceneIds(room.entityIds) : [];
  const alerts = rooms.filter((candidate) => candidate.alert);

  const apply = (fn) => setConfig((prev) => fn(prev));

  const strip = useHorizontalReorder({
    containerRef: stripRef,
    keys: itemKeys,
    autoScroll: true,
    onReorder: (keys) => apply((c) => setItemOrder(c, room.id, subpage.id, keys)),
  });
  const dock = useHorizontalReorder({
    containerRef: dockRef,
    keys: room ? room.subpages.map((sub) => sub.id) : [],
    onReorder: (ids) => apply((c) => setSubpageOrder(c, room.id, ids)),
  });

  const toggleFavorite = (entityId) => {
    const next = favorites.includes(entityId)
      ? favorites.filter((id) => id !== entityId)
      : [...favorites, entityId];
    updateDisplay({ roomFavorites: { ...config.roomFavorites, [room.id]: next } });
  };

  const onUpdateTile = (tileId, patch) => apply((c) => updateTile(c, room.id, subpage.id, tileId, patch));

  const openRoom = (id) => {
    setRoomId(id);
    setSubId(null);
    setMoreOpen(false);
    setPanel(null);
    if (id === ROOMS_OVERVIEW_ID) setEditing(false);
  };

  const title = room ? room.name : 'Übersicht';
  let subtitle;
  if (isOverview) {
    subtitle = `${rooms.length} Räume & Seiten · ${rooms.reduce((sum, r) => sum + r.summary.activeDevices, 0)} Geräte aktiv`;
  } else if (isEditing) {
    subtitle = 'Karten ziehen zum Sortieren · × entfernt · + fügt hinzu';
  } else if (hasDevices) {
    subtitle = [`${room.summary.activeDevices} aktiv`, ...roomLine(room.summary)].join(' · ');
  } else {
    const count = countTiles(room);
    subtitle = `${count} ${count === 1 ? 'Kachel' : 'Kacheln'}`;
  }
  const alertText = room ? room.alert : (alerts.length ? `${alerts.length} ${alerts.length === 1 ? 'Hinweis' : 'Hinweise'}` : '');
  const columns = packItems(items, { pair: !isEditing });
  const inspectTile = panel?.type === 'tile' ? subpage?.tiles.find((tile) => tile.id === panel.tileId) : null;
  const panelSub = panel?.type === 'sub' ? room?.subpages.find((sub) => sub.id === panel.subId) : null;
  const missingPresets = room?.areaId
    ? ROOM_FILTERS.filter((item) => !room.subpages.some((sub) => sub.preset === item.id))
    : [];

  const renderDevice = (item) => (
    <RoomCard
      hass={hass}
      entityId={item.entityId}
      roomName={room.name}
      favorite={favorites.includes(item.entityId)}
      onToggleFavorite={() => toggleFavorite(item.entityId)}
      run={run}
    />
  );

  const renderColumn = (column) => {
    if (column.kind === 'device') return <div key={column.key} className="tm-rooms-col">{renderDevice(column.items[0])}</div>;
    const tiles = column.items.map((item) => item.tile);
    return (
      <div
        key={column.key}
        className={`tm-rooms-tile-col${column.tall ? ' tall' : ''}`}
        style={{ width: `${tileColumnWidth(tiles)}px` }}
      >
        {tiles.map((tile, index) => (
          <TileView key={tile.id} tile={tile} hass={hass} getEntity={getEntity} onOpenPopup={onOpenPopup} onUpdateTile={onUpdateTile} index={index} />
        ))}
      </div>
    );
  };

  const renderEditItem = (item) => {
    const dragged = strip.drag?.key === item.key;
    const isTile = item.kind === 'tile';
    const label = isTile ? (item.tile.label || 'Kachel') : getEntity(item.entityId).name;
    return (
      <div
        key={item.key}
        data-reorder-key={item.key}
        className={`tm-rooms-edit-item${dragged ? ' dragging' : ''}${isTile ? ' tile' : ''}`}
        style={{
          ...(isTile ? { width: `${tileColumnWidth([item.tile])}px` } : {}),
          ...(dragged ? { transform: `translateX(${strip.drag.dx}px)` } : {}),
        }}
        {...strip.bind(item.key)}
      >
        <div className="tm-rooms-edit-content" inert="">
          {isTile ? (
            <div className={`tm-rooms-tile-col${(item.tile.h || 1) >= 3 ? ' tall' : ''}`} style={{ width: '100%' }}>
              <TileView tile={item.tile} hass={hass} getEntity={getEntity} onOpenPopup={() => {}} onUpdateTile={() => {}} index={0} />
            </div>
          ) : renderDevice(item)}
        </div>
        <EditOverlay
          label={label}
          onRemove={() => apply((c) => removeItem(c, room.id, subpage.id, item.key))}
          onEdit={isTile ? () => setPanel({ type: 'tile', tileId: item.tile.id }) : null}
        />
      </div>
    );
  };

  return (
    <div className={`tm-rooms${isEditing ? ' tm-rooms--editing' : ''}`}>
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
            data-more-toggle="1"
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

      <main className={`tm-rooms-main${showDock ? '' : ' tm-rooms-main--no-dock'}`}>
        <header className="tm-rooms-header">
          <div>
            <h1 className="tm-rooms-title">{title}</h1>
            <p className="tm-rooms-subtitle">{subtitle}</p>
          </div>
          <div className="tm-rooms-header-right">
            {!isEditing && alertText && <span className="tm-rooms-alert"><span />{alertText}</span>}
            {!isEditing && <span className="tm-rooms-clock">{format(time, 'HH:mm')}</span>}
            {isEditing ? (
              <button type="button" className="tm-rooms-done" onClick={() => { setEditing(false); setPanel(null); }}>
                <Check size={20} />
                Fertig
              </button>
            ) : (
              <>
                <button type="button" className="tm-btn-round" onClick={onScreensaver} aria-label="Bildschirmschoner"><Monitor size={22} /></button>
                {room && (
                  <button type="button" className="tm-btn-round" onClick={() => setEditing(true)} aria-label={`${room.name} bearbeiten`}><Pencil size={22} /></button>
                )}
                <button type="button" className="tm-btn-round" onClick={onSettings} aria-label="Einstellungen"><Settings size={22} /></button>
              </>
            )}
          </div>
        </header>

        {room && !isEditing && <SceneRow hass={hass} sceneIds={sceneIds} run={run} />}

        <div className="tm-rooms-strip" ref={stripRef}>
          {isOverview && rooms.map((candidate) => {
            const lines = candidate.isPage
              ? [`${countTiles(candidate)} ${countTiles(candidate) === 1 ? 'Kachel' : 'Kacheln'}`]
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

          {room && !isEditing && columns.map(renderColumn)}

          {isEditing && items.map(renderEditItem)}
          {isEditing && strip.drag && <span className="tm-rooms-drop-marker" style={{ left: `${strip.drag.markerX}px` }} />}
          {isEditing && (
            <button type="button" className="tm-rc tm-rc--add" onClick={() => setPanel({ type: 'add' })}>
              <Plus size={36} />
              <span>Gerät oder Kachel</span>
            </button>
          )}

          {room && !isEditing && !items.length && (
            <div className="tm-rc tm-rc--empty">
              <h2 className="tm-rc-title">Nichts hier</h2>
              <p className="tm-rc-sub">Tippe auf den Stift oben, um Geräte oder Kacheln hinzuzufügen.</p>
              <button type="button" className="tm-rc-chip tm-rc-chip--static" style={{ cursor: 'pointer' }} onClick={() => setEditing(true)}>
                <Pencil size={16} />
                Bearbeiten
              </button>
            </div>
          )}
        </div>
      </main>

      {showDock && (
        <nav className="tm-rooms-dock" aria-label={`Unterseiten von ${room.name}`} ref={dockRef}>
          {room.subpages.map((item) => {
            const Icon = SUBPAGE_ICON_MAP[item.icon] || LayoutGrid;
            const active = item.id === subpage.id;
            const dragged = dock.drag?.key === item.id;
            return (
              <button
                key={item.id}
                type="button"
                data-reorder-key={isEditing ? item.id : undefined}
                className={`tm-rooms-dock-btn${active ? ' active' : ''}${dragged ? ' dragging' : ''}`}
                style={dragged ? { transform: `translateX(${dock.drag.dx}px)` } : undefined}
                onClick={() => {
                  if (isEditing && active) setPanel({ type: 'sub', subId: item.id });
                  else setSubId(item.id);
                }}
                aria-pressed={active}
                {...(isEditing ? dock.bind(item.id) : {})}
              >
                <Icon size={22} />
                <span>{item.name}</span>
                {isEditing && active && <Pencil size={14} className="tm-rooms-dock-edit" />}
              </button>
            );
          })}
          {isEditing && dock.drag && <span className="tm-rooms-drop-marker tm-rooms-drop-marker--dock" style={{ left: `${dock.drag.markerX}px` }} />}
          {isEditing && room.subpages.length < 8 && (
            <button type="button" className="tm-rooms-dock-btn tm-rooms-dock-add" onClick={() => setPanel({ type: 'addSub' })} aria-label="Unterseite hinzufügen">
              <Plus size={22} />
            </button>
          )}
        </nav>
      )}

      {isEditing && panel?.type === 'add' && (
        <AddItemPanel
          hass={hass}
          hiddenIds={hiddenIds}
          onAddTile={(type) => { apply((c) => addTile(c, room.id, subpage.id, type)); setPanel(null); }}
          onAddDevice={(id) => { apply((c) => addSubpageDevice(c, room.id, subpage.id, id)); setPanel(null); }}
          onClose={() => setPanel(null)}
        />
      )}
      {isEditing && inspectTile && (
        <TileInspectorPanel
          tile={inspectTile}
          hass={hass}
          onUpdate={onUpdateTile}
          onRemove={(tileId) => apply((c) => removeItem(c, room.id, subpage.id, `t:${tileId}`))}
          onClose={() => setPanel(null)}
        />
      )}
      {isEditing && panelSub && (
        <SubpagePopover
          key={panelSub.id}
          sub={panelSub}
          canDelete={room.subpages.length > 1}
          onChange={(patch) => apply((c) => updateSubpage(c, room.id, panelSub.id, patch))}
          onDelete={() => { apply((c) => removeSubpage(c, room.id, panelSub.id)); setSubId(null); }}
          onClose={() => setPanel(null)}
        />
      )}
      {isEditing && panel?.type === 'addSub' && (
        <AddSubpagePopover
          presets={missingPresets}
          onAdd={(preset) => {
            const sub = createSubpage({ preset });
            apply((c) => addSubpage(c, room.id, preset, sub));
            setSubId(sub.id);
            setPanel(preset ? null : { type: 'sub', subId: sub.id });
          }}
          onClose={() => setPanel(null)}
        />
      )}
    </div>
  );
}
