import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import {
  loadConfig,
  saveConfig,
  normalizeConfig,
  exportConfig,
  importConfig,
  SLOT_LIMITS,
  DEFAULT_CONFIG,
} from '../lib/config';
import {
  clampWidget,
  createWidget,
  findCollisions,
  findFreePosition,
  collectEntitiesFromLayout,
  createPage,
} from '../lib/layout';
import { buildLayoutFromPreset } from '../lib/layoutPresets';
import { normalizeAppearance } from '../lib/colorThemes';
import {
  createRoom,
  getRoomById,
  loadActiveRoomId,
  ROOM_LIMIT,
  saveActiveRoomId,
} from '../lib/rooms';

const ConfigContext = createContext(null);

function syncDerivedFields(config, roomIndex = 0) {
  const layout = config.rooms?.[roomIndex]?.layout;
  const entities = collectEntitiesFromLayout(layout);
  return {
    ...config,
    weather: { entity_id: entities.weather || '' },
    mediaPlayer: { entity_id: entities.media || '' },
    camera: { entity_id: entities.camera || '' },
    shoppingList: { entity_id: entities.shopping || '' },
  };
}

function findRoomIndex(rooms, roomId) {
  return rooms.findIndex((room) => room.id === roomId);
}

function updateActiveRoomLayout(prev, activeRoomId, pageIndex, updater) {
  const roomIndex = findRoomIndex(prev.rooms, activeRoomId);
  if (roomIndex < 0) return prev;
  const next = structuredClone(prev);
  const room = next.rooms[roomIndex];
  if (!room.layout?.pages?.[pageIndex]) return prev;
  room.layout.pages[pageIndex] = updater(room.layout.pages[pageIndex]);
  return syncDerivedFields(next, roomIndex);
}

