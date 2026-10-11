import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import EntityPicker from './EntityPicker';
import { useConfig } from '../context/ConfigContext';
import { useHass } from '../context/HassContext';
import {
  SCREENSAVER_ROW_KINDS,
  SCREENSAVER_ROW_LIMIT,
  createScreensaverRowItem,
  suggestScreensaverRow,
} from '../lib/screensaverRow';

const ENTITY_DOMAINS = {
  media: ['media_player'],
  entity: ['sensor', 'binary_sensor', 'climate'],
};

export default function ScreensaverRowEditor() {
  const { config, activeRoom, updateScreensaver } = useConfig();
  const { getEntity } = useHass();
  const row = config.screensaver.row || [];
  const custom = config.screensaver.rowMode === 'custom';
  const full = row.length >= SCREENSAVER_ROW_LIMIT;

  const setMode = (rowMode) => {
    if (rowMode === 'custom' && !row.length) {
      updateScreensaver({
        rowMode,
        row: suggestScreensaverRow({ config, room: activeRoom, getEntity }),
      });
      return;
    }
    updateScreensaver({ rowMode });
  };

  const updateRow = (next) => updateScreensaver({ row: next });

  const updateItem = (index, patch) => {
    updateRow(row.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)));
  };

  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= row.length) return;
    const next = [...row];
    const [item] = next.splice(index, 1);
    next.splice(target, 0, item);
    updateRow(next);
  };

  const addKind = (kind) => {
    if (full) return;
    const meta = SCREENSAVER_ROW_KINDS.find((entry) => entry.id === kind);
    if (meta?.once && row.some((item) => item.kind === kind)) return;
    updateRow([...row, createScreensaverRowItem(kind)]);
  };

  return (
    <div className="tm-flex-col tm-gap-3">
      <span>Reihe</span>
      <div className="tm-color-mode-row">
        <button
          type="button"
          className={`tm-color-mode-btn${custom ? '' : ' active'}`}
          onClick={() => setMode('auto')}
        >
          Automatisch
        </button>
        <button
          type="button"
          className={`tm-color-mode-btn${custom ? ' active' : ''}`}
          onClick={() => setMode('custom')}
        >
          Selbst
        </button>
      </div>

      {!custom && (
        <p className="tm-text-sm tm-opacity-70">
          Automatisch füllt die Reihe mit Wetter, Musik, Anwesenheit und einem Sensor vom Dashboard.
        </p>
      )}

      {custom && (
        <>
          <p className="tm-text-sm tm-opacity-70">
            Bis zu vier Kacheln, in der Reihenfolge von links nach rechts.
          </p>
          <div className="tm-ssx-row-list">
            {row.map((item, index) => {
              const needsEntity = item.kind === 'media' || item.kind === 'entity';
              return (
                <div key={item.id} className="tm-ssx-row-item">
                  <div className="tm-ssx-row-item-head">
                    <div className="tm-ssx-row-move">
                      <button
                        type="button"
                        className="tm-ssx-row-iconbtn"
                        onClick={() => moveItem(index, -1)}
                        disabled={index === 0}
                        aria-label="Nach oben"
                      >
                        <ChevronUp size={16} />
                      </button>
                      <button
                        type="button"
                        className="tm-ssx-row-iconbtn"
                        onClick={() => moveItem(index, 1)}
                        disabled={index === row.length - 1}
                        aria-label="Nach unten"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                    <select
                      className="tm-input"
                      value={item.kind}
                      aria-label={`Kachel ${index + 1}`}
                      onChange={(event) => {
                        const kind = event.target.value;
                        const meta = SCREENSAVER_ROW_KINDS.find((entry) => entry.id === kind);
                        if (meta?.once && row.some((other, otherIndex) => otherIndex !== index && other.kind === kind)) {
                          return;
                        }
                        updateItem(index, { kind, entity_id: '', label: '' });
                      }}
                    >
                      {SCREENSAVER_ROW_KINDS.map((kind) => {
                        const taken = kind.once && row.some((other, otherIndex) => otherIndex !== index && other.kind === kind.id);
                        return (
                          <option key={kind.id} value={kind.id} disabled={taken}>
                            {kind.label}
                          </option>
                        );
                      })}
                    </select>
                    <button
                      type="button"
                      className="tm-ssx-row-iconbtn"
                      onClick={() => updateRow(row.filter((entry) => entry.id !== item.id))}
                      aria-label="Entfernen"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {needsEntity && (
                    <EntityPicker
                      value={item.entity_id}
                      onChange={(entityId) => updateItem(index, {
                        entity_id: entityId,
                        ...(item.kind === 'entity' ? { label: '' } : {}),
                      })}
                      domains={ENTITY_DOMAINS[item.kind]}
                      placeholder={item.kind === 'media' ? 'Player vom Dashboard' : 'Sensor wählen…'}
                    />
                  )}

                  {item.kind === 'weather' && !config.screensaver.showWeather && (
                    <p className="tm-text-sm tm-opacity-70">Wetter ist oben ausgeschaltet.</p>
                  )}

                  {item.kind === 'entity' && (
                    <input
                      type="text"
                      className="tm-input"
                      value={item.label}
                      placeholder="Beschriftung (optional)"
                      aria-label="Beschriftung"
                      onChange={(event) => updateItem(index, { label: event.target.value })}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="tm-ssx-row-add">
            {SCREENSAVER_ROW_KINDS.map((kind) => {
              const taken = kind.once && row.some((item) => item.kind === kind.id);
              return (
                <button
                  key={kind.id}
                  type="button"
                  className="tm-color-mode-btn"
                  disabled={full || taken}
                  onClick={() => addKind(kind.id)}
                >
                  {kind.label}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
