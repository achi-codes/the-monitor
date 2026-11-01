import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, X } from 'lucide-react';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import {
  BATTERY_KWH,
  HALF_BATTERY_KWH,
  buildChargeOutlook,
  formatBerlinClock,
  formatBerlinDate,
  formatBerlinRange,
} from '../lib/chargePrices';

const CT = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const EURO = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
const KWH = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 });
const HOURS = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 });

const REASONS = {
  missing: 'Preisdaten fehlen',
  stale: 'Daten sind veraltet',
  incomparable: 'Prognose nicht vergleichbar',
  empty: 'Kein vollständiges Fenster',
};

const STATUS_LABEL = {
  wait: 'Lieber warten',
  today: 'Heute laden',
  next: 'Nächstes Fenster',
};

const CARD_STATUS = {
  wait: 'Warten',
  today: 'Heute',
  next: 'Nächstes',
};

function formatCt(value, estimated = false) {
  if (value == null || !Number.isFinite(value)) return '—';
  const text = `${CT.format(value)} ct`;
  return estimated ? `≈ ${text}` : text;
}

function formatSignedCt(value) {
  if (!Number.isFinite(value)) return '—';
  const prefix = value > 0 ? '+' : value < 0 ? '−' : '';
  return `${prefix}${CT.format(Math.abs(value))} ct`;
}

function dayFor(days, dayKey) {
  return days.find((day) => day.key === dayKey) || null;
}

function windowWhen(days, window) {
  if (!window) return '';
  const label = dayFor(days, window.dayKey)?.label || '';
  return `${label} ${formatBerlinRange(window.startMs, window.endMs)}`.trim();
}

function PriceBadge({ badge }) {
  if (!badge) return null;
  return <span className="tm-charge-badge">{badge}</span>;
}

function DayRow({ day, active, compact = false }) {
  const window = day.window;
  return (
    <div className={`tm-charge-day${active ? ' is-active' : ''}${window ? '' : ' is-empty'}`}>
      <span className="tm-charge-day-name">{day.label}</span>
      {window ? (
        <>
          <span className="tm-charge-day-when">{formatBerlinRange(window.startMs, window.endMs)}</span>
          <span className="tm-charge-day-price">
            {formatCt(window.avg, window.estimated)}
            {!compact && <PriceBadge badge={window.badge} />}
          </span>
        </>
      ) : (
        <span className="tm-charge-day-when">
          {compact ? '—' : (day.quarterCount > 0 ? 'kein vollständiges Fenster' : 'keine Preise')}
        </span>
      )}
    </div>
  );
}

