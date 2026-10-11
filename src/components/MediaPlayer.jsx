import { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  Heart,
  Music2,
  Pause,
  Play,
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
} from '../lib/services';
import { resolveHassUrl } from '../lib/hass';
import {
  MEDIA_FEATURES,
  formatMediaTime,
  getLivePosition,
  getMediaDeviceIds,
  getMediaDeviceLabel,
  mediaSupports,
} from '../lib/mediaPlayer';

const DEVICE_STORAGE_PREFIX = 'tm-media-device:';

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

function DeviceDropdown({ devices, activeId, activeLabel, disabled, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const multi = devices.length > 1;

  useEffect(() => {
    if (!open) return undefined;

    const handleClickOutside = (event) => {
      const path = typeof event.composedPath === 'function' ? event.composedPath() : [event.target];
      if (rootRef.current && path.includes(rootRef.current)) return;
      setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  if (!multi) {
    return (
      <div className="tm-room-selector tm-media-device-picker">
        <span className="tm-room-selector-trigger" aria-label={`Gerät: ${activeLabel}`}>
          <Speaker size={16} />
          <span className="tm-room-selector-label">{activeLabel}</span>
        </span>
      </div>
    );
  }

  return (
    <div className="tm-room-selector tm-media-device-picker" ref={rootRef}>
      <button
        type="button"
        className="tm-room-selector-trigger"
        onClick={() => setOpen((value) => !value)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Gerät wechseln"
      >
        <Speaker size={16} />
        <span className="tm-room-selector-label">{activeLabel}</span>
        <ChevronDown size={18} className={`tm-room-selector-chevron${open ? ' open' : ''}`} />
      </button>

      {open && (
        <ul className="tm-room-selector-menu" role="listbox" aria-label="Geräte">
          {devices.map((device) => (
            <li key={device.id} role="option" aria-selected={device.id === activeId}>
              <button
                type="button"
                className={`tm-room-selector-option${device.id === activeId ? ' active' : ''}`}
                disabled={disabled}
                onClick={() => {
                  onChange(device.id);
                  setOpen(false);
                }}
              >
                {device.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function MediaPlayer({ widget = {}, editMode = false, onConfigure }) {
  const { hass, getEntity } = useHass();
  const { config } = useConfig();
  const [storedId, setStoredId] = useStoredDevice(widget.id);
  const [pendingVolume, updateVolume] = usePendingValue(200);
  const [pendingSeek, updateSeek] = usePendingValue(350);

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
  const timing = getLivePosition(attributes, isPlaying, now);
  const position = pendingSeek ?? timing?.position ?? 0;
  const progress = timing ? (position / timing.duration) * 100 : 0;
  const volumeLevel = pendingVolume ?? (typeof attributes.volume_level === 'number' ? attributes.volume_level : null);
  const volumePercent = volumeLevel == null ? null : Math.round(volumeLevel * 100);
  const muted = attributes.is_volume_muted || volumePercent === 0;
  const VolumeIcon = muted ? VolumeX : volumePercent != null && volumePercent < 50 ? Volume1 : Volume2;
  const canSeek = Boolean(timing) && mediaSupports(attributes, MEDIA_FEATURES.seek);
  const canVolume = volumeLevel != null && mediaSupports(attributes, MEDIA_FEATURES.volume);
  const locked = editMode || offline;

  const devices = deviceIds.map((id) => ({
    id,
    label: getMediaDeviceLabel(hass, widget, id),
  }));
  const activeLabel = devices.find((device) => device.id === entityId)?.label || entity.name;
  const sourceLabel = activeLabel;

  const run = (action, ...args) => {
    if (locked) return;
    action(hass, entityId, ...args);
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
          <div className="tm-media-source">
            <span className="tm-media-source-icon"><Music2 /></span>
            <span className="tm-media-source-text">{sourceLabel}</span>
          </div>
        </div>

        <DeviceDropdown
          devices={devices}
          activeId={entityId}
          activeLabel={activeLabel}
          disabled={editMode}
          onChange={setStoredId}
        />

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
            <span className="tm-media-btn" aria-hidden>
              <Heart />
            </span>
          </div>

          <div className="tm-media-transport">
            <button
              type="button"
              className="tm-media-btn"
              onClick={() => run(mediaPrevious)}
              disabled={offline || !mediaSupports(attributes, MEDIA_FEATURES.previous)}
              aria-label="Zurück"
            >
              <SkipBack />
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
              <SkipForward />
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
    </div>
  );
}
