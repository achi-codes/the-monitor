import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import {
  listCardTypes,
  listSelectableEntities,
  stubCardForEntity,
  stubCardForType,
} from '../lib/haCardCatalog';
import {
  collectCards,
  dashboardIsStrategyOnly,
  fetchDashboards,
  fetchLovelaceConfig,
  listDashboardViews,
  sanitizeCardConfig,
} from '../lib/haCards';

const TABS = [
  { id: 'entities', label: 'Entitäten' },
  { id: 'types', label: 'Kartenarten' },
  { id: 'dashboard', label: 'Dashboard' },
];

const LIST_CHUNK = 80;

const PANEL_STYLE = {
  colorScheme: 'only light',
  color: '#1d1d1f',
  WebkitTextFillColor: '#1d1d1f',
  background: '#f2f2f7',
};

const ITEM_STYLE = {
  flexShrink: 0,
  colorScheme: 'only light',
  color: '#111111',
  WebkitTextFillColor: '#111111',
  background: '#ffffff',
  border: 'none',
  width: '100%',
  textAlign: 'left',
  borderRadius: '0.75rem',
  padding: '0.7rem 0.85rem',
  fontSize: '0.875rem',
  lineHeight: 1.35,
  cursor: 'pointer',
  fontFamily: 'system-ui, -apple-system, sans-serif',
};

