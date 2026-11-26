import { useEffect, useState } from 'react';
import {
  ChevronDown, ChevronUp, LayoutDashboard, MapPin, Pencil, Pin, PinOff, Plus, Trash2,
} from 'lucide-react';
import { useConfig } from '../../context/ConfigContext';
import { useHass } from '../../context/HassContext';
import { fetchHaAreas } from '../../lib/haAreas';
import {
  ROOM_LIMIT, SUBPAGE_ICONS, SUBPAGE_LIMIT, TILE_LIMIT,
} from '../../lib/rooms';
import { WIDGET_TYPES, getWidgetLabel } from '../../lib/layout';
import { getFriendlyName } from '../../lib/entities';
import { resolveRoomEntityIds } from '../../lib/roomWidget';
import {
  CARD_DOMAINS, RAIL_LIMIT, ROOM_FILTERS, getRailRoomIds, getRoomSubpages, getSubpageContent, presetLabel,
} from '../../lib/roomsMode';
import {
  addModeRoom, addSubpage, addSubpageDevice, addTile, moveModeRoom, moveSubpage, moveTile,
  removeModeRoom, removeSubpage, removeSubpageDevice, removeTile, toggleHiddenDevice,
  toggleRailRoom, updateModeRoom, updateSubpage, updateTile,
} from '../../lib/roomsModeConfig';
import WidgetInspector from '../WidgetInspector';
import EntityPicker from '../EntityPicker';
import { SUBPAGE_ICON_LABELS } from './subpageIcons';

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

function TileEditor({ tiles, hass, idPrefix, onAdd, onUpdate, onRemove, onMove }) {
  const [selectedId, setSelectedId] = useState(null);
  const [newType, setNewType] = useState('weather');
  const selected = tiles.find((tile) => tile.id === selectedId) || null;

  return (
    <div className="tm-rmc-block">
      <p className="tm-rmc-block-title">Kacheln</p>
      {tiles.length === 0 && <p className="tm-text-sm tm-opacity-70">Noch keine Kacheln.</p>}
      <ol className="tm-rmc-tile-list">
        {tiles.map((tile, index) => (
          <li key={tile.id} className={`tm-rmc-tile${tile.id === selectedId ? ' active' : ''}`}>
            <span className="tm-rmc-tile-name">
              {getWidgetLabel(tile)}
              {getWidgetLabel(tile) !== WIDGET_TYPES[tile.type]?.label && <small>{WIDGET_TYPES[tile.type]?.label || tile.type}</small>}
            </span>
            <IconButton label="Nach vorne" disabled={index === 0} onClick={() => onMove(tile.id, -1)}><ChevronUp size={18} /></IconButton>
            <IconButton label="Nach hinten" disabled={index === tiles.length - 1} onClick={() => onMove(tile.id, 1)}><ChevronDown size={18} /></IconButton>
            <IconButton label="Kachel bearbeiten" active={tile.id === selectedId} onClick={() => setSelectedId(tile.id === selectedId ? null : tile.id)}><Pencil size={16} /></IconButton>
            <IconButton label="Kachel entfernen" onClick={() => onRemove(tile.id)}><Trash2 size={16} /></IconButton>
          </li>
        ))}
      </ol>

      {selected && (
        <div className="tm-rmc-inspector">
          <WidgetInspector
            widget={selected}
            pageIndex={0}
            hass={hass}
            onUpdate={(_page, tileId, patch) => onUpdate(tileId, patch)}
            onDelete={(_page, tileId) => { setSelectedId(null); onRemove(tileId); }}
            onApplySize={(_page, tileId, preset) => onUpdate(tileId, { w: preset.w, h: preset.h })}
          />
        </div>
      )}

      {tiles.length < TILE_LIMIT && (
        <div className="tm-rmc-add">
          <label className="tm-rmc-visually-hidden" htmlFor={`tile-type-${idPrefix}`}>Kachel-Typ</label>
          <select id={`tile-type-${idPrefix}`} className="tm-input" value={newType} onChange={(e) => setNewType(e.target.value)}>
            {Object.entries(WIDGET_TYPES).map(([type, meta]) => <option key={type} value={type}>{meta.label}</option>)}
          </select>
          <button type="button" className="tm-btn-secondary" onClick={() => onAdd(newType)}>
            <Plus size={16} />
            Kachel hinzufügen
          </button>
        </div>
      )}
    </div>
  );
}

