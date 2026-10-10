import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Check,
  ChevronDown,
  Music2,
  Pause,
  Play,
  Power,
  Settings,
  SkipBack,
  SkipForward,
  Speaker,
  Volume1,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import {
  mediaPlayPause,
  mediaNext,
  mediaPrevious,
  mediaSeek,
  mediaSetVolume,
  turnOnEntity,
  turnOffEntity,
} from '../lib/services';
import { resolveHassUrl } from '../lib/hass';
import { getOverlayRoot } from '../lib/overlayPortal';
import {
  MEDIA_FEATURES,
  formatMediaTime,
  getLivePosition,
  getMediaDeviceIds,
  getMediaDeviceLabel,
  mediaSupports,
} from '../lib/mediaPlayer';

const DEVICE_STORAGE_PREFIX = 'tm-media-device:';
const MENU_THEME_VARS = ['--tm-media-menu-bg', '--tm-media-menu-fg', '--tm-media-accent'];

function useStoredDevice(widgetId) {
  const key = `${DEVICE_STORAGE_PREFIX}${widgetId || 'default'}`;
  const [deviceId, setDeviceId] = useState(() => {
    try { return window.localStorage.getItem(key) || ''; } catch { return ''; }
  });
  const remember = (next) => {
    setDeviceId(next);
    try { window.localStorage.setItem(key, next); } catch { /* storage unavailable */ }
  };
  return [deviceId, remember];
}

function useTicker(active, intervalMs = 1000) {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    if (!active) return undefined;
    const timer = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(timer);
  }, [active, intervalMs]);
  return now;
}

function usePendingValue(delayMs) {
  const [pending, setPending] = useState(null);
  const timers = useRef({});
  useEffect(() => () => {
    window.clearTimeout(timers.current.commit);
    window.clearTimeout(timers.current.release);
  }, []);
  const update = (value, commit) => {
    setPending(value);
    window.clearTimeout(timers.current.commit);
    window.clearTimeout(timers.current.release);
    timers.current.commit = window.setTimeout(() => {
      commit(value);
      timers.current.release = window.setTimeout(() => setPending(null), 1500);
    }, delayMs);
  };
  return [pending, update];
}

function getStatusLabel(state) {
  if (state === 'playing' || state === 'on' || state === 'buffering') return 'Aktuell';
  if (state === 'paused') return 'Pausiert';
  if (state === 'idle' || state === 'standby') return 'Bereit';
  if (state === 'off') return 'Aus';
  return 'Nicht verfügbar';
}

function DeviceMenu({ anchorRef, devices, activeId, onPick, onClose }) {
  const [layout, setLayout] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      const anchor = anchorRef.current;
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const card = anchor.closest('.tm-media-card') || anchor;
      const computed = window.getComputedStyle(card);
      const vars = Object.fromEntries(MENU_THEME_VARS.map((name) => [name, computed.getPropertyValue(name).trim()]));
      const estimatedHeight = devices.length * 52 + 16;
      const openUp = rect.bottom + estimatedHeight + 12 > window.innerHeight && rect.top > estimatedHeight;
      setLayout({
        ...vars,
        right: Math.max(8, window.innerWidth - rect.right),
        minWidth: Math.max(rect.width, 200),
        ...(openUp ? { bottom: window.innerHeight - rect.top + 8 } : { top: rect.bottom + 8 }),
      });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [anchorRef, devices.length]);

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!layout) return null;

  return createPortal(
    <div className="tm-media-menu-layer">
      <button type="button" className="tm-media-menu-backdrop" onClick={onClose} aria-label="Schließen" />
      <div className="tm-media-menu" role="listbox" aria-label="Gerät wählen" style={layout}>
        {devices.map((device) => {
          const active = device.id === activeId;
          return (
            <button
              key={device.id}
              type="button"
              role="option"
              aria-selected={active}
              className={`tm-media-menu-item${active ? ' active' : ''}`}
              onClick={() => onPick(device.id)}
            >
              <Speaker className="tm-media-menu-icon" />
              <span className="tm-media-menu-text">
                <span className="tm-media-menu-label">{device.label}</span>
                {device.detail && <span className="tm-media-menu-detail">{device.detail}</span>}
              </span>
              {active && <Check className="tm-media-menu-check" />}
            </button>
          );
        })}
      </div>
    </div>,
    getOverlayRoot(anchorRef.current),
  );
}

