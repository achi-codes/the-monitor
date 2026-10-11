import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronRight, Leaf, MapPin, Package, Recycle, Trash2 } from 'lucide-react';
import { useHass } from '../context/HassContext';
import {
  WASTE_TYPES,
  formatWasteInDays,
  formatWasteListDate,
  formatWasteMonth,
  formatWasteWeekday,
  getMockWastePickups,
  groupWastePickups,
  loadWastePickups,
  pickupLabel,
  resolveWasteEntityIds,
  wasteLocation,
} from '../lib/waste';

const ROW_ICONS = {
  paper: Trash2,
  bio: Leaf,
  yellow: Recycle,
  rest: Trash2,
  glass: Recycle,
  bulk: Package,
};

function WheelieBin({ type }) {
  const meta = WASTE_TYPES[type] || WASTE_TYPES.rest;
  return (
    <svg className="tm-waste-bin" viewBox="0 0 80 104" aria-hidden="true">
      <rect x="34" y="2" width="12" height="16" rx="6" fill={meta.lid} />
      <rect x="12" y="16" width="56" height="14" rx="7" fill={meta.lid} />
      <path d="M18 30h44c3.2 0 5.6 2.4 5.4 5.6L64 88c-.3 4.6-4 8-8.6 8H24.6c-4.6 0-8.3-3.4-8.6-8L12.6 35.6C12.4 32.4 14.8 30 18 30z" fill={meta.color} />
      <path d="M20 42h40M19 56h42M18.4 70h43.2" stroke="rgba(255,255,255,0.14)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="58" cy="94" r="7.2" fill="#1c1c1e" />
      <circle cx="58" cy="94" r="2.6" fill="#6b6b70" />
    </svg>
  );
}

function PickupRow({ pickup }) {
  const meta = WASTE_TYPES[pickup.type] || WASTE_TYPES.rest;
  const Icon = ROW_ICONS[pickup.type] || Trash2;
  return (
    <div className="tm-waste-row" style={{ background: `color-mix(in srgb, ${meta.color} 10%, transparent)` }}>
      <span className="tm-waste-row-dot" style={{ background: meta.color }} />
      <span className="tm-waste-row-icon" style={{ background: `color-mix(in srgb, ${meta.color} 16%, transparent)`, color: meta.color }}>
        <Icon />
      </span>
      <span className="tm-waste-row-copy">
        <span className="tm-waste-row-name">{pickupLabel(pickup)}</span>
        <span className="tm-waste-row-date">{formatWasteListDate(pickup.date)}</span>
      </span>
      <span className="tm-waste-row-eta" style={{ color: meta.lid || meta.color }}>{formatWasteInDays(pickup.days)}</span>
    </div>
  );
}

export default function WasteWidget({ widget, editMode = false, onConfigure }) {
  const { hass, isMock, isConnected, revision } = useHass();
  const [pickups, setPickups] = useState([]);

  const entityIds = useMemo(() => resolveWasteEntityIds(widget, hass), [widget, hass, revision]);

  const load = useCallback(async () => {
    if (isMock) {
      if (entityIds.some((id) => id.startsWith('calendar.'))) {
        const next = await loadWastePickups(hass, entityIds);
        setPickups((prev) => (next.length ? next : prev.length ? prev : getMockWastePickups()));
        return;
      }
      setPickups(getMockWastePickups());
      return;
    }
    if (!isConnected || !entityIds.length) return;
    try {
      const next = await loadWastePickups(hass, entityIds);
      setPickups((prev) => (next.length ? next : prev));
    } catch {
      // keep last successful pickups
    }
  }, [entityIds, hass, isConnected, isMock]);

  useEffect(() => {
    load();
    const retries = [800, 2500, 6000].map((ms) => window.setTimeout(load, ms));
    const timer = window.setInterval(load, 15 * 60 * 1000);
    return () => {
      retries.forEach((id) => window.clearTimeout(id));
      window.clearInterval(timer);
    };
  }, [load, revision]);

  const { next, upcoming } = useMemo(() => groupWastePickups(pickups), [pickups]);
  const featured = next?.[0] || null;
  const list = useMemo(() => (next ? [...next, ...upcoming] : []), [next, upcoming]);
  const heading = !widget?.label || /^(müll|muell|waste)$/i.test(widget.label.trim())
    ? 'Müllkalender'
    : widget.label;
  const place = wasteLocation(widget, pickups);
  const urgent = featured?.days === 0;

  return (
    <div
      className={`tm-card tm-waste-card${urgent ? ' tm-waste-card--today' : ''}`}
      onClick={editMode ? onConfigure : undefined}
      role={editMode ? 'button' : undefined}
    >
      <div className="tm-waste-inner">
        <section className="tm-waste-hero">
          <header className="tm-waste-hero-head">
            <div className="tm-waste-title">{heading}</div>
            <div className="tm-waste-place">{place}</div>
          </header>

          {featured ? (
            <div className="tm-waste-feature">
              <div className="tm-waste-date">
                <span className="tm-waste-date-week">{formatWasteWeekday(featured.date)}</span>
                <span className="tm-waste-date-day">{featured.date.getDate()}</span>
                <span className="tm-waste-date-month">{formatWasteMonth(featured.date)}</span>
              </div>
              <div className="tm-waste-feature-bin">
                <div className="tm-waste-hero-bins">
                  {next.map((pickup) => (
                    <div key={pickup.id} className="tm-waste-hero-bin">
                      <WheelieBin type={pickup.type} />
                    </div>
                  ))}
                </div>
                <div className="tm-waste-hero-names">
                  {next.map((pickup) => pickupLabel(pickup)).join(' · ')}
                </div>
              </div>
            </div>
          ) : (
            <div className="tm-waste-empty">Keine Abfuhrtermine</div>
          )}
        </section>

        <section className="tm-waste-agenda">
          <header className="tm-waste-agenda-head">
            <span className="tm-waste-agenda-label">
              <MapPin />
              Nächste Abholung
            </span>
            <span className="tm-waste-chip" aria-hidden="true">
              <ChevronRight />
            </span>
          </header>
          <div className="tm-waste-list">
            {list.length ? list.map((pickup) => (
              <PickupRow key={pickup.id} pickup={pickup} />
            )) : (
              <div className="tm-waste-empty">Keine weiteren Termine</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
