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

const OPEN_CLOSED = ['Offen', 'Geschlossen'];

const BINARY_SENSOR_PROFILES = {
  door: { art: 'door', typeLabel: 'Türkontakt', labels: OPEN_CLOSED },
  window: { art: 'window', typeLabel: 'Fensterkontakt', labels: OPEN_CLOSED },
  garage_door: { art: 'garage', typeLabel: 'Garagentor', labels: OPEN_CLOSED },
  opening: { art: null, typeLabel: 'Öffnungskontakt', labels: OPEN_CLOSED },
  lock: { art: 'door', typeLabel: 'Schloss', labels: ['Entriegelt', 'Verriegelt'] },
  motion: { art: 'motion', typeLabel: 'Bewegungsmelder', labels: ['Bewegung', 'Keine Bewegung'] },
  occupancy: { art: 'motion', typeLabel: 'Präsenzmelder', labels: ['Belegt', 'Frei'] },
  presence: { art: 'motion', typeLabel: 'Anwesenheit', labels: ['Anwesend', 'Abwesend'] },
  moisture: { art: 'sensor', typeLabel: 'Wassermelder', labels: ['Nass', 'Trocken'] },
  smoke: { art: 'sensor', typeLabel: 'Rauchmelder', labels: ['Rauch erkannt', 'Kein Rauch'] },
  gas: { art: 'sensor', typeLabel: 'Gasmelder', labels: ['Gas erkannt', 'Kein Gas'] },
  carbon_monoxide: { art: 'sensor', typeLabel: 'CO-Melder', labels: ['CO erkannt', 'Kein CO'] },
  vibration: { art: 'sensor', typeLabel: 'Vibrationssensor', labels: ['Vibration', 'Ruhig'] },
  sound: { art: 'sensor', typeLabel: 'Geräuschsensor', labels: ['Geräusch', 'Ruhig'] },
  connectivity: { art: 'sensor', typeLabel: 'Verbindung', labels: ['Verbunden', 'Getrennt'] },
  plug: { art: 'sensor', typeLabel: 'Stecker', labels: ['Eingesteckt', 'Ausgesteckt'] },
  power: { art: 'sensor', typeLabel: 'Strom', labels: ['An', 'Aus'] },
  battery: { art: 'sensor', typeLabel: 'Batterie', labels: ['Niedrig', 'Normal'] },
  battery_charging: { art: 'sensor', typeLabel: 'Laden', labels: ['Lädt', 'Lädt nicht'] },
  problem: { art: 'sensor', typeLabel: 'Problemmelder', labels: ['Problem', 'OK'] },
  safety: { art: 'sensor', typeLabel: 'Sicherheit', labels: ['Unsicher', 'Sicher'] },
  tamper: { art: 'sensor', typeLabel: 'Sabotagekontakt', labels: ['Manipuliert', 'OK'] },
  running: { art: 'sensor', typeLabel: 'Betrieb', labels: ['Läuft', 'Aus'] },
  light: { art: 'sensor', typeLabel: 'Lichtsensor', labels: ['Hell', 'Dunkel'] },
  heat: { art: 'sensor', typeLabel: 'Hitzemelder', labels: ['Heiß', 'Normal'] },
  cold: { art: 'sensor', typeLabel: 'Kältemelder', labels: ['Kalt', 'Normal'] },
};

function guessArtFromName(name) {
  const lower = name.toLowerCase();
  if (/garage|\btor\b|einfahrt/.test(lower)) return 'garage';
  if (lower.includes('fenster') || lower.includes('window')) return 'window';
  if (/bewegung|motion|präsenz|praesenz|presence/.test(lower)) return 'motion';
  if (/tür|tuer|\btur\b|door/.test(lower)) return 'door';
  return null;
}

export function getContactProfile(entity) {
  const name = entity.name || entity.label || '';
  if (entity.domain === 'cover') {
    return { art: 'window', typeLabel: 'Rollladen', labels: OPEN_CLOSED };
  }
  const deviceClass = entity.attributes?.device_class || '';
  const profile = BINARY_SENSOR_PROFILES[deviceClass];
  if (profile) {
    return { ...profile, art: profile.art || guessArtFromName(name) || 'door' };
  }
  const art = guessArtFromName(name) || 'door';
  const typeLabel = {
    garage: 'Garagentor', window: 'Fensterkontakt', motion: 'Bewegungsmelder', door: 'Kontakt',
  }[art];
  const labels = art === 'motion' ? ['Bewegung', 'Keine Bewegung'] : OPEN_CLOSED;
  return { art, typeLabel, labels };
}

export function getContactStateLabel(entity) {
  const { state, domain } = entity;
  if (state === 'unavailable') return 'Nicht verfügbar';
  if (state === 'unknown') return 'Unbekannt';
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
    const [onLabel, offLabel] = getContactProfile(entity).labels;
    return state === 'on' ? onLabel : offLabel;
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
