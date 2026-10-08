import { dump as dumpYaml, load as loadYaml } from 'js-yaml';
import { isMockHass } from './hass';

const MONITOR_CARD_TYPE = 'custom:the-monitor-dashboard';

const MOCK_DASHBOARDS = [
  { id: 'lovelace', url_path: null, title: 'Übersicht', mode: 'storage' },
  { id: 'energy', url_path: 'energie', title: 'Energie', mode: 'storage' },
];

const MOCK_CONFIGS = {
  __default__: {
    views: [
      {
        title: 'Wohnen',
        sections: [
          {
            title: 'Licht',
            cards: [
              { type: 'tile', entity: 'light.wohnzimmer', name: 'Wohnzimmer' },
              { type: 'tile', entity: 'light.kueche', name: 'Küche' },
            ],
          },
          {
            title: 'Klima',
            cards: [
              { type: 'thermostat', entity: 'climate.wohnzimmer' },
              {
                type: 'vertical-stack',
                cards: [
                  { type: 'weather-forecast', entity: 'weather.zuhause', forecast_type: 'daily' },
                  { type: 'entities', title: 'Status', entities: ['lock.haustuer', 'alarm_control_panel.haus'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  energie: {
    views: [
      {
        title: 'Energie',
        cards: [
          { type: 'statistic', entity: 'sensor.grandland_charge_power', name: 'Ladeleistung', period: 'day' },
          { type: 'gauge', entity: 'sensor.grandland_battery', name: 'Akku', min: 0, max: 100, unit: '%' },
        ],
      },
    ],
  },
};

function containsMonitorCard(value) {
  if (!value || typeof value !== 'object') return false;
  if (!Array.isArray(value) && value.type === MONITOR_CARD_TYPE) return true;
  const entries = Array.isArray(value) ? value : Object.values(value);
  return entries.some(containsMonitorCard);
}

export function sanitizeCardConfig(card) {
  if (!card || typeof card !== 'object' || Array.isArray(card)) return null;
  let clone;
  try {
    clone = JSON.parse(JSON.stringify(card));
  } catch {
    return null;
  }
  if (typeof clone.type !== 'string' || !clone.type.trim()) return null;
  clone.type = clone.type.trim();
  if (containsMonitorCard(clone)) return null;
  return clone;
}

export function describeCard(card) {
  if (!card?.type) return 'Karte';
  const type = String(card.type).replace(/^custom:/, '');
  const name = [card.name, card.title, card.heading, card.entity, card.entity_id]
    .find((value) => typeof value === 'string' && value.trim());
  if (name) return `${type} · ${name.trim()}`;
  if (Array.isArray(card.entities) && card.entities.length) {
    return `${type} · ${card.entities.length}`;
  }
  if (Array.isArray(card.cards) && card.cards.length) {
    return `${type} · ${card.cards.length}`;
  }
  return type;
}

export function cardSelectionPatch(widget, card) {
  const previous = widget?.card ? describeCard(widget.card) : '';
  const nextLabel = describeCard(card);
  const keepLabel = widget?.label
    && widget.label !== previous
    && widget.label !== 'HA-Karte';
  return {
    card,
    label: keepLabel ? widget.label : nextLabel,
  };
}

export function cardToYaml(card) {
  if (!card) return '';
  return dumpYaml(card, { lineWidth: 88, noRefs: true }).trim();
}

export function parseCardYaml(text) {
  const source = String(text || '').trim();
  if (!source) return null;
  let parsed;
  try {
    parsed = loadYaml(source);
  } catch (error) {
    const detail = error?.message ? error.message.split('\n')[0] : 'Syntaxfehler';
    throw new Error(`Karten-YAML ungültig: ${detail}`);
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Die Konfiguration muss eine einzelne Karte sein.');
  }
  const card = sanitizeCardConfig(parsed);
  if (!card) {
    throw new Error('Die Karte braucht ein type und darf The Monitor nicht enthalten.');
  }
  return card;
}

export function canRenderHaCards() {
  return typeof window !== 'undefined' && typeof window.loadCardHelpers === 'function';
}

export function monitorHostFrom(node) {
  const root = node?.getRootNode?.();
  if (root instanceof ShadowRoot && root.host?.localName === 'the-monitor-dashboard') {
    return root.host;
  }
  return null;
}

const CUSTOM_PREFIX = 'custom:';

function collectCustomTags(card, tags = new Set()) {
  if (!card || typeof card !== 'object') return tags;
  if (Array.isArray(card)) {
    card.forEach((entry) => collectCustomTags(entry, tags));
    return tags;
  }
  if (typeof card.type === 'string' && card.type.startsWith(CUSTOM_PREFIX)) {
    tags.add(card.type.slice(CUSTOM_PREFIX.length));
  }
  if (Array.isArray(card.cards)) collectCustomTags(card.cards, tags);
  if (card.card) collectCustomTags(card.card, tags);
  return tags;
}

function sleep(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function waitForCustomElements(tags) {
  const pending = [...tags].filter((tag) => tag.includes('-') && !customElements.get(tag));
  if (!pending.length) return;
  await Promise.race([
    Promise.all(pending.map((tag) => customElements.whenDefined(tag))),
    sleep(2000),
  ]);
}

function missingCard(tag) {
  return {
    type: 'markdown',
    content: `**Nicht installiert:** \`${tag}\`\n\nDiese Lovelace-Karte ist in den Ressourcen nicht geladen.`,
  };
}

function replaceMissingCustomCards(card) {
  if (!card || typeof card !== 'object') return card;
  if (Array.isArray(card)) return card.map(replaceMissingCustomCards);
  if (typeof card.type === 'string' && card.type.startsWith(CUSTOM_PREFIX)) {
    const tag = card.type.slice(CUSTOM_PREFIX.length);
    if (tag.includes('-') && !customElements.get(tag)) return missingCard(tag);
  }
  const next = { ...card };
  if (Array.isArray(card.cards)) next.cards = card.cards.map(replaceMissingCustomCards);
  if (card.card && typeof card.card === 'object') next.card = replaceMissingCustomCards(card.card);
  return next;
}

function applyVariables(value, variables) {
  if (typeof value === 'string') {
    return value.replace(/\[\[([^\]]+)\]\]/g, (match, key) => {
      const next = variables?.[key.trim()];
      return next == null ? match : String(next);
    });
  }
  if (Array.isArray(value)) return value.map((entry) => applyVariables(entry, variables));
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, applyVariables(entry, variables)]),
    );
  }
  return value;
}

function mergeTemplate(base, overlay) {
  const merged = { ...base };
  Object.entries(overlay || {}).forEach(([key, value]) => {
    if (
      value && typeof value === 'object' && !Array.isArray(value)
      && merged[key] && typeof merged[key] === 'object' && !Array.isArray(merged[key])
    ) {
      merged[key] = mergeTemplate(merged[key], value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}

function expandButtonTemplate(card, templates, seen) {
  const names = Array.isArray(card.template) ? card.template : [card.template];
  let merged = {};
  let found = false;
  names.forEach((name) => {
    const key = `b:${name}`;
    if (!name || seen.has(key) || !templates[name]) return;
    seen.add(key);
    found = true;
    const parent = expandButtonTemplate(
      { ...templates[name], type: 'custom:button-card' },
      templates,
      seen,
    );
    const { type, template, ...rest } = parent;
    merged = mergeTemplate(merged, rest);
  });
  if (!found) return card;
  const { template, ...own } = card;
  return mergeTemplate(merged, own);
}

function expandCardTemplates(card, libraries, seen = new Set()) {
  if (!card || typeof card !== 'object') return card;
  if (Array.isArray(card)) return card.map((entry) => expandCardTemplates(entry, libraries, seen));

  let current = card;
  if (current.type === 'custom:streamline-card' && current.template && libraries.streamline?.[current.template]) {
    const key = `s:${current.template}`;
    if (!seen.has(key)) {
      seen.add(key);
      const template = libraries.streamline[current.template];
      const inner = template?.card?.type ? template.card : (template?.type ? template : null);
      if (inner) {
        const defaults = template.default && !Array.isArray(template.default) ? template.default : {};
        current = applyVariables(structuredClone(inner), { ...defaults, ...(current.variables || {}) });
      }
    }
  }
  if (current.type === 'custom:button-card' && current.template && libraries.button) {
    current = expandButtonTemplate(current, libraries.button, seen);
  }

  const next = { ...current };
  if (Array.isArray(current.cards)) {
    next.cards = current.cards.map((entry) => expandCardTemplates(entry, libraries, seen));
  }
  if (current.card && typeof current.card === 'object') {
    next.card = expandCardTemplates(current.card, libraries, seen);
  }
  if (current.custom_fields && typeof current.custom_fields === 'object') {
    next.custom_fields = Object.fromEntries(
      Object.entries(current.custom_fields).map(([key, value]) => [
        key,
        expandCardTemplates(value, libraries, seen),
      ]),
    );
  }
  return next;
}

let libraryPromise = null;

async function loadCardLibraries(hass) {
  if (!hass?.connection?.sendMessagePromise) return { button: {}, streamline: {} };
  if (!libraryPromise) {
    libraryPromise = (async () => {
      const listed = await hass.connection.sendMessagePromise({ type: 'lovelace/dashboards/list' });
      const paths = [null, ...(Array.isArray(listed) ? listed.map((dashboard) => dashboard.url_path) : [])];
      const button = {};
      const streamline = {};
      for (const urlPath of paths) {
        try {
          const config = await hass.connection.sendMessagePromise({
            type: 'lovelace/config',
            url_path: urlPath,
            force: false,
          });
          Object.assign(button, config?.button_card_templates || {});
          Object.assign(streamline, config?.streamline_templates || {});
        } catch {
          // Dashboards without a saved config are skipped.
        }
      }
      return { button, streamline };
    })().catch((error) => {
      libraryPromise = null;
      throw error;
    });
  }
  return libraryPromise;
}

function cardUsesTemplate(card) {
  return JSON.stringify(card || {}).includes('"template"');
}

export async function prepareEmbeddedCard(card, hass) {
  const config = sanitizeCardConfig(card);
  if (!config) throw new Error('Ungültige Karten-Konfiguration');
  if (canRenderHaCards()) await window.loadCardHelpers();
  let prepared = config;
  if (cardUsesTemplate(prepared)) {
    try {
      prepared = expandCardTemplates(prepared, await loadCardLibraries(hass));
    } catch (error) {
      console.warn('The Monitor: card templates were not expanded', error);
    }
  }
  await waitForCustomElements(collectCustomTags(prepared));
  return replaceMissingCustomCards(prepared);
}

export async function mountHaCard(parent, card, hass, { preview = false } = {}) {
  const prepared = await prepareEmbeddedCard(card, hass);
  if (customElements.get('hui-card')) {
    const element = document.createElement('hui-card');
    parent.appendChild(element);
    if (hass) element.hass = hass;
    element.preview = preview;
    element.config = prepared;
    return element;
  }
  if (!canRenderHaCards()) throw new Error('Home Assistant stellt hier keine Karten bereit');
  const helpers = await window.loadCardHelpers();
  const element = await helpers.createCardElement(prepared);
  if (!element) throw new Error('Karte konnte nicht erzeugt werden');
  parent.appendChild(element);
  if (hass) element.hass = hass;
  return element;
}

function dashboardKey(urlPath) {
  return urlPath ?? '__default__';
}

export async function fetchDashboards(hass) {
  if (isMockHass(hass)) return MOCK_DASHBOARDS.map((dashboard) => ({ ...dashboard }));
  if (!hass?.connection?.sendMessagePromise) {
    throw new Error('Keine Home-Assistant-Verbindung');
  }
  const listed = await hass.connection.sendMessagePromise({
    type: 'lovelace/dashboards/list',
  });
  const dashboards = Array.isArray(listed) ? [...listed] : [];
  const hasDefault = dashboards.some((dashboard) => (
    dashboard.url_path == null || dashboard.url_path === 'lovelace'
  ));
  if (!hasDefault) {
    dashboards.unshift({
      id: 'lovelace',
      url_path: null,
      title: 'Übersicht',
      mode: 'storage',
    });
  }
  return dashboards;
}

export async function fetchLovelaceConfig(hass, urlPath) {
  if (isMockHass(hass)) {
    return structuredClone(MOCK_CONFIGS[dashboardKey(urlPath)] || { views: [] });
  }
  if (!hass?.connection?.sendMessagePromise) {
    throw new Error('Keine Home-Assistant-Verbindung');
  }
  return hass.connection.sendMessagePromise({
    type: 'lovelace/config',
    url_path: urlPath ?? null,
    force: false,
  });
}

export function collectCards(config, dashboardTitle = 'Dashboard') {
  const cards = [];

  const walk = (entries, path, depth) => {
    (entries || []).forEach((card, index) => {
      if (!card || typeof card !== 'object') return;
      const clean = sanitizeCardConfig(card);
      const label = clean ? describeCard(clean) : (card.type || 'Karte');
      if (clean) {
        cards.push({
          id: `${path}:${index}:${clean.type}`,
          label,
          path,
          depth,
          config: clean,
        });
      }
      if (Array.isArray(card.cards)) walk(card.cards, `${path} · ${label}`, depth + 1);
      if (card.card && typeof card.card === 'object') {
        walk([card.card], `${path} · ${label}`, depth + 1);
      }
    });
  };

  (config?.views || []).forEach((view, viewIndex) => {
    const viewTitle = view.title || view.path || `Ansicht ${viewIndex + 1}`;
    const trail = `${dashboardTitle} · ${viewTitle}`;
    if (Array.isArray(view.cards)) walk(view.cards, trail, 0);
    (view.sections || []).forEach((section, sectionIndex) => {
      const sectionTitle = section.title || `Bereich ${sectionIndex + 1}`;
      walk(section.cards, `${trail} · ${sectionTitle}`, 0);
    });
  });

  return cards;
}

export function dashboardIsStrategyOnly(config, cards) {
  return Boolean(config?.strategy?.type) && cards.length === 0;
}
