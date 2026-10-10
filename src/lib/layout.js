import { ENERGY_TILE_KINDS } from './energySampleData';
import { normalizeEnergyDeviceImages } from './energyDeviceImages';
import { sanitizeCardConfig } from './haCards';
import { normalizeSensorHistoryHours } from './sensorHistory';
import { normalizeSensorChart } from './sensorStatistics';
import { normalizeVacuumZones } from './vacuumStatus';

export const GRID_COLS = 12;
export const GRID_ROWS = 4;

export const SLOT_LIMITS = {
  presence: 6,
  windows: 8,
  popupEntities: 12,
  coverPopupEntities: 6,
  sceneEntities: 4,
  cameraEntities: 3,
  sensorEntities: 4,
  contactStatusEntities: 8,
  roomEntities: 16,
  widgetsPerPage: 24,
  pages: 6,
};

export const WIDGET_TYPES = {
  weather: { label: 'Wetter', icon: 'mdi:weather-partly-cloudy', domains: ['weather'] },
  media: { label: 'Medien', icon: 'mdi:play-circle', domains: ['media_player'] },
  camera: { label: 'Kamera', icon: 'mdi:camera', domains: ['camera'] },
  shopping: { label: 'Einkaufsliste', icon: 'mdi:cart', domains: ['todo'] },
  quickAction: { label: 'Entität', icon: 'mdi:flash', domains: ['light', 'switch', 'fan', 'input_boolean', 'cover', 'lock'] },
  alarm: { label: 'Alarmanlage', icon: 'mdi:shield-home', domains: ['alarm_control_panel'] },
  cover: { label: 'Rolladen', icon: 'mdi:window-shutter', domains: ['cover'] },
  coverPopup: { label: 'Rolladen-Gruppe', icon: 'mdi:window-shutter-open', domains: ['cover'] },
  popup: { label: 'Entitäten', icon: 'mdi:layers', domains: ['light', 'switch', 'fan', 'input_boolean', 'cover', 'lock', 'climate'] },
  scene: { label: 'Szene', icon: 'mdi:palette', domains: ['scene', 'script'] },
  sensor: { label: 'Sensor', icon: 'mdi:gauge', domains: ['sensor', 'binary_sensor'] },
  sensorStatus: { label: 'Sensor Status', icon: 'mdi:door-open', domains: ['binary_sensor', 'cover'] },
  room: {
    label: 'Raum',
    icon: 'mdi:sofa',
    domains: ['light', 'switch', 'fan', 'input_boolean', 'cover', 'climate', 'media_player', 'lock', 'sensor', 'binary_sensor', 'scene', 'script'],
  },
  sankey: { label: 'Energiefluss', icon: 'mdi:chart-sankey', domains: [] },
  energyTile: { label: 'Energie-Kachel', icon: 'mdi:lightning-bolt', domains: [] },
  ev: { label: 'E-Auto', icon: 'mdi:car-electric', domains: [] },
  vacuum: { label: 'Saugroboter', icon: 'mdi:robot-vacuum', domains: ['vacuum'] },
  haCard: { label: 'HA-Karte', icon: 'mdi:card-bulleted', domains: [] },
};

export const SIZE_PRESETS = {
  S: { w: 2, h: 1, label: 'S' },
  M: { w: 3, h: 2, label: 'M' },
  L: { w: 4, h: 2, label: 'L' },
  XL: { w: 6, h: 2, label: 'XL' },
  tall: { w: 4, h: 3, label: 'Hoch' },
  wide: { w: 6, h: 1, label: 'Breit' },
  full: { w: GRID_COLS, h: GRID_ROWS, label: 'Voll' },
};

const DEFAULT_SIZE_BY_TYPE = {
  weather: 'XL',
  media: 'wide',
  camera: 'L',
  shopping: 'full',
  quickAction: 'M',
  alarm: 'M',
  cover: 'M',
  coverPopup: 'XL',
  popup: 'M',
  scene: 'S',
  sensor: 'M',
  sensorStatus: 'M',
  room: 'M',
  sankey: 'tall',
  energyTile: 'M',
  ev: 'L',
  vacuum: 'L',
  haCard: 'XL',
};

let widgetCounter = 0;

export function createWidgetId() {
  widgetCounter += 1;
  return `w-${Date.now().toString(36)}-${widgetCounter}`;
}