export function ConfigProvider({ initialConfig, onConfigSaved, children }) {
  const [config, setConfigState] = useState(() => {
    if (initialConfig) return initialConfig;
    return normalizeConfig(loadConfig());
  });

  const [activeRoomId, setActiveRoomIdState] = useState(() => loadActiveRoomId(config.rooms));

  const activeRoom = useMemo(
    () => getRoomById(config.rooms, activeRoomId),
    [config.rooms, activeRoomId],
  );

  useEffect(() => {
    if (!config.rooms.some((room) => room.id === activeRoomId)) {
      const fallbackId = config.rooms[0]?.id || '';
      setActiveRoomIdState(fallbackId);
      saveActiveRoomId(fallbackId);
    }
  }, [config.rooms, activeRoomId]);

  const setConfig = useCallback((next) => {
    setConfigState((prev) => {
      const raw = typeof next === 'function' ? next(prev) : next;
      const normalized = normalizeConfig(raw);
      saveConfig(normalized);
      onConfigSaved?.(normalized);
      return normalized;
    });
  }, [onConfigSaved]);

  const setActiveRoomId = useCallback((roomId) => {
    setActiveRoomIdState(roomId);
    saveActiveRoomId(roomId);
  }, []);

  const updateEv = useCallback((updates) => {
    setConfig((prev) => ({
      ...prev,
      ev: { ...DEFAULT_CONFIG.ev, ...prev.ev, ...updates },
    }));
  }, [setConfig]);

  const setSingleEntity = useCallback((section, entityId) => {
    setConfig((prev) => ({
      ...prev,
      [section]: { entity_id: entityId },
    }));
  }, [setConfig]);

  const addPresence = useCallback((entityId, label = '') => {
    setConfig((prev) => {
      if (prev.presence.some((p) => p.entity_id === entityId)) return prev;
      return { ...prev, presence: [...prev.presence, { entity_id: entityId, label }] };
    });
  }, [setConfig]);

  const removePresence = useCallback((entityId) => {
    setConfig((prev) => ({
      ...prev,
      presence: prev.presence.filter((p) => p.entity_id !== entityId),
    }));
  }, [setConfig]);

  const addWindow = useCallback((entityId, label = '') => {
    setConfig((prev) => {
      if (prev.windows.some((w) => w.entity_id === entityId)) return prev;
      if (prev.windows.length >= SLOT_LIMITS.windows) return prev;
      return { ...prev, windows: [...prev.windows, { entity_id: entityId, label }] };
    });
  }, [setConfig]);

  const removeWindow = useCallback((entityId) => {
    setConfig((prev) => ({
      ...prev,
      windows: prev.windows.filter((w) => w.entity_id !== entityId),
    }));
  }, [setConfig]);

  const addRoom = useCallback((name) => {
    setConfig((prev) => {
      if (prev.rooms.length >= ROOM_LIMIT) return prev;
      const room = createRoom(name);
      return { ...prev, rooms: [...prev.rooms, room] };
    });
  }, [setConfig]);

  const addRoomFromHaArea = useCallback((area) => {
    if (!area?.area_id) return;
    setConfig((prev) => {
      if (prev.rooms.length >= ROOM_LIMIT) return prev;
      if (prev.rooms.some((room) => room.areaId === area.area_id)) return prev;
      const room = createRoom(area.name, { areaId: area.area_id });
      return { ...prev, rooms: [...prev.rooms, room] };
    });
  }, [setConfig]);

  const removeRoom = useCallback((roomId) => {
    setConfig((prev) => {
      if (prev.rooms.length <= 1) return prev;
      const nextRooms = prev.rooms.filter((room) => room.id !== roomId);
      if (activeRoomId === roomId) {
        const fallbackId = nextRooms[0]?.id || '';
        setActiveRoomIdState(fallbackId);
        saveActiveRoomId(fallbackId);
      }
      return { ...prev, rooms: nextRooms };
    });
  }, [activeRoomId, setConfig]);

  const renameRoom = useCallback((roomId, name) => {
    setConfig((prev) => ({
      ...prev,
      rooms: prev.rooms.map((room) => (
        room.id === roomId ? { ...room, name: name.trim() || room.name } : room
      )),
    }));
  }, [setConfig]);

  const updateWidget = useCallback((pageIndex, widgetId, patch) => {
    setConfig((prev) => updateActiveRoomLayout(prev, activeRoomId, pageIndex, (page) => ({
      ...page,
      widgets: page.widgets.map((w) => (w.id === widgetId ? { ...w, ...patch } : w)),
    })));
  }, [activeRoomId, setConfig]);

  const moveWidget = useCallback((pageIndex, widgetId, position) => {
    setConfig((prev) => updateActiveRoomLayout(prev, activeRoomId, pageIndex, (page) => {
      const widgets = page.widgets.map((w) => {
        if (w.id !== widgetId) return w;
        const next = clampWidget({ ...w, ...position });
        if (findCollisions(page.widgets, next, widgetId).length) return w;
        return next;
      });
      return { ...page, widgets };
    }));
  }, [activeRoomId, setConfig]);

  const resizeWidget = useCallback((pageIndex, widgetId, size) => {
    setConfig((prev) => updateActiveRoomLayout(prev, activeRoomId, pageIndex, (page) => {
      const widgets = page.widgets.map((w) => {
        if (w.id !== widgetId) return w;
        const next = clampWidget({ ...w, ...size });
        if (findCollisions(page.widgets, next, widgetId).length) return w;
        return next;
      });
      return { ...page, widgets };
    }));
  }, [activeRoomId, setConfig]);

  const applyWidgetSize = useCallback((pageIndex, widgetId, preset) => {
    setConfig((prev) => updateActiveRoomLayout(prev, activeRoomId, pageIndex, (page) => {
      const widgets = page.widgets.map((w) => {
        if (w.id !== widgetId) return w;
        const next = clampWidget({ ...w, w: preset.w, h: preset.h });
        if (findCollisions(page.widgets, next, widgetId).length) return w;
        return next;
      });
      return { ...page, widgets };
    }));
  }, [activeRoomId, setConfig]);

  const addWidget = useCallback((pageIndex, type) => {
    setConfig((prev) => updateActiveRoomLayout(prev, activeRoomId, pageIndex, (page) => {
      const widget = createWidget(type);
      const pos = findFreePosition(page.widgets, { w: widget.w, h: widget.h });
      return {
        ...page,
        widgets: [...page.widgets, clampWidget({ ...widget, ...pos })],
      };
    }));
  }, [activeRoomId, setConfig]);

  const addWidgetAt = useCallback((pageIndex, type, position) => {
    const widget = createWidget(type);
    const placed = clampWidget({ ...widget, ...position });
    setConfig((prev) => updateActiveRoomLayout(prev, activeRoomId, pageIndex, (page) => {
      if (page.widgets.length >= SLOT_LIMITS.widgetsPerPage) return page;
      if (findCollisions(page.widgets, placed).length) return page;
      return { ...page, widgets: [...page.widgets, placed] };
    }));
    return placed.id;
  }, [activeRoomId, setConfig]);

  const removeWidget = useCallback((pageIndex, widgetId) => {
    setConfig((prev) => updateActiveRoomLayout(prev, activeRoomId, pageIndex, (page) => ({
      ...page,
      widgets: page.widgets.filter((w) => w.id !== widgetId),
    })));
  }, [activeRoomId, setConfig]);

  const applyLayoutPreset = useCallback((presetId) => {
    setConfig((prev) => {
      const roomIndex = findRoomIndex(prev.rooms, activeRoomId);
      if (roomIndex < 0) return prev;
      const room = prev.rooms[roomIndex];
      const entities = collectEntitiesFromLayout(room.layout);
      const layout = buildLayoutFromPreset(presetId, entities);
      const next = structuredClone(prev);
      next.rooms[roomIndex] = { ...room, layout, layoutPreset: presetId };
      return syncDerivedFields(next, roomIndex);
    });
  }, [activeRoomId, setConfig]);

  const addLayoutPage = useCallback(() => {
    setConfig((prev) => {
      const roomIndex = findRoomIndex(prev.rooms, activeRoomId);
      if (roomIndex < 0) return prev;
      const room = prev.rooms[roomIndex];
      if (room.layout.pages.length >= SLOT_LIMITS.pages) return prev;
      const next = structuredClone(prev);
      next.rooms[roomIndex] = {
        ...room,
        layout: {
          ...room.layout,
          pages: [...room.layout.pages, createPage(`Seite ${room.layout.pages.length + 1}`)],
        },
      };
      return next;
    });
  }, [activeRoomId, setConfig]);

  const removeLayoutPage = useCallback((pageIndex) => {
    setConfig((prev) => {
      const roomIndex = findRoomIndex(prev.rooms, activeRoomId);
      if (roomIndex < 0) return prev;
      const room = prev.rooms[roomIndex];
      if (room.layout.pages.length <= 1) return prev;
      const next = structuredClone(prev);
      next.rooms[roomIndex] = {
        ...room,
        layout: {
          ...room.layout,
          pages: room.layout.pages.filter((_, index) => index !== pageIndex),
        },
      };
      return syncDerivedFields(next, roomIndex);
    });
  }, [activeRoomId, setConfig]);

  const moveLayoutPage = useCallback((fromIndex, toIndex) => {
    setConfig((prev) => {
      const roomIndex = findRoomIndex(prev.rooms, activeRoomId);
      if (roomIndex < 0) return prev;
      const room = prev.rooms[roomIndex];
      const { pages } = room.layout;
      if (fromIndex === toIndex) return prev;
      if (fromIndex < 0 || fromIndex >= pages.length || toIndex < 0 || toIndex >= pages.length) {
        return prev;
      }
      const nextPages = [...pages];
      const [page] = nextPages.splice(fromIndex, 1);
      nextPages.splice(toIndex, 0, page);
      const next = structuredClone(prev);
      next.rooms[roomIndex] = {
        ...room,
        layout: { ...room.layout, pages: nextPages },
      };
      return next;
    });
  }, [activeRoomId, setConfig]);

  const renameLayoutPage = useCallback((pageIndex, name) => {
    setConfig((prev) => updateActiveRoomLayout(prev, activeRoomId, pageIndex, (page) => ({
      ...page,
      name: name.trim() || page.name,
    })));
  }, [activeRoomId, setConfig]);

  const updateScreensaver = useCallback((updates) => {
    setConfig((prev) => ({
      ...prev,
      screensaver: { ...prev.screensaver, ...updates },
    }));
  }, [setConfig]);

  const updateAppearance = useCallback((updates) => {
    setConfig((prev) => ({
      ...prev,
      appearance: normalizeAppearance({ ...prev.appearance, ...updates }),
    }));
  }, [setConfig]);

  const updateDisplay = useCallback((updates) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  }, [setConfig]);

  const exportToJson = useCallback(() => exportConfig(config), [config]);

  const importFromJson = useCallback((json) => {
    try {
      const parsed = importConfig(json);
      setConfig(parsed);
      const nextActiveRoomId = loadActiveRoomId(parsed.rooms);
      setActiveRoomIdState(nextActiveRoomId);
      saveActiveRoomId(nextActiveRoomId);
      return true;
    } catch {
      return false;
    }
  }, [setConfig]);

  return (
    <ConfigContext.Provider
      value={{
        config,
        activeRoom,
        activeRoomId,
        setActiveRoomId,
        setConfig,
        setSingleEntity,
        updateEv,
        addPresence,
        removeWindow,
        addWindow,
        removePresence,
        addRoom,
        addRoomFromHaArea,
        removeRoom,
        renameRoom,
        updateWidget,
        moveWidget,
        resizeWidget,
        applyWidgetSize,
        addWidget,
        addWidgetAt,
        removeWidget,
        applyLayoutPreset,
        addLayoutPage,
        removeLayoutPage,
        moveLayoutPage,
        renameLayoutPage,
        updateScreensaver,
        updateAppearance,
        updateDisplay,
        exportToJson,
        importFromJson,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error('useConfig must be used within ConfigProvider');
  return ctx;
}
