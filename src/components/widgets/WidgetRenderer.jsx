import {
  COLOR_MAP,
  isActionableDomain,
  getPopupSummary,
  QuickActionPopup,
  PopupWidget,
  QuickActionWidget,
  AlarmWidget,
  SceneWidget,
  CoverWidget,
  CoverPopupWidget,
  CoverPopup,
} from './ActionWidgets';
import WeatherWidget from '../Weather';
import MediaPlayer from '../MediaPlayer';
import CameraWidget from '../CameraWidget';
import ShoppingList from '../ShoppingList';
import SankeyWidget from '../SankeyWidget';
import EnergyTileWidget from '../EnergyTileWidget';
import EvWidget from '../EvWidget';
import SensorWidget from '../SensorWidget';
import SensorStatusWidget from '../SensorStatusWidget';
import HaCardWidget from '../HaCardWidget';
import VacuumWidget from '../VacuumWidget';
import RoomWidget from '../RoomWidget';
import { WIDGET_TYPES, getWidgetLabel } from '../../lib/layout';

export function renderDashboardWidget({
  widget,
  hass,
  getEntity,
  editMode,
  onEditWidget,
  onOpenPopup,
  onUpdateWidget,
  pageIndex = 0,
  widgetIndex = 0,
}) {
  const handleConfigure = () => onEditWidget?.(widget.id);

  switch (widget.type) {
    case 'weather':
      return (
        <WeatherWidget
          entityId={widget.entity_id}
          title={widget.label}
          location={widget.location}
          editMode={editMode}
          onConfigure={editMode ? handleConfigure : undefined}
        />
      );
    case 'media':
      return (
        <MediaPlayer
          widget={widget}
          editMode={editMode}
          onConfigure={editMode ? handleConfigure : undefined}
        />
      );
    case 'camera':
      return (
        <CameraWidget
          widget={widget}
          entityId={widget.entity_id}
          entityIds={widget.entity_ids}
          onConfigure={editMode ? handleConfigure : undefined}
        />
      );
    case 'shopping':
      return (
        <ShoppingList
          entityId={widget.entity_id}
          onConfigure={editMode ? handleConfigure : undefined}
        />
      );
    case 'quickAction':
      return (
        <QuickActionWidget
          widget={widget}
          hass={hass}
          getEntity={getEntity}
          onConfigure={handleConfigure}
          editMode={editMode}
        />
      );
    case 'alarm':
      return (
        <AlarmWidget
          widget={widget}
          hass={hass}
          getEntity={getEntity}
          onConfigure={handleConfigure}
          editMode={editMode}
        />
      );
    case 'cover':
      return (
        <CoverWidget
          widget={widget}
          hass={hass}
          getEntity={getEntity}
          onConfigure={handleConfigure}
          editMode={editMode}
        />
      );
    case 'coverPopup':
      return (
        <CoverPopupWidget
          widget={widget}
          hass={hass}
          getEntity={getEntity}
          onConfigure={handleConfigure}
          editMode={editMode}
        />
      );
    case 'popup':
      return (
        <PopupWidget
          widget={widget}
          widgetIndex={widgetIndex}
          hass={hass}
          getEntity={getEntity}
          onConfigure={handleConfigure}
          onOpen={onOpenPopup}
          editMode={editMode}
        />
      );
    case 'scene':
      return (
        <SceneWidget
          widget={widget}
          widgetIndex={widgetIndex}
          hass={hass}
          getEntity={getEntity}
          onConfigure={handleConfigure}
          editMode={editMode}
        />
      );
    case 'sensor':
      return (
        <SensorWidget
          widget={widget}
          hass={hass}
          getEntity={getEntity}
          onConfigure={handleConfigure}
          editMode={editMode}
        />
      );
    case 'sensorStatus':
      return (
        <SensorStatusWidget
          widget={widget}
          hass={hass}
          editMode={editMode}
          onConfigure={handleConfigure}
        />
      );
    case 'room':
      return (
        <RoomWidget
          widget={widget}
          hass={hass}
          onConfigure={handleConfigure}
          onOpen={onOpenPopup}
          editMode={editMode}
        />
      );
    case 'sankey':
      return <SankeyWidget widget={widget} />;
    case 'energyTile':
      return <EnergyTileWidget widget={widget} hass={hass} />;
    case 'ev':
      return <EvWidget widget={widget} hass={hass} />;
    case 'vacuum':
      return (
        <VacuumWidget
          widget={widget}
          hass={hass}
          editMode={editMode}
          onConfigure={handleConfigure}
        />
      );
    case 'haCard':
      return (
        <HaCardWidget
          widget={widget}
          hass={hass}
          editMode={editMode}
        />
      );
    default:
      return (
        <div className="tm-card tm-placeholder-widget">
          <span>{getWidgetLabel(widget)}</span>
        </div>
      );
  }
}

export { QuickActionPopup, CoverPopup, COLOR_MAP, WIDGET_TYPES };
