import { judgeBuilds, tokenFromBundleText } from './buildStamp';

export const BUILD_ID = import.meta.env.VITE_TM_BUILD || 'dev';
export const BUILD_TOKEN = import.meta.env.VITE_TM_BUILD_TOKEN || '';

function monitorScriptUrl(value) {
  try {
    const url = new URL(value, window.location.href);
    if (!/\/the-monitor\.js$/i.test(url.pathname)) return '';
    url.hash = '';
    return url.href;
  } catch {
    return '';
  }
}

export function runningScriptUrl() {
  const candidates = [];
  if (import.meta.url) candidates.push(import.meta.url);
  if (typeof document !== 'undefined') {
    document.querySelectorAll('script[src]').forEach((node) => {
      if (node.src) candidates.push(node.src);
    });
  }
  if (typeof performance !== 'undefined' && performance.getEntriesByType) {
    performance.getEntriesByType('resource').forEach((entry) => {
      if (entry.name) candidates.push(entry.name);
    });
  }
  for (const candidate of candidates) {
    const clean = monitorScriptUrl(candidate);
    if (clean) return clean;
  }
  return '';
}

async function replaceLovelaceResource(hass, currentUrl) {
  if (!hass?.callWS || !currentUrl) return;
  const resources = await hass.callWS({ type: 'lovelace/resources' });
  const resource = (resources || []).find((item) => /\/the-monitor\.js(?:\?|$)/.test(item?.url || ''));
  if (!resource?.id) return;
  const fresh = new URL(currentUrl, window.location.origin);
  fresh.searchParams.set('v', String(Date.now()));
  await hass.callWS({
    type: 'lovelace/resources/update',
    resource_id: resource.id,
    url: `${fresh.pathname}${fresh.search}`,
    res_type: resource.res_type || resource.type || 'module',
  });
}

export async function compareInstalledBuild() {
  const scriptUrl = runningScriptUrl();
  if (!BUILD_TOKEN || !scriptUrl) return { status: 'unknown', installedLabel: '' };
  try {
    const url = new URL(scriptUrl);
    url.searchParams.set('tm_build_check', String(Date.now()));
    const response = await fetch(url.href, { cache: 'no-store', credentials: 'same-origin' });
    if (!response.ok) return { status: 'unknown', installedLabel: '' };
    return judgeBuilds(BUILD_TOKEN, tokenFromBundleText(await response.text()));
  } catch {
    return { status: 'unknown', installedLabel: '' };
  }
}

export async function hardReloadPage(hass) {
  const scriptUrl = runningScriptUrl();
  try {
    await replaceLovelaceResource(hass, scriptUrl);
  } catch {
    // A changed resource address is the reliable cache break. The reload still runs.
  }
  try {
    if (typeof caches !== 'undefined') {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }
    if (navigator.serviceWorker?.getRegistrations) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }
    if (scriptUrl) {
      await fetch(scriptUrl, { cache: 'reload', credentials: 'same-origin' });
    }
  } catch {
    // The navigation below still replaces the cached page.
  }
  const next = new URL(window.location.href);
  next.searchParams.set('tm_reload', String(Date.now()));
  window.location.replace(next.href);
}
