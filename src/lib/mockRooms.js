import { MOCK_AREAS } from './haAreas';

function createState(entityId, state, attributes = {}) {
  const now = new Date().toISOString();
  return { entity_id: entityId, state, attributes, last_changed: now, last_updated: now };
}

export const MOCK_ROOM_STATES = {
  'light.stehlampe': createState('light.stehlampe', 'on', { friendly_name: 'Stehlampe', brightness: 110 }),
  'light.schlafzimmer': createState('light.schlafzimmer', 'off', { friendly_name: 'Deckenlicht' }),
  'light.nachttisch': createState('light.nachttisch', 'on', { friendly_name: 'Nachttisch', brightness: 60 }),
  'light.bad': createState('light.bad', 'off', { friendly_name: 'Spiegelschrank' }),
  'sensor.wohnzimmer_luftfeuchte': createState('sensor.wohnzimmer_luftfeuchte', '48', {
    friendly_name: 'Luftfeuchte', unit_of_measurement: '%', device_class: 'humidity',
  }),
  'sensor.schlafzimmer_temperatur': createState('sensor.schlafzimmer_temperatur', '19.2', {
    friendly_name: 'Temperatur', unit_of_measurement: '°C', device_class: 'temperature',
  }),
  'sensor.schlafzimmer_luftfeuchte': createState('sensor.schlafzimmer_luftfeuchte', '52', {
    friendly_name: 'Luftfeuchte', unit_of_measurement: '%', device_class: 'humidity',
  }),
  'sensor.bad_temperatur': createState('sensor.bad_temperatur', '22.8', {
    friendly_name: 'Temperatur', unit_of_measurement: '°C', device_class: 'temperature',
  }),
  'sensor.bad_luftfeuchte': createState('sensor.bad_luftfeuchte', '64', {
    friendly_name: 'Luftfeuchte', unit_of_measurement: '%', device_class: 'humidity',
  }),
  'sensor.kueche_temperatur': createState('sensor.kueche_temperatur', '22.1', {
    friendly_name: 'Temperatur', unit_of_measurement: '°C', device_class: 'temperature',
  }),
};

const MOCK_ENTITY_AREAS = {
  wohnzimmer: [
    'light.wohnzimmer', 'light.stehlampe', 'switch.steckdose', 'cover.wohnzimmer', 'climate.wohnzimmer',
    'media_player.wohnzimmer', 'scene.filmabend', 'scene.kino', 'binary_sensor.terrassentuer',
    'sensor.wohnzimmer_temperatur', 'sensor.wohnzimmer_luftfeuchte',
  ],
  kueche: ['light.kueche', 'cover.kueche', 'binary_sensor.kueche_fenster', 'sensor.kueche_temperatur', 'scene.essen', 'media_player.kueche'],
  schlafzimmer: [
    'light.schlafzimmer', 'light.nachttisch', 'cover.schlafzimmer', 'scene.schlafen', 'media_player.schlafzimmer',
    'sensor.schlafzimmer_temperatur', 'sensor.schlafzimmer_luftfeuchte',
  ],
  bad: ['light.bad', 'binary_sensor.bad_dachfenster', 'sensor.bad_temperatur', 'sensor.bad_luftfeuchte'],
  flur: ['binary_sensor.flur_bewegung', 'lock.haustuer'],
};

export function attachMockRegistries(hass) {
  hass.areas = Object.fromEntries(MOCK_AREAS.map((area) => [area.area_id, area]));
  hass.devices = {};
  hass.entities = Object.fromEntries(Object.entries(MOCK_ENTITY_AREAS).flatMap(
    ([areaId, entityIds]) => entityIds.map((entityId) => [entityId, { area_id: areaId }]),
  ));
}
