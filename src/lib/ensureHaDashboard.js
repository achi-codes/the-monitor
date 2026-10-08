const DASHBOARD_PATH = 'the-monitor';
const DASHBOARD_TITLE = 'The Monitor';
const SESSION_KEY = 'the-monitor-sidebar-checked';

const DASHBOARD_CONFIG = {
  views: [
    {
      title: 'Monitor',
      type: 'panel',
      cards: [{ type: 'custom:the-monitor-dashboard' }],
    },
  ],
};

function sleep(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function callWS(hass, message) {
  if (typeof hass.callWS === 'function') return hass.callWS(message);
  return hass.connection.sendMessagePromise(message);
}

async function waitForHass() {
  const deadline = Date.now() + 20000;
  while (Date.now() < deadline) {
    const hass = document.querySelector('home-assistant')?.hass;
    if (hass?.user && hass.connection?.sendMessagePromise) return hass;
    await sleep(300);
  }
  return null;
}

async function ensureDashboardView(hass) {
  const config = await callWS(hass, {
    type: 'lovelace/config',
    url_path: DASHBOARD_PATH,
    force: false,
  });
  if (config?.views?.length) return;
  await callWS(hass, {
    type: 'lovelace/config/save',
    url_path: DASHBOARD_PATH,
    config: DASHBOARD_CONFIG,
  });
}

export async function ensureHaDashboard() {
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return;
  if (document.getElementById('root') && !document.querySelector('home-assistant')) return;
  if (sessionStorage.getItem(SESSION_KEY) === '1') return;

  const hass = await waitForHass();
  if (!hass?.user?.is_admin) return;

  try {
    const dashboards = await callWS(hass, { type: 'lovelace/dashboards/list' });
    const existing = (Array.isArray(dashboards) ? dashboards : [])
      .find((item) => item.url_path === DASHBOARD_PATH);

    if (!existing) {
      await callWS(hass, {
        type: 'lovelace/dashboards/create',
        url_path: DASHBOARD_PATH,
        title: DASHBOARD_TITLE,
        icon: 'mdi:monitor-dashboard',
        require_admin: false,
        show_in_sidebar: true,
      });
    } else if (existing.show_in_sidebar === false && existing.id) {
      await callWS(hass, {
        type: 'lovelace/dashboards/update',
        dashboard_id: existing.id,
        show_in_sidebar: true,
      });
    }

    await ensureDashboardView(hass);
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch (error) {
    console.warn('The Monitor: sidebar dashboard was not created', error);
  }
}
