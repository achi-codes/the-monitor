export function formatBuildStamp(date) {
  return new Intl.DateTimeFormat('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function makeBuildToken(hash, timeMs, label) {
  return `TMBUILD|${hash}|${timeMs}|${encodeURIComponent(label)}`;
}

export function parseBuildToken(token) {
  const match = String(token || '').match(/^TMBUILD\|([0-9a-z]+)\|(\d{10,})\|([^|\s]+)$/i);
  if (!match) return null;
  let label = match[3];
  try {
    label = decodeURIComponent(match[3]);
  } catch {
    /* keep the raw token piece */
  }
  return { hash: match[1], time: Number(match[2]), label };
}

export function tokenFromBundleText(text) {
  const match = String(text || '').match(/TMBUILD\|([0-9a-z]+)\|(\d{10,})\|([A-Za-z0-9%._~!*'()-]+)/i);
  if (!match) return '';
  return `TMBUILD|${match[1]}|${match[2]}|${match[3]}`;
}

export function judgeBuilds(runningToken, installedToken) {
  const running = parseBuildToken(runningToken);
  const installed = parseBuildToken(installedToken);
  if (!running || !installed) return { status: 'unknown', installedLabel: '' };
  if (running.hash === installed.hash && running.time === installed.time) {
    return { status: 'current', installedLabel: installed.label };
  }
  return {
    status: installed.time > running.time ? 'behind' : 'different',
    installedLabel: installed.label,
  };
}
