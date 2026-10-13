import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { styles, haShellStyles, haCardHostStyles } from './styles'
import { registerOverlayRoot, unregisterOverlayRoot } from './lib/overlayPortal'
import { HassProvider } from './context/HassContext.jsx'
import { ConfigProvider } from './context/ConfigContext.jsx'
import { ensureWasteWidget, loadDevConfig } from './lib/config.js'
import embeddedHaConfig from '../deploy/the-monitor-config.json'
import { schedulePersistCardConfig } from './lib/haLovelace.js'
import { restoreHaMenuChrome } from './lib/haKiosk.js'
import { ensureHaDashboard } from './lib/ensureHaDashboard.js'
import { resolveInitialSetupState } from './lib/setups.js'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const ELEMENT_NAME = 'the-monitor-dashboard'

function injectDocumentStyles(id, css) {
  let style = document.getElementById(id)
  if (!style) {
    style = document.createElement('style')
    style.id = id
    document.head.appendChild(style)
  }
  style.textContent = css
}

function buildEmbeddedSetupState(yamlConfig) {
  try {
    const resolved = resolveInitialSetupState(
      { ...embeddedHaConfig, ...yamlConfig },
      { embedded: true },
    )
    return {
      ...resolved,
      config: ensureWasteWidget(resolved.config),
    }
  } catch (error) {
    console.error('The Monitor: invalid config, using defaults', error)
    const resolved = resolveInitialSetupState(
      { ...embeddedHaConfig },
      { embedded: true },
    )
    return {
      ...resolved,
      config: ensureWasteWidget(resolved.config),
    }
  }
}

function AppRoot({
  initialConfig,
  initialSetupStore,
  initialActiveSetupId,
  onRegisterHassUpdate,
  onConfigSaved,
  enableMock = false,
}) {
  return (
    <HassProvider onRegisterUpdate={onRegisterHassUpdate} enableMock={enableMock}>
      <ConfigProvider
        initialConfig={initialConfig}
        initialSetupStore={initialSetupStore}
        initialActiveSetupId={initialActiveSetupId}
        onConfigSaved={onConfigSaved}
      >
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ConfigProvider>
    </HassProvider>
  )
}

class TheMonitorDashboard extends HTMLElement {
  static getStubConfig() {
    return {}
  }

  static getGridOptions() {
    return { columns: 48, rows: 1 }
  }

  getCardSize() {
    return 12
  }

  constructor() {
    super()
    this._hass = null
    this._config = {}
    this._root = null
    this._updateHass = null
    this._shadow = null
    this._mountPoint = null
    this._pendingSetupPublish = null
  }

  setConfig(config) {
    this._config = config || {}
    if (this._root) {
      this._renderApp()
    }
  }

  _publishSetupsIfNeeded(setupStore) {
    const hasSetups = Array.isArray(this._config?.setups) && this._config.setups.length > 0
    if (hasSetups) {
      this._pendingSetupPublish = null
      return
    }
    this._pendingSetupPublish = setupStore
    if (this._hass) {
      schedulePersistCardConfig(this._hass, setupStore)
      this._pendingSetupPublish = null
    }
  }

  _renderApp() {
    if (!this._root) return

    const { config, setupStore, activeSetupId } = buildEmbeddedSetupState(this._config)
    this._publishSetupsIfNeeded(setupStore)

    try {
      this._root.render(
        <React.StrictMode>
          <AppRoot
            initialConfig={config}
            initialSetupStore={setupStore}
            initialActiveSetupId={activeSetupId}
            onRegisterHassUpdate={(fn) => {
              this._updateHass = fn
              if (this._hass) fn(this._hass)
            }}
            onConfigSaved={(nextSetupStore) => {
              if (this._hass) schedulePersistCardConfig(this._hass, nextSetupStore)
            }}
          />
        </React.StrictMode>
      )
    } catch (error) {
      console.error('The Monitor: render failed', error)
    }
  }

  set hass(hass) {
    this._hass = hass
    this._updateHass?.(hass)
    if (this._pendingSetupPublish && hass) {
      schedulePersistCardConfig(hass, this._pendingSetupPublish)
      this._pendingSetupPublish = null
    }
  }

  connectedCallback() {
    restoreHaMenuChrome()
    injectDocumentStyles('the-monitor-ha-shell', haShellStyles)
    injectDocumentStyles('the-monitor-card-host', haCardHostStyles)

    if (!this._shadow) {
      this._shadow = this.attachShadow({ mode: 'open' })

      const style = document.createElement('style')
      style.textContent = styles
      this._shadow.appendChild(style)

      this._mountPoint = document.createElement('div')
      this._mountPoint.style.height = '100%'
      this._mountPoint.style.width = '100%'
      this._mountPoint.style.display = 'block'
      this._mountPoint.style.boxSizing = 'border-box'
      this._shadow.appendChild(this._mountPoint)
      registerOverlayRoot(this._shadow)
    }

    if (!this._root) {
      this._root = ReactDOM.createRoot(this._mountPoint)
    }

    this._renderApp()
  }

  disconnectedCallback() {
    document.getElementById('the-monitor-ha-shell')?.remove()
    unregisterOverlayRoot(this._shadow)
    this._updateHass = null
    if (this._root) {
      this._root.unmount()
      this._root = null
    }
  }
}

try {
  if (!customElements.get(ELEMENT_NAME)) {
    customElements.define(ELEMENT_NAME, TheMonitorDashboard)
  }
} catch (e) {
  console.error('Failed to register The Monitor dashboard:', e)
}

ensureHaDashboard()

const root = document.getElementById('root')
if (root) {
  injectDocumentStyles('the-monitor-dev-styles', styles)
  const devConfig = loadDevConfig()
  const resolved = resolveInitialSetupState(devConfig, { embedded: false })
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HassProvider enableMock>
        <ConfigProvider
          initialConfig={resolved.config}
          initialSetupStore={resolved.setupStore}
          initialActiveSetupId={resolved.activeSetupId}
        >
          <App />
        </ConfigProvider>
      </HassProvider>
    </React.StrictMode>
  )
}
