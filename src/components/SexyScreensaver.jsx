import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { useConfig } from '../context/ConfigContext';
import { useHass } from '../context/HassContext';
import { resolveHassUrl } from '../lib/hass';
import { formatSensorValue } from '../lib/sensorFormat';
import { getConditionIcon, getConditionMeta } from '../lib/weather.jsx';

function formatTemp(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return num.toLocaleString('de-DE', { maximumFractionDigits: 1 });
}

function roomWidgets(room) {
  return (room?.layout?.pages || []).flatMap((page) => page.widgets || []);
}

function widgetEntityIds(widget) {
  const ids = [];
  if (widget?.entity_id) ids.push(widget.entity_id);
  (widget?.entity_ids || []).forEach((id) => {
    if (id) ids.push(id);
  });
  return ids;
}

function mediaProgress(attributes) {
  const position = attributes?.media_position;
  const duration = attributes?.media_duration;
  if (typeof position !== 'number' || typeof duration !== 'number' || duration <= 0) return null;
  return Math.min(100, Math.max(0, (position / duration) * 100));
}

function findAmbience(widgets, getEntity, config) {
  for (const widget of widgets) {
    if (widget.type !== 'sensor') continue;
    const ids = widget.entity_ids?.length
      ? widget.entity_ids
      : (widget.entity_id ? [widget.entity_id] : []);
    for (const id of ids) {
      const entity = getEntity(id);
      const deviceClass = entity.attributes?.device_class;
      if (!['temperature', 'humidity', 'illuminance'].includes(deviceClass)) continue;
      if (entity.state === 'unavailable' || entity.state === 'unknown') continue;
      return {
        kicker: widget.label || entity.name,
        entityId: id,
      };
    }
  }

  for (const widget of widgets) {
    for (const id of widgetEntityIds(widget)) {
      if (!id.startsWith('climate.')) continue;
      const entity = getEntity(id);
      const temp = formatTemp(entity.attributes?.current_temperature);
      if (!temp) continue;
      return {
        kicker: widget.label || entity.name,
        value: temp,
        unit: '°',
        detail: 'Raumklima',
      };
    }
  }

  const batteryId = config.ev?.batteryEntity;
  if (batteryId) {
    const entity = getEntity(batteryId);
    if (entity.state !== 'unavailable' && entity.state !== 'unknown') {
      const charging = config.ev.stateEntity ? getEntity(config.ev.stateEntity) : null;
      return {
        kicker: config.ev.label || entity.name,
        entityId: batteryId,
        detail: charging?.state === 'on' ? 'Lädt' : 'Akku',
        powerEntityId: charging?.state === 'on' ? config.ev.powerEntity : '',
      };
    }
  }

  return null;
}

function buildTiles({ config, room, hass, getEntity }) {
  const widgets = roomWidgets(room);
  const tiles = [];

  if (config.screensaver.showWeather && config.weather?.entity_id) {
    const entity = getEntity(config.weather.entity_id);
    if (entity.state && entity.state !== 'unavailable' && entity.attributes?.temperature != null) {
      tiles.push({ kind: 'weather', entity });
    }
  }

  const mediaWidget = widgets.find((widget) => widget.type === 'media' && widget.entity_id);
  const mediaId = mediaWidget?.entity_id || config.mediaPlayer?.entity_id;
  if (mediaId) {
    const entity = getEntity(mediaId);
    const title = entity.attributes?.media_title;
    const artist = entity.attributes?.media_artist;
    const active = entity.state === 'playing' || entity.state === 'paused';
    if (active || title || artist) {
      tiles.push({ kind: 'media', entity, entityId: mediaId });
    }
  }

  const people = (config.presence || [])
    .map((person) => {
      const entity = getEntity(person.entity_id);
      if (!person.entity_id || entity.state === 'unavailable') return null;
      return {
        id: person.entity_id,
        name: person.label || entity.name,
        home: entity.state === 'home',
        picture: resolveHassUrl(hass, entity.attributes?.entity_picture),
      };
    })
    .filter(Boolean);
  if (people.length) tiles.push({ kind: 'people', people });

  const ambience = findAmbience(widgets, getEntity, config);
  if (ambience) tiles.push({ kind: 'stat', ...ambience });

  return tiles.slice(0, 4);
}

