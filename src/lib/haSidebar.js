const STYLE_ID = 'the-monitor-sidebar-hide';

const SIDEBAR_HIDE_CSS = `
:host {
  --mdc-drawer-width: 0px !important;
  --app-drawer-width: 0px !important;
}
:host([expanded]) {
  --mdc-drawer-width: 0px !important;
}
:host([expanded]:not([modal])) {
  --mdc-drawer-width: 0px !important;
}
`;

function getHomeAssistantMainShadow() {
  const ha = document.querySelector('home-assistant');
  const main = ha?.shadowRoot?.querySelector('home-assistant-main');
  return main?.shadowRoot ?? null;
}

export function applyHideHaSidebar(hide) {
  const shadow = getHomeAssistantMainShadow();
  if (!shadow) return false;

  const existing = shadow.getElementById(STYLE_ID);
  if (!hide) {
    existing?.remove();
    return true;
  }

  const style = existing ?? document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = SIDEBAR_HIDE_CSS;
  if (!existing) shadow.appendChild(style);
  return true;
}

export function syncHideHaSidebar(hide) {
  if (!hide) {
    applyHideHaSidebar(false);
    return () => {};
  }

  let cancelled = false;
  let timer = null;

  const tryApply = () => {
    if (cancelled) return;
    if (!applyHideHaSidebar(true)) {
      timer = window.setTimeout(tryApply, 250);
    }
  };

  tryApply();

  return () => {
    cancelled = true;
    if (timer) window.clearTimeout(timer);
  };
}
