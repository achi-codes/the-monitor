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
  const [activePage, setActivePage] = useState(0);

  const currentIndex = controlledIndex ?? activePage;

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.clientWidth === 0) return;
    const page = Math.round(el.scrollLeft / el.clientWidth);
    setActivePage(page);
    onPageChange?.(page);
  }, [onPageChange]);

  const goToPage = useCallback((index) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
    setActivePage(index);
    onPageChange?.(index);
  }, [onPageChange]);

  useEffect(() => {
    if (controlledIndex == null) return;
    const el = scrollRef.current;
    if (!el || el.clientWidth === 0) return;
    const targetLeft = controlledIndex * el.clientWidth;
    if (Math.abs(el.scrollLeft - targetLeft) > 2) {
      el.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }
    setActivePage(controlledIndex);
  }, [controlledIndex]);

  if (pageChildren.length <= 1 && !editMode) {
    return <div className="tm-page-pager-wrap">{pageChildren[0] ?? null}</div>;
  }

  const indicatorLabel = (index) => pagesMeta[index]?.name || `Seite ${index + 1}`;

  return (
    <div className="tm-page-pager-wrap">
      <div ref={scrollRef} className="tm-page-pager" onScroll={handleScroll}>
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
