import { MOCK_ROOM_STATES, attachMockRegistries } from './mockRooms';

function createState(entityId, state, attributes = {}) {
  return { entity_id: entityId, state, attributes, last_changed: new Date().toISOString(), last_updated: new Date().toISOString() };
}

function mockDailyForecast() {
  const days = [
    ['partlycloudy', 19, 11, 20], ['partlycloudy', 18, 10, 10], ['sunny', 17, 9, 5],
    ['rainy', 15, 8, 80], ['partlycloudy', 16, 9, 15], ['sunny', 18, 10, 0], ['cloudy', 16, 9, 40],
  ];
  const start = new Date();
  start.setHours(12, 0, 0, 0);
  return days.map(([condition, temperature, templow, precipitation_probability], index) => ({
    datetime: new Date(start.getTime() + index * 86400000).toISOString(),
    condition,
    temperature,
    templow,
    precipitation_probability,
  }));
}

function mockHourlyForecast() {
  const conditions = ['partlycloudy', 'sunny', 'partlycloudy', 'cloudy', 'cloudy', 'partlycloudy', 'rainy', 'cloudy'];
  const temps = [16, 17, 18, 17, 16, 15, 14, 13];
  const start = new Date();
  start.setMinutes(0, 0, 0);
  return conditions.map((condition, index) => ({
    datetime: new Date(start.getTime() + index * 3600000).toISOString(),
    condition,
    temperature: temps[index],
  }));
}

