import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';
import { useHass } from '../context/HassContext';
import { fetchHaAreas } from '../lib/haAreas';
import { ROOM_LIMIT } from '../lib/rooms';

export default function RoomConfig() {
  const {
    config,
    addRoom,
    removeRoom,
    renameRoom,
    addRoomFromHaArea,
    updateDisplay,
  } = useConfig();
  const { hass, isConnected, revision } = useHass();
  const [areas, setAreas] = useState([]);
  const [newRoomName, setNewRoomName] = useState('');
  const [loadingAreas, setLoadingAreas] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoadingAreas(true);
    fetchHaAreas(hass).then((result) => {
      if (!cancelled) setAreas(result);
    }).finally(() => {
      if (!cancelled) setLoadingAreas(false);
    });
    return () => {
      cancelled = true;
    };
  }, [hass, isConnected, revision]);

  const usedAreaIds = new Set(config.rooms.map((room) => room.areaId).filter(Boolean));
  const suggestedAreas = areas.filter((area) => !usedAreaIds.has(area.area_id));
  const canAddRoom = config.rooms.length < ROOM_LIMIT;

  const handleAddManualRoom = () => {
    const name = newRoomName.trim();
    if (!name || !canAddRoom) return;
    addRoom(name);
    setNewRoomName('');
  };

  return (
    <section>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
        Räume
      </h3>

      <div className="tm-setting-group">
        <p className="tm-text-sm tm-opacity-70" style={{ lineHeight: 1.5 }}>
          Jeder Raum hat ein eigenes Dashboard-Layout. Im Dashboard wechselst du zwischen den Räumen — per Dropdown oben oder als feste Sidebar links.
        </p>

        {config.rooms.length > 1 && (
          <label className="tm-setting-toggle">
            <input
              type="checkbox"
              checked={config.roomSidebar}
              onChange={(e) => updateDisplay({ roomSidebar: e.target.checked })}
            />
            <span>Räume als feste Sidebar anzeigen</span>
          </label>
        )}

        <div className="tm-room-config-list">
          {config.rooms.map((room) => (
            <div key={room.id} className="tm-room-config-row">
              <input
                className="tm-input tm-room-config-name"
                type="text"
                value={room.name}
                onChange={(e) => renameRoom(room.id, e.target.value)}
                aria-label={`Name für ${room.name}`}
              />
              {config.rooms.length > 1 && (
                <button
                  type="button"
                  className="tm-btn-secondary tm-room-config-remove"
                  onClick={() => removeRoom(room.id)}
                >
                  Entfernen
                </button>
              )}
            </div>
          ))}
        </div>

        {canAddRoom && (
          <div className="tm-room-config-add">
            <input
              className="tm-input"
              type="text"
              value={newRoomName}
              onChange={(e) => setNewRoomName(e.target.value)}
              placeholder="Neuer Raum …"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddManualRoom();
              }}
            />
            <button
              type="button"
              className="tm-btn-secondary tm-flex-center tm-gap-2"
              onClick={handleAddManualRoom}
              disabled={!newRoomName.trim()}
            >
              <Plus size={16} />
              Raum hinzufügen
            </button>
          </div>
        )}

        {!canAddRoom && (
          <p className="tm-text-sm tm-opacity-70">Maximal {ROOM_LIMIT} Räume.</p>
        )}
      </div>

      {isConnected && (
        <div className="tm-setting-group" style={{ marginTop: '1rem' }}>
          <div className="tm-text-sm tm-opacity-70" style={{ marginBottom: '0.75rem' }}>
            {loadingAreas
              ? 'Bereiche aus Home Assistant werden geladen …'
              : suggestedAreas.length
                ? 'Bereiche aus Home Assistant — antippen zum Hinzufügen:'
                : areas.length
                  ? 'Alle Home-Assistant-Bereiche sind bereits als Raum angelegt.'
                  : 'Keine Bereiche in Home Assistant gefunden.'}
          </div>

          {suggestedAreas.length > 0 && (
            <div className="tm-room-suggestions">
              {suggestedAreas.map((area) => (
                <button
                  key={area.area_id}
                  type="button"
                  className="tm-room-suggestion-chip"
                  disabled={!canAddRoom}
                  onClick={() => addRoomFromHaArea(area)}
                >
                  <Plus size={14} />
                  {area.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
