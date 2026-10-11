import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
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
import { getWasteArt } from '../lib/wasteArt';

function WasteBin({ type, className }) {
  return (
    <img
      className={className || 'tm-waste-bin'}
      src={getWasteArt(type)}
      alt=""
      draggable={false}
    />
  );
}

function PickupRow({ pickup }) {
  const meta = WASTE_TYPES[pickup.type] || WASTE_TYPES.rest;
  return (
    <div className="tm-waste-row">
      <span className="tm-waste-row-thumb">
        <WasteBin type={pickup.type} className="tm-waste-row-bin" />
      </span>
      <span className="tm-waste-row-copy">
        <span className="tm-waste-row-name">{pickupLabel(pickup)}</span>
        <span className="tm-waste-row-date">{formatWasteListDate(pickup.date)}</span>
      </span>
      <span className="tm-waste-row-eta" style={{ color: meta.color }}>{formatWasteInDays(pickup.days)}</span>
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
                <WasteBin type={featured.type} />
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
