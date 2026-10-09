import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { GripHorizontal } from 'lucide-react';

export default function PagePager({
  children,
  onPageChange,
  activePageIndex: controlledIndex,
  editMode = false,
  pagesMeta = [],
  onOpenPageManage,
}) {
  const pageChildren = Children.toArray(children);
  const scrollRef = useRef(null);
  const userScrolling = useRef(false);
  const pointerDown = useRef(false);
  const programmatic = useRef(false);
  const settleTimer = useRef(0);
  const [activePage, setActivePage] = useState(controlledIndex ?? 0);

  const currentIndex = activePage;

  const pageFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.clientWidth === 0) return 0;
    return Math.max(0, Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  const settleUserScroll = useCallback(() => {
    window.clearTimeout(settleTimer.current);
    if (pointerDown.current || programmatic.current || !userScrolling.current) return;
    userScrolling.current = false;
    scrollRef.current?.classList.remove('is-scrolling');
    const page = pageFromScroll();
    setActivePage(page);
    if (page !== controlledIndex) onPageChange?.(page);
  }, [controlledIndex, onPageChange, pageFromScroll]);

  const noteUserScroll = useCallback(() => {
    if (programmatic.current) return;
    userScrolling.current = true;
    scrollRef.current?.classList.add('is-scrolling');
    const page = pageFromScroll();
    setActivePage((prev) => (prev === page ? prev : page));
    if (pointerDown.current) return;
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(settleUserScroll, 420);
  }, [pageFromScroll, settleUserScroll]);

  const releasePointer = useCallback(() => {
    pointerDown.current = false;
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(settleUserScroll, 420);
  }, [settleUserScroll]);

  const goToPage = useCallback((index) => {
    userScrolling.current = false;
    pointerDown.current = false;
    window.clearTimeout(settleTimer.current);
    scrollRef.current?.classList.remove('is-scrolling');
    setActivePage(index);
    onPageChange?.(index);
  }, [onPageChange]);

  useEffect(() => () => window.clearTimeout(settleTimer.current), []);

  useEffect(() => {
    if (controlledIndex == null || userScrolling.current || pointerDown.current) return undefined;
    const el = scrollRef.current;
    if (!el || el.clientWidth === 0) return undefined;
    const targetLeft = controlledIndex * el.clientWidth;
    setActivePage(controlledIndex);
    if (Math.abs(el.scrollLeft - targetLeft) > 16) {
      programmatic.current = true;
      el.scrollTo({ left: targetLeft, behavior: 'smooth' });
      const clearProgrammatic = window.setTimeout(() => {
        programmatic.current = false;
      }, 1500);
      return () => window.clearTimeout(clearProgrammatic);
    }
    programmatic.current = false;
    return undefined;
  }, [controlledIndex]);

  if (pageChildren.length <= 1 && !editMode) {
    return <div className="tm-page-pager-wrap">{pageChildren[0] ?? null}</div>;
  }

  const indicatorLabel = (index) => pagesMeta[index]?.name || `Seite ${index + 1}`;

  return (
    <div className="tm-page-pager-wrap">
      <div
        ref={scrollRef}
        className="tm-page-pager"
        onPointerDown={() => {
          pointerDown.current = true;
          if (!programmatic.current) userScrolling.current = true;
        }}
        onPointerUp={releasePointer}
        onPointerCancel={releasePointer}
        onScroll={noteUserScroll}
        onScrollEnd={() => {
          if (programmatic.current) {
            programmatic.current = false;
            return;
          }
          if (!pointerDown.current) settleUserScroll();
        }}
      >
        {pageChildren.map((page, i) => (
          <div key={pagesMeta[i]?.id || i} className="tm-page">
            {page}
          </div>
        ))}
      </div>

      <div className={`tm-page-indicator${editMode ? ' tm-page-indicator--edit' : ''}`}>
        <div className="tm-page-indicator-track" role="tablist" aria-label="Seiten">
          {pageChildren.map((_, i) => (
            <button
              key={pagesMeta[i]?.id || i}
              type="button"
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={indicatorLabel(i)}
              className={`${editMode ? 'tm-page-bar' : 'tm-page-dot'}${i === currentIndex ? ' active' : ''}`}
              onClick={() => goToPage(i)}
            />
          ))}
        </div>

        {editMode && (
          <button
            type="button"
            className="tm-page-manage-trigger"
            onClick={onOpenPageManage}
            aria-label="Seiten verwalten"
          >
            <GripHorizontal size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
