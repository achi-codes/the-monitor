import { createWidget, GRID_COLS, GRID_ROWS, SLOT_LIMITS } from './layout';

function w(type, x, y, width, height, extra = {}) {
  return createWidget(type, { x, y, w: width, h: height, ...extra });
}

function buildClassicWidgets(entities = {}) {
  const qa = entities.quickActions || [];
  const sc = entities.scenes || [];

  return [
    w('weather', 0, 0, 4, 2, { entity_id: entities.weather || '' }),
    w('media', 0, 2, 4, 1, { entity_id: entities.media || '' }),
    w('camera', 0, 3, 4, 1, {
      entity_id: entities.camera || entities.cameras?.[0] || '',
      entity_ids: (entities.cameras || []).slice(0, SLOT_LIMITS.cameraEntities),
    }),
    w('quickAction', 4, 0, 2, 2, {
      entity_id: qa[0]?.entity_id || '',
      label: qa[0]?.label || '',
      icon: qa[0]?.icon || '',
      mode: 'toggle',
    }),
    w('scene', 4, 2, 2, 1, {
      entity_id: sc[0]?.entity_id || '',
      label: sc[0]?.label || '',
      icon: sc[0]?.icon || '',
    }),
    w('scene', 4, 3, 2, 1, {
      entity_id: sc[1]?.entity_id || '',
      label: sc[1]?.label || '',
      icon: sc[1]?.icon || '',
    }),
    w('quickAction', 6, 0, 2, 2, {
      entity_id: qa[1]?.entity_id || '',
      label: qa[1]?.label || '',
      icon: qa[1]?.icon || '',
      mode: 'brightness',
    }),
    w('scene', 6, 2, 2, 1, {
      entity_id: sc[2]?.entity_id || '',
      label: sc[2]?.label || '',
      icon: sc[2]?.icon || '',
    }),
    w('scene', 6, 3, 2, 1, {
      entity_id: sc[3]?.entity_id || '',
      label: sc[3]?.label || '',
      icon: sc[3]?.icon || '',
    }),
    w('popup', 8, 0, 2, 2, {
      entity_ids: qa[2]?.entity_ids || (qa[2]?.entity_id ? [qa[2].entity_id] : []),
      label: qa[2]?.label || '',
      icon: qa[2]?.icon || '',
    }),
    w('alarm', 10, 0, 2, 2, {
      entity_id: entities.alarm || '',
      label: 'Alarmanlage',
      icon: 'mdi:shield-home',
    }),
  ];
}

function buildEnergyPageWidgets() {
  return [
    w('sankey', 0, 0, 8, GRID_ROWS, { label: 'Energiefluss heute' }),
    w('energyTile', 8, 0, 4, 2, { tileKind: 'inputs-outputs', label: 'Inputs / Outputs' }),
    w('energyTile', 8, 2, 4, 2, { tileKind: 'ev-heatpump', label: 'E-Auto' }),
  ];
}

