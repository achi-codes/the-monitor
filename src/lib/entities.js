export function getDomain(entityId) {
  if (!entityId) return '';
  return entityId.split('.')[0];
}

export function getFriendlyName(hass, entityId) {
  if (!hass?.states?.[entityId]) return entityId || '';
  const state = hass.states[entityId];
  return state.attributes?.friendly_name || entityId;
}

export function getEntity(hass, entityId) {
  if (!entityId || !hass?.states?.[entityId]) {
    return {
      id: entityId || '',
      name: entityId || '',
      state: 'unavailable',
      attributes: {},
      domain: getDomain(entityId),
      lastChanged: null,
    };
  }

  const stateObj = hass.states[entityId];
  return {
    id: entityId,
    name: stateObj.attributes?.friendly_name || entityId,
    state: stateObj.state,
    attributes: stateObj.attributes || {},
    domain: getDomain(entityId),
    lastChanged: stateObj.last_changed ? new Date(stateObj.last_changed).getTime() : null,
  };
}

export function getEntityAreaName(hass, entityId) {
  const registryEntry = hass?.entities?.[entityId];
  const areaId = registryEntry?.area_id || hass?.devices?.[registryEntry?.device_id]?.area_id;
  return areaId ? hass?.areas?.[areaId]?.name || '' : '';
}

export function listEntities(hass, { domains = null, search = '' } = {}) {
  if (!hass?.states) return [];

  const query = search.toLowerCase().trim();

  return Object.keys(hass.states)
    .filter((id) => {
      const domain = getDomain(id);
      if (domains?.length && !domains.includes(domain)) return false;
      if (!query) return true;
      const entity = getEntity(hass, id);
      return (
        entity.name.toLowerCase().includes(query) ||
        id.toLowerCase().includes(query)
      );
    })
    .map((id) => getEntity(hass, id))
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
}

export function isEntityOn(state, domain) {
  if (state === 'on' || state === 'open' || state === 'unlocked' || state === 'home') return true;
  if (domain === 'climate') return state !== 'off' && state !== 'unavailable';
  if (domain === 'media_player') return state === 'playing';
  if (domain === 'alarm_control_panel') return state !== 'disarmed' && state !== 'unavailable';
  return false;
}

const VACUUM_ACTIVE_STATES = new Set([
  'cleaning', 'paused', 'returning', 'on', 'active', 'busy', 'mopping', 'spot_cleaning',
]);

const VACUUM_IDLE_STATES = new Set([
  'docked', 'idle', 'off', 'unavailable', 'unknown', 'error', 'standby', 'charging',
]);

export function isVacuumActive(state, attributes = {}) {
  if (VACUUM_IDLE_STATES.has(state)) return false;
  if (VACUUM_ACTIVE_STATES.has(state)) return true;

  const status = String(attributes?.status || attributes?.vacuum_status || '').toLowerCase();
  if (/clean|rein|mop|wisch|sweep|saug|scrub/i.test(status)) return true;
  if (/return|zurück|dock|basis|home/i.test(status) && state !== 'docked') return true;
  if (/paus/i.test(status)) return true;

  return false;
}

export function findAnyVacuumEntity(hass) {
  if (!hass?.states) return '';

  return Object.keys(hass.states).find((id) => id.startsWith('vacuum.')) || '';
}

export function findActiveVacuumEntity(hass) {
  if (!hass?.states) return '';

  return Object.keys(hass.states).find((id) => {
    if (!id.startsWith('vacuum.')) return false;
    const stateObj = hass.states[id];
    return isVacuumActive(stateObj.state, stateObj.attributes);
  }) || '';
}

export function resolveVacuumEntityId(hass, configuredId, isMock = false, demoId = '') {
  if (configuredId && hass?.states?.[configuredId]) return configuredId;
  const any = findAnyVacuumEntity(hass);
  if (any) return any;
  if (isMock && demoId) return demoId;
  return demoId || '';
}

