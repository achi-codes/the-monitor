import { Play, SkipBack, SkipForward, Power, Settings } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import {
  mediaPlayPause,
  mediaNext,
  mediaPrevious,
  turnOnEntity,
  turnOffEntity,
} from '../lib/services';
import { resolveHassUrl } from '../lib/hass';
import homepodImg from '../homepod.png';

function getMediaProgress(attributes, isPlaying) {
  const position = attributes.media_position;
  const duration = attributes.media_duration;
  if (typeof position === 'number' && typeof duration === 'number' && duration > 0) {
    return Math.min(100, Math.max(0, (position / duration) * 100));
  }
  return isPlaying ? 78 : 0;
}

function getDeviceBrand(attributes) {
  return attributes.device_manufacturer || attributes.app_name || attributes.source || '';
}

export default function MediaPlayer({ compact = false, entityId: entityIdProp, onConfigure }) {
  const { hass, getEntity } = useHass();
  const { config } = useConfig();
  const entityId = entityIdProp || config.mediaPlayer?.entity_id;

  if (!entityId) {
    return (
      <button
        type="button"
        className={`tm-card tm-media-widget empty${compact ? ' tm-media-widget--compact' : ''}`}
        onClick={onConfigure}
      >
        <div className="tm-placeholder-widget">
          <Settings size={compact ? 24 : 32} />
          <span className="tm-text-sm">Medienplayer konfigurieren</span>
        </div>
      </button>
    );
  }

  const entity = getEntity(entityId);
  const { attributes, state } = entity;
  const isPlaying = state === 'playing';
  const isPoweredOn = state !== 'off' && state !== 'unavailable';
  const title = attributes.media_title || attributes.media_content_id || 'Keine Wiedergabe';
  const artist = attributes.media_artist || '';
  const artwork = resolveHassUrl(hass, attributes.entity_picture);
  const progress = getMediaProgress(attributes, isPlaying);
  const deviceBrand = getDeviceBrand(attributes);

  const handlePlayPause = () => mediaPlayPause(hass, entityId);
  const handleNext = () => mediaNext(hass, entityId);
  const handlePrev = () => mediaPrevious(hass, entityId);
  const handlePower = () => {
    if (state === 'off') turnOnEntity(hass, entityId);
    else turnOffEntity(hass, entityId);
  };

  return (
    <div className={`tm-media-widget${compact ? ' tm-media-widget--compact' : ''}`}>
      <div className="tm-card tm-media-card">
        <div className="tm-media-header">
          <div className="tm-media-header-text">
            <div className="tm-media-device-name">{entity.name}</div>
            {deviceBrand && <div className="tm-media-device-brand">{deviceBrand}</div>}
          </div>
          <button
            type="button"
            className={`tm-media-power-btn${isPoweredOn ? ' on' : ''}`}
            onClick={handlePower}
            aria-label={isPoweredOn ? 'Ausschalten' : 'Einschalten'}
          >
            <Power size={16} strokeWidth={2} />
          </button>
        </div>

        <div className="tm-media-body">
          <div className="tm-media-panel">
            <div className="tm-media-track">
              <div
                className="tm-media-artwork"
                style={artwork ? { backgroundImage: `url("${artwork}")` } : undefined}
                aria-hidden
              />
              <div className="tm-media-track-meta">
                <div className="tm-media-track-title">{title}</div>
                {artist && <div className="tm-media-track-artist">{artist}</div>}
              </div>
            </div>

            <div className="tm-media-controls">
              <button type="button" onClick={handlePrev} className="tm-media-control-btn" aria-label="Zurück">
                <SkipBack size={compact ? 16 : 18} />
              </button>
              <button
                type="button"
                onClick={handlePlayPause}
                className="tm-media-control-btn tm-media-control-play"
                aria-label={isPlaying ? 'Pause' : 'Abspielen'}
              >
                {isPlaying ? (
                  <div className="tm-media-pause-bars">
                    <span />
                    <span />
                  </div>
                ) : (
                  <Play size={compact ? 16 : 18} style={{ marginLeft: '2px', fill: 'currentColor' }} />
                )}
              </button>
              <button type="button" onClick={handleNext} className="tm-media-control-btn" aria-label="Weiter">
                <SkipForward size={compact ? 16 : 18} />
              </button>
            </div>

            <div className="tm-media-progress" aria-hidden>
              <div className="tm-media-progress-track">
                <div className="tm-media-progress-fill" style={{ width: `${progress}%` }} />
                <div className="tm-media-progress-thumb" style={{ left: `${progress}%` }} />
              </div>
            </div>
          </div>

          <div className="tm-media-device-wrap">
            <img src={homepodImg} alt="" className="tm-media-device-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
