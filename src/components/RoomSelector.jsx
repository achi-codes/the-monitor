import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function RoomList({ rooms, activeRoomId, onChange, disabled, className, optionClassName }) {
  return (
    <ul className={className} role="listbox" aria-label="Räume">
      {rooms.map((room) => (
        <li key={room.id} role="option" aria-selected={room.id === activeRoomId}>
          <button
            type="button"
            className={`${optionClassName}${room.id === activeRoomId ? ' active' : ''}`}
            disabled={disabled}
            onClick={() => onChange(room.id)}
          >
            {room.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function RoomSelector({
  rooms,
  activeRoomId,
  onChange,
  disabled = false,
  variant = 'dropdown',
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const activeRoom = rooms.find((room) => room.id === activeRoomId) || rooms[0];

  useEffect(() => {
    if (!open || variant !== 'dropdown') return undefined;

    const handleClickOutside = (event) => {
      const path = typeof event.composedPath === 'function' ? event.composedPath() : [event.target];
      if (rootRef.current && path.includes(rootRef.current)) return;
      setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, variant]);

  if (!activeRoom || rooms.length <= 1) return null;

  if (variant === 'sidebar') {
    return (
      <nav className="tm-room-sidebar" aria-label="Räume">
        <p className="tm-room-sidebar-title">Räume</p>
        <RoomList
          rooms={rooms}
          activeRoomId={activeRoomId}
          onChange={onChange}
          disabled={disabled}
          className="tm-room-sidebar-list"
          optionClassName="tm-room-sidebar-option"
        />
      </nav>
    );
  }

  return (
    <div className="tm-room-selector" ref={rootRef}>
      <button
        type="button"
        className="tm-room-selector-trigger"
        onClick={() => setOpen((value) => !value)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Raum wechseln"
      >
        <span className="tm-room-selector-label">{activeRoom.name}</span>
        <ChevronDown size={18} className={`tm-room-selector-chevron${open ? ' open' : ''}`} />
      </button>

      {open && (
        <RoomList
          rooms={rooms}
          activeRoomId={activeRoomId}
          onChange={(roomId) => {
            onChange(roomId);
            setOpen(false);
          }}
          disabled={disabled}
          className="tm-room-selector-menu"
          optionClassName="tm-room-selector-option"
        />
      )}
    </div>
  );
}