export function getVacuumStatusLabel(entity) {
  const { state, attributes } = entity;
  if (attributes?.status) return attributes.status;
  if (state === 'cleaning') return 'Reinigt …';
  if (state === 'paused') return 'Pausiert';
  if (state === 'returning') return 'Fährt zur Basis …';
  if (state === 'docked' || state === 'charging') return 'In der Ladestation';
  if (state === 'idle' || state === 'off') return 'Bereit';
  if (state === 'unavailable' || !entity.id) return 'Reinigt Wohnzimmer …';
  return entity.name || 'Sauger';
}

export function getVacuumProgress(entity, elapsedSeconds = 0) {
  const battery = entity.attributes?.battery_level;
  if (typeof battery === 'number' && battery > 0) {
    return Math.min(100, Math.max(5, 100 - battery + 20));
  }
  const cycle = 45 * 60;
  return Math.min(95, Math.round((elapsedSeconds / cycle) * 100));
}

export function formatVacuumTimer(elapsedSeconds) {
  const mins = Math.floor(elapsedSeconds / 60);
  const secs = elapsedSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function isWindowAlert(entity) {
  const { state, domain } = entity;
  if (domain === 'cover') return ['open', 'opening', 'closing'].includes(state);
  if (domain === 'binary_sensor') return state === 'on';
  return false;
}

export function isWindowPersistentlyOpen(entity) {
  const { state, domain } = entity;
  if (domain === 'cover') return state === 'open';
  if (domain === 'binary_sensor') return state === 'on';
  return false;
}

export function getWindowStateLabel(entity) {
  const { state, domain } = entity;
  if (domain === 'cover') {
    const labels = {
      open: 'Offen',
      closed: 'Geschlossen',
      opening: 'Öffnet sich …',
      closing: 'Schließt sich …',
    };
    return labels[state] || state;
  }
  if (domain === 'binary_sensor') {
    return state === 'on' ? 'Offen' : 'Geschlossen';
  }
  return state;
}

export function resolveWindowEntities(hass, configuredWindows = []) {
  if (!Array.isArray(configuredWindows)) return [];

  return configuredWindows
    .filter((entry) => entry?.entity_id)
    .map((entry) => {
      const entity = getEntity(hass, entry.entity_id);
      return { ...entity, label: entry.label || entity.name };
    });
}

export function getActiveWindows(hass, configuredWindows = []) {
  return resolveWindowEntities(hass, configuredWindows).filter(isWindowAlert);
}

export function getWindowSummaryLabel(windows = []) {
  if (!windows.length) return '';

  const moving = windows.filter((w) => ['opening', 'closing'].includes(w.state));
  if (moving.length === 1) {
    const verb = moving[0].state === 'opening' ? 'öffnet sich' : 'schließt sich';
    return `${moving[0].label} ${verb} …`;
  }
  if (moving.length > 1) return `${moving.length} Fenster bewegen sich`;

  if (windows.length === 1) return `${windows[0].label} offen`;
  return `${windows.length} Fenster offen`;
}

export function formatEntityState(hass, entityId) {
  const entity = getEntity(hass, entityId);
  const { state, attributes, domain } = entity;

  if (domain === 'climate' && attributes.current_temperature != null) {
    return `${attributes.current_temperature}°C`;
  }
  if (domain === 'sensor' && attributes.unit_of_measurement) {
    return `${state}${attributes.unit_of_measurement}`;
  }
  if (domain === 'cover') {
    if (typeof attributes.current_position === 'number') {
      return `${Math.round(attributes.current_position)}%`;
    }
    const labels = {
      open: 'Offen',
      closed: 'Geschlossen',
      opening: 'Öffnet …',
      closing: 'Schließt …',
    };
    return labels[state] || state;
  }
  if (domain === 'lock') {
    return state === 'locked' ? 'Gesperrt' : state === 'unlocked' ? 'Offen' : state;
  }
  if (domain === 'person') {
    return state === 'home' ? 'Zuhause' : 'Abwesend';
  }
  if (domain === 'alarm_control_panel') {
    const labels = {
      disarmed: 'Unscharf',
      armed_home: 'Scharf (Zuhause)',
      armed_away: 'Scharf (Abwesend)',
      armed_night: 'Scharf (Nacht)',
      pending: 'Auslösend',
      triggered: 'Alarm!',
    };
    return labels[state] || state;
  }
  if (state === 'on') return 'An';
  if (state === 'off') return 'Aus';
  return state;
}
