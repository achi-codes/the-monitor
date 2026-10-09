const SESSION_KEY = 'the-monitor-kiosk-cleared';

const KIOSK_QUERY_PARAMS = [
  'kiosk',
  'hide_header',
  'hide_sidebar',
  'hide_menubutton',
  'hide_overflow',
  'hide_settings',
  'hide_notifications',
  'hide_account',
  'hide_search',
  'hide_assistant',
  'hide_refresh',
  'hide_unused_entities',
  'hide_reload_resources',
  'hide_edit_dashboard',
  'block_overflow',
  'block_mouse',
  'block_context_menu',
];

function clearKioskLocalStorage() {
  let cleared = false;
  try {
    const keys = [];
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);
      if (key) keys.push(key);
    }
    keys.forEach((key) => {
      if (!key.startsWith('km')) return;
      window.localStorage.removeItem(key);
      cleared = true;
    });
  } catch {
    // Private mode / locked storage
  }
  return cleared;
}

function stripKioskQueryParams() {
  const url = new URL(window.location.href);
  let changed = false;
  KIOSK_QUERY_PARAMS.forEach((param) => {
    if (!url.searchParams.has(param)) return;
    url.searchParams.delete(param);
    changed = true;
  });
  if (changed) {
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
  }
  return changed;
}

/**
 * Kiosk Mode caches hide_* flags in localStorage and URL params. Those win over
 * the Lovelace config, so the normal Home Assistant menu never comes back until
 * they are cleared.
 */
export function restoreHaMenuChrome() {
  if (typeof window === 'undefined') return;
  if (window.sessionStorage.getItem(SESSION_KEY) === '1') return;

  const clearedStorage = clearKioskLocalStorage();
  const clearedQuery = stripKioskQueryParams();
  window.sessionStorage.setItem(SESSION_KEY, '1');

  if (clearedStorage || clearedQuery) {
    window.location.reload();
  }
}
