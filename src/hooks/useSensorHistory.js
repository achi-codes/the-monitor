import { useEffect, useState } from 'react';
import { fetchSensorHistory } from '../lib/sensorHistory';

const REFRESH_MS = 5 * 60 * 1000;

export function useSensorHistory(hass, entityId, { enabled = false, hours = 24, revision = 0 } = {}) {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!enabled || !entityId) {
      setPoints([]);
      return undefined;
    }

    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchSensorHistory(hass, entityId, { hours });
        if (!cancelled) setPoints(data);
      } catch {
        if (!cancelled) setPoints([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [hass, entityId, enabled, hours, revision]);

  return { points, loading };
}

export function useSensorHistories(hass, entityIds, { enabled = false, hours = 24, revision = 0 } = {}) {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const key = entityIds.join('|');

  useEffect(() => {
    if (!enabled || !entityIds.length) {
      setSeries([]);
      return undefined;
    }

    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          entityIds.map((entityId) => fetchSensorHistory(hass, entityId, { hours })),
        );
        if (!cancelled) {
          setSeries(entityIds.map((entityId, index) => ({
            entityId,
            points: results[index] || [],
          })));
        }
      } catch {
        if (!cancelled) setSeries([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [hass, key, enabled, hours, revision, entityIds]);

  return { series, loading };
}
