import { getEntity } from './entities';

export function resolveContactEntityIds(widget) {
  if (widget.entity_ids?.length) return widget.entity_ids.filter(Boolean);
  if (widget.entity_id) return [widget.entity_id];
  return [];
}

export function getContactKind(entity) {
  const deviceClass = entity.attributes?.device_class || '';
  const name = (entity.name || entity.label || '').toLowerCase();

  if (deviceClass === 'window' || name.includes('fenster')) return 'window';
  if (
    deviceClass === 'door'
    || deviceClass === 'garage_door'
    || name.includes('tür')
    || name.includes('tur')
    || name.includes('tor')
  ) {
    return 'door';
  }
  if (entity.domain === 'cover') return 'window';
  return 'contact';
}

export function isContactOpen(entity) {
  const { state, domain } = entity;
  if (domain === 'cover') return ['open', 'opening'].includes(state);
  if (domain === 'binary_sensor') return state === 'on';
  return false;
}

export function isContactMoving(entity) {
  return entity.domain === 'cover' && ['opening', 'closing'].includes(entity.state);
}

export function getContactStateLabel(entity) {
  const { state, domain } = entity;
  if (domain === 'cover') {
    const labels = {
      open: 'Offen',
      closed: 'Geschlossen',
      opening: 'Öffnet …',
      closing: 'Schließt …',
    };
    return labels[state] || state;
  }
  if (domain === 'binary_sensor') {
    return state === 'on' ? 'Offen' : 'Geschlossen';
  }
  return state;
}

export function resolveContactEntities(hass, entityIds = []) {
  return entityIds
    .filter(Boolean)
    .map((entityId) => {
      const entity = getEntity(hass, entityId);
      return { ...entity, id: entityId };
    });
}

export function countOpenContacts(entities = []) {
  return entities.filter(isContactOpen).length;
}
