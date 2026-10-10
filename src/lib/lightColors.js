export const LIGHT_COLOR_PRESETS = [
  { id: 'warm', label: 'Warmweiß', kelvin: 2700, rgb: [255, 169, 87], swatch: '#fcd47e' },
  { id: 'neutral', label: 'Neutral', kelvin: 4000, rgb: [255, 209, 163], swatch: '#eef1fb' },
  { id: 'cool', label: 'Kaltweiß', kelvin: 6500, rgb: [255, 249, 253], swatch: '#b4d5fb' },
  { id: 'relax', label: 'Relax', rgb: [226, 140, 255], swatch: '#f0b4f4' },
];

const COLOR_TEMP_MODES = ['color_temp'];
const RGB_MODES = ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'];

export function rgbToHex(rgb) {
  return `#${rgb.slice(0, 3).map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')}`;
}

export function hexToRgb(hex) {
  const match = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex || '');
  return match ? match.slice(1).map((part) => parseInt(part, 16)) : null;
}

export function getLightColorSupport(hass, entityId) {
  const modes = hass?.states?.[entityId]?.attributes?.supported_color_modes;
  if (!Array.isArray(modes)) return { colorTemp: true, rgb: true };
  return {
    colorTemp: modes.some((mode) => COLOR_TEMP_MODES.includes(mode)),
    rgb: modes.some((mode) => RGB_MODES.includes(mode)),
  };
}

function getLightKelvin(attributes) {
  if (typeof attributes?.color_temp_kelvin === 'number') return attributes.color_temp_kelvin;
  if (typeof attributes?.color_temp === 'number' && attributes.color_temp > 0) {
    return Math.round(1000000 / attributes.color_temp);
  }
  return null;
}

export function getLightRgbFromState(hass, entityId) {
  const state = hass?.states?.[entityId];
  if (!state) return null;
  const attributes = state.attributes || {};
  if (attributes.color_mode === 'color_temp') {
    const kelvin = getLightKelvin(attributes);
    if (kelvin) return kelvinToRgb(kelvin);
  }
  const { rgb_color: rgb } = attributes;
  if (Array.isArray(rgb) && rgb.length >= 3) return rgb.slice(0, 3);
  return null;
}

export function getActiveLightPresetId(hass, entityId) {
  const attributes = hass?.states?.[entityId]?.attributes;
  if (!attributes) return null;
  if (attributes.color_mode === 'color_temp') {
    const kelvin = getLightKelvin(attributes);
    if (!kelvin) return null;
    const match = LIGHT_COLOR_PRESETS.find((preset) => preset.kelvin && Math.abs(preset.kelvin - kelvin) <= 400);
    return match?.id || null;
  }
  const rgb = getLightRgbFromState(hass, entityId);
  const match = LIGHT_COLOR_PRESETS.find((preset) => isSameRgb(rgb, preset.rgb));
  return match?.id || (rgb ? 'custom' : null);
}

function kelvinToRgb(kelvin) {
  const temp = kelvin / 100;
  let r;
  let g;
  let b;
  if (temp <= 66) {
    r = 255;
    g = Math.min(255, Math.max(0, 99.4708025861 * Math.log(temp) - 161.1195681661));
  } else {
    r = Math.min(255, Math.max(0, 329.698727446 * ((temp - 60) ** -0.1332047592)));
    g = Math.min(255, Math.max(0, 288.1221695283 * ((temp - 60) ** -0.0755148492)));
  }
  if (temp >= 66) b = 255;
  else if (temp <= 19) b = 0;
  else b = Math.min(255, Math.max(0, 138.5177312231 * Math.log(temp - 10) - 305.0447927307));
  return [Math.round(r), Math.round(g), Math.round(b)];
}

function isSameRgb(a, b, tolerance = 18) {
  if (!a || !b) return false;
  return Math.abs(a[0] - b[0]) <= tolerance
    && Math.abs(a[1] - b[1]) <= tolerance
    && Math.abs(a[2] - b[2]) <= tolerance;
}
