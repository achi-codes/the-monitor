import { useState, useEffect, useMemo, useCallback, memo, useRef } from 'react';
import { Pause, X, ChevronRight, DoorOpen, BatteryCharging } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import {
  isVacuumActive,
  resolveVacuumEntityId,
  getVacuumStatusLabel,
  getVacuumProgress,
  formatVacuumTimer,
  getActiveWindows,
  getWindowSummaryLabel,
  getWindowStateLabel,
  isWindowPersistentlyOpen,
} from '../lib/entities';
import {
  resolveEvStateEntity,
  resolveEvBatteryEntity,
  resolveEvCharging,
  getEvBatteryPercent,
  getEvChargingLabel,
  getEvChargingSubtitle,
  getEvChargingPowerWatts,
  formatEvChargingPower,
  isEvTrackingConfigured,
} from '../lib/evCharging';
import { vacuumPause, vacuumReturnToBase, closeCover } from '../lib/services';

const DEMO_VACUUM = 'vacuum.roborock';
const WINDOW_OPEN_ALERT_MS = 15 * 60 * 1000;

const DEMO_VACUUM_FALLBACK = {
  id: DEMO_VACUUM,
  name: 'Roborock',
  state: 'cleaning',
  attributes: {
    status: 'Reinigt Wohnzimmer …',
    battery_level: 78,
  },
  domain: 'vacuum',
};

function VacuumIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#1a1a1a" />
      <circle cx="16" cy="16" r="10" fill="#2d2d2d" />
      <circle cx="16" cy="16" r="4" fill="#444" />
      <circle cx="22" cy="10" r="2" fill="#ff6b2b" />
    </svg>
  );
}

function ProgressRing({ progress, size = 36, stroke = 3, className = '' }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className={`tm-vi-ring ${className}`.trim()} aria-hidden="true">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--tm-vi-track)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--tm-vi-accent)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

const MemoProgressRing = memo(ProgressRing);

