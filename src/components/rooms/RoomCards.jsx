import { useRef, useState } from 'react';
import {
  Lightbulb, Play, Pause, SkipBack, SkipForward, Star, Power, Fan, Lock, Plug,
  DoorOpen, DoorClosed, Activity, Gauge, Sparkles, Music,
} from 'lucide-react';
import { getDomain, getEntity } from '../../lib/entities';
import {
  getBrightnessPercent, setEntityBrightness, toggleEntity, setLightColorTemp,
  setClimateTemperature, mediaPlayPause, mediaNext, mediaPrevious,
  getCoverPositionPercent, setCoverPosition, activateScene,
} from '../../lib/services';
import { LIGHT_COLOR_PRESETS, getActiveLightPresetId, getLightColorSupport, getLightRgbFromState, rgbToHex } from '../../lib/lightColors';
import { readClimate, snapTemperature, formatTemp } from '../../lib/climate';
import { getLivePosition } from '../../lib/mediaPlayer';
import { getEntityPicture } from '../../lib/hass';
import { getCardKind } from '../../lib/roomsMode';

const SHORT_LABELS = { warm: 'Warm', neutral: 'Neutral', cool: 'Kühl' };
const LIGHT_PRESETS = LIGHT_COLOR_PRESETS
  .filter((preset) => preset.kelvin)
  .map((preset) => ({ ...preset, label: SHORT_LABELS[preset.id] || preset.label }));

