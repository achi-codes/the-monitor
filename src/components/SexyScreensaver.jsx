import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { useConfig } from '../context/ConfigContext';
import { useHass } from '../context/HassContext';
import { resolveHassUrl } from '../lib/hass';
import { buildScreensaverTiles, screensaverStatReading } from '../lib/screensaverRow';
import { getConditionIcon, getConditionMeta } from '../lib/weather.jsx';

function formatTemp(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return num.toLocaleString('de-DE', { maximumFractionDigits: 1 });
}

function mediaProgress(attributes) {
  const position = attributes?.media_position;
  const duration = attributes?.media_duration;
  if (typeof position !== 'number' || typeof duration !== 'number' || duration <= 0) return null;
  return Math.min(100, Math.max(0, (position / duration) * 100));
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
  let kicker = 'Medien';
  if (entity.state === 'paused') kicker = 'Pause';
  else if (entity.state === 'playing') kicker = 'Gerade läuft';

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
  const { value, unit, detail } = screensaverStatReading(tile, hass);

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
  const tiles = buildScreensaverTiles({ config, room: activeRoom, hass, getEntity });
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
            const key = tile.key || tile.kind;
            if (tile.kind === 'weather') return <WeatherTile key={key} entity={tile.entity} />;
            if (tile.kind === 'media') {
              return <MediaTile key={key} entity={tile.entity} hass={hass} />;
            }
            if (tile.kind === 'people') return <PeopleTile key={key} people={tile.people} />;
            return <StatTile key={key} tile={tile} hass={hass} />;
          })}
        </div>
      )}
    </div>
  );
}
