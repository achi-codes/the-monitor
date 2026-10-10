import { useEffect, useMemo, useRef, useState } from 'react';
import { addDays, startOfDay } from 'date-fns';
import { fetchChartRows, getChartWindow, summarizeChart } from '../lib/sensorStatistics';

const REFRESH_MS = 5 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

function buildDayWindow(now) {
  const today = startOfDay(now);
  const yesterday = addDays(today, -1);
  return {
    start: yesterday,
    prevStart: yesterday,
    prevEnd: yesterday,
    slots: [
      { start: yesterday.getTime(), end: today.getTime(), future: false, current: false },
      { start: today.getTime(), end: today.getTime() + DAY_MS, future: false, current: true },
    ],
  };
}

export function useSensorChart(hass, entityId, { range, aggregate, withDays, currentValue }) {
  const hassRef = useRef(hass);
  hassRef.current = hass;
  const [tick, setTick] = useState(0);
  const [data, setData] = useState({ key: '', rows: [], dayRows: [], fetchedAt: 0, loading: true });
  const key = `${entityId}|${range}|${aggregate}|${withDays ? 1 : 0}`;

  useEffect(() => {
    const timer = window.setInterval(() => setTick((value) => value + 1), REFRESH_MS);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!entityId) return undefined;
    let active = true;
    const now = new Date();
    const windowInfo = getChartWindow(range, now);
    setData((prev) => (prev.key === key ? prev : { ...prev, key, loading: true }));
    Promise.all([
      fetchChartRows(hassRef.current, entityId, windowInfo.prevStart, now, windowInfo.period),
      withDays
        ? fetchChartRows(hassRef.current, entityId, addDays(startOfDay(now), -1), now, 'day')
        : Promise.resolve({ rows: [] }),
    ])
      .then(([main, days]) => {
        if (active) setData({ key, rows: main.rows, dayRows: days.rows, fetchedAt: now.getTime(), loading: false });
      })
      .catch(() => {
        if (active) setData({ key, rows: [], dayRows: [], fetchedAt: now.getTime(), loading: false });
      });
    return () => { active = false; };
  }, [entityId, key, range, withDays, tick]);

  return useMemo(() => {
    const now = new Date(data.fetchedAt || Date.now());
    const windowInfo = getChartWindow(range, now);
    const summary = summarizeChart(data.key === key ? data.rows : [], windowInfo, aggregate, currentValue);
    let today = null;
    let yesterday = null;
    if (withDays && data.key === key) {
      const days = summarizeChart(data.dayRows, buildDayWindow(now), 'sum', currentValue);
      [yesterday, today] = days.values;
    }
    return {
      windowInfo,
      ...summary,
      today,
      yesterday,
      loading: data.loading || data.key !== key,
    };
  }, [aggregate, currentValue, data, key, range, withDays]);
}
