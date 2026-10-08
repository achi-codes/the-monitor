import { useCallback, useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import {
  buildMultiSeriesChart,
  sampleAtRatio,
  SENSOR_SERIES_COLORS,
} from '../lib/sensorChart';

const CHART_WIDTH = 200;
const CHART_HEIGHT = 80;
const CHART_HEIGHT_COMPACT = 32;

function formatRangeValue(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return String(value);
  return num.toLocaleString('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
}

export default function SensorSparkline({
  points,
  series: seriesProp,
  compact = false,
  loading = false,
  showRange = false,
  domain = 'sensor',
  onScrubChange,
}) {
  const chartRef = useRef(null);
  const [scrub, setScrub] = useState(null);
  const height = compact ? CHART_HEIGHT_COMPACT : CHART_HEIGHT;

  const seriesList = useMemo(() => {
    if (seriesProp?.length) return seriesProp;
    if (points?.length >= 2) {
      return [{
        id: 'single',
        points,
        domain,
        unit: '',
        colorIndex: 0,
      }];
    }
    return [];
  }, [domain, points, seriesProp]);

  const chart = useMemo(
    () => buildMultiSeriesChart(seriesList, CHART_WIDTH, height),
    [seriesList, height],
  );

  const isMulti = seriesList.length > 1;

  const updateScrub = useCallback((clientX) => {
    const el = chartRef.current;
    if (!el || !chart) return;

    const rect = el.getBoundingClientRect();
    if (!rect.width) return;

    const ratio = (clientX - rect.left) / rect.width;
    const result = sampleAtRatio(chart, seriesList, ratio);
    if (!result) return;

    setScrub(result);
    onScrubChange?.(result);
  }, [chart, onScrubChange, seriesList]);

  const endScrub = useCallback(() => {
    setScrub(null);
    onScrubChange?.({ active: false, time: null, samples: [] });
  }, [onScrubChange]);

  const handlePointerDown = useCallback((event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateScrub(event.clientX);
  }, [updateScrub]);

  const handlePointerMove = useCallback((event) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    updateScrub(event.clientX);
  }, [updateScrub]);

  const handlePointerUp = useCallback((event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    endScrub();
  }, [endScrub]);

  const handlePointerEnter = useCallback((event) => {
    if (event.pointerType === 'mouse') updateScrub(event.clientX);
  }, [updateScrub]);

  const handlePointerMoveHover = useCallback((event) => {
    if (event.pointerType !== 'mouse' || event.buttons) return;
    updateScrub(event.clientX);
  }, [updateScrub]);

  if (loading && !seriesList.some((item) => item.points.length >= 2)) {
    return <div className={`tm-sensor-sparkline tm-sensor-sparkline--loading${compact ? ' compact' : ''}`} />;
  }

  if (!chart) return null;

  const scrubX = scrub?.samples?.[0]?.x;

  return (
    <div className={`tm-sensor-sparkline-chart${compact ? ' compact' : ''}${isMulti ? ' multi' : ''}`}>
      <div
        ref={chartRef}
        className="tm-sensor-sparkline-interactive"
        onPointerDown={handlePointerDown}
        onPointerMove={(event) => {
          handlePointerMove(event);
          handlePointerMoveHover(event);
        }}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={endScrub}
        role="slider"
        aria-label="Verlauf scrubben"
        tabIndex={-1}
      >
        <svg
          className="tm-sensor-sparkline"
          viewBox={`0 0 ${CHART_WIDTH} ${height}`}
          preserveAspectRatio="none"
          aria-hidden
        >
          {chart.layers.map((layer) => {
            const color = SENSOR_SERIES_COLORS[layer.colorIndex % SENSOR_SERIES_COLORS.length];
            return (
              <g key={layer.id}>
                {!isMulti && (
                  <polygon
                    className="tm-sensor-sparkline-area"
                    points={layer.area}
                    style={{ fill: color.fill }}
                  />
                )}
                <polyline
                  className="tm-sensor-sparkline-line"
                  points={layer.line}
                  style={{ stroke: color.stroke }}
                />
              </g>
            );
          })}
          {scrubX != null && (
            <>
              <line
                className="tm-sensor-sparkline-scrub-line"
                x1={scrubX}
                x2={scrubX}
                y1={0}
                y2={height}
              />
              {scrub.samples.map((sample) => {
                const color = SENSOR_SERIES_COLORS[sample.colorIndex % SENSOR_SERIES_COLORS.length];
                return (
                  <circle
                    key={sample.entityId}
                    className="tm-sensor-sparkline-scrub-dot"
                    cx={sample.x}
                    cy={sample.y}
                    r={compact ? 2.5 : 3.5}
                    style={{ stroke: color.stroke }}
                  />
                );
              })}
            </>
          )}
        </svg>
      </div>
      {showRange && chart.rangeMin != null && chart.rangeMax != null && (
        <div className="tm-sensor-sparkline-range">
          <span>{formatRangeValue(chart.rangeMin)}</span>
          <span>{formatRangeValue(chart.rangeMax)}</span>
        </div>
      )}
      {isMulti && (
        <div className="tm-sensor-sparkline-legend">
          {chart.layers.map((layer) => {
            const color = SENSOR_SERIES_COLORS[layer.colorIndex % SENSOR_SERIES_COLORS.length];
            const meta = seriesList.find((item) => item.id === layer.id);
            return (
              <span key={layer.id} className="tm-sensor-sparkline-legend-item">
                <span className="tm-sensor-series-dot" style={{ background: color.stroke }} />
                <span>{meta?.label || layer.id}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function formatScrubTime(timestamp, historyHours = 24) {
  const date = new Date(timestamp);
  if (historyHours >= 168) return format(date, 'EEE dd.MM., HH:mm', { locale: de });
  if (historyHours >= 48) return format(date, 'dd.MM., HH:mm', { locale: de });
  return format(date, 'HH:mm', { locale: de });
}
