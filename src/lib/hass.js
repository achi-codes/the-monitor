export function isMockHass(hass) {
  return Boolean(hass?.__mock);
}

export function isHomeAssistant(hass) {
  return Boolean(hass?.callService && hass?.states && !isMockHass(hass));
}

function normalizeBaseUrl(value) {
  if (value == null || value === '') return '';
  if (typeof value === 'string') return value.replace(/\/$/, '');
  if (typeof value === 'object' && typeof value.href === 'string') {
    return value.href.replace(/\/$/, '');
  }
  const asString = String(value);
  return asString.startsWith('http') ? asString.replace(/\/$/, '') : '';
}

export function getHassBaseUrl(hass) {
  if (typeof window !== 'undefined' && window.location?.origin && isHomeAssistant(hass)) {
    return window.location.origin;
  }

  const raw = hass?.hassUrl ?? hass?.auth?.data?.hassUrl;
  const normalized = normalizeBaseUrl(raw);
  if (normalized) return normalized;

  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return '';
}

export function getHassAccessToken(hass) {
  return (
    hass?.auth?.data?.accessToken
    || hass?.auth?.accessToken
    || hass?.accessToken
    || null
  );
}

export function resolveHassUrl(hass, path) {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = getHassBaseUrl(hass);
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getEntityPicture(hass, entityId) {
  const pic = hass?.states?.[entityId]?.attributes?.entity_picture;
  return resolveHassUrl(hass, pic);
}
