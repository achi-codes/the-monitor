export const SENSOR_SERIES_COLORS = [
  { stroke: 'rgb(var(--tm-accent-rgb))', fill: 'rgba(var(--tm-accent-rgb), 0.14)' },
  { stroke: '#fbbf24', fill: 'rgba(251, 191, 36, 0.14)' },
  { stroke: '#34d399', fill: 'rgba(52, 211, 153, 0.14)' },
  { stroke: '#f472b6', fill: 'rgba(244, 114, 182, 0.14)' },
];

export function valueAtTime(points, targetTime, domain) {
  if (!points?.length) return null;

  if (targetTime <= points[0].t) {
    return { v: points[0].v, t: targetTime };
  }
  if (targetTime >= points[points.length - 1].t) {
    return { v: points[points.length - 1].v, t: targetTime };
  }

  for (let i = 0; i < points.length - 1; i += 1) {
    const left = points[i];
    const right = points[i + 1];
    if (left.t <= targetTime && right.t >= targetTime) {
      if (domain === 'binary_sensor') {
        return { v: left.v, t: targetTime };
      }
      const span = right.t - left.t || 1;
      const frac = (targetTime - left.t) / span;
      return { v: left.v + (right.v - left.v) * frac, t: targetTime };
    }
  }

  return null;
}

function seriesScale(series, unified, globalMin, globalMax) {
  if (unified) {
    return { min: globalMin, max: globalMax };
  }
  const values = series.points.map((point) => point.v);
  return { min: Math.min(...values), max: Math.max(...values) };
}

export function buildMultiSeriesChart(seriesList, width, height, padding = 3) {
  const valid = seriesList.filter((series) => series.points?.length >= 2);
  if (!valid.length) return null;

  const allPoints = valid.flatMap((series) => series.points);
  const tMin = Math.min(...allPoints.map((point) => point.t));
  const tMax = Math.max(...allPoints.map((point) => point.t));
  const tSpan = tMax - tMin || 1;

  const units = [...new Set(valid.map((series) => series.unit || ''))];
  const unifiedScale = units.length === 1;

  const allValues = allPoints.map((point) => point.v);
  const globalMin = Math.min(...allValues);
  const globalMax = Math.max(...allValues);

  const innerW = width - padding * 2;
  const innerH = height - padding * 2;

  const layers = valid.map((series, index) => {
    const { min, max } = seriesScale(series, unifiedScale, globalMin, globalMax);
    const yRange = max - min || 1;

    const coords = series.points.map((point) => ({
      x: padding + ((point.t - tMin) / tSpan) * innerW,
      y: padding + innerH - ((point.v - min) / yRange) * innerH,
      v: point.v,
      t: point.t,
    }));

    const line = coords.map(({ x, y }) => `${x},${y}`).join(' ');
    const area = [
      `${coords[0].x},${height - padding}`,
      ...coords.map(({ x, y }) => `${x},${y}`),
      `${coords[coords.length - 1].x},${height - padding}`,
    ].join(' ');

    return {
      id: series.id,
      domain: series.domain,
      colorIndex: series.colorIndex ?? index,
      coords,
      line,
      area,
      min,
      max,
      yRange,
    };
  });

  return {
    layers,
    tMin,
    tMax,
    tSpan,
    width,
    height,
    padding,
    innerW,
    innerH,
    unifiedScale,
    rangeMin: unifiedScale ? globalMin : null,
    rangeMax: unifiedScale ? globalMax : null,
  };
}

export function sampleAtRatio(chart, seriesList, ratio) {
  if (!chart) return null;

  const clamped = Math.max(0, Math.min(1, ratio));
  const targetTime = chart.tMin + clamped * chart.tSpan;
  const scrubX = chart.padding + clamped * chart.innerW;

  const samples = chart.layers.map((layer) => {
    const series = seriesList.find((item) => item.id === layer.id);
    if (!series) return null;

    const sample = valueAtTime(series.points, targetTime, series.domain);
    if (!sample) return null;

    const y = chart.padding + chart.innerH - ((sample.v - layer.min) / layer.yRange) * chart.innerH;
    return {
      entityId: layer.id,
      colorIndex: layer.colorIndex,
      v: sample.v,
      t: sample.t,
      x: scrubX,
      y,
    };
  }).filter(Boolean);

  if (!samples.length) return null;

  return { active: true, time: targetTime, samples };
}
