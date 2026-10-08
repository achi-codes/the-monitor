import { useEffect } from 'react';

export function getOverlayRoot() {
  const host = document.querySelector('the-monitor-dashboard');
  if (host?.shadowRoot) return host.shadowRoot;
  return document.body;
}

export function useOverlayLock(active) {
  useEffect(() => {
    if (!active) return undefined;

    const host = document.querySelector('the-monitor-dashboard');
    const scrollTarget = host?.shadowRoot?.querySelector('.tm-page-pager')
      || document.querySelector('.tm-page-pager');

    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyTouchAction = document.body.style.touchAction;
    const prevScrollTouchAction = scrollTarget?.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    if (scrollTarget) scrollTarget.style.touchAction = 'none';

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.touchAction = prevBodyTouchAction;
      if (scrollTarget) scrollTarget.style.touchAction = prevScrollTouchAction || '';
    };
  }, [active]);
}
