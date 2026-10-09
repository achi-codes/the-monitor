import { useEffect } from 'react';

let registeredRoot = null;

export function registerOverlayRoot(node) {
  if (node) {
    registeredRoot = node;
    return;
  }
  registeredRoot = null;
}

export function unregisterOverlayRoot(node) {
  if (!node || registeredRoot === node) registeredRoot = null;
}

export function getOverlayRoot(fromNode) {
  const root = fromNode?.getRootNode?.();
  if (root instanceof ShadowRoot && root.host?.localName === 'the-monitor-dashboard') {
    return root;
  }
  if (registeredRoot?.isConnected) return registeredRoot;
  const host = document.querySelector('the-monitor-dashboard');
  if (host?.shadowRoot) return host.shadowRoot;
  return document.body;
}

export function useOverlayLock(active) {
  useEffect(() => {
    if (!active) return undefined;

    const overlayRoot = getOverlayRoot();
    const scrollTarget = overlayRoot?.querySelector?.('.tm-page-pager')
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