const TITLE_STYLE = {
  display: 'block',
  width: '100%',
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: 1.35,
  color: '#111111',
  WebkitTextFillColor: '#111111',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const META_STYLE = {
  display: 'block',
  width: '100%',
  marginTop: '0.15rem',
  fontWeight: 500,
  fontSize: '0.7rem',
  lineHeight: 1.3,
  color: '#5c5c62',
  WebkitTextFillColor: '#5c5c62',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

function dashboardTitle(dashboard) {
  return dashboard.title || dashboard.url_path || 'Übersicht';
}

function selectSafeCard(card) {
  return sanitizeCardConfig(card);
}

function PickerRow({ label, meta, onClick, style }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="tm-ha-picker-item tm-ha-picker-item-rich"
      style={{ ...ITEM_STYLE, ...style }}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <span className="tm-ha-picker-item-title" style={TITLE_STYLE}>{label}</span>
      {meta ? (
        <span className="tm-ha-picker-item-meta" style={META_STYLE}>{meta}</span>
      ) : null}
    </div>
  );
}

export default function HaCardPicker({ hass, onClose, onSelect }) {
  useOverlayLock(true);
  const [tab, setTab] = useState('entities');
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search);
  const [visibleCount, setVisibleCount] = useState(LIST_CHUNK);

  const [dashboards, setDashboards] = useState([]);
  const [activePath, setActivePath] = useState(undefined);
  const [dashboardConfig, setDashboardConfig] = useState(null);
  const [activeViewIndex, setActiveViewIndex] = useState(-1);
  const [cards, setCards] = useState([]);
  const [strategyOnly, setStrategyOnly] = useState(false);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingCards, setLoadingCards] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  useEffect(() => {
    setVisibleCount(LIST_CHUNK);
  }, [tab, deferredSearch, activePath, activeViewIndex]);

  useEffect(() => {
    if (tab !== 'dashboard') return undefined;
    let cancelled = false;
    (async () => {
      try {
        const list = await fetchDashboards(hass);
        if (cancelled) return;
        setDashboards(list);
        setActivePath((current) => (
          current === undefined
            ? (list[0] ? list[0].url_path ?? null : undefined)
            : current
        ));
      } catch (err) {
        if (!cancelled) setError(err?.message || 'Dashboards konnten nicht geladen werden');
      } finally {
        if (!cancelled) setLoadingList(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [hass, tab]);

  useEffect(() => {
    if (tab !== 'dashboard' || activePath === undefined) return undefined;
    let cancelled = false;
    setLoadingCards(true);
    setError('');
    (async () => {
      try {
        const config = await fetchLovelaceConfig(hass, activePath);
        if (cancelled) return;
        setDashboardConfig(config);
        setActiveViewIndex(-1);
      } catch (err) {
        if (!cancelled) {
          setDashboardConfig(null);
          setCards([]);
          setStrategyOnly(false);
          setError(err?.message || 'Dashboard konnte nicht geladen werden');
        }
      } finally {
        if (!cancelled) setLoadingCards(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [activePath, hass, tab]);

  const views = useMemo(
    () => listDashboardViews(dashboardConfig),
    [dashboardConfig],
  );

  useEffect(() => {
    if (tab !== 'dashboard' || !dashboardConfig) {
      if (tab !== 'dashboard') return;
      setCards([]);
      setStrategyOnly(false);
      return;
    }
    const dashboard = dashboards.find((item) => (item.url_path ?? null) === activePath);
    const title = dashboardTitle(dashboard || {});
    const viewIndex = activeViewIndex < 0 ? null : activeViewIndex;
    startTransition(() => {
      const nextCards = collectCards(dashboardConfig, title, viewIndex);
      setCards(nextCards);
      setStrategyOnly(dashboardIsStrategyOnly(dashboardConfig, nextCards));
    });
  }, [activePath, activeViewIndex, dashboardConfig, dashboards, tab]);

  const entityResult = useMemo(() => {
    if (tab !== 'entities') return { total: 0, items: [] };
    return listSelectableEntities(hass, { query: deferredSearch, limit: 400 });
  }, [deferredSearch, hass, tab]);

  const typeRows = useMemo(() => {
    if (tab !== 'types') return [];
    const query = deferredSearch.trim().toLowerCase();
    const rows = listCardTypes();
    if (!query) return rows;
    return rows.filter((card) => (
      card.name.toLowerCase().includes(query)
      || card.type.toLowerCase().includes(query)
      || (card.description || '').toLowerCase().includes(query)
      || (card.group || '').toLowerCase().includes(query)
    ));
  }, [deferredSearch, tab]);

  const filteredDashboardCards = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();
    if (!query) return cards;
    return cards.filter((card) => (
      card.label.toLowerCase().includes(query) || card.path.toLowerCase().includes(query)
    ));
  }, [cards, deferredSearch]);

  const dashboardGroups = useMemo(() => {
    const next = [];
    const byPath = new Map();
    filteredDashboardCards.slice(0, visibleCount).forEach((card) => {
      if (!byPath.has(card.path)) {
        const group = { path: card.path, cards: [] };
        byPath.set(card.path, group);
        next.push(group);
      }
      byPath.get(card.path).cards.push(card);
    });
    return next;
  }, [filteredDashboardCards, visibleCount]);

  const pick = (card) => {
    const clean = selectSafeCard(card);
    if (!clean) return;
    onSelect(clean);
  };

  const visibleEntities = entityResult.items.slice(0, visibleCount);
  const visibleTypes = typeRows.slice(0, visibleCount);
  const moreCount = tab === 'entities'
    ? Math.max(0, entityResult.items.length - visibleCount)
    : tab === 'types'
      ? Math.max(0, typeRows.length - visibleCount)
      : Math.max(0, filteredDashboardCards.length - visibleCount);

  return createPortal(
    <div className="tm-ha-picker-overlay" role="presentation">
      <style>{`
        .tm-ha-picker-panel,
        .tm-ha-picker-panel input,
        .tm-ha-picker-panel .tm-ha-picker-item,
        .tm-ha-picker-panel .tm-ha-picker-item-title,
        .tm-ha-picker-panel .tm-ha-picker-tab,
        .tm-ha-picker-panel .tm-ha-picker-dash,
        .tm-ha-picker-panel .tm-ha-picker-more,
        .tm-ha-picker-panel .tm-ha-picker-title,
        .tm-ha-picker-panel .tm-ha-picker-search {
          color-scheme: only light !important;
          color: #111111 !important;
          -webkit-text-fill-color: #111111 !important;
        }
        .tm-ha-picker-panel .tm-ha-picker-item-meta,
        .tm-ha-picker-panel .tm-ha-picker-subtitle,
        .tm-ha-picker-panel .tm-ha-picker-empty,
        .tm-ha-picker-panel .tm-ha-picker-group-title {
          color: #5c5c62 !important;
          -webkit-text-fill-color: #5c5c62 !important;
        }
        .tm-ha-picker-panel .tm-ha-picker-dash.active,
        .tm-ha-picker-panel .tm-ha-picker-views .tm-ha-picker-view.active {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
      `}</style>
      <button type="button" className="tm-ha-picker-backdrop" onClick={onClose} aria-label="Schließen" />
      <div
        className="tm-ha-picker-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Home-Assistant-Karte wählen"
        style={PANEL_STYLE}
      >
        <div className="tm-ha-picker-header">
          <div>
            <div className="tm-ha-picker-title" style={{ color: '#111111', WebkitTextFillColor: '#111111' }}>
              Karte wählen
            </div>
            <div className="tm-ha-picker-subtitle" style={{ color: '#5c5c62', WebkitTextFillColor: '#5c5c62' }}>
              Entität, Kartenart oder vorhandene Dashboard-Karte
            </div>
          </div>
          <button type="button" className="tm-ha-picker-close" onClick={onClose} aria-label="Schließen">
            <X size={16} color="#111111" />
          </button>
        </div>

        <div className="tm-ha-picker-tabs" role="tablist">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              className={`tm-ha-picker-tab${tab === item.id ? ' active' : ''}`}
              style={{ color: '#111111', WebkitTextFillColor: '#111111', colorScheme: 'only light' }}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <input
          className="tm-ha-picker-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          style={{ color: '#111111', WebkitTextFillColor: '#111111', colorScheme: 'only light' }}
          placeholder={
            tab === 'entities'
              ? 'Entität suchen…'
              : tab === 'types'
                ? 'Kartenart suchen…'
                : 'Dashboard-Karte suchen…'
          }
        />

        {tab === 'dashboard' ? (
          <>
            <div className="tm-ha-picker-dashboards">
              {dashboards.map((dashboard) => {
                const path = dashboard.url_path ?? null;
                const selected = path === activePath;
                return (
                  <button
                    key={dashboard.id || dashboard.url_path || 'default'}
                    type="button"
                    className={`tm-ha-picker-dash${selected ? ' active' : ''}`}
                    style={selected
                      ? { color: '#ffffff', WebkitTextFillColor: '#ffffff', colorScheme: 'only light' }
                      : { color: '#111111', WebkitTextFillColor: '#111111', colorScheme: 'only light' }}
                    onClick={() => setActivePath(path)}
                  >
                    {dashboardTitle(dashboard)}
                  </button>
                );
              })}
            </div>
            {views.length > 1 ? (
              <div className="tm-ha-picker-dashboards tm-ha-picker-views">
                <button
                  type="button"
                  className={`tm-ha-picker-dash tm-ha-picker-view${activeViewIndex < 0 ? ' active' : ''}`}
                  style={activeViewIndex < 0
                    ? { color: '#ffffff', WebkitTextFillColor: '#ffffff', colorScheme: 'only light' }
                    : { color: '#111111', WebkitTextFillColor: '#111111', colorScheme: 'only light' }}
                  onClick={() => setActiveViewIndex(-1)}
                >
                  Alle
                </button>
                {views.map((view) => (
                  <button
                    key={view.index}
                    type="button"
                    className={`tm-ha-picker-dash tm-ha-picker-view${view.index === activeViewIndex ? ' active' : ''}`}
                    style={view.index === activeViewIndex
                      ? { color: '#ffffff', WebkitTextFillColor: '#ffffff', colorScheme: 'only light' }
                      : { color: '#111111', WebkitTextFillColor: '#111111', colorScheme: 'only light' }}
                    onClick={() => setActiveViewIndex(view.index)}
                  >
                    {view.title}
                  </button>
                ))}
              </div>
            ) : null}
          </>
        ) : null}

        <div className="tm-ha-picker-list">
          {tab === 'entities' ? (
            <>
              {visibleEntities.length === 0 ? (
                <div className="tm-ha-picker-empty" style={{ color: '#5c5c62', WebkitTextFillColor: '#5c5c62' }}>
                  {deferredSearch.trim()
                    ? 'Keine Entitäten gefunden.'
                    : 'Keine Entitäten verfügbar.'}
                </div>
              ) : null}
              {visibleEntities.map((entity) => (
                <PickerRow
                  key={entity.id}
                  label={entity.label}
                  meta={entity.detail}
                  onClick={() => pick(stubCardForEntity(entity.entityId, hass))}
                />
              ))}
            </>
          ) : null}

          {tab === 'types' ? (
            <>
              {visibleTypes.length === 0 ? (
                <div className="tm-ha-picker-empty" style={{ color: '#5c5c62', WebkitTextFillColor: '#5c5c62' }}>
                  Keine Kartenarten gefunden.
                </div>
              ) : null}
              {visibleTypes.map((card) => (
                <PickerRow
                  key={card.id}
                  label={card.name}
                  meta={`${card.group} · ${card.type}`}
                  onClick={() => pick(stubCardForType(card.type))}
                />
              ))}
            </>
          ) : null}

          {tab === 'dashboard' ? (
            <>
              {loadingList || loadingCards ? (
                <div className="tm-ha-picker-empty" style={{ color: '#5c5c62', WebkitTextFillColor: '#5c5c62' }}>
                  Karten werden geladen…
                </div>
              ) : null}
              {!loadingList && !loadingCards && error ? (
                <div className="tm-ha-picker-empty" style={{ color: '#5c5c62', WebkitTextFillColor: '#5c5c62' }}>{error}</div>
              ) : null}
              {!loadingList && !loadingCards && !error && strategyOnly ? (
                <div className="tm-ha-picker-empty" style={{ color: '#5c5c62', WebkitTextFillColor: '#5c5c62' }}>
                  Dieses Dashboard erzeugt seine Karten automatisch und hat keine feste Kartenliste.
                </div>
              ) : null}
              {!loadingList && !loadingCards && !error && !strategyOnly && dashboardGroups.length === 0 ? (
                <div className="tm-ha-picker-empty" style={{ color: '#5c5c62', WebkitTextFillColor: '#5c5c62' }}>
                  Keine Karten in diesem Dashboard gefunden.
                </div>
              ) : null}
              {!loadingCards && !error && dashboardGroups.map((group) => (
                <div key={group.path} className="tm-ha-picker-group">
                  <div
                    className="tm-ha-picker-group-title"
                    style={{ color: '#5c5c62', WebkitTextFillColor: '#5c5c62' }}
                  >
                    {group.path}
                  </div>
                  {group.cards.map((card) => (
                    <PickerRow
                      key={card.id}
                      label={card.label}
                      onClick={() => pick(card.config)}
                      style={{ paddingLeft: `${0.75 + Math.min(card.depth, 4) * 0.7}rem` }}
                    />
                  ))}
                </div>
              ))}
            </>
          ) : null}

          {moreCount > 0 ? (
            <button
              type="button"
              className="tm-ha-picker-more"
              style={{ color: '#111111', WebkitTextFillColor: '#111111', colorScheme: 'only light' }}
              onClick={() => setVisibleCount((count) => count + LIST_CHUNK)}
            >
              {moreCount}
              {' '}
              weitere laden
            </button>
          ) : null}
        </div>
      </div>
    </div>,
    getOverlayRoot(),
  );
}