function ChargeSheet({ outlook, title, onClose }) {
  const closeRef = useRef(null);
  const { recommendation, days, current, year, comparison, notes } = outlook;
  const activeStart = recommendation.window?.startMs;
  const visibleDays = days.slice(0, 3);
  const hiddenDays = days.slice(3);
  const savingsEstimated = Boolean(recommendation.window?.estimated || recommendation.todayWindow?.estimated);

  useOverlayLock(true);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return createPortal(
    <div className="tm-charge-overlay" role="presentation">
      <button type="button" className="tm-charge-backdrop" onClick={onClose} aria-label="Schließen" />
      <div
        className="tm-charge-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tm-charge-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="tm-charge-sheet-head">
          <div>
            <h2 id="tm-charge-title">{title}</h2>
            <p>Grandland · Mutterschiff · 73 kWh</p>
          </div>
          <button ref={closeRef} type="button" className="tm-charge-close" onClick={onClose} aria-label="Schließen">
            <X size={18} />
          </button>
        </header>

        <div className="tm-charge-sheet-body">
          <section className="tm-charge-hero-block">
            <div className="tm-charge-kicker">
              {recommendation.status === 'none' ? 'Keine Empfehlung' : STATUS_LABEL[recommendation.status]}
            </div>
            <div className="tm-charge-hero-title">
              {recommendation.status === 'none'
                ? (REASONS[recommendation.reason] || REASONS.empty)
                : windowWhen(days, recommendation.window)}
            </div>
            {recommendation.window && (
              <div className="tm-charge-hero-price">
                {formatCt(recommendation.window.avg, recommendation.window.estimated)}
                <PriceBadge badge={recommendation.window.badge} />
              </div>
            )}
            {recommendation.status === 'wait' && recommendation.diffCt != null && (
              <p className="tm-charge-lede">
                {CT.format(recommendation.diffCt)} ct günstiger als das beste Fenster heute.
              </p>
            )}
            {recommendation.nearMiss && (
              <p className="tm-charge-lede">
                {windowWhen(days, recommendation.nearMiss.window)} wäre {CT.format(recommendation.nearMiss.diffCt)} ct günstiger. Warten lohnt ab 3 ct.
              </p>
            )}
          </section>

          <div className="tm-charge-split">
            <section className="tm-charge-group">
              <h3>Jetzt</h3>
              <div className="tm-charge-figure">{current ? formatCt(current.price, false) : '—'}</div>
              <p>{current ? `Tibber${current.timestamp ? ` · ${formatBerlinClock(current.timestamp)}` : ''}` : 'Kein bestätigter Preis'}</p>
            </section>
            <section className="tm-charge-group">
              <h3>Dieses Jahr</h3>
              {year.status === 'ok' ? (
                <>
                  <div className="tm-charge-figure">{year.ct != null ? `${CT.format(year.ct)} ct` : '—'}</div>
                  <p>
                    {year.kwh != null ? `${KWH.format(year.kwh)} kWh geladen` : 'Menge fehlt'}
                    {year.costEuro != null ? ` · ca. ${EURO.format(year.costEuro)}` : ''}
                  </p>
                </>
              ) : (
                <p>Jahreswerte von evcc fehlen.</p>
              )}
            </section>
          </div>

          {recommendation.status === 'wait' && (
            <section className="tm-charge-group">
              <h3>Ersparnis, wenn du wartest</h3>
              <div className="tm-charge-save">
                <div>
                  <span>50 %</span>
                  <strong>{savingsEstimated ? 'ca. ' : ''}{EURO.format(recommendation.saveHalfEuro)}</strong>
                  <small>{KWH.format(HALF_BATTERY_KWH)} kWh</small>
                </div>
                <div>
                  <span>100 %</span>
                  <strong>{savingsEstimated ? 'ca. ' : ''}{EURO.format(recommendation.saveFullEuro)}</strong>
                  <small>{KWH.format(BATTERY_KWH)} kWh</small>
                </div>
              </div>
              <p>
                Hochrechnung auf den Fensterpreis, ohne Ladeverluste.
                {' '}
                {KWH.format(HALF_BATTERY_KWH)} und {KWH.format(BATTERY_KWH)} kWh sind die Akkukapazität, nicht die Menge, die in zwei Stunden geladen wird.
              </p>
            </section>
          )}

          <section className="tm-charge-group">
            <h3>Günstigstes Fenster</h3>
            <div className="tm-charge-days">
              {visibleDays.map((day) => (
                <DayRow key={day.key} day={day} active={day.window?.startMs === activeStart} />
              ))}
            </div>
            {hiddenDays.length > 0 && (
              <details className="tm-charge-disclosure">
                <summary>
                  Vier weitere Tage
                  <ChevronDown size={16} aria-hidden />
                </summary>
                <div className="tm-charge-days">
                  {hiddenDays.map((day) => (
                    <DayRow key={day.key} day={day} active={day.window?.startMs === activeStart} />
                  ))}
                </div>
              </details>
            )}
          </section>

          <section className="tm-charge-group">
            <h3>Prognose und echter Preis</h3>
            {comparison.status === 'missing' && <p>Der Vergleich ist noch nicht da.</p>}
            {comparison.status === 'waiting' && (
              <p>
                Wartet auf bestätigte Preise.
                {comparison.stored > 0 ? ` ${comparison.stored} Prognosen sind gespeichert.` : ''}
              </p>
            )}
            {comparison.status === 'ready' && (
              <p>
                Abweichung im Schnitt {formatCt(comparison.mae)}.
                {' '}
                {comparison.comparisons} geprüfte Fenster
                {comparison.stored > comparison.comparisons ? `, ${comparison.stored} gespeichert` : ''}.
                {comparison.bias != null && (
                  comparison.bias > 0
                    ? ` Im Schnitt ${formatCt(comparison.bias)} teurer als prognostiziert.`
                    : comparison.bias < 0
                      ? ` Im Schnitt ${formatCt(Math.abs(comparison.bias))} günstiger als prognostiziert.`
                      : ' Im Schnitt wie prognostiziert.'
                )}
              </p>
            )}
            {comparison.mixedLeads && (
              <p>Der Mittelwert mischt kurze und lange Vorläufe. Unten steht der Vorlauf je Fenster.</p>
            )}
            {comparison.samples.length > 0 && (
              <details className="tm-charge-disclosure">
                <summary>
                  Einzelvergleiche
                  <ChevronDown size={16} aria-hidden />
                </summary>
                <div className="tm-charge-samples">
                  {comparison.samples.map((sample) => {
                    const startMs = Date.parse(sample.start);
                    const endMs = Date.parse(sample.end);
                    const delta = sample.actual == null ? null : sample.actual - sample.predicted;
                    return (
                      <div key={`${sample.date}-${sample.start}`} className="tm-charge-sample">
                        <div className="tm-charge-sample-when">
                          {Number.isFinite(startMs) ? formatBerlinDate(startMs) : sample.date}
                          {Number.isFinite(startMs) && Number.isFinite(endMs) ? ` · ${formatBerlinRange(startMs, endMs)}` : ''}
                        </div>
                        <div className="tm-charge-sample-prices">
                          <span>Prognose {formatCt(sample.predicted, true)}</span>
                          <span>{sample.actual == null ? 'Tibber folgt' : `Tibber ${formatCt(sample.actual)}`}</span>
                          {delta != null && <span className={delta > 0 ? 'is-up' : 'is-down'}>{formatSignedCt(delta)}</span>}
                        </div>
                        {sample.leadHours != null && (
                          <div className="tm-charge-sample-lead">Vorlauf {HOURS.format(sample.leadHours)} Std.</div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {comparison.method && <p className="tm-charge-method">{comparison.method}</p>}
              </details>
            )}
          </section>

          {year.status === 'ok' && (
            <p className="tm-charge-footnote">
              Der Jahrespreis ist die evcc-Statistik für dieses Jahr: alle Ladepunkte, abgeschlossene Vorgänge, inklusive Solar. Das ist keine Stromrechnung.
            </p>
          )}
          {notes.map((note) => (
            <p key={note} className="tm-charge-footnote">{note}</p>
          ))}
        </div>
      </div>
    </div>,
    getOverlayRoot(),
  );
}

export default function ChargePriceWidget({ widget, hass, editMode = false }) {
  const [open, setOpen] = useState(false);
  const outlook = buildChargeOutlook(hass?.states);
  const { recommendation, days, current, year } = outlook;
  const title = widget?.label?.trim() || 'Dynamische Ladepreise';
  const previewDays = days.slice(0, 3);
  const activeStart = recommendation.window?.startMs;

  return (
    <>
      <button
        type="button"
        className="tm-charge-card"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={(event) => {
          if (editMode) return;
          event.stopPropagation();
          setOpen(true);
        }}
      >
        <div className="tm-charge-layout">
          <div className="tm-charge-head">
            <span className="tm-charge-title">{title}</span>
            {current && (
              <span className="tm-charge-now">
                <span>Jetzt</span>
                <strong>{formatCt(current.price, false)}</strong>
              </span>
            )}
          </div>

          <div className={`tm-charge-hero${recommendation.status === 'wait' ? ' is-wait' : ''}`}>
            {recommendation.status !== 'none' && (
              <div className={`tm-charge-kicker${recommendation.status === 'wait' ? ' is-good' : ''}`}>
                {CARD_STATUS[recommendation.status]}
              </div>
            )}
            <div className="tm-charge-price">
              {recommendation.window?.estimated && <span className="tm-charge-approx">≈</span>}
              <span className="tm-charge-amount">
                {recommendation.window ? CT.format(recommendation.window.avg) : '—'}
              </span>
              {recommendation.window && <span className="tm-charge-unit">ct</span>}
            </div>
            <div className="tm-charge-when">
              {recommendation.status === 'none'
                ? (REASONS[recommendation.reason] || REASONS.empty)
                : (recommendation.status === 'today'
                  ? formatBerlinRange(recommendation.window.startMs, recommendation.window.endMs)
                  : windowWhen(days, recommendation.window))}
            </div>
          </div>

          <div className="tm-charge-side">
            <div className="tm-charge-days">
              {previewDays.map((day) => (
                <DayRow key={day.key} day={day} active={day.window?.startMs === activeStart} compact />
              ))}
            </div>
            {year.status === 'ok' && year.ct != null && (
              <div className="tm-charge-year">{CT.format(year.ct)} ct im Jahr</div>
            )}
          </div>
        </div>
      </button>
      {open && (
        <ChargeSheet
          outlook={outlook}
          title={title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
