import { useEffect, useRef, useState } from 'react';
import {
  BatteryCharging,
  BatteryMedium,
  ChevronRight,
  Home,
  Map as MapIcon,
  Pause,
  Play,
  Plus,
  Square,
  X,
} from 'lucide-react';
import robotImage from '../assets/vacuum/robot.webp';
import { getEntity, getEntityAreaName, resolveVacuumEntityId } from '../lib/entities';
import { isMockHass } from '../lib/hass';
import { runEntity, vacuumPause, vacuumReturnToBase, vacuumStart, vacuumStop } from '../lib/services';
import {
  formatVacuumMinutes,
  getVacuumPhase,
  getVacuumPhaseLabel,
  getVacuumTone,
  getZoneLabel,
  isVacuumMoving,
  normalizeVacuumZones,
  resolveRemainingMinutes,
  resolveVacuumBattery,
} from '../lib/vacuumStatus';

const ZONE_STORAGE_PREFIX = 'tm-vacuum-zone:';

function useNow(intervalMs = 30000) {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs]);
  return now;
}

function useLastZone(widgetId) {
  const key = `${ZONE_STORAGE_PREFIX}${widgetId}`;
  const [zoneId, setZoneId] = useState(() => {
    try { return window.localStorage.getItem(key) || ''; } catch { return ''; }
  });
  const remember = (next) => {
    setZoneId(next);
    try { window.localStorage.setItem(key, next); } catch { /* storage unavailable */ }
  };
  return [zoneId, remember];
}

function minutesSince(lastChanged, now) {
  if (!lastChanged) return null;
  return Math.max(0, Math.floor((now - lastChanged) / 60000));
}

function getSubline({ phase, battery, remaining, since, entity }) {
  if (phase === 'cleaning' || phase === 'paused') {
    if (remaining != null) return `Noch ca. ${formatVacuumMinutes(remaining)}`;
    if (since == null) return '';
    if (phase === 'paused') return since < 1 ? 'Gerade angehalten' : `Seit ${formatVacuumMinutes(since)} angehalten`;
    return since < 1 ? 'Gerade gestartet' : `Seit ${formatVacuumMinutes(since)} unterwegs`;
  }
  if (phase === 'returning') return 'Auf dem Weg zur Basis';
  if (phase === 'docked') return battery != null && battery < 100 ? 'Akku wird geladen' : 'Akku voll';
  if (phase === 'error') return entity.attributes?.error || 'Bitte Roboter prüfen';
  if (phase === 'idle') return 'Bereit zum Saugen';
  return '';
}

function SideBrush({ side }) {
  return (
    <span className={`tm-vacuum-brush tm-vacuum-brush--${side}`}>
      <svg className="tm-vacuum-brush-spin" viewBox="-20 -20 40 40" aria-hidden="true">
        {[0, 120, 240].map((angle) => (
          <path key={angle} d="M0 0 C 4 -6, 6 -12, 4 -19" transform={`rotate(${angle})`} />
        ))}
        <circle r="3.2" />
      </svg>
    </span>
  );
}

function VacuumArt({ moving, phase }) {
  return (
    <div className={`tm-vacuum-art${moving ? ' tm-vacuum-art--moving' : ''}`} data-phase={phase} aria-hidden="true">
      <div className="tm-vacuum-stage">
        <svg className="tm-vacuum-waves" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path className="tm-vacuum-wave tm-vacuum-wave--1" d="M80 18 Q 90 30, 88 44" />
          <path className="tm-vacuum-wave tm-vacuum-wave--2" d="M88 8 Q 101 26, 97 46" />
          <path className="tm-vacuum-wave tm-vacuum-wave--3" d="M12 30 Q 4 42, 8 56" />
        </svg>
        <div className="tm-vacuum-bot">
          <span className="tm-vacuum-floor" />
          <SideBrush side="left" />
          <SideBrush side="right" />
          <img src={robotImage} alt="" draggable="false" />
          <span className="tm-vacuum-led" />
        </div>
      </div>
    </div>
  );
}

function ZoneSheet({ hass, zones, activeZoneId, onPick, onClose }) {
  return (
    <div className="tm-vacuum-zones" role="dialog" aria-label="Zonen">
      <div className="tm-vacuum-zones-head">
        <span>Zone reinigen</span>
        <button type="button" className="tm-vacuum-zones-close" onClick={onClose} aria-label="Schließen">
          <X />
        </button>
      </div>
      <div className="tm-vacuum-zones-list">
        {zones.map((zone) => (
          <button
            key={zone.entity_id}
            type="button"
            className={`tm-vacuum-zone${zone.entity_id === activeZoneId ? ' tm-vacuum-zone--active' : ''}`}
            onClick={() => onPick(zone)}
          >
            <span className="tm-vacuum-zone-label">{getZoneLabel(hass, zone)}</span>
            <Play className="tm-vacuum-zone-icon" />
          </button>
        ))}
      </div>
    </div>
  );
}

