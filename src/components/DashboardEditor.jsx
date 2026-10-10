import { useState } from 'react';
import {
  Activity,
  Bot,
  Camera,
  CarFront,
  Check,
  CloudSun,
  DoorOpen,
  Gauge,
  LayoutGrid,
  LayoutTemplate,
  Layers,
  Palette,
  PlayCircle,
  Plus,
  Shield,
  ShoppingCart,
  Sparkles,
  Blinds,
  Zap,
  X,
} from 'lucide-react';
import { LAYOUT_PRESETS } from '../lib/layoutPresets';
import { WIDGET_TYPES } from '../lib/layout';
import WidgetInspector from './WidgetInspector';

const WIDGET_ICONS = {
  weather: CloudSun,
  media: PlayCircle,
  camera: Camera,
  shopping: ShoppingCart,
  quickAction: Zap,
  alarm: Shield,
  cover: Blinds,
  coverPopup: Blinds,
  popup: Layers,
  scene: Palette,
  sensor: Gauge,
  sensorStatus: DoorOpen,
  sankey: Activity,
  energyTile: Sparkles,
  ev: CarFront,
  vacuum: Bot,
  haCard: LayoutTemplate,
};

export default function DashboardEditor({
  activePageIndex,
  selectedWidget,
  onDone,
  onApplyPreset,
  onAddWidget,
  onUpdateWidget,
  onDeleteWidget,
  onApplySize,
  hass,
}) {
  const [showPresets, setShowPresets] = useState(false);
  const [showPalette, setShowPalette] = useState(false);

  const handleAddType = (type) => {
    onAddWidget(activePageIndex, type);
    setShowPalette(false);
  };

  const togglePresets = () => {
    setShowPresets((v) => !v);
    setShowPalette(false);
  };

  const togglePalette = () => {
    setShowPalette((v) => !v);
    setShowPresets(false);
  };

  return (
    <div className="tm-dashboard-editor">
      <div className="tm-dashboard-editor-toolbar">
        <button
          type="button"
          className={`tm-dashboard-editor-btn${showPresets ? ' active' : ''}`}
          onClick={togglePresets}
        >
          <LayoutGrid size={16} />
          Vorlagen
        </button>
        <button
          type="button"
          className={`tm-dashboard-editor-btn${showPalette ? ' active' : ''}`}
          onClick={togglePalette}
        >
          <Plus size={16} />
          Widget
        </button>
        <button type="button" className="tm-dashboard-editor-done" onClick={onDone}>
          <Check size={16} />
          Fertig
        </button>
      </div>

      {showPresets && (
        <div className="tm-dashboard-editor-panel tm-dashboard-editor-presets">
          <div className="tm-dashboard-editor-panel-header">
            <strong>Layout-Vorlagen</strong>
            <button type="button" className="tm-dashboard-editor-close" onClick={() => setShowPresets(false)} aria-label="Schließen">
              <X size={14} />
            </button>
          </div>
          <p className="tm-widget-inspector-hint">Entitäten bleiben erhalten — nur Anordnung und Größen ändern sich.</p>
          <div className="tm-preset-grid">
            {LAYOUT_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className="tm-preset-card"
                onClick={() => {
                  onApplyPreset(preset.id);
                  setShowPresets(false);
                }}
              >
                <div className="tm-preset-preview">
                  {preset.preview.map((width, i) => (
                    <span key={i} className="tm-preset-block" style={{ flex: width }} />
                  ))}
                </div>
                <div className="tm-preset-name">{preset.name}</div>
                <div className="tm-preset-desc">{preset.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {showPalette && (
        <div className="tm-dashboard-editor-panel tm-dashboard-editor-palette">
          <div className="tm-dashboard-editor-panel-header">
            <strong>Widget hinzufügen</strong>
            <button type="button" className="tm-dashboard-editor-close" onClick={() => setShowPalette(false)} aria-label="Schließen">
              <X size={14} />
            </button>
          </div>
          <div className="tm-palette-grid">
            {Object.entries(WIDGET_TYPES).map(([type, meta]) => {
              const Icon = WIDGET_ICONS[type] || Plus;
              return (
                <button key={type} type="button" className="tm-palette-item" onClick={() => handleAddType(type)}>
                  <span className="tm-palette-icon">
                    <Icon size={14} />
                  </span>
                  <span>{meta.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="tm-dashboard-editor-inspector-wrap">
        <WidgetInspector
          widget={selectedWidget}
          pageIndex={activePageIndex}
          onUpdate={onUpdateWidget}
          onDelete={onDeleteWidget}
          onApplySize={onApplySize}
          hass={hass}
        />
      </div>
    </div>
  );
}
