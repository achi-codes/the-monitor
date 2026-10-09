import { sanitizeCardConfig } from './haCards';

function fireShowDialog(host, detail) {
  host.dispatchEvent(new CustomEvent('show-dialog', {
    bubbles: true,
    composed: true,
    cancelable: false,
    detail,
  }));
}

function findDeep(selector, root = document) {
  const direct = root.querySelector?.(selector);
  if (direct) return direct;
  const nodes = root.querySelectorAll ? root.querySelectorAll('*') : [];
  for (const node of nodes) {
    if (!node.shadowRoot) continue;
    const found = findDeep(selector, node.shadowRoot);
    if (found) return found;
  }
  return null;
}

function getHomeAssistant() {
  return document.querySelector('home-assistant');
}

async function ensureCreateCardDialogLoaded() {
  if (customElements.get('hui-dialog-create-card')) return true;

  const view = findDeep('hui-view');
  if (!view) return false;

  const defined = customElements.whenDefined('hui-dialog-create-card');
  view.dispatchEvent(new CustomEvent('ll-create-card', {
    bubbles: true,
    composed: true,
    detail: { path: ['views', 0, 'cards'] },
  }));

  try {
    await Promise.race([
      defined,
      new Promise((_, reject) => {
        window.setTimeout(() => reject(new Error('timeout')), 6000);
      }),
    ]);
  } catch {
    return Boolean(customElements.get('hui-dialog-create-card'));
  }

  // Close the temporary dialog HA opened with its own save handler.
  await new Promise((resolve) => window.setTimeout(resolve, 40));
  findDeep('hui-dialog-create-card')?.closeDialog?.();
  return true;
}

function buildStubConfig() {
  return {
    views: [
      {
        title: 'The Monitor',
        path: 'the-monitor-pick',
        cards: [],
      },
    ],
  };
}

/**
 * Open Home Assistant's native "Add card" dialog and return the chosen card
 * config into onSelect instead of writing it into a Lovelace dashboard.
 */
export async function openNativeHaCardPicker(hass, { onSelect, onError } = {}) {
  const ha = getHomeAssistant();
  if (!ha?.hass && !hass) {
    onError?.(new Error('Home Assistant ist nicht bereit'));
    return false;
  }

  try {
    const loaded = await ensureCreateCardDialogLoaded();
    if (!loaded && !customElements.get('hui-dialog-create-card')) {
      return false;
    }

    let settled = false;
    const finish = (card) => {
      if (settled) return;
      settled = true;
      const clean = sanitizeCardConfig(card);
      if (clean) onSelect?.(clean);
    };

    fireShowDialog(ha, {
      dialogTag: 'hui-dialog-create-card',
      dialogImport: async () => {
        await customElements.whenDefined('hui-dialog-create-card');
      },
      dialogParams: {
        lovelaceConfig: buildStubConfig(),
        path: ['views', 0, 'cards'],
        saveConfig: async (config) => {
          const cards = config?.views?.[0]?.cards;
          const card = Array.isArray(cards) ? cards[cards.length - 1] : null;
          finish(card);
        },
      },
    });

    return true;
  } catch (error) {
    onError?.(error);
    return false;
  }
}

export function canOpenNativeHaCardPicker() {
  return Boolean(getHomeAssistant() && findDeep('hui-view'));
}