function DeviceEditor({ room, sub, hass, config, apply }) {
  const entityIds = room.areaId ? resolveRoomEntityIds(hass, { area_id: room.areaId }) : [];
  const { autoIds } = getSubpageContent(hass, config, { id: room.id, entityIds }, sub);
  const name = (id) => getFriendlyName(hass, id);

  return (
    <div className="tm-rmc-block">
      <p className="tm-rmc-block-title">Geräte</p>
      {sub.preset && (
        autoIds.length ? (
          <ul className="tm-rmc-device-list">
            {autoIds.map((id) => (
              <li key={id}>
                <label className="tm-setting-toggle">
                  <input
                    type="checkbox"
                    checked={!sub.hidden.includes(id)}
                    onChange={() => apply((c) => toggleHiddenDevice(c, room.id, sub.id, id))}
                  />
                  <span>{name(id)}</span>
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <p className="tm-text-sm tm-opacity-70">
            {room.areaId ? 'Die Vorlage findet in diesem Bereich keine Geräte.' : 'Ohne HA-Bereich gibt es keine automatischen Geräte.'}
          </p>
        )
      )}
      {sub.devices.length > 0 && (
        <ol className="tm-rmc-tile-list">
          {sub.devices.map((id) => (
            <li key={id} className="tm-rmc-tile">
              <span className="tm-rmc-tile-name">{name(id)}<small>{id}</small></span>
              <IconButton label={`${name(id)} entfernen`} onClick={() => apply((c) => removeSubpageDevice(c, room.id, sub.id, id))}><Trash2 size={16} /></IconButton>
            </li>
          ))}
        </ol>
      )}
      <div className="tm-rmc-picker">
        <EntityPicker
          value=""
          domains={CARD_DOMAINS}
          placeholder="Weiteres Gerät hinzufügen …"
          onChange={(id) => { if (id) apply((c) => addSubpageDevice(c, room.id, sub.id, id)); }}
        />
      </div>
    </div>
  );
}

function SubpageEditor({ room, hass, config, apply }) {
  const subs = getRoomSubpages(room);
  const [openSubId, setOpenSubId] = useState(null);
  const missingPresets = room.areaId ? ROOM_FILTERS.filter((item) => !subs.some((sub) => sub.preset === item.id)) : [];
  const [newKind, setNewKind] = useState('');

  return (
    <div className="tm-rmc-tiles">
      <ol className="tm-rmc-sub-list">
        {subs.map((sub, index) => {
          const open = openSubId === sub.id;
          return (
            <li key={sub.id} className={`tm-rmc-sub${open ? ' open' : ''}`}>
              <div className="tm-rmc-row">
                <select
                  className="tm-input tm-rmc-icon-select"
                  value={sub.icon}
                  onChange={(e) => apply((c) => updateSubpage(c, room.id, sub.id, { icon: e.target.value }))}
                  aria-label={`Icon für ${sub.name}`}
                >
                  {SUBPAGE_ICONS.map((key) => <option key={key} value={key}>{SUBPAGE_ICON_LABELS[key]}</option>)}
                </select>
                <input
                  className="tm-input tm-rmc-name"
                  value={sub.name}
                  onChange={(e) => apply((c) => updateSubpage(c, room.id, sub.id, { name: e.target.value }))}
                  aria-label={`Name der Unterseite ${sub.name}`}
                />
                <span className="tm-rmc-badge">{sub.preset ? `Vorlage: ${presetLabel(sub.preset)}` : 'Eigene'}</span>
                <IconButton label="Nach links" disabled={index === 0} onClick={() => apply((c) => moveSubpage(c, room.id, sub.id, -1))}><ChevronUp size={18} /></IconButton>
                <IconButton label="Nach rechts" disabled={index === subs.length - 1} onClick={() => apply((c) => moveSubpage(c, room.id, sub.id, 1))}><ChevronDown size={18} /></IconButton>
                <button type="button" className={`tm-btn-secondary tm-rmc-tiles-btn${open ? ' active' : ''}`} onClick={() => setOpenSubId(open ? null : sub.id)} aria-expanded={open}>
                  Inhalt
                </button>
                <IconButton label={`${sub.name} entfernen`} disabled={subs.length <= 1} onClick={() => apply((c) => removeSubpage(c, room.id, sub.id))}><Trash2 size={18} /></IconButton>
              </div>
              {open && (
                <div className="tm-rmc-sub-body">
                  <DeviceEditor room={room} sub={sub} hass={hass} config={config} apply={apply} />
                  <TileEditor
                    tiles={sub.tiles}
                    hass={hass}
                    idPrefix={sub.id}
                    onAdd={(type) => apply((c) => addTile(c, room.id, sub.id, type))}
                    onUpdate={(tileId, patch) => apply((c) => updateTile(c, room.id, sub.id, tileId, patch))}
                    onRemove={(tileId) => apply((c) => removeTile(c, room.id, sub.id, tileId))}
                    onMove={(tileId, delta) => apply((c) => moveTile(c, room.id, sub.id, tileId, delta))}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {subs.length < SUBPAGE_LIMIT && (
        <div className="tm-rmc-add">
          <label className="tm-rmc-visually-hidden" htmlFor={`sub-kind-${room.id}`}>Art der Unterseite</label>
          <select id={`sub-kind-${room.id}`} className="tm-input" value={newKind} onChange={(e) => setNewKind(e.target.value)}>
            <option value="">Eigene Unterseite</option>
            {missingPresets.map((item) => <option key={item.id} value={item.id}>{`Vorlage: ${item.label}`}</option>)}
          </select>
          <button type="button" className="tm-btn-secondary" onClick={() => { apply((c) => addSubpage(c, room.id, newKind || null)); setNewKind(''); }}>
            <Plus size={16} />
            Unterseite
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
          Räume zeigen automatisch die Geräte ihres HA-Bereichs, Seiten nur das, was du hinzufügst. Unter „Unterseiten“ legst du die Reiter im unteren Dock fest: Vorlagen wie Licht oder Klima, eigene Unterseiten, Geräte ausblenden oder dazunehmen und Kacheln ergänzen.
          {` Bis zu ${RAIL_LIMIT} stehen direkt in der Leiste (`}
          <Pin size={12} />
          {'), alle anderen im Mehr-Menü darunter.'}
        </p>

        <ul className="tm-rmc-list">
          {config.rooms.map((room, index) => {
            const isPinned = pinned.includes(room.id);
            const open = openId === room.id;
            const subCount = getRoomSubpages(room).length;
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
                    {`Unterseiten (${subCount})`}
                  </button>
                  <IconButton label={`${room.name} entfernen`} disabled={config.rooms.length <= 1} onClick={() => apply((c) => removeModeRoom(c, room.id))}><Trash2 size={18} /></IconButton>
                </div>
                {open && <SubpageEditor room={room} hass={hass} config={config} apply={apply} />}
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
