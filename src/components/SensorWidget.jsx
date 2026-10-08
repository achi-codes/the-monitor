import { useCallback, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import EntityIcon from './EntityIcon';
import SensorSparkline, { formatScrubTime } from './SensorSparkline';
import { useHass } from '../context/HassContext';
import { getFriendlyName } from '../lib/entities';
import { useSensorHistories, useSensorHistory } from '../hooks/useSensorHistory';
import { canShowSensorHistory } from '../lib/sensorHistory';
import { SENSOR_SERIES_COLORS } from '../lib/sensorChart';
import { formatHistoryPointValue, formatSensorValue, resolveSensorEntityIds } from '../lib/sensorFormat';

function SensorReading({
  hass,
  entityId,
  entity,
  label,
  compact = false,
  history = false,
  colorIndex = 0,
  scrubSample = null,
  scrubbing = false,
}) {
  const { value, unit } = formatSensorValue(hass, entityId);
  const color = SENSOR_SERIES_COLORS[colorIndex % SENSOR_SERIES_COLORS.length];

  const displayValue = scrubbing && scrubSample
    ? formatHistoryPointValue(scrubSample.v, entity)
    : value;
  const displayUnit = scrubbing && entity.domain === 'binary_sensor' ? '' : unit;

  return (
    <div className={`tm-sensor-reading${compact ? ' tm-sensor-reading--compact' : ''}${history ? ' tm-sensor-reading--history' : ''}${scrubbing ? ' tm-sensor-reading--scrubbing' : ''}`}>
      <div className="tm-sensor-reading-top">
        {compact && (
          <span className="tm-sensor-series-dot" style={{ background: color.stroke }} />
        )}
        <EntityIcon hass={hass} entity={entity} size={compact ? 18 : 22} style={{ opacity: 0.75 }} />
        <span className="tm-sensor-reading-label">{label}</span>
      </div>
      <div className="tm-sensor-reading-value-row">
        <span
          className="tm-sensor-reading-value"
          style={scrubbing ? { color: color.stroke } : undefined}
        >
          {displayValue}
        </span>
        {displayUnit && <span className="tm-sensor-reading-unit">{displayUnit}</span>}
      </div>
    </div>
  );
}

function SingleSensorView({
  hass,
  getEntity,
  entityId,
  label,
  showHistory,
  historyHours,
}) {
  const { revision } = useHass();
  const [scrub, setScrub] = useState(null);
  const entity = getEntity(entityId);
  const historyEnabled = showHistory && canShowSensorHistory(hass, entityId);
  const { points, loading } = useSensorHistory(hass, entityId, {
    enabled: historyEnabled,
    hours: historyHours,
    revision,
  });

  const scrubbing = Boolean(scrub?.active && scrub.samples?.[0]);
  const scrubSample = scrub?.samples?.[0] || null;

  return (
    <div className={`tm-sensor-single${historyEnabled ? ' tm-sensor-single--history' : ''}`}>
      <SensorReading
        hass={hass}
        entityId={entityId}
        entity={entity}
        label={label}
        history={historyEnabled}
        scrubSample={scrubSample}
        scrubbing={scrubbing}
      />
      {historyEnabled && (
        <>
          <div
            className={`tm-sensor-reading-scrub-time${scrubbing ? '' : ' is-idle'}`}
            aria-hidden={!scrubbing}
          >
            {scrubbing ? formatScrubTime(scrub.time, historyHours) : '\u00a0'}
          </div>
          <div className="tm-sensor-sparkline-wrap">
            <SensorSparkline
              points={points}
              loading={loading}
              showRange
              domain={entity.domain}
              onScrubChange={setScrub}
            />
          </div>
        </>
      )}
    </div>
  );
}

function MultiSensorView({
  hass,
  getEntity,
  entityIds,
  widgetLabel,
  showHistory,
  historyHours,
}) {
  const { revision } = useHass();
  const [scrub, setScrub] = useState(null);
  const historyEnabled = showHistory && entityIds.some((id) => canShowSensorHistory(hass, id));
  const { series, loading } = useSensorHistories(hass, entityIds, {
    enabled: historyEnabled,
    hours: historyHours,
    revision,
  });

  const chartSeries = useMemo(() => entityIds.map((entityId, index) => {
    const entity = getEntity(entityId);
    const entry = series.find((item) => item.entityId === entityId);
    return {
      id: entityId,
      points: entry?.points || [],
      domain: entity.domain,
      unit: entity.attributes?.unit_of_measurement || '',
      colorIndex: index,
      label: widgetLabel && index === 0
        ? widgetLabel
        : getFriendlyName(hass, entityId),
    };
  }), [entityIds, getEntity, hass, series, widgetLabel]);

  const scrubbing = Boolean(scrub?.active && scrub.samples?.length);

  const handleScrubChange = useCallback((next) => {
    setScrub(next);
  }, []);

  return (
    <>
      <div className="tm-sensor-multi-readings">
        {entityIds.map((entityId, index) => {
          const entity = getEntity(entityId);
          const scrubSample = scrub?.samples?.find((sample) => sample.entityId === entityId) || null;
          return (
            <SensorReading
              key={entityId}
              hass={hass}
              entityId={entityId}
              entity={entity}
              label={
                widgetLabel && index === 0
                  ? widgetLabel
                  : getFriendlyName(hass, entityId)
              }
              compact
              colorIndex={index}
              scrubSample={scrubSample}
              scrubbing={scrubbing}
            />
          );
        })}
      </div>
      {historyEnabled && (
        <>
          <div
            className={`tm-sensor-reading-scrub-time tm-sensor-multi-scrub-time${scrubbing ? '' : ' is-idle'}`}
            aria-hidden={!scrubbing}
          >
            {scrubbing ? formatScrubTime(scrub.time, historyHours) : '\u00a0'}
          </div>
          <div className="tm-sensor-sparkline-wrap tm-sensor-multi-chart">
            <SensorSparkline
              series={chartSeries}
              loading={loading}
              compact={false}
              showRange={chartSeries.every((item) => item.unit === chartSeries[0]?.unit)}
              onScrubChange={handleScrubChange}
            />
          </div>
        </>
      )}
    </>
  );
}

export default function SensorWidget({ widget, hass, getEntity, onConfigure }) {
  const entityIds = resolveSensorEntityIds(widget);
  const showHistory = Boolean(widget.showHistory);
  const historyHours = widget.historyHours || 24;

  if (!entityIds.length) {
    return (
      <button type="button" className="tm-sensor-widget empty" onClick={onConfigure}>
        <Plus size={24} />
        <span className="tm-text-sm">Sensor wählen</span>
      </button>
    );
  }

  const multi = entityIds.length > 1;
  const useCombinedChart = multi && showHistory;

  return (
    <div className={`tm-sensor-widget${multi ? ' tm-sensor-widget--multi' : ''}${showHistory ? ' tm-sensor-widget--history' : ''}${useCombinedChart ? ' tm-sensor-widget--combined-chart' : ''}`}>
      {useCombinedChart ? (
        <MultiSensorView
          hass={hass}
          getEntity={getEntity}
          entityIds={entityIds}
          widgetLabel={widget.label}
          showHistory={showHistory}
          historyHours={historyHours}
        />
      ) : multi ? (
        entityIds.map((entityId, index) => (
          <SingleSensorView
            key={entityId}
            hass={hass}
            getEntity={getEntity}
            entityId={entityId}
            label={
              widget.label && index === 0
                ? widget.label
                : getFriendlyName(hass, entityId)
            }
            showHistory={showHistory}
            historyHours={historyHours}
          />
        ))
      ) : (
        <SingleSensorView
          hass={hass}
          getEntity={getEntity}
          entityId={entityIds[0]}
          label={widget.label || getFriendlyName(hass, entityIds[0])}
          showHistory={showHistory}
          historyHours={historyHours}
        />
      )}
    </div>
  );
}
