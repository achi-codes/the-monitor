import { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Plus, Check, Settings } from 'lucide-react';
import { useHass } from '../context/HassContext';
import { useConfig } from '../context/ConfigContext';
import { fetchTodoItems, completeTodoItem, addTodoItem } from '../lib/services';
import { MOCK_TODO_ITEMS } from '../lib/mockHass';

export default function ShoppingList({ entityId: entityIdProp, onConfigure }) {
  const { hass, isConnected, isMock, revision } = useHass();
  const { config } = useConfig();
  const entityId = entityIdProp || config.shoppingList?.entity_id;
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadItems = useCallback(async () => {
    if (!entityId) {
      setItems([]);
      return;
    }

    if (isMock) {
      setItems(MOCK_TODO_ITEMS);
      return;
    }

    if (!isConnected) return;

    setLoading(true);
    try {
      const result = await fetchTodoItems(hass, entityId);
      setItems(result);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [hass, entityId, isConnected, isMock]);

  useEffect(() => {
    loadItems();
  }, [loadItems, revision]);

  if (!entityId) {
    return (
      <button type="button" className="tm-card tm-card-dark empty" style={{ height: '100%', padding: '1.25rem' }} onClick={onConfigure}>
        <div className="tm-placeholder-widget">
          <Settings size={32} />
          <span className="tm-text-sm">Einkaufsliste konfigurieren</span>
        </div>
      </button>
    );
  }

  const handleToggle = async (item) => {
    if (item.status === 'completed') return;
    if (isConnected) {
      await completeTodoItem(hass, entityId, item.uid);
      await loadItems();
    } else {
      setItems((prev) => prev.map((i) => (i.uid === item.uid ? { ...i, status: 'completed' } : i)));
    }
  };

  const handleAdd = async () => {
    if (!newItem.trim()) return;
    if (isConnected) {
      await addTodoItem(hass, entityId, newItem.trim());
      await loadItems();
    } else {
      setItems((prev) => [...prev, { uid: String(Date.now()), summary: newItem.trim(), status: 'needs_action' }]);
    }
    setNewItem('');
    setShowAdd(false);
  };

  const openItems = items.filter((i) => i.status !== 'completed');

  return (
    <div className="tm-card tm-card-dark" style={{ height: '100%', padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
      <div className="tm-flex-row tm-justify-between tm-items-center" style={{ marginBottom: '1rem' }}>
        <div className="tm-flex-center tm-gap-2">
          <ShoppingCart size={20} style={{ color: '#fb923c' }} />
          <span className="tm-font-bold" style={{ fontSize: '1.125rem' }}>Einkauf</span>
        </div>
        <button
          type="button"
          className="tm-flex-center"
          style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '9999px', border: 'none', color: 'white', cursor: 'pointer', minWidth: 40, minHeight: 40 }}
          onClick={() => setShowAdd(!showAdd)}
        >
          <Plus size={16} />
        </button>
      </div>

      {showAdd && (
        <div className="tm-flex-row tm-gap-2" style={{ marginBottom: '0.75rem' }}>
          <input
            className="tm-input"
            type="text"
            placeholder="Neuer Eintrag…"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button type="button" className="tm-btn-primary" style={{ padding: '0.5rem 1rem', minHeight: 'auto' }} onClick={handleAdd}>
            OK
          </button>
        </div>
      )}

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {loading && (
          <div className="tm-text-sm tm-opacity-50" style={{ textAlign: 'center', padding: '1rem' }}>
            Lädt…
          </div>
        )}
        {!loading && openItems.length === 0 && (
          <div className="tm-text-sm tm-opacity-50" style={{ textAlign: 'center', padding: '1rem' }}>
            Liste ist leer
          </div>
        )}
        {items.map((item) => (
          <button
            key={item.uid}
            type="button"
            onClick={() => handleToggle(item)}
            className="tm-flex-row tm-items-center tm-gap-3"
            style={{
              width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', textAlign: 'left',
              background: 'rgba(255,255,255,0.05)',
            }}
          >
            <div style={{
              width: '1.25rem', height: '1.25rem', borderRadius: '9999px', border: '2px solid',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderColor: item.status === 'completed' ? '#f97316' : 'rgba(255,255,255,0.3)',
              background: item.status === 'completed' ? '#f97316' : 'transparent',
            }}>
              {item.status === 'completed' && <Check size={12} style={{ color: 'black' }} />}
            </div>
            <span
              className="tm-font-bold tm-text-sm"
              style={{
                color: item.status === 'completed' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)',
                textDecoration: item.status === 'completed' ? 'line-through' : 'none',
              }}
            >
              {item.summary}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