function CardHead({ title, subtitle, favorite, onToggleFavorite, children }) {
  return (
    <div className="tm-rc-head">
      <div className="tm-rc-head-text">
        <h2 className="tm-rc-title">{title}</h2>
        {subtitle && <p className="tm-rc-sub">{subtitle}</p>}
      </div>
      <div className="tm-rc-head-actions">
        {children}
        <button
          type="button"
          className={`tm-rc-fav${favorite ? ' active' : ''}`}
          onClick={onToggleFavorite}
          aria-pressed={favorite}
          aria-label={favorite ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
        >
          <Star size={18} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
}

function Switch({ on, onClick, label }) {
  return (
    <button type="button" className={`tm-rc-switch${on ? ' on' : ''}`} onClick={onClick} aria-pressed={on} aria-label={label}>
      <span />
    </button>
  );
}

function LightPanel({ hass, entityId, run, label, compact = false }) {
  const entity = getEntity(hass, entityId);
  const on = entity.state === 'on';
  const stored = getBrightnessPercent(hass, entityId);
  const [dragPct, setDragPct] = useState(null);
  const panelRef = useRef(null);
  const pct = dragPct ?? (on ? stored : 0);
  const activePreset = getActiveLightPresetId(hass, entityId);
  const rgb = getLightRgbFromState(hass, entityId);
  const fill = LIGHT_PRESETS.find((p) => p.id === activePreset)?.swatch || (rgb ? rgbToHex(rgb) : '#efd9b0');

  const pctFromEvent = (event) => {
    const rect = panelRef.current.getBoundingClientRect();
    const ratio = 1 - (event.clientY - rect.top) / rect.height;
    return Math.min(100, Math.max(0, Math.round(ratio * 100)));
  };

  return (
    <div
      ref={panelRef}
      className={`tm-rc-light-panel${compact ? ' compact' : ''}`}
      role="slider"
      tabIndex={0}
      aria-label={`Helligkeit ${label}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setDragPct(pctFromEvent(event));
      }}
      onPointerMove={(event) => { if (dragPct != null) setDragPct(pctFromEvent(event)); }}
      onPointerUp={() => {
        if (dragPct == null) return;
        const next = dragPct;
        setDragPct(null);
        run(setEntityBrightness(hass, entityId, next));
      }}
      onPointerCancel={() => setDragPct(null)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowUp') run(setEntityBrightness(hass, entityId, Math.min(100, pct + 10)));
        if (event.key === 'ArrowDown') run(setEntityBrightness(hass, entityId, Math.max(0, pct - 10)));
      }}
    >
      <div className="tm-rc-light-fill" style={{ height: `${pct}%`, background: fill, transition: dragPct == null ? undefined : 'none' }} />
      <span className={`tm-rc-light-pct${pct >= (compact ? 78 : 82) ? ' dark' : ''}`}>{pct > 0 ? `${pct}%` : 'Aus'}</span>
      {compact
        ? <span className={`tm-rc-light-name${pct >= 14 ? ' dark' : ''}`}>{label}</span>
        : <Lightbulb className={`tm-rc-light-icon${pct >= 8 ? ' dark' : ''}`} size={26} />}
    </div>
  );
}

function LightCard({ hass, entityId, run, head, name: nameOverride, group = [] }) {
  const entity = getEntity(hass, entityId);
  const name = nameOverride || entity.name;
  const members = [entityId, ...group.filter((id) => id !== entityId && hass?.states?.[id])].slice(0, 4);
  const isGroup = members.length > 1;
  const anyOn = members.some((id) => hass?.states?.[id]?.state === 'on');
  const colorIds = members.filter((id) => getLightColorSupport(hass, id).colorTemp);
  const activePreset = getActiveLightPresetId(hass, colorIds[0] || entityId);
  const toggleAll = () => run(Promise.all(members.map((id) => (
    anyOn ? setEntityBrightness(hass, id, 0) : toggleEntity(hass, id)
  ))));
  // "Wohnzimmer Licht" next to "Wohnzimmer Stehlampe": drop the shared first word.
  const prefix = `${entity.name.split(' ')[0]} `.toLowerCase();
  const memberName = (id) => {
    const full = getEntity(hass, id).name;
    return full.toLowerCase().startsWith(prefix) && full.length > prefix.length ? full.slice(prefix.length) : full;
  };

  return (
    <section className={`tm-rc tm-rc--wide${isGroup ? ' tm-rc--light-group' : ''}`} aria-label={name}>
      <CardHead {...head} title={name} subtitle={isGroup ? `${members.length} Lampen · ${head.subtitle}` : head.subtitle}>
        <Switch on={isGroup ? anyOn : entity.state === 'on'} onClick={isGroup ? toggleAll : () => run(toggleEntity(hass, entityId))} label={`${name} schalten`} />
      </CardHead>
      {isGroup ? (
        <div className={`tm-rc-light-group tm-rc-light-group--${members.length}`}>
          {members.map((id) => (
            <LightPanel key={id} hass={hass} entityId={id} run={run} label={memberName(id) || getEntity(hass, id).name} compact />
          ))}
        </div>
      ) : (
        <LightPanel hass={hass} entityId={entityId} run={run} label={name} />
      )}
      {colorIds.length > 0 && (
        <div className="tm-rc-chips">
          {LIGHT_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className={`tm-rc-chip${activePreset === preset.id ? ' active' : ''}`}
              onClick={() => run(Promise.all(colorIds.map((id) => setLightColorTemp(hass, id, preset.kelvin))))}
            >
              <span className="tm-rc-dot" style={{ background: preset.swatch }} />
              {preset.label}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

function ClimateCard({ hass, entityId, run, head, name: nameOverride }) {
  const model = readClimate(hass, { entity_id: entityId });
  const target = model.target ?? model.min;
  const ratio = Math.min(1, Math.max(0, (target - model.min) / (model.max - model.min || 1)));
  const arc = 283;
  const change = (delta) => run(setClimateTemperature(
    hass, entityId, snapTemperature(target + delta, model.min, model.max, model.step),
  ));

  return (
    <section className="tm-rc" aria-label={model.title}>
      <CardHead {...head} title={nameOverride || model.title} subtitle={model.status?.label || model.subtitle} />
      <div className="tm-rc-climate-dial">
        <svg viewBox="0 0 220 130" aria-hidden="true">
          <path d="M20 115 A90 90 0 0 1 200 115" className="tm-rc-arc-track" />
          <path d="M20 115 A90 90 0 0 1 200 115" className="tm-rc-arc" style={{ stroke: model.accent || '#ff9a52' }} strokeDasharray={`${(ratio * arc).toFixed(1)} ${arc}`} />
        </svg>
        <div className="tm-rc-climate-now">
          <strong>{model.current != null ? `${formatTemp(model.current)}°` : '–'}</strong>
          <span>aktuell</span>
        </div>
      </div>
      <div className="tm-rc-stepper">
        <button type="button" onClick={() => change(-model.step)} aria-label="Kälter">−</button>
        <div><strong>{formatTemp(target)}°</strong><span>Soll</span></div>
        <button type="button" onClick={() => change(model.step)} aria-label="Wärmer">+</button>
      </div>
    </section>
  );
}

function MediaCard({ hass, entityId, run, head, name: nameOverride }) {
  const entity = getEntity(hass, entityId);
  const name = nameOverride || entity.name;
  const attrs = entity.attributes;
  const playing = entity.state === 'playing';
  const idle = ['off', 'idle', 'standby', 'unavailable'].includes(entity.state);
  const picture = getEntityPicture(hass, entityId);
  const live = getLivePosition(attrs, playing);
  const progress = live ? (live.position / live.duration) * 100 : 0;

  return (
    <section className="tm-rc" aria-label={name}>
      <div className="tm-rc-cover-art" style={picture ? { backgroundImage: `url("${picture.replace(/"/g, '%22')}")` } : undefined}>
        {!picture && <Music size={44} />}
      </div>
      <CardHead {...head} title={idle ? 'Nichts läuft' : (attrs.media_title || name)} subtitle={idle ? name : (attrs.media_artist || name)} />
      <div className="tm-rc-progress"><div style={{ width: `${progress}%` }} /></div>
      <div className="tm-rc-media-controls">
        <button type="button" className="tm-rc-round" onClick={() => run(mediaPrevious(hass, entityId))} aria-label="Zurück"><SkipBack size={20} /></button>
        <button type="button" className="tm-rc-round tm-rc-round--main" onClick={() => run(mediaPlayPause(hass, entityId))} aria-label={playing ? 'Pause' : 'Abspielen'}>
          {playing ? <Pause size={26} /> : <Play size={26} />}
        </button>
        <button type="button" className="tm-rc-round" onClick={() => run(mediaNext(hass, entityId))} aria-label="Weiter"><SkipForward size={20} /></button>
      </div>
    </section>
  );
}

function CoverCard({ hass, entityId, run, head, name: nameOverride }) {
  const entity = getEntity(hass, entityId);
  const name = nameOverride || entity.name;
  const open = getCoverPositionPercent(hass, entityId);
  const label = open >= 100 ? 'offen' : open <= 0 ? 'geschlossen' : `${open} % offen`;
  return (
    <section className="tm-rc" aria-label={name}>
      <CardHead {...head} title={name} subtitle={label} />
      <div className="tm-rc-window">
        <div className="tm-rc-slats" style={{ height: `${100 - open}%` }} />
      </div>
      <div className="tm-rc-chips">
        {[[100, 'Auf'], [50, 'Halb'], [0, 'Zu']].map(([value, text]) => (
          <button key={value} type="button" className={`tm-rc-chip${open === value ? ' active' : ''}`} onClick={() => run(setCoverPosition(hass, entityId, value))}>
            {text}
          </button>
        ))}
      </div>
    </section>
  );
}

const CONTACT_LABELS = {
  motion: ['Bewegung', 'Ruhe'],
  occupancy: ['Belegt', 'Frei'],
  presence: ['Anwesend', 'Leer'],
};

function ContactCard({ hass, entityId, head, name: nameOverride }) {
  const entity = getEntity(hass, entityId);
  const name = nameOverride || entity.name;
  const deviceClass = entity.attributes.device_class;
  const on = entity.state === 'on';
  const [onText, offText] = CONTACT_LABELS[deviceClass] || ['Offen', 'Geschlossen'];
  const isOpening = !CONTACT_LABELS[deviceClass];
  const alert = on && isOpening;
  const Icon = isOpening ? (on ? DoorOpen : DoorClosed) : Activity;
  return (
    <section className={`tm-rc${alert ? ' tm-rc--alert' : ''}`} aria-label={name}>
      <CardHead {...head} title={name} />
      <div className="tm-rc-status">
        <Icon size={40} />
        <strong>{on ? onText : offText}</strong>
      </div>
    </section>
  );
}

function SensorCard({ hass, entityId, head, name: nameOverride }) {
  const entity = getEntity(hass, entityId);
  const name = nameOverride || entity.name;
  const unit = entity.attributes.unit_of_measurement || '';
  const value = Number.parseFloat(entity.state);
  const text = Number.isFinite(value) ? value.toLocaleString('de-DE', { maximumFractionDigits: 1 }) : entity.state;
  return (
    <section className="tm-rc" aria-label={name}>
      <CardHead {...head} title={name} />
      <div className="tm-rc-status">
        <Gauge size={40} />
        <strong>{text}<small> {unit}</small></strong>
      </div>
    </section>
  );
}

const TOGGLE_ICONS = { fan: Fan, lock: Lock, switch: Plug };

function ToggleCard({ hass, entityId, run, head, name: nameOverride }) {
  const entity = getEntity(hass, entityId);
  const name = nameOverride || entity.name;
  const domain = getDomain(entityId);
  const on = ['on', 'unlocked', 'cleaning', 'open'].includes(entity.state);
  const Icon = TOGGLE_ICONS[domain] || Power;
  return (
    <section className={`tm-rc${on ? ' tm-rc--on' : ''}`} aria-label={name}>
      <CardHead {...head} title={name} subtitle={on ? 'An' : 'Aus'} />
      <button type="button" className="tm-rc-big-toggle" onClick={() => run(toggleEntity(hass, entityId))} aria-pressed={on} aria-label={`${name} schalten`}>
        <Icon size={56} />
      </button>
    </section>
  );
}

const CARDS = {
  light: LightCard,
  climate: ClimateCard,
  media: MediaCard,
  cover: CoverCard,
  contact: ContactCard,
  sensor: SensorCard,
  toggle: ToggleCard,
};

export function RoomCard({ hass, entityId, roomName, favorite, onToggleFavorite, run, name, group }) {
  const Card = CARDS[getCardKind(entityId)] || ToggleCard;
  const head = { subtitle: roomName, favorite, onToggleFavorite };
  return <Card hass={hass} entityId={entityId} run={run} head={head} name={name || ''} group={group || []} />;
}

export function SceneRow({ hass, sceneIds, run }) {
  if (!sceneIds.length) return null;
  return (
    <div className="tm-rc-scenes" role="group" aria-label="Szenen">
      {sceneIds.map((id) => (
        <button key={id} type="button" className="tm-rc-chip" onClick={() => run(activateScene(hass, id))}>
          <Sparkles size={16} />
          {getEntity(hass, id).name}
        </button>
      ))}
    </div>
  );
}
