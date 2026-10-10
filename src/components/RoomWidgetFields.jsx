import { useEffect, useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import EntityPicker from './EntityPicker';
import { fetchHaAreas } from '../lib/haAreas';
import { getFriendlyName } from '../lib/entities';
import { SLOT_LIMITS, WIDGET_TYPES } from '../lib/layout';
import { ROOM_ACCENTS, resolveAreaEntityIds } from '../lib/roomWidget';

export default function RoomWidgetFields({ widget, hass, onChange }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    let active = true;
    fetchHaAreas(hass).then((list) => { if (active) setAreas(list); });
    return () => { active = false; };
  }, [hass?.connection]);

  const areaEntityIds = resolveAreaEntityIds(hass, widget.area_id);
  const extraIds = widget.entity_ids || [];
  const hidden = new Set(widget.disabled_entity_ids || []);
  const listedIds = [...new Set([...areaEntityIds, ...extraIds])];

  const toggleHidden = (entityId) => {
    const current = widget.disabled_entity_ids || [];
    onChange({
      disabled_entity_ids: hidden.has(entityId)
        ? current.filter((id) => id !== entityId)
        : [...current, entityId],
    });
  };

  return (
    <>
      <div className="tm-widget-inspector-section">
        <label className="tm-widget-inspector-label">Bereich</label>
        <select
          className="tm-input"
          value={widget.area_id || ''}
          onChange={(e) => {
            const area = areas.find((item) => item.area_id === e.target.value);
            onChange({ area_id: area?.area_id || '', area_name: area?.name || '' });
          }}
        >
          <option value="">Kein Bereich — nur manuelle Geräte</option>
          {areas.map((area) => (
            <option key={area.area_id} value={area.area_id}>{area.name}</option>
          ))}
        </select>
        <p className="tm-widget-inspector-hint">
          Lichter, Rollläden, Klima, Medien sowie Temperatur-, Feuchte- und Fenstersensoren des Bereichs werden automatisch übernommen.
        </p>
      </div>

      <div className="tm-widget-inspector-section">
        <label className="tm-widget-inspector-label">Farbe</label>
        <div className="tm-room-accent-picker">
          <button
            type="button"
            className={`tm-room-accent-swatch tm-room-accent-swatch--auto${!widget.accent ? ' active' : ''}`}
            onClick={() => onChange({ accent: '' })}
            aria-label="Automatisch"
            title="Automatisch"
          >
            A
          </button>
          {Object.entries(ROOM_ACCENTS).map(([key, accent]) => (
            <button
              key={key}
              type="button"
              className={`tm-room-accent-swatch${widget.accent === key ? ' active' : ''}`}
              style={{ background: accent.color }}
              onClick={() => onChange({ accent: key })}
              aria-label={accent.label}
              title={accent.label}
            />
          ))}
        </div>
      </div>

      <div className="tm-widget-inspector-section">
        <label className="tm-widget-inspector-label">Geräte</label>
        <EntityPicker
          value=""
          onChange={(entityId) => {
            if (!entityId || listedIds.includes(entityId) || extraIds.length >= SLOT_LIMITS.roomEntities) return;
            onChange({ entity_ids: [...extraIds, entityId] });
          }}
          domains={WIDGET_TYPES.room.domains}
          placeholder="Gerät hinzufügen…"
        />
        <div className="tm-widget-inspector-entity-list">
          {listedIds.map((entityId) => {
            const isExtra = extraIds.includes(entityId) && !areaEntityIds.includes(entityId);
            const isHidden = hidden.has(entityId);
            return (
              <div
                key={entityId}
                className={`tm-widget-inspector-entity-row${isHidden ? ' tm-room-entity--hidden' : ''}`}
              >
                <span className="tm-widget-inspector-entity-name">{getFriendlyName(hass, entityId)}</span>
                {isExtra ? (
                  <button
                    type="button"
                    className="tm-widget-inspector-remove"
                    onClick={() => onChange({ entity_ids: extraIds.filter((id) => id !== entityId) })}
                    aria-label="Entfernen"
                  >
                    <X size={14} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="tm-widget-inspector-remove"
                    onClick={() => toggleHidden(entityId)}
                    aria-label={isHidden ? 'Einblenden' : 'Ausblenden'}
                  >
                    {isHidden ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
