import { Plus } from 'lucide-react';
import ContactStatusIcon from './ContactStatusIcon';
import { getFriendlyName } from '../lib/entities';
import {
  countOpenContacts,
  getContactStateLabel,
  isContactOpen,
  resolveContactEntities,
  resolveContactEntityIds,
} from '../lib/contactStatus';

function ContactRow({ entity, label, compact = false }) {
  const open = isContactOpen(entity);
  const stateLabel = getContactStateLabel(entity);

  return (
    <div className={`tm-contact-row${open ? ' tm-contact-row--open' : ''}${compact ? ' tm-contact-row--compact' : ''}`}>
      <ContactStatusIcon entity={entity} size={compact ? 20 : 32} strokeWidth={compact ? 2.1 : 2.25} />
      <div className="tm-contact-row-text">
        <span className="tm-contact-row-label">{label}</span>
        <span className="tm-contact-row-state">{stateLabel}</span>
      </div>
    </div>
  );
}

function SingleContactView({ hass, entityId, label }) {
  const [entity] = resolveContactEntities(hass, [entityId]);
  const open = isContactOpen(entity);
  const stateLabel = getContactStateLabel(entity);

  return (
    <div className={`tm-contact-widget tm-contact-widget--single${open ? ' tm-contact-widget--open' : ''}`}>
      <ContactStatusIcon entity={entity} size={34} strokeWidth={2.25} className="tm-contact-widget-hero-icon" />
      <div className="tm-contact-widget-body">
        <div className="tm-contact-widget-label">{label}</div>
        <div className="tm-contact-widget-state">{stateLabel}</div>
      </div>
    </div>
  );
}

function MultiContactView({ hass, entityIds, widgetLabel }) {
  const entities = resolveContactEntities(hass, entityIds);
  const openCount = countOpenContacts(entities);

  return (
    <div className={`tm-contact-widget tm-contact-widget--multi${openCount > 0 ? ' tm-contact-widget--open' : ''}`}>
      <div className="tm-contact-widget-summary">
        <span className="tm-contact-widget-summary-title">
          {widgetLabel || 'Sensor Status'}
        </span>
        <span className={`tm-contact-widget-summary-badge${openCount > 0 ? ' tm-contact-widget-summary-badge--alert' : ''}`}>
          {openCount > 0 ? `${openCount} offen` : 'Alles zu'}
        </span>
      </div>
      <div className="tm-contact-widget-grid">
        {entities.map((entity) => (
          <ContactRow
            key={entity.id}
            entity={entity}
            label={getFriendlyName(hass, entity.id)}
            compact
          />
        ))}
      </div>
    </div>
  );
}

export default function SensorStatusWidget({ widget, hass, onConfigure }) {
  const entityIds = resolveContactEntityIds(widget);

  if (!entityIds.length) {
    return (
      <button type="button" className="tm-contact-widget tm-contact-widget--empty" onClick={onConfigure}>
        <Plus size={24} />
        <span className="tm-text-sm">Kontakt wählen</span>
      </button>
    );
  }

  if (entityIds.length === 1) {
    return (
      <SingleContactView
        hass={hass}
        entityId={entityIds[0]}
        label={widget.label || getFriendlyName(hass, entityIds[0])}
      />
    );
  }

  return (
    <MultiContactView
      hass={hass}
      entityIds={entityIds}
      widgetLabel={widget.label}
    />
  );
}
