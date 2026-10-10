import { useEffect, useRef, useState } from 'react';
import { format, isToday, isYesterday } from 'date-fns';
import { de } from 'date-fns/locale';
import { ChevronRight, Plus } from 'lucide-react';
import ContactStatusIcon from './ContactStatusIcon';
import { getEntityAreaName, getFriendlyName } from '../lib/entities';
import { fetchSensorHistory } from '../lib/sensorHistory';
import { getContactArt } from '../lib/contactArt';
import {
  countOpenContacts,
  getContactProfile,
  getContactStateLabel,
  isContactOpen,
  resolveContactEntities,
  resolveContactEntityIds,
} from '../lib/contactStatus';

function ContactRow({ entity, label, compact = false }) {
  const open = isContactOpen(entity);
  const stateLabel = getContactStateLabel(entity);

  return (
    <div className={`tm-contact-row${open ? ' tm-contact-row--open' : ''}${compact ? ' tm-contact-row--compact' : ''}`}>
      <ContactStatusIcon entity={entity} size={compact ? 20 : 32} strokeWidth={compact ? 2.1 : 2.25} />
      <div className="tm-contact-row-text">
        <span className="tm-contact-row-label">{label}</span>
        <span className="tm-contact-row-state">{stateLabel}</span>
      </div>
    </div>
  );
}

const HISTORY_HOURS = 24;
const HISTORY_SPAN_MS = HISTORY_HOURS * 60 * 60 * 1000;

function useNow(intervalMs = 30000) {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs]);
  return now;
}