function WindowRow({ window, onClose, overdue = false }) {
  const canClose = window.domain === 'cover' && ['open', 'opening'].includes(window.state);

  return (
    <div className={`tm-vi-window-row${overdue ? ' tm-vi-window-row-overdue' : ''}`}>
      <div className="tm-vi-window-info">
        <span className="tm-vi-window-name">{window.label}</span>
        <span className="tm-vi-window-state">{getWindowStateLabel(window)}</span>
      </div>
      {canClose && (
        <button
          type="button"
          className="tm-vi-btn tm-vi-btn-close"
          onClick={(e) => {
            e.stopPropagation();
            onClose(window.id);
          }}
          aria-label={`${window.label} schließen`}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default function StatusIsland() {
  const { hass, revision, getEntity, isMock } = useHass();
  const { config } = useConfig();
  const [expanded, setExpanded] = useState(false);
  const [cleaningSince] = useState(() => Date.now());
  const [tick, setTick] = useState(0);
  const openSinceRef = useRef(new Map());

  const vacuumEntityId = resolveVacuumEntityId(hass, config.vacuum?.entity_id, isMock, DEMO_VACUUM) || DEMO_VACUUM;
  const resolvedVacuum = getEntity(vacuumEntityId);
  const vacuumEntity = resolvedVacuum.state === 'unavailable' || !resolvedVacuum.id
    ? (isMock ? DEMO_VACUUM_FALLBACK : resolvedVacuum)
    : resolvedVacuum;
  const vacuumRunning = isVacuumActive(vacuumEntity.state, vacuumEntity.attributes);

  const evStateEntity = resolveEvStateEntity(config, null, isMock);
  const evBatteryEntity = resolveEvBatteryEntity(config, isMock);
  const evTracked = isEvTrackingConfigured(hass, config, null, isMock);
  const evCharging = evTracked && resolveEvCharging(hass, evStateEntity, isMock);
  const evBatteryPercent = getEvBatteryPercent(hass, evBatteryEntity, isMock ? 67 : null);

  const activeWindows = useMemo(
    () => getActiveWindows(hass, config.windows),
    [hass, config.windows, revision],
  );

  const hasWindows = activeWindows.length > 0;
  const showVacuum = vacuumRunning;
  const showEvCharging = evCharging;
  const evPowerWatts = showEvCharging ? getEvChargingPowerWatts(hass, config, isMock) : null;
  const evPowerLabel = formatEvChargingPower(evPowerWatts);
  const visible = showVacuum || hasWindows || showEvCharging;

  const persistentlyOpenWindows = useMemo(
    () => activeWindows.filter(isWindowPersistentlyOpen),
    [activeWindows],
  );

  useEffect(() => {
    const now = Date.now();
    const openIds = new Set(persistentlyOpenWindows.map((w) => w.id));

    for (const window of persistentlyOpenWindows) {
      if (!openSinceRef.current.has(window.id)) {
        openSinceRef.current.set(window.id, window.lastChanged || now);
      }
    }

    for (const id of [...openSinceRef.current.keys()]) {
      if (!openIds.has(id)) openSinceRef.current.delete(id);
    }
  }, [persistentlyOpenWindows]);

  const overdueWindowIds = useMemo(() => {
    void tick;
    const now = Date.now();
    const overdue = new Set();
    for (const window of persistentlyOpenWindows) {
      const since = openSinceRef.current.get(window.id);
      if (since && now - since >= WINDOW_OPEN_ALERT_MS) overdue.add(window.id);
    }
    return overdue;
  }, [persistentlyOpenWindows, tick]);

  const hasLongOpenWindow = overdueWindowIds.size > 0;

  useEffect(() => {
    if (!visible) setExpanded(false);
  }, [visible]);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const elapsed = cleaningSince ? Math.floor((Date.now() - cleaningSince) / 1000) : 0;
  const progress = useMemo(
    () => getVacuumProgress(vacuumEntity, elapsed),
    [vacuumEntity, elapsed, tick, revision],
  );
  const vacuumLabel = getVacuumStatusLabel(vacuumEntity);
  const evLabel = getEvChargingLabel(config, true);
  const windowLabel = getWindowSummaryLabel(activeWindows);
  const timerLabel = formatVacuumTimer(elapsed);

  const collapsedLabel = useMemo(() => {
    const parts = [];
    if (showEvCharging) {
      parts.push(evBatteryPercent != null ? `${evLabel} · ${evBatteryPercent}%` : evLabel);
    }
    if (hasWindows) parts.push(windowLabel);
    if (showVacuum) parts.push(vacuumLabel);
    let base = parts.join(' · ');
    if (hasLongOpenWindow && hasWindows) {
      base = `⚠ ${base}`;
    }
    return base;
  }, [
    showEvCharging,
    evLabel,
    evBatteryPercent,
    hasWindows,
    windowLabel,
    showVacuum,
    vacuumLabel,
    hasLongOpenWindow,
  ]);

  const handleToggle = useCallback(() => {
    setExpanded((v) => !v);
  }, []);

  const handleDismiss = useCallback(() => {
    setExpanded(false);
  }, []);

  const handlePause = useCallback(
    (e) => {
      e.stopPropagation();
      vacuumPause(hass, vacuumEntityId);
    },
    [hass, vacuumEntityId],
  );

  const handleStop = useCallback(
    (e) => {
      e.stopPropagation();
      vacuumReturnToBase(hass, vacuumEntityId);
    },
    [hass, vacuumEntityId],
  );

  const handleCloseWindow = useCallback(
    (entityId) => {
      closeCover(hass, entityId);
    },
    [hass],
  );

  if (!visible) return null;

  const subtitle = showEvCharging
    ? getEvChargingSubtitle(config, evBatteryPercent, evPowerWatts)
    : hasLongOpenWindow && hasWindows
    ? (overdueWindowIds.size === 1
      ? `${persistentlyOpenWindows.find((w) => overdueWindowIds.has(w.id))?.label || 'Fenster'} seit über 15 Min. offen`
      : `${overdueWindowIds.size} Fenster seit über 15 Min. offen`)
    : hasWindows && showVacuum
    ? 'Fenster und Sauger sind aktiv'
    : hasWindows
      ? (activeWindows.length === 1
        ? `${activeWindows[0].label} — ${getWindowStateLabel(activeWindows[0])}`
        : `${activeWindows.length} Fenster brauchen Aufmerksamkeit`)
      : `${vacuumEntity.name} reinigt dein Zuhause …`;

  const alertClass = showEvCharging
    ? ' tm-vi-ev-alert'
    : (hasLongOpenWindow ? ' tm-vi-window-alert' : '');

  const thumbAlertClass = showEvCharging
    ? ' tm-vi-thumb-ev-alert'
    : (hasLongOpenWindow ? ' tm-vi-thumb-alert' : '');

  const textAlertClass = showEvCharging
    ? ' tm-vi-text-ev-alert'
    : (hasLongOpenWindow ? ' tm-vi-text-alert' : '');

  return (
    <>
      {expanded && (
        <button
          type="button"
          className="tm-vi-backdrop"
          onClick={handleDismiss}
          aria-label="Einklappen"
        />
      )}

      <div className="tm-vi-wrap">
        <button
          type="button"
          className={`tm-vi${expanded ? ' tm-vi-expanded' : ''}${alertClass}`}
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-label={collapsedLabel}
        >
          <div className="tm-vi-bar">
            <span className={`tm-vi-thumb${thumbAlertClass}`}>
              {showEvCharging ? (
                <BatteryCharging size={22} strokeWidth={2.25} />
              ) : hasWindows ? (
                <DoorOpen size={22} strokeWidth={2.25} />
              ) : (
                <VacuumIcon size={28} />
              )}
            </span>
            <span className={`tm-vi-text${textAlertClass}`}>{collapsedLabel}</span>
            {showEvCharging ? (
              <span className="tm-vi-ring-wrap tm-vi-ring-wrap-sm tm-vi-ring-ev">
                <MemoProgressRing progress={evBatteryPercent ?? 0} size={36} className="tm-vi-ring-sm" />
              </span>
            ) : showVacuum ? (
              <span className="tm-vi-ring-wrap tm-vi-ring-wrap-sm">
                <MemoProgressRing progress={progress} size={36} className="tm-vi-ring-sm" />
              </span>
            ) : (
              <span className={`tm-vi-badge${hasLongOpenWindow ? ' tm-vi-badge-alert' : ''}`}>{activeWindows.length}</span>
            )}
          </div>

          <div className="tm-vi-detail">
            <div className="tm-vi-detail-inner">
              <p className="tm-vi-subtitle">{subtitle}</p>

              {hasWindows && (
                <div className="tm-vi-window-list">
                  {activeWindows.map((window) => (
                    <WindowRow
                      key={window.id}
                      window={window}
                      onClose={handleCloseWindow}
                      overdue={overdueWindowIds.has(window.id)}
                    />
                  ))}
                </div>
              )}

              {showEvCharging && (
                <div className="tm-vi-body">
                  <div className="tm-vi-ev-metrics">
                    <div className="tm-vi-timer-block">
                      <span className="tm-vi-timer-label">Ladeleistung</span>
                      <span className="tm-vi-timer-value tm-vi-timer-value-ev">{evPowerLabel}</span>
                    </div>
                    <div className="tm-vi-timer-block">
                      <span className="tm-vi-timer-label">Akku</span>
                      <span className="tm-vi-timer-value tm-vi-timer-value-ev tm-vi-timer-value-secondary">
                        {evBatteryPercent != null ? `${evBatteryPercent}%` : '—'}
                      </span>
                    </div>
                  </div>

                  <div className="tm-vi-progress-block">
                    <div className="tm-vi-progress-ring-lg tm-vi-ring-ev">
                      <MemoProgressRing progress={evBatteryPercent ?? 0} size={88} stroke={5} className="tm-vi-ring-lg" />
                      <span className="tm-vi-progress-icon">
                        <BatteryCharging size={44} strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {showVacuum && (
                <div className="tm-vi-body">
                  <div className="tm-vi-timer-block">
                    <span className="tm-vi-timer-label">Timer</span>
                    <span className="tm-vi-timer-value">{timerLabel}</span>
                  </div>

                  <div className="tm-vi-progress-block">
                    <div className="tm-vi-progress-ring-lg">
                      <MemoProgressRing progress={progress} size={88} stroke={5} className="tm-vi-ring-lg" />
                      <span className="tm-vi-progress-icon">
                        <VacuumIcon size={48} />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="tm-vi-footer">
                {showVacuum ? (
                  <div className="tm-vi-actions">
                    <button
                      type="button"
                      className="tm-vi-btn tm-vi-btn-pause"
                      onClick={handlePause}
                      aria-label="Pausieren"
                    >
                      <Pause size={18} fill="currentColor" />
                    </button>
                    <button
                      type="button"
                      className="tm-vi-btn tm-vi-btn-stop"
                      onClick={handleStop}
                      aria-label="Zur Basis"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <span />
                )}
                <span className="tm-vi-open">
                  Dashboard
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
