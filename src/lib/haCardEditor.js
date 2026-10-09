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
