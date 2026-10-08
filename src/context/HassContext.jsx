import { createContext, useContext, useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { getEntity } from '../lib/entities';
import { callService as haCallService } from '../lib/services';
import { isHomeAssistant } from '../lib/hass';
import { createMockHass } from '../lib/mockHass';
import {
  tryRestoreConnection,
  startOAuthLogin,
  connectWithToken,
  disconnect as disconnectHa,
  loadHassUrl,
} from '../lib/hassConnection';

const HassContext = createContext(null);

export function HassProvider({ children, initialHass = null, onRegisterUpdate, enableMock = false }) {
  const [hass, setHass] = useState(initialHass);
  const [revision, setRevision] = useState(0);
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState(null);
  const connectionRef = useRef(null);
  const hassRef = useRef(null);
  const isWebComponent = Boolean(onRegisterUpdate);

  const bumpRevision = useCallback(() => setRevision((r) => r + 1), []);

  const updateHass = useCallback((nextHass) => {
    setHass(nextHass);
    setIsEmbedded(isHomeAssistant(nextHass));
    setConnectionError(null);
    setRevision((r) => r + 1);
  }, []);

  const teardownConnection = useCallback(async () => {
    await disconnectHa(connectionRef.current, hassRef.current);
    connectionRef.current = null;
    hassRef.current = null;
  }, []);

  const applyConnection = useCallback((nextHass, connection) => {
    connectionRef.current = connection;
    hassRef.current = nextHass;
    setHass(nextHass);
    setIsEmbedded(false);
    setConnectionError(null);
    bumpRevision();
  }, [bumpRevision]);

  const connect = useCallback(async (url, token) => {
    setIsConnecting(true);
    setConnectionError(null);
    try {
      await teardownConnection();
      const { hass: nextHass, connection } = await connectWithToken(url, token, bumpRevision);
      applyConnection(nextHass, connection);
    } catch (err) {
      setConnectionError(err?.message || 'Verbindung fehlgeschlagen');
      throw err;
    } finally {
      setIsConnecting(false);
    }
  }, [applyConnection, bumpRevision, teardownConnection]);

  const login = useCallback((url) => {
    setConnectionError(null);
    startOAuthLogin(url);
  }, []);

  const disconnect = useCallback(async () => {
    setIsConnecting(true);
    try {
      await teardownConnection();
      setHass(enableMock ? createMockHass() : null);
      setIsEmbedded(false);
      setConnectionError(null);
      bumpRevision();
    } finally {
      setIsConnecting(false);
    }
  }, [bumpRevision, enableMock, teardownConnection]);

  useEffect(() => {
    if (initialHass) {
      setHass(initialHass);
      setRevision((r) => r + 1);
    }
  }, [initialHass]);

  useEffect(() => {
    onRegisterUpdate?.(updateHass);
    return () => onRegisterUpdate?.(null);
  }, [onRegisterUpdate, updateHass]);

  useEffect(() => {
    if (isWebComponent || initialHass) return undefined;

    let cancelled = false;

    (async () => {
      setIsConnecting(true);
      try {
        const result = await tryRestoreConnection(bumpRevision);
        if (!cancelled && result) {
          applyConnection(result.hass, result.connection);
        } else if (!cancelled && enableMock) {
          setHass(createMockHass());
          bumpRevision();
        }
      } catch (err) {
        if (!cancelled) {
          setConnectionError(err?.message || 'Verbindung fehlgeschlagen');
          if (enableMock) {
            setHass(createMockHass());
            bumpRevision();
          }
        }
      } finally {
        if (!cancelled) setIsConnecting(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [applyConnection, bumpRevision, enableMock, initialHass, isWebComponent]);

  const value = useMemo(() => {
    const connected = isHomeAssistant(hass);

    return {
      hass,
      revision,
      states: hass?.states || {},
      isConnected: connected,
      isMock: !connected && Boolean(hass),
      isEmbedded,
      isConnecting,
      connectionError,
      hassUrl: loadHassUrl(),
      getEntity: (entityId) => getEntity(hass, entityId),
      callService: (domain, service, data) => haCallService(hass, domain, service, data),
      connect,
      login,
      disconnect,
    };
  }, [hass, revision, isEmbedded, isConnecting, connectionError, connect, login, disconnect]);

  return <HassContext.Provider value={value}>{children}</HassContext.Provider>;
}

export function useHass() {
  const ctx = useContext(HassContext);
  if (!ctx) throw new Error('useHass must be used within HassProvider');
  return ctx;
}
