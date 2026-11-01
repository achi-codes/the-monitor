import { judgeBuilds, tokenFromBundleText } from './buildStamp';

export const BUILD_ID = import.meta.env.VITE_TM_BUILD || 'dev';
export const BUILD_TOKEN = import.meta.env.VITE_TM_BUILD_TOKEN || '';

function monitorScriptUrl(value) {
  try {
    const url = new URL(value, window.location.href);
    if (!/\/the-monitor\.js$/i.test(url.pathname)) return '';
    url.search = '';
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
