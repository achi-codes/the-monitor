import { ArrowDownLeft, ArrowUpRight, Car, Flame } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import {
  ENERGY_TILE_KINDS,
  formatEnergyValue,
  getEnergyTileData,
} from '../lib/energySampleData';
import {
  EV_STATE_LABELS,
  HEATPUMP_STATE_LABELS,
  normalizeEnergyDeviceImages,
  resolveEvImageUrl,
  resolveHeatpumpImageUrl,
  resolveHeatpumpLightOn,
} from '../lib/energyDeviceImages';
import { resolveEvStateEntity, resolveEvCharging } from '../lib/evCharging';

const ICON_STYLE = { opacity: 0.7, color: 'rgba(255,255,255,0.75)' };

function MetricRow({ name, value, unit, color }) {
  return (
    <div className="tm-energy-metric-row">
      {color && <span className="tm-energy-metric-dot" style={{ background: color }} />}
      <span className="tm-energy-metric-name">{name}</span>
      <span className="tm-energy-metric-value">{formatEnergyValue(value, unit)}</span>
    </div>
  );
}

function InputsOutputsTile({ data, title }) {
  const inputTotal = data.inputs.reduce((sum, item) => sum + item.value, 0);
  const outputTotal = data.outputs.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="tm-quick-action tm-energy-tile">
      <div className="tm-flex-row tm-justify-between tm-items-center" style={{ width: '100%' }}>
        <ArrowDownLeft size={24} style={ICON_STYLE} />
        <ArrowUpRight size={20} style={{ ...ICON_STYLE, opacity: 0.45 }} />
      </div>
      <div className="tm-flex-col" style={{ marginTop: 'auto', minHeight: 0, gap: '0.625rem' }}>
        <div>
          <div className="tm-font-bold" style={{ fontSize: '1.125rem', lineHeight: 1.25 }}>{title}</div>
          <div className="tm-text-xs tm-opacity-70" style={{ marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            In {formatEnergyValue(inputTotal, data.unit)} · Out {formatEnergyValue(outputTotal, data.unit)}
          </div>
        </div>
        <div className="tm-energy-metric-cols">
          <div className="tm-energy-metric-col">
            <div className="tm-text-xs tm-opacity-50" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Input</div>
            {data.inputs.map((item) => (
              <MetricRow key={item.id} name={item.name} value={item.value} unit={data.unit} color={item.color} />
            ))}
          </div>
          <div className="tm-energy-metric-col">
            <div className="tm-text-xs tm-opacity-50" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Output</div>
            {data.outputs.map((item) => (
              <MetricRow key={item.id} name={item.name} value={item.value} unit={data.unit} color={item.color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceVisualTile({
  name,
  value,
  unit,
  imageUrl,
  stateLabel,
  icon: Icon,
  sources,
  compact = false,
}) {
  return (
    <div className={`tm-energy-device-card${compact ? ' tm-energy-device-card--mini' : ''}`}>
      {imageUrl ? (
        <img src={imageUrl} alt="" className="tm-energy-device-card-bg" />
      ) : (
        <div className="tm-energy-device-card-bg tm-energy-device-card-bg--empty" />
      )}
      <div className="tm-energy-device-card-shade" aria-hidden />
      <div className="tm-energy-device-card-content">
        <div className="tm-energy-device-card-top">
          <span className="tm-energy-device-card-icon">
            <Icon size={compact ? 15 : 17} aria-hidden />
          </span>
          <span className="tm-energy-device-state">{stateLabel}</span>
        </div>
        <div className="tm-energy-device-card-body">
          <div className="tm-font-bold" style={{ fontSize: compact ? '0.9375rem' : '1.0625rem', lineHeight: 1.25 }}>
            {name}
          </div>
          <div
            className="tm-text-xs tm-opacity-70"
            style={{ marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            {formatEnergyValue(value, unit)}
          </div>
          {sources?.length > 0 && (
            <div className="tm-text-xs tm-opacity-50" style={{ marginTop: '0.3rem', lineHeight: 1.35 }}>
              {sources.map((s) => `${s.name} ${formatEnergyValue(s.value, unit)}`).join(' · ')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EvHeatpumpTile({ data, title, widget, hass }) {
  const { isMock } = useHass();
  const { config } = useConfig();
  const [ev, heatpump] = data.items;
  const deviceImages = normalizeEnergyDeviceImages(widget?.deviceImages);
  const stateEntity = resolveEvStateEntity(config, deviceImages, isMock);

  const evCharging = resolveEvCharging(hass, stateEntity, ev.demoCharging);
  const heatpumpLightOn = resolveHeatpumpLightOn(
    hass,
    deviceImages.heatpump.lightEntity,
    heatpump.demoLightOn,
  );

  const evImage = resolveEvImageUrl(hass, deviceImages, evCharging);
  const heatpumpImage = resolveHeatpumpImageUrl(hass, deviceImages, heatpumpLightOn);

  return (
    <div className="tm-energy-device-stack">
      <DeviceVisualTile
        name={title}
        value={ev.value}
        unit={data.unit}
        imageUrl={evImage}
        stateLabel={evCharging ? EV_STATE_LABELS.charging : EV_STATE_LABELS.idle}
        icon={Car}
        sources={ev.sources}
      />
      {heatpump && (
        <DeviceVisualTile
          name={heatpump.name}
          value={heatpump.value}
          unit={data.unit}
          imageUrl={heatpumpImage}
          stateLabel={heatpumpLightOn ? HEATPUMP_STATE_LABELS.lightOn : HEATPUMP_STATE_LABELS.lightOff}
          icon={Flame}
          sources={heatpump.sources}
          compact
        />
      )}
    </div>
  );
}

export default function EnergyTileWidget({ widget, hass }) {
  const tileKind = widget?.tileKind || 'inputs-outputs';
  const meta = ENERGY_TILE_KINDS[tileKind] || ENERGY_TILE_KINDS['inputs-outputs'];
  const data = getEnergyTileData(tileKind);
  const title = widget?.label || meta.label;

  if (tileKind === 'ev-heatpump') {
    return <EvHeatpumpTile data={data} title={title} widget={widget} hass={hass} />;
  }

  return <InputsOutputsTile data={data} title={title} />;
}