export function createWidget(type, overrides = {}) {
  const presetKey = DEFAULT_SIZE_BY_TYPE[type] || 'M';
  const size = SIZE_PRESETS[presetKey] || SIZE_PRESETS.M;
  return {
    id: createWidgetId(),
    type,
    x: 0,
    y: 0,
    w: size.w,
    h: size.h,
    entity_id: '',
    entity_ids: [],
    label: '',
    icon: '',
    mode: type === 'quickAction' ? 'toggle' : undefined,
    ...(type === 'energyTile' ? { tileKind: 'inputs-outputs' } : {}),
    ...(type === 'haCard' ? { card: null } : {}),
    ...overrides,
  };
}

export function clampWidget(widget, cols = GRID_COLS, rows = GRID_ROWS) {
  const w = Math.min(cols, Math.max(1, widget.w));
  const h = Math.min(rows, Math.max(1, widget.h));
  const x = Math.min(cols - w, Math.max(0, widget.x));
  const y = Math.min(rows - h, Math.max(0, widget.y));
  return { ...widget, x, y, w, h };
}

export function widgetsOverlap(a, b) {
  return a.x < b.x + b.w
    && a.x + a.w > b.x
    && a.y < b.y + b.h
    && a.y + a.h > b.y;
}

export function findCollisions(widgets, candidate, ignoreId = null) {
  return widgets.filter((w) => w.id !== ignoreId && widgetsOverlap(w, candidate));
}

export function isGridCellOccupied(widgets, col, row) {
  return widgets.some((w) => col >= w.x && col < w.x + w.w && row >= w.y && row < w.y + w.h);
}

export function findFreePosition(widgets, size, cols = GRID_COLS, rows = GRID_ROWS) {
  for (let y = 0; y <= rows - size.h; y += 1) {
    for (let x = 0; x <= cols - size.w; x += 1) {
      const candidate = { x, y, w: size.w, h: size.h };
      if (findCollisions(widgets, candidate).length === 0) {
        return { x, y };
      }
    }
  }
  return { x: 0, y: 0 };
}

export function getWidgetLabel(widget) {
  if (widget.label) return widget.label;
  return WIDGET_TYPES[widget.type]?.label || widget.type;
}

export function getWidgetEntities(widget) {
  if (widget.type === 'popup' || widget.type === 'coverPopup') return widget.entity_ids || [];
  if (widget.type === 'camera') return resolveCameraEntityIds(widget);
  if (widget.type === 'sensor' || widget.type === 'scene') {
    if (widget.entity_ids?.length) return widget.entity_ids;
    return widget.entity_id ? [widget.entity_id] : [];
  }
  return widget.entity_id ? [widget.entity_id] : [];
}

export function getEnabledEntityIds(widget) {
  const ids = widget.type === 'popup' ? (widget.entity_ids || []) : getWidgetEntities(widget);
  const disabled = new Set(widget.disabled_entity_ids || []);
  return ids.filter((id) => !disabled.has(id));
}

export function isEntityDisabledInWidget(widget, entityId) {
  return (widget.disabled_entity_ids || []).includes(entityId);
}

export function resolveCameraEntityIds(widget) {
  const ids = (widget?.entity_ids || []).filter(Boolean).slice(0, SLOT_LIMITS.cameraEntities);
  if (ids.length) return ids;
  if (widget?.entity_id) return [widget.entity_id];
  return [];
}

export function getCameraShortLabel(name, index) {
  if (!name) return `K${index + 1}`;
  const firstWord = name.trim().split(/\s+/)[0];
  if (firstWord.length <= 8) return firstWord;
  return firstWord.slice(0, 7);
}

export function widgetHasEntities(widget) {
  return getWidgetEntities(widget).length > 0;
}

export function createPage(name = 'Seite', widgets = []) {
  return {
    id: `page-${Date.now().toString(36)}`,
    name,
    widgets: widgets.map((w) => clampWidget({ ...w })),
  };
}

export function createDefaultLayout() {
  return { pages: [createPage('Home', [])] };
}

export function extractLegacyEntities(config) {
  return {
    weather: config.weather?.entity_id || '',
    media: config.mediaPlayer?.entity_id || '',
    camera: config.camera?.entity_id || '',
    cameras: Array.isArray(config.cameras)
      ? config.cameras.filter(Boolean).slice(0, SLOT_LIMITS.cameraEntities)
      : (config.camera?.entity_id ? [config.camera.entity_id] : []),
    shopping: config.shoppingList?.entity_id || '',
    alarm: config.alarm?.entity_id || '',
    quickActions: (config.quickActions || []).map((slot, i) => ({
      entity_id: slot?.entity_id || '',
      entity_ids: slot?.entity_ids || (slot?.entity_id && i >= 2 ? [slot.entity_id] : []),
      label: slot?.label || '',
      icon: slot?.icon || '',
      mode: i === 1 ? 'brightness' : 'toggle',
      isPopup: Boolean(slot?.entity_ids?.length) || i >= 2,
    })),
    scenes: (config.scenes || []).map((slot) => ({
      entity_id: slot?.entity_id || '',
      label: slot?.label || '',
      icon: slot?.icon || '',
    })),
  };
}

