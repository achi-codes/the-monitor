import embeddedHaConfig from '../../deploy/the-monitor-config.json';
import {
  SLOT_LIMITS,
  createDefaultLayout,
  createWidget,
  extractLegacyEntities,
  normalizeLayout,
  collectEntitiesFromLayout,
  fillEmptyWidgetEntities,
} from './layout';
import { buildLayoutFromPreset } from './layoutPresets';
import { MOCK_DEV_CONFIG } from './mockHass';
import { DEFAULT_APPEARANCE, normalizeAppearance } from './colorThemes';
import {
  configHasWidgetEntities,
  findWeatherEntityInRooms,
  layoutHasEntities,
  migrateConfigToRooms,
  normalizeRooms,
} from './rooms';

export const CONFIG_KEY = 'the-monitor-config';

export { SLOT_LIMITS };

export const DEFAULT_CONFIG = {
  rooms: normalizeRooms([{ name: 'Zuhause' }]),
  windows: [],
  presence: [],
  vacuum: { entity_id: '' },
  ev: {
    stateEntity: '',
    batteryEntity: '',
    powerEntity: '',
    label: 'E-Auto',
  },
  backgroundImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2940&auto=format&fit=crop',
  screensaver: {
    enabled: true,
    idleMinutes: 1,
    showDate: true,
    showWeather: true,
    style: 'classic',
  },
  appearance: { ...DEFAULT_APPEARANCE },
  hideHaSidebar: false,
  roomSidebar: false,
};

function syncLegacyEntityFields(config, roomIndex = 0) {
  const layout = config.rooms?.[roomIndex]?.layout || createDefaultLayout();
  const entities = collectEntitiesFromLayout(layout);
  return {
    ...config,
    weather: { entity_id: entities.weather || '' },
    mediaPlayer: { entity_id: entities.media || '' },
    camera: { entity_id: entities.camera || '' },
    shoppingList: { entity_id: entities.shopping || '' },
    alarm: { entity_id: entities.alarm || '' },
  };
}

function migrateLegacyToLayout(raw) {
  const entities = extractLegacyEntities(raw);
  const layout = buildLayoutFromPreset('classic', entities);
  return {
    layout,
    layoutPreset: 'classic',
  };
}

export function normalizeConfig(raw = {}) {
  const config = structuredClone(DEFAULT_CONFIG);

  if (raw.backgroundImage) config.backgroundImage = raw.backgroundImage;
  if (raw.vacuum?.entity_id) config.vacuum = { entity_id: raw.vacuum.entity_id };
  if (raw.ev) {
    config.ev = {
      stateEntity: raw.ev.stateEntity || raw.ev.state_entity || '',
      batteryEntity: raw.ev.batteryEntity || raw.ev.battery_entity || '',
      powerEntity: raw.ev.powerEntity || raw.ev.power_entity || '',
      label: raw.ev.label || DEFAULT_CONFIG.ev.label,
    };
  }
  if (Array.isArray(raw.windows)) {
    config.windows = raw.windows
      .filter((w) => w?.entity_id)
      .slice(0, SLOT_LIMITS.windows)
      .map((w) => ({ entity_id: w.entity_id, label: w.label || '' }));
  }

  if (Array.isArray(raw.presence)) {
    config.presence = raw.presence
      .filter((p) => p?.entity_id)
      .map((p) => ({ entity_id: p.entity_id, label: p.label || '' }));
  }

  if (raw.screensaver) {
    const idleMinutes = Number(raw.screensaver.idleMinutes);
    config.screensaver = {
      enabled: raw.screensaver.enabled !== false,
      idleMinutes: Number.isFinite(idleMinutes)
        ? Math.min(60, Math.max(1, Math.round(idleMinutes)))
        : DEFAULT_CONFIG.screensaver.idleMinutes,
      showDate: raw.screensaver.showDate !== false,
      showWeather: raw.screensaver.showWeather !== false,
      style: raw.screensaver.style === 'sexy' ? 'sexy' : 'classic',
    };
  }

  config.appearance = normalizeAppearance(raw.appearance || config.appearance);

  if (typeof raw.hideHaSidebar === 'boolean') {
    config.hideHaSidebar = raw.hideHaSidebar;
  }

  if (typeof raw.roomSidebar === 'boolean') {
    config.roomSidebar = raw.roomSidebar;
  }

  const hasLayout = raw.layout?.pages?.length;
  const hasLegacy = raw.quickActions?.length || raw.scenes?.length || raw.weather?.entity_id;

  if (hasLayout) {
    config.layout = normalizeLayout(raw.layout) || buildLayoutFromPreset('classic');
    config.layoutPreset = raw.layoutPreset || 'classic';
  } else if (hasLegacy) {
    const migrated = migrateLegacyToLayout(raw);
    config.layout = migrated.layout;
    config.layoutPreset = migrated.layoutPreset;
  } else if (!raw.rooms?.length) {
    config.layout = buildLayoutFromPreset(raw.layoutPreset || 'classic');
    config.layoutPreset = raw.layoutPreset || 'classic';
  }

  config.rooms = migrateConfigToRooms(config, raw);

  delete config.layout;
  delete config.layoutPreset;

  return syncLegacyEntityFields(config);
}