export const LAYOUT_PRESETS = [
  {
    id: 'classic',
    name: 'Klassisch',
    description: 'Wetter links, Entitäten & Szenen rechts — wie bisher',
    preview: [4, 2, 2, 2, 2, 2],
    build: (entities) => ({
      pages: [
        { id: 'page-home', name: 'Home', widgets: buildClassicWidgets(entities) },
        { id: 'page-list', name: 'Liste', widgets: [w('shopping', 0, 0, GRID_COLS, GRID_ROWS, { entity_id: entities.shopping || '' })] },
        { id: 'page-energy', name: 'Energie', widgets: buildEnergyPageWidgets() },
      ],
    }),
  },
  {
    id: 'weather-top',
    name: 'Wetter oben',
    description: 'Breites Wetter, Steuerung darunter',
    preview: [12, 3, 3, 3, 3],
    build: (entities) => ({
      pages: [
        {
          id: 'page-home',
          name: 'Home',
          widgets: [
            w('weather', 0, 0, GRID_COLS, 2, { entity_id: entities.weather || '' }),
            w('media', 0, 2, 4, 1, { entity_id: entities.media || '' }),
            w('camera', 4, 2, 4, 2, { entity_id: entities.camera || '' }),
            w('quickAction', 8, 2, 2, 2, { entity_id: entities.quickActions?.[0]?.entity_id || '', mode: 'toggle' }),
            w('quickAction', 10, 2, 2, 2, { entity_id: entities.quickActions?.[1]?.entity_id || '', mode: 'brightness' }),
            w('scene', 8, 0, 2, 1, { entity_id: entities.scenes?.[0]?.entity_id || '' }),
            w('scene', 10, 0, 2, 1, { entity_id: entities.scenes?.[1]?.entity_id || '' }),
            w('popup', 0, 3, 4, 1, { entity_ids: entities.quickActions?.[2]?.entity_ids || [] }),
          ],
        },
        { id: 'page-list', name: 'Liste', widgets: [w('shopping', 0, 0, GRID_COLS, GRID_ROWS, { entity_id: entities.shopping || '' })] },
      ],
    }),
  },
  {
    id: 'compact',
    name: 'Kompakt',
    description: 'Kleines Wetter, viele Kacheln',
    preview: [3, 3, 3, 3],
    build: (entities) => ({
      pages: [
        {
          id: 'page-home',
          name: 'Home',
          widgets: [
            w('weather', 0, 0, 3, 2, { entity_id: entities.weather || '' }),
            w('media', 0, 2, 3, 1, { entity_id: entities.media || '' }),
            w('camera', 0, 3, 3, 1, { entity_id: entities.camera || '' }),
            w('quickAction', 3, 0, 3, 2, { entity_id: entities.quickActions?.[0]?.entity_id || '', mode: 'toggle' }),
            w('quickAction', 6, 0, 3, 2, { entity_id: entities.quickActions?.[1]?.entity_id || '', mode: 'brightness' }),
            w('popup', 9, 0, 3, 2, { entity_ids: entities.quickActions?.[2]?.entity_ids || [] }),
            w('scene', 3, 2, 2, 1, { entity_id: entities.scenes?.[0]?.entity_id || '' }),
            w('scene', 5, 2, 2, 1, { entity_id: entities.scenes?.[1]?.entity_id || '' }),
            w('scene', 7, 2, 2, 1, { entity_id: entities.scenes?.[2]?.entity_id || '' }),
            w('scene', 9, 2, 2, 1, { entity_id: entities.scenes?.[3]?.entity_id || '' }),
            w('popup', 3, 3, 3, 1, { entity_ids: entities.quickActions?.[3]?.entity_ids || [] }),
          ],
        },
        { id: 'page-list', name: 'Liste', widgets: [w('shopping', 0, 0, GRID_COLS, GRID_ROWS, { entity_id: entities.shopping || '' })] },
      ],
    }),
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Nur das Wichtigste',
    preview: [6, 3, 3],
    build: (entities) => ({
      pages: [
        {
          id: 'page-home',
          name: 'Home',
          widgets: [
            w('weather', 0, 0, 6, 2, { entity_id: entities.weather || '' }),
            w('media', 0, 2, 6, 1, { entity_id: entities.media || '' }),
            w('quickAction', 6, 0, 3, 2, { entity_id: entities.quickActions?.[0]?.entity_id || '', mode: 'toggle' }),
            w('quickAction', 9, 0, 3, 2, { entity_id: entities.quickActions?.[1]?.entity_id || '', mode: 'brightness' }),
            w('camera', 6, 2, 6, 2, { entity_id: entities.camera || '' }),
          ],
        },
        { id: 'page-list', name: 'Liste', widgets: [w('shopping', 0, 0, GRID_COLS, GRID_ROWS, { entity_id: entities.shopping || '' })] },
      ],
    }),
  },
];

export function getLayoutPreset(id) {
  return LAYOUT_PRESETS.find((preset) => preset.id === id) || LAYOUT_PRESETS[0];
}

export function buildLayoutFromPreset(presetId, entities = {}) {
  const preset = getLayoutPreset(presetId);
  return preset.build(entities);
}
