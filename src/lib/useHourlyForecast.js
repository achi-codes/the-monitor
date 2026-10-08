import { useEffect, useState } from 'react';
import { weatherSupportsHourlyForecast } from './weather.jsx';

function readAttributeHourly(entity) {
  return entity?.attributes?.hourly_forecast
    || entity?.attributes?.forecast_hourly
    || entity?.attributes?.hourly
    || null;
}

export function useHourlyForecast(hass, entityId, entity) {
  const [forecast, setForecast] = useState(() => readAttributeHourly(entity));

  useEffect(() => {
    setForecast(readAttributeHourly(entity));
  }, [entity]);

  useEffect(() => {
    if (!entityId || !entity || !hass?.connection?.subscribeMessage) return undefined;
    if (!weatherSupportsHourlyForecast(entity)) return undefined;

    let active = true;
    let unsubscribe = () => {};

    hass.connection.subscribeMessage(
      (message) => {
        if (!active || !message?.forecast?.length) return;
        setForecast(message.forecast);
      },
      {
        type: 'weather/subscribe_forecast',
        forecast_type: 'hourly',
        entity_id: entityId,
      },
    ).then((unsub) => {
      if (!active) {
        unsub();
        return;
      }
      unsubscribe = unsub;
    }).catch(() => {});

    return () => {
      active = false;
      unsubscribe();
    };
  }, [hass, entityId, entity?.id, entity?.attributes?.supported_features]);

  return forecast;
}