export function mergeEntitiesIntoWidgets(widgets, entities) {
  let qaIndex = 0;
  let sceneIndex = 0;
  const toggleActions = entities.quickActions.filter((s) => !s.isPopup);

  return widgets.map((widget) => {
    const next = { ...widget };
    if (widget.type === 'weather' && entities.weather) next.entity_id = entities.weather;
    if (widget.type === 'media' && entities.media) next.entity_id = entities.media;
    if (widget.type === 'camera' && entities.camera) {
      next.entity_id = entities.camera;
      if (!next.entity_ids?.length && entities.cameras?.length) {
        next.entity_ids = [...entities.cameras];
      }
    }
    if (widget.type === 'shopping' && entities.shopping) next.entity_id = entities.shopping;
    if (widget.type === 'alarm' && entities.alarm) next.entity_id = entities.alarm;

    if (widget.type === 'quickAction') {
      const slot = toggleActions[qaIndex];
      qaIndex += 1;
      if (slot) {
        next.entity_id = slot.entity_id || '';
        next.label = slot.label || next.label;
        next.icon = slot.icon || next.icon;
        next.mode = slot.mode || next.mode;
      }
    }

    if (widget.type === 'popup') {
      const popupSlots = entities.quickActions.filter((s) => s.isPopup || (s.entity_ids && s.entity_ids.length));
      const popupIndex = widgets.slice(0, widgets.indexOf(widget)).filter((w) => w.type === 'popup').length;
      const popupSlot = popupSlots[popupIndex];
      if (popupSlot) {
        next.entity_ids = [...(popupSlot.entity_ids || [])];
        next.label = popupSlot.label || next.label;
        next.icon = popupSlot.icon || next.icon;
      }
    }

    if (widget.type === 'scene') {
      const slot = entities.scenes[sceneIndex];
      sceneIndex += 1;
      if (slot) {
        next.entity_id = slot.entity_id || '';
        next.label = slot.label || next.label;
        next.icon = slot.icon || next.icon;
      }
    }

    return next;
  });
}

export function layoutHasWidgetEntities(layout) {
  return layout?.pages?.some((page) => page.widgets?.some((w) => (
    w.entity_id || w.entity_ids?.length
  )));
}

export function fillEmptyWidgetEntities(widgets, entities) {
  let qaIndex = 0;
  let sceneIndex = 0;
  const toggleActions = entities.quickActions.filter((s) => !s.isPopup);

  return widgets.map((widget) => {
    const next = { ...widget };

    if (widget.type === 'weather' && !widget.entity_id && entities.weather) {
      next.entity_id = entities.weather;
    }
    if (widget.type === 'media' && !widget.entity_id && entities.media) {
      next.entity_id = entities.media;
    }
    if (widget.type === 'camera' && !widget.entity_id && entities.camera) {
      next.entity_id = entities.camera;
      if (!widget.entity_ids?.length && entities.cameras?.length) {
        next.entity_ids = [...entities.cameras];
      }
    }
    if (widget.type === 'shopping' && !widget.entity_id && entities.shopping) {
      next.entity_id = entities.shopping;
    }
    if (widget.type === 'alarm' && !widget.entity_id && entities.alarm) {
      next.entity_id = entities.alarm;
    }

    if (widget.type === 'quickAction' && !widget.entity_id) {
      const slot = toggleActions[qaIndex];
      qaIndex += 1;
      if (slot?.entity_id) {
        next.entity_id = slot.entity_id;
        next.label = slot.label || next.label;
        next.icon = slot.icon || next.icon;
        next.mode = slot.mode || next.mode;
      }
    } else if (widget.type === 'quickAction') {
      qaIndex += 1;
    }

    if (widget.type === 'popup' && !widget.entity_ids?.length) {
      const popupSlots = entities.quickActions.filter((s) => s.isPopup || (s.entity_ids && s.entity_ids.length));
      const popupIndex = widgets.slice(0, widgets.indexOf(widget)).filter((w) => w.type === 'popup').length;
      const popupSlot = popupSlots[popupIndex];
      if (popupSlot?.entity_ids?.length) {
        next.entity_ids = [...popupSlot.entity_ids];
        next.label = popupSlot.label || next.label;
        next.icon = popupSlot.icon || next.icon;
      }
    }

    if (widget.type === 'scene' && !widget.entity_id) {
      const slot = entities.scenes[sceneIndex];
      sceneIndex += 1;
      if (slot?.entity_id) {
        next.entity_id = slot.entity_id;
        next.label = slot.label || next.label;
        next.icon = slot.icon || next.icon;
      }
    } else if (widget.type === 'scene') {
      sceneIndex += 1;
    }

    return next;
  });
}

