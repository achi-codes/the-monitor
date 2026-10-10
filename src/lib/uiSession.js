// Home Assistant re-creates the card element after every lovelace/config/save,
// which would otherwise drop edit mode, the active page and open settings.
const RESTORE_WINDOW_MS = 30000;

let snapshot = {};
let lastPersistAt = 0;

export function markConfigPersisted() {
  lastPersistAt = Date.now();
}

export function saveUiSession(patch) {
  snapshot = { ...snapshot, ...patch };
}

export function readUiSession() {
  if (!lastPersistAt || Date.now() - lastPersistAt > RESTORE_WINDOW_MS) return {};
  return snapshot;
}
