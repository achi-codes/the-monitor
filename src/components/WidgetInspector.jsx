import { MousePointerClick, Trash2, X } from 'lucide-react';
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
import { SCENE_ART } from '../lib/sceneArt';
import EvEntityFields from './EvEntityFields';

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

function EntityRow({ name, onRemove, children, className = '' }) {
  return (
    <div className={`tm-widget-inspector-entity-row${className ? ` ${className}` : ''}`}>
      {children || <span className="tm-widget-inspector-entity-name">{name}</span>}
      <button
        type="button"
        className="tm-widget-inspector-remove"
        onClick={onRemove}
        aria-label={`${name || 'Eintrag'} entfernen`}
      >
        <X size={14} />
      </button>
    </div>
  );
}

function appendEntity(widget, entityId, limit) {
  if (!entityId) return null;
  const current = widget.entity_ids?.length
    ? [...widget.entity_ids]
    : (widget.entity_id ? [widget.entity_id] : []);
  if (current.includes(entityId) || current.length >= limit) return null;
  const entity_ids = [...current, entityId];
  return { entity_ids, entity_id: entity_ids[0] };
}

function entityList(widget) {
  return widget.entity_ids?.length
    ? widget.entity_ids
    : (widget.entity_id ? [widget.entity_id] : []);
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
        <div className="tm-widget-inspector-empty-icon" aria-hidden="true">
          <MousePointerClick size={22} />
        </div>
        <p className="tm-widget-inspector-empty-title">Kein Widget gewählt</p>
        <p className="tm-widget-inspector-empty-text">
          Tippe ein Widget an, um es zu bearbeiten — oder füge über „Widget“ bzw. eine freie Zelle eines hinzu.
        </p>
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
  const isScene = widget.type === 'scene';
  const isEv = widget.type === 'ev';

  return (
    <div className="tm-widget-inspector">
      <div className="tm-widget-inspector-header">
        <div>
          <div className="tm-widget-inspector-title">{getWidgetLabel(widget)}</div>
          <span className="tm-widget-inspector-type">{meta.label || widget.type}</span>
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
              <span>{preset.label}</span>
              <span className="tm-widget-inspector-size-dim">{preset.w}×{preset.h}</span>
            </button>
          ))}
        </div>
        <div className="tm-widget-inspector-meta">
          Position {widget.x},{widget.y} · aktuell {widget.w}×{widget.h}
        </div>
      </div>

      {(widget.type !== 'shopping') && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Anzeige</label>
          <div className="tm-widget-inspector-field">
            <span className="tm-widget-inspector-field-label">Label</span>
            <input
              className="tm-input"
              type="text"
              value={widget.label || ''}
              onChange={(e) => onUpdate(pageIndex, widget.id, { label: e.target.value })}
              placeholder="Anzeigename"
            />
          </div>
          {widget.type === 'weather' && (
            <div className="tm-widget-inspector-field">
              <span className="tm-widget-inspector-field-label">Ort</span>
              <input
                className="tm-input"
                type="text"
                value={widget.location || ''}
                onChange={(e) => onUpdate(pageIndex, widget.id, { location: e.target.value })}
                placeholder="Name der Wetter-Entität"
              />
            </div>
          )}
          {!isHaCard && (
            <div className="tm-widget-inspector-field">
              <span className="tm-widget-inspector-field-label">Icon</span>
              <input
                className="tm-input"
                type="text"
                value={widget.icon || ''}
                onChange={(e) => onUpdate(pageIndex, widget.id, { icon: e.target.value })}
                placeholder="mdi:sofa"
              />
            </div>
          )}
        </div>
      )}

      {isQuickAction && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Modus</label>
          <div className="tm-widget-inspector-sizes tm-widget-inspector-sizes--segment">
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
            {Object.entries(ENERGY_TILE_KINDS).map(([kind, kindMeta]) => (
              <button
                key={kind}
                type="button"
                className={`tm-widget-inspector-size tm-widget-inspector-size--wide${widget.tileKind === kind ? ' active' : ''}`}
                onClick={() => onUpdate(pageIndex, widget.id, {
                  tileKind: kind,
                  label: kindMeta.label,
                  ...(kind === 'ev-heatpump'
                    ? { deviceImages: normalizeEnergyDeviceImages(widget.deviceImages) }
                    : {}),
                })}
              >
                <span>{kindMeta.label}</span>
                <span className="tm-widget-inspector-hint">{kindMeta.description}</span>
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
              <p className="tm-widget-inspector-hint">
                Bild je Zustand — optional per Entität steuern.
              </p>
              <div className="tm-widget-inspector-field">
                <span className="tm-widget-inspector-field-label">Lädt</span>
                <input
                  className="tm-input"
                  type="url"
                  value={images.ev.charging}
                  onChange={(e) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'ev', { charging: e.target.value }))}
                  placeholder="https://… oder /local/…"
                />
              </div>
              <div className="tm-widget-inspector-field">
                <span className="tm-widget-inspector-field-label">Nicht am Laden</span>
                <input
                  className="tm-input"
                  type="url"
                  value={images.ev.idle}
                  onChange={(e) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'ev', { idle: e.target.value }))}
                  placeholder="https://… oder /local/…"
                />
              </div>
              <div className="tm-widget-inspector-field">
                <span className="tm-widget-inspector-field-label">Status-Entität (Laden)</span>
                <EntityPicker
                  value={images.ev.stateEntity}
                  onChange={(entity_id) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'ev', { stateEntity: entity_id }))}
                  domains={['binary_sensor', 'sensor', 'switch', 'input_boolean']}
                  placeholder="Optional — auch unter Einstellungen → E-Auto"
                />
              </div>
            </div>
            <div className="tm-widget-inspector-section">
              <label className="tm-widget-inspector-label">Wärmepumpe · Bilder</label>
              <div className="tm-widget-inspector-field">
                <span className="tm-widget-inspector-field-label">Mit Licht</span>
                <input
                  className="tm-input"
                  type="url"
                  value={images.heatpump.lightOn}
                  onChange={(e) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'heatpump', { lightOn: e.target.value }))}
                  placeholder="https://… oder /local/…"
                />
              </div>
              <div className="tm-widget-inspector-field">
                <span className="tm-widget-inspector-field-label">Ohne Licht</span>
                <input
                  className="tm-input"
                  type="url"
                  value={images.heatpump.lightOff}
                  onChange={(e) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'heatpump', { lightOff: e.target.value }))}
                  placeholder="https://… oder /local/…"
                />
              </div>
              <div className="tm-widget-inspector-field">
                <span className="tm-widget-inspector-field-label">Licht-Entität</span>
                <EntityPicker
                  value={images.heatpump.lightEntity}
                  onChange={(entity_id) => onUpdate(pageIndex, widget.id, patchDeviceImages(widget, 'heatpump', { lightEntity: entity_id }))}
                  domains={['light', 'switch', 'binary_sensor', 'input_boolean']}
                  placeholder="Optional — Anzeige / Licht"
                />
              </div>
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

      {isScene && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Szenen (max. {SLOT_LIMITS.sceneEntities})</label>
          <p className="tm-widget-inspector-hint">
            1, 2 oder 4 Szenen pro Kachel. Das Motiv wird automatisch am Namen erkannt.
          </p>
          <EntityPicker
            value=""
            onChange={(entityId) => {
              const patch = appendEntity(widget, entityId, SLOT_LIMITS.sceneEntities);
              if (patch) onUpdate(pageIndex, widget.id, patch);
            }}
            domains={meta.domains}
            placeholder="Szene hinzufügen…"
          />
          <div className="tm-widget-inspector-entity-list">
            {entityList(widget).map((entityId) => (
              <EntityRow
                key={entityId}
                name={getFriendlyName(hass, entityId)}
                onRemove={() => {
                  const nextIds = entityList(widget).filter((id) => id !== entityId);
                  const { [entityId]: _removed, ...sceneArt } = widget.scene_art || {};
                  onUpdate(pageIndex, widget.id, {
                    entity_ids: nextIds,
                    entity_id: nextIds[0] || '',
                    scene_art: sceneArt,
                  });
                }}
              >
                <div className="tm-widget-inspector-entity-row-main">
                  <span className="tm-widget-inspector-entity-name">{getFriendlyName(hass, entityId)}</span>
                  <select
                    className="tm-input tm-widget-inspector-scene-art"
                    value={widget.scene_art?.[entityId] || ''}
                    onChange={(e) => onUpdate(pageIndex, widget.id, {
                      scene_art: { ...(widget.scene_art || {}), [entityId]: e.target.value },
                    })}
                    aria-label="Motiv"
                  >
                    <option value="">Motiv: automatisch</option>
                    {Object.entries(SCENE_ART).map(([key, art]) => (
                      <option key={key} value={key}>{`Motiv: ${art.label}`}</option>
                    ))}
                  </select>
                </div>
              </EntityRow>
            ))}
          </div>
        </div>
      )}

      {isEv && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Fahrzeug</label>
          <p className="tm-widget-inspector-hint">
            Gilt für alle E-Auto-Kacheln. Leere Felder werden bei evcc automatisch erkannt.
          </p>
          <EvEntityFields showLabel={false} />
        </div>
      )}

      {!isPopup && !isCoverPopup && !isCamera && !isSensor && !isSensorStatus && !isHaCard && !isScene && !isEv && widget.type !== 'shopping' && !isSankey && !isEnergyTile && (
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
          <p className="tm-widget-inspector-hint">
            Fenster, Türen und Kontaktsensoren — das Icon zeigt offen oder geschlossen.
          </p>
          <EntityPicker
            value=""
            onChange={(entityId) => {
              const patch = appendEntity(widget, entityId, SLOT_LIMITS.contactStatusEntities);
              if (patch) onUpdate(pageIndex, widget.id, patch);
            }}
            domains={meta.domains}
            placeholder="Fenster / Tür hinzufügen …"
          />
          <div className="tm-widget-inspector-entity-list">
            {entityList(widget).map((entityId) => (
              <EntityRow
                key={entityId}
                name={getFriendlyName(hass, entityId)}
                onRemove={() => {
                  const nextIds = (widget.entity_ids || []).filter((id) => id !== entityId);
                  onUpdate(pageIndex, widget.id, {
                    entity_ids: nextIds,
                    entity_id: nextIds[0] || '',
                  });
                }}
              />
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
              const patch = appendEntity(widget, entityId, SLOT_LIMITS.sensorEntities);
              if (patch) onUpdate(pageIndex, widget.id, patch);
            }}
            domains={meta.domains}
            placeholder="Sensor hinzufügen…"
          />
          <div className="tm-widget-inspector-entity-list">
            {entityList(widget).map((entityId) => (
              <EntityRow
                key={entityId}
                name={getFriendlyName(hass, entityId)}
                onRemove={() => {
                  const nextIds = (widget.entity_ids || []).filter((id) => id !== entityId);
                  onUpdate(pageIndex, widget.id, {
                    entity_ids: nextIds,
                    entity_id: nextIds[0] || '',
                  });
                }}
              />
            ))}
          </div>

          <label className="tm-setting-toggle">
            <input
              type="checkbox"
              checked={Boolean(widget.showHistory)}
              onChange={(e) => onUpdate(pageIndex, widget.id, { showHistory: e.target.checked })}
            />
            <span>Verlauf anzeigen</span>
          </label>

          {widget.showHistory && (
            <div className="tm-widget-inspector-field">
              <div className="tm-widget-inspector-label">Zeitraum</div>
              <div className="tm-widget-inspector-sizes tm-widget-inspector-sizes--hours">
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
              const patch = appendEntity(widget, entityId, SLOT_LIMITS.cameraEntities);
              if (patch) onUpdate(pageIndex, widget.id, patch);
            }}
            domains={meta.domains}
            placeholder="Kamera hinzufügen…"
          />
          <div className="tm-widget-inspector-entity-list">
            {entityList(widget).map((entityId) => (
              <EntityRow
                key={entityId}
                name={getFriendlyName(hass, entityId)}
                onRemove={() => {
                  const nextIds = (widget.entity_ids || []).filter((id) => id !== entityId);
                  onUpdate(pageIndex, widget.id, {
                    entity_ids: nextIds,
                    entity_id: nextIds[0] || '',
                  });
                }}
              />
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
              <EntityRow
                key={entityId}
                name={getFriendlyName(hass, entityId)}
                onRemove={() => onUpdate(pageIndex, widget.id, {
                  entity_ids: widget.entity_ids.filter((id) => id !== entityId),
                })}
              />
            ))}
          </div>
        </div>
      )}

      {isPopup && (
        <div className="tm-widget-inspector-section">
          <label className="tm-widget-inspector-label">Entitäten</label>
          <p className="tm-widget-inspector-hint">
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
                <EntityRow
                  key={entityId}
                  name={getFriendlyName(hass, entityId)}
                  className={`tm-widget-inspector-entity-row--popup${disabled ? ' disabled' : ''}`}
                  onRemove={() => {
                    onUpdate(pageIndex, widget.id, {
                      entity_ids: widget.entity_ids.filter((id) => id !== entityId),
                      disabled_entity_ids: (widget.disabled_entity_ids || []).filter((id) => id !== entityId),
                    });
                  }}
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
                    <span className="tm-widget-inspector-entity-disable-label">Aus</span>
                  </label>
                  <div className="tm-widget-inspector-entity-row-main">
                    <span className="tm-widget-inspector-entity-name">{getFriendlyName(hass, entityId)}</span>
                    {isLight && (
                      <span className="tm-widget-inspector-entity-hint">Licht · Farben auf Kachel</span>
                    )}
                  </div>
                </EntityRow>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
