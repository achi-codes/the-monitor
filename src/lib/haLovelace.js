import { normalizeConfig } from './config';
import { markConfigPersisted } from './uiSession';

const CARD_TYPE = 'custom:the-monitor-dashboard';

export function getDashboardUrlPath() {
  const match = window.location.pathname.match(/^\/([^/]+)\/\d+/);
  return match?.[1] ?? 'the-monitor';
}

export function configToCardYaml(config) {
  const normalized = normalizeConfig(config);
  const primaryRoom = normalized.rooms?.[0];
  return {
    type: CARD_TYPE,
    rooms: normalized.rooms,
    layout: primaryRoom?.layout,
    layoutPreset: primaryRoom?.layoutPreset,
    vacuum: normalized.vacuum,
    ev: normalized.ev,
    windows: normalized.windows,
    presence: normalized.presence,
    backgroundImage: normalized.backgroundImage,
    screensaver: normalized.screensaver,
    appearance: normalized.appearance,
  };
}

function patchDashboardConfig(dashboardConfig, cardYaml) {
  if (!dashboardConfig?.views?.length) return null;

  const views = dashboardConfig.views.map((view) => ({
    ...view,
    cards: view.cards?.map((card) => (
      card?.type === CARD_TYPE ? { ...cardYaml } : card
    )) ?? view.cards,
  }));

  // Drop kiosk_mode so the normal Home Assistant header and sidebar stay usable.
  const { kiosk_mode: _kioskMode, ...rest } = dashboardConfig;
  return {
    ...rest,
    views,
  };
}

export async function persistCardConfigToLovelace(hass, config) {
  if (!hass?.connection?.sendMessagePromise) return false;

  const urlPath = getDashboardUrlPath();
  const cardYaml = configToCardYaml(config);

  try {
    const dashboardConfig = await hass.connection.sendMessagePromise({
      type: 'lovelace/config',
      url_path: urlPath,
      force: false,
    });

    const nextConfig = patchDashboardConfig(dashboardConfig, cardYaml);
    if (!nextConfig) {
      console.warn('The Monitor: refused to persist — dashboard config invalid');
      return false;
    }

    await hass.connection.sendMessagePromise({
      type: 'lovelace/config/save',
      url_path: urlPath,
      config: nextConfig,
    });
    return true;
  } catch (err) {
    console.warn('The Monitor: could not persist config to Lovelace', err);
    return false;
  }
}

let persistTimer = null;
let persistChain = Promise.resolve();

export function schedulePersistCardConfig(hass, config, delayMs = 1200) {
  if (!hass?.connection) return;

  if (persistTimer) window.clearTimeout(persistTimer);
  persistTimer = window.setTimeout(() => {
    markConfigPersisted();
    persistChain = persistChain
      .then(() => persistCardConfigToLovelace(hass, config))
      .then(() => markConfigPersisted())
      .catch(() => {});
  }, delayMs);
}