export function loadConfig() {
  try {
    const stored = localStorage.getItem(CONFIG_KEY);
    if (!stored) return normalizeConfig();
    return normalizeConfig(JSON.parse(stored));
  } catch {
    return normalizeConfig();
  }
}

export function loadDevConfig() {
  const stored = loadConfig();
  if (configHasWidgetEntities(stored)) {
    return ensureSankeyPage(ensureDevCameraWidgets(ensureDevAlarmWidget(stored)));
  }

  const mock = normalizeConfig(MOCK_DEV_CONFIG);
  if (!stored.rooms?.[0]?.layout?.pages?.length) return ensureSankeyPage(mock);

  const entities = extractLegacyEntities(mock);
  return ensureSankeyPage(ensureDevCameraWidgets(ensureDevAlarmWidget(normalizeConfig({
    ...stored,
    weather: mock.weather,
    mediaPlayer: mock.mediaPlayer,
    camera: mock.camera,
    shoppingList: mock.shoppingList,
    alarm: mock.alarm,
    cameras: mock.cameras,
    vacuum: stored.vacuum?.entity_id ? stored.vacuum : mock.vacuum,
    ev: stored.ev?.stateEntity ? stored.ev : mock.ev,
    presence: stored.presence?.length ? stored.presence : mock.presence,
    rooms: stored.rooms.map((room, index) => (
      index === 0
        ? {
          ...room,
          layout: {
            ...room.layout,
            pages: room.layout.pages.map((page) => ({
              ...page,
              widgets: fillEmptyWidgetEntities(page.widgets, entities),
            })),
          },
        }
        : room
    )),
  }))));
}

function ensureDevAlarmWidget(config) {
  const alarmEntityId = config.alarm?.entity_id
    || extractLegacyEntities(MOCK_DEV_CONFIG).alarm
    || 'alarm_control_panel.haus';

  const hasAlarmWidget = config.rooms?.some((room) => room.layout?.pages?.some((page) => (
    page.widgets?.some((widget) => widget.type === 'alarm')
  )));
  if (hasAlarmWidget) return config;

  const next = structuredClone(config);
  const room = next.rooms?.[0];
  const page = room?.layout?.pages?.[0];
  if (!page?.widgets?.length) return config;

  const popupWidgets = page.widgets.filter((widget) => widget.type === 'popup');
  const target = popupWidgets[popupWidgets.length - 1];
  if (!target) return config;

  const index = page.widgets.findIndex((widget) => widget.id === target.id);
  page.widgets[index] = createWidget('alarm', {
    x: target.x,
    y: target.y,
    w: target.w,
    h: target.h,
    entity_id: alarmEntityId,
    label: 'Alarmanlage',
    icon: 'mdi:shield-home',
  });

  return normalizeConfig(next);
}

function ensureDevCameraWidgets(config) {
  const mockCameras = extractLegacyEntities(MOCK_DEV_CONFIG).cameras;
  if (!mockCameras.length) return config;

  const next = structuredClone(config);
  let changed = false;

  next.rooms?.forEach((room) => {
    room.layout?.pages?.forEach((page) => {
      page.widgets = page.widgets.map((widget) => {
        if (widget.type !== 'camera') return widget;
        if (widget.entity_ids?.length > 1) return widget;
        changed = true;
        return {
          ...widget,
          entity_id: widget.entity_id || mockCameras[0],
          entity_ids: [...mockCameras],
        };
      });
    });
  });

  return changed ? normalizeConfig(next) : config;
}

