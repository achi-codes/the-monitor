import { normalizeConfig, DEFAULT_CONFIG } from './config';

export const SETUPS_STORAGE_KEY = 'the-monitor-setups';
export const ACTIVE_SETUP_KEY = 'the-monitor-active-setup';
export const SETUP_LIMIT = 12;

export function createSetupId() {
  return `setup-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

function configFieldsFrom(raw = {}) {
  const normalized = normalizeConfig(raw);
  return {
    rooms: normalized.rooms,
    vacuum: normalized.vacuum,
    ev: normalized.ev,
    windows: normalized.windows,
    presence: normalized.presence,
    backgroundImage: normalized.backgroundImage,
    screensaver: normalized.screensaver,
    appearance: normalized.appearance,
    hideHaSidebar: normalized.hideHaSidebar,
    roomSidebar: normalized.roomSidebar,
  };
}

export function createSetup(name = 'Setup', rawConfig = {}) {
  return {
    id: createSetupId(),
    name: (name || 'Setup').trim() || 'Setup',
    ...configFieldsFrom(rawConfig),
  };
}

export function normalizeSetup(raw = {}) {
  const fields = configFieldsFrom(raw);
  return {
    id: raw.id || createSetupId(),
    name: (raw.name || 'Setup').trim() || 'Setup',
    ...fields,
  };
}

export function setupToConfig(setup) {
  if (!setup) return normalizeConfig(DEFAULT_CONFIG);
  const { id: _id, name: _name, ...rest } = setup;
  return normalizeConfig(rest);
}

export function applyConfigToSetup(setup, config) {
  return {
    ...setup,
    ...configFieldsFrom(config),
  };
}

function isLegacyFlatConfig(raw = {}) {
  if (!raw || typeof raw !== 'object') return false;
  if (Array.isArray(raw.setups)) return false;
  return Boolean(
    raw.rooms
    || raw.layout
    || raw.appearance
    || raw.screensaver
    || raw.vacuum
    || raw.ev
    || raw.windows
    || raw.presence
    || raw.backgroundImage
    || raw.weather
    || raw.quickActions
  );
}

export function normalizeSetupStore(raw = {}) {
  if (Array.isArray(raw.setups) && raw.setups.length) {
    const setups = raw.setups.slice(0, SETUP_LIMIT).map(normalizeSetup);
    const defaultSetupId = setups.some((setup) => setup.id === raw.defaultSetupId)
      ? raw.defaultSetupId
      : setups[0].id;
    return { setups, defaultSetupId };
  }

  if (isLegacyFlatConfig(raw)) {
    const setup = createSetup('Standard', raw);
    return { setups: [setup], defaultSetupId: setup.id };
  }

  const setup = createSetup('Standard', DEFAULT_CONFIG);
  return { setups: [setup], defaultSetupId: setup.id };
}

export function migrateRawToSetupStore(raw = {}) {
  return normalizeSetupStore(raw);
}

export function loadSetupStore() {
  try {
    const stored = localStorage.getItem(SETUPS_STORAGE_KEY);
    if (stored) return normalizeSetupStore(JSON.parse(stored));
  } catch {
    // ignore
  }
  return null;
}

export function saveSetupStore(store) {
  try {
    localStorage.setItem(SETUPS_STORAGE_KEY, JSON.stringify({
      setups: store.setups,
      defaultSetupId: store.defaultSetupId,
    }));
  } catch {
    // ignore quota / private mode
  }
}

export function loadActiveSetupId(setups, defaultSetupId = '') {
  try {
    const stored = localStorage.getItem(ACTIVE_SETUP_KEY);
    if (stored && setups?.some((setup) => setup.id === stored)) return stored;
  } catch {
    // ignore
  }
  if (defaultSetupId && setups?.some((setup) => setup.id === defaultSetupId)) {
    return defaultSetupId;
  }
  return setups?.[0]?.id || '';
}

export function saveActiveSetupId(setupId) {
  try {
    if (setupId) localStorage.setItem(ACTIVE_SETUP_KEY, setupId);
  } catch {
    // ignore
  }
}

export function getSetupById(setups, setupId) {
  return setups?.find((setup) => setup.id === setupId) || setups?.[0] || null;
}

function loadLegacyConfigRaw() {
  try {
    const legacy = localStorage.getItem('the-monitor-config');
    if (!legacy) return null;
    return JSON.parse(legacy);
  } catch {
    return null;
  }
}

export function resolveInitialSetupState(yamlConfig = {}, { embedded = false } = {}) {
  const yamlHasSetups = Array.isArray(yamlConfig?.setups) && yamlConfig.setups.length > 0;
  const localStore = loadSetupStore();
  const legacyRaw = loadLegacyConfigRaw();

  let store;
  if (yamlHasSetups) {
    // Shared setups in Lovelace are the source of truth across devices.
    store = migrateRawToSetupStore(yamlConfig);
  } else if (localStore?.setups?.length) {
    // This device already migrated; keep local until Lovelace has setups.
    store = localStore;
  } else if (legacyRaw) {
    store = migrateRawToSetupStore(legacyRaw);
  } else if (isLegacyFlatConfig(yamlConfig) || embedded) {
    store = migrateRawToSetupStore(yamlConfig);
  } else {
    store = migrateRawToSetupStore({});
  }

  store = normalizeSetupStore(store);
  saveSetupStore(store);

  const activeSetupId = loadActiveSetupId(store.setups, store.defaultSetupId);
  saveActiveSetupId(activeSetupId);

  const active = getSetupById(store.setups, activeSetupId);
  return {
    setupStore: store,
    activeSetupId,
    config: setupToConfig(active),
  };
}

export function updateActiveSetupConfig(store, activeSetupId, config) {
  const setups = store.setups.map((setup) => (
    setup.id === activeSetupId
      ? applyConfigToSetup(setup, config)
      : setup
  ));
  return { ...store, setups };
}

export function renameSetupInStore(store, setupId, name) {
  const nextName = (name || '').trim() || 'Setup';
  return {
    ...store,
    setups: store.setups.map((setup) => (
      setup.id === setupId ? { ...setup, name: nextName } : setup
    )),
  };
}

export function addSetupToStore(store, name, fromSetup = null) {
  if (store.setups.length >= SETUP_LIMIT) return store;
  const base = fromSetup || store.setups[0];
  const setup = createSetup(name || `${base?.name || 'Setup'} Kopie`, base || DEFAULT_CONFIG);
  return {
    ...store,
    setups: [...store.setups, setup],
  };
}

export function removeSetupFromStore(store, setupId) {
  if (store.setups.length <= 1) return store;
  const setups = store.setups.filter((setup) => setup.id !== setupId);
  const defaultSetupId = setups.some((setup) => setup.id === store.defaultSetupId)
    ? store.defaultSetupId
    : setups[0].id;
  return { setups, defaultSetupId };
}

export function exportSetupStore(store, activeSetupId) {
  return JSON.stringify({
    setups: store.setups,
    defaultSetupId: store.defaultSetupId,
    activeSetupId,
  }, null, 2);
}

export function importSetupStore(json) {
  const parsed = typeof json === 'string' ? JSON.parse(json) : json;
  if (Array.isArray(parsed?.setups) && parsed.setups.length) {
    return normalizeSetupStore(parsed);
  }
  // Flat legacy backup → single setup, keep previous store shape via migration.
  return migrateRawToSetupStore(parsed);
}
