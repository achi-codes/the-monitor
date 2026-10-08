import { useEffect, useMemo, useRef, useState } from 'react';
import { Zap } from 'lucide-react';
import {
  ENERGY_SANKEY_DATA,
  formatEnergyValue,
  getSankeyTotalInput,
} from '../lib/energySampleData';
import { layoutSankey } from '../lib/sankeyLayout';

function useContainerSize(ref) {
  const [size, setSize] = useState({ width: 640, height: 360 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const update = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setSize({ width: rect.width, height: rect.height });
      }
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function getNodeLabelX(node, maxColumn) {
  if (node.column === 0) return node.x - 10;
  if (node.column === maxColumn) return node.x + node.width + 10;
  return node.x + node.width + 10;
}

function getNodeLabelAnchor(node, maxColumn) {
  if (node.column === 0) return 'end';
  if (node.column === maxColumn && maxColumn > 0) return 'start';
  return 'start';
}

export default function SankeyWidget({ widget }) {
  const containerRef = useRef(null);
  const { width, height } = useContainerSize(containerRef);
  const data = ENERGY_SANKEY_DATA;
  const title = widget?.label || data.title;

  const layout = useMemo(
    () => layoutSankey(data, width, height),
    [data, width, height],
  );

  const totalIn = useMemo(() => getSankeyTotalInput(data), [data]);

  const legendNodes = useMemo(
    () => data.nodes.filter((node) => node.column === 0),
    [data],
  );

  return (
    <div className="tm-card tm-sankey-widget">
      <div className="tm-sankey-content">
        <div className="tm-sankey-header">
          <div className="tm-sankey-header-main">
            <Zap size={22} style={{ opacity: 0.75, flexShrink: 0 }} aria-hidden />
            <div>
              <div className="tm-weather-location">{title}</div>
              <div className="tm-sankey-total-value">{formatEnergyValue(totalIn, data.unit)}</div>
              <div className="tm-weather-hilo">{data.subtitle}</div>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="tm-sankey-canvas">
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label={`${title}: Energiefluss-Diagramm`}
          >
            <defs>
              {layout.links.map((link, index) => (
                <linearGradient
                  key={`grad-${index}`}
                  id={`tm-sankey-grad-${index}`}
                  gradientUnits="userSpaceOnUse"
                  x1={layout.nodes[link.source].x}
                  x2={layout.nodes[link.target].x}
                >
                  <stop offset="0%" stopColor={link.color} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={layout.nodes[link.target].color || link.color} stopOpacity="0.45" />
                </linearGradient>
              ))}
            </defs>

            {layout.links.map((link, index) => (
              <path
                key={`link-${index}`}
                d={link.path}
                fill={`url(#tm-sankey-grad-${index})`}
                className="tm-sankey-link"
              />
            ))}

            {layout.nodes.map((node) => (
              <g key={node.id} className="tm-sankey-node">
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.width}
                  height={node.height}
                  fill={node.color}
                  rx={3}
                />
                <text
                  x={getNodeLabelX(node, layout.maxColumn)}
                  y={node.y + node.height / 2}
                  textAnchor={getNodeLabelAnchor(node, layout.maxColumn)}
                  dominantBaseline="middle"
                  className="tm-sankey-node-label"
                >
                  {node.name}
                </text>
                <text
                  x={getNodeLabelX(node, layout.maxColumn)}
                  y={node.y + node.height / 2 + 14}
                  textAnchor={getNodeLabelAnchor(node, layout.maxColumn)}
                  dominantBaseline="middle"
                  className="tm-sankey-node-value"
                >
                  {formatEnergyValue(node.value, data.unit)}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="tm-sankey-legend">
          {legendNodes.map((node) => (
            <span key={node.id} className="tm-sankey-legend-item">
              <span className="tm-sankey-legend-swatch" style={{ background: node.color }} />
              {node.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
