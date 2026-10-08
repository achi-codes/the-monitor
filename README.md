# The Monitor

Ein wandbündiges Tablet-Dashboard für Home Assistant im Alexa-Show-Stil.

## Features

- Vollbild-Dashboard mit Glassmorphism-Design
- Profilwahl und Bildschirmschoner (60s Idle)
- Schnellaktionen, Szenen, Wetter, Medien, Kamera, Einkaufsliste, Anwesenheit
- **In-App-Konfiguration** mit durchsuchbarem Entity-Picker (Anzeigename statt Entity-ID)
- Konfiguration per localStorage + JSON Export/Import

## Installation

### HACS

1. HACS → drei Punkte → **Benutzerdefinierte Repositories**
2. `https://github.com/achi-codes/the-monitor` eintragen, Kategorie **Dashboard**
3. Im Store **The Monitor** öffnen und **Herunterladen**
4. Home Assistant neu laden (als Admin)

Danach steht **The Monitor** in der Seitenleiste. Die Karte legt das Dashboard beim ersten Laden an.

### Manuell

1. `npm run build` ausführen
2. `dist/the-monitor.js` nach `config/www/the-monitor.js` kopieren
3. In Home Assistant unter **Dashboard-Ressourcen** hinzufügen:
   - URL: `/local/the-monitor.js`
   - Typ: **JavaScript Module**

### Dashboard-Konfiguration

Panel-Ansicht für Vollbild:

```yaml
views:
  - title: Monitor
    type: panel
    cards:
      - type: custom:the-monitor-dashboard
```

## Entitäten konfigurieren

1. Dashboard öffnen
2. Zahnrad-Symbol (Einstellungen) antippen
3. Tab **Dashboard konfigurieren**
4. Pro Slot Entität über Suchfeld wählen (filtert nach `friendly_name` und Entity-ID)
5. Optional: eigenes Label und Icon setzen

Die Konfiguration wird automatisch im Browser gespeichert (`localStorage`). Über **Exportieren/Importieren** kann ein JSON-Backup erstellt werden.

## Home Assistant einrichten

1. `npm run build` → `dist/the-monitor.js` nach `config/www/` kopieren
2. **Einstellungen → Dashboards → Ressourcen** → `/local/the-monitor.js` (JavaScript Module)
3. Neues Panel-Dashboard:

```yaml
views:
  - title: Monitor
    type: panel
    cards:
      - type: custom:the-monitor-dashboard
```

4. Dashboard öffnen → **Einstellungen → Dashboard konfigurieren**
5. Entitäten per Suchfeld zuweisen — alle HA-Entitäten werden live geladen
6. Verbindungsstatus unter **Einstellungen → Bildschirm & Ton → Home Assistant** prüfen

### Was funktioniert

| Aktion | Service |
|--------|---------|
| Licht/Schalter | `toggle` |
| Szenen/Scripts | `turn_on` |
| Medienplayer | play/pause/next/prev |
| Einkaufsliste (todo) | laden, hinzufügen, abhaken |
| Kamera | Live-Snapshot alle 10s |
| Wetter | Live-State + Forecast |
| Anwesenheit (person) | Live-Status |

Die Konfiguration wird im Browser gespeichert (`localStorage`). Bei Cache-Löschung JSON-Backup nutzen.

## Entwicklung

```bash
npm install
npm run dev
```

Öffne `http://localhost:5173` — läuft mit Mock-Entitäten ohne Home Assistant.

```bash
npm run build
```

Erzeugt `dist/the-monitor.js` als Single-File-Bundle.

## Wand-Tablet Setup

1. Android-Tablet mit Fully Kiosk Browser oder HA Companion App
2. Kiosk-Modus aktivieren
3. Panel-Dashboard-URL als Startseite setzen
4. Bildschirm immer an / Ladegerät angeschlossen lassen

## Unterstützte Entitäts-Domains

| Widget | Domains |
|--------|---------|
| Schnellaktionen | light, switch, fan, input_boolean, climate, lock, cover, alarm_control_panel |
| Szenen | scene, script |
| Wetter | weather |
| Medien | media_player |
| Kamera | camera |
| Einkaufsliste | todo |
| Anwesenheit | person |
