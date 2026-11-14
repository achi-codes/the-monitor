import { getFriendlyName, isVacuumActive, resolveVacuumEntityId } from './entities';
import {
  formatEvChargingPower,
  formatEvDuration,
  getEvOverview,
  isEvTrackingConfigured,
} from './evCharging';
import { formatMediaTime, getLivePosition } from './mediaPlayer';
import {
  getVacuumPhase,
  getVacuumPhaseLabel,
  resolveRemainingMinutes,
  resolveVacuumBattery,
} from './vacuumStatus';
import {
  groupWastePickups,
  pickupLabel,
  resolveWasteEntityIds,
} from './waste';

const WASTE_TILE = {
  yellow: { bg: '#e6c234', fg: '#1c1604', accent: '#1c1604' },
  paper: { bg: '#1d4e8c', fg: '#f4f8ff', accent: '#9ec6ff' },
  rest: { bg: '#2a2a2c', fg: '#f6f6f7', accent: '#d0d0d4' },
  bio: { bg: '#6b4a28', fg: '#fff8ef', accent: '#f0c48a' },
  glass: { bg: '#1c6140', fg: '#f3fff7', accent: '#8ee0b0' },
  bulk: { bg: '#543a78', fg: '#faf6ff', accent: '#d7c0f5' },
};

const THEME = {
  ev: { bg: '#0d3b24', fg: '#f3ffe8', accent: '#c6f54a' },
  media: { bg: '#1d3058', fg: '#f4f7ff', accent: '#9eb6ff' },
  vacuum: { bg: '#2c2116', fg: '#fff8ee', accent: '#ffbf5a' },
  alarm: { bg: '#6e1616', fg: '#fff5f5', accent: '#ffb4b0' },
};

function wasteWidgets(config) {
  const widgets = [];
  (config?.rooms || []).forEach((room) => {
    (room.layout?.pages || []).forEach((page) => {
      (page.widgets || []).forEach((widget) => {
        if (widget.type === 'waste') widgets.push(widget);
      });
    });
  });
  return widgets;
}

export function collectWasteEntityIds(config, hass) {
  const ids = wasteWidgets(config).flatMap((widget) => resolveWasteEntityIds(widget, hass));
  return [...new Set(ids.filter(Boolean))];
}

function configuredMediaIds(config) {
  const ids = [];
  if (config?.mediaPlayer?.entity_id) ids.push(config.mediaPlayer.entity_id);
  (config?.rooms || []).forEach((room) => {
    (room.layout?.pages || []).forEach((page) => {
      (page.widgets || []).forEach((widget) => {
        if (widget.type !== 'media') return;
        if (widget.entity_id) ids.push(widget.entity_id);
        (widget.entity_ids || []).forEach((id) => ids.push(id));
      });
    });
  });
  return [...new Set(ids.filter(Boolean))];
}

function isPlaying(state) {
  return state === 'playing' || state === 'buffering';
}

function mediaMoment(hass, entityId, extraCount, now) {
  const stateObj = hass?.states?.[entityId];
  if (!stateObj || !isPlaying(stateObj.state)) return null;
  const attrs = stateObj.attributes || {};
  const title = attrs.media_title || attrs.media_album_name || getFriendlyName(hass, entityId);
  const artist = attrs.media_artist || attrs.media_album_name || '';
  const live = getLivePosition(attrs, true, now);
  const app = attrs.app_name || attrs.media_content_type || '';
  const where = getFriendlyName(hass, entityId);
  return {
    id: 'media',
    kind: 'media',
    weight: 64,
    kicker: extraCount > 0 ? `${where} · +${extraCount}` : where,
    status: app || 'Spielt',
    value: title,
    unit: '',
    caption: artist,
    progress: live ? Math.round((live.position / live.duration) * 100) : null,
    facts: live ? [{ label: 'Läuft', value: `${formatMediaTime(live.position)} / ${formatMediaTime(live.duration)}` }] : [],
    art: attrs.entity_picture || '',
    bins: [],
    theme: THEME.media,
  };
}

function vacuumMoment(hass, config, isMock) {
  const entityId = resolveVacuumEntityId(hass, config?.vacuum?.entity_id, isMock, 'vacuum.roborock');
  const stateObj = entityId ? hass?.states?.[entityId] : null;
  if (!stateObj || !isVacuumActive(stateObj.state, stateObj.attributes)) return null;

  const entity = {
    id: entityId,
    state: stateObj.state,
    attributes: stateObj.attributes || {},
  };
  const phase = getVacuumPhase(entity);
  const battery = resolveVacuumBattery(hass, entity, config?.vacuum?.batteryEntity);
  const objectId = entityId.split('.')[1];
  const remaining = resolveRemainingMinutes(
    hass,
    [`sensor.${objectId}_restzeit`, `sensor.${objectId}_remaining`, `sensor.${objectId}_cleaning_time`]
      .find((id) => hass?.states?.[id]),
  );
  const roundedBattery = battery != null ? Math.round(battery) : null;
  const facts = [];
  if (remaining != null && roundedBattery != null) {
    facts.push({ label: 'Akku', value: `${roundedBattery} %` });
  }
  if (entity.attributes.fan_speed) {
    facts.push({ label: 'Stufe', value: String(entity.attributes.fan_speed) });
  }
  const detail = String(entity.attributes.status || '').trim();

  return {
    id: `vacuum:${entityId}`,
    kind: 'vacuum',
    weight: 74,
    kicker: entity.attributes.friendly_name || 'Sauger',
    status: getVacuumPhaseLabel(phase, roundedBattery),
    value: remaining != null ? String(remaining) : (roundedBattery != null ? String(roundedBattery) : '—'),
    unit: remaining != null ? 'Min.' : (roundedBattery != null ? '%' : ''),
    caption: detail || (remaining != null ? 'noch unterwegs' : 'Akku'),
    progress: remaining == null ? roundedBattery : null,
    facts: facts.slice(0, 2),
    art: '',
    bins: [],
    theme: THEME.vacuum,
  };
}

