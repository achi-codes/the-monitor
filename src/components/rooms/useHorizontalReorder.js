import { useCallback, useRef, useState } from 'react';

const DRAG_THRESHOLD = 6;
const EDGE = 70;

/**
 * Pointer-based drag & drop for a horizontal row. Items carry
 * `data-reorder-key`; the container must be position: relative.
 * Returns the drag state (for the dragged item's offset and the drop marker)
 * and `bind(key)` handlers for each item.
 */
export default function useHorizontalReorder({ containerRef, keys, onReorder, autoScroll = false }) {
  const [drag, setDrag] = useState(null);
  const dragRef = useRef(null);
  const suppressClick = useRef(false);

  const measure = useCallback((clientX, key) => {
    const container = containerRef.current;
    if (!container) return { over: 0, markerX: 0 };
    const others = [...container.querySelectorAll('[data-reorder-key]')]
      .filter((el) => el.dataset.reorderKey !== key);
    const box = container.getBoundingClientRect();
    let over = 0;
    others.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.left + rect.width / 2 < clientX) over += 1;
    });
    let markerX = 0;
    if (others.length && over < others.length) {
      markerX = others[over].getBoundingClientRect().left - box.left + container.scrollLeft - 8;
    } else if (others.length) {
      markerX = others[others.length - 1].getBoundingClientRect().right - box.left + container.scrollLeft + 8;
    }
    return { over, markerX };
  }, [containerRef]);

  const update = (next) => {
    dragRef.current = next;
    setDrag(next);
  };

  const bind = (key) => ({
    onPointerDown: (event) => {
      const interactive = event.target.closest('button, input, select');
      if (event.button !== 0 || (interactive && interactive !== event.currentTarget)) return;
      event.currentTarget.setPointerCapture(event.pointerId);
      const container = containerRef.current;
      dragRef.current = {
        key, startX: event.clientX, startScroll: container?.scrollLeft || 0, dx: 0, moved: false, over: 0, markerX: 0,
      };
    },
    onPointerMove: (event) => {
      const current = dragRef.current;
      if (!current || current.key !== key) return;
      const container = containerRef.current;
      if (autoScroll && container) {
        const box = container.getBoundingClientRect();
        if (event.clientX < box.left + EDGE) container.scrollLeft -= 14;
        if (event.clientX > box.right - EDGE) container.scrollLeft += 14;
      }
      const dx = event.clientX - current.startX + ((container?.scrollLeft || 0) - current.startScroll);
      const moved = current.moved || Math.abs(event.clientX - current.startX) > DRAG_THRESHOLD;
      if (!moved) return;
      update({ ...current, dx, moved, ...measure(event.clientX, key) });
    },
    onPointerUp: () => {
      const current = dragRef.current;
      dragRef.current = null;
      setDrag(null);
      if (!current?.moved) return;
      suppressClick.current = true;
      setTimeout(() => { suppressClick.current = false; }, 0);
      const rest = keys.filter((k) => k !== current.key);
      rest.splice(current.over, 0, current.key);
      if (rest.join('|') !== keys.join('|')) onReorder(rest);
    },
    onClickCapture: (event) => {
      if (!suppressClick.current) return;
      event.preventDefault();
      event.stopPropagation();
    },
    onPointerCancel: () => {
      dragRef.current = null;
      setDrag(null);
    },
  });

  return { drag: drag?.moved ? drag : null, bind };
}