export default function MediaPlayer({ widget = {}, editMode = false, onConfigure }) {
  const { hass, getEntity } = useHass();
  const { config } = useConfig();
  const [storedId, setStoredId] = useStoredDevice(widget.id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingVolume, updateVolume] = usePendingValue(200);
  const [pendingSeek, updateSeek] = usePendingValue(350);
  const deviceRef = useRef(null);

  const configuredIds = getMediaDeviceIds(widget);
  const deviceIds = configuredIds.length
    ? configuredIds
    : (config.mediaPlayer?.entity_id ? [config.mediaPlayer.entity_id] : []);
  const entityId = deviceIds.includes(storedId)
    ? storedId
    : (deviceIds.find((id) => hass?.states?.[id]?.state === 'playing') || deviceIds[0]);
  const entity = entityId ? getEntity(entityId) : null;
  const isPlaying = entity?.state === 'playing';
  const now = useTicker(isPlaying && !editMode);

  useEffect(() => {
    if (editMode) setMenuOpen(false);
  }, [editMode]);

  if (!entityId) {
    return (
      <button type="button" className="tm-card tm-media-widget empty" onClick={onConfigure}>
        <div className="tm-placeholder-widget">
          <Settings size={24} />
          <span className="tm-text-sm">Medienplayer konfigurieren</span>
        </div>
      </button>
    );
  }

  const { attributes, state } = entity;
  const isOn = state !== 'off' && state !== 'unavailable';
  const offline = state === 'unavailable';
  const title = attributes.media_title || (isOn ? 'Keine Wiedergabe' : 'Ausgeschaltet');
  const artist = attributes.media_artist || attributes.media_album_name || '';
  const artwork = resolveHassUrl(hass, attributes.entity_picture);
  const source = [attributes.app_name || attributes.source, entity.name].filter(Boolean).join(' · ');
  const timing = getLivePosition(attributes, isPlaying, now);
  const position = pendingSeek ?? timing?.position ?? 0;
  const progress = timing ? (position / timing.duration) * 100 : 0;
  const volumeLevel = pendingVolume ?? (typeof attributes.volume_level === 'number' ? attributes.volume_level : null);
  const volumePercent = volumeLevel == null ? null : Math.round(volumeLevel * 100);
  const muted = attributes.is_volume_muted || volumePercent === 0;
  const VolumeIcon = muted ? VolumeX : volumePercent != null && volumePercent < 50 ? Volume1 : Volume2;
  const canSeek = Boolean(timing) && mediaSupports(attributes, MEDIA_FEATURES.seek);
  const canVolume = volumeLevel != null && mediaSupports(attributes, MEDIA_FEATURES.volume);
  const canPower = mediaSupports(attributes, MEDIA_FEATURES.power);
  const locked = editMode || offline;

  const devices = deviceIds.map((id) => {
    const deviceState = hass?.states?.[id];
    const playing = deviceState?.state === 'playing';
    return {
      id,
      label: getMediaDeviceLabel(hass, widget, id),
      detail: playing && deviceState.attributes?.media_title
        ? `Spielt: ${deviceState.attributes.media_title}`
        : getStatusLabel(deviceState?.state),
    };
  });
  const activeLabel = devices.find((device) => device.id === entityId)?.label || entity.name;
  const multiDevice = devices.length > 1;

  const run = (action, ...args) => {
    if (locked) return;
    action(hass, entityId, ...args);
  };
  const handlePower = () => {
    if (editMode) return;
    if (isOn) turnOffEntity(hass, entityId);
    else turnOnEntity(hass, entityId);
  };

  return (
    <div className="tm-media-widget">
      <div className="tm-card tm-media-card" data-state={state}>
        <div
          className={`tm-media-artwork${artwork ? '' : ' tm-media-artwork--empty'}`}
          style={artwork ? { backgroundImage: `url("${artwork}")` } : undefined}
          aria-hidden
        >
          {!artwork && <Music2 />}
        </div>

        <div className="tm-media-meta">
          <div className="tm-media-eyebrow">{getStatusLabel(state)}</div>
          <div className="tm-media-title">{title}</div>
          {artist && <div className="tm-media-artist">{artist}</div>}
          {source && (
            <div className="tm-media-source">
              <span className="tm-media-source-icon"><Music2 /></span>
              <span className="tm-media-source-text">{source}</span>
            </div>
          )}
        </div>

        <button
          type="button"
          ref={deviceRef}
          className={`tm-media-device${multiDevice ? '' : ' tm-media-device--static'}`}
          onClick={(event) => {
            event.stopPropagation();
            if (!editMode && multiDevice) setMenuOpen((open) => !open);
          }}
          aria-haspopup={multiDevice ? 'listbox' : undefined}
          aria-expanded={multiDevice ? menuOpen : undefined}
          aria-label={`Gerät: ${activeLabel}`}
        >
          <Speaker className="tm-media-device-icon" />
          <span className="tm-media-device-label">{activeLabel}</span>
          {multiDevice && <ChevronDown className={`tm-media-device-chevron${menuOpen ? ' open' : ''}`} />}
        </button>

        <div className={`tm-media-progress${canSeek ? '' : ' tm-media-progress--static'}`}>
          <input
            type="range"
            className="tm-media-range tm-media-range--progress"
            min={0}
            max={timing?.duration || 1}
            step={1}
            value={position}
            disabled={!canSeek || locked}
            style={{ '--tm-media-fill': `${progress}%` }}
            onChange={(event) => updateSeek(Number(event.target.value), (value) => run(mediaSeek, value))}
            aria-label="Wiedergabeposition"
          />
          <div className="tm-media-times">
            <span>{formatMediaTime(position)}</span>
            <span>{timing ? formatMediaTime(timing.duration) : '–:––'}</span>
          </div>
        </div>

        <div className="tm-media-controls">
          <div className="tm-media-controls-side">
            {canPower && (
              <button
                type="button"
                className={`tm-media-btn tm-media-btn--square tm-media-power${isOn ? ' on' : ''}`}
                onClick={handlePower}
                aria-label={isOn ? 'Ausschalten' : 'Einschalten'}
              >
                <Power />
              </button>
            )}
          </div>

          <div className="tm-media-transport">
            <button
              type="button"
              className="tm-media-btn"
              onClick={() => run(mediaPrevious)}
              disabled={offline || !mediaSupports(attributes, MEDIA_FEATURES.previous)}
              aria-label="Zurück"
            >
              <SkipBack className="tm-media-icon-fill" />
            </button>
            <button
              type="button"
              className="tm-media-btn tm-media-btn--play"
              onClick={() => run(mediaPlayPause)}
              disabled={offline}
              aria-label={isPlaying ? 'Pause' : 'Abspielen'}
            >
              {isPlaying ? <Pause className="tm-media-icon-fill" /> : <Play className="tm-media-icon-fill tm-media-icon-play" />}
            </button>
            <button
              type="button"
              className="tm-media-btn"
              onClick={() => run(mediaNext)}
              disabled={offline || !mediaSupports(attributes, MEDIA_FEATURES.next)}
              aria-label="Weiter"
            >
              <SkipForward className="tm-media-icon-fill" />
            </button>
          </div>

          <div className="tm-media-controls-side tm-media-controls-side--end">
            {canVolume && (
              <div className="tm-media-volume">
                <VolumeIcon className="tm-media-volume-icon" />
                <input
                  type="range"
                  className="tm-media-range tm-media-range--volume"
                  min={0}
                  max={100}
                  step={1}
                  value={volumePercent}
                  disabled={locked}
                  style={{ '--tm-media-fill': `${volumePercent}%` }}
                  onChange={(event) => updateVolume(Number(event.target.value) / 100, (value) => run(mediaSetVolume, value))}
                  aria-label="Lautstärke"
                />
                <span className="tm-media-volume-value">{volumePercent}%</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <DeviceMenu
          anchorRef={deviceRef}
          devices={devices}
          activeId={entityId}
          onClose={() => setMenuOpen(false)}
          onPick={(id) => {
            setStoredId(id);
            setMenuOpen(false);
          }}
        />
      )}
    </div>
  );
}
