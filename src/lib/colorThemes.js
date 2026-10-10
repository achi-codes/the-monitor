export const COLOR_MODES = {
  dark: { id: 'dark', label: 'Schwarz' },
  light: { id: 'light', label: 'Weiß' },
  colorful: { id: 'colorful', label: 'Bunt' },
  blackColorful: { id: 'blackColorful', label: 'Schwarz bunt' },
};

/** Soft pastel card palette for "Schwarz bunt" (black + colorful cards). */
export const PASTEL_CARD_COLORS = [
  { bg: '#D0F2E0', fg: '#1a1a1a' }, // mint
  { bg: '#F7BD9D', fg: '#1a1a1a' }, // peach
  { bg: '#F9E892', fg: '#1a1a1a' }, // yellow
  { bg: '#BDE0F7', fg: '#1a1a1a' }, // sky
  { bg: '#E0C3FC', fg: '#1a1a1a' }, // lavender
  { bg: '#F0EEE8', fg: '#1a1a1a' }, // off-white
  { bg: '#F5C6D0', fg: '#1a1a1a' }, // soft pink
  { bg: '#2C2C2C', fg: '#ffffff' }, // charcoal accent card
];

export const COLOR_SETS = [
  {
    id: 'indigo',
    label: 'Indigo',
    accent: '#6366f1',
    accentRgb: '99, 102, 241',
    preview: 'linear-gradient(135deg, #a5b4fc, #4338ca)',
  },
  {
    id: 'ocean',
    label: 'Ozean',
    accent: '#06b6d4',
    accentRgb: '6, 182, 212',
    preview: 'linear-gradient(135deg, #67e8f9, #0e7490)',
  },
  {
    id: 'forest',
    label: 'Wald',
    accent: '#10b981',
    accentRgb: '16, 185, 129',
    preview: 'linear-gradient(135deg, #6ee7b7, #047857)',
  },
  {
    id: 'sunset',
    label: 'Sonnenuntergang',
    accent: '#f59e0b',
    accentRgb: '245, 158, 11',
    preview: 'linear-gradient(135deg, #fcd34d, #c2410c)',
  },
  {
    id: 'rose',
    label: 'Rose',
    accent: '#ec4899',
    accentRgb: '236, 72, 153',
    preview: 'linear-gradient(135deg, #f9a8d4, #be185d)',
  },
  {
    id: 'violet',
    label: 'Violett',
    accent: '#8b5cf6',
    accentRgb: '139, 92, 246',
    preview: 'linear-gradient(135deg, #c4b5fd, #6d28d9)',
  },
];

