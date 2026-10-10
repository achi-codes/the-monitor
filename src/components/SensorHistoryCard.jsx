import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Coins,
  Zap,
} from 'lucide-react';
import { getEntity, getEntityAreaName } from '../lib/entities';
import { formatSensorValue } from '../lib/sensorFormat';
import { useSensorChart } from '../hooks/useSensorChart';
import {
  CHART_RANGES,
  buildScale,
  formatChartNumber,
  formatCurrency,
  matchThreshold,
  resolveAggregate,
  resolveChartRange,
} from '../lib/sensorStatistics';

const RANGE_SHORT = {
  today: 'heute',
  '24h': '24 h',
  week: 'Woche',
  '7d': '7 Tage',
  month: 'Monat',
  '30d': '30 Tage',
  year: 'Jahr',
};

const PERIOD_LABEL = { hour: 'Stunde', day: 'Tag', month: 'Monat' };
const AGGREGATE_PREFIX = { mean: 'Ø', max: 'Max.', min: 'Min.' };

function numericState(entity) {
  const value = Number(entity.state);
  return Number.isFinite(value) ? value : null;
}

function openMoreInfo(node, entityId) {
  node?.dispatchEvent(new CustomEvent('hass-more-info', {
    detail: { entityId },
    bubbles: true,
    composed: true,
  }));
}

function formatDelta(value, unit, percent) {
  if (value == null || !Number.isFinite(value)) return '';
  const sign = value > 0 ? '+' : value < 0 ? '−' : '±';
  const abs = Math.abs(value);
  if (percent) return `${sign}${formatChartNumber(abs, abs >= 10 ? 0 : 1)}%`;
  return `${sign}${formatChartNumber(abs)}${unit ? ` ${unit}` : ''}`;
}