function WeatherTile({ entity }) {
  const meta = getConditionMeta(entity.state);
  const temp = formatTemp(entity.attributes?.temperature);
  const humidity = entity.attributes?.humidity;
  const wind = entity.attributes?.wind_speed;
  const metaLine = [
    humidity != null ? `${Math.round(humidity)} %` : null,
    wind != null ? `${Math.round(wind)} km/h` : null,
  ].filter(Boolean).join('  ·  ');

  return (
    <div className="tm-ssx-tile">
      <div className="tm-ssx-icon" aria-hidden>
        {getConditionIcon(entity.state, { size: 30, strokeWidth: 1.6 })}
      </div>
      <div className="tm-ssx-copy">
        <div className="tm-ssx-value">
          {temp}
          <span>°</span>
        </div>
        <div className="tm-ssx-label">{meta.label}</div>
        {metaLine && <div className="tm-ssx-sub">{metaLine}</div>}
      </div>
    </div>
  );
}

function MediaTile({ entity, hass }) {
  const artwork = resolveHassUrl(hass, entity.attributes?.entity_picture);
  const title = entity.attributes?.media_title || entity.name || 'Wiedergabe';
  const artist = entity.attributes?.media_artist || '';
  const progress = mediaProgress(entity.attributes);
  const kicker = entity.state === 'paused' ? 'Pause' : 'Gerade läuft';

  return (
    <div className="tm-ssx-tile">
      <div
        className="tm-ssx-art"
        style={artwork ? { backgroundImage: `url("${artwork}")` } : undefined}
        aria-hidden
      />
      <div className="tm-ssx-copy">
        <div className="tm-ssx-kicker">{kicker}</div>
        <div className="tm-ssx-title">{title}</div>
        {artist && <div className="tm-ssx-sub">{artist}</div>}
        {progress != null && (
          <div className="tm-ssx-progress" aria-hidden>
            <span style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
    </div>
  );
}

function PeopleTile({ people }) {
  const home = people.filter((person) => person.home);
  const names = (home.length ? home : people).map((person) => person.name).join(', ');
  let kicker = 'Anwesend';
  if (home.length === 0) kicker = 'Niemand zuhause';
  else if (home.length === people.length) kicker = 'Alle zuhause';
  else kicker = `${home.length} zuhause`;

  return (
    <div className="tm-ssx-tile tm-ssx-tile--people">
      <div className="tm-ssx-kicker">{kicker}</div>
      <div className="tm-ssx-avatars">
        {people.map((person) => (
          <div key={person.id} className={`tm-ssx-avatar${person.home ? '' : ' away'}`} title={person.name}>
            {person.picture ? (
              <img src={person.picture} alt="" />
            ) : (
              <span>{person.name?.[0] || '?'}</span>
            )}
          </div>
        ))}
      </div>
      <div className="tm-ssx-sub">{names}</div>
    </div>
  );
}

function StatTile({ tile, hass }) {
  let value = tile.value;
  let unit = tile.unit || '';
  let detail = tile.detail || '';

  if (tile.entityId && value == null) {
    const reading = formatSensorValue(hass, tile.entityId);
    value = reading.value;
    unit = reading.unit || '';
  }

  if (tile.powerEntityId) {
    const power = formatSensorValue(hass, tile.powerEntityId);
    if (power.value && power.value !== '—') {
      detail = `${power.value}${power.unit ? ` ${power.unit}` : ''}`;
    }
  }

  return (
    <div className="tm-ssx-tile tm-ssx-tile--stat">
      <div className="tm-ssx-copy">
        <div className="tm-ssx-kicker">{tile.kicker}</div>
        <div className="tm-ssx-value">
          {value}
          {unit && <span>{unit}</span>}
        </div>
        {detail && <div className="tm-ssx-sub">{detail}</div>}
      </div>
    </div>
  );
}

export default function SexyScreensaver({ time }) {
  const { config, activeRoom } = useConfig();
  const { hass, getEntity } = useHass();
  const tiles = buildTiles({ config, room: activeRoom, hass, getEntity });
  const photo = config.backgroundImage;

  return (
    <div className="tm-ssx tm-animate-fade">
      <div
        className="tm-ssx-photo"
        style={photo ? { backgroundImage: `url("${photo}")` } : undefined}
      />
      <div className="tm-ssx-shade" />

      <div className="tm-ssx-clock">
        <h1 className="tm-ssx-time">{format(time, 'HH:mm')}</h1>
        {config.screensaver.showDate && (
          <p className="tm-ssx-date">
            {format(time, 'EEEE, d. MMMM', { locale: de })}
          </p>
        )}
      </div>

      {tiles.length > 0 && (
        <div className="tm-ssx-dock">
          {tiles.map((tile) => {
            if (tile.kind === 'weather') return <WeatherTile key="weather" entity={tile.entity} />;
            if (tile.kind === 'media') {
              return <MediaTile key="media" entity={tile.entity} hass={hass} />;
            }
            if (tile.kind === 'people') return <PeopleTile key="people" people={tile.people} />;
            return <StatTile key="stat" tile={tile} hass={hass} />;
          })}
        </div>
      )}
    </div>
  );
}
