import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import SexyScreensaver from './SexyScreensaver';

export default function Screensaver() {
  const [time, setTime] = useState(new Date());
  const { getEntity } = useHass();
  const { config } = useConfig();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weather = config.weather?.entity_id
    ? getEntity(config.weather.entity_id)
    : null;

  const temp = weather?.attributes?.temperature;
  const condition = weather?.state;

  if (config.screensaver.style === 'sexy') {
    return <SexyScreensaver time={time} />;
  }

  return (
    <div className="tm-absolute-fill tm-z-50 tm-flex-col tm-flex-center tm-animate-fade" style={{ background: 'black' }}>
      <div
        className="tm-absolute-fill tm-opacity-50"
        style={{ background: 'var(--tm-screensaver-gradient)' }}
      />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <h1 className="tm-text-hero" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {format(time, 'HH:mm')}
        </h1>
        {config.screensaver.showDate && (
          <p className="tm-title-xl" style={{ marginTop: '1rem', opacity: 0.6 }}>
            {format(time, 'EEEE, d. MMMM', { locale: de })}
          </p>
        )}
        {config.screensaver.showWeather && temp != null && (
          <div className="tm-flex-center tm-gap-4 tm-opacity-50" style={{ marginTop: '2rem', fontSize: '1.25rem' }}>
            <span>{temp}°C</span>
            <span>•</span>
            <span>{condition}</span>
          </div>
        )}
      </div>
    </div>
  );
}