function buildEnergyPageWidgets() {
  return [
    createWidget('sankey', { x: 0, y: 0, w: 8, h: 4, label: 'Energiefluss heute' }),
    createWidget('energyTile', { x: 8, y: 0, w: 4, h: 2, tileKind: 'inputs-outputs', label: 'Inputs / Outputs' }),
    createWidget('energyTile', { x: 8, y: 2, w: 4, h: 2, tileKind: 'ev-heatpump', label: 'E-Auto' }),
  ];
}

function ensureSankeyPageInLayout(layout) {
  const energyPage = layout?.pages?.find((page) => (
    page.id === 'page-energy' || page.widgets?.some((widget) => widget.type === 'sankey')
  ));

  if (!energyPage) {
    if (!layout?.pages?.length) return layout;
    return {
      ...layout,
      pages: [
        ...layout.pages,
        {
          id: 'page-energy',
          name: 'Energie',
          widgets: buildEnergyPageWidgets(),
        },
      ],
    };
  }

  const hasIoTile = energyPage.widgets?.some((w) => w.type === 'energyTile' && w.tileKind === 'inputs-outputs');
  const hasEvTile = energyPage.widgets?.some((w) => w.type === 'energyTile' && w.tileKind === 'ev-heatpump');
  const sankey = energyPage.widgets?.find((w) => w.type === 'sankey');

  if (hasIoTile && hasEvTile) return layout;

  const nextLayout = structuredClone(layout);
  const page = nextLayout.pages.find((p) => p.id === energyPage.id) || nextLayout.pages.find((p) => (
    p.widgets?.some((w) => w.type === 'sankey')
  ));
  if (!page) return layout;

  if (sankey && sankey.w >= 12) {
    const idx = page.widgets.findIndex((w) => w.id === sankey.id);
    page.widgets[idx] = { ...page.widgets[idx], w: 8, h: 4, x: 0, y: 0 };
  }

  if (!hasIoTile) {
    page.widgets.push(createWidget('energyTile', {
      x: 8, y: 0, w: 4, h: 2, tileKind: 'inputs-outputs', label: 'Inputs / Outputs',
    }));
  }
  if (!hasEvTile) {
    page.widgets.push(createWidget('energyTile', {
      x: 8, y: 2, w: 4, h: 2, tileKind: 'ev-heatpump', label: 'E-Auto',
    }));
  }

  return nextLayout;
}

function ensureSankeyPage(config) {
  let changed = false;
  const rooms = config.rooms.map((room) => {
    const nextLayout = ensureSankeyPageInLayout(room.layout);
    if (nextLayout !== room.layout) changed = true;
    return { ...room, layout: nextLayout };
  });

  if (!changed) return config;
  return normalizeConfig({ ...config, rooms });
}

export function saveConfig(config) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

export function exportConfig(config) {
  return JSON.stringify(config, null, 2);
}

export function importConfig(json) {
  const parsed = JSON.parse(json);
  return normalizeConfig(parsed);
}

export function hasConfiguredEntities(config) {
  return Boolean(
    layoutHasEntities(config.rooms)
      || config.weather?.entity_id
      || config.mediaPlayer?.entity_id
      || config.shoppingList?.entity_id
      || config.vacuum?.entity_id
  );
}

export function getWeatherEntityId(config) {
  if (config.weather?.entity_id) return config.weather.entity_id;
  return findWeatherEntityInRooms(config.rooms);
}

export function mergeInitialConfig(yamlConfig = {}, { embedded = false } = {}) {
  const stored = loadConfig();
  const yaml = normalizeConfig(yamlConfig);
  const yamlHasEntities = hasConfiguredEntities(yaml);
  const storedHasData = Boolean(localStorage.getItem(CONFIG_KEY));

  if (embedded) {
    if (storedHasData) {
      return normalizeConfig({ ...embeddedHaConfig, ...yaml, ...stored });
    }
    if (yamlHasEntities) {
      return normalizeConfig({ ...embeddedHaConfig, ...stored, ...yaml });
    }
    return normalizeConfig({ ...embeddedHaConfig, ...stored, ...yaml });
  }

  if (yamlHasEntities) {
    return normalizeConfig({ ...embeddedHaConfig, ...stored, ...yaml });
  }

  return normalizeConfig({
    ...stored,
    backgroundImage: yaml.backgroundImage || stored.backgroundImage,
  });
}
