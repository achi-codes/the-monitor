import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { X } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';
import { useHass } from '../context/HassContext';
import { resolveHassUrl } from '../lib/hass';
import { getOverlayRoot } from '../lib/overlayPortal';
import {
  buildContextMoments,
  chooseStageLayout,
  collectWasteEntityIds,
  stageSignature,
} from '../lib/contextStage';
import { getMockWastePickups, loadWastePickups } from '../lib/waste';
import { getWasteArt } from '../lib/wasteArt';
import carArt from '../assets/ev/car.webp';

function TileArt({ moment, hass }) {
  if (moment.kind === 'ev') {
    return <img className="tm-stage-ev-art" src={carArt} alt="" draggable="false" />;
  }
  if (moment.kind === 'media' && moment.art) {
    const src = resolveHassUrl(hass, moment.art);
    if (!src) return null;
    return (
      <img
        className="tm-stage-media-art"
        src={src}
        alt=""
        draggable="false"
        onError={(event) => { event.currentTarget.hidden = true; }}
      />
    );
  }
  if (moment.kind === 'waste' && moment.bins.length) {
    return (
      <div className={`tm-stage-bins${moment.bins.length > 1 ? ' tm-stage-bins--multi' : ''}`} aria-hidden="true">
        {moment.bins.map((type) => (
          <img key={type} src={getWasteArt(type)} alt="" draggable="false" />
        ))}
      </div>
    );
  }
  return null;
}

function StageTile({ moment, lead, index, hass }) {
  const word = moment.kind !== 'clock' && String(moment.value || '').length > 3;
  return (
    <article
      className={`tm-stage-tile tm-stage-tile--${moment.kind}${lead ? ' tm-stage-tile--lead' : ''}${word ? ' tm-stage-tile--word' : ''}`}
      style={{
        '--tm-stage-bg': moment.theme.bg,
        '--tm-stage-fg': moment.theme.fg,
        '--tm-stage-accent': moment.theme.accent,
        '--tm-stage-i': index,
        '--tm-stage-progress': moment.progress != null ? `${moment.progress}%` : '0%',
      }}
      aria-label={`${moment.kicker}. ${moment.status}. ${moment.value}${moment.unit ? ` ${moment.unit}` : ''}`}
    >
      <TileArt moment={moment} hass={hass} />
      <div className="tm-stage-tile-body">
        <header className="tm-stage-head">
          <span className="tm-stage-kicker">{moment.kicker}</span>
          {moment.status && <span className="tm-stage-live">{moment.status}</span>}
        </header>
        <div className="tm-stage-figure">
          {moment.kind === 'media' ? (
            <h3 className="tm-stage-title">{moment.value}</h3>
          ) : (
            <div className={`tm-stage-value${word ? ' tm-stage-value--word' : ''}`}>
              {moment.value}
              {moment.unit && <span className="tm-stage-unit">{moment.unit}</span>}
            </div>
          )}
          {moment.caption && <p className="tm-stage-caption">{moment.caption}</p>}
        </div>
        <footer className="tm-stage-foot">
          {moment.facts.length > 0 && (
            <ul className="tm-stage-facts">
              {moment.facts.map((fact) => (
                <li key={fact.label} className="tm-stage-fact">
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </li>
              ))}
            </ul>
          )}
          {moment.progress != null && <div className="tm-stage-meter" aria-hidden="true"><span /></div>}
        </footer>
      </div>
    </article>
  );
}

const CLOCK_THEME = { bg: '#14161c', fg: '#f4f6fb', accent: '#d5d8e0' };

function clockMoment(now) {
  const date = new Date(now);
  return {
    id: 'clock',
    kind: 'clock',
    theme: CLOCK_THEME,
    kicker: 'Zuhause',
    status: '',
    value: format(date, 'HH:mm'),
    unit: '',
    caption: format(date, 'EEEE, d. MMMM', { locale: de }),
    progress: null,
    facts: [],
    art: '',
    bins: [],
  };
}

export default function ContextStage({ suspended = false, idle = false, onWake }) {
  const { hass, isMock, revision } = useHass();
  const { config } = useConfig();
  const [wastePickups, setWastePickups] = useState([]);
  const [now, setNow] = useState(() => Date.now());
  const [dismissed, setDismissed] = useState('');

  const wasteKey = useMemo(
    () => collectWasteEntityIds(config, hass).join('|'),
    [config, hass],
  );

  useEffect(() => {
    let cancelled = false;
    const entityIds = wasteKey ? wasteKey.split('|') : [];
    const run = async () => {
      if (!entityIds.length) {
        if (!cancelled) setWastePickups(isMock ? getMockWastePickups() : []);
        return;
      }
      try {
        const next = await loadWastePickups(hass, entityIds);
        if (cancelled) return;
        setWastePickups(next.length ? next : (isMock ? getMockWastePickups() : []));
      } catch {
        if (!cancelled && isMock) setWastePickups(getMockWastePickups());
      }
    };
    run();
    return () => { cancelled = true; };
  }, [wasteKey, hass, isMock, revision]);

  const moments = useMemo(
    () => buildContextMoments({ hass, config, isMock, wastePickups, now }),
    [hass, config, isMock, wastePickups, now],
  );
  const layout = useMemo(() => chooseStageLayout(moments), [moments]);
  const signature = stageSignature(moments);

  useEffect(() => {
    if (!signature) setDismissed('');
  }, [signature]);

  const showClock = idle && !layout.pattern;
  const ticking = showClock || moments.some((moment) => moment.kind === 'media');
  useEffect(() => {
    if (!ticking) return undefined;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [ticking]);

  const visibleLayout = layout.pattern
    ? layout
    : (showClock ? { pattern: 'hero', tiles: [clockMoment(now)] } : null);
  const hidden = !idle && dismissed === signature;

  const open = Boolean(visibleLayout) && !hidden;

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setDismissed(signature);
      if (idle) onWake?.();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, idle, signature, onWake]);

  if (!open) return null;

  const sidebar = Boolean(config.roomSidebar && config.rooms.length > 1);
  const count = visibleLayout.tiles.length;

  return createPortal(
    <section
      className={`tm-stage tm-stage--${visibleLayout.pattern}${sidebar ? ' tm-stage--sidebar' : ''}${suspended ? ' tm-stage--suspended' : ''}`}
      aria-label="Aktuelles"
      hidden={suspended}
    >
      <div className="tm-stage-scrim" />
      <div className="tm-stage-frame">
        <button
          type="button"
          className="tm-stage-close"
          onClick={() => {
            setDismissed(signature);
            if (idle) onWake?.();
          }}
          aria-label="Ausblenden"
        >
          <X size={18} strokeWidth={2.4} />
        </button>
        <div
          className={`tm-stage-board tm-stage-board--${visibleLayout.pattern} tm-stage-board--n${count}`}
          style={{ '--tm-stage-n': count }}
        >
          {visibleLayout.tiles.map((moment, index) => (
            <StageTile
              key={moment.id}
              moment={moment}
              lead={visibleLayout.pattern === 'mosaic' && index === 0}
              index={index}
              hass={hass}
            />
          ))}
        </div>
      </div>
    </section>,
    getOverlayRoot(),
  );
}
