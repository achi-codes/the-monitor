import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { getFriendlyName, listEntities } from '../lib/entities';

export default function EntityPicker({ value, onChange, domains = null, placeholder = 'Entität wählen…' }) {
  const { hass } = useHass();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const entities = listEntities(hass, { domains, search });
  const selectedName = value ? getFriendlyName(hass, value) : null;

  useEffect(() => {
    if (!open) return undefined

    const handleClickOutside = (e) => {
      const path = typeof e.composedPath === 'function' ? e.composedPath() : [e.target]
      if (containerRef.current && path.includes(containerRef.current)) return
      setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleSelect = (entityId) => {
    onChange(entityId);
    setOpen(false);
    setSearch('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('');
  };

  return (
    <div className="tm-entity-picker" ref={containerRef}>
      <button
        type="button"
        className="tm-entity-picker-trigger"
        onClick={() => setOpen(!open)}
      >
        <span style={{ opacity: selectedName ? 1 : 0.5 }}>
          {selectedName || placeholder}
        </span>
        <span className="tm-flex-center tm-gap-2">
          {value && (
            <span
              role="button"
              tabIndex={0}
              onClick={handleClear}
              onKeyDown={(e) => e.key === 'Enter' && handleClear(e)}
              style={{ opacity: 0.5, display: 'flex' }}
            >
              <X size={16} />
            </span>
          )}
          <ChevronDown size={18} style={{ opacity: 0.5 }} />
        </span>
      </button>

      {open && (
        <div
          className="tm-entity-picker-dropdown"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <input
            className="tm-entity-picker-search"
            type="text"
            placeholder="Suchen…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <div className="tm-entity-picker-list">
            {entities.length === 0 && (
              <div style={{ padding: '1rem', opacity: 0.5, textAlign: 'center' }}>
                Keine Entitäten gefunden
              </div>
            )}
            {entities.map((entity) => (
              <button
                key={entity.id}
                type="button"
                className={`tm-entity-picker-item${entity.id === value ? ' selected' : ''}`}
                onClick={() => handleSelect(entity.id)}
              >
                <span className="tm-font-bold">{entity.name}</span>
                <span className="tm-text-xs tm-opacity-50">
                  {entity.id} · {entity.state}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
