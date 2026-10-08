import EntityPicker from './EntityPicker';
import RoomConfig from './RoomConfig';
import { SLOT_LIMITS } from '../lib/config';
import { useConfig } from '../context/ConfigContext';

const DOMAIN_GROUPS = {
  presence: ['person'],
  vacuum: ['vacuum'],
  windows: ['cover', 'binary_sensor'],
  evState: ['binary_sensor', 'sensor', 'switch', 'input_boolean'],
  evPower: ['sensor'],
  evBattery: ['sensor', 'binary_sensor'],
};

function SingleEntityEditor({ title, entityId, section, domains, onSet }) {
  return (
    <div className="tm-config-slot">
      <div className="tm-text-sm tm-opacity-70">{title}</div>
      <EntityPicker
        value={entityId}
        onChange={(id) => onSet(section, id)}
        domains={domains}
        placeholder="Entität wählen…"
      />
    </div>
  );
}

export default function WidgetConfig() {
  const {
    config,
    setSingleEntity,
    updateEv,
    addPresence,
    removePresence,
    addWindow,
    removeWindow,
  } = useConfig();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <RoomConfig />

      <section>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          Dashboard-Layout
        </h3>
        <div className="tm-setting-group">
          <p className="tm-text-sm tm-opacity-70" style={{ lineHeight: 1.5 }}>
            Widgets, Größen und Positionen bearbeitest du direkt im Dashboard über den
            {' '}
            <strong>Stift-Button</strong>
            {' '}
            oben rechts. Dort findest du auch Layout-Vorlagen.
          </p>
        </div>
      </section>

      <section>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          Saugroboter
        </h3>
        <SingleEntityEditor
          title="Status-Island"
          entityId={config.vacuum?.entity_id || ''}
          section="vacuum"
          domains={DOMAIN_GROUPS.vacuum}
          onSet={setSingleEntity}
        />
      </section>

      <section>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          E-Auto (Status-Island)
        </h3>
        <p style={{ fontSize: '0.875rem', opacity: 0.6, marginBottom: '0.75rem', lineHeight: 1.5 }}>
          Grüne Notification mit Akku-Ring, wenn das Auto lädt — gleiche Entitäten wie auf der Energie-Kachel.
        </p>
        <div className="tm-config-slot">
          <div className="tm-text-sm tm-opacity-70">Anzeigename</div>
          <input
            className="tm-input"
            type="text"
            value={config.ev?.label || ''}
            onChange={(e) => updateEv({ label: e.target.value })}
            placeholder="Grandland"
          />
        </div>
        <div className="tm-config-slot" style={{ marginTop: '0.75rem' }}>
          <div className="tm-text-sm tm-opacity-70">Lade-Status</div>
          <EntityPicker
            value={config.ev?.stateEntity || ''}
            onChange={(entityId) => updateEv({ stateEntity: entityId })}
            domains={DOMAIN_GROUPS.evState}
            placeholder="binary_sensor / sensor …"
          />
        </div>
        <div className="tm-config-slot" style={{ marginTop: '0.75rem' }}>
          <div className="tm-text-sm tm-opacity-70">Ladeleistung</div>
          <EntityPicker
            value={config.ev?.powerEntity || ''}
            onChange={(entityId) => updateEv({ powerEntity: entityId })}
            domains={DOMAIN_GROUPS.evPower}
            placeholder="sensor.evcc_…_charge_power"
          />
        </div>
        <div className="tm-config-slot" style={{ marginTop: '0.75rem' }}>
          <div className="tm-text-sm tm-opacity-70">Akku (%)</div>
          <EntityPicker
            value={config.ev?.batteryEntity || ''}
            onChange={(entityId) => updateEv({ batteryEntity: entityId })}
            domains={DOMAIN_GROUPS.evBattery}
            placeholder="sensor.battery …"
          />
        </div>
      </section>

      <section>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          Fenster (Status-Island)
        </h3>
        <p style={{ fontSize: '0.875rem', opacity: 0.6, marginBottom: '0.75rem', lineHeight: 1.5 }}>
          Die weiße Notification erscheint automatisch, wenn ein Fenster offen ist, sich öffnet oder schließt — ohne Automation.
        </p>
        <EntityPicker
          value=""
          onChange={(entityId) => {
            if (entityId && config.windows.length < SLOT_LIMITS.windows) {
              addWindow(entityId);
            }
          }}
          domains={DOMAIN_GROUPS.windows}
          placeholder="Fenster / Kontakt hinzufügen …"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
          {config.windows.map((w) => (
            <div key={w.entity_id} className="tm-flex-row tm-justify-between tm-items-center" style={{ padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }}>
              <span>{w.label || w.entity_id}</span>
              <button
                type="button"
                className="tm-btn-secondary"
                style={{ padding: '0.25rem 0.75rem', minHeight: 'auto', fontSize: '0.75rem' }}
                onClick={() => removeWindow(w.entity_id)}
              >
                Entfernen
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          Anwesenheit
        </h3>
        <EntityPicker
          value=""
          onChange={(entityId) => {
            if (entityId && config.presence.length < SLOT_LIMITS.presence) {
              addPresence(entityId);
            }
          }}
          domains={DOMAIN_GROUPS.presence}
          placeholder="Person hinzufügen…"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
          {config.presence.map((p) => (
            <div key={p.entity_id} className="tm-flex-row tm-justify-between tm-items-center" style={{ padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }}>
              <span>{p.label || p.entity_id}</span>
              <button
                type="button"
                className="tm-btn-secondary"
                style={{ padding: '0.25rem 0.75rem', minHeight: 'auto', fontSize: '0.75rem' }}
                onClick={() => removePresence(p.entity_id)}
              >
                Entfernen
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
