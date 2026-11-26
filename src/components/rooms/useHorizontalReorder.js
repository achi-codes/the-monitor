import { useCallback, useEffect, useRef, useState } from 'react';

const DRAG_THRESHOLD = 6;
const TOUCH_SLOP = 10;
const LONG_PRESS_MS = 350;
const EDGE = 70;

/**
 * Pointer-based drag & drop for a horizontal row. Items carry
 * `data-reorder-key`; the container must be position: relative.
 * Mouse drags start right away; touch and pen need a long press, so a plain
 * swipe still scrolls the row. Returns the drag state (offset, drop marker),
 * the key of a lifted item and `bind(key)` handlers for each item.
 */
export default function useHorizontalReorder({ containerRef, keys, onReorder, autoScroll = false }) {
  const [drag, setDrag] = useState(null);
  const [lifted, setLifted] = useState(null);
  const dragRef = useRef(null);
  const timerRef = useRef(null);
  const suppressClick = useRef(false);

  // Once an item is lifted, stop the browser from turning the touch into a scroll.
  useEffect(() => {
    const onTouchMove = (event) => {
      if (dragRef.current?.armed && event.cancelable) event.preventDefault();
    };
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => document.removeEventListener('touchmove', onTouchMove);
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);

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

  const reset = () => {
    clearTimeout(timerRef.current);
    dragRef.current = null;
    setDrag(null);
    setLifted(null);
  };

  const arm = (current, element, pointerId) => {
    current.armed = true;
    try { element.setPointerCapture(pointerId); } catch { /* pointer already gone */ }
    if (current.touch) {
      navigator.vibrate?.(12);
      setLifted(current.key);
    }
  };

  const bind = (key) => ({
    onPointerDown: (event) => {
      const interactive = event.target.closest('button, input, select');
      if (event.button !== 0 || (interactive && interactive !== event.currentTarget)) return;
      const container = containerRef.current;
      const element = event.currentTarget;
      const current = {
        key,
        touch: event.pointerType !== 'mouse',
        startX: event.clientX,
        startY: event.clientY,
        startScroll: container?.scrollLeft || 0,
        dx: 0,
        moved: false,
        armed: false,
        over: 0,
        markerX: 0,
      };
      dragRef.current = current;
      if (!current.touch) {
        arm(current, element, event.pointerId);
        return;
      }
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (dragRef.current === current) arm(current, element, event.pointerId);
      }, LONG_PRESS_MS);
    },
    onPointerMove: (event) => {
      const current = dragRef.current;
      if (!current || current.key !== key) return;
      if (!current.armed) {
        // Finger moved before the long press: it's a scroll, let the browser have it.
        if (Math.hypot(event.clientX - current.startX, event.clientY - current.startY) > TOUCH_SLOP) reset();
        return;
      }
      const container = containerRef.current;
      if (autoScroll && container) {
        const box = container.getBoundingClientRect();
        if (event.clientX < box.left + EDGE) container.scrollLeft -= 14;
        if (event.clientX > box.right - EDGE) container.scrollLeft += 14;
      }
      const dx = event.clientX - current.startX + ((container?.scrollLeft || 0) - current.startScroll);
      const moved = current.moved || Math.abs(event.clientX - current.startX) > DRAG_THRESHOLD;
      if (!moved) return;
      const next = { ...current, dx, moved, ...measure(event.clientX, key) };
      dragRef.current = next;
      setDrag(next);
    },
    onPointerUp: () => {
      const current = dragRef.current;
      reset();
      if (!current?.moved) {
        // A long press without moving still swallows the click that follows.
        if (current?.armed && current.touch) {
          suppressClick.current = true;
          setTimeout(() => { suppressClick.current = false; }, 0);
        }
        return;
      }
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
    onContextMenu: (event) => {
      if (dragRef.current) event.preventDefault();
    },
    onPointerCancel: reset,
  });

  return { drag: drag?.moved ? drag : null, lifted, bind };
}