const MOCK_STATES = {
  'light.wohnzimmer': createState('light.wohnzimmer', 'on', {
    friendly_name: 'Wohnzimmer Licht',
    brightness: 179,
    supported_color_modes: ['color_temp', 'hs'],
    color_mode: 'color_temp',
    color_temp_kelvin: 2700,
  }),
  'light.kueche': createState('light.kueche', 'off', { friendly_name: 'Küche Licht' }),
  'switch.steckdose': createState('switch.steckdose', 'off', { friendly_name: 'Steckdose TV' }),
  'climate.wohnzimmer': createState('climate.wohnzimmer', 'heat', { friendly_name: 'Wohnzimmer Heizung', current_temperature: 21.5, temperature: 22 }),
  'lock.haustuer': createState('lock.haustuer', 'locked', { friendly_name: 'Haustür' }),
  'alarm_control_panel.haus': createState('alarm_control_panel.haus', 'armed_home', { friendly_name: 'Alarmanlage' }),
  'scene.filmabend': createState('scene.filmabend', 'scening', { friendly_name: 'Filmabend' }),
  'scene.essen': createState('scene.essen', 'scening', { friendly_name: 'Essen' }),
  'scene.schlafen': createState('scene.schlafen', 'scening', { friendly_name: 'Schlafen' }),
  'script.verlassen': createState('script.verlassen', 'off', { friendly_name: 'Haus verlassen' }),
  'scene.abendstimmung': createState('scene.abendstimmung', 'scening', {
    friendly_name: 'Abendstimmung',
    entity_id: ['light.wohnzimmer', 'cover.wohnzimmer', 'climate.wohnzimmer', 'media_player.wohnzimmer'],
  }),
  'scene.guten_morgen': createState('scene.guten_morgen', 'scening', {
    friendly_name: 'Guten Morgen',
    entity_id: ['cover.schlafzimmer', 'light.kueche', 'switch.steckdose'],
  }),
  'scene.kino': createState('scene.kino', 'scening', {
    friendly_name: 'Kino',
    entity_id: ['light.wohnzimmer', 'cover.wohnzimmer', 'media_player.wohnzimmer'],
  }),
  'scene.alles_aus': createState('scene.alles_aus', 'scening', {
    friendly_name: 'Alles aus',
    entity_id: ['light.wohnzimmer', 'light.kueche', 'switch.steckdose', 'cover.wohnzimmer', 'climate.wohnzimmer'],
  }),
  'weather.zuhause': createState('weather.zuhause', 'partlycloudy', {
    friendly_name: 'Saarbrücken',
    supported_features: 3,
    temperature: 16,
    humidity: 68,
    pressure: 1013,
    wind_speed: 12,
    visibility: 10,
    forecast: mockDailyForecast(),
    hourly_forecast: mockHourlyForecast(),
  }),
  'media_player.wohnzimmer': createState('media_player.wohnzimmer', 'playing', {
    friendly_name: 'Bluetooth Speaker',
    device_manufacturer: 'Apple',
    device_model: 'HomePod mini',
    media_title: 'Hurt Feelings',
    media_artist: 'Mac Miller',
    media_album_name: 'Swimming',
    media_position: 83,
    media_position_updated_at: new Date().toISOString(),
    media_duration: 236,
    volume_level: 0.45,
    app_name: 'Spotify',
    entity_picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Mac_Miller_-_Swimming.png/220px-Mac_Miller_-_Swimming.png',
  }),
  'media_player.kueche': createState('media_player.kueche', 'paused', {
    friendly_name: 'Küche Sonos',
    media_title: 'Sunrise',
    media_artist: 'Norah Jones',
    media_position: 41,
    media_position_updated_at: new Date().toISOString(),
    media_duration: 201,
    volume_level: 0.3,
    app_name: 'Radio',
  }),
  'media_player.schlafzimmer': createState('media_player.schlafzimmer', 'off', {
    friendly_name: 'Schlafzimmer HomePod',
    volume_level: 0.2,
  }),
  'camera.garten': createState('camera.garten', 'idle', {
    friendly_name: 'Garten',
    entity_picture: 'https://images.unsplash.com/photo-1558036117-15dbaf040517?q=80&w=800',
  }),
  'camera.haustuer': createState('camera.haustuer', 'idle', {
    friendly_name: 'Haustür',
    entity_picture: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
  }),
  'camera.garage': createState('camera.garage', 'idle', {
    friendly_name: 'Garage',
    entity_picture: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
  }),
  'todo.einkaufsliste': createState('todo.einkaufsliste', '0', {
    friendly_name: 'Einkaufsliste',
  }),
  'person.papa': createState('person.papa', 'home', { friendly_name: 'Papa' }),
  'person.mama': createState('person.mama', 'home', { friendly_name: 'Mama' }),
  'person.max': createState('person.max', 'not_home', { friendly_name: 'Max' }),
  'vacuum.roborock': createState('vacuum.roborock', 'cleaning', {
    friendly_name: 'Roborock',
    battery_level: 78,
    fan_speed: 'Turbo',
    status: 'Reinigt Wohnzimmer …',
  }),
  'sensor.roborock_restzeit': createState('sensor.roborock_restzeit', '18', {
    friendly_name: 'Roborock Restzeit', unit_of_measurement: 'min', device_class: 'duration',
  }),
  'script.saugen_wohnzimmer': createState('script.saugen_wohnzimmer', 'off', { friendly_name: 'Saugen Wohnzimmer' }),
  'script.saugen_kueche': createState('script.saugen_kueche', 'off', { friendly_name: 'Saugen Küche' }),
  'script.saugen_flur': createState('script.saugen_flur', 'off', { friendly_name: 'Saugen Flur' }),
  'cover.wohnzimmer': createState('cover.wohnzimmer', 'open', { friendly_name: 'Wohnzimmer Rolladen', current_position: 100 }),
  'cover.schlafzimmer': createState('cover.schlafzimmer', 'closed', { friendly_name: 'Schlafzimmer Rolladen', current_position: 0 }),
  'cover.kueche': createState('cover.kueche', 'open', { friendly_name: 'Küche Rolladen', current_position: 45 }),
  'binary_sensor.kueche_fenster': createState('binary_sensor.kueche_fenster', 'on', { friendly_name: 'Küche Fenster' }),
  'sensor.wohnzimmer_strom': createState('sensor.wohnzimmer_strom', '1834.27', {
    friendly_name: 'Stromverbrauch', unit_of_measurement: 'kWh', device_class: 'energy', state_class: 'total_increasing',
  }),
  'sensor.wohnzimmer_temperatur': createState('sensor.wohnzimmer_temperatur', '21.4', {
    friendly_name: 'Temperatur', unit_of_measurement: '°C', device_class: 'temperature', state_class: 'measurement',
  }),
  'sensor.strompreis': createState('sensor.strompreis', '0.312', { friendly_name: 'Strompreis', unit_of_measurement: '€/kWh' }),
  'binary_sensor.bad_dachfenster': createState('binary_sensor.bad_dachfenster', 'on', { friendly_name: 'Bad Dachfenster', device_class: 'window' }),
  'binary_sensor.terrassentuer': {
    ...createState('binary_sensor.terrassentuer', 'on', { friendly_name: 'Terrassentür', device_class: 'door' }),
    last_changed: new Date(Date.now() - 12 * 60000).toISOString(),
  },
  'binary_sensor.flur_bewegung': {
    ...createState('binary_sensor.flur_bewegung', 'off', { friendly_name: 'Flur Bewegung', device_class: 'motion' }),
    last_changed: new Date(Date.now() - 95 * 60000).toISOString(),
  },
  'binary_sensor.garage_tor': {
    ...createState('binary_sensor.garage_tor', 'off', { friendly_name: 'Garagentor', device_class: 'garage_door' }),
    last_changed: new Date(Date.now() - 26 * 3600000).toISOString(),
  },
  'binary_sensor.grandland_charging': createState('binary_sensor.grandland_charging', 'on', {
    friendly_name: 'Grandland lädt',
    device_class: 'battery_charging',
  }),
  'sensor.grandland_battery': createState('sensor.grandland_battery', '67', {
    friendly_name: 'Grandland Akku',
    unit_of_measurement: '%',
    device_class: 'battery',
  }),
  'sensor.grandland_charge_power': createState('sensor.grandland_charge_power', '11', {
    friendly_name: 'Grandland Ladeleistung',
    unit_of_measurement: 'kW',
    device_class: 'power',
  }),
  'sensor.grandland_range': createState('sensor.grandland_range', '320', {
    friendly_name: 'Grandland Reichweite',
    unit_of_measurement: 'km',
    device_class: 'distance',
  }),
  'sensor.grandland_charge_remaining': createState('sensor.grandland_charge_remaining', '4800', {
    friendly_name: 'Grandland Restladezeit',
    unit_of_measurement: 's',
    device_class: 'duration',
  }),
  'sensor.grandland_last_trip': createState('sensor.grandland_last_trip', '42', {
    friendly_name: 'Grandland Letzte Fahrt',
    unit_of_measurement: 'km',
    device_class: 'distance',
  }),
  'sensor.grandland_cost_today': createState('sensor.grandland_cost_today', '6.24', {
    friendly_name: 'Grandland Kosten heute',
    unit_of_measurement: '€',
    device_class: 'monetary',
  }),
};