export function collectEntitiesFromLayout(layout) {
  const entities = {
    weather: '',
    media: '',
    camera: '',
    shopping: '',
    alarm: '',
    quickActions: [],
    scenes: [],
  };

  layout.pages.forEach((page) => {
    page.widgets.forEach((widget) => {
      if (widget.type === 'weather' && widget.entity_id) entities.weather = widget.entity_id;
      if (widget.type === 'media' && widget.entity_id) entities.media = widget.entity_id;
      if (widget.type === 'camera' && widget.entity_id) entities.camera = widget.entity_id;
      if (widget.type === 'shopping' && widget.entity_id) entities.shopping = widget.entity_id;
      if (widget.type === 'alarm' && widget.entity_id) entities.alarm = widget.entity_id;
      if (widget.type === 'quickAction') {
        entities.quickActions.push({
          entity_id: widget.entity_id || '',
          label: widget.label || '',
          icon: widget.icon || '',
          mode: widget.mode,
        });
      }
      if (widget.type === 'popup') {
        entities.quickActions.push({
          entity_ids: widget.entity_ids || [],
          label: widget.label || '',
          icon: widget.icon || '',
          isPopup: true,
        });
      }
      if (widget.type === 'scene') {
        entities.scenes.push({
          entity_id: widget.entity_id || '',
          label: widget.label || '',
          icon: widget.icon || '',
        });
      }
    });
  });

  return entities;
}

export function normalizeLayout(rawLayout, legacyConfig = null) {
  if (!rawLayout?.pages?.length) {
    return null;
  }

  const pages = rawLayout.pages.slice(0, SLOT_LIMITS.pages).map((page, pageIndex) => ({
    id: page.id || `page-${pageIndex}`,
    name: page.name || `Seite ${pageIndex + 1}`,
    widgets: (page.widgets || [])
      .slice(0, SLOT_LIMITS.widgetsPerPage)
      .map((widget) => {
        const normalized = {
          id: widget.id || createWidgetId(),
          type: widget.type,
          x: Number(widget.x) || 0,
          y: Number(widget.y) || 0,
          w: Number(widget.w) || 2,
          h: Number(widget.h) || 1,
          entity_id: widget.entity_id || '',
          entity_ids: Array.isArray(widget.entity_ids)
            ? widget.entity_ids.filter(Boolean).slice(
              0,
              widget.type === 'coverPopup'
                ? SLOT_LIMITS.coverPopupEntities
                : widget.type === 'sensor'
                  ? SLOT_LIMITS.sensorEntities
                  : widget.type === 'sensorStatus'
                    ? SLOT_LIMITS.contactStatusEntities
                    : widget.type === 'scene'
                      ? SLOT_LIMITS.sceneEntities
                      : widget.type === 'room'
                        ? SLOT_LIMITS.roomEntities
                        : SLOT_LIMITS.popupEntities,
            )
            : [],
          disabled_entity_ids: (widget.type === 'popup' || widget.type === 'room') && Array.isArray(widget.disabled_entity_ids)
            ? widget.disabled_entity_ids.filter(Boolean)
            : [],
          label: widget.label || '',
          icon: widget.icon || '',
          mode: widget.mode === 'brightness' ? 'brightness' : 'toggle',
        };
        if (widget.type === 'energyTile') {
          normalized.tileKind = Object.hasOwn(ENERGY_TILE_KINDS, widget.tileKind)
            ? widget.tileKind
            : 'inputs-outputs';
          if (normalized.tileKind === 'ev-heatpump') {
            normalized.deviceImages = normalizeEnergyDeviceImages(widget.deviceImages);
          }
        }
        if (widget.type === 'sensor') {
          normalized.showHistory = Boolean(widget.showHistory);
          normalized.historyHours = normalizeSensorHistoryHours(widget.historyHours);
          if (widget.chart && typeof widget.chart === 'object') normalized.chart = normalizeSensorChart(widget.chart);
        }
        if (widget.type === 'sensorStatus' && typeof widget.contact_art === 'string' && widget.contact_art) {
          normalized.contact_art = widget.contact_art;
        }
        if (widget.type === 'vacuum') {
          if (typeof widget.battery_entity === 'string') normalized.battery_entity = widget.battery_entity;
          if (typeof widget.remaining_entity === 'string') normalized.remaining_entity = widget.remaining_entity;
          normalized.zones = normalizeVacuumZones(widget.zones);
        }
        if (widget.type === 'room') {
          normalized.area_id = typeof widget.area_id === 'string' ? widget.area_id : '';
          normalized.area_name = typeof widget.area_name === 'string' ? widget.area_name : '';
          if (typeof widget.accent === 'string' && widget.accent) normalized.accent = widget.accent;
        }
        if (widget.type === 'weather' && typeof widget.location === 'string') {
          normalized.location = widget.location;
        }
        if (widget.type === 'haCard') {
          normalized.card = sanitizeCardConfig(widget.card);
        }
        if (widget.type === 'scene' && widget.scene_art && typeof widget.scene_art === 'object') {
          normalized.scene_art = Object.fromEntries(
            Object.entries(widget.scene_art).filter(([, key]) => typeof key === 'string' && key),
          );
        }
        return clampWidget(normalized);
      }),
  }));

  if (legacyConfig) {
    const entities = extractLegacyEntities(legacyConfig);
    pages.forEach((page) => {
      page.widgets = mergeEntitiesIntoWidgets(page.widgets, entities);
    });
  }

  return { pages };
}

