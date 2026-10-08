import { useState, useEffect, useMemo, useRef } from 'react';
import { Camera, X } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import { getEntity } from '../lib/entities';
import { resolveCameraEntityIds, getCameraShortLabel } from '../lib/layout';
import {
  cameraSupportsStream,
  getCameraSnapshotUrl,
  getCameraStreamUrl,
} from '../lib/services';

const SNAPSHOT_INTERVAL_MS = 15000;

function HaCameraStreamView({ hass, entity, className, fitMode = 'cover' }) {
  const ref = useRef(null);
  const stateObj = useMemo(() => ({
    entity_id: entity.id,
    state: entity.state,
    attributes: entity.attributes,
  }), [entity.id, entity.state, entity.attributes]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.hass = hass;
    node.stateObj = stateObj;
    node.fitMode = fitMode;
    node.muted = true;
  }, [hass, stateObj, fitMode]);

  return <ha-camera-stream ref={ref} className={className} muted />;
}

function useCameraFeed(hass, entityId, entity, { isMock, isConnected }) {
  const [tick, setTick] = useState(0);
  const [failed, setFailed] = useState(false);

  const hasHaCameraStream = typeof customElements !== 'undefined' && customElements.get('ha-camera-stream');
  const streamSupported = Boolean(entityId && cameraSupportsStream(hass, entityId));
  const useHaStream = Boolean(
    hasHaCameraStream
    && isConnected
    && !isMock
    && entityId
    && hass?.states?.[entityId],
  );
  const streamUrl = streamSupported && isConnected && !isMock && !useHaStream
    ? getCameraStreamUrl(hass, entityId)
    : null;
  const useMjpegStream = Boolean(streamUrl && !failed);
  const useSnapshotFallback = Boolean(
    isConnected
    && !isMock
    && entityId
    && !failed
    && !useHaStream
    && !useMjpegStream,
  );
  const snapshotSrc = useSnapshotFallback
    ? getCameraSnapshotUrl(hass, entityId, { cacheBust: tick })
    : isMock && entityId
      ? getCameraSnapshotUrl(hass, entityId, { cacheBust: tick })
      : null;
  const isLive = useHaStream || useMjpegStream;
  const hasFeed = Boolean(useHaStream || useMjpegStream || snapshotSrc);

  useEffect(() => {
    setFailed(false);
    setTick(0);
  }, [entityId]);

  useEffect(() => {
    if (!useSnapshotFallback) return undefined;
    const interval = setInterval(() => setTick((t) => t + 1), SNAPSHOT_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [useSnapshotFallback]);

  return {
    tick,
    failed,
    setFailed,
    useHaStream,
    useMjpegStream,
    useSnapshotFallback,
    streamUrl,
    snapshotSrc,
    isLive,
    hasFeed,
  };
}

function CameraFeed({
  hass,
  entity,
  entityId,
  isMock,
  isConnected,
  feed,
  fitMode = 'cover',
  streamClassName = 'tm-camera-stream',
  imageClassName = 'tm-camera-feed',
}) {
  const {
    tick,
    failed,
    setFailed,
    useHaStream,
    useMjpegStream,
    streamUrl,
    snapshotSrc,
  } = feed;

  if (useHaStream) {
    return (
      <HaCameraStreamView
        hass={hass}
        entity={entity}
        className={streamClassName}
        fitMode={fitMode}
      />
    );
  }

  if (useMjpegStream) {
    return (
      <img
        src={streamUrl}
        className={imageClassName}
        alt={entity?.name || 'Kamera'}
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  if (snapshotSrc) {
    return (
      <img
        key={`${entityId}-${tick}`}
        src={snapshotSrc}
        className={imageClassName}
        alt={entity?.name || 'Kamera'}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="tm-placeholder-widget">
      <Camera size={32} />
      <span className="tm-text-sm">
        {failed ? 'Kamera nicht erreichbar' : 'Kamerabild nicht verfügbar'}
      </span>
    </div>
  );
}

function CameraBadge({ cameraName, isLive }) {
  return (
    <div className="tm-camera-badge">
      <Camera size={12} className="tm-camera-badge-icon" />
      <span>{cameraName}</span>
      {isLive && <span className="tm-camera-live">LIVE</span>}
    </div>
  );
}

function CameraSwitcher({ cameraIds, activeEntityId, getEntity, onSelect }) {
  if (cameraIds.length <= 1) return null;

  return (
    <div className="tm-camera-switcher" onClick={(event) => event.stopPropagation()}>
      {cameraIds.map((cameraId, index) => {
        const cameraEntity = getEntity(cameraId);
        const label = getCameraShortLabel(cameraEntity.name, index);
        const isActive = cameraId === activeEntityId;

        return (
          <button
            key={cameraId}
            type="button"
            className={`tm-camera-switch-btn${isActive ? ' active' : ''}`}
            onClick={(event) => {
              event.stopPropagation();
              onSelect(cameraId);
            }}
            aria-label={`${cameraEntity.name} anzeigen`}
            aria-pressed={isActive}
          >
            <span className="tm-camera-switch-btn-visual">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

function CameraExpanded({
  hass,
  entity,
  entityId,
  cameraIds,
  activeEntityId,
  getEntity,
  isMock,
  isConnected,
  feed,
  cameraName,
  onClose,
  onSelectCamera,
}) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="tm-camera-overlay" onClick={onClose}>
      <div className="tm-camera-overlay-backdrop" />
      <div
        className="tm-camera-expanded"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-label={`${cameraName} Vollbild`}
      >
        <button type="button" className="tm-camera-expanded-close" onClick={onClose} aria-label="Schließen">
          <X size={18} />
        </button>
        <CameraSwitcher
          cameraIds={cameraIds}
          activeEntityId={activeEntityId}
          getEntity={getEntity}
          onSelect={onSelectCamera}
        />
        {feed.hasFeed && !feed.failed && (
          <CameraBadge cameraName={cameraName} isLive={feed.isLive} />
        )}
        <CameraFeed
          hass={hass}
          entity={entity}
          entityId={entityId}
          isMock={isMock}
          isConnected={isConnected}
          feed={feed}
          fitMode="contain"
          streamClassName="tm-camera-stream"
          imageClassName="tm-camera-feed"
        />
      </div>
    </div>
  );
}

export default function CameraWidget({
  onSettings,
  entityId: entityIdProp,
  entityIds: entityIdsProp,
  widget,
  onConfigure,
}) {
  const { hass, isMock, isConnected, getEntity: hassGetEntity } = useHass();
  const { config } = useConfig();
  const handleConfigure = onConfigure || onSettings;

  const cameraIds = useMemo(() => {
    if (widget) return resolveCameraEntityIds(widget);
    const ids = (entityIdsProp || []).filter(Boolean);
    if (ids.length) return ids.slice(0, 3);
    if (entityIdProp || config.camera?.entity_id) {
      return [entityIdProp || config.camera?.entity_id];
    }
    return [];
  }, [widget, entityIdsProp, entityIdProp, config.camera?.entity_id]);

  const [activeEntityId, setActiveEntityId] = useState(() => cameraIds[0] || '');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!cameraIds.length) {
      setActiveEntityId('');
      return;
    }
    if (!cameraIds.includes(activeEntityId)) {
      setActiveEntityId(cameraIds[0]);
    }
  }, [cameraIds, activeEntityId]);

  const entityId = activeEntityId || cameraIds[0] || '';
  const entity = entityId ? getEntity(hass, entityId) : null;
  const cameraName = entity?.name || 'Kamera';
  const feed = useCameraFeed(hass, entityId, entity, { isMock, isConnected });

  const openExpanded = () => {
    if (feed.hasFeed && !feed.failed) setExpanded(true);
  };

  if (!cameraIds.length) {
    return (
      <div className="tm-card-dark tm-camera-widget">
        <div className="tm-placeholder-widget" onClick={handleConfigure} role="button" tabIndex={0}>
          <Camera size={32} />
          <span className="tm-text-sm">Kamera konfigurieren</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`tm-card-dark tm-camera-widget${feed.hasFeed && !feed.failed ? ' tm-camera-widget--clickable' : ''}`}
        onClick={openExpanded}
        onKeyDown={(event) => {
          if ((event.key === 'Enter' || event.key === ' ') && feed.hasFeed && !feed.failed) {
            event.preventDefault();
            openExpanded();
          }
        }}
        role={feed.hasFeed && !feed.failed ? 'button' : undefined}
        tabIndex={feed.hasFeed && !feed.failed ? 0 : undefined}
        aria-label={feed.hasFeed && !feed.failed ? `${cameraName} vergrößern` : undefined}
      >
        <CameraFeed
          hass={hass}
          entity={entity}
          entityId={entityId}
          isMock={isMock}
          isConnected={isConnected}
          feed={feed}
        />

        <CameraSwitcher
          cameraIds={cameraIds}
          activeEntityId={entityId}
          getEntity={hassGetEntity}
          onSelect={setActiveEntityId}
        />

        {feed.hasFeed && !feed.failed && (
          <CameraBadge cameraName={cameraName} isLive={feed.isLive} />
        )}
      </div>

      {expanded && (
        <CameraExpanded
          hass={hass}
          entity={entity}
          entityId={entityId}
          cameraIds={cameraIds}
          activeEntityId={entityId}
          getEntity={hassGetEntity}
          isMock={isMock}
          isConnected={isConnected}
          feed={feed}
          cameraName={cameraName}
          onClose={() => setExpanded(false)}
          onSelectCamera={setActiveEntityId}
        />
      )}
    </>
  );
}
