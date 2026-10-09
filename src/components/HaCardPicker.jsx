import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import {
  collectCards,
  dashboardIsStrategyOnly,
  fetchDashboards,
  fetchLovelaceConfig,
  listDashboardViews,
} from '../lib/haCards';

function dashboardTitle(dashboard) {
  return dashboard.title || dashboard.url_path || 'Übersicht';
}

export default function HaCardPicker({ hass, onClose, onSelect }) {
  useOverlayLock(true);
  const [dashboards, setDashboards] = useState([]);
  const [activePath, setActivePath] = useState(undefined);
  const [dashboardConfig, setDashboardConfig] = useState(null);
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [strategyOnly, setStrategyOnly] = useState(false);
  const [search, setSearch] = useState('');
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
    let cancelled = false;
    (async () => {
      try {
        const list = await fetchDashboards(hass);
        if (cancelled) return;
        setDashboards(list);
        setActivePath(list[0] ? list[0].url_path ?? null : undefined);
      } catch (err) {
        if (!cancelled) setError(err?.message || 'Dashboards konnten nicht geladen werden');
      } finally {
        if (!cancelled) setLoadingList(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [hass]);

  useEffect(() => {
    if (activePath === undefined) return undefined;
    let cancelled = false;
    setLoadingCards(true);
    setError('');
    setActiveViewIndex(0);
    (async () => {
      try {
        const config = await fetchLovelaceConfig(hass, activePath);
        if (cancelled) return;
        setDashboardConfig(config);
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
  }, [activePath, hass]);

  const views = useMemo(
    () => listDashboardViews(dashboardConfig),
    [dashboardConfig],
  );

  useEffect(() => {
    if (!dashboardConfig) {
      setCards([]);
      setStrategyOnly(false);
      return;
    }
    const dashboard = dashboards.find((item) => (item.url_path ?? null) === activePath);
    const title = dashboardTitle(dashboard || {});
    const viewIndex = views.length > 1 ? activeViewIndex : null;
    const nextCards = collectCards(dashboardConfig, title, viewIndex);
    setCards(nextCards);
    setStrategyOnly(dashboardIsStrategyOnly(dashboardConfig, nextCards));
  }, [activePath, activeViewIndex, dashboardConfig, dashboards, views.length]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return cards;
    return cards.filter((card) => (
      card.label.toLowerCase().includes(query) || card.path.toLowerCase().includes(query)
    ));
  }, [cards, search]);

  const groups = useMemo(() => {
    const next = [];
    const byPath = new Map();
    filtered.forEach((card) => {
      if (!byPath.has(card.path)) {
        const group = { path: card.path, cards: [] };
        byPath.set(card.path, group);
        next.push(group);
      }
      byPath.get(card.path).cards.push(card);
    });
    return next;
  }, [filtered]);

  return createPortal(
    <div className="tm-ha-picker-overlay" role="presentation">
      <button type="button" className="tm-ha-picker-backdrop" onClick={onClose} aria-label="Schließen" />
      <div className="tm-ha-picker-panel" role="dialog" aria-modal="true" aria-label="Home-Assistant-Karte wählen">
        <div className="tm-ha-picker-header">
          <div>
            <div className="tm-ha-picker-title">Home-Assistant-Karte</div>
            <div className="tm-ha-picker-subtitle">Karte aus einem Dashboard übernehmen</div>
          </div>
          <button type="button" className="tm-ha-picker-close" onClick={onClose} aria-label="Schließen">
            <X size={16} />
          </button>
        </div>

        <input
          className="tm-ha-picker-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Suchen…"
        />

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

        <div className="tm-ha-picker-list">
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
          {!loadingList && !loadingCards && !error && !strategyOnly && groups.length === 0 ? (
            <div className="tm-ha-picker-empty">Keine Karten gefunden.</div>
          ) : null}
          {!loadingCards && !error && groups.map((group) => (
            <div key={group.path} className="tm-ha-picker-group">
              <div className="tm-ha-picker-group-title">{group.path}</div>
              {group.cards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  className="tm-ha-picker-item"
                  style={{ paddingLeft: `${0.75 + card.depth * 0.85}rem` }}
                  onClick={() => onSelect(card.config)}
                >
                  <span>{card.label}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>,
    getOverlayRoot(),
  );
}
