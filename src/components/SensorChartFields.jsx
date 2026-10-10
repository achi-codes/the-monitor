import { Plus, X } from 'lucide-react';
import EntityPicker from './EntityPicker';
import { getEntity } from '../lib/entities';
import {
  CHART_AGGREGATES,
  CHART_RANGES,
  CHART_TYPES,
  MAX_THRESHOLDS,
  THRESHOLD_OPS,
  THRESHOLD_TARGETS,
  THRESHOLD_TONES,
  normalizeSensorChart,
  resolveAggregate,
  resolveChartRange,
} from '../lib/sensorStatistics';

function numberInputValue(value) {
  return value == null ? '' : String(value);
}

export default function SensorChartFields({ widget, hass, onChange }) {
  const chart = normalizeSensorChart(widget.chart);
  const entity = getEntity(hass, widget.entity_ids?.[0] || widget.entity_id);
  const unit = entity.attributes?.unit_of_measurement || '';
  const isSum = resolveAggregate(chart, entity) === 'sum';
  const update = (patch) => onChange({ chart: { ...chart, ...patch } });
  const updateRule = (index, patch) => update({
    thresholds: chart.thresholds.map((rule, i) => (i === index ? { ...rule, ...patch } : rule)),
  });

  return (
    <div className="tm-sensor-chart-fields">
      <div className="tm-widget-inspector-field">
        <span className="tm-widget-inspector-field-label">Zeitraum</span>
        <select
          className="tm-input"
          value={resolveChartRange(chart, widget.historyHours)}
          onChange={(e) => update({ range: e.target.value })}
        >
          {Object.entries(CHART_RANGES).map(([key, item]) => (
            <option key={key} value={key}>{item.label}</option>
          ))}
        </select>
      </div>

      <div className="tm-widget-inspector-field">
        <span className="tm-widget-inspector-field-label">Darstellung</span>
        <div className="tm-widget-inspector-sizes tm-widget-inspector-sizes--segment">
          {Object.entries(CHART_TYPES).map(([key, typeLabel]) => (
            <button
              key={key}
              type="button"
              className={`tm-widget-inspector-size${chart.type === key ? ' active' : ''}`}
              onClick={() => update({ type: key })}
            >
              {typeLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="tm-widget-inspector-field">
        <span className="tm-widget-inspector-field-label">Auswertung</span>
        <select
          className="tm-input"
          value={chart.aggregate}
          onChange={(e) => update({ aggregate: e.target.value })}
        >
          {Object.entries(CHART_AGGREGATES).map(([key, aggregateLabel]) => (
            <option key={key} value={key}>{aggregateLabel}</option>
          ))}
        </select>
      </div>

      <div className="tm-widget-inspector-field">
        <span className="tm-widget-inspector-field-label">Skala{unit ? ` (${unit})` : ''}</span>
        <div className="tm-sensor-chart-fields-pair">
          <input
            className="tm-input"
            type="number"
            inputMode="decimal"
            step="any"
            placeholder="Min. automatisch"
            value={numberInputValue(chart.min)}
            onChange={(e) => update({ min: e.target.value })}
          />
          <input
            className="tm-input"
            type="number"
            inputMode="decimal"
            step="any"
            placeholder="Max. automatisch"
            value={numberInputValue(chart.max)}
            onChange={(e) => update({ max: e.target.value })}
          />
        </div>
      </div>

      {isSum && (
        <div className="tm-widget-inspector-field">
          <span className="tm-widget-inspector-field-label">Preis in € pro {unit || 'Einheit'}</span>
          <input
            className="tm-input"
            type="number"
            inputMode="decimal"
            step="any"
            placeholder="z. B. 0,32"
            value={numberInputValue(chart.price)}
            onChange={(e) => update({ price: e.target.value })}
          />
          <EntityPicker
            value={chart.priceEntity}
            onChange={(priceEntity) => update({ priceEntity: priceEntity || '' })}
            domains={['sensor', 'input_number']}
            placeholder="… oder Preis-Sensor wählen"
          />
        </div>
      )}

      <div className="tm-widget-inspector-field">
        <span className="tm-widget-inspector-field-label">Farbregeln</span>
        <p className="tm-widget-inspector-hint">
          Die erste passende Regel färbt die Kachel. Ohne Summe werden auch passende Balken eingefärbt.
        </p>
        {chart.thresholds.length > 0 && (
          <select
            className="tm-input"
            value={chart.thresholdTarget}
            onChange={(e) => update({ thresholdTarget: e.target.value })}
            aria-label="Regel prüft"
          >
            {Object.entries(THRESHOLD_TARGETS)
              .filter(([key]) => key !== 'today' || isSum)
              .map(([key, targetLabel]) => (
                <option key={key} value={key}>Prüfen: {targetLabel}</option>
              ))}
          </select>
        )}
        {chart.thresholds.map((rule, index) => (
          <div key={index} className="tm-sensor-chart-rule">
            <span className="tm-sensor-chart-rule-swatch" data-tone={rule.tone} />
            <select
              className="tm-input"
              value={rule.op}
              onChange={(e) => updateRule(index, { op: e.target.value })}
              aria-label="Vergleich"
            >
              {Object.entries(THRESHOLD_OPS).map(([key, opLabel]) => (
                <option key={key} value={key}>{opLabel}</option>
              ))}
            </select>
            <input
              className="tm-input"
              type="number"
              inputMode="decimal"
              step="any"
              placeholder="Wert"
              value={numberInputValue(rule.value)}
              onChange={(e) => updateRule(index, { value: e.target.value })}
              aria-label="Grenzwert"
            />
            <select
              className="tm-input"
              value={rule.tone}
              onChange={(e) => updateRule(index, { tone: e.target.value })}
              aria-label="Farbe"
            >
              {Object.entries(THRESHOLD_TONES).map(([key, toneLabel]) => (
                <option key={key} value={key}>{toneLabel}</option>
              ))}
            </select>
            <button
              type="button"
              className="tm-sensor-chart-rule-remove"
              onClick={() => update({ thresholds: chart.thresholds.filter((_, i) => i !== index) })}
              aria-label="Regel entfernen"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        {chart.thresholds.length < MAX_THRESHOLDS && (
          <button
            type="button"
            className="tm-widget-inspector-size tm-sensor-chart-rule-add"
            onClick={() => update({
              thresholds: [...chart.thresholds, { op: '>', value: null, tone: chart.thresholds.length ? 'orange' : 'red' }],
            })}
          >
            <Plus size={14} /> Regel hinzufügen
          </button>
        )}
      </div>
    </div>
  );
}