function formatSince(lastChanged, now) {
  if (!lastChanged) return '';
  const minutes = Math.floor((now - lastChanged) / 60000);
  if (minutes < 1) return 'Gerade eben';
  if (minutes < 60) return `Seit ${minutes} ${minutes === 1 ? 'Minute' : 'Minuten'}`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Seit ${hours} ${hours === 1 ? 'Stunde' : 'Stunden'}`;
  const days = Math.floor(hours / 24);
  return `Seit ${days} ${days === 1 ? 'Tag' : 'Tagen'}`;
}

function formatLastChange(lastChanged) {
  if (!lastChanged) return '—';
  const date = new Date(lastChanged);
  const time = format(date, 'HH:mm');
  if (isToday(date)) return `Heute, ${time}`;
  if (isYesterday(date)) return `Gestern, ${time}`;
  return format(date, 'EEE, d. MMM, HH:mm', { locale: de });
}

function useBinaryHistory(hass, entityId, lastChanged, enabled) {
  const [points, setPoints] = useState([]);
  const hassRef = useRef(hass);
  hassRef.current = hass;

  useEffect(() => {
    if (!enabled || !entityId) return undefined;
    let active = true;
    const load = () => {
      fetchSensorHistory(hassRef.current, entityId, { hours: HISTORY_HOURS })
        .then((next) => { if (active) setPoints(next); })
        .catch(() => {});
    };
    load();
    const timer = window.setInterval(load, 5 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [entityId, lastChanged, enabled]);

  return points;
}

function HistoryTimeline({ points, now }) {
  const start = now - HISTORY_SPAN_MS;
  const segments = [];
  points.forEach((point, index) => {
    if (point.v !== 1) return;
    const from = Math.max(point.t, start);
    const to = Math.min(points[index + 1]?.t ?? now, now);
    if (to <= from) return;
    segments.push({ left: ((from - start) / HISTORY_SPAN_MS) * 100, width: ((to - from) / HISTORY_SPAN_MS) * 100 });
  });

  return (
    <span className="tm-contact-card-timeline" aria-hidden="true">
      {segments.map((segment) => (
        <span
          key={`${segment.left}-${segment.width}`}
          className="tm-contact-card-timeline-on"
          style={{ left: `${segment.left}%`, width: `max(${segment.width}%, 2px)` }}
        />
      ))}
    </span>
  );
}

function openMoreInfo(node, entityId) {
  node?.dispatchEvent(new CustomEvent('hass-more-info', {
    detail: { entityId },
    bubbles: true,
    composed: true,
  }));
}

function ContactCard({ hass, entityId, label, editMode }) {
  const [entity] = resolveContactEntities(hass, [entityId]);
  const now = useNow();
  const open = isContactOpen(entity);
  const profile = getContactProfile(entity);
  const stateLabel = getContactStateLabel(entity);
  const unavailable = entity.state === 'unavailable' || entity.state === 'unknown';
  const area = getEntityAreaName(hass, entityId);
  const hasTimeline = entity.domain === 'binary_sensor';
  const history = useBinaryHistory(hass, entityId, entity.lastChanged, hasTimeline);
  const historyRef = useRef(null);

  return (
    <div
      className={`tm-quick-action tm-contact-card${open ? ' tm-contact-card--active' : ''}${unavailable ? ' tm-contact-card--unavailable' : ''}`}
      style={{
        '--tm-contact-state-chars': Math.max(5, stateLabel.length),
        '--tm-contact-title-chars': Math.max(8, label.length),
      }}
    >
      <div className="tm-contact-card-inner">
        <div className="tm-contact-card-head">
          <div className="tm-contact-card-title">{label}</div>
          <div className="tm-contact-card-type">{area ? `${profile.typeLabel} · ${area}` : profile.typeLabel}</div>
        </div>
        <div className="tm-contact-card-hero">
          <div className="tm-contact-card-state">{stateLabel}</div>
          {!unavailable && entity.lastChanged && (
            <div className="tm-contact-card-since">{formatSince(entity.lastChanged, now)}</div>
          )}
        </div>
        <div className="tm-contact-card-art" aria-hidden="true">
          <img src={getContactArt(profile.art, open)} alt="" draggable="false" />
        </div>
        <div className="tm-contact-card-stats">
          <div className="tm-contact-card-stat tm-contact-card-stat--changed">
            <span className="tm-contact-card-stat-label">Letzte Änderung</span>
            <span className="tm-contact-card-stat-value">{formatLastChange(entity.lastChanged)}</span>
          </div>
          <div className="tm-contact-card-stat tm-contact-card-stat--status">
            <span className="tm-contact-card-stat-label">Status</span>
            <span className="tm-contact-card-stat-value tm-contact-card-stat-value--state">{stateLabel}</span>
          </div>
          <button
            type="button"
            ref={historyRef}
            className="tm-contact-card-stat tm-contact-card-stat--history"
            onClick={(event) => {
              if (editMode) return;
              event.stopPropagation();
              openMoreInfo(historyRef.current, entityId);
            }}
            aria-label="Verlauf öffnen"
          >
            <span className="tm-contact-card-stat-text">
              <span className="tm-contact-card-stat-label">Verlauf</span>
              {hasTimeline && history.length > 1
                ? <HistoryTimeline points={history} now={now} />
                : <span className="tm-contact-card-stat-value tm-contact-card-stat-value--muted">{HISTORY_HOURS}h</span>}
            </span>
            <ChevronRight className="tm-contact-card-stat-chevron" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MultiContactView({ hass, entityIds, widgetLabel }) {
  const entities = resolveContactEntities(hass, entityIds);
  const openCount = countOpenContacts(entities);

  return (
    <div className={`tm-contact-widget tm-contact-widget--multi${openCount > 0 ? ' tm-contact-widget--open' : ''}`}>
      <div className="tm-contact-widget-summary">
        <span className="tm-contact-widget-summary-title">
          {widgetLabel || 'Sensor Status'}
        </span>
        <span className={`tm-contact-widget-summary-badge${openCount > 0 ? ' tm-contact-widget-summary-badge--alert' : ''}`}>
          {openCount > 0 ? `${openCount} offen` : 'Alles zu'}
        </span>
      </div>
      <div className="tm-contact-widget-grid">
        {entities.map((entity) => (
          <ContactRow
            key={entity.id}
            entity={entity}
            label={getFriendlyName(hass, entity.id)}
            compact
          />
        ))}
      </div>
    </div>
  );
}

export default function SensorStatusWidget({ widget, hass, onConfigure, editMode = false }) {
  const entityIds = resolveContactEntityIds(widget);

  if (!entityIds.length) {
    return (
      <button type="button" className="tm-contact-widget tm-contact-widget--empty" onClick={onConfigure}>
        <Plus size={24} />
        <span className="tm-text-sm">Kontakt wählen</span>
      </button>
    );
  }

  if (entityIds.length === 1) {
    return (
      <ContactCard
        hass={hass}
        entityId={entityIds[0]}
        label={widget.label || getFriendlyName(hass, entityIds[0])}
        editMode={editMode}
      />
    );
  }

  return (
    <MultiContactView
      hass={hass}
      entityIds={entityIds}
      widgetLabel={widget.label}
    />
  );
}
