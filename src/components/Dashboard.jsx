import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Settings, Monitor, Pencil } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import { resolveHassUrl } from '../lib/hass';
import PagePager from './PagePager';
import PageManagePopup from './PageManagePopup';
import DashboardGrid from './DashboardGrid';
import DashboardEditor from './DashboardEditor';
import RoomSelector from './RoomSelector';
import { QuickActionPopup, CoverPopup } from './widgets/ActionWidgets';

export default function Dashboard({ user, onSettings, onScreensaver }) {
  const [time, setTime] = useState(new Date());
  const [qaPopup, setQaPopup] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [selectedWidgetId, setSelectedWidgetId] = useState(null);
  const [pageManageOpen, setPageManageOpen] = useState(false);
  const [slotPickerOpen, setSlotPickerOpen] = useState(false);

  const { hass, getEntity } = useHass();
  const {
    config,
    activeRoom,
    activeRoomId,
    setActiveRoomId,
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
  } = useConfig();

  const closeQaPopup = useCallback(() => setQaPopup(null), []);

  const pages = activeRoom?.layout?.pages || [];

  useEffect(() => {
    setActivePageIndex(0);
  }, [activeRoomId]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!editMode) {
      setSelectedWidgetId(null);
      setPageManageOpen(false);
    }
  }, [editMode]);

  useEffect(() => {
    if (activePageIndex >= pages.length) {
      setActivePageIndex(Math.max(0, pages.length - 1));
    }
  }, [activePageIndex, pages.length]);

  const handleRemovePage = useCallback((pageIndex) => {
    removeLayoutPage(pageIndex);
    setActivePageIndex((current) => {
      if (current > pageIndex) return current - 1;
      if (current === pageIndex) return Math.max(0, pageIndex - 1);
      return current;
    });
  }, [removeLayoutPage]);

  const handleMovePage = useCallback((fromIndex, toIndex) => {
    moveLayoutPage(fromIndex, toIndex);
    setActivePageIndex((current) => {
      if (current === fromIndex) return toIndex;
      if (fromIndex < current && toIndex >= current) return current - 1;
      if (fromIndex > current && toIndex <= current) return current + 1;
      return current;
    });
  }, [moveLayoutPage]);

  const handleAddPage = useCallback(() => {
    const nextIndex = pages.length;
    addLayoutPage();
    setActivePageIndex(nextIndex);
  }, [addLayoutPage, pages.length]);

  const selectedWidget = pages[activePageIndex]?.widgets?.find((w) => w.id === selectedWidgetId) || null;

  const homePresence = config.presence
    .map((p) => {
      const entity = getEntity(p.entity_id);
      return { ...p, entity, name: p.label || entity.name };
    })
    .filter((p) => p.entity.state === 'home');

  const exitEditMode = () => setEditMode(false);
  const roomSelectorDisabled = pageManageOpen || slotPickerOpen;
  const useRoomSidebar = config.roomSidebar && config.rooms.length > 1;

  return (
    <div className={`tm-dashboard${editMode ? ' tm-dashboard--edit' : ''}${useRoomSidebar ? ' tm-dashboard--room-sidebar' : ''}${qaPopup || pageManageOpen || slotPickerOpen ? ' tm-dashboard--modal-open' : ''}`}>
      {useRoomSidebar && (
        <RoomSelector
          variant="sidebar"
          rooms={config.rooms}
          activeRoomId={activeRoomId}
          onChange={setActiveRoomId}
          disabled={roomSelectorDisabled}
        />
      )}

      <div className="tm-dashboard-main">
      <header className="tm-dashboard-header">
        <div className="tm-flex-col">
          <div className="tm-dashboard-title-row">
            <h1 className="tm-title-xl" style={editMode ? undefined : { textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              {editMode ? 'Dashboard bearbeiten' : (
                <>Guten Tag, <span className="tm-font-bold">{user.name}</span></>
              )}
            </h1>
            {!useRoomSidebar && (
              <RoomSelector
                rooms={config.rooms}
                activeRoomId={activeRoomId}
                onChange={setActiveRoomId}
                disabled={roomSelectorDisabled}
              />
            )}
          </div>
          <p className="tm-text-sm tm-opacity-70" style={editMode ? undefined : { textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            {editMode
              ? 'Leere Felder antippen oder Widgets ziehen und skalieren'
              : format(time, 'EEEE, d. MMMM yyyy', { locale: de })}
          </p>
        </div>

        <div className="tm-dashboard-header-right">
          {!editMode && <div className="tm-clock-lg">{format(time, 'HH:mm')}</div>}
          <button
            type="button"
            onClick={() => setEditMode((v) => !v)}
            className={`tm-btn-round${editMode ? ' active' : ''}`}
            aria-label={editMode ? 'Bearbeitung beenden' : 'Dashboard bearbeiten'}
          >
            <Pencil size={22} />
          </button>
          {!editMode && (
            <>
              <button type="button" onClick={onSettings} className="tm-btn-round" aria-label="Einstellungen">
                <Settings size={24} />
              </button>
              <button type="button" onClick={onScreensaver} className="tm-btn-round" aria-label="Bildschirmschoner">
                <Monitor size={24} />
              </button>
            </>
          )}
        </div>

        {!editMode && homePresence.length > 0 && (
          <div className="tm-dashboard-header-presence tm-flex-center tm-gap-3">
            {homePresence.map((person) => (
              <div key={person.entity_id} className="tm-presence-chip">
                <div className="tm-avatar-sm">
                  {person.entity.attributes?.entity_picture ? (
                    <img src={resolveHassUrl(hass, person.entity.attributes.entity_picture)} alt={person.name} className="tm-avatar-img" />
                  ) : (
                    <span className="tm-font-bold tm-text-xs">{person.name[0]}</span>
                  )}
                </div>
                <span className="tm-font-bold tm-text-sm tm-opacity-90">{person.name}</span>
              </div>
            ))}
          </div>
        )}
      </header>

      <div className="tm-dashboard-body">
        <PagePager
          activePageIndex={activePageIndex}
          onPageChange={setActivePageIndex}
          editMode={editMode}
          pagesMeta={pages}
          onOpenPageManage={() => setPageManageOpen(true)}
        >
          {pages.map((page, pageIndex) => (
            <DashboardGrid
              key={page.id}
              page={page}
              pageIndex={pageIndex}
              editMode={editMode}
              selectedWidgetId={selectedWidgetId}
              onSelectWidget={setSelectedWidgetId}
              onMoveWidget={moveWidget}
              onResizeWidget={resizeWidget}
              hass={hass}
              getEntity={getEntity}
              onOpenPopup={setQaPopup}
              onUpdateWidget={updateWidget}
              onAddWidgetAt={addWidgetAt}
              onSlotPickerOpenChange={setSlotPickerOpen}
            />
          ))}
        </PagePager>

        {editMode && (
          <DashboardEditor
            activePageIndex={activePageIndex}
            selectedWidget={selectedWidget}
            onDone={exitEditMode}
            onApplyPreset={applyLayoutPreset}
            onAddWidget={addWidget}
            onUpdateWidget={updateWidget}
            onDeleteWidget={removeWidget}
            onApplySize={applyWidgetSize}
            hass={hass}
          />
        )}
      </div>

      {pageManageOpen && editMode && (
        <PageManagePopup
          pages={pages}
          activePageIndex={activePageIndex}
          onClose={() => setPageManageOpen(false)}
          onSelectPage={(index) => {
            setActivePageIndex(index);
            setPageManageOpen(false);
          }}
          onAddPage={handleAddPage}
          onRemovePage={handleRemovePage}
          onMovePage={handleMovePage}
          onRenamePage={renameLayoutPage}
        />
      )}

      {qaPopup && !editMode && (
        qaPopup.variant === 'cover'
          ? <CoverPopup data={qaPopup} hass={hass} getEntity={getEntity} onClose={closeQaPopup} />
          : <QuickActionPopup data={qaPopup} hass={hass} onClose={closeQaPopup} />
      )}
      </div>
    </div>
  );
}