const serviceLog = [];

export function createMockHass() {
  const states = { ...MOCK_STATES, ...MOCK_ROOM_STATES };

  const hass = {
    states,
    hassUrl: 'http://homeassistant.local:8123',
    callService: async (domain, service, data = {}) => {
      serviceLog.push({ domain, service, data, time: Date.now() });
      const entityId = data.entity_id;

      if (domain === 'homeassistant' && service === 'toggle' && entityId) {
        const s = states[entityId];
        if (s) s.state = s.state === 'on' ? 'off' : 'on';
      }
      if (domain === 'light' && service === 'toggle' && entityId) {
        const s = states[entityId];
        if (s) s.state = s.state === 'on' ? 'off' : 'on';
      }
      if (domain === 'light' && service === 'turn_on' && entityId) {
        const s = states[entityId];
        if (s) {
          s.state = 'on';
          if (typeof data.brightness === 'number') {
            s.attributes = { ...s.attributes, brightness: data.brightness };
          }
          if (Array.isArray(data.rgb_color)) {
            s.attributes = { ...s.attributes, color_mode: 'hs', rgb_color: data.rgb_color };
          }
          if (typeof data.color_temp_kelvin === 'number') {
            s.attributes = { ...s.attributes, color_mode: 'color_temp', color_temp_kelvin: data.color_temp_kelvin };
          }
        }
      }
      if (domain === 'light' && service === 'turn_off' && entityId) {
        const s = states[entityId];
        if (s) s.state = 'off';
      }
      if (domain === 'climate' && service === 'set_temperature' && states[entityId]) {
        states[entityId].attributes = { ...states[entityId].attributes, temperature: data.temperature };
      }
      if (domain === 'switch' && service === 'toggle' && entityId) {
        const s = states[entityId];
        if (s) s.state = s.state === 'on' ? 'off' : 'on';
      }
      if (domain === 'scene' && service === 'turn_on') {
        console.log('[mock] Scene activated:', entityId);
      }
      if (domain === 'media_player') {
        const s = states[entityId];
        if (!s) return { context: { id: 'mock' } };
        const attrs = s.attributes;
        const elapsed = s.state === 'playing' && attrs.media_position_updated_at
          ? (Date.now() - Date.parse(attrs.media_position_updated_at)) / 1000
          : 0;
        const freezePosition = (position) => ({
          media_position: Math.min(attrs.media_duration || 0, Math.max(0, position)),
          media_position_updated_at: new Date().toISOString(),
        });
        if (service === 'media_pause') {
          s.state = 'paused';
          s.attributes = { ...attrs, ...freezePosition((attrs.media_position || 0) + elapsed) };
        }
        if (service === 'media_play') {
          s.state = 'playing';
          s.attributes = { ...attrs, ...freezePosition(attrs.media_position || 0) };
        }
        if (service === 'media_seek') s.attributes = { ...attrs, ...freezePosition(data.seek_position) };
        if (service === 'media_next_track' || service === 'media_previous_track') {
          s.attributes = { ...attrs, ...freezePosition(0) };
        }
        if (service === 'volume_set') s.attributes = { ...attrs, volume_level: data.volume_level };
        if (service === 'turn_off') s.state = 'off';
        if (service === 'turn_on') s.state = 'idle';
      }
      if (domain === 'alarm_control_panel' && entityId) {
        const s = states[entityId];
        if (!s) return { context: { id: 'mock' } };
        if (service === 'alarm_disarm') s.state = 'disarmed';
        if (service === 'alarm_arm_home') s.state = 'armed_home';
        if (service === 'alarm_arm_away') s.state = 'armed_away';
        if (service === 'alarm_arm_night') s.state = 'armed_night';
      }
      if (domain === 'script' && entityId?.startsWith('script.saugen_') && states['vacuum.roborock']) {
        states['vacuum.roborock'].state = 'cleaning';
      }
      if (domain === 'vacuum' && entityId) {
        const s = states[entityId];
        if (!s) return { context: { id: 'mock' } };
        if (service === 'pause') {
          s.state = 'paused';
          s.attributes = { ...s.attributes, status: 'Pausiert' };
        }
        if (service === 'stop') {
          s.state = 'idle';
          s.attributes = { ...s.attributes, status: 'Gestoppt' };
        }
        if (service === 'return_to_base') {
          s.state = 'returning';
          s.attributes = { ...s.attributes, status: 'Fährt zur Basis …' };
        }
        if (service === 'start') {
          s.state = 'cleaning';
          s.attributes = { ...s.attributes, status: 'Reinigt Wohnzimmer …' };
        }
      }
      if (domain === 'cover' && entityId) {
        const s = states[entityId];
        if (!s) return { context: { id: 'mock' } };
        if (service === 'open_cover') {
          s.state = 'open';
          s.attributes = { ...s.attributes, current_position: 100 };
        }
        if (service === 'close_cover') {
          s.state = 'closed';
          s.attributes = { ...s.attributes, current_position: 0 };
        }
        if (service === 'set_cover_position' && typeof data.position === 'number') {
          const pos = Math.min(100, Math.max(0, data.position));
          s.attributes = { ...s.attributes, current_position: pos };
          if (pos === 0) s.state = 'closed';
          else if (pos === 100) s.state = 'open';
          else s.state = 'open';
        }
      }

      listeners.forEach((fn) => fn(hass));
      return { context: { id: 'mock' } };
    },
  };

  const listeners = [];

  hass.subscribe = (fn) => {
    listeners.push(fn);
    return () => {
      const idx = listeners.indexOf(fn);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  };

  hass.getServiceLog = () => serviceLog;

  hass.__mock = true;
  attachMockRegistries(hass);

  return hass;
}

export const MOCK_TODO_ITEMS = [
  { uid: '1', summary: 'Milch', status: 'needs_action' },
  { uid: '2', summary: 'Kaffee', status: 'needs_action' },
  { uid: '3', summary: 'Bananen', status: 'completed' },
  { uid: '4', summary: 'Brot', status: 'needs_action' },
];

export const MOCK_DEV_CONFIG = {
  quickActions: [
    { entity_id: 'light.wohnzimmer', label: 'Wohnzimmer' },
    { entity_id: 'light.kueche', label: 'Küche' },
    { entity_id: 'switch.steckdose', label: 'Steckdose TV' },
  ],
  scenes: [
    { entity_id: 'scene.filmabend', label: 'Filmabend' },
    { entity_id: 'scene.essen', label: 'Essen' },
    { entity_id: 'scene.schlafen', label: 'Schlafen' },
    { entity_id: 'script.verlassen', label: 'Verlassen' },
  ],
  weather: { entity_id: 'weather.zuhause' },
  mediaPlayer: { entity_id: 'media_player.wohnzimmer' },
  camera: { entity_id: 'camera.garten' },
  cameras: ['camera.garten', 'camera.haustuer', 'camera.garage'],
  shoppingList: { entity_id: 'todo.einkaufsliste' },
  vacuum: { entity_id: 'vacuum.roborock' },
  ev: {
    stateEntity: 'binary_sensor.grandland_charging',
    batteryEntity: 'sensor.grandland_battery',
    powerEntity: 'sensor.grandland_charge_power',
    label: 'Grandland',
  },
  alarm: { entity_id: 'alarm_control_panel.haus' },
  presence: [
    { entity_id: 'person.papa', label: 'Papa' },
    { entity_id: 'person.mama', label: 'Mama' },
    { entity_id: 'person.max', label: 'Max' },
  ],
};
