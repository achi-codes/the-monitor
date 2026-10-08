import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { styles, haShellStyles } from './styles'
import { HassProvider } from './context/HassContext.jsx'
import { ConfigProvider } from './context/ConfigContext.jsx'
import { mergeInitialConfig, loadDevConfig } from './lib/config.js'
import { schedulePersistCardConfig } from './lib/haLovelace.js'
import { ensureHaDashboard } from './lib/ensureHaDashboard.js'
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

function buildEmbeddedConfig(yamlConfig) {
  try {
    return mergeInitialConfig(yamlConfig, { embedded: true })
  } catch (error) {
    console.error('The Monitor: invalid config, using defaults', error)
    return mergeInitialConfig({}, { embedded: true })
  }
}

function AppRoot({ initialConfig, onRegisterHassUpdate, onConfigSaved, enableMock = false }) {
  return (
    <HassProvider onRegisterUpdate={onRegisterHassUpdate} enableMock={enableMock}>
      <ConfigProvider initialConfig={initialConfig} onConfigSaved={onConfigSaved}>
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
  }

  setConfig(config) {
    this._config = config || {}
    if (this._root) {
      this._renderApp()
    }
  }

  _renderApp() {
    if (!this._root) return

    const initialConfig = buildEmbeddedConfig(this._config)

    try {
      this._root.render(
        <React.StrictMode>
          <AppRoot
            initialConfig={initialConfig}
            onRegisterHassUpdate={(fn) => {
              this._updateHass = fn
              if (this._hass) fn(this._hass)
            }}
            onConfigSaved={(nextConfig) => {
              if (this._hass) schedulePersistCardConfig(this._hass, nextConfig)
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
  }

  connectedCallback() {
    injectDocumentStyles('the-monitor-ha-shell', haShellStyles)

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
    }

    if (!this._root) {
      this._root = ReactDOM.createRoot(this._mountPoint)
    }

    this._renderApp()
  }

  disconnectedCallback() {
    this._updateHass = null
    if (this._root) {
      this._root.unmount()
      this._root = null
    }
  }
}

injectDocumentStyles('the-monitor-styles', styles)

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
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HassProvider enableMock>
        <ConfigProvider initialConfig={loadDevConfig()}>
          <App />
        </ConfigProvider>
      </HassProvider>
    </React.StrictMode>
  )
}
