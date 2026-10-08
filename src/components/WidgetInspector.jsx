import { Trash2 } from 'lucide-react';
import EntityPicker from './EntityPicker';
import {
  WIDGET_TYPES,
  SIZE_PRESETS,
  SLOT_LIMITS,
  getWidgetLabel,
} from '../lib/layout';
import { getDomain } from '../lib/entities';
import { ENERGY_TILE_KINDS } from '../lib/energySampleData';
import { SENSOR_HISTORY_HOURS } from '../lib/sensorHistory';
import { normalizeEnergyDeviceImages } from '../lib/energyDeviceImages';
import { getFriendlyName } from '../lib/entities';
import HaCardConfig from './HaCardConfig';

function patchDeviceImages(widget, section, patch) {
  const current = normalizeEnergyDeviceImages(widget.deviceImages);
  return {
    deviceImages: {
      ...current,
      [section]: {
        ...current[section],
        ...patch,
      },
    },
  };
}

export default function WidgetInspector({
  widget,
  pageIndex,
  onUpdate,
  onDelete,
  onApplySize,
  hass,
}) {
  if (!widget) {
    return (
      <div className="tm-widget-inspector tm-widget-inspector--empty">
        <p className="tm-text-sm tm-opacity-70">Tippe ein Widget an, um es zu bearbeiten — oder füge ein neues hinzu.</p>
      </div>
    );
  }

  const meta = WIDGET_TYPES[widget.type] || {};
  const isPopup = widget.type === 'popup';
  const isCoverPopup = widget.type === 'coverPopup';
  const isCamera = widget.type === 'camera';
  const isQuickAction = widget.type === 'quickAction';
  const isSankey = widget.type === 'sankey';
  const isEnergyTile = widget.type === 'energyTile';
  const isSensor = widget.type === 'sensor';
  const isSensorStatus = widget.type === 'sensorStatus';
  const isHaCard = widget.type === 'haCard';

  return (
    <div className="tm-widget-inspector">
      <div className="tm-widget-inspector-header">
        <div>
          <div className="tm-widget-inspector-title">{getWidgetLabel(widget)}</div>
          <div className="tm-text-xs tm-opacity-60">{meta.label || widget.type}</div>
        </div>
        <button type="button" className="tm-widget-inspector-delete" onClick={() => onDelete(pageIndex, widget.id)} aria-label="Widget entfernen">
          <Trash2 size={16} />
        </button>
      </div>

      <div className="tm-widget-inspector-section">
        <div className="tm-widget-inspector-label">Größe</div>
        <div className="tm-widget-inspector-sizes">
          {Object.entries(SIZE_PRESETS).map(([key, preset]) => (
            <button
              key={key}
              type="button"
              className={`tm-widget-inspector-size${widget.w === preset.w && widget.h === preset.h ? ' active' : ''}`}
              onClick={() => onApplySize(pageIndex, widget.id, preset)}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <div className="tm-text-xs tm-opacity-60" style={{ marginTop: '0.375rem' }}>
          Aktuell:
          {' '}
          {widget.w}
          ×
          {widget.h}
          {' '}
          (
          {widget.x}
          ,
          {widget.y}
          )
        </div>
      </div>

      {(widget.type !== 'shopping') && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Label (optional)</label>
          <input
            className="tm-input"
            type="text"
            value={widget.label || ''}
            onChange={(e) => onUpdate(pageIndex, widget.id, { label: e.target.value })}
            placeholder="Anzeigename"
          />
        </div>
      )}

      {widget.type !== 'shopping' && !isHaCard && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Icon (optional)</label>
          <input
            className="tm-input"
            type="text"
            value={widget.icon || ''}
            onChange={(e) => onUpdate(pageIndex, widget.id, { icon: e.target.value })}
            placeholder="mdi:sofa"
          />
        </div>
      )}

      {isQuickAction && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Modus</label>
          <div className="tm-widget-inspector-sizes">
            <button
              type="button"
              className={`tm-widget-inspector-size${widget.mode !== 'brightness' ? ' active' : ''}`}
              onClick={() => onUpdate(pageIndex, widget.id, { mode: 'toggle' })}
            >
              Schalter
            </button>
            <button
              type="button"
              className={`tm-widget-inspector-size${widget.mode === 'brightness' ? ' active' : ''}`}
              onClick={() => onUpdate(pageIndex, widget.id, { mode: 'brightness' })}
            >
              Helligkeit
            </button>
          </div>
        </div>
      )}

      {isEnergyTile && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Kachel-Typ</label>
          <div className="tm-widget-inspector-sizes tm-widget-inspector-sizes--stack">
            {Object.entries(ENERGY_TILE_KINDS).map(([kind, meta]) => (
              <button
                key={kind}
                type="button"
                className={`tm-widget-inspector-size tm-widget-inspector-size--wide${widget.tileKind === kind ? ' active' : ''}`}
                onClick={() => onUpdate(pageIndex, widget.id, {
                  tileKind: kind,
                  label: meta.label,
                  ...(kind === 'ev-heatpump'
                    ? { deviceImages: normalizeEnergyDeviceImages(widget.deviceImages) }
                    : {}),
                })}
              >
                <span>{meta.label}</span>
                <span className="tm-text-xs tm-opacity-60">{meta.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isEnergyTile && widget.tileKind === 'ev-heatpump' && (() => {
        const images = normalizeEnergyDeviceImages(widget.deviceImages);
        return (
          <>
            <div className="tm-widget-inspector-section">
              <label className="tm-widget-inspector-label">E-Auto · Bilder</label>
              <p className="tm-text-xs tm-opacity-60" style={{ marginBottom: '0.5rem', lineHeight: 1.4 }}>
                Bild je Zustand — optional per Entität steuern.
              </p>
              <label className="tm-text-xs tm-opacity-70">Lädt</label>
              <input
                className="tm-input"
                type="url"
                value={images.ev.charging}
                onChange={(e) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'ev', { charging: e.target.value }))}
                placeholder="https://… oder /local/…"
                style={{ marginBottom: '0.5rem' }}
              />
              <label className="tm-text-xs tm-opacity-70">Nicht am Laden</label>
              <input
                className="tm-input"
                type="url"
                value={images.ev.idle}
                onChange={(e) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'ev', { idle: e.target.value }))}
                placeholder="https://… oder /local/…"
                style={{ marginBottom: '0.5rem' }}
              />
              <label className="tm-text-xs tm-opacity-70">Status-Entität (Laden)</label>
              <EntityPicker
                value={images.ev.stateEntity}
                onChange={(entity_id) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'ev', { stateEntity: entity_id }))}
                domains={['binary_sensor', 'sensor', 'switch', 'input_boolean']}
                placeholder="Optional — auch unter Einstellungen → E-Auto"
              />
            </div>
            <div className="tm-widget-inspector-section">
              <label className="tm-widget-inspector-label">Wärmepumpe · Bilder</label>
              <label className="tm-text-xs tm-opacity-70">Mit Licht</label>
              <input
                className="tm-input"
                type="url"
                value={images.heatpump.lightOn}
                onChange={(e) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'heatpump', { lightOn: e.target.value }))}
                placeholder="https://… oder /local/…"
                style={{ marginBottom: '0.5rem' }}
              />
              <label className="tm-text-xs tm-opacity-70">Ohne Licht</label>
              <input
                className="tm-input"
                type="url"
                value={images.heatpump.lightOff}
                onChange={(e) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'heatpump', { lightOff: e.target.value }))}
                placeholder="https://… oder /local/…"
                style={{ marginBottom: '0.5rem' }}
              />
              <label className="tm-text-xs tm-opacity-70">Licht-Entität</label>
              <EntityPicker
                value={images.heatpump.lightEntity}
                onChange={(entity_id) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'heatpump', { lightEntity: entity_id }))}
                domains={['light', 'switch', 'binary_sensor', 'input_boolean']}
                placeholder="Optional — Anzeige / Licht"
              />
            </div>
          </>
        );
      })()}

      {isHaCard && (
        <HaCardConfig
          widget={widget}
          pageIndex={pageIndex}
          onUpdate={onUpdate}
          hass={hass}
        />
      )}

      {!isPopup && !isCoverPopup && !isCamera && !isSensor && !isSensorStatus && !isHaCard && widget.type !== 'shopping' && !isSankey && !isEnergyTile && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Entität</label>
          <EntityPicker
            value={widget.entity_id || ''}
            onChange={(entity_id) => onUpdate(pageIndex, widget.id, { entity_id })}
            domains={meta.domains}
            placeholder="Entität wählen…"
          />
        </div>
      )}

      {isSensorStatus && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Kontakte (max. {SLOT_LIMITS.contactStatusEntities})</label>
          <p className="tm-text-xs tm-opacity-60" style={{ lineHeight: 1.45, marginBottom: '0.5rem' }}>
            Fenster, Türen und Kontaktsensoren — das Icon zeigt offen oder geschlossen.
          </p>
          <EntityPicker
            value=""
            onChange={(entityId) => {
              if (!entityId) return;
              const current = widget.entity_ids?.length
                ? [...widget.entity_ids]
                : (widget.entity_id ? [widget.entity_id] : []);
              if (current.includes(entityId)) return;
              if (current.length >= SLOT_LIMITS.contactStatusEntities) return;
              const entity_ids = [...current, entityId];
              onUpdate(pageIndex, widget.id, {
                entity_ids,
                entity_id: entity_ids[0],
              });
            }}
            domains={meta.domains}
            placeholder="Fenster / Tür hinzufügen …"
          />
          <div className="tm-widget-inspector-entity-list">
            {(widget.entity_ids?.length ? widget.entity_ids : (widget.entity_id ? [widget.entity_id] : [])).map((entityId) => (
              <div key={entityId} className="tm-widget-inspector-entity-row">
                <span>{getFriendlyName(hass, entityId)}</span>
                <button
                  type="button"
                  className="tm-btn-secondary"
                  style={{ padding: '0.2rem 0.5rem', minHeight: 'auto', fontSize: '0.7rem' }}
                  onClick={() => {
                    const nextIds = (widget.entity_ids || []).filter((id) => id !== entityId);
                    onUpdate(pageIndex, widget.id, {
                      entity_ids: nextIds,
                      entity_id: nextIds[0] || '',
                    });
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {isSensor && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Sensoren (max. {SLOT_LIMITS.sensorEntities})</label>
          <EntityPicker
            value=""
            onChange={(entityId) => {
              if (!entityId) return;
              const current = widget.entity_ids?.length
                ? [...widget.entity_ids]
                : (widget.entity_id ? [widget.entity_id] : []);
              if (current.includes(entityId)) return;
              if (current.length >= SLOT_LIMITS.sensorEntities) return;
              const entity_ids = [...current, entityId];
              onUpdate(pageIndex, widget.id, {
                entity_ids,
                entity_id: entity_ids[0],
              });
            }}
            domains={meta.domains}
            placeholder="Sensor hinzufügen…"
          />
          <div className="tm-widget-inspector-entity-list">
            {(widget.entity_ids?.length ? widget.entity_ids : (widget.entity_id ? [widget.entity_id] : [])).map((entityId) => (
              <div key={entityId} className="tm-widget-inspector-entity-row">
                <span>{getFriendlyName(hass, entityId)}</span>
                <button
                  type="button"
                  className="tm-btn-secondary"
                  style={{ padding: '0.2rem 0.5rem', minHeight: 'auto', fontSize: '0.7rem' }}
                  onClick={() => {
                    const nextIds = (widget.entity_ids || []).filter((id) => id !== entityId);
                    onUpdate(pageIndex, widget.id, {
                      entity_ids: nextIds,
                      entity_id: nextIds[0] || '',
                    });
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <label className="tm-setting-toggle" style={{ marginTop: '0.75rem' }}>
            <input
              type="checkbox"
              checked={Boolean(widget.showHistory)}
              onChange={(e) => onUpdate(pageIndex, widget.id, { showHistory: e.target.checked })}
            />
            <span>Verlauf anzeigen</span>
          </label>

          {widget.showHistory && (
            <div style={{ marginTop: '0.75rem' }}>
              <div className="tm-widget-inspector-label">Zeitraum</div>
              <div className="tm-widget-inspector-sizes">
                {SENSOR_HISTORY_HOURS.map((hours) => (
                  <button
                    key={hours}
                    type="button"
                    className={`tm-widget-inspector-size${(widget.historyHours || 24) === hours ? ' active' : ''}`}
                    onClick={() => onUpdate(pageIndex, widget.id, { historyHours: hours })}
                  >
                    {hours === 168 ? '7 Tage' : `${hours}h`}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {isCamera && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Kameras (max. {SLOT_LIMITS.cameraEntities})</label>
          <EntityPicker
            value=""
            onChange={(entityId) => {
              if (!entityId) return;
              const current = widget.entity_ids?.length
                ? [...widget.entity_ids]
                : (widget.entity_id ? [widget.entity_id] : []);
              if (current.includes(entityId)) return;
              if (current.length >= SLOT_LIMITS.cameraEntities) return;
              const entity_ids = [...current, entityId];
              onUpdate(pageIndex, widget.id, {
                entity_ids,
                entity_id: entity_ids[0],
              });
            }}
            domains={meta.domains}
            placeholder="Kamera hinzufügen…"
          />
          <div className="tm-widget-inspector-entity-list">
            {(widget.entity_ids?.length ? widget.entity_ids : (widget.entity_id ? [widget.entity_id] : [])).map((entityId) => (
              <div key={entityId} className="tm-widget-inspector-entity-row">
                <span>{getFriendlyName(hass, entityId)}</span>
                <button
                  type="button"
                  className="tm-btn-secondary"
                  style={{ padding: '0.2rem 0.5rem', minHeight: 'auto', fontSize: '0.7rem' }}
                  onClick={() => {
                    const nextIds = (widget.entity_ids || []).filter((id) => id !== entityId);
                    onUpdate(pageIndex, widget.id, {
                      entity_ids: nextIds,
                      entity_id: nextIds[0] || '',
                    });
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {isCoverPopup && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Rolläden (max. {SLOT_LIMITS.coverPopupEntities})</label>
          <EntityPicker
            value=""
            onChange={(entityId) => {
              if (!entityId || (widget.entity_ids || []).includes(entityId)) return;
              if ((widget.entity_ids || []).length >= SLOT_LIMITS.coverPopupEntities) return;
              onUpdate(pageIndex, widget.id, { entity_ids: [...(widget.entity_ids || []), entityId] });
            }}
            domains={meta.domains}
            placeholder="Rolladen hinzufügen…"
          />
          <div className="tm-widget-inspector-entity-list">
            {(widget.entity_ids || []).map((entityId) => (
              <div key={entityId} className="tm-widget-inspector-entity-row">
                <span>{getFriendlyName(hass, entityId)}</span>
                <button
                  type="button"
                  className="tm-btn-secondary"
                  style={{ padding: '0.2rem 0.5rem', minHeight: 'auto', fontSize: '0.7rem' }}
                  onClick={() => onUpdate(pageIndex, widget.id, {
                    entity_ids: widget.entity_ids.filter((id) => id !== entityId),
                  })}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {isPopup && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Entitäten</label>
          <p className="tm-text-xs tm-opacity-60" style={{ lineHeight: 1.45 }}>
            Deaktivierte Entitäten erscheinen nicht im Popup. Lichter mit Helligkeits-Slider zeigen Farbkreise direkt auf der Kachel.
          </p>
          <EntityPicker
            value=""
            onChange={(entityId) => {
              if (!entityId || (widget.entity_ids || []).includes(entityId)) return;
              if ((widget.entity_ids || []).length >= SLOT_LIMITS.popupEntities) return;
              onUpdate(pageIndex, widget.id, { entity_ids: [...(widget.entity_ids || []), entityId] });
            }}
            domains={meta.domains}
            placeholder="Entität hinzufügen…"
          />
          <div className="tm-widget-inspector-entity-list">
            {(widget.entity_ids || []).map((entityId) => {
              const disabled = (widget.disabled_entity_ids || []).includes(entityId);
              const isLight = getDomain(entityId) === 'light';
              return (
                <div
                  key={entityId}
                  className={`tm-widget-inspector-entity-row tm-widget-inspector-entity-row--popup${disabled ? ' disabled' : ''}`}
                >
                  <label className="tm-widget-inspector-entity-disable">
                    <input
                      type="checkbox"
                      checked={disabled}
                      onChange={() => {
                        const current = widget.disabled_entity_ids || [];
                        onUpdate(pageIndex, widget.id, {
                          disabled_entity_ids: disabled
                            ? current.filter((id) => id !== entityId)
                            : [...current, entityId],
                        });
                      }}
                    />
                    <span className="tm-widget-inspector-entity-disable-label">Deaktiviert</span>
                  </label>
                  <div className="tm-widget-inspector-entity-row-main">
                    <span className="tm-widget-inspector-entity-name">{getFriendlyName(hass, entityId)}</span>
                    {isLight && (
                      <span className="tm-widget-inspector-entity-hint">Licht · Farben auf Helligkeits-Kachel</span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="tm-btn-secondary"
                    style={{ padding: '0.2rem 0.5rem', minHeight: 'auto', fontSize: '0.7rem' }}
                    onClick={() => {
                      onUpdate(pageIndex, widget.id, {
                        entity_ids: widget.entity_ids.filter((id) => id !== entityId),
                        disabled_entity_ids: (widget.disabled_entity_ids || []).filter((id) => id !== entityId),
                      });
                    }}
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
