import { Copy, Plus, Star, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { SETUP_LIMIT } from '../lib/setups';

export default function SetupsPanel() {
  const {
    setups,
    setupStore,
    activeSetupId,
    setActiveSetupId,
    setDefaultSetupId,
    addSetup,
    duplicateSetup,
    renameSetup,
    removeSetup,
  } = useConfig();
  const [draftNames, setDraftNames] = useState({});

  const nameFor = (setup) => (
    draftNames[setup.id] !== undefined ? draftNames[setup.id] : setup.name
  );

  const commitName = (setupId) => {
    const value = draftNames[setupId];
    if (value === undefined) return;
    renameSetup(setupId, value);
    setDraftNames((prev) => {
      const next = { ...prev };
      delete next[setupId];
      return next;
    });
  };

  return (
    <div className="tm-settings-layout">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', gridColumn: '1 / -1' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Setups
        </h3>
        <div className="tm-setting-group">
          <p className="tm-text-sm tm-opacity-70">
            Ein Setup ist eine vollständige Dashboard-Konfiguration (Räume, Widgets, Darstellung).
            Alle Setups werden in Home Assistant gespeichert. Auf diesem Gerät legst du fest,
            welches Setup geladen wird.
          </p>

          <div className="tm-flex-col tm-gap-3">
            {setups.map((setup) => {
              const isActive = setup.id === activeSetupId;
              const isDefault = setup.id === setupStore.defaultSetupId;
              return (
                <div
                  key={setup.id}
                  className={`tm-setup-row${isActive ? ' active' : ''}`}
                >
                  <button
                    type="button"
                    className="tm-setup-select"
                    onClick={() => setActiveSetupId(setup.id)}
                    aria-pressed={isActive}
                  >
                    <span className={`tm-setup-radio${isActive ? ' active' : ''}`} />
                    <span className="tm-setup-select-label">
                      {isActive ? 'Aktiv auf diesem Gerät' : 'Auf diesem Gerät laden'}
                    </span>
                  </button>

                  <input
                    className="tm-input tm-setup-name"
                    value={nameFor(setup)}
                    onChange={(e) => setDraftNames((prev) => ({ ...prev, [setup.id]: e.target.value }))}
                    onBlur={() => commitName(setup.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.currentTarget.blur();
                      }
                    }}
                    aria-label="Setup-Name"
                  />

                  <div className="tm-setup-actions">
                    <button
                      type="button"
                      className={`tm-btn-secondary tm-setup-action${isDefault ? ' active' : ''}`}
                      onClick={() => setDefaultSetupId(setup.id)}
                      title="Standard für neue Geräte"
                      aria-label="Als Standard für neue Geräte"
                    >
                      <Star size={16} />
                    </button>
                    <button
                      type="button"
                      className="tm-btn-secondary tm-setup-action"
                      onClick={() => duplicateSetup(setup.id)}
                      disabled={setups.length >= SETUP_LIMIT}
                      title="Duplizieren"
                      aria-label="Setup duplizieren"
                    >
                      <Copy size={16} />
                    </button>
                    <button
                      type="button"
                      className="tm-btn-secondary tm-setup-action"
                      onClick={() => {
                        if (setups.length <= 1) return;
                        if (window.confirm(`Setup „${setup.name}“ wirklich löschen?`)) {
                          removeSetup(setup.id);
                        }
                      }}
                      disabled={setups.length <= 1}
                      title="Löschen"
                      aria-label="Setup löschen"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="tm-btn-secondary tm-flex-center tm-gap-2"
            disabled={setups.length >= SETUP_LIMIT}
            onClick={() => {
              const created = addSetup('Neues Setup', { duplicateActive: true });
              if (created) setActiveSetupId(created.id);
            }}
          >
            <Plus size={18} />
            Setup aus aktuellem duplizieren
          </button>

          <p className="tm-text-sm tm-opacity-70">
            Stern = Standard-Setup für Geräte, die noch keines gewählt haben.
            Änderungen am aktiven Setup werden für alle Geräte geteilt, die dasselbe Setup nutzen.
          </p>
        </div>
      </div>
    </div>
  );
}
