import EntityPicker from './EntityPicker';
import { useConfig } from '../context/ConfigContext';
import { useHass } from '../context/HassContext';
import { getEvccLoadpoint } from '../lib/evCharging';

const FIELDS = [
  { key: 'stateEntity', label: 'Lade-Status', domains: ['binary_sensor', 'sensor', 'switch', 'input_boolean'], evcc: 'binary_sensor.evcc_{lp}_charging' },
  { key: 'powerEntity', label: 'Ladeleistung', domains: ['sensor'], evcc: 'sensor.evcc_{lp}_charge_power' },
  { key: 'batteryEntity', label: 'Akku (%)', domains: ['sensor', 'binary_sensor'], evcc: 'sensor.evcc_{lp}_vehicle_soc' },
  { key: 'rangeEntity', label: 'Reichweite (km)', domains: ['sensor'], evcc: 'sensor.evcc_{lp}_vehicle_range' },
  { key: 'chargeTimeEntity', label: 'Restladezeit', domains: ['sensor'], evcc: 'sensor.evcc_{lp}_charge_remaining_duration' },
  { key: 'lastTripEntity', label: 'Letzte Fahrt (km)', domains: ['sensor'] },
  { key: 'costEntity', label: 'Kosten heute (€)', domains: ['sensor'], evcc: 'sensor.evcc_{lp}_session_price' },
];

export default function EvEntityFields({ showLabel = true }) {
  const { config, updateEv } = useConfig();
  const { hass } = useHass();
  const loadpoint = getEvccLoadpoint(hass, config);

  return (
    <div className="tm-ev-fields">
      {showLabel && (
        <div className="tm-config-slot">
          <div className="tm-text-sm tm-opacity-70">Anzeigename</div>
          <input
            className="tm-input"
            type="text"
            value={config.ev?.label || ''}
            onChange={(e) => updateEv({ label: e.target.value })}
            placeholder="Grandland"
          />
        </div>
      )}
      {FIELDS.map((field) => {
        const evccDefault = loadpoint && field.evcc ? field.evcc.replace('{lp}', loadpoint) : '';
        return (
          <div key={field.key} className="tm-config-slot">
            <div className="tm-text-sm tm-opacity-70">{field.label}</div>
            <EntityPicker
              value={config.ev?.[field.key] || ''}
              onChange={(entityId) => updateEv({ [field.key]: entityId })}
              domains={field.domains}
              placeholder={evccDefault ? `automatisch: ${evccDefault}` : 'Entität wählen…'}
            />
          </div>
        );
      })}
    </div>
  );
}
