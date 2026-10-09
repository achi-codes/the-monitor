import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import { createNativeCardPicker, ensureNativeCardPicker } from '../lib/haCardEditor';

export default function HaNativeCardPicker({ hass, onClose, onSelect, onUnavailable, onOpenDashboardCopy }) {
  useOverlayLock(true);
  const [state, setState] = useState('loading');
  const slotRef = useRef(null);
  const pickerRef = useRef(null);
  const hassRef = useRef(hass);
  const onSelectRef = useRef(onSelect);
  const onUnavailableRef = useRef(onUnavailable);

  hassRef.current = hass;
  onSelectRef.current = onSelect;
  onUnavailableRef.current = onUnavailable;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const ok = await ensureNativeCardPicker();
      if (cancelled) return;
      if (!ok || !slotRef.current) {
        setState('failed');
        onUnavailableRef.current?.();
        return;
      }
      const picker = createNativeCardPicker(hassRef.current, (config) => onSelectRef.current(config));
      pickerRef.current = picker;
      slotRef.current.replaceChildren(picker);
      setState('ready');
      picker.focus?.();
    })();
    return () => {
      cancelled = true;
      pickerRef.current?.remove();
      pickerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (pickerRef.current && hass) pickerRef.current.hass = hass;
  }, [hass]);

  return createPortal(
    <div className="tm-ha-picker-overlay" role="presentation">
      <button type="button" className="tm-ha-picker-backdrop" onClick={onClose} aria-label="Schließen" />
      <div className="tm-ha-editor-panel tm-ha-native-picker-panel" role="dialog" aria-modal="true" aria-label="Karte wählen">
        <div className="tm-ha-editor-header">
          <div className="tm-ha-editor-heading">
            <div className="tm-ha-editor-title">Karte wählen</div>
          </div>
          <button type="button" className="tm-ha-editor-icon-btn" onClick={onClose} aria-label="Schließen">
            <X size={18} />
          </button>
        </div>
        <div className="tm-ha-native-picker-body">
          {state === 'loading' ? (
            <div className="tm-ha-editor-note tm-ha-native-picker-note">Kartenauswahl wird geladen…</div>
          ) : null}
          <div ref={slotRef} className="tm-ha-native-picker-slot" />
        </div>
        <div className="tm-ha-editor-footer">
          <button type="button" className="tm-ha-editor-text-btn" onClick={onOpenDashboardCopy}>
            Aus anderem Dashboard übernehmen
          </button>
          <button type="button" className="tm-ha-editor-text-btn" onClick={onClose}>
            Abbrechen
          </button>
        </div>
      </div>
    </div>,
    getOverlayRoot(),
  );
}
