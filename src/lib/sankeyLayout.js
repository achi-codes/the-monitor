function indexById(nodes) {
  const map = new Map();
  nodes.forEach((node, index) => map.set(node.id, index));
  return map;
}

function computeNodeValues(nodes, links) {
  const incoming = new Array(nodes.length).fill(0);
  const outgoing = new Array(nodes.length).fill(0);

  links.forEach((link) => {
    outgoing[link.source] += link.value;
    incoming[link.target] += link.value;
  });

  return nodes.map((_, i) => Math.max(incoming[i], outgoing[i], 0.001));
}

function sortNodesInColumn(nodeIndices, nodes, links, nodeValues) {
  const order = [...nodeIndices];
  const hasExplicitSort = order.some((i) => nodes[i].sort != null);
  if (hasExplicitSort) {
    order.sort((a, b) => (nodes[a].sort ?? 0) - (nodes[b].sort ?? 0));
    return order;
  }

  order.sort((a, b) => {
    const aLinks = links.filter((l) => l.source === a || l.target === a);
    const bLinks = links.filter((l) => l.source === b || l.target === b);
    const aAvg = aLinks.reduce((sum, l) => sum + (l.source === a ? l.target : l.source), 0) / (aLinks.length || 1);
    const bAvg = bLinks.reduce((sum, l) => sum + (l.source === b ? l.target : l.source), 0) / (bLinks.length || 1);
    return aAvg - bAvg || nodeValues[b] - nodeValues[a];
  });
  return order;
}

function buildLinkPath(x0, y0, x1, y1) {
  const mid = (x0 + x1) / 2;
  return `M${x0},${y0}C${mid},${y0} ${mid},${y1} ${x1},${y1}`;
}

function buildRibbonPath(x0, y0Top, y0Bottom, x1, y1Top, y1Bottom) {
  const mid = (x0 + x1) / 2;
  return [
    `M${x0},${y0Top}`,
    `C${mid},${y0Top} ${mid},${y1Top} ${x1},${y1Top}`,
    `L${x1},${y1Bottom}`,
    `C${mid},${y1Bottom} ${mid},${y0Bottom} ${x0},${y0Bottom}`,
    'Z',
  ].join(' ');
}

export function layoutSankey(data, width, height, options = {}) {
  const {
    nodeWidth = 14,
    nodePadding = 18,
    margin = { top: 28, right: 110, bottom: 20, left: 110 },
  } = options;

  const nodes = data.nodes.map((node) => ({ ...node }));
  const idToIndex = indexById(nodes);
  const links = data.links.map((link) => ({
    ...link,
    source: idToIndex.get(link.source),
    target: idToIndex.get(link.target),
  }));

  const nodeValues = computeNodeValues(nodes, links);
  const columns = new Map();
  nodes.forEach((node, index) => {
    const col = node.column ?? 0;
    if (!columns.has(col)) columns.set(col, []);
    columns.get(col).push(index);
  });

  const columnKeys = [...columns.keys()].sort((a, b) => a - b);
  const innerWidth = Math.max(1, width - margin.left - margin.right);
  const innerHeight = Math.max(1, height - margin.top - margin.bottom);
  const columnCount = columnKeys.length;
  const columnStep = columnCount > 1 ? innerWidth / (columnCount - 1) : 0;

  const maxValue = Math.max(...nodeValues, 1);
  const valueToHeight = (value) => (value / maxValue) * (innerHeight * 0.72);

  columnKeys.forEach((colKey, colIndex) => {
    const indices = sortNodesInColumn(columns.get(colKey), nodes, links, nodeValues);
    const totalHeight = indices.reduce((sum, i) => sum + valueToHeight(nodeValues[i]), 0)
      + nodePadding * Math.max(0, indices.length - 1);
    let y = margin.top + (innerHeight - totalHeight) / 2;

    indices.forEach((nodeIndex) => {
      const h = valueToHeight(nodeValues[nodeIndex]);
      nodes[nodeIndex].x = margin.left + colIndex * columnStep;
      nodes[nodeIndex].y = y;
      nodes[nodeIndex].height = h;
      nodes[nodeIndex].width = nodeWidth;
      nodes[nodeIndex].value = nodeValues[nodeIndex];
      y += h + nodePadding;
    });
  });

  const sourceOffsets = new Array(nodes.length).fill(0);
  const targetOffsets = new Array(nodes.length).fill(0);

  const laidOutLinks = links.map((link) => {
    const source = nodes[link.source];
    const target = nodes[link.target];
    const linkHeight = valueToHeight(link.value);

    const y0 = source.y + sourceOffsets[link.source];
    const y1 = target.y + targetOffsets[link.target];
    sourceOffsets[link.source] += linkHeight;
    targetOffsets[link.target] += linkHeight;

    const x0 = source.x + source.width;
    const x1 = target.x;

    return {
      ...link,
      path: buildRibbonPath(x0, y0, y0 + linkHeight, x1, y1, y1 + linkHeight),
      centerPath: buildLinkPath(x0, y0 + linkHeight / 2, x1, y1 + linkHeight / 2),
      value: link.value,
      color: source.color || '#94a3b8',
    };
  });

  const maxColumn = columnKeys.length ? columnKeys[columnKeys.length - 1] : 0;

  return { nodes, links: laidOutLinks, maxValue, maxColumn };
}
