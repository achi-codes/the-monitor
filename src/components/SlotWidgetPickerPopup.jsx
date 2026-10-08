import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import { WIDGET_TYPES } from '../lib/layout';

const PANEL_WIDTH = 17.5;
const PANEL_MAX_HEIGHT = 22;

function getPanelStyle(anchorRect) {
  const panelW = PANEL_WIDTH * 16;
  const panelH = Math.min(PANEL_MAX_HEIGHT * 16, window.innerHeight - 32);
  let left = anchorRect.left + anchorRect.width / 2 - panelW / 2;
  let top = anchorRect.bottom + 8;
  left = Math.max(12, Math.min(left, window.innerWidth - panelW - 12));
  if (top + panelH > window.innerHeight - 12) {
    top = Math.max(12, anchorRect.top - panelH - 8);
  }
  return {
    left: `${left}px`,
    top: `${top}px`,
    width: `${panelW}px`,
    maxHeight: `${panelH}px`,
  };
}

export default function SlotWidgetPickerPopup({ anchorRect, slotLabel, onClose, onPick }) {
  useOverlayLock(true);

  const panelStyle = useMemo(() => getPanelStyle(anchorRect), [anchorRect]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return createPortal(
    <div className="tm-slot-picker-overlay" role="presentation">
      <button
        type="button"
        className="tm-slot-picker-backdrop"
        onClick={onClose}
        aria-label="Schließen"
      />
      <div
        className="tm-slot-picker-panel"
        style={panelStyle}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Widget für ${slotLabel} wählen`}
      >
        <div className="tm-slot-picker-header">
          <div>
            <div className="tm-slot-picker-title">Widget hinzufügen</div>
            <div className="tm-slot-picker-subtitle">{slotLabel} · 1×1</div>
          </div>
          <button type="button" className="tm-slot-picker-close" onClick={onClose} aria-label="Schließen">
            <X size={16} />
          </button>
        </div>
        <div className="tm-slot-picker-grid">
          {Object.entries(WIDGET_TYPES).map(([type, meta]) => (
            <button
              key={type}
              type="button"
              className="tm-slot-picker-item"
              onClick={() => onPick(type)}
            >
              <span className="tm-slot-picker-icon">{meta.label[0]}</span>
              <span>{meta.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>,
    getOverlayRoot(),
  );
}
