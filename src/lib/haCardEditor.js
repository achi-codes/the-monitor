import { canRenderHaCards } from './haCards';

const CUSTOM_PREFIX = 'custom:';

function timeout(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function whenDefined(tag, ms = 4000) {
  if (customElements.get(tag)) return customElements.get(tag);
  await Promise.race([customElements.whenDefined(tag), timeout(ms)]);
  return customElements.get(tag) || null;
}

async function cardClassFor(config) {
  const type = String(config?.type || '');
  if (!type) return null;
  if (type.startsWith(CUSTOM_PREFIX)) {
    return whenDefined(type.slice(CUSTOM_PREFIX.length));
  }
  const helpers = await window.loadCardHelpers();
  const element = await helpers.createCardElement(config);
  if (!element?.localName) return null;
  return whenDefined(element.localName);
}

export function canEditHaCardsVisually() {
  return canRenderHaCards();
}

const NATIVE_PICKER_TAG = 'hui-card-picker';
let nativePickerPromise = null;

/**
 * HA only ships hui-card-picker inside editor chunks. The stack card editor
 * imports it, so loading that editor defines the element.
 */
export function ensureNativeCardPicker() {
  if (customElements.get(NATIVE_PICKER_TAG)) return Promise.resolve(true);
  if (!canRenderHaCards()) return Promise.resolve(false);
  if (!nativePickerPromise) {
    nativePickerPromise = (async () => {
      for (const type of ['vertical-stack', 'grid', 'horizontal-stack']) {
        try {
          const cardClass = await cardClassFor({ type, cards: [] });
          await cardClass?.getConfigElement?.();
        } catch {
          // Try the next stack editor.
        }
        if (await whenDefined(NATIVE_PICKER_TAG, 1500)) return true;
      }
      return false;
    })().then((ok) => {
      if (!ok) nativePickerPromise = null;
      return ok;
    });
  }
  return nativePickerPromise;
}

export function createNativeCardPicker(hass, onPick) {
  const picker = document.createElement(NATIVE_PICKER_TAG);
  picker.hass = hass;
  picker.lovelace = { views: [] };
  picker.addEventListener('config-changed', (event) => {
    event.stopPropagation();
    const config = event.detail?.config;
    if (config && typeof config === 'object') onPick(config);
  });
  return picker;
}

/**
 * Returns Home Assistant's own visual editor element for a card config,
 * or null when the card type has no GUI editor.
 */
export async function createHaCardEditor(config, hass) {
  if (!canRenderHaCards()) return null;
  const cardClass = await cardClassFor(config);
  if (typeof cardClass?.getConfigElement !== 'function') return null;
  const editor = await cardClass.getConfigElement();
  if (!editor) return null;
  editor.hass = hass;
  await editor.setConfig(config);
  return editor;
}
