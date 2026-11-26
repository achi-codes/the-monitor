import { useEffect, useState } from 'react';
import {
  ChevronDown, ChevronUp, LayoutDashboard, MapPin, Pencil, Pin, PinOff, Plus, Trash2,
} from 'lucide-react';
import { useConfig } from '../../context/ConfigContext';
import { useHass } from '../../context/HassContext';
import { fetchHaAreas } from '../../lib/haAreas';
import { ROOM_LIMIT, TILE_LIMIT } from '../../lib/rooms';
import { WIDGET_TYPES, getWidgetLabel } from '../../lib/layout';
import { RAIL_LIMIT, getRailRoomIds, getRoomTiles } from '../../lib/roomsMode';
import {
  addModeRoom, addTile, moveModeRoom, moveTile, removeModeRoom, removeTile,
  toggleRailRoom, updateModeRoom, updateTile,
} from '../../lib/roomsModeConfig';
import WidgetInspector from '../WidgetInspector';

const HEADING_STYLE = {
  fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem',
};

function IconButton({ label, onClick, disabled, active, children }) {
  return (
    <button
      type="button"
      className={`tm-rmc-icon-btn${active ? ' active' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      aria-pressed={active === undefined ? undefined : active}
    >
      {children}
    </button>
  );
}

function TileEditor({ room, hass, apply }) {
  const tiles = getRoomTiles(room);
  const [selectedId, setSelectedId] = useState(null);
  const [newType, setNewType] = useState('weather');
  const selected = tiles.find((tile) => tile.id === selectedId) || null;

  return (
    <div className="tm-rmc-tiles">
      {tiles.length === 0 && <p className="tm-text-sm tm-opacity-70">Noch keine Kacheln.</p>}
      <ol className="tm-rmc-tile-list">
        {tiles.map((tile, index) => (
          <li key={tile.id} className={`tm-rmc-tile${tile.id === selectedId ? ' active' : ''}`}>
            <span className="tm-rmc-tile-name">
              {getWidgetLabel(tile)}
              {getWidgetLabel(tile) !== WIDGET_TYPES[tile.type]?.label && <small>{WIDGET_TYPES[tile.type]?.label || tile.type}</small>}
            </span>
            <IconButton label="Nach vorne" disabled={index === 0} onClick={() => apply((c) => moveTile(c, room.id, tile.id, -1))}><ChevronUp size={18} /></IconButton>
            <IconButton label="Nach hinten" disabled={index === tiles.length - 1} onClick={() => apply((c) => moveTile(c, room.id, tile.id, 1))}><ChevronDown size={18} /></IconButton>
            <IconButton label="Kachel bearbeiten" active={tile.id === selectedId} onClick={() => setSelectedId(tile.id === selectedId ? null : tile.id)}><Pencil size={16} /></IconButton>
            <IconButton label="Kachel entfernen" onClick={() => apply((c) => removeTile(c, room.id, tile.id))}><Trash2 size={16} /></IconButton>
          </li>
        ))}
      </ol>

      {selected && (
        <div className="tm-rmc-inspector">
          <WidgetInspector
            widget={selected}
            pageIndex={0}
            hass={hass}
            onUpdate={(_page, tileId, patch) => apply((c) => updateTile(c, room.id, tileId, patch))}
            onDelete={(_page, tileId) => { setSelectedId(null); apply((c) => removeTile(c, room.id, tileId)); }}
            onApplySize={(_page, tileId, preset) => apply((c) => updateTile(c, room.id, tileId, { w: preset.w, h: preset.h }))}
          />
        </div>
      )}

      {tiles.length < TILE_LIMIT && (
        <div className="tm-rmc-add">
          <label className="tm-rmc-visually-hidden" htmlFor={`tile-type-${room.id}`}>Kachel-Typ</label>
          <select id={`tile-type-${room.id}`} className="tm-input" value={newType} onChange={(e) => setNewType(e.target.value)}>
            {Object.entries(WIDGET_TYPES).map(([type, meta]) => <option key={type} value={type}>{meta.label}</option>)}
          </select>
          <button type="button" className="tm-btn-secondary" onClick={() => apply((c) => addTile(c, room.id, newType))}>
            <Plus size={16} />
            Kachel hinzufügen
          </button>
        </div>
      )}
    </div>
  );
}

export default function RoomsModeConfig() {
  const { config, setConfig, updateDisplay } = useConfig();
  const { hass, isConnected, revision } = useHass();
  const [areas, setAreas] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [newPage, setNewPage] = useState('');
  const [newArea, setNewArea] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetchHaAreas(hass).then((result) => { if (!cancelled) setAreas(result); });
    return () => { cancelled = true; };
  }, [hass, isConnected, revision]);

  const apply = (fn) => setConfig((prev) => fn(prev));
  const pinned = getRailRoomIds(config);
  const usedAreas = new Set(config.rooms.map((room) => room.areaId).filter(Boolean));
  const freeAreas = areas.filter((area) => !usedAreas.has(area.area_id));
  const canAdd = config.rooms.length < ROOM_LIMIT;

  const addAllAreas = () => apply((prev) => freeAreas.reduce(
    (next, area) => addModeRoom(next, { name: area.name, areaId: area.area_id }),
    prev,
  ));

  return (
    <section>
      <h3 style={HEADING_STYLE}>Raum-Modus</h3>
      <div className="tm-setting-group">
        <label className="tm-setting-toggle">
          <input
            type="checkbox"
            checked={config.dashboardMode === 'rooms'}
            onChange={(e) => updateDisplay({ dashboardMode: e.target.checked ? 'rooms' : 'grid' })}
          />
          <span>Raum-Modus verwenden</span>
        </label>
        <p className="tm-text-sm tm-opacity-70" style={{ lineHeight: 1.5 }}>
          Räume zeigen automatisch die Geräte ihres HA-Bereichs, Seiten nur die Kacheln, die du hinzufügst.
          {` Bis zu ${RAIL_LIMIT} stehen direkt in der Leiste (`}
          <Pin size={12} />
          {'), alle anderen im Mehr-Menü darunter.'}
        </p>

        <ul className="tm-rmc-list">
          {config.rooms.map((room, index) => {
            const isPinned = pinned.includes(room.id);
            const open = openId === room.id;
            const tileCount = getRoomTiles(room).length;
            return (
              <li key={room.id} className={`tm-rmc-room${open ? ' open' : ''}`}>
                <div className="tm-rmc-row">
                  <span className="tm-rmc-kind" title={room.areaId ? 'Raum' : 'Seite'}>
                    {room.areaId ? <MapPin size={18} /> : <LayoutDashboard size={18} />}
                  </span>
                  <input
                    className="tm-input tm-rmc-name"
                    value={room.name}
                    onChange={(e) => apply((c) => updateModeRoom(c, room.id, { name: e.target.value }))}
                    aria-label={`Name für ${room.name}`}
                  />
                  <select
                    className="tm-input tm-rmc-area"
                    value={room.areaId}
                    onChange={(e) => apply((c) => updateModeRoom(c, room.id, { areaId: e.target.value }))}
                    aria-label={`HA-Bereich für ${room.name}`}
                  >
                    <option value="">Seite (kein Bereich)</option>
                    {areas
                      .filter((area) => area.area_id === room.areaId || !usedAreas.has(area.area_id))
                      .map((area) => <option key={area.area_id} value={area.area_id}>{area.name}</option>)}
                  </select>
                  <IconButton
                    label={isPinned ? 'Aus der Leiste nehmen' : 'In die Leiste'}
                    active={isPinned}
                    disabled={!isPinned && pinned.length >= RAIL_LIMIT}
                    onClick={() => apply((c) => toggleRailRoom(c, room.id))}
                  >
                    {isPinned ? <Pin size={18} /> : <PinOff size={18} />}
                  </IconButton>
                  <IconButton label="Nach oben" disabled={index === 0} onClick={() => apply((c) => moveModeRoom(c, room.id, -1))}><ChevronUp size={18} /></IconButton>
                  <IconButton label="Nach unten" disabled={index === config.rooms.length - 1} onClick={() => apply((c) => moveModeRoom(c, room.id, 1))}><ChevronDown size={18} /></IconButton>
                  <button type="button" className={`tm-btn-secondary tm-rmc-tiles-btn${open ? ' active' : ''}`} onClick={() => setOpenId(open ? null : room.id)} aria-expanded={open}>
                    {`Kacheln (${tileCount})`}
                  </button>
                  <IconButton label={`${room.name} entfernen`} disabled={config.rooms.length <= 1} onClick={() => apply((c) => removeModeRoom(c, room.id))}><Trash2 size={18} /></IconButton>
                </div>
                {open && <TileEditor room={room} hass={hass} apply={apply} />}
              </li>
            );
          })}
        </ul>
        <p className="tm-text-sm tm-opacity-70">{`${pinned.length} von ${RAIL_LIMIT} in der Leiste`}</p>

        {canAdd && (
          <div className="tm-rmc-add-group">
            <div className="tm-rmc-add">
              <label className="tm-rmc-visually-hidden" htmlFor="rmc-new-area">HA-Bereich</label>
              <select id="rmc-new-area" className="tm-input" value={newArea} onChange={(e) => setNewArea(e.target.value)}>
                <option value="">{freeAreas.length ? 'HA-Bereich wählen …' : 'Alle Bereiche sind schon angelegt'}</option>
                {freeAreas.map((area) => <option key={area.area_id} value={area.area_id}>{area.name}</option>)}
              </select>
              <button
                type="button"
                className="tm-btn-secondary"
                disabled={!newArea}
                onClick={() => {
                  const area = freeAreas.find((a) => a.area_id === newArea);
                  if (area) apply((c) => addModeRoom(c, { name: area.name, areaId: area.area_id }));
                  setNewArea('');
                }}
              >
                <Plus size={16} />
                Raum
              </button>
              {freeAreas.length > 1 && (
                <button type="button" className="tm-btn-secondary" onClick={addAllAreas}>Alle Bereiche</button>
              )}
            </div>
            <form
              className="tm-rmc-add"
              onSubmit={(e) => {
                e.preventDefault();
                if (!newPage.trim()) return;
                apply((c) => addModeRoom(c, { name: newPage.trim() }));
                setNewPage('');
              }}
            >
              <label className="tm-rmc-visually-hidden" htmlFor="rmc-new-page">Name der neuen Seite</label>
              <input id="rmc-new-page" className="tm-input" value={newPage} onChange={(e) => setNewPage(e.target.value)} placeholder="Neue Seite, z. B. Energie" />
              <button type="submit" className="tm-btn-secondary" disabled={!newPage.trim()}>
                <Plus size={16} />
                Seite
              </button>
            </form>
          </div>
        )}
        {!canAdd && <p className="tm-text-sm tm-opacity-70">{`Maximal ${ROOM_LIMIT} Räume und Seiten.`}</p>}
      </div>
    </section>
  );
}
