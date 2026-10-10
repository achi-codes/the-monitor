import { useEffect, useState } from 'react';
import { weatherSupportsHourlyForecast, weatherSupportsDailyForecast } from './weather.jsx';

function readAttributeHourly(entity) {
  return entity?.attributes?.hourly_forecast
    || entity?.attributes?.forecast_hourly
    || entity?.attributes?.hourly
    || null;
}

function readAttributeDaily(entity) {
  const forecast = entity?.attributes?.forecast;
  return Array.isArray(forecast) && forecast.length ? forecast : null;
}

function useForecastSubscription(hass, entityId, entity, forecastType, readAttribute, isSupported) {
  const [forecast, setForecast] = useState(() => readAttribute(entity));

  useEffect(() => {
    setForecast(readAttribute(entity));
  }, [entity]);

  useEffect(() => {
    if (!entityId || !entity || !hass?.connection?.subscribeMessage) return undefined;
    if (!isSupported(entity)) return undefined;

    let active = true;
    let unsubscribe = () => {};

    hass.connection.subscribeMessage(
      (message) => {
        if (!active || !message?.forecast?.length) return;
        setForecast(message.forecast);
      },
      {
        type: 'weather/subscribe_forecast',
        forecast_type: forecastType,
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

export function useHourlyForecast(hass, entityId, entity) {
  return useForecastSubscription(hass, entityId, entity, 'hourly', readAttributeHourly, weatherSupportsHourlyForecast);
}

export function useDailyForecast(hass, entityId, entity) {
  return useForecastSubscription(hass, entityId, entity, 'daily', readAttributeDaily, weatherSupportsDailyForecast);
}
