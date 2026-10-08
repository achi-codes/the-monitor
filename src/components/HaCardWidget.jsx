import { useEffect, useRef, useState } from 'react';
import {
  canRenderHaCards,
  describeCard,
  monitorHostFrom,
  mountHaCard,
} from '../lib/haCards';

function hostMessage(text) {
  const message = document.createElement('div');
  message.className = 'tm-ha-card-host-message';
  message.textContent = text;
  return message;
}

export default function HaCardWidget({ widget, hass, editMode = false }) {
  const slotName = `tm-ha-${widget.id}`;
  const slotRef = useRef(null);
  const hostRef = useRef(null);
  const cardRef = useRef(null);
  const hassRef = useRef(hass);
  const editModeRef = useRef(editMode);
  const cardConfigRef = useRef(widget.card);
  const [live, setLive] = useState(() => canRenderHaCards());
  const configKey = JSON.stringify(widget.card || null);
  const hassReady = Boolean(hass?.connection);

  hassRef.current = hass;
  editModeRef.current = editMode;
  cardConfigRef.current = widget.card;

  useEffect(() => {
    setLive(Boolean(monitorHostFrom(slotRef.current)) && canRenderHaCards());
  }, [hass]);

  useEffect(() => {
    const slot = slotRef.current;
    const monitor = monitorHostFrom(slot);
    const card = cardConfigRef.current;
    if (!monitor || !card || !canRenderHaCards()) return undefined;

    let cancelled = false;
    const wrapper = document.createElement('div');
    wrapper.slot = slotName;
    wrapper.className = `tm-ha-card-host${editModeRef.current ? ' is-editing' : ''}`;
    monitor.appendChild(wrapper);
    hostRef.current = wrapper;

    const mount = async () => {
      wrapper.replaceChildren();
      try {
        const element = await mountHaCard(wrapper, card, hassRef.current, {
          preview: editModeRef.current,
        });
        if (cancelled) {
          element.remove();
          return;
        }
        cardRef.current = element;
      } catch (error) {
        if (cancelled) return;
        cardRef.current = null;
        wrapper.appendChild(hostMessage(error?.message || 'Karte konnte nicht geladen werden'));
      }
    };

    mount();

    return () => {
      cancelled = true;
      cardRef.current = null;
      hostRef.current = null;
      wrapper.remove();
    };
  }, [configKey, hassReady, slotName]);

  useEffect(() => {
    const element = cardRef.current;
    if (element && hass) element.hass = hass;
  }, [hass]);

  useEffect(() => {
    hostRef.current?.classList.toggle('is-editing', Boolean(editMode));
    const element = cardRef.current;
    if (element) element.preview = Boolean(editMode);
  }, [editMode]);

  const summary = widget.card ? describeCard(widget.card) : 'Keine Karte gewählt';

  return (
    <div className={`tm-ha-card${live && widget.card ? ' tm-ha-card--live' : ''}`}>
      <slot ref={slotRef} name={slotName} className="tm-ha-card-slot" />
      {!(live && widget.card) && (
        <div className="tm-card tm-ha-card-fallback">
          <div className="tm-ha-card-fallback-kicker">Home Assistant</div>
          <div className="tm-ha-card-fallback-title">{summary}</div>
          <p>
            {widget.card
              ? 'Im Home-Assistant-Dashboard erscheint hier die echte Lovelace-Karte.'
              : 'Im Bearbeiten-Modus eine Karte aus einem Dashboard wählen oder YAML einfügen.'}
          </p>
        </div>
      )}
    </div>
  );
}
