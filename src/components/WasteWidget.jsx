import { useCallback, useEffect, useMemo, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useHass } from '../context/HassContext';
import {
  WASTE_TYPES,
  formatWasteDate,
  formatWasteWhen,
  getMockWastePickups,
  groupWastePickups,
  loadWastePickups,
  pickupLabel,
  resolveWasteEntityIds,
} from '../lib/waste';

function WheelieBin({ type }) {
  const meta = WASTE_TYPES[type] || WASTE_TYPES.rest;
  return (
    <svg className="tm-waste-bin" viewBox="0 0 64 80" aria-hidden="true">
      <rect x="23" y="3" width="18" height="5" rx="2" fill={meta.lid} />
      <rect x="8" y="9" width="48" height="10" rx="3.2" fill={meta.lid} />
      <path d="M13 22h38l-3.2 46H16.2z" fill={meta.color} />
      <path d="M18 30h28M17.4 40h29.2M16.8 50h30.4" stroke="rgba(255,255,255,0.18)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="22" cy="71.5" r="5.2" fill={meta.lid} />
      <circle cx="42" cy="71.5" r="5.2" fill={meta.lid} />
      <circle cx="22" cy="71.5" r="2" fill="rgba(255,255,255,0.25)" />
      <circle cx="42" cy="71.5" r="2" fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}

function YellowSack() {
  const meta = WASTE_TYPES.yellow;
  return (
    <svg className="tm-waste-bin tm-waste-bin--sack" viewBox="0 0 64 80" aria-hidden="true">
      <path d="M24 10c0-4 4-7 8-7s8 3 8 7" fill="none" stroke={meta.lid} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M18 16h28l-3 8H21z" fill={meta.lid} />
      <path d="M20 24h24c3 10 6 24 4 42H16c-2-18 1-32 4-42z" fill={meta.color} />
      <path d="M24 36c4 2 12 2 16 0M23 48c5 2 13 2 18 0" stroke="rgba(0,0,0,0.12)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function WasteArt({ type }) {
  const meta = WASTE_TYPES[type] || WASTE_TYPES.rest;
  if (meta.kind === 'sack') return <YellowSack />;
  return <WheelieBin type={type} />;
}

function PickupRow({ pickup }) {
  const meta = WASTE_TYPES[pickup.type] || WASTE_TYPES.rest;
  return (
    <div className="tm-waste-row">
      <span className="tm-waste-row-dot" style={{ background: meta.color }} />
      <span className="tm-waste-row-when">{formatWasteWhen(pickup.days, pickup.date)}</span>
      <span className="tm-waste-row-date">{formatWasteDate(pickup.date)}</span>
      <span className="tm-waste-row-name">{pickupLabel(pickup)}</span>
    </div>
  );
}

export default function WasteWidget({ widget, editMode = false, onConfigure }) {
  const { hass, isMock, isConnected, revision } = useHass();
  const [now, setNow] = useState(() => new Date());
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  const entityIds = useMemo(() => resolveWasteEntityIds(widget, hass), [widget, hass, revision]);

  const load = useCallback(async () => {
    if (isMock) {
      setPickups(getMockWastePickups());
      return;
    }
    if (!isConnected || !entityIds.length) {
      setPickups([]);
      return;
    }
    try {
      setPickups(await loadWastePickups(hass, entityIds));
    } catch {
      setPickups([]);
    }
  }, [entityIds, hass, isConnected, isMock]);

  useEffect(() => {
    load();
    const timer = window.setInterval(load, 15 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, [load, revision]);

  const { next, upcoming } = useMemo(() => groupWastePickups(pickups), [pickups]);
  const heading = widget?.label || 'Müll';
  const nextWhen = next?.[0] ? formatWasteWhen(next[0].days, next[0].date) : null;
  const urgent = next?.[0]?.days === 0;

  return (
    <div
      className={`tm-card tm-waste-card${urgent ? ' tm-waste-card--today' : ''}`}
      onClick={editMode ? onConfigure : undefined}
      role={editMode ? 'button' : undefined}
    >
      <div className="tm-waste-inner">
        <header className="tm-waste-head">
          <span>{heading}</span>
          <span className="tm-waste-chip" aria-hidden="true">
            <Trash2 />
          </span>
        </header>

        {next ? (
          <>
            <div className="tm-waste-hero">
              <div className="tm-waste-when">{nextWhen}</div>
              <div className="tm-waste-hero-bins">
                {next.map((pickup) => (
                  <div key={pickup.id} className="tm-waste-hero-bin">
                    <WasteArt type={pickup.type} />
                  </div>
                ))}
              </div>
              <div className="tm-waste-hero-names">
                {next.map((pickup) => pickupLabel(pickup)).join(' · ')}
              </div>
            </div>
            {upcoming.length > 0 && (
              <div className="tm-waste-list">
                {upcoming.map((pickup) => (
                  <PickupRow key={pickup.id} pickup={pickup} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="tm-waste-empty">Keine Abfuhrtermine</div>
        )}
      </div>
    </div>
  );
}
