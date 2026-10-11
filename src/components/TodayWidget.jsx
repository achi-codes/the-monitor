import { useCallback, useEffect, useMemo, useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { useHass } from '../context/HassContext';
import {
  eventDotColor,
  eventsForDay,
  fetchCalendarEvents,
  formatClock,
  formatEventRange,
  formatLongDate,
  formatSunTime,
  formatWeekday,
  getMockTodayEvents,
  resolveCalendarIds,
  resolveSunEntity,
  resolveSunTimes,
  sunProgress,
} from '../lib/today';

const ARC = {
  width: 200,
  height: 78,
  cx: 100,
  cy: 52,
  rx: 88,
  ry: 38,
};

function arcPoint(progress) {
  const theta = Math.PI * (1 - progress);
  return {
    x: ARC.cx + ARC.rx * Math.cos(theta),
    y: ARC.cy - ARC.ry * Math.sin(theta),
  };
}

function arcPath(from, to, steps = 32) {
  const points = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = from + ((to - from) * i) / steps;
    const { x, y } = arcPoint(t);
    points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return points.join(' ');
}

function SunGlyph({ x, y }) {
  return (
    <g className="tm-today-sun" transform={`translate(${x} ${y})`}>
      {Array.from({ length: 8 }, (_, i) => i * 45).map((deg) => (
        <line
          key={deg}
          x1="0"
          y1="-7.2"
          x2="0"
          y2="-10.4"
          transform={`rotate(${deg})`}
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      ))}
      <circle r="4.6" fill="currentColor" />
    </g>
  );
}

function SunArc({ sunrise, sunset, now }) {
  const progress = sunProgress(now, sunrise, sunset);
  const sun = arcPoint(progress);
  const traveled = Math.max(progress, 0.02);

  return (
    <div className="tm-today-sunpath" aria-hidden="true">
      <svg className="tm-today-sunpath-svg" viewBox={`0 0 ${ARC.width} ${ARC.height}`} preserveAspectRatio="xMidYMax meet">
        <path className="tm-today-sunpath-remain" d={arcPath(progress, 1)} fill="none" />
        <path className="tm-today-sunpath-travel" d={arcPath(0, traveled)} fill="none" />
        <SunGlyph x={sun.x} y={sun.y} />
      </svg>
      <div className="tm-today-sunpath-labels">
        <div className="tm-today-sunpath-label">
          <span>{formatSunTime(sunrise)}</span>
          <small>Sonnenaufgang</small>
        </div>
        <div className="tm-today-sunpath-label tm-today-sunpath-label--end">
          <span>{formatSunTime(sunset)}</span>
          <small>Sonnenuntergang</small>
        </div>
      </div>
    </div>
  );
}

function EventRow({ event, index }) {
  return (
    <div className="tm-today-event">
      <span className="tm-today-event-time">{formatEventRange(event)}</span>
      <span
        className="tm-today-event-dot"
        style={{ background: eventDotColor(event.summary || event.id, index) }}
      />
      <span className="tm-today-event-body">
        <span className="tm-today-event-title">{event.summary}</span>
        {event.location && <span className="tm-today-event-place">{event.location}</span>}
      </span>
    </div>
  );
}

export default function TodayWidget({ widget, editMode = false, onConfigure }) {
  const { hass, isMock, isConnected, revision } = useHass();
  const [now, setNow] = useState(() => new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const calendarIds = useMemo(() => resolveCalendarIds(widget, hass), [widget, hass, revision]);
  const sunEntity = useMemo(() => resolveSunEntity(widget, hass), [widget, hass, revision]);
  const { sunrise, sunset } = useMemo(() => resolveSunTimes(sunEntity, now), [sunEntity, now]);

  const loadEvents = useCallback(async () => {
    if (isMock) {
      setEvents(getMockTodayEvents());
      return;
    }
    if (!isConnected || !calendarIds.length) {
      setEvents([]);
      return;
    }
    try {
      const result = await fetchCalendarEvents(hass, calendarIds);
      setEvents(eventsForDay(result));
    } catch {
      setEvents([]);
    }
  }, [calendarIds, hass, isConnected, isMock]);

  useEffect(() => {
    loadEvents();
    const timer = window.setInterval(loadEvents, 5 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, [loadEvents, revision]);

  const clock = formatClock(now);
  const [hours, minutes] = clock.split(':');
  const heading = widget?.label || 'Heute';

  return (
    <div
      className="tm-card tm-today-card"
      onClick={editMode ? onConfigure : undefined}
      role={editMode ? 'button' : undefined}
    >
      <div className="tm-today-inner">
        <section className="tm-today-when">
          <header className="tm-today-when-head">
            <div className="tm-today-when-copy">
              <div className="tm-today-weekday">{formatWeekday(now)}</div>
              <div className="tm-today-date">{formatLongDate(now)}</div>
            </div>
            <span className="tm-today-chip" aria-hidden="true">
              <Calendar />
            </span>
          </header>
          <div className="tm-today-clock" aria-label={clock}>
            <span>{hours}</span>
            <span className="tm-today-clock-colon">:</span>
            <span>{minutes}</span>
          </div>
          <SunArc sunrise={sunrise} sunset={sunset} now={now} />
        </section>

        <section className="tm-today-agenda">
          <header className="tm-today-agenda-head">
            <span>{heading}</span>
            <span className="tm-today-chip" aria-hidden="true">
              <ChevronRight />
            </span>
          </header>
          <div className="tm-today-events">
            {events.length ? events.map((event, index) => (
              <EventRow key={event.id} event={event} index={index} />
            )) : (
              <div className="tm-today-empty">Keine Termine</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
