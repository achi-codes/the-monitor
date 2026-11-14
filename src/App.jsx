import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Screensaver from './components/Screensaver';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import StatusIsland from './components/StatusIsland';
import { useConfig } from './context/ConfigContext';
import { getThemeAttributes, isGlassMode } from './lib/colorThemes';
import { readUiSession, saveUiSession } from './lib/uiSession';

const DEFAULT_PROFILE = { id: 0, name: 'Zuhause', color: '#6366f1' };

function App() {
  const { config } = useConfig();
  const themeAttrs = useMemo(
    () => getThemeAttributes(config.appearance),
    [config.appearance],
  );
  const glass = isGlassMode(config.appearance);
  const backgroundImage = (config.backgroundImage || '').trim();
  const showBackgroundImage = Boolean(backgroundImage)
    && config.appearance?.mode !== 'light'
    && config.appearance?.mode !== 'blackColorful';
  const [view, setView] = useState(() => (readUiSession().view === 'settings' ? 'settings' : 'dashboard'));
  const [activeProfile] = useState(DEFAULT_PROFILE);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [idleStage, setIdleStage] = useState(false);
  const launchIdleRef = useRef(false);
  const stageScreensaver = config.screensaver.style === 'stage';

  useEffect(() => {
    saveUiSession({ view });
  }, [view]);

  useEffect(() => {
    if (!stageScreensaver) setIdleStage(false);
  }, [stageScreensaver]);

  const resetTimer = useCallback(() => {
    if (launchIdleRef.current) {
      launchIdleRef.current = false;
      return;
    }
    setLastActivity(Date.now());
    setIdleStage(false);
    if (view === 'screensaver') {
      setView('dashboard');
    }
  }, [view]);

  const showStageIdle = useCallback(() => {
    launchIdleRef.current = true;
    setIdleStage(true);
  }, []);

  useEffect(() => {
    if (!config.screensaver.enabled) return undefined;

    const handleActivity = () => resetTimer();
    const idleTimeoutMs = config.screensaver.idleMinutes * 60 * 1000;

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('keydown', handleActivity);

    const interval = setInterval(() => {
      if (Date.now() - lastActivity <= idleTimeoutMs || view === 'settings') return;
      if (stageScreensaver) {
        if (view !== 'screensaver') setIdleStage(true);
        return;
      }
      if (view !== 'screensaver') setView('screensaver');
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearInterval(interval);
    };
  }, [lastActivity, view, resetTimer, config.screensaver.enabled, config.screensaver.idleMinutes, stageScreensaver]);

  return (
    <div className="tm-full-screen" {...themeAttrs}>
      {glass && !backgroundImage && <div className="tm-glass-bg" aria-hidden="true" />}
      {showBackgroundImage && (
        <div
          className="tm-absolute-fill tm-z-0 tm-bg-cover"
          style={{
            backgroundImage: `url("${backgroundImage.replace(/"/g, '%22')}")`,
            opacity: 'var(--tm-bg-image-opacity)',
          }}
        />
      )}
      <div className="tm-absolute-fill tm-z-0 tm-overlay-gradient" />

      <div className="tm-absolute-fill tm-z-10">
        {view === 'dashboard' && <StatusIsland />}

        {view === 'screensaver' && <Screensaver />}

        {view === 'dashboard' && (
          <div className="tm-full-screen tm-animate-fade">
            <Dashboard
              user={activeProfile}
              onSettings={() => setView('settings')}
              onScreensaver={stageScreensaver ? showStageIdle : () => setView('screensaver')}
              idleStage={stageScreensaver && idleStage}
              onWake={resetTimer}
            />
          </div>
        )}

        {view === 'settings' && (
          <div className="tm-full-screen tm-animate-fade">
            <Settings onBack={() => setView('dashboard')} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
