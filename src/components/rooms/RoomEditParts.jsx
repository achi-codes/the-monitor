import { useEffect, useRef, useState } from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import { WIDGET_TYPES } from '../../lib/layout';
import { getFriendlyName } from '../../lib/entities';
import { CARD_DOMAINS } from '../../lib/roomsMode';
import { SUBPAGE_ICONS } from '../../lib/rooms';
import { WIDGET_ICONS } from '../SlotWidgetPickerPopup';
import WidgetInspector from '../WidgetInspector';
import EntityPicker from '../EntityPicker';
import { SUBPAGE_ICON_LABELS, SUBPAGE_ICON_MAP } from './subpageIcons';

function useDismiss(onClose) {
  const ref = useRef(null);
  useEffect(() => {
    const onDown = (event) => {
      const path = event.composedPath?.() || [event.target];
      if (ref.current && !path.includes(ref.current)) onClose();
    };
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    // Defer so the click that opened the panel does not close it.
    const timer = setTimeout(() => document.addEventListener('pointerdown', onDown), 0);
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);
  return ref;
}

function PanelHead({ title, onClose }) {
  return (
    <div className="tm-rooms-panel-head">
      <h2>{title}</h2>
      <button type="button" className="tm-rooms-panel-close" onClick={onClose} aria-label="Schließen"><X size={20} /></button>
    </div>
  );
}

export function AddItemPanel({ hass, hiddenIds, onAddTile, onAddDevice, onClose }) {
  const ref = useDismiss(onClose);
  return (
    <div ref={ref} className="tm-rooms-panel tm-rooms-panel--center" role="dialog" aria-label="Hinzufügen">
      <PanelHead title="Hinzufügen" onClose={onClose} />
      <p className="tm-rooms-panel-label">Gerät</p>
      <EntityPicker value="" domains={CARD_DOMAINS} placeholder="Gerät suchen …" onChange={(id) => id && onAddDevice(id)} />
      {hiddenIds.length > 0 && (
        <div className="tm-rooms-panel-chips">
          {hiddenIds.map((id) => (
            <button key={id} type="button" className="tm-rc-chip" onClick={() => onAddDevice(id)}>
              <Plus size={16} />
              {getFriendlyName(hass, id)}
            </button>
          ))}
        </div>
      )}
      <p className="tm-rooms-panel-label">Kachel</p>
      <div className="tm-rooms-panel-grid">
        {Object.entries(WIDGET_TYPES).map(([type, meta]) => {
          const Icon = WIDGET_ICONS[type] || Plus;
          return (
            <button key={type} type="button" className="tm-rooms-panel-type" onClick={() => onAddTile(type)}>
              <Icon size={22} />
              <span>{meta.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function TileInspectorPanel({ tile, hass, onUpdate, onRemove, onClose }) {
  const ref = useDismiss(onClose);
  return (
    <div ref={ref} className="tm-rooms-panel tm-rooms-panel--side" role="dialog" aria-label="Kachel bearbeiten">
      <PanelHead title="Kachel bearbeiten" onClose={onClose} />
      <WidgetInspector
        widget={tile}
        pageIndex={0}
        hass={hass}
        onUpdate={(_page, tileId, patch) => onUpdate(tileId, patch)}
        onDelete={(_page, tileId) => { onRemove(tileId); onClose(); }}
        onApplySize={(_page, tileId, preset) => onUpdate(tileId, { w: preset.w, h: preset.h })}
      />
    </div>
  );
}

export function SubpagePopover({ sub, canDelete, onChange, onDelete, onClose }) {
  const ref = useDismiss(onClose);
  const [name, setName] = useState(sub.name);
  return (
    <div ref={ref} className="tm-rooms-panel tm-rooms-panel--dock" role="dialog" aria-label="Unterseite bearbeiten">
      <PanelHead title="Unterseite" onClose={onClose} />
      <label className="tm-rooms-panel-label" htmlFor="rooms-sub-name">Name</label>
      <input
        id="rooms-sub-name"
        className="tm-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => name.trim() && onChange({ name: name.trim() })}
        onKeyDown={(e) => { if (e.key === 'Enter' && name.trim()) { onChange({ name: name.trim() }); onClose(); } }}
      />
      <p className="tm-rooms-panel-label">Icon</p>
      <div className="tm-rooms-panel-icons">
        {SUBPAGE_ICONS.map((key) => {
          const Icon = SUBPAGE_ICON_MAP[key];
          return (
            <button
              key={key}
              type="button"
              className={`tm-rooms-panel-icon${sub.icon === key ? ' active' : ''}`}
              onClick={() => onChange({ icon: key })}
              aria-label={SUBPAGE_ICON_LABELS[key]}
              aria-pressed={sub.icon === key}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>
      {canDelete && (
        <button type="button" className="tm-rooms-panel-danger" onClick={() => { onDelete(); onClose(); }}>
          <Trash2 size={16} />
          Unterseite löschen
        </button>
      )}
    </div>
  );
}

export function AddSubpagePopover({ presets, onAdd, onClose }) {
  const ref = useDismiss(onClose);
  return (
    <div ref={ref} className="tm-rooms-panel tm-rooms-panel--dock" role="dialog" aria-label="Unterseite hinzufügen">
      <PanelHead title="Neue Unterseite" onClose={onClose} />
      <div className="tm-rooms-panel-list">
        <button type="button" className="tm-rooms-more-item" onClick={() => onAdd(null)}>
          <Plus size={20} />
          <span>Eigene Unterseite</span>
        </button>
        {presets.map((item) => {
          const Icon = SUBPAGE_ICON_MAP[item.id];
          return (
            <button key={item.id} type="button" className="tm-rooms-more-item" onClick={() => onAdd(item.id)}>
              <Icon size={20} />
              <span>{`Vorschlag: ${item.label}`}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DevicePanel({
  hass, entityId, label, group = [], onGroup, onReplace, onLabel, onRemove, onClose,
}) {
  const ref = useDismiss(onClose);
  const [name, setName] = useState(label);
  const saveName = () => { if (name !== label) onLabel(name); };
  return (
    <div ref={ref} className="tm-rooms-panel tm-rooms-panel--side" role="dialog" aria-label="Gerät bearbeiten">
      <PanelHead title="Gerät bearbeiten" onClose={() => { saveName(); onClose(); }} />
      <p className="tm-rooms-panel-label">Entität</p>
      <EntityPicker value={entityId} domains={CARD_DOMAINS} onChange={(id) => id && id !== entityId && onReplace(id)} />
      <p className="tm-rooms-panel-hint">{entityId}</p>
      <label className="tm-rooms-panel-label" htmlFor="rooms-device-name">Anzeigename</label>
      <input
        id="rooms-device-name"
        className="tm-input"
        value={name}
        placeholder={getFriendlyName(hass, entityId)}
        onChange={(e) => setName(e.target.value)}
        onBlur={saveName}
        onKeyDown={(e) => { if (e.key === 'Enter') { saveName(); onClose(); } }}
      />
      {entityId.startsWith('light.') && onGroup && (
        <>
          <p className="tm-rooms-panel-label">Gruppe · bis zu 4 Lampen teilen sich die Karte</p>
          <ul className="tm-rooms-panel-members">
            <li><span>{getFriendlyName(hass, entityId)}</span><small>Hauptlampe</small></li>
            {group.map((id) => (
              <li key={id}>
                <span>{getFriendlyName(hass, id)}</span>
                <button type="button" className="tm-rooms-panel-close" onClick={() => onGroup(group.filter((m) => m !== id))} aria-label={`${getFriendlyName(hass, id)} aus der Gruppe entfernen`}>
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>
          {group.length < 3 && (
            <EntityPicker
              value=""
              domains={['light']}
              placeholder="Lampe zur Gruppe hinzufügen …"
              onChange={(id) => id && id !== entityId && !group.includes(id) && onGroup([...group, id])}
            />
          )}
        </>
      )}
      <button type="button" className="tm-rooms-panel-danger" onClick={() => { onRemove(); onClose(); }}>
        <Trash2 size={16} />
        Karte entfernen
      </button>
    </div>
  );
}