const DARK_SCENE_GRADIENTS = [
  'linear-gradient(135deg, #6366f1, #2563eb)',
  'linear-gradient(135deg, #f59e0b, #ea580c)',
  'linear-gradient(135deg, #10b981, #059669)',
  'linear-gradient(135deg, #ec4899, #be185d)',
  'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  'linear-gradient(135deg, #06b6d4, #0891b2)',
  'linear-gradient(135deg, #ef4444, #b91c1c)',
  'linear-gradient(135deg, #14b8a6, #0d9488)',
];

const LIGHT_SCENE_GRADIENTS = [
  'linear-gradient(135deg, #52525b, #18181b)',
  'linear-gradient(135deg, #3f3f46, #09090b)',
  'linear-gradient(135deg, #71717a, #27272a)',
  'linear-gradient(135deg, #27272a, #09090b)',
  'linear-gradient(135deg, #52525b, #27272a)',
  'linear-gradient(135deg, #3f3f46, #18181b)',
  'linear-gradient(135deg, #71717a, #3f3f46)',
  'linear-gradient(135deg, #18181b, #000000)',
];

export const DEFAULT_APPEARANCE = {
  mode: 'dark',
  colorSet: 'indigo',
};

function hexToRgb(hex) {
  const value = parseInt(hex.replace('#', ''), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function rgbToHex([r, g, b]) {
  return `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
}

function mixRgb(rgb, target, amount) {
  return rgb.map((channel, index) => Math.round(channel + (target[index] - channel) * amount));
}

export function buildShadePalette(hex) {
  const rgb = hexToRgb(hex);
  return [
    rgbToHex(mixRgb(rgb, [255, 255, 255], 0.45)),
    rgbToHex(mixRgb(rgb, [255, 255, 255], 0.25)),
    hex,
    rgbToHex(mixRgb(rgb, [0, 0, 0], 0.18)),
    rgbToHex(mixRgb(rgb, [0, 0, 0], 0.35)),
    rgbToHex(mixRgb(rgb, [0, 0, 0], 0.5)),
    rgbToHex(mixRgb(rgb, [0, 0, 0], 0.65)),
    rgbToHex(mixRgb(rgb, [0, 0, 0], 0.8)),
  ];
}

function buildColorfulSceneGradients(hex) {
  const shades = buildShadePalette(hex);
  return shades.map((light, index) => {
    const dark = shades[Math.min(index + 2, shades.length - 1)];
    return `linear-gradient(135deg, ${light}, ${dark})`;
  });
}

function migrateMode(mode) {
  if (mode === 'light' || mode === 'colorful' || mode === 'dark' || mode === 'blackColorful') return mode;
  if (mode === 'monochrome') return 'dark';
  return DEFAULT_APPEARANCE.mode;
}

function hashKey(key) {
  const value = String(key || '0');
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export function getPastelCardColor(key = '0') {
  return PASTEL_CARD_COLORS[hashKey(key) % PASTEL_CARD_COLORS.length];
}

const FIXED_PASTEL_BY_WIDGET_TYPE = {
  ev: PASTEL_CARD_COLORS[0],
  vacuum: PASTEL_CARD_COLORS[0],
  weather: PASTEL_CARD_COLORS[3],
};

export function getPastelCardVars(key = '0', widgetType = '') {
  const { bg, fg } = FIXED_PASTEL_BY_WIDGET_TYPE[widgetType] || getPastelCardColor(key);
  return {
    '--tm-surface': bg,
    '--tm-surface-2': bg,
    '--tm-surface-border': 'transparent',
    '--tm-tile-fg': fg,
  };
}

const LIGHT_PASTEL_CARD_COLORS = PASTEL_CARD_COLORS.filter((color) => color.fg !== '#ffffff');

/** Distinct light pastels for cards that sit side by side inside one widget. */
export function getPastelSeriesVars(key, index) {
  const { bg, fg } = LIGHT_PASTEL_CARD_COLORS[(hashKey(key) + index) % LIGHT_PASTEL_CARD_COLORS.length];
  return {
    '--tm-surface': bg,
    '--tm-surface-2': bg,
    '--tm-surface-border': 'transparent',
    '--tm-tile-fg': fg,
  };
}

export function normalizeAppearance(raw = {}) {
  const mode = migrateMode(raw.mode);
  const colorSet = COLOR_SETS.some((set) => set.id === raw.colorSet)
    ? raw.colorSet
    : DEFAULT_APPEARANCE.colorSet;
  return { mode, colorSet };
}

export function getColorSet(colorSetId = DEFAULT_APPEARANCE.colorSet) {
  return COLOR_SETS.find((set) => set.id === colorSetId) || COLOR_SETS[0];
}

export function resolveColorTheme(appearance = DEFAULT_APPEARANCE) {
  const normalized = normalizeAppearance(appearance);
  if (normalized.mode === 'light') {
    return {
      mode: 'light',
      colorSet: normalized.colorSet,
      accent: '#1d1d1f',
      accentRgb: '29, 29, 31',
    };
  }
  if (normalized.mode === 'colorful') {
    const set = getColorSet(normalized.colorSet);
    return { mode: 'colorful', colorSet: set.id, accent: set.accent, accentRgb: set.accentRgb };
  }
  if (normalized.mode === 'blackColorful') {
    return {
      mode: 'blackColorful',
      colorSet: normalized.colorSet,
      accent: '#1a1a1a',
      accentRgb: '26, 26, 26',
    };
  }
  return {
    mode: 'dark',
    colorSet: normalized.colorSet,
    accent: '#6366f1',
    accentRgb: '99, 102, 241',
  };
}

function buildDarkThemeVars() {
  return {
    '--tm-bg': '#000000',
    '--tm-fg': '#ffffff',
    '--tm-surface': 'rgba(255, 255, 255, 0.10)',
    '--tm-surface-2': 'rgba(255, 255, 255, 0.05)',
    '--tm-surface-border': 'rgba(255, 255, 255, 0.08)',
    '--tm-tile-fg': '#ffffff',
    '--tm-overlay': 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)',
    '--tm-screensaver-gradient': 'linear-gradient(135deg, rgba(49, 46, 129, 0.3), black, rgba(88, 28, 135, 0.3))',
    '--tm-bg-image-opacity': '0.6',
    '--tm-settings-bg': 'rgba(0, 0, 0, 0.85)',
    '--tm-settings-surface': 'rgba(255, 255, 255, 0.05)',
    '--tm-settings-surface-border': 'rgba(255, 255, 255, 0.08)',
    '--tm-accent': '#6366f1',
    '--tm-accent-rgb': '99, 102, 241',
    '--tm-vi-accent': '#ff6b2b',
    '--tm-vi-track': '#e5e5ea',
  };
}

function buildLightThemeVars() {
  return {
    '--tm-bg': '#f5f5f7',
    '--tm-fg': '#1d1d1f',
    '--tm-surface': '#1d1d1f',
    '--tm-surface-2': '#1d1d1f',
    '--tm-surface-border': 'rgba(255, 255, 255, 0.08)',
    '--tm-tile-fg': '#ffffff',
    '--tm-overlay': 'none',
    '--tm-screensaver-gradient': 'linear-gradient(135deg, rgba(0, 0, 0, 0.08), #f5f5f7, rgba(0, 0, 0, 0.05))',
    '--tm-bg-image-opacity': '0',
    '--tm-settings-bg': 'rgba(245, 245, 247, 0.96)',
    '--tm-settings-surface': 'rgba(0, 0, 0, 0.04)',
    '--tm-settings-surface-border': 'rgba(0, 0, 0, 0.08)',
    '--tm-accent': '#1d1d1f',
    '--tm-accent-rgb': '29, 29, 31',
    '--tm-vi-accent': '#1d1d1f',
    '--tm-vi-track': '#d1d1d6',
  };
}

function buildColorfulThemeVars(accent, accentRgb) {
  const shades = buildShadePalette(accent);
  const darkBg = shades[shades.length - 1];
  return {
    '--tm-bg': darkBg,
    '--tm-fg': '#ffffff',
    '--tm-surface': `rgba(${accentRgb}, 0.28)`,
    '--tm-surface-2': `rgba(${accentRgb}, 0.16)`,
    '--tm-surface-border': `rgba(${accentRgb}, 0.35)`,
    '--tm-tile-fg': '#ffffff',
    '--tm-overlay': `linear-gradient(to top, ${darkBg} 0%, rgba(${accentRgb}, 0.35) 55%, rgba(${accentRgb}, 0.2) 100%)`,
    '--tm-screensaver-gradient': `linear-gradient(135deg, rgba(${accentRgb}, 0.45), ${darkBg}, rgba(${accentRgb}, 0.25))`,
    '--tm-bg-image-opacity': '0.25',
    '--tm-settings-bg': 'rgba(0, 0, 0, 0.88)',
    '--tm-settings-surface': 'rgba(255, 255, 255, 0.06)',
    '--tm-settings-surface-border': `rgba(${accentRgb}, 0.25)`,
    '--tm-accent': accent,
    '--tm-accent-rgb': accentRgb,
    '--tm-vi-accent': accent,
    '--tm-vi-track': `rgba(${accentRgb}, 0.25)`,
  };
}

function buildBlackColorfulThemeVars() {
  const mint = PASTEL_CARD_COLORS[0];
  return {
    '--tm-bg': '#000000',
    '--tm-fg': '#ffffff',
    '--tm-surface': mint.bg,
    '--tm-surface-2': '#F0EEE8',
    '--tm-surface-border': 'transparent',
    '--tm-tile-fg': mint.fg,
    '--tm-overlay': 'none',
    '--tm-screensaver-gradient': 'linear-gradient(135deg, #D0F2E0 0%, #000 40%, #E0C3FC 100%)',
    '--tm-bg-image-opacity': '0',
    '--tm-settings-bg': 'rgba(0, 0, 0, 0.92)',
    '--tm-settings-surface': 'rgba(255, 255, 255, 0.06)',
    '--tm-settings-surface-border': 'rgba(255, 255, 255, 0.08)',
    '--tm-accent': '#1a1a1a',
    '--tm-accent-rgb': '26, 26, 26',
    '--tm-vi-accent': '#1a1a1a',
    '--tm-vi-track': 'rgba(0, 0, 0, 0.12)',
    '--tm-radius-xl': '2rem',
  };
}

export function getThemeCssVars(appearance = DEFAULT_APPEARANCE) {
  const theme = resolveColorTheme(appearance);
  if (theme.mode === 'light') return buildLightThemeVars();
  if (theme.mode === 'colorful') return buildColorfulThemeVars(theme.accent, theme.accentRgb);
  if (theme.mode === 'blackColorful') return buildBlackColorfulThemeVars();
  return buildDarkThemeVars();
}

export function getThemeAttributes(appearance = DEFAULT_APPEARANCE) {
  const { mode } = normalizeAppearance(appearance);
  return {
    'data-tm-theme': mode,
    style: getThemeCssVars(appearance),
  };
}

const BLACK_COLORFUL_SCENE_GRADIENTS = PASTEL_CARD_COLORS.map(({ bg }) => bg);

export function getSceneGradients(appearance = DEFAULT_APPEARANCE) {
  const { mode, colorSet } = normalizeAppearance(appearance);
  if (mode === 'light') return LIGHT_SCENE_GRADIENTS;
  if (mode === 'colorful') return buildColorfulSceneGradients(getColorSet(colorSet).accent);
  if (mode === 'blackColorful') return BLACK_COLORFUL_SCENE_GRADIENTS;
  return DARK_SCENE_GRADIENTS;
}

export function isDarkMode(appearance = DEFAULT_APPEARANCE) {
  return normalizeAppearance(appearance).mode === 'dark';
}

export function isLightMode(appearance = DEFAULT_APPEARANCE) {
  return normalizeAppearance(appearance).mode === 'light';
}

export function isColorfulMode(appearance = DEFAULT_APPEARANCE) {
  return normalizeAppearance(appearance).mode === 'colorful';
}

export function isBlackColorfulMode(appearance = DEFAULT_APPEARANCE) {
  return normalizeAppearance(appearance).mode === 'blackColorful';
}