function VacuumAction({ icon: Icon, label, shortLabel, sub, primary, disabled, chevron, onClick }) {
  return (
    <button
      type="button"
      className={`tm-vacuum-action${primary ? ' tm-vacuum-action--primary' : ''}${chevron ? ' tm-vacuum-action--menu' : ''}`}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
      aria-label={label}
    >
      <Icon className="tm-vacuum-action-icon" />
      <span className="tm-vacuum-action-text">
        <span className="tm-vacuum-action-label tm-vacuum-action-label--long">{label}</span>
        <span className="tm-vacuum-action-label tm-vacuum-action-label--short">{shortLabel || label}</span>
        {sub && <span className="tm-vacuum-action-sub">{sub}</span>}
      </span>
      {chevron && <ChevronRight className="tm-vacuum-action-chevron" />}
    </button>
  );
}

export default function VacuumWidget({ widget, hass, editMode = false, onConfigure }) {
  const mock = isMockHass(hass);
  const entityId = resolveVacuumEntityId(hass, widget.entity_id, mock, mock ? 'vacuum.roborock' : '');
  const entity = getEntity(hass, entityId);
  const now = useNow();
  const [zonesOpen, setZonesOpen] = useState(false);
  const [lastZoneId, setLastZoneId] = useLastZone(widget.id);
  const headRef = useRef(null);

  useEffect(() => {
    if (editMode) setZonesOpen(false);
  }, [editMode]);

  if (!entityId) {
    return (
      <button type="button" className="tm-contact-widget tm-contact-widget--empty" onClick={onConfigure}>
        <Plus size={24} />
        <span className="tm-text-sm">Saugroboter wählen</span>
      </button>
    );
  }

  const phase = getVacuumPhase(entity);
  const moving = isVacuumMoving(phase);
  const battery = resolveVacuumBattery(hass, entity, widget.battery_entity);
  const remaining = resolveRemainingMinutes(hass, widget.remaining_entity);
  const since = minutesSince(entity.lastChanged, now);
  const zones = normalizeVacuumZones(widget.zones);
  const lastZone = zones.find((zone) => zone.entity_id === lastZoneId);
  const area = getEntityAreaName(hass, entityId);
  const subtitle = (phase === 'cleaning' || phase === 'paused') && lastZone ? getZoneLabel(hass, lastZone) : area;
  const label = widget.label || 'Saugroboter';
  const statusLabel = getVacuumPhaseLabel(phase, battery);
  const subline = getSubline({ phase, battery, remaining, since, entity });
  const offline = phase === 'offline';
  const docked = phase === 'docked';
  const run = (action) => {
    if (editMode || offline) return;
    action(hass, entityId);
  };

  const primaryAction = moving
    ? { icon: Pause, label: 'Pause', onClick: () => run(vacuumPause) }
    : { icon: Play, label: phase === 'paused' ? 'Weiter' : 'Starten', onClick: () => run(vacuumStart) };

  return (
    <div
      className={`tm-quick-action tm-vacuum-card${zones.length ? ' tm-vacuum-card--zones' : ''}`}
      data-phase={phase}
      style={{ '--tm-vacuum-title-chars': Math.max(8, label.length) }}
    >
      <div className="tm-vacuum-card-inner">
        <button
          type="button"
          ref={headRef}
          className="tm-vacuum-head"
          onClick={(event) => {
            if (editMode) return;
            event.stopPropagation();
            headRef.current?.dispatchEvent(new CustomEvent('hass-more-info', {
              detail: { entityId },
              bubbles: true,
              composed: true,
            }));
          }}
        >
          <span className="tm-vacuum-title">{label}</span>
          {subtitle && <span className="tm-vacuum-subtitle">{subtitle}</span>}
        </button>

        <div className="tm-vacuum-hero">
          <div className={`tm-vacuum-status tm-vacuum-status--${getVacuumTone(phase)}`}>
            <span className="tm-vacuum-dot" />
            <span className="tm-vacuum-status-label">{statusLabel}</span>
          </div>
          {battery != null && (
            <div className="tm-vacuum-battery">
              {docked && battery < 100
                ? <BatteryCharging className="tm-vacuum-battery-icon" />
                : <BatteryMedium className="tm-vacuum-battery-icon" />}
              <span>{Math.round(battery)}<span className="tm-vacuum-battery-unit">%</span></span>
            </div>
          )}
          {subline && <div className="tm-vacuum-subline">{subline}</div>}
        </div>

        <VacuumArt moving={moving} phase={phase} />

        <div className="tm-vacuum-actions">
          <VacuumAction {...primaryAction} primary disabled={offline} />
          <VacuumAction
            icon={Square}
            label="Stop"
            disabled={offline || docked || phase === 'idle'}
            onClick={() => run(vacuumStop)}
          />
          <VacuumAction
            icon={Home}
            label="Zur Ladestation"
            shortLabel="Basis"
            disabled={offline || docked || phase === 'returning'}
            onClick={() => run(vacuumReturnToBase)}
          />
          {zones.length > 0 && (
            <VacuumAction
              icon={MapIcon}
              label="Zonen"
              sub={lastZone ? getZoneLabel(hass, lastZone) : `${zones.length} Bereiche`}
              chevron
              disabled={offline}
              onClick={() => { if (!editMode) setZonesOpen(true); }}
            />
          )}
        </div>
      </div>

      {zonesOpen && (
        <ZoneSheet
          hass={hass}
          zones={zones}
          activeZoneId={lastZoneId}
          onClose={() => setZonesOpen(false)}
          onPick={(zone) => {
            setLastZoneId(zone.entity_id);
            setZonesOpen(false);
            runEntity(hass, zone.entity_id);
          }}
        />
      )}
    </div>
  );
}