export function pixelToGrid(rect, clientX, clientY, cols = GRID_COLS, rows = GRID_ROWS) {
  const x = Math.floor(((clientX - rect.left) / rect.width) * cols);
  const y = Math.floor(((clientY - rect.top) / rect.height) * rows);
  return {
    x: Math.min(cols - 1, Math.max(0, x)),
    y: Math.min(rows - 1, Math.max(0, y)),
  };
}

export function getGridMetrics(rect, cols = GRID_COLS, rows = GRID_ROWS, gap = 0) {
  const cellW = (rect.width - gap * (cols - 1)) / cols;
  const cellH = (rect.height - gap * (rows - 1)) / rows;
  return { cellW, cellH, gap, cols, rows };
}

export function widgetToRect(widget, metrics) {
  const { cellW, cellH, gap } = metrics;
  return {
    left: widget.x * (cellW + gap),
    top: widget.y * (cellH + gap),
    width: widget.w * cellW + (widget.w - 1) * gap,
    height: widget.h * cellH + (widget.h - 1) * gap,
  };
}

export function pointerDeltaToGridDelta(dx, dy, metrics) {
  const stepX = metrics.cellW + metrics.gap;
  const stepY = metrics.cellH + metrics.gap;
  return {
    dx: Math.round(dx / stepX),
    dy: Math.round(dy / stepY),
    offsetX: dx - Math.round(dx / stepX) * stepX,
    offsetY: dy - Math.round(dy / stepY) * stepY,
  };
}

/** @typedef {'n' | 's' | 'e' | 'w' | 'se'} ResizeEdge */

export function computeResizeFromEdge(edge, origin, { dx, dy }) {
  const { x, y, w, h } = origin;
  switch (edge) {
    case 'n':
      return { x, y: y + dy, w, h: h - dy };
    case 's':
      return { x, y, w, h: h + dy };
    case 'w':
      return { x: x + dx, y, w: w - dx, h };
    case 'e':
      return { x, y, w: w + dx, h };
    case 'se':
      return { x, y, w: w + dx, h: h + dy };
    default:
      return { x, y, w, h };
  }
}

export function resizeEdgeDelta(edge, pointerDelta) {
  const { dx, dy, offsetX, offsetY } = pointerDelta;
  switch (edge) {
    case 'n':
    case 's':
      return { dx: 0, dy, offsetX: 0, offsetY };
    case 'e':
    case 'w':
      return { dx, dy: 0, offsetX, offsetY: 0 };
    case 'se':
      return { dx, dy, offsetX, offsetY };
    default:
      return { dx: 0, dy: 0, offsetX: 0, offsetY: 0 };
  }
}
