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

function dashboardTitle(dashboard) {
  return dashboard.title || dashboard.url_path || 'Übersicht';
}

function selectSafeCard(card) {
  return sanitizeCardConfig(card);
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
    return listCardTypes().filter((card) => {
      if (!query) return true;
      return (
        card.name.toLowerCase().includes(query)
        || card.type.toLowerCase().includes(query)
        || (card.description || '').toLowerCase().includes(query)
      );
    });
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
      <button type="button" className="tm-ha-picker-backdrop" onClick={onClose} aria-label="Schließen" />
      <div className="tm-ha-picker-panel" role="dialog" aria-modal="true" aria-label="Home-Assistant-Karte wählen">
        <div className="tm-ha-picker-header">
          <div>
            <div className="tm-ha-picker-title">Karte wählen</div>
            <div className="tm-ha-picker-subtitle">Entität, Kartenart oder vorhandene Dashboard-Karte</div>
          </div>
          <button type="button" className="tm-ha-picker-close" onClick={onClose} aria-label="Schließen">
            <X size={16} />
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
                  onClick={() => setActiveViewIndex(-1)}
                >
                  Alle
                </button>
                {views.map((view) => (
                  <button
                    key={view.index}
                    type="button"
                    className={`tm-ha-picker-dash tm-ha-picker-view${view.index === activeViewIndex ? ' active' : ''}`}
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
                <div className="tm-ha-picker-empty">
                  {deferredSearch.trim()
                    ? 'Keine Entitäten gefunden.'
                    : 'Keine Entitäten verfügbar.'}
                </div>
              ) : null}
              {visibleEntities.map((entity) => (
                <button
                  key={entity.id}
                  type="button"
                  className="tm-ha-picker-item tm-ha-picker-item-rich"
                  onClick={() => pick(stubCardForEntity(entity.entityId, hass))}
                >
                  <span className="tm-ha-picker-item-title">{entity.label}</span>
                  <span className="tm-ha-picker-item-meta">{entity.detail}</span>
                </button>
              ))}
            </>
          ) : null}

          {tab === 'types' ? (
            <>
              {visibleTypes.length === 0 ? (
                <div className="tm-ha-picker-empty">Keine Kartenarten gefunden.</div>
              ) : null}
              {visibleTypes.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  className="tm-ha-picker-item tm-ha-picker-item-rich"
                  onClick={() => pick(stubCardForType(card.type))}
                >
                  <span className="tm-ha-picker-item-title">{card.name}</span>
                  <span className="tm-ha-picker-item-meta">
                    {card.group}
                    {' · '}
                    {card.type}
                  </span>
                </button>
              ))}
            </>
          ) : null}

          {tab === 'dashboard' ? (
            <>
              {loadingList || loadingCards ? (
                <div className="tm-ha-picker-empty">Karten werden geladen…</div>
              ) : null}
              {!loadingList && !loadingCards && error ? (
                <div className="tm-ha-picker-empty">{error}</div>
              ) : null}
              {!loadingList && !loadingCards && !error && strategyOnly ? (
                <div className="tm-ha-picker-empty">
                  Dieses Dashboard erzeugt seine Karten automatisch und hat keine feste Kartenliste.
                </div>
              ) : null}
              {!loadingList && !loadingCards && !error && !strategyOnly && dashboardGroups.length === 0 ? (
                <div className="tm-ha-picker-empty">Keine Karten in diesem Dashboard gefunden.</div>
              ) : null}
              {!loadingCards && !error && dashboardGroups.map((group) => (
                <div key={group.path} className="tm-ha-picker-group">
                  <div className="tm-ha-picker-group-title">{group.path}</div>
                  {group.cards.map((card) => (
                    <button
                      key={card.id}
                      type="button"
                      className="tm-ha-picker-item"
                      style={{ paddingLeft: `${0.75 + Math.min(card.depth, 4) * 0.7}rem` }}
                      onClick={() => pick(card.config)}
                    >
                      <span>{card.label}</span>
                    </button>
                  ))}
                </div>
              ))}
            </>
          ) : null}

          {moreCount > 0 ? (
            <button
              type="button"
              className="tm-ha-picker-more"
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
