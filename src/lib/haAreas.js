import { isMockHass } from './hass';

export const MOCK_AREAS = [
  { area_id: 'wohnzimmer', name: 'Wohnzimmer' },
  { area_id: 'kueche', name: 'Küche' },
  { area_id: 'schlafzimmer', name: 'Schlafzimmer' },
  { area_id: 'bad', name: 'Bad' },
  { area_id: 'buero', name: 'Büro' },
  { area_id: 'flur', name: 'Flur' },
];

export async function fetchHaAreas(hass) {
  if (isMockHass(hass)) return [...MOCK_AREAS];

  if (!hass?.connection?.sendMessagePromise) return [];

  try {
    const result = await hass.connection.sendMessagePromise({
      type: 'config/area_registry/list',
    });
    return (result || []).sort((a, b) => a.name.localeCompare(b.name, 'de'));
  } catch (err) {
    console.warn('The Monitor: Bereiche konnten nicht geladen werden', err);
    return [];
  }
}
