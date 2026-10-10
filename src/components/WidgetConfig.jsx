import EntityPicker from './EntityPicker';
import RoomConfig from './RoomConfig';
import EvEntityFields from './EvEntityFields';
import { SLOT_LIMITS } from '../lib/config';
import { useConfig } from '../context/ConfigContext';

const DOMAIN_GROUPS = {
  presence: ['person'],
  vacuum: ['vacuum'],
  windows: ['cover', 'binary_sensor'],
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
          E-Auto
        </h3>
        <p style={{ fontSize: '0.875rem', opacity: 0.6, marginBottom: '0.75rem', lineHeight: 1.5 }}>
          Für die E-Auto-Kachel und die grüne Lade-Notification. Leere Felder werden bei evcc automatisch erkannt.
        </p>
        <EvEntityFields />
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
