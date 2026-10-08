const SAMPLE_DATE = 'Beispieldaten · 18.06.2026';
const UNIT = 'kWh';

export const ENERGY_SANKEY_DATA = {
  title: 'Energiefluss heute',
  subtitle: SAMPLE_DATE,
  unit: UNIT,
  nodes: [
    { id: 'solar', name: 'Photovoltaik', column: 0, color: '#f9c802' },
    { id: 'grid_in', name: 'Netz (Bezug)', column: 0, color: '#488fc2' },
    { id: 'home', name: 'Haus', column: 1, color: '#4db6ac' },
    { id: 'heating', name: 'Heizung', column: 2, color: '#e57373' },
    { id: 'ev', name: 'E-Auto', column: 2, color: '#81c784' },
    { id: 'household', name: 'Haushalt', column: 2, color: '#9575cd' },
    { id: 'battery', name: 'Batterie', column: 2, color: '#4dd0e1' },
    { id: 'grid_out', name: 'Netz (Einspeisung)', column: 2, color: '#64b5f6' },
  ],
  links: [
    { source: 'solar', target: 'home', value: 8.2 },
    { source: 'solar', target: 'grid_out', value: 2.1 },
    { source: 'solar', target: 'battery', value: 2.1 },
    { source: 'grid_in', target: 'home', value: 3.8 },
    { source: 'home', target: 'heating', value: 6.5 },
    { source: 'home', target: 'ev', value: 4.2 },
    { source: 'home', target: 'household', value: 1.3 },
  ],
};

export const ENERGY_IO_TILE = {
  title: 'Inputs / Outputs',
  subtitle: SAMPLE_DATE,
  unit: UNIT,
  inputs: [
    { id: 'solar', name: 'Photovoltaik', value: 12.4, color: '#f9c802' },
    { id: 'grid_in', name: 'Netz (Bezug)', value: 4.6, color: '#488fc2' },
    { id: 'battery_out', name: 'Batterie', value: 1.2, color: '#4dd0e1' },
  ],
  outputs: [
    { id: 'consumption', name: 'Verbrauch', value: 13.2, color: '#4db6ac' },
    { id: 'grid_out', name: 'Einspeisung', value: 2.1, color: '#64b5f6' },
    { id: 'battery_in', name: 'Batterie', value: 2.1, color: '#26a69a' },
  ],
};

export const ENERGY_EV_TILE = {
  title: 'E-Auto',
  subtitle: SAMPLE_DATE,
  unit: UNIT,
  items: [
    {
      id: 'ev',
      name: 'E-Auto',
      value: 4.2,
      color: '#81c784',
      demoCharging: true,
      sources: [
        { name: 'Netz', value: 2.8 },
        { name: 'PV', value: 1.4 },
      ],
    },
    {
      id: 'heatpump',
      name: 'Wärmepumpe',
      value: 3.1,
      color: '#e57373',
      demoLightOn: true,
      sources: [
        { name: 'Netz', value: 2.1 },
        { name: 'PV', value: 1.0 },
      ],
    },
  ],
};

export const ENERGY_TILE_KINDS = {
  'inputs-outputs': { label: 'Inputs / Outputs', description: 'Quellen und Senken' },
  'ev-heatpump': { label: 'E-Auto & Wärmepumpe', description: 'Mobilität und Heizung' },
};

export function formatEnergyValue(value, unit = UNIT) {
  const rounded = value >= 10 ? value.toFixed(1) : value.toFixed(2);
  return `${rounded} ${unit}`;
}

export function getSankeyTotalInput(data) {
  return data.links
    .filter((link) => data.nodes.find((node) => node.id === link.source)?.column === 0)
    .reduce((sum, link) => sum + link.value, 0);
}

export function getEnergyTileData(tileKind) {
  if (tileKind === 'ev-heatpump') return ENERGY_EV_TILE;
  return ENERGY_IO_TILE;
}
