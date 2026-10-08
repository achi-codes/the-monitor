export const LIGHT_COLOR_PRESETS = [
  { id: 'warm', label: 'Warmweiß', rgb: [255, 166, 87] },
  { id: 'neutral', label: 'Neutralweiß', rgb: [255, 244, 229] },
  { id: 'cool', label: 'Kaltweiß', rgb: [207, 226, 255] },
  { id: 'red', label: 'Rot', rgb: [239, 68, 68] },
  { id: 'orange', label: 'Orange', rgb: [251, 146, 60] },
  { id: 'green', label: 'Grün', rgb: [74, 222, 128] },
  { id: 'blue', label: 'Blau', rgb: [96, 165, 250] },
  { id: 'purple', label: 'Violett', rgb: [192, 132, 252] },
];

export function rgbToCss(rgb) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

export function getLightRgbFromState(hass, entityId) {
  const state = hass?.states?.[entityId];
  if (!state) return null;
  const { rgb_color: rgb, color_mode: colorMode } = state.attributes || {};
  if (Array.isArray(rgb) && rgb.length >= 3) return rgb.slice(0, 3);
  if (colorMode === 'color_temp' && state.attributes?.color_temp) {
    return kelvinToRgb(state.attributes.color_temp);
  }
  return null;
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

export function isSameRgb(a, b, tolerance = 18) {
  if (!a || !b) return false;
  return Math.abs(a[0] - b[0]) <= tolerance
    && Math.abs(a[1] - b[1]) <= tolerance
    && Math.abs(a[2] - b[2]) <= tolerance;
}
