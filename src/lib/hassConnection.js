import {
  Auth,
  createConnection,
  getAuth,
  createLongLivedTokenAuth,
  subscribeEntities,
  callService,
} from 'home-assistant-js-websocket';

const AUTH_KEY = 'the-monitor-hass-auth';
const URL_KEY = 'the-monitor-hass-url';

export function loadHassUrl() {
  return localStorage.getItem(URL_KEY) || 'http://homeassistant.local:8123';
}

export function saveHassUrl(url) {
  localStorage.setItem(URL_KEY, url.replace(/\/$/, ''));
}

export function saveAuthTokens(data) {
  if (data) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
    if (data.hassUrl) saveHassUrl(data.hassUrl);
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function loadAuthTokens() {
  try {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function clearHassConnection() {
  localStorage.removeItem(AUTH_KEY);
}

export function hasOAuthCallback() {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).has('auth_callback');
}

function cleanOAuthCallbackFromUrl() {
  if (typeof window === 'undefined' || !hasOAuthCallback()) return;
  window.history.replaceState({}, '', window.location.pathname);
}

function authFromStoredTokens() {
  const tokens = loadAuthTokens();
  if (!tokens?.access_token) return null;
  return new Auth(tokens, saveAuthTokens);
}

async function refreshAuthIfNeeded(auth) {
  if (!auth.expired) return auth;
  if (!auth.data.refresh_token) {
    throw new Error('Sitzung abgelaufen — bitte erneut anmelden.');
  }
  await auth.refreshAccessToken();
  return auth;
}

function buildHassFromConnection(connection, auth, onUpdate) {
  const states = {};

  const hass = {
    states,
    hassUrl: auth.data.hassUrl,
    accessToken: auth.accessToken,
    connection,
    callService: (domain, service, data, serviceData, returnResponse) =>
      callService(connection, domain, service, { ...data, ...serviceData }, undefined, returnResponse),
  };

  const unsub = subscribeEntities(connection, (entities) => {
    Object.keys(states).forEach((key) => {
      if (!(key in entities)) delete states[key];
    });
    Object.assign(states, entities);
    onUpdate?.(hass);
  });

  hass._unsubscribe = unsub;
  return hass;
}

export async function connectWithAuth(auth, onUpdate) {
  const connection = await createConnection({ auth });
  const hass = buildHassFromConnection(connection, auth, onUpdate);
  return { hass, connection, auth };
}

export async function connectWithToken(url, token, onUpdate) {
  const cleanUrl = url.replace(/\/$/, '');
  const auth = createLongLivedTokenAuth(cleanUrl, token.trim());
  saveHassUrl(cleanUrl);
  saveAuthTokens({
    hassUrl: cleanUrl,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: '',
    access_token: token.trim(),
    expires_in: 1e11,
  });
  return connectWithAuth(auth, onUpdate);
}

async function completeOAuthCallback() {
  const auth = await getAuth({
    hassUrl: loadHassUrl(),
    saveTokens: saveAuthTokens,
    loadTokens: async () => loadAuthTokens(),
  });
  cleanOAuthCallbackFromUrl();
  return auth;
}

let oauthCallbackPromise = null;

async function authAfterOAuthCallback() {
  const stored = authFromStoredTokens();
  if (stored && !hasOAuthCallback()) {
    return refreshAuthIfNeeded(stored);
  }

  if (!oauthCallbackPromise) {
    oauthCallbackPromise = completeOAuthCallback().finally(() => {
      oauthCallbackPromise = null;
    });
  }

  return oauthCallbackPromise;
}

/**
 * Stellt eine bestehende Verbindung wieder her — ohne Login-Redirect.
 * Gibt null zurück, wenn keine gespeicherten Tokens und kein OAuth-Callback vorliegen.
 */
export async function tryRestoreConnection(onUpdate) {
  const isCallback = hasOAuthCallback();
  const storedAuth = authFromStoredTokens();

  if (!isCallback && !storedAuth) {
    return null;
  }

  const auth = isCallback
    ? await authAfterOAuthCallback()
    : await refreshAuthIfNeeded(storedAuth);

  return connectWithAuth(auth, onUpdate);
}

export function startOAuthLogin(hassUrl) {
  saveHassUrl(hassUrl);
  getAuth({
    hassUrl: hassUrl.replace(/\/$/, ''),
    saveTokens: saveAuthTokens,
    loadTokens: async () => loadAuthTokens(),
  });
}

export async function disconnect(connection, hass) {
  hass?._unsubscribe?.();
  if (connection) await connection.close();
  clearHassConnection();
}
