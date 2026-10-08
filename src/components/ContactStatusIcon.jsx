import {
  DoorClosed,
  DoorOpen,
  PanelTop,
  PanelTopOpen,
  CircleDot,
} from 'lucide-react';
import { getContactKind, isContactMoving, isContactOpen } from '../lib/contactStatus';

function pickIcon(kind, open) {
  if (kind === 'door') return open ? DoorOpen : DoorClosed;
  if (kind === 'window') return open ? PanelTopOpen : PanelTop;
  return CircleDot;
}

export default function ContactStatusIcon({
  entity,
  size = 28,
  strokeWidth = 2,
  className = '',
}) {
  const kind = getContactKind(entity);
  const open = isContactOpen(entity);
  const moving = isContactMoving(entity);
  const Icon = pickIcon(kind, open);

  return (
    <span
      className={`tm-contact-icon-badge${open ? ' tm-contact-icon-badge--open' : ' tm-contact-icon-badge--closed'}${moving ? ' tm-contact-icon-badge--moving' : ''} tm-contact-icon-badge--${kind}${className ? ` ${className}` : ''}`}
      aria-hidden
    >
      <Icon size={size} strokeWidth={strokeWidth} />
    </span>
  );
}
