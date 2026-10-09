import { normalizeConfig } from './config';

import kioskModeDefaults from '../../deploy/kiosk-mode-config.json';

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

  const previousKiosk = dashboardConfig.kiosk_mode || {};
  return {
    ...dashboardConfig,
    views,
    kiosk_mode: {
      ...kioskModeDefaults,
      ...previousKiosk,
      non_admin_settings: {
        ...kioskModeDefaults.non_admin_settings,
        ...previousKiosk.non_admin_settings,
        hide_header: false,
        hide_sidebar: false,
      },
      admin_settings: {
        ...kioskModeDefaults.admin_settings,
        ...previousKiosk.admin_settings,
        hide_header: false,
        hide_sidebar: false,
      },
    },
  };
}

function kioskHidesChrome(settings) {
  return Boolean(settings?.hide_header || settings?.hide_sidebar);
}

const CHROME_STYLE_ID = 'the-monitor-ha-chrome';
const CHROME_OVERRIDE_CSS = `
.header,
app-header {
  display: flex !important;
  visibility: visible !important;
  pointer-events: auto !important;
}
ha-menu-button {
  display: inline-flex !important;
  visibility: visible !important;
  pointer-events: auto !important;
}
`;
const DRAWER_OVERRIDE_CSS = `
:host([expanded]) {
  --mdc-drawer-width: var(--ha-sidebar-width, 256px) !important;
}
:host([expanded]) ha-sidebar {
  display: flex !important;
  visibility: visible !important;
}
`;

function shadowHosts(root) {
  const hosts = [];
  const visit = (node) => {
    if (!node?.shadowRoot) return;
    hosts.push(node);
    node.shadowRoot.querySelectorAll('*').forEach(visit);
  };
  visit(root);
  return hosts;
}

let chromeRevealed = false;

export function revealHaChrome() {
  if (chromeRevealed) return;
  const ha = document.querySelector('home-assistant');
  if (!ha) return;

  let injected = false;
  shadowHosts(ha).forEach((host) => {
    const shadow = host.shadowRoot;
    if (!shadow || shadow.getElementById(CHROME_STYLE_ID)) return;
    const showsHeader = Boolean(shadow.querySelector('ha-menu-button'));
    const showsDrawer = host.localName === 'home-assistant-main' || shadow.querySelector('ha-sidebar, ha-drawer');
    if (!showsHeader && !showsDrawer) return;
    const style = document.createElement('style');
    style.id = CHROME_STYLE_ID;
    style.textContent = `${showsHeader ? CHROME_OVERRIDE_CSS : ''}${showsDrawer ? DRAWER_OVERRIDE_CSS : ''}`;
    shadow.appendChild(style);
    injected = true;
  });

  if (injected) chromeRevealed = true;
}

let chromeEnsured = false;

export async function ensureHaChromeVisible(hass) {
  if (chromeEnsured || !hass?.connection?.sendMessagePromise) return;
  chromeEnsured = true;

  let tries = 0;
  const timer = window.setInterval(() => {
    revealHaChrome();
    tries += 1;
    if (chromeRevealed || tries > 12) window.clearInterval(timer);
  }, 400);
  revealHaChrome();

  const urlPath = getDashboardUrlPath();
  try {
    const dashboardConfig = await hass.connection.sendMessagePromise({
      type: 'lovelace/config',
      url_path: urlPath,
      force: false,
    });
    const kiosk = dashboardConfig?.kiosk_mode;
    if (!kiosk || (!kioskHidesChrome(kiosk.non_admin_settings) && !kioskHidesChrome(kiosk.admin_settings))) {
      return;
    }
    await hass.connection.sendMessagePromise({
      type: 'lovelace/config/save',
      url_path: urlPath,
      config: {
        ...dashboardConfig,
        kiosk_mode: {
          ...kiosk,
          non_admin_settings: {
            ...kiosk.non_admin_settings,
            hide_header: false,
            hide_sidebar: false,
          },
          admin_settings: {
            ...kiosk.admin_settings,
            hide_header: false,
            hide_sidebar: false,
          },
        },
      },
    });
  } catch (err) {
    chromeEnsured = false;
    console.warn('The Monitor: could not restore the Home Assistant menu', err);
  }
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
    persistChain = persistChain
      .then(() => persistCardConfigToLovelace(hass, config))
      .catch(() => {});
  }, delayMs);
}
