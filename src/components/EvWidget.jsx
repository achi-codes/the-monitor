import { BatteryCharging, Clock3, Euro, Route, Zap } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import { formatEvChargingPower, formatEvDuration, getEvOverview } from '../lib/evCharging';
import carArt from '../assets/ev/car.webp';

const NUMBER = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 });
const KWH = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 });
const EURO = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

function getStatus(overview) {
  if (overview.charging) return { text: 'Wird geladen', tone: 'charging' };
  if (overview.connected === true) return { text: 'Angeschlossen', tone: 'idle' };
  if (overview.connected === false) return { text: 'Nicht angeschlossen', tone: 'off' };
  return { text: 'Lädt nicht', tone: 'off' };
}

function buildStats(overview) {
  const stats = [
    {
      key: 'power',
      icon: Zap,
      value: overview.charging ? formatEvChargingPower(overview.powerWatts) : '0 kW',
      label: 'Ladeleistung',
    },
  ];
  if (overview.remainingSeconds != null) {
    stats.push({
      key: 'remaining',
      icon: Clock3,
      value: formatEvDuration(overview.remainingSeconds),
      label: `bis ${overview.limitSoc}%`,
    });
  }
  if (overview.lastTripKm != null) {
    stats.push({ key: 'trip', icon: Route, value: `${NUMBER.format(overview.lastTripKm)} km`, label: 'Letzte Fahrt' });
  } else if (overview.sessionKwh != null) {
    stats.push({ key: 'energy', icon: BatteryCharging, value: `${KWH.format(overview.sessionKwh)} kWh`, label: 'Geladen' });
  }
  if (overview.cost != null) {
    stats.push({
      key: 'cost',
      icon: Euro,
      value: EURO.format(overview.cost),
      label: overview.costIsSession ? 'Ladevorgang' : 'Kosten heute',
    });
  }
  return stats.slice(0, 4);
}

export default function EvWidget({ widget, hass }) {
  const { isMock } = useHass();
  const { config } = useConfig();
  const overview = getEvOverview(hass, config, isMock);
  const status = getStatus(overview);
  const stats = buildStats(overview);
  const title = widget?.label || overview.label;
  const soc = overview.soc;

  let heroValue = '—';
  let heroUnit = '';
  let heroCaption = 'Keine Fahrzeugdaten';
  if (overview.rangeKm != null) {
    heroValue = NUMBER.format(overview.rangeKm);
    heroUnit = 'km';
    heroCaption = soc != null ? `Reichweite (${soc}%)` : 'Reichweite';
  } else if (soc != null) {
    heroValue = String(soc);
    heroUnit = '%';
    heroCaption = 'Akkustand';
  }

  return (
    <div className={`tm-quick-action tm-ev-card tm-ev-card--${status.tone}`}>
      <div className="tm-ev-card-inner">
        <div className="tm-ev-card-head">
          <div className="tm-ev-card-title">{title}</div>
          <div className="tm-ev-card-status">
            {status.tone === 'charging' && <Zap className="tm-ev-card-status-icon" fill="currentColor" strokeWidth={0} />}
            <span>{status.text}</span>
          </div>
        </div>

        <div className="tm-ev-card-hero">
          <div className="tm-ev-card-value">
            {heroValue}
            {heroUnit && <span className="tm-ev-card-unit">{heroUnit}</span>}
          </div>
          <div className="tm-ev-card-caption">{heroCaption}</div>
        </div>

        <div className="tm-ev-card-art" aria-hidden="true">
          <img src={carArt} alt="" draggable="false" />
        </div>

        {soc != null && (
          <div className="tm-ev-card-bar">
            <div className="tm-ev-card-bar-track">
              <div className="tm-ev-card-bar-fill" style={{ width: `${soc}%` }} />
            </div>
            <span className="tm-ev-card-bar-label">{soc}%</span>
          </div>
        )}

        {stats.length > 0 && (
          <div className={`tm-ev-card-stats tm-ev-card-stats--${stats.length}`}>
            {stats.map(({ key, icon: Icon, value, label }) => (
              <div key={key} className={`tm-ev-card-stat tm-ev-card-stat--${key}`}>
                <Icon className="tm-ev-card-stat-icon" />
                <div className="tm-ev-card-stat-value">{value}</div>
                <div className="tm-ev-card-stat-label">{label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
