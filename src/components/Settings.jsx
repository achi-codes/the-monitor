import { ArrowLeft, Sun, Volume2, Download, Upload, Wifi, LogIn, Unplug, Loader2, Monitor, Palette } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import WidgetConfig from './WidgetConfig';
import { useConfig } from '../context/ConfigContext';
import { useHass } from '../context/HassContext';
import { loadHassUrl } from '../lib/hassConnection';
import { COLOR_MODES, COLOR_SETS } from '../lib/colorThemes';

export default function Settings({ onBack }) {
  const [brightness, setBrightness] = useState(80);
  const [volume, setVolume] = useState(60);
  const [tab, setTab] = useState('display');
  const { exportToJson, importFromJson, config, updateScreensaver, updateAppearance } = useConfig();
  const {
    isConnected,
    isMock,
    isEmbedded,
    isConnecting,
    connectionError,
    connect,
    login,
    disconnect,
    states,
  } = useHass();
  const fileRef = useRef(null);
  const entityCount = Object.keys(states).length;
  const [hassUrl, setHassUrl] = useState(loadHassUrl);
  const [accessToken, setAccessToken] = useState('');
  const [showTokenLogin, setShowTokenLogin] = useState(false);

  useEffect(() => {
    setHassUrl(loadHassUrl());
  }, [isConnected]);

  const handleLogin = () => {
    if (!hassUrl.trim()) return;
    login(hassUrl.trim());
  };

  const handleTokenConnect = async () => {
    if (!hassUrl.trim() || !accessToken.trim()) return;
    try {
      await connect(hassUrl.trim(), accessToken.trim());
      setAccessToken('');
    } catch {
      // error shown via connectionError
    }
  };

  const handleExport = () => {
    const blob = new Blob([exportToJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'the-monitor-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importFromJson(reader.result);
      if (!ok) alert('Import fehlgeschlagen – ungültige JSON-Datei.');
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="tm-settings-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', backdropFilter: 'blur(12px)', padding: '2rem' }}>
      <div className="tm-flex-row tm-items-center tm-gap-6" style={{ marginBottom: '1.5rem', flexShrink: 0 }}>
        <button type="button" onClick={onBack} className="tm-btn-round" aria-label="Zurück">
          <ArrowLeft size={32} />
        </button>
        <h2 className="tm-title-xl">Einstellungen</h2>
      </div>

      <div className="tm-flex-row tm-gap-3" style={{ marginBottom: '1.5rem', flexShrink: 0 }}>
        <button
          type="button"
          className="tm-btn-secondary"
          style={{ background: tab === 'display' ? 'rgba(var(--tm-accent-rgb), 0.4)' : undefined }}
          onClick={() => setTab('display')}
        >
          Bildschirm & Ton
        </button>
        <button
          type="button"
          className="tm-btn-secondary"
          style={{ background: tab === 'dashboard' ? 'rgba(var(--tm-accent-rgb), 0.4)' : undefined }}
          onClick={() => setTab('dashboard')}
        >
          Dashboard & Insel
        </button>
      </div>

      <div className="tm-settings-scroll">
        {tab === 'display' && (
          <div className="tm-settings-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Bildschirm & Ton
              </h3>
              <div className="tm-setting-group">
                <div className="tm-flex-col tm-gap-3">
                  <div className="tm-flex-row tm-justify-between">
                    <div className="tm-flex-center tm-gap-3"><Sun size={24} /><span>Helligkeit</span></div>
                    <span>{brightness}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={brightness} onChange={(e) => setBrightness(e.target.value)} className="tm-range" />
                </div>
                <div className="tm-flex-col tm-gap-3">
                  <div className="tm-flex-row tm-justify-between">
                    <div className="tm-flex-center tm-gap-3"><Volume2 size={24} /><span>Lautstärke</span></div>
                    <span>{volume}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(e.target.value)} className="tm-range" />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Farbset
              </h3>
              <div className="tm-setting-group">
                <div className="tm-flex-col tm-gap-3">
                  <div className="tm-flex-center tm-gap-3">
                    <Palette size={24} />
                    <span>Darstellung</span>
                  </div>
                  <div className="tm-color-mode-row">
                    {Object.values(COLOR_MODES).map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        className={`tm-color-mode-btn${config.appearance.mode === mode.id ? ' active' : ''}`}
                        onClick={() => updateAppearance({ mode: mode.id })}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="tm-flex-col tm-gap-3">
                  <span className="tm-text-sm tm-opacity-70">
                    {config.appearance.mode === 'colorful'
                      ? 'Wähle eine Farbe – alles wird in abstufenden Tönen dargestellt:'
                      : config.appearance.mode === 'blackColorful'
                        ? 'Pastell-Karten auf schwarzem Hintergrund – jede Kachel bekommt eine eigene Farbe.'
                        : 'Farbwahl gilt nur im Bunt-Modus.'}
                  </span>
                  <div className="tm-color-set-grid">
                    {COLOR_SETS.map((set) => (
                      <button
                        key={set.id}
                        type="button"
                        className={`tm-color-set-btn${config.appearance.colorSet === set.id ? ' active' : ''}`}
                        disabled={config.appearance.mode !== 'colorful'}
                        onClick={() => updateAppearance({ colorSet: set.id })}
                      >
                        <span className="tm-color-set-swatch" style={{ background: set.preview }} />
                        <span className="tm-color-set-label">{set.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Bildschirmschoner
              </h3>
              <div className="tm-setting-group">
                <label className="tm-setting-toggle">
                  <input
                    type="checkbox"
                    checked={config.screensaver.enabled}
                    onChange={(e) => updateScreensaver({ enabled: e.target.checked })}
                  />
                  <span>Automatisch nach Inaktivität</span>
                </label>

                {config.screensaver.enabled && (
                  <div className="tm-flex-col tm-gap-3">
                    <div className="tm-flex-row tm-justify-between">
                      <div className="tm-flex-center tm-gap-3">
                        <Monitor size={24} />
                        <span>Wartezeit</span>
                      </div>
                      <span>
                        {config.screensaver.idleMinutes}
                        {' '}
                        {config.screensaver.idleMinutes === 1 ? 'Minute' : 'Minuten'}
                      </span>
                    </div>
                    <input
                      type="range"
                      className="tm-range"
                      min="1"
                      max="30"
                      step="1"
                      value={config.screensaver.idleMinutes}
                      onChange={(e) => updateScreensaver({ idleMinutes: Number(e.target.value) })}
                    />
                  </div>
                )}

                <label className="tm-setting-toggle">
                  <input
                    type="checkbox"
                    checked={config.screensaver.showDate}
                    onChange={(e) => updateScreensaver({ showDate: e.target.checked })}
                  />
                  <span>Datum anzeigen</span>
                </label>

                <label className="tm-setting-toggle">
                  <input
                    type="checkbox"
                    checked={config.screensaver.showWeather}
                    onChange={(e) => updateScreensaver({ showWeather: e.target.checked })}
                  />
                  <span>Wetter anzeigen</span>
                </label>

                <p className="tm-text-sm tm-opacity-70">
                  Der Bildschirmschoner lässt sich jederzeit manuell über das Monitor-Symbol im Dashboard starten.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Home Assistant
              </h3>
              <div className="tm-setting-group">
                <div className="tm-flex-row tm-justify-between tm-items-center">
                  <div className="tm-flex-center tm-gap-3">
                    <Wifi size={24} />
                    <span>Verbindung</span>
                  </div>
                  <span style={{ color: isConnected ? '#4ade80' : isMock ? '#fbbf24' : '#f87171' }}>
                    {isConnected
                      ? isEmbedded
                        ? `Verbunden (${entityCount} Entitäten)`
                        : `Verbunden (${entityCount} Entitäten)`
                      : isMock
                        ? 'Demo-Modus'
                        : isConnecting
                          ? 'Verbinde…'
                          : 'Nicht verbunden'}
                  </span>
                </div>

                {isEmbedded ? (
                  <>
                    <p className="tm-text-sm tm-opacity-70">
                      Änderungen werden automatisch im Home-Assistant-Dashboard gespeichert
                      und gelten auf allen Geräten (iPad, Mac, Wanddisplay).
                    </p>
                    <p className="tm-text-sm tm-opacity-70">
                      Die Home-Assistant-Seitenleiste und die obere Leiste bleiben erreichbar.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="tm-text-sm tm-opacity-70">
                      {isConnected
                        ? 'Verbunden mit deiner Home-Assistant-Instanz. Entitäten kannst du unter „Dashboard konfigurieren“ zuweisen.'
                        : 'Als Panel in Home Assistant eingebunden bist du automatisch verbunden. Im Browser oder auf dem Tablet: URL eintragen und anmelden.'}
                    </p>

                    {!isConnected && (
                      <>
                        <label className="tm-flex-col tm-gap-2">
                          <span className="tm-text-sm tm-opacity-70">Home Assistant URL</span>
                          <input
                            type="url"
                            className="tm-input"
                            value={hassUrl}
                            onChange={(e) => setHassUrl(e.target.value)}
                            placeholder="http://homeassistant.local:8123"
                          />
                        </label>

                        <button
                          type="button"
                          className="tm-btn-primary tm-flex-center tm-gap-2"
                          onClick={handleLogin}
                          disabled={isConnecting || !hassUrl.trim()}
                        >
                          {isConnecting ? <Loader2 size={18} className="tm-spin" /> : <LogIn size={18} />}
                          Bei Home Assistant anmelden
                        </button>

                        <button
                          type="button"
                          className="tm-btn-secondary"
                          onClick={() => setShowTokenLogin((v) => !v)}
                        >
                          {showTokenLogin ? 'Token-Login ausblenden' : 'Alternativ: Mit Zugriffstoken verbinden'}
                        </button>

                        {showTokenLogin && (
                          <div className="tm-flex-col tm-gap-3">
                            <p className="tm-text-sm tm-opacity-70">
                              Erstelle unter Home Assistant → Profil → Sicherheit → Langzeit-Zugriffstoken einen Token und füge ihn hier ein.
                            </p>
                            <label className="tm-flex-col tm-gap-2">
                              <span className="tm-text-sm tm-opacity-70">Zugriffstoken</span>
                              <input
                                type="password"
                                className="tm-input"
                                value={accessToken}
                                onChange={(e) => setAccessToken(e.target.value)}
                                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9…"
                                autoComplete="off"
                              />
                            </label>
                            <button
                              type="button"
                              className="tm-btn-secondary tm-flex-center tm-gap-2"
                              onClick={handleTokenConnect}
                              disabled={isConnecting || !hassUrl.trim() || !accessToken.trim()}
                            >
                              Mit Token verbinden
                            </button>
                          </div>
                        )}
                      </>
                    )}

                    {isConnected && !isEmbedded && (
                      <button
                        type="button"
                        className="tm-btn-secondary tm-flex-center tm-gap-2"
                        onClick={disconnect}
                        disabled={isConnecting}
                      >
                        <Unplug size={18} /> Verbindung trennen
                      </button>
                    )}

                    {connectionError && (
                      <p className="tm-text-sm" style={{ color: '#f87171' }}>
                        {connectionError}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Konfiguration sichern
              </h3>
              <div className="tm-setting-group">
                <p className="tm-text-sm tm-opacity-70">
                  Exportiere die Dashboard-Konfiguration als JSON-Backup oder importiere eine gespeicherte Konfiguration.
                </p>
                <div className="tm-flex-row tm-gap-3">
                  <button type="button" className="tm-btn-secondary tm-flex-center tm-gap-2" onClick={handleExport}>
                    <Download size={18} /> Exportieren
                  </button>
                  <button type="button" className="tm-btn-secondary tm-flex-center tm-gap-2" onClick={() => fileRef.current?.click()}>
                    <Upload size={18} /> Importieren
                  </button>
                  <input ref={fileRef} type="file" accept=".json" style={{ display: 'none' }} onChange={handleImport} />
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'dashboard' && <WidgetConfig />}
      </div>

      <div style={{ marginTop: 'auto', textAlign: 'center', opacity: 0.2, fontSize: '0.875rem', flexShrink: 0, paddingTop: '1rem' }}>
        The Monitor v0.1.0
      </div>
    </div>
  );
}