function evMoment(hass, config, isMock) {
  if (!isEvTrackingConfigured(hass, config, null, isMock)) return null;
  const overview = getEvOverview(hass, config, isMock);
  if (!overview.charging) return null;

  const facts = [];
  const power = formatEvChargingPower(overview.powerWatts);
  if (power !== '—') facts.push({ label: 'Leistung', value: power });
  if (overview.remainingSeconds != null) {
    facts.push({
      label: overview.limitSoc ? `bis ${overview.limitSoc} %` : 'Restzeit',
      value: formatEvDuration(overview.remainingSeconds),
    });
  }
  if (overview.rangeKm != null) {
    facts.push({ label: 'Reichweite', value: `${Math.round(overview.rangeKm)} km` });
  }

  const soc = overview.soc != null ? String(overview.soc) : null;
  return {
    id: 'ev',
    kind: 'ev',
    weight: 100,
    kicker: overview.label || 'E-Auto',
    status: 'Lädt',
    value: soc || (power !== '—' ? power.replace(' kW', '') : '—'),
    unit: soc ? '%' : (power !== '—' ? 'kW' : ''),
    caption: soc ? 'Akku' : 'Ladeleistung',
    progress: overview.soc,
    facts: facts.slice(0, 3),
    art: 'car',
    bins: [],
    theme: THEME.ev,
  };
}

function wasteMoment(pickups) {
  const { next } = groupWastePickups(pickups || []);
  if (!next?.length) return null;
  const days = next[0].days;
  if (days > 1) return null;
  const type = next[0].type;
  const theme = WASTE_TILE[type] || WASTE_TILE.rest;
  const names = next.map((pickup) => pickupLabel(pickup)).join(' · ');
  return {
    id: 'waste',
    kind: 'waste',
    weight: days === 0 ? 88 : 36,
    kicker: 'Müll',
    status: days === 0 ? 'Heute raus' : 'Morgen raus',
    value: days === 0 ? 'Heute' : 'Morgen',
    unit: '',
    caption: names,
    progress: null,
    facts: [],
    art: '',
    bins: next.slice(0, 2).map((pickup) => pickup.type),
    theme,
  };
}

function alarmMoment(hass, config) {
  const configured = config?.alarm?.entity_id;
  const ids = configured
    ? [configured]
    : Object.keys(hass?.states || {}).filter((id) => id.startsWith('alarm_control_panel.'));
  const entityId = ids.find((id) => hass?.states?.[id]?.state === 'triggered');
  if (!entityId) return null;
  const name = getFriendlyName(hass, entityId);
  return {
    id: `alarm:${entityId}`,
    kind: 'alarm',
    weight: 120,
    kicker: name,
    status: 'Ausgelöst',
    value: 'Alarm',
    unit: '',
    caption: 'Die Anlage ist ausgelöst',
    progress: null,
    facts: [],
    art: '',
    bins: [],
    theme: THEME.alarm,
  };
}

export function buildContextMoments({ hass, config, isMock = false, wastePickups = [], now = Date.now() }) {
  const moments = [
    alarmMoment(hass, config),
    evMoment(hass, config, isMock),
    vacuumMoment(hass, config, isMock),
  ].filter(Boolean);

  const preferred = configuredMediaIds(config);
  const playingPreferred = preferred.filter((id) => isPlaying(hass?.states?.[id]?.state));
  const playing = playingPreferred.length
    ? playingPreferred
    : Object.keys(hass?.states || {}).filter((id) => id.startsWith('media_player.') && isPlaying(hass.states[id].state));
  const media = playing[0] ? mediaMoment(hass, playing[0], Math.max(0, playing.length - 1), now) : null;
  if (media) moments.push(media);

  const waste = wasteMoment(wastePickups);
  if (waste) moments.push(waste);

  return moments.sort((a, b) => b.weight - a.weight || a.id.localeCompare(b.id));
}

export function stageSignature(moments) {
  return moments
    .filter((moment) => moment.weight >= 60)
    .map((moment) => moment.id)
    .sort()
    .join('|');
}

export function chooseStageLayout(moments) {
  const ranked = [...moments].sort((a, b) => b.weight - a.weight || a.id.localeCompare(b.id));
  const active = ranked.filter((moment) => moment.weight >= 60);
  if (!active.length) return { pattern: null, tiles: [] };

  const companions = ranked.filter((moment) => moment.weight < 60);
  const tiles = [...active, ...companions].slice(0, 5);
  const alarm = tiles.find((moment) => moment.kind === 'alarm');
  if (alarm) return { pattern: 'hero', tiles: [alarm] };
  if (tiles.length === 1) return { pattern: 'hero', tiles };

  const leadIsFat = tiles[0].weight >= 85;
  if (!leadIsFat && tiles.length === 2) return { pattern: 'duo', tiles };
  if (!leadIsFat) return { pattern: 'band', tiles: tiles.slice(0, 4) };
  return { pattern: 'mosaic', tiles };
}
