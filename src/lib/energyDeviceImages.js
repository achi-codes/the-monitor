import { getDomain, isEntityOn } from './entities';
import { resolveHassUrl } from './hass';
import { resolveEvCharging as resolveEvChargingState } from './evCharging';

export { resolveEvChargingState as resolveEvCharging };

/** Opel Grandland — /local/grandland.png nach Deploy nach config/www/ */
export const GRANDLAND_EV_IMAGE = '/local/grandland.png';

export const DEFAULT_ENERGY_DEVICE_IMAGES = {
  ev: {
    charging: GRANDLAND_EV_IMAGE,
    idle: GRANDLAND_EV_IMAGE,
    stateEntity: '',
  },
  heatpump: {
    lightOn: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    lightOff: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    lightEntity: '',
  },
};

export const EV_STATE_LABELS = {
  charging: 'Lädt',
  idle: 'Nicht am Laden',
};

export const HEATPUMP_STATE_LABELS = {
  lightOn: 'Mit Licht',
  lightOff: 'Ohne Licht',
};

function mergeDeviceImages(raw = {}) {
  return {
    ev: {
      ...DEFAULT_ENERGY_DEVICE_IMAGES.ev,
      ...(raw.ev || {}),
    },
    heatpump: {
      ...DEFAULT_ENERGY_DEVICE_IMAGES.heatpump,
      ...(raw.heatpump || {}),
    },
  };
}

export function normalizeEnergyDeviceImages(raw) {
  return mergeDeviceImages(raw);
}

export function resolveHeatpumpLightOn(hass, lightEntity, demoFallback = false) {
  if (!lightEntity || !hass?.states?.[lightEntity]) return demoFallback;
  const stateObj = hass.states[lightEntity];
  return isEntityOn(stateObj.state, getDomain(lightEntity));
}

export function resolveEvImageUrl(hass, deviceImages, charging) {
  const images = mergeDeviceImages(deviceImages);
  const raw = charging ? images.ev.charging : images.ev.idle;
  return resolveEnergyAssetUrl(hass, raw);
}

export function resolveHeatpumpImageUrl(hass, deviceImages, lightOn) {
  const images = mergeDeviceImages(deviceImages);
  const raw = lightOn ? images.heatpump.lightOn : images.heatpump.lightOff;
  return resolveEnergyAssetUrl(hass, raw);
}

function resolveEnergyAssetUrl(hass, path) {
  if (!path) return null;
  if (import.meta.env?.DEV && path.startsWith('/local/')) {
    return path.replace('/local/', '/');
  }
  return resolveHassUrl(hass, path) || path;
}
