import eveningArt from '../assets/scenes/evening.webp';
import morningArt from '../assets/scenes/morning.webp';
import cinemaArt from '../assets/scenes/cinema.webp';
import offArt from '../assets/scenes/off.webp';
import { getDomain } from './entities';

export const SCENE_ART = {
  evening: { label: 'Abend', src: eveningArt },
  morning: { label: 'Morgen', src: morningArt },
  cinema: { label: 'Kino', src: cinemaArt },
  off: { label: 'Alles aus', src: offArt, ownBackdrop: true },
};

const ART_KEYWORDS = [
  ['off', /\b(aus|off)\b|ausschalten|ausmachen|nacht|night|schlaf|sleep|abwesend|away|verlassen/i],
  ['cinema', /kino|film|movie|\btv\b|fernseh|netflix|serie|cinema/i],
  ['morning', /morgen|morning|aufstehen|wecken|wake|früh|frueh/i],
  ['evening', /abend|evening|relax|gemütlich|gemuetlich|chill|lesen|dinner|essen/i],
];

export function resolveSceneArtKey(name = '', override = '') {
  if (override && SCENE_ART[override]) return override;
  const match = ART_KEYWORDS.find(([, pattern]) => pattern.test(name));
  return match ? match[0] : 'evening';
}

const DOMAIN_LABELS = {
  light: 'Licht',
  cover: 'Rollläden',
  media_player: 'TV',
  climate: 'Heizung',
  switch: 'Geräte',
  fan: 'Lüfter',
  lock: 'Schloss',
  input_boolean: 'Schalter',
};

function joinGerman(parts) {
  if (parts.length <= 1) return parts[0] || '';
  return `${parts.slice(0, -1).join(', ')} und ${parts[parts.length - 1]}`;
}

export function describeSceneTargets(hass, entityId) {
  const targets = hass?.states?.[entityId]?.attributes?.entity_id;
  if (!Array.isArray(targets) || targets.length === 0) return '';

  const labels = [];
  targets.forEach((target) => {
    const label = DOMAIN_LABELS[getDomain(target)];
    if (label && !labels.includes(label)) labels.push(label);
  });
  if (labels.length === 0) return 'Geräte';
  if (labels.length > 3) return `${labels.slice(0, 2).join(', ')} und mehr`;
  return joinGerman(labels);
}
