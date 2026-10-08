import { useState, useEffect, useCallback, useMemo } from 'react';
import Screensaver from './components/Screensaver';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import StatusIsland from './components/StatusIsland';
import { useConfig } from './context/ConfigContext';
import { getThemeAttributes } from './lib/colorThemes';

const DEFAULT_PROFILE = { id: 0, name: 'Zuhause', color: '#6366f1' };

function App() {
  const { config } = useConfig();
  const themeAttrs = useMemo(
    () => getThemeAttributes(config.appearance),
    [config.appearance],
  );
  const showBackgroundImage = config.appearance?.mode !== 'light'
    && config.appearance?.mode !== 'blackColorful';
  const [view, setView] = useState('dashboard');
  const [activeProfile] = useState(DEFAULT_PROFILE);
  const [lastActivity, setLastActivity] = useState(Date.now());

  const resetTimer = useCallback(() => {
    setLastActivity(Date.now());
    if (view === 'screensaver') {
      setView('dashboard');
    }
  }, [view]);

  useEffect(() => {
    if (!config.screensaver.enabled) return undefined;

    const handleActivity = () => resetTimer();
    const idleTimeoutMs = config.screensaver.idleMinutes * 60 * 1000;

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('keydown', handleActivity);

    const interval = setInterval(() => {
      if (Date.now() - lastActivity > idleTimeoutMs && view !== 'screensaver' && view !== 'settings') {
        setView('screensaver');
      }
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearInterval(interval);
    };
  }, [lastActivity, view, resetTimer, config.screensaver.enabled, config.screensaver.idleMinutes]);

  return (
    <div className="tm-full-screen" {...themeAttrs}>
      {showBackgroundImage && (
        <div
          className="tm-absolute-fill tm-z-0 tm-bg-cover"
          style={{
            backgroundImage: `url("${config.backgroundImage}")`,
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
              onScreensaver={() => setView('screensaver')}
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
