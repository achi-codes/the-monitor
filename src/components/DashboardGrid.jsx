import { useRef, useCallback, useState, useLayoutEffect, useEffect } from 'react';
import {
  GRID_COLS,
  GRID_ROWS,
  clampWidget,
  createWidget,
  findCollisions,
  getWidgetLabel,
  getGridMetrics,
  widgetToRect,
  pointerDeltaToGridDelta,
  computeResizeFromEdge,
  resizeEdgeDelta,
  isGridCellOccupied,
} from '../lib/layout';
import { renderDashboardWidget } from './widgets/WidgetRenderer';
import SlotWidgetPickerPopup from './SlotWidgetPickerPopup';

const LAYOUT_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const LAYOUT_DURATION = '0.34s';

const RESIZE_HANDLES = [
  { edge: 'n', className: 'tm-dashboard-grid-resize-edge--n', label: 'oben' },
  { edge: 's', className: 'tm-dashboard-grid-resize-edge--s', label: 'unten' },
  { edge: 'w', className: 'tm-dashboard-grid-resize-edge--w', label: 'links' },
  { edge: 'e', className: 'tm-dashboard-grid-resize-edge--e', label: 'rechts' },
  { edge: 'se', className: 'tm-dashboard-grid-resize-corner', label: 'Ecke' },
];

function applyResizePreview(style, rect, interaction, metrics) {
  const { edge, offsetX, offsetY } = interaction;
  const minW = metrics.cellW;
  const minH = metrics.cellH;

  switch (edge) {
    case 'n':
      style.top = `${rect.top + offsetY}px`;
      style.height = `${Math.max(minH, rect.height - offsetY)}px`;
      break;
    case 's':
      style.height = `${Math.max(minH, rect.height + offsetY)}px`;
      break;
    case 'w':
      style.left = `${rect.left + offsetX}px`;
      style.width = `${Math.max(minW, rect.width - offsetX)}px`;
      break;
    case 'e':
      style.width = `${Math.max(minW, rect.width + offsetX)}px`;
      break;
    case 'se':
      style.width = `${Math.max(minW, rect.width + offsetX)}px`;
      style.height = `${Math.max(minH, rect.height + offsetY)}px`;
      break;
    default:
      break;
  }
}