function ChartPlot({ slots, values, scale, type, rules, activeIndex, onActiveChange, editMode }) {
  const plotRef = useRef(null);
  const span = scale.high - scale.low || 1;
  const ratio = (value) => Math.min(1, Math.max(0, (value - scale.low) / span));

  const handlePointer = (event) => {
    if (editMode || !plotRef.current) return;
    const rect = plotRef.current.getBoundingClientRect();
    const index = Math.floor(((event.clientX - rect.left) / rect.width) * slots.length);
    onActiveChange(Math.min(slots.length - 1, Math.max(0, index)));
  };

  const linePoints = type === 'line'
    ? values
      .map((value, index) => (value == null ? null : [((index + 0.5) / slots.length) * 100, (1 - ratio(value)) * 100]))
      .filter(Boolean)
    : [];
  const linePath = linePoints.map(([x, y], index) => `${index ? 'L' : 'M'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
  const areaPath = linePoints.length > 1
    ? `${linePath} L${linePoints[linePoints.length - 1][0].toFixed(2)},100 L${linePoints[0][0].toFixed(2)},100 Z`
    : '';
  const ruleLines = rules.filter((rule) => rule.value != null && rule.value > scale.low && rule.value < scale.high);

  return (
    <div className="tm-history-card-chart">
      <div className="tm-history-card-axis" aria-hidden="true">
        {[...scale.ticks].reverse().map((tick) => (
          <span key={tick}>{formatChartNumber(tick)}</span>
        ))}
      </div>
      <div
        ref={plotRef}
        className="tm-history-card-plot"
        onPointerMove={handlePointer}
        onPointerDown={handlePointer}
        onPointerLeave={() => onActiveChange(null)}
      >
        <div className="tm-history-card-grid" aria-hidden="true">
          {scale.ticks.map((tick) => (
            <span key={tick} style={{ bottom: `${ratio(tick) * 100}%` }} />
          ))}
        </div>
        {ruleLines.map((rule) => (
          <span
            key={`${rule.op}${rule.value}${rule.tone}`}
            className="tm-history-card-rule"
            data-tone={rule.tone}
            style={{ bottom: `${ratio(rule.value) * 100}%` }}
          />
        ))}
        {type === 'line' ? (
          <svg className="tm-history-card-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {areaPath && <path className="tm-history-card-line-area" d={areaPath} />}
            {linePath && <path className="tm-history-card-line-stroke" d={linePath} vectorEffect="non-scaling-stroke" />}
          </svg>
        ) : null}
        <div className="tm-history-card-bars" style={{ '--tm-history-count': slots.length }}>
          {slots.map((slot, index) => {
            const value = values[index];
            const tone = rules.length ? matchThreshold(rules, value)?.tone : null;
            return (
              <div
                key={slot.start}
                className={`tm-history-card-slot${index === activeIndex ? ' is-active' : ''}${slot.future ? ' is-future' : ''}`}
              >
                {type === 'bar' && (
                  <span className="tm-history-card-track">
                    {value != null && (
                      <span
                        className="tm-history-card-bar"
                        data-tone={tone || undefined}
                        style={{ height: `max(${ratio(value) * 100}%, ${value > scale.low ? '0.35rem' : '0px'})` }}
                      />
                    )}
                  </span>
                )}
                {type === 'line' && index === activeIndex && value != null && (
                  <span className="tm-history-card-dot" style={{ bottom: `${ratio(value) * 100}%` }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="tm-history-card-labels" style={{ '--tm-history-count': slots.length }} aria-hidden="true">
        {slots.map((slot) => <span key={slot.start}>{slot.label}</span>)}
      </div>
    </div>
  );
}

function StatChip({ icon: Icon, label, value }) {
  return (
    <div className="tm-history-card-stat">
      <span className="tm-history-card-stat-icon"><Icon /></span>
      <span className="tm-history-card-stat-text">
        <span className="tm-history-card-stat-label">{label}</span>
        <span className="tm-history-card-stat-value">{value}</span>
      </span>
    </div>
  );
}

export default function SensorHistoryCard({ hass, entityId, label, chart, historyHours, editMode }) {
  const entity = getEntity(hass, entityId);
  const configuredRange = resolveChartRange(chart, historyHours);
  const [range, setRange] = useState(configuredRange);
  const [activeIndex, setActiveIndex] = useState(null);
  const historyRef = useRef(null);

  useEffect(() => { setRange(configuredRange); }, [configuredRange]);

  const aggregate = resolveAggregate(chart, entity);
  const isSum = aggregate === 'sum';
  const currentValue = numericState(entity);
  const unit = entity.attributes?.unit_of_measurement || '';
  const area = getEntityAreaName(hass, entityId);
  const data = useSensorChart(hass, entityId, { range, aggregate, withDays: isSum, currentValue });
  const { slots, period } = data.windowInfo;

  const priceEntityValue = chart.priceEntity ? numericState(getEntity(hass, chart.priceEntity)) : null;
  const price = priceEntityValue ?? chart.price;

  const heroValue = isSum ? data.total : currentValue;
  const heroText = isSum ? formatChartNumber(heroValue) : formatSensorValue(hass, entityId).value;
  const compareText = CHART_RANGES[range]?.compare || '';
  let delta = null;
  if (data.total != null && data.previous != null) {
    if (isSum) delta = data.previous > 0 ? ((data.total - data.previous) / data.previous) * 100 : null;
    else delta = data.total - data.previous;
  }

  const thresholdValue = chart.thresholdTarget === 'current'
    ? currentValue
    : chart.thresholdTarget === 'today' && isSum
      ? data.today
      : heroValue;
  const tone = matchThreshold(chart.thresholds, thresholdValue)?.tone || null;
  const barRules = isSum ? [] : chart.thresholds;

  const pastValues = data.values.filter((value, index) => value != null && !slots[index]?.future);
  const scale = useMemo(
    () => buildScale(pastValues, { min: chart.min, max: chart.max, zeroBased: isSum }),
    [pastValues.join('|'), chart.min, chart.max, isSum],
  );

  const active = activeIndex != null ? slots[activeIndex] : null;
  const activeValue = activeIndex != null ? data.values[activeIndex] : null;

  const withUnit = (value) => (value == null ? '—' : `${formatChartNumber(value)}${unit ? ` ${unit}` : ''}`);
  const stats = [];
  if (isSum) {
    stats.push(range === 'today'
      ? { key: 'day', icon: Zap, label: 'Gestern', value: withUnit(data.yesterday) }
      : { key: 'day', icon: Zap, label: 'Heute', value: withUnit(data.today) });
    if (price != null) {
      stats.push({ key: 'cost', icon: Coins, label: `Kosten (${RANGE_SHORT[range]})`, value: formatCurrency(data.total != null ? data.total * price : null) });
    } else {
      const average = pastValues.length ? pastValues.reduce((sum, v) => sum + v, 0) / pastValues.length : null;
      stats.push({ key: 'avg', icon: BarChart3, label: `Ø pro ${PERIOD_LABEL[period]}`, value: withUnit(average) });
    }
  } else {
    stats.push({ key: 'min', icon: ArrowDownRight, label: 'Minimum', value: withUnit(pastValues.length ? Math.min(...pastValues) : null) });
    stats.push({ key: 'max', icon: ArrowUpRight, label: 'Maximum', value: withUnit(pastValues.length ? Math.max(...pastValues) : null) });
  }

  return (
    <div
      className={`tm-quick-action tm-history-card${tone ? ' tm-history-card--toned' : ''}${data.loading ? ' is-loading' : ''}`}
      data-tone={tone || undefined}
      style={{
        '--tm-history-hero-chars': Math.max(4, heroText.length + (unit ? unit.length * 0.55 + 0.4 : 0)),
        '--tm-history-title-chars': Math.max(8, label.length),
      }}
    >
      <div className="tm-history-card-inner">
        <div className="tm-history-card-head">
          <div className="tm-history-card-heading">
            <div className="tm-history-card-title">{label}</div>
            <div className="tm-history-card-sub">{area || (isSum ? 'Verbrauch' : 'Verlauf')}</div>
          </div>
          <label className="tm-history-card-range" onClick={(event) => event.stopPropagation()}>
            <select
              value={range}
              onChange={(event) => setRange(event.target.value)}
              disabled={editMode}
              aria-label="Zeitraum"
            >
              {Object.entries(CHART_RANGES).map(([key, item]) => (
                <option key={key} value={key}>{item.label}</option>
              ))}
            </select>
            <span className="tm-history-card-range-text">{CHART_RANGES[range]?.label}</span>
            <ChevronDown className="tm-history-card-range-chevron" />
          </label>
        </div>

        <div className="tm-history-card-hero">
          {active ? (
            <>
              <div className="tm-history-card-value">
                <span>{activeValue == null ? '—' : formatChartNumber(activeValue)}</span>
                {unit && activeValue != null && <span className="tm-history-card-unit">{unit}</span>}
              </div>
              <div className="tm-history-card-caption">{active.title}</div>
            </>
          ) : (
            <>
              <div className="tm-history-card-value">
                <span>{heroText}</span>
                {unit && heroValue != null && <span className="tm-history-card-unit">{unit}</span>}
              </div>
              {delta != null && (
                <div className="tm-history-card-compare">
                  <span className="tm-history-card-delta">{formatDelta(delta, unit, isSum)}</span>
                  <span className="tm-history-card-caption">
                    {isSum ? 'im Vergleich' : `${AGGREGATE_PREFIX[aggregate]} im Vergleich`} {compareText}
                  </span>
                </div>
              )}
            </>
          )}
        </div>

        <ChartPlot
          slots={slots}
          values={data.values}
          scale={scale}
          type={chart.type}
          rules={barRules}
          activeIndex={activeIndex}
          onActiveChange={setActiveIndex}
          editMode={editMode}
        />

        <div className="tm-history-card-stats">
          {stats.map(({ key, ...stat }) => <StatChip key={key} {...stat} />)}
          <button
            type="button"
            ref={historyRef}
            className="tm-history-card-stat tm-history-card-stat--history"
            onClick={(event) => {
              if (editMode) return;
              event.stopPropagation();
              openMoreInfo(historyRef.current, entityId);
            }}
            aria-label="Verlauf öffnen"
          >
            <span className="tm-history-card-stat-icon"><BarChart3 /></span>
            <span className="tm-history-card-stat-text">
              <span className="tm-history-card-stat-label">Verlauf</span>
              <span className="tm-history-card-stat-value">{RANGE_SHORT[range]}</span>
            </span>
            <ChevronRight className="tm-history-card-stat-chevron" />
          </button>
        </div>
      </div>
    </div>
  );
}