export default function DashboardGrid({
  page,
  pageIndex,
  editMode,
  selectedWidgetId,
  onSelectWidget,
  onMoveWidget,
  onResizeWidget,
  hass,
  getEntity,
  onOpenPopup,
  onUpdateWidget,
  onAddWidgetAt,
  onSlotPickerOpenChange,
}) {
  const gridRef = useRef(null);
  const [gridSize, setGridSize] = useState(null);
  const [gap, setGap] = useState(24);
  const [interaction, setInteraction] = useState(null);
  const [slotPicker, setSlotPicker] = useState(null);
  const rafRef = useRef(null);
  const pendingInteraction = useRef(null);

  useLayoutEffect(() => {
    const el = gridRef.current;
    if (!el) return undefined;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setGridSize({ width: rect.width, height: rect.height });
      const style = getComputedStyle(el);
      const gapVal = parseFloat(style.gap || style.columnGap) || 24;
      setGap(gapVal);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [editMode]);

  useEffect(() => {
    if (!editMode) setSlotPicker(null);
  }, [editMode]);

  useEffect(() => {
    onSlotPickerOpenChange?.(Boolean(slotPicker));
  }, [slotPicker, onSlotPickerOpenChange]);

  const metrics = gridSize
    ? getGridMetrics(gridSize, GRID_COLS, GRID_ROWS, gap)
    : null;

  const scheduleInteraction = useCallback((next) => {
    pendingInteraction.current = next;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setInteraction(pendingInteraction.current);
      rafRef.current = null;
    });
  }, []);

  const clearInteraction = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    pendingInteraction.current = null;
    setInteraction(null);
  }, []);

  const handleDragStart = useCallback((event, widget) => {
    if (!editMode || !gridRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    onSelectWidget(widget.id);

    const startX = event.clientX;
    const startY = event.clientY;
    const origin = { x: widget.x, y: widget.y };
    const lastGrid = { dx: 0, dy: 0 };

    const onMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;

      if (!metrics) {
        scheduleInteraction({ kind: 'drag', widgetId: widget.id, offsetX: dx, offsetY: dy });
        return;
      }

      const delta = pointerDeltaToGridDelta(dx, dy, metrics);
      scheduleInteraction({
        kind: 'drag',
        widgetId: widget.id,
        offsetX: delta.offsetX,
        offsetY: delta.offsetY,
      });

      if (delta.dx !== lastGrid.dx || delta.dy !== lastGrid.dy) {
        lastGrid.dx = delta.dx;
        lastGrid.dy = delta.dy;
        onMoveWidget(pageIndex, widget.id, {
          x: origin.x + delta.dx,
          y: origin.y + delta.dy,
          w: widget.w,
          h: widget.h,
        });
      }
    };

    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      clearInteraction();
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, [editMode, metrics, onMoveWidget, onSelectWidget, pageIndex, scheduleInteraction, clearInteraction]);

  const handleResizeStart = useCallback((event, widget, edge) => {
    if (!editMode || !gridRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    onSelectWidget(widget.id);

    const startX = event.clientX;
    const startY = event.clientY;
    const origin = { x: widget.x, y: widget.y, w: widget.w, h: widget.h };
    const lastGrid = { dx: 0, dy: 0 };

    const onMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;

      if (!metrics) {
        scheduleInteraction({
          kind: 'resize',
          edge,
          widgetId: widget.id,
          offsetX: dx,
          offsetY: dy,
        });
        return;
      }

      const pointerDelta = pointerDeltaToGridDelta(dx, dy, metrics);
      const { dx: gridDx, dy: gridDy, offsetX, offsetY } = resizeEdgeDelta(edge, pointerDelta);
      scheduleInteraction({
        kind: 'resize',
        edge,
        widgetId: widget.id,
        offsetX,
        offsetY,
      });

      if (gridDx !== lastGrid.dx || gridDy !== lastGrid.dy) {
        lastGrid.dx = gridDx;
        lastGrid.dy = gridDy;
        onResizeWidget(
          pageIndex,
          widget.id,
          computeResizeFromEdge(edge, origin, { dx: gridDx, dy: gridDy }),
        );
      }
    };

    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      clearInteraction();
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, [editMode, metrics, onResizeWidget, onSelectWidget, pageIndex, scheduleInteraction, clearInteraction]);

  const handleEmptySlotClick = useCallback((col, row, event) => {
    event.stopPropagation();
    onSelectWidget(null);
    const rect = event.currentTarget.getBoundingClientRect();
    setSlotPicker({
      x: col,
      y: row,
      anchorRect: {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        bottom: rect.bottom,
        right: rect.right,
      },
      label: `Feld ${col + 1}×${row + 1}`,
    });
  }, [onSelectWidget]);

  const handleSlotPick = useCallback((type) => {
    if (!slotPicker || !onAddWidgetAt) return;
    const draft = createWidget(type, { x: slotPicker.x, y: slotPicker.y });
    const preferred = clampWidget(draft);
    const fits = type === 'haCard'
      && findCollisions(page.widgets, preferred).length === 0;
    const widgetId = onAddWidgetAt(pageIndex, type, fits ? {
      x: preferred.x,
      y: preferred.y,
      w: preferred.w,
      h: preferred.h,
    } : {
      x: slotPicker.x,
      y: slotPicker.y,
      w: 1,
      h: 1,
    });
    setSlotPicker(null);
    if (widgetId) onSelectWidget(widgetId);
  }, [onAddWidgetAt, onSelectWidget, page.widgets, pageIndex, slotPicker]);

  const getItemStyle = (widget) => {
    if (!editMode) {
      return {
        gridColumn: `${widget.x + 1} / span ${widget.w}`,
        gridRow: `${widget.y + 1} / span ${widget.h}`,
      };
    }

    if (!metrics) {
      return {
        gridColumn: `${widget.x + 1} / span ${widget.w}`,
        gridRow: `${widget.y + 1} / span ${widget.h}`,
        visibility: 'hidden',
      };
    }

    const rect = widgetToRect(widget, metrics);
    const isActive = interaction?.widgetId === widget.id;
    const style = {
      position: 'absolute',
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    };

    if (isActive) {
      style.transition = 'none';
      if (interaction.kind === 'resize') {
        applyResizePreview(style, rect, interaction, metrics);
      } else {
        style.transform = `translate3d(${interaction.offsetX}px, ${interaction.offsetY}px, 0)`;
      }
    } else {
      style.transition = `left ${LAYOUT_DURATION} ${LAYOUT_EASE}, top ${LAYOUT_DURATION} ${LAYOUT_EASE}, width ${LAYOUT_DURATION} ${LAYOUT_EASE}, height ${LAYOUT_DURATION} ${LAYOUT_EASE}`;
    }

    return style;
  };

  const gridTemplateStyle = {
    gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
  };

  return (
    <div
      ref={gridRef}
      className={`tm-dashboard-grid${editMode ? ' tm-dashboard-grid--edit' : ''}`}
      style={editMode ? undefined : gridTemplateStyle}
      onClick={() => {
        if (!editMode) return;
        onSelectWidget(null);
        setSlotPicker(null);
      }}
    >
      {editMode && (
        <div
          className="tm-dashboard-grid-overlay"
          style={gridTemplateStyle}
        >
          {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => {
            const col = i % GRID_COLS;
            const row = Math.floor(i / GRID_COLS);
            const occupied = isGridCellOccupied(page.widgets, col, row);
            if (occupied) {
              return <div key={i} className="tm-dashboard-grid-cell tm-dashboard-grid-cell--occupied" aria-hidden />;
            }
            return (
              <button
                key={i}
                type="button"
                className="tm-dashboard-grid-cell tm-dashboard-grid-cell--empty"
                onClick={(event) => handleEmptySlotClick(col, row, event)}
                aria-label={`Feld ${col + 1}×${row + 1}: Widget hinzufügen`}
              />
            );
          })}
        </div>
      )}

      {page.widgets.map((widget, widgetIndex) => {
        const isInteracting = interaction?.widgetId === widget.id;
        const label = getWidgetLabel(widget);
        return (
          <div
            key={widget.id}
            className={`tm-dashboard-grid-item${selectedWidgetId === widget.id ? ' selected' : ''}${editMode ? ' editing' : ''}${isInteracting ? ' is-interacting' : ''}${widget.type === 'energyTile' ? ' tm-dashboard-grid-item--energy-tile' : ''}${widget.type === 'sankey' ? ' tm-dashboard-grid-item--sankey' : ''}`}
            style={getItemStyle(widget)}
            onClick={(event) => {
              if (!editMode) return;
              event.stopPropagation();
              onSelectWidget(widget.id);
            }}
          >
            {editMode && (
              <div className="tm-dashboard-grid-chrome">
                <button
                  type="button"
                  className="tm-dashboard-grid-drag"
                  aria-label={`${label} verschieben`}
                  onPointerDown={(event) => handleDragStart(event, widget)}
                >
                  ⋮⋮
                </button>
                <span className="tm-dashboard-grid-badge">
                  {label}
                  {' '}
                  ·
                  {' '}
                  {widget.w}
                  ×
                  {widget.h}
                </span>
                {RESIZE_HANDLES.map(({ edge, className, label: edgeLabel }) => (
                  <button
                    key={edge}
                    type="button"
                    className={`tm-dashboard-grid-resize-edge ${className}`}
                    aria-label={`${label} ${edgeLabel} skalieren`}
                    onPointerDown={(event) => handleResizeStart(event, widget, edge)}
                  />
                ))}
              </div>
            )}

            <div className="tm-dashboard-grid-content">
              {renderDashboardWidget({
                widget,
                hass,
                getEntity,
                editMode,
                onEditWidget: (id) => onSelectWidget(id),
                onOpenPopup,
                onUpdateWidget,
                pageIndex,
                widgetIndex,
              })}
            </div>
          </div>
        );
      })}

      {slotPicker && (
        <SlotWidgetPickerPopup
          anchorRect={slotPicker.anchorRect}
          slotLabel={slotPicker.label}
          onClose={() => setSlotPicker(null)}
          onPick={handleSlotPick}
        />
      )}
    </div>
  );
}
