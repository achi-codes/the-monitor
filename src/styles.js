export const styles = `
:host {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, sans-serif;
  color: white;
  position: relative;
  /* Keep position:fixed children inside the card so they don't cover the HA header. */
  transform: translateZ(0);
}

:host,
:root {
  --tm-font: system-ui, -apple-system, sans-serif;
  --tm-accent: #6366f1;
  --tm-accent-rgb: 99, 102, 241;
  --tm-screensaver-gradient: linear-gradient(135deg, rgba(49, 46, 129, 0.3), black, rgba(88, 28, 135, 0.3));
  --tm-white: #ffffff;
  --tm-white-90: rgba(255, 255, 255, 0.9);
  --tm-white-80: rgba(255, 255, 255, 0.8);
  --tm-white-70: rgba(255, 255, 255, 0.7);
  --tm-white-60: rgba(255, 255, 255, 0.6);
  --tm-white-50: rgba(255, 255, 255, 0.5);
  --tm-white-20: rgba(255, 255, 255, 0.2);
  --tm-white-10: rgba(255, 255, 255, 0.1);
  --tm-white-05: rgba(255, 255, 255, 0.05);
  --tm-radius-lg: 1rem;
  --tm-radius-xl: 1.5rem;
  --tm-radius-full: 9999px;
  --tm-gap: 1.5rem;
}

* { box-sizing: border-box; }

.tm-full-screen {
  width: 100%;
  height: 100%;
  min-height: 0;
  position: relative;
  overflow: hidden;
  background: var(--tm-bg, #000);
  color: var(--tm-fg, white);
}
.tm-absolute-fill { position: absolute; inset: 0; width: 100%; height: 100%; }
.tm-z-0 { z-index: 0; }
.tm-z-10 { z-index: 10; }
.tm-z-50 { z-index: 50; }

.tm-bg-cover { background-size: cover; background-position: center; transition: opacity 1s; }
.tm-overlay-gradient { background: var(--tm-overlay, linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)); }

.tm-flex-center { display: flex; align-items: center; justify-content: center; }
.tm-flex-col { display: flex; flex-direction: column; }
.tm-flex-row { display: flex; flex-direction: row; }
.tm-items-center { align-items: center; }
.tm-justify-between { justify-content: space-between; }
.tm-justify-end { justify-content: flex-end; }
.tm-gap-2 { gap: 0.5rem; }
.tm-gap-3 { gap: 0.75rem; }
.tm-gap-4 { gap: 1rem; }
.tm-gap-6 { gap: 1.5rem; }

.tm-text-right { text-align: right; }
.tm-text-center { text-align: center; }

.tm-dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: var(--tm-gap);
  gap: var(--tm-gap);
  min-height: 0;
  position: relative;
  isolation: isolate;
}
.tm-dashboard--room-sidebar {
  position: relative;
}
.tm-dashboard-main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: var(--tm-gap);
  min-width: 0;
  min-height: 0;
}
.tm-dashboard--room-sidebar .tm-dashboard-main {
  padding-left: calc(17rem + var(--tm-gap));
}
.tm-dashboard--modal-open .tm-dashboard-header,
.tm-dashboard--modal-open .tm-dashboard-body {
  pointer-events: none;
  user-select: none;
}
.tm-dashboard-header {
  flex-shrink: 0;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  align-items: start;
  column-gap: 1rem;
  padding: 0 1rem;
  overflow: visible;
  z-index: 30;
}
.tm-dashboard-header h1,
.tm-dashboard-header p {
  margin: 0;
}
.tm-dashboard-header-right {
  justify-self: end;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1.5rem;
}
.tm-dashboard-header-presence {
  grid-column: 1 / -1;
  justify-content: center;
  padding-top: 0.75rem;
}
.tm-dashboard-title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
  overflow: visible;
}
.tm-room-selector {
  position: relative;
  z-index: 20;
}
.tm-room-selector-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.85rem;
  border-radius: var(--tm-radius-full);
  border: 1px solid var(--tm-white-20);
  background: var(--tm-white-10);
  color: inherit;
  font: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: background 0.15s, border-color 0.15s;
}
.tm-room-selector-trigger:hover:not(:disabled) {
  background: var(--tm-white-20);
  border-color: var(--tm-white-30, rgba(255,255,255,0.3));
}
.tm-room-selector-trigger:disabled {
  opacity: 0.5;
  cursor: default;
}
.tm-room-selector-label {
  font-weight: 500;
  opacity: 0.9;
}
.tm-room-selector-chevron {
  opacity: 0.7;
  transition: transform 0.15s;
}
.tm-room-selector-chevron.open {
  transform: rotate(180deg);
}
.tm-room-selector-menu {
  position: absolute;
  top: calc(100% + 0.35rem);
  left: 0;
  min-width: 10rem;
  margin: 0;
  padding: 0.35rem;
  list-style: none;
  border-radius: 0.75rem;
  border: 1px solid var(--tm-white-20);
  background: rgba(20, 20, 30, 0.92);
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}
.tm-room-selector-option {
  display: block;
  width: 100%;
  padding: 0.55rem 0.85rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.tm-room-selector-option:hover,
.tm-room-selector-option.active {
  background: rgba(var(--tm-accent-rgb), 0.25);
}
.tm-room-sidebar {
  position: absolute;
  left: var(--tm-gap);
  top: var(--tm-gap);
  bottom: var(--tm-gap);
  z-index: 25;
  width: 17rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.35rem 1.15rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-white-20);
  background: rgba(20, 20, 30, 0.82);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.38);
  overflow-y: auto;
}
.tm-room-sidebar-title {
  margin: 0 0 0.35rem;
  padding: 0 0.65rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.45;
}
.tm-room-sidebar-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.tm-room-sidebar-option {
  display: block;
  width: 100%;
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 0.85rem;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 1.05rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}
.tm-room-sidebar-option:hover:not(:disabled) {
  background: rgba(var(--tm-accent-rgb), 0.18);
  transform: translateX(2px);
}
.tm-room-sidebar-option.active {
  background: rgba(var(--tm-accent-rgb), 0.3);
  box-shadow: inset 0 0 0 1px rgba(var(--tm-accent-rgb), 0.35);
}
.tm-room-sidebar-option:disabled {
  opacity: 0.5;
  cursor: default;
}
.tm-room-config-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.tm-room-config-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.tm-room-config-name {
  flex: 1;
}
.tm-room-config-remove {
  padding: 0.35rem 0.75rem;
  min-height: auto;
  font-size: 0.75rem;
  flex-shrink: 0;
}
.tm-room-config-add {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
}
.tm-room-config-add .tm-input {
  flex: 1;
  min-width: 10rem;
}
.tm-room-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tm-room-suggestion-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--tm-radius-full);
  border: 1px solid var(--tm-white-20);
  background: var(--tm-white-05);
  color: inherit;
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.tm-room-suggestion-chip:hover:not(:disabled) {
  background: rgba(var(--tm-accent-rgb), 0.2);
  border-color: rgba(var(--tm-accent-rgb), 0.4);
}
.tm-room-suggestion-chip:disabled {
  opacity: 0.4;
  cursor: default;
}
.tm-page-pager-wrap {
  flex: 1 1 auto;
  width: 100%;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.tm-page-pager {
  flex: 1 1 auto;
  width: 100%;
  max-width: 100%;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
}
.tm-page-pager::-webkit-scrollbar { display: none; }
.tm-page-pager.is-scrolling,
.tm-page-pager.is-scrolling * {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.tm-page {
  flex: 0 0 100%;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  scroll-snap-align: start;
  min-height: 0;
  height: 100%;
  overflow: hidden;
}
.tm-page-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 0 0.25rem;
  flex-shrink: 0;
}
.tm-page-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}
.tm-page-dot.active {
  background: white;
  transform: scale(1.3);
}
.tm-page-indicator--edit {
  gap: 0.75rem;
}
.tm-page-indicator-track {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.tm-page-bar {
  width: 1.75rem;
  height: 0.25rem;
  border-radius: 9999px;
  border: none;
  background: rgba(255, 255, 255, 0.28);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s, width 0.2s;
}
.tm-page-bar.active {
  background: white;
  width: 2.25rem;
  transform: none;
}
.tm-page-manage-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  flex-shrink: 0;
}
.tm-page-manage-trigger:hover {
  background: rgba(var(--tm-accent-rgb), 0.35);
}
.tm-page-manage-overlay {
  position: fixed;
  inset: 0;
  z-index: 420;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  pointer-events: auto;
  touch-action: none;
  animation: fadeIn 0.2s ease-out;
}
.tm-page-manage-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: default;
}
.tm-page-manage-panel {
  position: relative;
  z-index: 1;
  width: min(24rem, calc(100vw - 2rem));
  max-height: min(28rem, calc(100vh - 2rem));
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-white-10);
  background: rgba(12, 12, 16, 0.94);
  color: white;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
  animation: weatherSlideUp 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-page-manage-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}
.tm-page-manage-title {
  font-size: 1.0625rem;
  font-weight: 700;
}
.tm-page-manage-subtitle {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  opacity: 0.65;
}
.tm-page-manage-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  flex-shrink: 0;
}
.tm-page-manage-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  min-height: 0;
}
.tm-page-manage-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem;
  border-radius: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}
.tm-page-manage-row.active {
  border-color: rgba(129, 140, 248, 0.55);
  background: rgba(var(--tm-accent-rgb), 0.14);
}
.tm-page-manage-select {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  text-align: left;
  padding: 0.25rem 0.35rem;
}
.tm-page-manage-index {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 700;
  flex-shrink: 0;
}
.tm-page-manage-name {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0;
}
.tm-page-manage-name:focus {
  outline: none;
}
.tm-page-manage-actions {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  flex-shrink: 0;
}
.tm-page-manage-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
}
.tm-page-manage-action:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.tm-page-manage-action--danger {
  color: #fecaca;
  background: rgba(239, 68, 68, 0.16);
}
.tm-page-manage-add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  border-radius: 0.875rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}
.tm-page-manage-add:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.tm-page-manage-hint {
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.55;
  text-align: center;
}
.tm-dashboard::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ffffff;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-dashboard--edit {
  color: #1d1d1f;
}
.tm-dashboard--edit::before {
  opacity: 1;
}
.tm-dashboard--edit .tm-dashboard-header h1,
.tm-dashboard--edit .tm-dashboard-header p {
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-dashboard-header,
.tm-dashboard--edit .tm-dashboard-body {
  animation: tmEditFadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes tmEditFadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.tm-dashboard--edit .tm-page-pager {
  touch-action: none;
}
.tm-dashboard--edit .tm-btn-round {
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-btn-round:hover {
  background: rgba(0, 0, 0, 0.1);
}
.tm-dashboard--edit .tm-btn-round.active {
  background: rgba(var(--tm-accent-rgb), 0.14);
  border: 1px solid rgba(var(--tm-accent-rgb), 0.35);
  color: #4338ca;
}
.tm-dashboard--edit .tm-page-bar {
  background: rgba(0, 0, 0, 0.14);
  transition: background 0.25s ease, width 0.25s ease;
}
.tm-dashboard--edit .tm-page-bar.active {
  background: #1d1d1f;
}
.tm-dashboard--edit .tm-page-manage-trigger {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.05);
  color: #1d1d1f;
  transition: background 0.2s ease;
}
.tm-dashboard--edit .tm-page-manage-trigger:hover {
  background: rgba(var(--tm-accent-rgb), 0.12);
}
.tm-dashboard--edit .tm-dashboard-grid-cell {
  border-color: rgba(0, 0, 0, 0.08);
  transition: border-color 0.35s ease;
}
.tm-dashboard--edit .tm-dashboard-grid-item.editing {
  outline-color: rgba(0, 0, 0, 0.1);
  transition:
    outline-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.12s var(--tm-layout-ease, cubic-bezier(0.22, 1, 0.36, 1));
}
.tm-dashboard--edit .tm-dashboard-grid-item.editing.is-interacting {
  outline-color: rgba(var(--tm-accent-rgb), 0.55);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.14);
  z-index: 20;
}
.tm-dashboard--edit .tm-dashboard-grid-item.selected {
  outline-color: rgba(var(--tm-accent-rgb), 0.75);
  box-shadow: 0 0 0 1px rgba(var(--tm-accent-rgb), 0.2);
}
.tm-dashboard--edit .tm-dashboard-editor {
  animation: tmEditSlideIn 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes tmEditSlideIn {
  from { opacity: 0; transform: translateX(12px); }
  to { opacity: 1; transform: translateX(0); }
}
.tm-dashboard--edit .tm-dashboard-editor-toolbar {
  background: rgba(0, 0, 0, 0.035);
  border-color: rgba(0, 0, 0, 0.06);
}
.tm-dashboard--edit .tm-dashboard-editor-btn,
.tm-dashboard--edit .tm-dashboard-editor-done {
  border-color: rgba(0, 0, 0, 0.08);
  background: #ffffff;
  color: #1d1d1f;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.tm-dashboard--edit .tm-dashboard-editor-btn.active {
  background: rgba(var(--tm-accent-rgb), 0.12);
  border-color: rgba(var(--tm-accent-rgb), 0.35);
  color: #4338ca;
}
.tm-dashboard--edit .tm-dashboard-editor-done {
  background: #4338ca;
  border-color: #4338ca;
  color: #ffffff;
}
.tm-dashboard--edit .tm-dashboard-editor-done:hover {
  background: #3730a3;
  border-color: #3730a3;
}
.tm-dashboard--edit .tm-dashboard-editor-panel,
.tm-dashboard--edit .tm-widget-inspector {
  background: #f5f5f7;
  border-color: rgba(0, 0, 0, 0.07);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-dashboard-editor-close {
  color: #1d1d1f;
  background: rgba(0, 0, 0, 0.06);
}
.tm-dashboard--edit .tm-preset-card,
.tm-dashboard--edit .tm-palette-item {
  border-color: rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.85);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-preset-card:hover,
.tm-dashboard--edit .tm-palette-item:hover {
  background: rgba(var(--tm-accent-rgb), 0.1);
}
.tm-dashboard--edit .tm-preset-block {
  background: rgba(0, 0, 0, 0.15);
}
.tm-dashboard--edit .tm-palette-icon {
  background: rgba(var(--tm-accent-rgb), 0.18);
  color: #4338ca;
}
.tm-dashboard--edit .tm-widget-inspector-size {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-widget-inspector-size.active {
  background: rgba(var(--tm-accent-rgb), 0.14);
  border-color: rgba(var(--tm-accent-rgb), 0.45);
  color: #4338ca;
  box-shadow: inset 0 0 0 1px rgba(var(--tm-accent-rgb), 0.12);
}
.tm-dashboard--edit .tm-widget-inspector-entity-row {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.tm-dashboard--edit .tm-input,
.tm-dashboard--edit .tm-entity-picker-trigger {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.12);
  color: #1d1d1f;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.tm-dashboard--edit .tm-widget-inspector .tm-entity-picker-trigger,
.tm-dashboard--edit .tm-widget-inspector .tm-input {
  min-height: 2.5rem;
  padding: 0.55rem 0.75rem;
  font-size: 0.8125rem;
  border-radius: 0.7rem;
}
.tm-dashboard--edit .tm-widget-inspector .tm-btn-secondary {
  min-height: 2.5rem;
  padding: 0.55rem 0.9rem;
  font-size: 0.8125rem;
  font-weight: 600;
}
.tm-dashboard--edit .tm-widget-inspector .tm-setting-toggle {
  margin-top: 0.35rem;
  padding: 0.55rem 0.65rem;
  border-radius: 0.7rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.8125rem;
  font-weight: 600;
}
.tm-dashboard--edit .tm-input::placeholder {
  color: rgba(0, 0, 0, 0.35);
}
.tm-dashboard--edit .tm-input:focus,
.tm-dashboard--edit .tm-entity-picker-trigger:focus {
  border-color: rgba(var(--tm-accent-rgb), 0.55);
  box-shadow: 0 0 0 3px rgba(var(--tm-accent-rgb), 0.12);
}
.tm-dashboard--edit .tm-entity-picker-dropdown {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.14);
}
.tm-dashboard--edit .tm-entity-picker-search {
  color: #1d1d1f;
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.tm-dashboard--edit .tm-entity-picker-search::placeholder {
  color: rgba(0, 0, 0, 0.35);
}
.tm-dashboard--edit .tm-entity-picker-item {
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-entity-picker-item:hover {
  background: rgba(0, 0, 0, 0.04);
}
.tm-dashboard--edit .tm-entity-picker-item.selected {
  background: rgba(var(--tm-accent-rgb), 0.12);
  color: #4338ca;
}
.tm-dashboard--edit .tm-btn-secondary {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.12);
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-btn-secondary:hover {
  background: rgba(var(--tm-accent-rgb), 0.08);
  border-color: rgba(var(--tm-accent-rgb), 0.3);
}
.tm-dashboard--edit .tm-widget-inspector-delete {
  background: rgba(239, 68, 68, 0.1);
  color: #b91c1c;
}
.tm-dashboard--edit .tm-widget-inspector-delete:hover {
  background: rgba(239, 68, 68, 0.18);
}
.tm-dashboard--edit .tm-widget-inspector-remove {
  background: rgba(0, 0, 0, 0.05);
  color: #52525b;
}
.tm-dashboard--edit .tm-widget-inspector-remove:hover {
  background: rgba(239, 68, 68, 0.12);
  color: #b91c1c;
}
.tm-dashboard--edit .tm-setting-toggle {
  color: #1d1d1f;
}
.tm-dashboard--edit .tm-ha-card-error {
  color: #b91c1c;
}
.tm-dashboard--edit .tm-widget-inspector-type {
  background: rgba(var(--tm-accent-rgb), 0.1);
  color: #4338ca;
}
@media (prefers-reduced-motion: reduce) {
  .tm-dashboard::before,
  .tm-dashboard--edit .tm-page-bar,
  .tm-dashboard--edit .tm-dashboard-grid-cell,
  .tm-dashboard--edit .tm-dashboard-grid-item.editing,
  .tm-dashboard-body .tm-page-pager-wrap,
  .tm-dashboard-grid--edit .tm-dashboard-grid-overlay {
    transition: none;
    animation: none;
  }
  .tm-dashboard--edit .tm-dashboard-header,
  .tm-dashboard--edit .tm-dashboard-body,
  .tm-dashboard--edit .tm-dashboard-editor {
    animation: none;
  }
}
.tm-dashboard-body {
  flex: 1 1 auto;
  display: flex;
  gap: 1rem;
  min-height: 0;
  min-width: 0;
  transition: gap 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-dashboard-body .tm-page-pager-wrap {
  flex: 1 1 auto;
  min-width: 0;
  transition: flex 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-btn-round.active {
  background: rgba(var(--tm-accent-rgb), 0.45);
  border-color: rgba(165, 180, 252, 0.5);
}
.tm-dashboard-grid {
  position: relative;
  display: grid;
  gap: var(--tm-gap);
  width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
}
.tm-dashboard-grid--edit {
  display: block;
}
.tm-dashboard-grid--edit .tm-dashboard-grid-overlay {
  animation: tmGridOverlayIn 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes tmGridOverlayIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.tm-dashboard-grid-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: inherit;
  grid-template-rows: inherit;
  gap: inherit;
  pointer-events: none;
  z-index: 0;
}
.tm-dashboard-grid-cell {
  border: 1px dashed rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
}
.tm-dashboard-grid-cell--occupied {
  pointer-events: none;
}
.tm-dashboard-grid-cell--empty {
  pointer-events: auto;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}
.tm-dashboard-grid-cell--empty:hover {
  background: rgba(var(--tm-accent-rgb), 0.1);
  border-color: rgba(var(--tm-accent-rgb), 0.45);
}
.tm-dashboard-grid-cell--empty:active {
  transform: scale(0.98);
}
.tm-dashboard--edit .tm-dashboard-grid-cell--empty {
  border-color: rgba(0, 0, 0, 0.12);
}
.tm-dashboard--edit .tm-dashboard-grid-cell--empty:hover {
  background: rgba(var(--tm-accent-rgb), 0.12);
}
.tm-slot-picker-overlay {
  position: fixed;
  inset: 0;
  z-index: 430;
  pointer-events: auto;
  touch-action: none;
  animation: fadeIn 0.18s ease-out;
}
.tm-slot-picker-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  cursor: default;
}
.tm-slot-picker-panel {
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.875rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #f2f2f7;
  color: #1d1d1f;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.22);
  animation: weatherSlideUp 0.26s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;
}
.tm-slot-picker-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  flex-shrink: 0;
}
.tm-slot-picker-title {
  font-size: 0.9375rem;
  font-weight: 700;
}
.tm-slot-picker-subtitle {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  opacity: 0.6;
}
.tm-slot-picker-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
  cursor: pointer;
  flex-shrink: 0;
}
.tm-slot-picker-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  overflow-y: auto;
  min-height: 0;
}
.tm-slot-picker-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;
  padding: 0.5rem 0.625rem;
  background: rgba(255, 255, 255, 0.85);
  color: #1d1d1f;
  font-size: 0.75rem;
  cursor: pointer;
  text-align: left;
}
.tm-slot-picker-item:hover {
  background: rgba(var(--tm-accent-rgb), 0.1);
}
.tm-slot-picker-icon {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.4rem;
  background: rgba(var(--tm-accent-rgb), 0.18);
  color: #4338ca;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}
.tm-dashboard-grid-item {
  position: relative;
  z-index: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
.tm-dashboard-grid-item.editing {
  outline: 1px solid rgba(255, 255, 255, 0.12);
  outline-offset: -1px;
  border-radius: var(--tm-radius-xl);
}
.tm-dashboard-grid-item.selected {
  outline: 2px solid rgba(129, 140, 248, 0.85);
  outline-offset: -2px;
}
.tm-dashboard-grid-chrome {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  border-radius: inherit;
}
.tm-dashboard-grid-resize-edge {
  position: absolute;
  pointer-events: auto;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  z-index: 6;
  touch-action: none;
}
.tm-dashboard-grid-resize-edge--n,
.tm-dashboard-grid-resize-edge--s {
  left: 2rem;
  right: 2rem;
  height: 0.75rem;
  cursor: ns-resize;
}
.tm-dashboard-grid-resize-edge--n {
  top: 0;
  transform: translateY(-40%);
}
.tm-dashboard-grid-resize-edge--s {
  bottom: 0;
  transform: translateY(40%);
}
.tm-dashboard-grid-resize-edge--e,
.tm-dashboard-grid-resize-edge--w {
  top: 2rem;
  bottom: 2rem;
  width: 0.75rem;
  cursor: ew-resize;
}
.tm-dashboard-grid-resize-edge--e {
  right: 0;
  transform: translateX(40%);
}
.tm-dashboard-grid-resize-edge--w {
  left: 0;
  transform: translateX(-40%);
}
.tm-dashboard-grid-resize-corner {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1.25rem;
  height: 1.25rem;
  border: none;
  padding: 0;
  margin: 0;
  border-radius: 0.35rem;
  background: rgba(0, 0, 0, 0.45);
  cursor: nwse-resize;
  pointer-events: auto;
  z-index: 7;
  touch-action: none;
  transform: translate(25%, 25%);
}
.tm-dashboard-grid-resize-corner::after {
  content: '';
  display: block;
  width: 0.55rem;
  height: 0.55rem;
  margin: 0.2rem;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
}
.tm-dashboard-grid-item.selected .tm-dashboard-grid-resize-edge--n {
  background: linear-gradient(to bottom, rgba(129, 140, 248, 0.35), transparent);
}
.tm-dashboard-grid-item.selected .tm-dashboard-grid-resize-edge--s {
  background: linear-gradient(to top, rgba(129, 140, 248, 0.35), transparent);
}
.tm-dashboard-grid-item.selected .tm-dashboard-grid-resize-edge--e {
  background: linear-gradient(to left, rgba(129, 140, 248, 0.35), transparent);
}
.tm-dashboard-grid-item.selected .tm-dashboard-grid-resize-edge--w {
  background: linear-gradient(to right, rgba(129, 140, 248, 0.35), transparent);
}
.tm-dashboard-grid-drag {
  pointer-events: auto;
  border: none;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  cursor: grab;
  position: absolute;
  top: 0.35rem;
  left: 0.35rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
}
.tm-dashboard-grid-drag:active {
  cursor: grabbing;
}
.tm-dashboard-grid-badge {
  position: absolute;
  top: 0.35rem;
  left: 2.25rem;
  right: 2rem;
  font-size: 0.625rem;
  font-weight: 700;
  opacity: 0.85;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-dashboard-grid-content {
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
.tm-dashboard-grid-content > * {
  width: 100%;
  height: 100%;
}
.tm-dashboard-grid-item--energy-tile .tm-dashboard-grid-content,
.tm-dashboard-grid-item--sankey .tm-dashboard-grid-content {
  padding: 0;
}
.tm-dashboard-grid-item--energy-tile .tm-energy-device-stack,
.tm-dashboard-grid-item--energy-tile .tm-quick-action,
.tm-dashboard-grid-item--energy-tile .tm-energy-device-card {
  height: 100%;
}
.tm-popup-widget-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  height: 100%;
  min-height: 0;
}
.tm-dashboard-editor {
  width: min(20.5rem, 36vw);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
}
.tm-dashboard-editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.tm-dashboard-editor-btn,
.tm-dashboard-editor-done {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
}
.tm-dashboard-editor-btn:hover,
.tm-dashboard-editor-done:hover {
  transform: translateY(-1px);
}
.tm-dashboard-editor-btn.active {
  background: rgba(var(--tm-accent-rgb), 0.16);
  border-color: rgba(var(--tm-accent-rgb), 0.4);
  color: #4338ca;
}
.tm-dashboard-editor-done {
  margin-left: auto;
  background: rgba(var(--tm-accent-rgb), 0.45);
}
.tm-dashboard-editor-panel {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.125rem;
  padding: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}
.tm-dashboard-editor-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.tm-dashboard-editor-panel-header strong {
  font-size: 0.875rem;
}
.tm-dashboard-editor-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.06);
  color: inherit;
  cursor: pointer;
  opacity: 0.85;
}
.tm-dashboard-editor-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}
.tm-preset-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}
.tm-preset-card {
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.875rem;
  padding: 0.625rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
}
.tm-preset-card:hover {
  background: rgba(var(--tm-accent-rgb), 0.2);
  transform: translateY(-1px);
}
.tm-preset-preview {
  display: flex;
  gap: 0.2rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
}
.tm-preset-block {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.25rem;
  min-width: 0.5rem;
}
.tm-preset-name {
  font-size: 0.8125rem;
  font-weight: 700;
}
.tm-preset-desc {
  font-size: 0.6875rem;
  opacity: 0.65;
  line-height: 1.35;
  margin-top: 0.2rem;
}
.tm-palette-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
  max-height: 18rem;
  overflow-y: auto;
  padding-right: 0.15rem;
}
.tm-palette-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.875rem;
  padding: 0.55rem 0.65rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
}
.tm-palette-item:hover {
  transform: translateY(-1px);
}
.tm-palette-icon {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.5rem;
  background: rgba(var(--tm-accent-rgb), 0.35);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}
.tm-dashboard-editor-inspector-wrap {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  border-radius: 1.125rem;
}
.tm-widget-inspector {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.125rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}
.tm-widget-inspector--empty {
  justify-content: center;
  align-items: center;
  min-height: 12rem;
  text-align: center;
  gap: 0.65rem;
  padding: 1.5rem 1.25rem;
}
.tm-widget-inspector-empty-icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--tm-accent-rgb), 0.12);
  color: #4338ca;
}
.tm-widget-inspector-empty-title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 700;
}
.tm-widget-inspector-empty-text {
  margin: 0;
  max-width: 14rem;
  font-size: 0.8125rem;
  line-height: 1.45;
  opacity: 0.65;
}
.tm-widget-inspector-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.65rem;
  padding-bottom: 0.875rem;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.tm-widget-inspector-title {
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
}
.tm-widget-inspector-type {
  display: inline-flex;
  margin-top: 0.35rem;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
}
.tm-widget-inspector-delete {
  border: none;
  background: rgba(239, 68, 68, 0.2);
  color: #fecaca;
  border-radius: 0.65rem;
  width: 2.15rem;
  height: 2.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.tm-widget-inspector-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.875rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.tm-widget-inspector-section:last-child {
  border-bottom: none;
  padding-bottom: 0.15rem;
}
.tm-widget-inspector-label {
  font-size: 0.6875rem;
  font-weight: 700;
  opacity: 0.55;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.tm-widget-inspector-hint {
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.45;
  opacity: 0.6;
}
.tm-widget-inspector-meta {
  font-size: 0.6875rem;
  opacity: 0.55;
  font-variant-numeric: tabular-nums;
}
.tm-widget-inspector-field {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.tm-widget-inspector-field-label {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.7;
}
.tm-widget-inspector-sizes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.35rem;
}
.tm-widget-inspector-size {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.65rem;
  padding: 0.45rem 0.35rem;
  background: rgba(255, 255, 255, 0.06);
  color: white;
  font-size: 0.6875rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  min-height: 2.6rem;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.tm-widget-inspector-size-dim {
  font-size: 0.5625rem;
  font-weight: 600;
  opacity: 0.55;
  font-variant-numeric: tabular-nums;
}
.tm-widget-inspector-size.active {
  background: rgba(var(--tm-accent-rgb), 0.45);
}
.tm-widget-inspector-size.active .tm-widget-inspector-size-dim {
  opacity: 0.8;
}
.tm-widget-inspector-sizes--stack {
  display: flex;
  flex-direction: column;
  grid-template-columns: none;
}
.tm-widget-inspector-sizes--segment {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.tm-widget-inspector-sizes--segment .tm-widget-inspector-size,
.tm-widget-inspector-sizes--hours .tm-widget-inspector-size {
  min-height: 2.25rem;
  flex-direction: row;
  justify-content: center;
  font-size: 0.75rem;
}
.tm-widget-inspector-sizes--hours {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3.25rem, 1fr));
}
.tm-widget-inspector-size--wide {
  width: 100%;
  border-radius: 0.75rem;
  padding: 0.55rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  text-align: left;
  font-weight: 600;
  min-height: auto;
}
.tm-widget-inspector-entity-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.15rem;
}
.tm-widget-inspector-entity-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.55rem;
  border-radius: 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.8125rem;
  font-weight: 500;
}
.tm-widget-inspector-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border: none;
  border-radius: 0.45rem;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  cursor: pointer;
  flex-shrink: 0;
  opacity: 0.7;
  transition: background 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}
.tm-widget-inspector-remove:hover {
  opacity: 1;
}
.tm-weather-compact .tm-weather-content {
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem 0.875rem;
}
.tm-weather-compact .tm-weather-main {
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.25rem 0.5rem;
}
.tm-weather-compact .tm-weather-temp-xl {
  grid-column: 2;
  grid-row: 1 / span 2;
  font-size: 2rem;
}
.tm-weather-compact .tm-weather-condition {
  font-size: 0.8125rem;
  margin-top: 0;
}
.tm-weather-compact .tm-weather-hilo,
.tm-weather-compact .tm-weather-day-strip:not(.tm-weather-hourly-preview) {
  display: none;
}
.tm-weather-compact .tm-weather-location {
  font-size: 0.6875rem;
  margin-bottom: 0;
}
.tm-weather-compact .tm-weather-hourly-preview {
  display: flex;
  margin-top: 0;
  padding-top: 0;
  gap: 0.2rem;
  overflow: hidden;
}
.tm-card.empty,
.tm-quick-action.empty,
.tm-alarm-widget.empty,
.tm-scene-btn.empty {
  cursor: pointer;
}
.tm-grid-page-units {
  display: grid;
  grid-template-columns: 2fr repeat(4, minmax(0, 1fr));
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--tm-gap);
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
}
.tm-unit-2-stack {
  grid-column: 1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  gap: var(--tm-gap);
  min-height: 0;
}
.tm-unit-2-stack > * { min-height: 0; overflow: hidden; }
.tm-unit-2-stack .tm-weather-content {
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem 0.875rem;
}
.tm-unit-2-stack .tm-weather-main {
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.25rem 0.5rem;
}
.tm-unit-2-stack .tm-weather-temp-xl {
  grid-column: 2;
  grid-row: 1 / span 2;
  font-size: 2rem;
}
.tm-unit-2-stack .tm-weather-condition {
  font-size: 0.8125rem;
  margin-top: 0;
}
.tm-unit-2-stack .tm-weather-hilo,
.tm-unit-2-stack .tm-weather-day-strip:not(.tm-weather-hourly-preview) {
  display: none;
}
.tm-unit-2-stack .tm-weather-location {
  font-size: 0.6875rem;
  margin-bottom: 0;
}
.tm-unit-2-stack .tm-weather-hourly-preview {
  display: flex;
  margin-top: 0;
  padding-top: 0;
  gap: 0.2rem;
  overflow: hidden;
}
.tm-unit-2-stack .tm-weather-hourly-preview .tm-weather-slot {
  min-width: 0;
  flex: 1 1 0;
  padding: 0.3rem 0.0625rem;
  gap: 0.15rem;
  border-radius: 0.45rem;
}
.tm-unit-2-stack .tm-weather-hourly-preview .tm-weather-slot-time {
  font-size: 0.5rem;
  letter-spacing: 0;
}
.tm-unit-2-stack .tm-weather-hourly-preview .tm-weather-slot-temp {
  font-size: 0.6875rem;
}
.tm-unit-2-stack .tm-weather-hourly-preview .tm-weather-slot svg {
  width: 0.875rem;
  height: 0.875rem;
}
.tm-unit-1-grid {
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--tm-gap);
  min-height: 0;
  min-width: 0;
}
.tm-widget-column {
  min-height: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--tm-gap);
}
.tm-widget-column--qa-popup {
  grid-template-rows: 1fr 1fr;
}
.tm-widget-column--qa-popup .tm-scene-stack {
  grid-row: 1;
  min-height: 0;
}
.tm-qa-column-spacer {
  grid-row: 2;
  min-height: 0;
}
.tm-qa-scene-trigger.active {
  border-color: rgba(254, 240, 138, 0.35);
}
.tm-qa-scene-state {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
}
.tm-qa-scene-icon-wrap {
  position: relative;
}
.tm-qa-entity-count {
  position: absolute;
  right: -0.2rem;
  bottom: -0.2rem;
  min-width: 1rem;
  height: 1rem;
  padding: 0 0.2rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.55);
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1rem;
  text-align: center;
}
.tm-qa-popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  pointer-events: auto;
  touch-action: none;
  animation: fadeIn 0.2s ease-out;
}
.tm-qa-popup-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: default;
  pointer-events: auto;
  touch-action: none;
}
.tm-qa-popup-panel {
  position: relative;
  z-index: 1;
  pointer-events: auto;
  touch-action: manipulation;
  width: 11.5rem;
  height: 11.5rem;
  padding: 0.625rem;
  border-radius: var(--tm-radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  overflow: hidden;
  border: 1px solid var(--tm-white-10);
  color: white;
  animation: weatherSlideUp 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-qa-popup-panel--multi {
  width: min(20rem, calc(100vw - 2rem));
  max-height: min(28rem, calc(100vh - 2rem));
  height: auto;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0.75rem;
  padding: 0.875rem;
  overflow: hidden;
}
.tm-qa-popup-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
.tm-qa-popup-header-icon {
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
}
.tm-qa-popup-header-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.tm-qa-popup-header-text .tm-scene-label {
  text-align: left;
}
.tm-qa-popup-entities {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  min-height: 0;
  max-height: 16rem;
  padding-right: 0.125rem;
}
.tm-qa-popup-entity {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.625rem;
  border-radius: 0.75rem;
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.tm-qa-popup-entity.active {
  border-color: rgba(254, 240, 138, 0.25);
  background: rgba(234, 179, 8, 0.12);
}
.tm-light-color-circles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  align-items: center;
}
.tm-light-color-circle {
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.28);
  background: var(--tm-light-color);
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.tm-light-color-circle:hover {
  transform: scale(1.08);
  border-color: rgba(255, 255, 255, 0.55);
}
.tm-light-color-circle.active {
  border-color: white;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);
}
.tm-widget-inspector-entity-row--popup {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
}
.tm-widget-inspector-entity-row--popup.disabled {
  opacity: 0.55;
}
.tm-widget-inspector-entity-disable {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  font-size: 0.6875rem;
  white-space: nowrap;
}
.tm-widget-inspector-entity-disable input {
  width: 0.95rem;
  height: 0.95rem;
  accent-color: var(--tm-accent);
  cursor: pointer;
}
.tm-widget-inspector-entity-disable-label {
  opacity: 0.75;
}
.tm-widget-inspector-entity-row-main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.tm-widget-inspector-entity-name {
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-widget-inspector-entity-hint {
  font-size: 0.625rem;
  opacity: 0.55;
}
.tm-qa-popup-entity-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.tm-qa-popup-entity-name {
  font-size: 0.8125rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-qa-popup-entity-state {
  font-size: 0.6875rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.tm-qa-popup-entity-toggle {
  border: none;
  border-radius: 9999px;
  padding: 0.3rem 0.625rem;
  background: rgba(255, 255, 255, 0.14);
  color: white;
  font-size: 0.6875rem;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
}
.tm-qa-popup-entity-readonly {
  width: 2.25rem;
  flex-shrink: 0;
}
.tm-qa-popup-panel--multi .tm-qa-popup-toggle {
  align-self: stretch;
  margin-top: auto;
}
.tm-qa-popup-panel .tm-scene-icon {
  width: 2.75rem;
  height: 2.75rem;
}
.tm-qa-popup-panel .tm-scene-label {
  position: relative;
  z-index: 1;
  font-size: 0.9375rem;
}
.tm-qa-popup-state {
  position: relative;
  z-index: 1;
  font-size: 0.75rem;
  opacity: 0.85;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.tm-qa-popup-toggle {
  position: relative;
  z-index: 1;
  margin-top: 0.125rem;
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.18);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}
.tm-qa-popup-close {
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
  color: white;
  cursor: pointer;
}
.tm-widget-column .tm-quick-action { min-height: 0; height: 100%; }
.tm-widget-column .tm-alarm-widget { min-height: 0; height: 100%; }
.tm-scene-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--tm-gap);
  min-height: 0;
}
.tm-stack-2 {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--tm-gap);
  min-height: 0;
  height: 100%;
}
.tm-stack-2 > * { min-height: 0; overflow: hidden; }
.tm-grid-page {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
  gap: var(--tm-gap);
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-width: 0;
}
.tm-row-full { grid-row: 1 / -1; }
.tm-grid-dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: var(--tm-gap);
  padding: var(--tm-gap);
  height: 100%;
}
.tm-col-12 { grid-column: span 12; }
.tm-col-8 { grid-column: span 8; }
.tm-col-6 { grid-column: span 6; }
.tm-col-4 { grid-column: span 4; }
.tm-col-3 { grid-column: span 3; }
.tm-row-1 { grid-row: span 1; }
.tm-row-2 { grid-row: span 2; }
.tm-row-3 { grid-row: span 3; }

.tm-card {
  background: var(--tm-surface, rgba(255, 255, 255, 0.10));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  color: var(--tm-tile-fg, var(--tm-fg, white));
  overflow: hidden;
}
.tm-card-dark {
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(12px);
  border: 1px solid var(--tm-white-05);
  border-radius: var(--tm-radius-xl);
}

.tm-btn-round {
  padding: 0.75rem;
  border-radius: 9999px;
  background: var(--tm-surface-2, rgba(255, 255, 255, 0.10));
  border: none;
  color: var(--tm-fg, white);
  cursor: pointer;
  transition: background 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
}
.tm-btn-round:hover { background: var(--tm-surface, rgba(255, 255, 255, 0.20)); }

.tm-presence-chip {
  display: flex; align-items: center; gap: 0.5rem;
  background: var(--tm-white-10);
  backdrop-filter: blur(8px);
  padding: 0.375rem 1rem 0.375rem 0.375rem;
  border-radius: 9999px;
  border: 1px solid var(--tm-white-05);
}
.tm-avatar-sm {
  width: 2rem; height: 2rem;
  border-radius: 50%;
  background: var(--tm-accent);
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid rgba(255,255,255,0.2);
}
.tm-avatar-img { width: 100%; height: 100%; object-fit: cover; }

.tm-title-lg { font-size: 1.875rem; font-weight: 300; line-height: 1.25; }
.tm-title-xl { font-size: 2.25rem; font-weight: 300; line-height: 1; }
.tm-text-hero { font-size: 6rem; font-weight: 700; line-height: 1; }
.tm-clock-lg { font-size: 2.25rem; font-weight: 700; line-height: 1; }
.tm-font-bold { font-weight: 700; }
.tm-text-sm { font-size: 0.875rem; }
.tm-text-xs { font-size: 0.75rem; }
.tm-opacity-70 { opacity: 0.7; }
.tm-opacity-50 { opacity: 0.5; }

.tm-quick-action {
  padding: 0.875rem 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.1s;
  background: var(--tm-surface, rgba(255, 255, 255, 0.10));
  text-align: left;
  height: 100%;
  width: 100%;
  color: var(--tm-tile-fg, white);
  min-height: 0;
}
.tm-quick-action:not(.tm-brightness-action) .tm-flex-col {
  margin-top: 0;
}
.tm-quick-action:active { transform: scale(0.95); }
.tm-quick-action.empty {
  border-style: dashed;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
}

.tm-sensor-widget {
  padding: 0.875rem 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  background: var(--tm-surface, rgba(255, 255, 255, 0.10));
  height: 100%;
  width: 100%;
  color: var(--tm-tile-fg, white);
  min-height: 0;
  overflow: visible;
}
.tm-sensor-widget--multi {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.625rem;
  padding: 0.75rem;
}
.tm-sensor-widget--combined-chart {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 0.75rem;
}
.tm-sensor-multi-readings {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  flex-shrink: 0;
}
.tm-sensor-multi-chart {
  flex: 1 1 auto;
  min-height: 3rem;
}
.tm-sensor-multi-scrub-time {
  text-align: center;
  margin-top: -0.15rem;
}
.tm-sensor-series-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  flex-shrink: 0;
}
.tm-sensor-sparkline-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.75rem;
  font-size: 0.65rem;
  opacity: 0.72;
  line-height: 1.2;
}
.tm-sensor-sparkline-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
}
.tm-sensor-sparkline-legend-item span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-sensor-reading--compact .tm-sensor-reading-label {
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.72rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  line-height: 1.2;
}
.tm-sensor-widget.empty {
  border-style: dashed;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: inherit;
  font: inherit;
}
.tm-sensor-reading {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
  min-height: 0;
}
.tm-sensor-reading--compact {
  padding: 0.5rem 0.625rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  gap: 0.35rem;
}
.tm-sensor-reading-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}
.tm-sensor-reading-label {
  font-size: 0.75rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-sensor-reading-value-row {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  min-width: 0;
}
.tm-sensor-reading-value {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.tm-sensor-reading--compact .tm-sensor-reading-value {
  font-size: 1.25rem;
  font-variant-numeric: tabular-nums;
}
.tm-sensor-reading-unit {
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.75;
}
.tm-sensor-reading--compact .tm-sensor-reading-unit {
  font-size: 0.8rem;
}
.tm-sensor-widget--history {
  justify-content: stretch;
  padding: 0.75rem 0.875rem 0.625rem;
  gap: 0;
}
.tm-sensor-widget--history:not(.tm-sensor-widget--multi) .tm-sensor-single--history {
  height: 100%;
  min-height: 0;
}
.tm-sensor-single--history {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-height: 0;
}
.tm-sensor-reading--history {
  flex: 1;
  gap: 0.2rem;
  min-height: 0;
}
.tm-sensor-reading--history .tm-sensor-reading-top {
  flex-shrink: 0;
}
.tm-sensor-reading--history .tm-sensor-reading-label {
  text-transform: none;
  font-size: 0.8125rem;
  letter-spacing: 0;
  font-weight: 500;
  opacity: 0.85;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  line-height: 1.25;
}
.tm-sensor-reading--history .tm-sensor-reading-value-row {
  flex-shrink: 0;
  margin-bottom: 0.15rem;
}
.tm-sensor-reading--history .tm-sensor-reading-value {
  font-size: 1.875rem;
}
.tm-sensor-reading--history .tm-sensor-reading-unit {
  font-size: 0.95rem;
}
.tm-sensor-reading-scrub-time {
  font-size: 0.72rem;
  opacity: 0.7;
  line-height: 1.2;
  min-height: 0.86rem;
  margin-top: -0.1rem;
  flex-shrink: 0;
}
.tm-sensor-reading-scrub-time.is-idle {
  visibility: hidden;
  pointer-events: none;
}
.tm-sensor-sparkline-wrap {
  flex: 1 1 auto;
  min-height: 2.75rem;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.tm-sensor-sparkline-chart {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: 0.2rem;
}
.tm-sensor-sparkline-chart.compact {
  min-height: 1.5rem;
}
.tm-sensor-sparkline-interactive {
  flex: 1 1 auto;
  min-height: 2.5rem;
  touch-action: none;
  cursor: crosshair;
  user-select: none;
  -webkit-user-select: none;
  display: flex;
}
.tm-sensor-sparkline-interactive .tm-sensor-sparkline {
  width: 100%;
  height: 100%;
  min-height: inherit;
  flex: 1;
}
.tm-sensor-sparkline-chart.compact .tm-sensor-sparkline-interactive {
  min-height: 1.35rem;
}
.tm-sensor-sparkline {
  display: block;
  width: 100%;
  flex: 1 1 auto;
  min-height: 2.5rem;
  color: rgba(var(--tm-accent-rgb), 0.95);
}
.tm-sensor-sparkline-chart.compact .tm-sensor-sparkline {
  min-height: 1.35rem;
}
.tm-sensor-sparkline-range {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.65rem;
  opacity: 0.55;
  line-height: 1;
  flex-shrink: 0;
}
.tm-sensor-sparkline.compact {
  min-height: 1.35rem;
  margin-top: 0.25rem;
}
.tm-sensor-sparkline--loading {
  width: 100%;
  height: 100%;
  min-height: 2.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.04) 100%
  );
  background-size: 200% 100%;
  animation: tmSensorSparklineShimmer 1.2s ease-in-out infinite;
}
.tm-sensor-sparkline-area {
  /* fill set per series via inline style */
}
.tm-sensor-sparkline-line {
  fill: none;
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
  /* stroke set per series via inline style */
}
.tm-sensor-sparkline-chart.multi .tm-sensor-sparkline-line {
  stroke-width: 2;
}
.tm-sensor-sparkline-scrub-line {
  stroke: rgba(255, 255, 255, 0.35);
  stroke-width: 1;
  pointer-events: none;
}
.tm-sensor-sparkline-scrub-dot {
  fill: #fff;
  stroke-width: 1.5;
  pointer-events: none;
  /* stroke set per series via inline style */
}
@keyframes tmSensorSparklineShimmer {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}

.tm-contact-widget {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 0.875rem 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  background: var(--tm-surface, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  color: var(--tm-tile-fg, white);
  text-align: left;
}
.tm-contact-widget--empty {
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-style: dashed;
  opacity: 0.55;
  cursor: pointer;
}
.tm-contact-widget--single {
  justify-content: space-between;
}
.tm-contact-widget--open {
  background: rgba(245, 158, 11, 0.12);
  border-color: rgba(251, 191, 36, 0.28);
}
.tm-contact-widget-hero-icon {
  align-self: flex-start;
}
.tm-contact-widget-body {
  margin-top: auto;
}
.tm-contact-widget-label {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.25;
}
.tm-contact-widget-state {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.75;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.tm-contact-widget--open .tm-contact-widget-state {
  color: #fde68a;
  opacity: 1;
}
.tm-contact-widget-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-shrink: 0;
}
.tm-contact-widget-summary-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.65;
}
.tm-contact-widget-summary-badge {
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.18);
  color: #a7f3d0;
}
.tm-contact-widget-summary-badge--alert {
  background: rgba(245, 158, 11, 0.22);
  color: #fde68a;
}
.tm-contact-widget-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
  gap: 0.5rem;
  min-height: 0;
  overflow: auto;
}
.tm-contact-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-width: 0;
  padding: 0.45rem 0.55rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.tm-contact-row--open {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(251, 191, 36, 0.22);
}
.tm-contact-row-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 0.1rem;
}
.tm-contact-row-label {
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-contact-row-state {
  font-size: 0.625rem;
  opacity: 0.65;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.tm-contact-row--open .tm-contact-row-state {
  color: #fde68a;
  opacity: 1;
}
.tm-contact-icon-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.14);
  color: #6ee7b7;
  box-shadow: inset 0 0 0 1px rgba(110, 231, 183, 0.18);
  transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.tm-contact-row--compact .tm-contact-icon-badge {
  width: 2.125rem;
  height: 2.125rem;
}
.tm-contact-icon-badge--open {
  background: rgba(245, 158, 11, 0.18);
  color: #fbbf24;
  box-shadow:
    inset 0 0 0 1px rgba(251, 191, 36, 0.28),
    0 0 0 0 rgba(251, 191, 36, 0.35);
  animation: tmContactOpenPulse 2.4s ease-in-out infinite;
}
.tm-contact-icon-badge--moving {
  animation: tmContactMoving 1.1s ease-in-out infinite;
}
@keyframes tmContactOpenPulse {
  0%, 100% {
    box-shadow:
      inset 0 0 0 1px rgba(251, 191, 36, 0.28),
      0 0 0 0 rgba(251, 191, 36, 0.25);
  }
  50% {
    box-shadow:
      inset 0 0 0 1px rgba(251, 191, 36, 0.42),
      0 0 0 0.35rem rgba(251, 191, 36, 0.12);
  }
}
@keyframes tmContactMoving {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
}
.tm-widget-column .tm-contact-widget { min-height: 0; height: 100%; }

.tm-alarm-widget {
  position: relative;
  padding: 0.875rem 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.1s;
  background: var(--tm-surface, rgba(255, 255, 255, 0.05));
  text-align: left;
  height: 100%;
  width: 100%;
  color: var(--tm-tile-fg, white);
  min-height: 0;
  overflow: hidden;
}
.tm-alarm-widget:active { transform: scale(0.95); }
.tm-alarm-widget.empty {
  border-style: dashed;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
}
.tm-alarm-widget-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}
.tm-alarm-widget-icon {
  opacity: 0.65;
  color: rgba(255, 255, 255, 0.75);
}
.tm-alarm-widget-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #6ee7b7;
  flex-shrink: 0;
  margin-top: 0.125rem;
}
.tm-alarm-widget-body {
  margin-top: auto;
}
.tm-alarm-widget-label {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.25;
}
.tm-alarm-widget-state {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.tm-alarm-widget.armed {
  background: rgba(16, 185, 129, 0.16);
  border-color: rgba(110, 231, 183, 0.35);
  color: #d1fae5;
  animation: tm-alarm-pulse 2.2s ease-in-out infinite;
}
.tm-alarm-widget.armed .tm-alarm-widget-icon {
  opacity: 1;
  color: #a7f3d0;
}
.tm-alarm-widget.triggered {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(248, 113, 113, 0.5);
  color: #fecaca;
  animation: tm-alarm-pulse-urgent 1s ease-in-out infinite;
}
.tm-alarm-widget.triggered .tm-alarm-widget-dot {
  background: #fca5a5;
}
.tm-alarm-widget.triggered .tm-alarm-widget-icon {
  opacity: 1;
  color: #fecaca;
}
@keyframes tm-alarm-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.35);
    background: rgba(16, 185, 129, 0.14);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
    background: rgba(16, 185, 129, 0.24);
  }
}
@keyframes tm-alarm-pulse-urgent {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.45);
    background: rgba(239, 68, 68, 0.18);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(239, 68, 68, 0);
    background: rgba(239, 68, 68, 0.32);
  }
}

.tm-brightness-action {
  position: relative;
  overflow: hidden;
  cursor: ns-resize;
  touch-action: none;
  user-select: none;
  justify-content: flex-start;
}
.tm-brightness-action:active { transform: none; }
.tm-brightness-action.dragging .tm-brightness-fill {
  transition: none;
}
.tm-brightness-fill {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--tm-brightness, 50%);
  background: linear-gradient(to top, rgba(234, 179, 8, 0.55), rgba(254, 240, 138, 0.15));
  pointer-events: none;
  transition: height 0.12s ease;
}
.tm-brightness-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  flex-shrink: 0;
}
.tm-brightness-colors {
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding-top: 0.5rem;
  touch-action: manipulation;
}
.tm-brightness-action--light .tm-light-color-circles {
  justify-content: center;
}
.tm-brightness-action--light .tm-light-color-circle {
  width: 1.25rem;
  height: 1.25rem;
}

.tm-cover-action {
  position: relative;
  overflow: hidden;
  cursor: ns-resize;
  touch-action: none;
  user-select: none;
  justify-content: flex-start;
}
.tm-cover-action:active { transform: none; }
.tm-cover-action.dragging .tm-cover-fill {
  transition: none;
}
.tm-cover-fill {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--tm-cover-position, 50%);
  background: linear-gradient(to top, rgba(59, 130, 246, 0.55), rgba(191, 219, 254, 0.15));
  pointer-events: none;
  transition: height 0.12s ease;
}
.tm-cover-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
}
.tm-cover-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  min-height: 0;
  min-width: 0;
}
.tm-cover-group--edit {
  cursor: pointer;
}
.tm-cover-group--edit .tm-cover-action {
  pointer-events: none;
}
.tm-cover-action--group {
  flex: 1 1 0;
  min-width: 0;
  padding: 0.5rem 0.375rem;
}
.tm-cover-action--group .tm-cover-header {
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
}
.tm-cover-action--group .tm-cover-header .tm-flex-col {
  align-items: center;
  width: 100%;
}
.tm-cover-group-label {
  font-size: 0.75rem;
  line-height: 1.2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.tm-cover-popup-entities {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-height: min(50vh, 20rem);
  overflow-y: auto;
  padding-right: 0.125rem;
}
.tm-cover-popup-entity {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--tm-radius-lg);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.tm-cover-popup-entity.active {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.25);
}
.tm-cover-popup-entity-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}
.tm-cover-popup-entity-name {
  font-weight: 600;
  font-size: 0.8125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-cover-popup-entity-state {
  font-size: 0.6875rem;
  opacity: 0.65;
}
.tm-cover-popup-slider {
  width: 5.5rem;
  flex-shrink: 0;
  accent-color: #60a5fa;
  cursor: pointer;
}
.tm-cover-popup-toggle {
  background: rgba(59, 130, 246, 0.25) !important;
  border-color: rgba(59, 130, 246, 0.35) !important;
}
.tm-cover-header state-icon,
.tm-cover-header ha-icon {
  flex-shrink: 0;
}

.tm-cover-card {
  container-type: size;
  cursor: default;
  justify-content: space-between;
  gap: clamp(0.5rem, 5cqh, 1.25rem);
  padding: clamp(0.75rem, 6cqmin, 1.5rem);
  overflow: hidden;
}
.tm-cover-card:active { transform: none; }
.tm-cover-card-main {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  gap: clamp(0.5rem, 4cqw, 1.5rem);
}
.tm-cover-card-info {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.tm-cover-card-title {
  font-size: clamp(0.95rem, 7cqmin, 1.75rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-cover-card-area,
.tm-cover-card-status {
  font-size: clamp(0.75rem, 4.2cqmin, 1.125rem);
  line-height: 1.3;
  opacity: 0.45;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-cover-card-area {
  margin-top: 0.2em;
}
.tm-cover-card-value {
  margin-top: auto;
  font-size: clamp(2rem, 22cqmin, 5.5rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
}
.tm-cover-card-unit {
  font-size: 0.9em;
}
.tm-cover-card-status {
  margin-top: 0.35em;
}

.tm-cover-visual {
  --tm-cover-visual-h: calc(68cqh - 12cqmin);
  --tm-cover-visual-w: min(48cqw, calc(var(--tm-cover-visual-h) * 1.1));
  flex: 0 0 auto;
  width: var(--tm-cover-visual-w);
  height: min(var(--tm-cover-visual-h), calc(var(--tm-cover-visual-w) * 1.5));
  max-height: 100%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  cursor: ns-resize;
  touch-action: none;
  user-select: none;
}
.tm-cover-visual-box {
  flex: 0 0 auto;
  height: clamp(0.75rem, 9cqh, 2.25rem);
  border-radius: 0.6rem;
  background: linear-gradient(to bottom, #ffffff 0%, #f1f1ef 70%, #dcdcd8 100%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
}
.tm-cover-visual-window {
  flex: 1 1 auto;
  min-height: 0;
  margin: -0.35rem 6% 0;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 0.85rem 0.85rem;
  border: 0.35rem solid color-mix(in srgb, #ffffff 45%, transparent);
  border-top: none;
}
.tm-cover-visual-view {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 45% 55% at 85% 75%, rgba(96, 140, 64, 0.85), transparent 70%),
    radial-gradient(ellipse 40% 50% at 15% 85%, rgba(120, 160, 80, 0.8), transparent 70%),
    radial-gradient(ellipse 35% 40% at 55% 95%, rgba(150, 180, 110, 0.7), transparent 70%),
    linear-gradient(to bottom, #e6f1f7 0%, #d4e6ef 55%, #b9d0a6 100%);
  filter: blur(3px);
  transform: scale(1.1);
}
.tm-cover-visual-slats {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background:
    repeating-linear-gradient(
      to bottom,
      color-mix(in srgb, #ffffff 70%, var(--tm-surface, #cfe9dc)) 0,
      color-mix(in srgb, #ffffff 55%, var(--tm-surface, #cfe9dc)) calc(var(--tm-cover-slat, 0.9rem) - 1px),
      rgba(0, 0, 0, 0.14) calc(var(--tm-cover-slat, 0.9rem) - 1px),
      rgba(0, 0, 0, 0.14) var(--tm-cover-slat, 0.9rem)
    );
  background-position: bottom;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  transition: height 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-cover-card.dragging .tm-cover-visual-slats {
  transition: none;
}

.tm-cover-card-controls {
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.35fr 1fr;
  gap: clamp(0.375rem, 2.5cqw, 0.75rem);
  height: clamp(2.25rem, 24cqh, 4.5rem);
}
.tm-cover-card-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: clamp(0.75rem, 4cqmin, 1.25rem);
  background: color-mix(in srgb, currentColor 7%, transparent);
  color: inherit;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.15s ease;
}
.tm-cover-card-btn svg {
  width: clamp(1.1rem, 8cqmin, 1.75rem);
  height: auto;
}
.tm-cover-card-btn:active:not(:disabled) {
  transform: scale(0.95);
}
.tm-cover-card-btn:disabled {
  cursor: default;
}
.tm-cover-card-btn--stop {
  background: var(--tm-tile-fg, #ffffff);
  color: var(--tm-cover-stop-fg, #000000);
}
@container (max-width: 15rem) {
  .tm-cover-visual { display: none; }
}
@container (max-height: 9rem) {
  .tm-cover-card-area,
  .tm-cover-card-status { display: none; }
}

.tm-scene-btn {
  position: relative;
  overflow: hidden;
  padding: 0.5rem;
  border-radius: var(--tm-radius-xl);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 0.25rem;
  border: 1px solid var(--tm-white-10);
  cursor: pointer;
  background: transparent;
  color: white;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.tm-scene-btn .tm-scene-label {
  position: relative;
  z-index: 10;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-scene-btn .tm-scene-icon state-icon,
.tm-scene-btn .tm-scene-icon ha-icon,
.tm-quick-action state-icon,
.tm-quick-action ha-icon,
.tm-brightness-header state-icon,
.tm-brightness-header ha-icon {
  flex-shrink: 0;
}
.tm-scene-btn .tm-scene-icon {
  position: relative;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tm-scene-btn.empty { border-style: dashed; opacity: 0.5; }

.tm-scenes {
  container: tm-scenes / size;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.tm-scenes-grid {
  display: grid;
  width: 100%;
  height: 100%;
  gap: calc(var(--tm-gap, 1.5rem) * 0.6);
}
.tm-scenes-grid--1 { grid-template: minmax(0, 1fr) / minmax(0, 1fr); }
.tm-scenes-grid--2 { grid-template: repeat(2, minmax(0, 1fr)) / minmax(0, 1fr); }
.tm-scenes-grid--3,
.tm-scenes-grid--4 { grid-template: repeat(2, minmax(0, 1fr)) / repeat(2, minmax(0, 1fr)); }
.tm-scenes-grid--3 > :last-child { grid-column: span 2; }
@container tm-scenes (min-aspect-ratio: 2 / 1) {
  .tm-scenes-grid--2 { grid-template: minmax(0, 1fr) / repeat(2, minmax(0, 1fr)); }
}
@container tm-scenes (min-aspect-ratio: 5 / 2) {
  .tm-scenes-grid--3 { grid-template: minmax(0, 1fr) / repeat(3, minmax(0, 1fr)); }
  .tm-scenes-grid--3 > :last-child { grid-column: auto; }
  .tm-scenes-grid--4 { grid-template: minmax(0, 1fr) / repeat(4, minmax(0, 1fr)); }
}

.tm-scene-card {
  --tm-scene-strong: rgba(var(--tm-accent-rgb, 99, 102, 241), 0.9);
  --tm-scene-muted: color-mix(in srgb, var(--tm-tile-fg, #ffffff) 50%, var(--tm-scene-strong));
  container: tm-scene-card / size;
  min-width: 0;
  min-height: 0;
  border-radius: var(--tm-radius-xl);
  background: var(--tm-surface, rgba(255, 255, 255, 0.1));
  border: 1px solid var(--tm-surface-border, rgba(255, 255, 255, 0.05));
  color: var(--tm-tile-fg, #ffffff);
  overflow: hidden;
}
.tm-scene-card-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas: "text" "art" "start";
  gap: clamp(0.4rem, 4cqh, 0.9rem);
  height: 100%;
  padding: clamp(0.75rem, 7cqmin, 1.5rem);
}
.tm-scene-card-text {
  grid-area: text;
  min-width: 0;
}
.tm-scene-card-kicker {
  display: none;
  font-size: clamp(0.8rem, 3.2cqw, 1.2rem);
  color: var(--tm-scene-muted);
  margin-bottom: 0.35em;
}
.tm-scene-card-title {
  font-size: clamp(0.95rem, 9cqw, 1.4rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-scene-card-sub {
  margin-top: 0.3em;
  font-size: clamp(0.7rem, 6cqw, 0.95rem);
  line-height: 1.3;
  color: var(--tm-scene-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-scene-card-art {
  grid-area: art;
  container-type: size;
  position: relative;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.tm-scene-card-art-disc {
  position: absolute;
  width: min(92cqh, 92cqw);
  height: min(92cqh, 92cqw);
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 42%,
    #fbf6ee 0%,
    color-mix(in srgb, var(--tm-scene-strong) 28%, #ece8f2) 75%
  );
}
.tm-scene-card-art img {
  position: relative;
  width: min(100cqh, 100cqw);
  height: min(100cqh, 100cqw);
  object-fit: contain;
  user-select: none;
}
[data-tm-theme="blackColorful"] .tm-scene-card {
  --tm-scene-strong: oklch(from var(--tm-surface) calc(l - 0.14) min(calc(c * 1.5 + 0.03), 0.13) h);
  border: none;
}
[data-tm-theme="blackColorful"] .tm-scene-card-art-disc {
  background: radial-gradient(
    circle at 50% 42%,
    rgba(255, 244, 228, 0.8) 0%,
    color-mix(in srgb, var(--tm-scene-strong) 16%, rgba(255, 255, 255, 0.35)) 72%
  );
}
.tm-scene-card-start {
  grid-area: start;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  height: clamp(2.25rem, 22cqh, 3.5rem);
  border: none;
  border-radius: clamp(0.75rem, 5cqmin, 1.25rem);
  background: var(--tm-scene-strong);
  color: #ffffff;
  font: inherit;
  font-size: clamp(0.95rem, 4cqw, 1.6rem);
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.12s ease, filter 0.15s ease;
}
.tm-scene-card-start:active:not(:disabled) {
  transform: scale(0.97);
  filter: brightness(0.94);
}
.tm-scene-card-start:disabled {
  cursor: default;
}
.tm-scene-card-start svg {
  width: clamp(1.1rem, 9cqmin, 1.9rem);
  height: auto;
  flex-shrink: 0;
}
.tm-scene-card-start-label {
  display: none;
}
@container tm-scene-card (min-width: 19rem) and (min-aspect-ratio: 13 / 10) {
  .tm-scene-card-inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 46%);
    grid-template-rows: minmax(0, 1fr) auto;
    grid-template-areas: "text art" "start start";
    column-gap: 0.5rem;
    row-gap: clamp(0.6rem, 5cqh, 1.25rem);
  }
  .tm-scene-card-text {
    align-self: center;
  }
  .tm-scene-card-kicker { display: block; }
  .tm-scene-card-title { font-size: clamp(1.25rem, 6.5cqw, 2.5rem); }
  .tm-scene-card-sub { font-size: clamp(0.85rem, 3.4cqw, 1.35rem); }
  .tm-scene-card-art { justify-content: flex-end; }
  .tm-scene-card-start { height: clamp(2.75rem, 24cqh, 5rem); }
  .tm-scene-card-start-label { display: inline; }
}
@container tm-scene-card (max-height: 8.5rem) {
  .tm-scene-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) auto;
    grid-template-areas: "text" "start";
  }
  .tm-scene-card-art,
  .tm-scene-card-sub { display: none; }
}
.tm-scene-gradient {
  position: absolute; inset: 0; opacity: 0.55;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.tm-animate-fade { animation: fadeIn 0.5s ease-out; }

.tm-profile-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 56rem; margin: 0 auto; }
.tm-profile-card { display: flex; flex-direction: column; align-items: center; gap: 1rem; background: none; border: none; cursor: pointer; }
.tm-profile-avatar-lg {
  width: 8rem; height: 8rem; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.25rem; font-weight: bold; overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  transition: transform 0.2s;
}
.tm-profile-card:hover .tm-profile-avatar-lg { transform: scale(1.05); }

.tm-weather-widget {
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: white;
  cursor: pointer;
  border: none;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: transform 0.15s ease;
}
.tm-weather-widget:active { transform: scale(0.98); }
.tm-weather-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  transition: opacity 0.4s ease;
}
.tm-weather-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.tm-weather-video-stack {
  overflow: hidden;
}
.tm-weather-video-stack .tm-weather-video {
  position: absolute;
  inset: 0;
}
.tm-weather-video-fast {
  opacity: 1;
  z-index: 1;
  transition: opacity 2s ease;
}
.tm-weather-video-slow {
  opacity: 0;
  transition: opacity 2s ease;
}
.tm-weather-video-stack.is-blending .tm-weather-video-fast,
.tm-weather-video-stack.is-slow .tm-weather-video-fast {
  opacity: 0;
}
.tm-weather-video-stack.is-blending .tm-weather-video-slow,
.tm-weather-video-stack.is-slow .tm-weather-video-slow {
  opacity: 1;
}
.tm-weather-video-stack.is-slow .tm-weather-video-fast {
  visibility: hidden;
}
.tm-weather-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
}
.tm-weather-location {
  font-size: 0.8125rem;
  font-weight: 600;
  opacity: 0.85;
  letter-spacing: 0.02em;
}
.tm-weather-temp-xl {
  font-size: 3.5rem;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}
.tm-weather-condition {
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.9;
  margin-top: 0.125rem;
}
.tm-weather-hilo {
  font-size: 0.875rem;
  opacity: 0.75;
  margin-top: 0.25rem;
  font-variant-numeric: tabular-nums;
}
.tm-weather-day-strip {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
}
.tm-weather-day-strip::-webkit-scrollbar { display: none; }
.tm-weather-slot {
  flex: 1;
  min-width: 3.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.25rem;
  border-radius: 0.75rem;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(8px);
}
.tm-weather-slot.now {
  background: rgba(255,255,255,0.22);
}
.tm-weather-slot-time {
  font-size: 0.6875rem;
  font-weight: 600;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.tm-weather-slot-temp {
  font-size: 0.875rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.tm-media-widget {
  position: relative;
  height: 100%;
  overflow: visible;
}
.tm-media-widget.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  cursor: pointer;
}
.tm-media-widget--compact.empty {
  padding: 0.875rem 1rem;
}
.tm-media-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.125rem;
  background: rgba(18, 18, 20, 0.92) !important;
  overflow: visible;
}
.tm-media-widget--compact .tm-media-card {
  padding: 0.875rem 1rem;
}
.tm-media-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 2;
}
.tm-media-widget--compact .tm-media-header {
  margin-bottom: 0.5rem;
}
.tm-media-header-text {
  min-width: 0;
}
.tm-media-device-name {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
.tm-media-widget--compact .tm-media-device-name {
  font-size: 0.9375rem;
}
.tm-media-device-brand {
  margin-top: 0.125rem;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.45);
}
.tm-media-widget--compact .tm-media-device-brand {
  font-size: 0.75rem;
}
.tm-media-power-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}
.tm-media-power-btn.on {
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
}
.tm-media-body {
  position: relative;
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  min-height: 0;
}
.tm-media-panel {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.75rem 0.875rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.tm-media-widget--compact .tm-media-panel {
  gap: 0.5rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.875rem;
}
.tm-media-track {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  min-width: 0;
}
.tm-media-artwork {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1) center / cover no-repeat;
}
.tm-media-widget--compact .tm-media-artwork {
  width: 2rem;
  height: 2rem;
}
.tm-media-track-meta {
  min-width: 0;
  flex: 1 1 auto;
}
.tm-media-track-title {
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-media-widget--compact .tm-media-track-title {
  font-size: 0.8125rem;
}
.tm-media-track-artist {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-media-widget--compact .tm-media-track-artist {
  font-size: 0.6875rem;
}
.tm-media-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
}
.tm-media-widget--compact .tm-media-controls {
  gap: 1rem;
}
.tm-media-control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  padding: 0;
}
.tm-media-control-play {
  width: 2.125rem;
  height: 2.125rem;
}
.tm-media-pause-bars {
  display: flex;
  gap: 0.2rem;
}
.tm-media-pause-bars span {
  width: 0.18rem;
  height: 0.875rem;
  background: currentColor;
  border-radius: 9999px;
}
.tm-media-progress {
  margin-top: auto;
  padding-top: 0.125rem;
}
.tm-media-progress-track {
  position: relative;
  height: 2px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.18);
}
.tm-media-progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.75);
}
.tm-media-progress-thumb {
  position: absolute;
  top: 50%;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: white;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
}
.tm-media-device-wrap {
  position: absolute;
  right: -0.35rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
  height: 118%;
  max-height: 7.5rem;
}
.tm-media-widget--compact .tm-media-device-wrap {
  right: -0.5rem;
  height: 125%;
  max-height: 6.25rem;
}
.tm-media-device-img {
  display: block;
  height: 100%;
  width: auto;
  max-width: none;
  object-fit: contain;
  object-position: right center;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.45));
}

.tm-weather-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.25s ease-out;
}
.tm-weather-overlay-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(8px);
}
.tm-weather-expanded {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  border-radius: 1.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 80px rgba(0,0,0,0.45);
  animation: weatherSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes weatherSlideUp {
  from { opacity: 0; transform: translateY(24px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.tm-weather-expanded-header {
  padding: 2rem 1.75rem 1.5rem;
  position: relative;
  overflow: hidden;
}
.tm-weather-expanded-header > :not(.tm-weather-bg):not(.tm-weather-video) {
  position: relative;
  z-index: 1;
}
.tm-weather-expanded-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tm-weather-expanded-temp {
  font-size: 5rem;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.05em;
  font-variant-numeric: tabular-nums;
}
.tm-weather-expanded-body {
  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(20px);
  padding: 1.25rem 1.75rem 1.75rem;
  overflow-y: auto;
  flex: 1;
}
.tm-weather-hourly {
  display: flex;
  gap: 0.625rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1.25rem;
  scrollbar-width: none;
}
.tm-weather-hourly::-webkit-scrollbar { display: none; }
.tm-weather-hourly-slot {
  flex-shrink: 0;
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  border-radius: 1rem;
  background: rgba(255,255,255,0.08);
}
.tm-weather-hourly-slot.now { background: rgba(255,255,255,0.18); }
.tm-weather-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.tm-weather-stat {
  padding: 0.875rem 1rem;
  border-radius: 1rem;
  background: rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.tm-weather-stat-label {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.55;
  font-weight: 600;
}
.tm-weather-stat-value {
  font-size: 1.125rem;
  font-weight: 600;
}
.tm-weather-daily-list {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.tm-weather-daily-row {
  display: grid;
  grid-template-columns: 3.5rem 1fr 2.5rem 2.5rem 3rem;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  font-size: 0.9375rem;
}
.tm-weather-daily-row:last-child { border-bottom: none; }
.tm-weather-daily-day { font-weight: 600; }
.tm-weather-daily-bar {
  height: 4px;
  border-radius: 2px;
  background: rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
.tm-weather-daily-bar-fill {
  position: absolute;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, #38bdf8, #fbbf24);
}
.tm-weather-daily-temp {
  text-align: right;
  font-variant-numeric: tabular-nums;
  opacity: 0.55;
  font-size: 0.875rem;
}
.tm-weather-daily-temp.high {
  font-weight: 600;
  opacity: 1;
}

.tm-settings-layout { display: grid; grid-template-columns: 1fr; gap: 2rem; max-width: 64rem; margin: 0 auto; width: 100%; }
@media (min-width: 768px) { .tm-settings-layout { grid-template-columns: 1fr 1fr; } }
.tm-settings-panel {
  background: var(--tm-settings-bg, rgba(0, 0, 0, 0.85));
  color: var(--tm-fg, white);
}
.tm-setting-group { background: var(--tm-settings-surface, var(--tm-surface-2, rgba(255, 255, 255, 0.05))); border-radius: var(--tm-radius-xl); padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--tm-settings-surface-border, var(--tm-surface-border, rgba(255, 255, 255, 0.05))); }
.tm-setting-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
}
.tm-setting-toggle input {
  width: 1.125rem;
  height: 1.125rem;
  accent-color: var(--tm-accent);
  cursor: pointer;
}
.tm-range { width: 100%; height: 0.5rem; background: var(--tm-white-20); border-radius: 0.5rem; appearance: none; -webkit-appearance: none; }
.tm-range::-webkit-slider-thumb { -webkit-appearance: none; width: 1rem; height: 1rem; background: white; border-radius: 50%; cursor: pointer; }

.tm-color-mode-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.tm-color-mode-btn {
  flex: 1 1 8rem;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--tm-white-10);
  background: var(--tm-white-05);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.tm-color-mode-btn:hover {
  background: var(--tm-white-10);
}
.tm-color-mode-btn.active {
  background: rgba(var(--tm-accent-rgb), 0.2);
  border-color: rgba(var(--tm-accent-rgb), 0.55);
  box-shadow: 0 0 0 1px rgba(var(--tm-accent-rgb), 0.15);
}
.tm-color-set-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}
@media (min-width: 640px) {
  .tm-color-set-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
.tm-color-set-btn {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
  padding: 0.625rem;
  border-radius: 0.75rem;
  border: 1px solid var(--tm-white-10);
  background: var(--tm-white-05);
  color: white;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.tm-color-set-btn:hover {
  border-color: var(--tm-white-20);
}
.tm-color-set-btn.active {
  border-color: rgba(var(--tm-accent-rgb), 0.7);
  box-shadow: 0 0 0 1px rgba(var(--tm-accent-rgb), 0.25);
}
.tm-color-set-swatch {
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.tm-color-set-label {
  font-size: 0.875rem;
  opacity: 0.85;
}
.tm-color-set-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.tm-entity-picker { position: relative; width: 100%; }
.tm-entity-picker-trigger {
  width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  color: white; cursor: pointer; text-align: left;
  display: flex; justify-content: space-between; align-items: center;
  min-height: 48px;
}
.tm-entity-picker-dropdown {
  position: absolute; top: calc(100% + 0.5rem); left: 0; right: 0; z-index: 1000;
  background: #18181b; border: 1px solid rgba(255,255,255,0.15);
  border-radius: 0.75rem; max-height: 280px; overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}
.tm-entity-picker-search {
  width: 100%; padding: 0.75rem 1rem; border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
  background: transparent; color: white; font-size: 1rem; outline: none;
}
.tm-entity-picker-list { max-height: 220px; overflow-y: auto; }
.tm-entity-picker-item {
  width: 100%; padding: 0.75rem 1rem; border: none; background: transparent;
  color: white; cursor: pointer; text-align: left;
  display: flex; flex-direction: column; gap: 0.125rem;
}
.tm-entity-picker-item:hover { background: rgba(255,255,255,0.08); }
.tm-entity-picker-item.selected { background: rgba(var(--tm-accent-rgb),0.3); }
.tm-config-slot {
  padding: 1rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  display: flex; flex-direction: column; gap: 0.75rem;
}
.tm-input {
  width: 100%; padding: 0.625rem 0.875rem; border-radius: 0.5rem;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  color: white; font-size: 0.875rem; outline: none;
}
.tm-input:focus { border-color: rgba(var(--tm-accent-rgb),0.6); }
.tm-btn-primary {
  padding: 0.75rem 1.5rem; border-radius: 0.75rem; border: none;
  background: var(--tm-accent); color: white; font-weight: 600; cursor: pointer;
  min-height: 48px;
}
.tm-btn-secondary {
  padding: 0.75rem 1.5rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
  color: white; cursor: pointer; min-height: 48px;
}
.tm-btn-block {
  width: 100%;
}
.tm-btn-secondary:disabled,
.tm-btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
@keyframes tmSpin { to { transform: rotate(360deg); } }
.tm-spin { animation: tmSpin 1s linear infinite; }
.tm-settings-scroll { flex: 1; overflow-y: auto; padding-bottom: 2rem; }
.tm-placeholder-widget {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  height: 100%; opacity: 0.4; gap: 0.5rem; text-align: center; padding: 1rem;
}
.tm-camera-widget {
  position: relative;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
.tm-camera-stream {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.tm-camera-feed {
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
  background: #111;
}
.tm-camera-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  max-width: calc(100% - 9rem);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-camera-switcher {
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
  z-index: 12;
  display: flex;
  align-items: center;
  gap: 0.125rem;
  pointer-events: auto;
}
.tm-camera-expanded .tm-camera-switcher {
  top: 0.75rem;
  right: 3.25rem;
}
.tm-camera-switch-btn {
  position: relative;
  min-width: 2.75rem;
  min-height: 2.75rem;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.tm-camera-switch-btn::before {
  content: '';
  position: absolute;
  inset: 0.125rem;
  border-radius: 9999px;
}
.tm-camera-switch-btn-visual {
  position: relative;
  z-index: 1;
  display: block;
  padding: 0.2rem 0.45rem;
  border-radius: 9999px;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.2;
  background: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.82);
  max-width: 3.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.12);
  pointer-events: none;
}
.tm-camera-switch-btn.active .tm-camera-switch-btn-visual {
  background: rgba(255, 255, 255, 0.92);
  color: #111;
  border-color: transparent;
}
.tm-camera-switch-btn:not(.active):hover .tm-camera-switch-btn-visual {
  background: rgba(0, 0, 0, 0.72);
  color: white;
}
.tm-camera-badge-icon { color: #ef4444; flex-shrink: 0; }
.tm-camera-live {
  color: #ef4444;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.tm-camera-widget--clickable {
  cursor: pointer;
}
.tm-camera-widget--clickable:active {
  transform: scale(0.995);
}
.tm-camera-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.2s ease-out;
}
.tm-camera-overlay-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(6px);
}
.tm-camera-expanded {
  position: relative;
  z-index: 1;
  width: min(96vw, 72rem);
  height: min(88vh, 48rem);
  border-radius: 1rem;
  overflow: hidden;
  background: #111;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
  animation: weatherSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.tm-camera-expanded .tm-camera-stream,
.tm-camera-expanded .tm-camera-feed {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
}
.tm-camera-expanded-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.55);
  color: white;
  cursor: pointer;
}
.tm-camera-expanded .tm-camera-badge {
  top: 0.75rem;
  left: 0.75rem;
}

/* ── Vacuum Island (Dynamic Island, white) ── */
.tm-vi-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  background: transparent;
  cursor: default;
  pointer-events: auto;
  z-index: 249;
}
.tm-vi-wrap {
  --tm-vi-bg: #ffffff;
  --tm-vi-text: #1d1d1f;
  --tm-vi-muted: #86868b;
  --tm-vi-accent: #ff6b2b;
  --tm-vi-track: #e5e5ea;
  --tm-vi-shadow: 0 8px 32px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.06);
  --tm-vi-ease: cubic-bezier(0.32, 0.72, 0, 1);
  position: absolute;
  top: var(--tm-gap);
  left: 50%;
  transform: translateX(-50%);
  z-index: 250;
  pointer-events: none;
}
.tm-vi {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  width: max-content;
  max-width: min(22rem, calc(100vw - 1.5rem));
  padding: 0.625rem 1rem;
  border-radius: 9999px;
  background: var(--tm-vi-bg);
  color: var(--tm-vi-text);
  border: none;
  cursor: pointer;
  font-family: var(--tm-font);
  box-shadow: var(--tm-vi-shadow);
  pointer-events: auto;
  overflow: hidden;
  transition:
    border-radius 0.4s var(--tm-vi-ease),
    padding 0.4s var(--tm-vi-ease);
  contain: layout style;
}
.tm-vi-expanded {
  width: min(22rem, calc(100vw - 1.5rem));
  padding: 1rem 1.25rem 1.125rem;
  border-radius: 2rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.tm-vi-bar {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  min-height: 2.25rem;
  transition: opacity 0.2s var(--tm-vi-ease), transform 0.28s var(--tm-vi-ease);
  opacity: 1;
  transform: translateZ(0);
}
.tm-vi-expanded .tm-vi-bar {
  opacity: 0;
  transform: translate3d(0, -4px, 0) scale(0.96);
  pointer-events: none;
  position: absolute;
  visibility: hidden;
}
.tm-vi-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f2f2f7;
  flex-shrink: 0;
}
.tm-vi-text {
  flex: 1;
  font-size: 0.9375rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.tm-vi-ring-wrap {
  flex-shrink: 0;
  display: flex;
}
.tm-vi-ring { display: block; }
.tm-vi-detail {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.42s var(--tm-vi-ease);
}
.tm-vi-expanded .tm-vi-detail {
  grid-template-rows: 1fr;
}
.tm-vi-detail-inner {
  overflow: hidden;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  opacity: 0;
  transform: translate3d(0, -6px, 0);
  transition: opacity 0.22s var(--tm-vi-ease) 0.1s, transform 0.32s var(--tm-vi-ease) 0.08s;
}
.tm-vi-expanded .tm-vi-detail-inner {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.tm-vi-subtitle {
  margin: 0;
  font-size: 0.75rem;
  color: var(--tm-vi-muted);
  text-align: center;
  font-weight: 400;
}
.tm-vi-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.tm-vi-timer-block {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.tm-vi-timer-label {
  font-size: 0.75rem;
  color: var(--tm-vi-muted);
  font-weight: 500;
}
.tm-vi-timer-value {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.tm-vi-progress-block { flex-shrink: 0; }
.tm-vi-progress-ring-lg {
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tm-vi-progress-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tm-vi-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.875rem;
  border-top: 1px solid #e5e5ea;
}
.tm-vi-actions { display: flex; gap: 0.625rem; }
.tm-vi-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: transform 0.15s ease, opacity 0.15s ease;
}
.tm-vi-btn:active { transform: scale(0.94); }
.tm-vi-btn-pause { background: #c67c4e; }
.tm-vi-btn-stop { background: #3a3a3c; }
.tm-vi-open {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--tm-vi-text);
}
.tm-vi-badge {
  min-width: 1.75rem;
  height: 1.75rem;
  padding: 0 0.375rem;
  border-radius: 9999px;
  background: #ff6b2b;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tm-vi-window-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.tm-vi-window-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  background: #f2f2f7;
  border-radius: 0.75rem;
}
.tm-vi-window-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}
.tm-vi-window-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--tm-vi-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-vi-window-state {
  font-size: 0.75rem;
  color: var(--tm-vi-muted);
}
.tm-vi-btn-close {
  background: #3a3a3c;
  flex-shrink: 0;
}
.tm-vi-window-alert {
  background: #fff5f5;
  box-shadow:
    var(--tm-vi-shadow),
    0 0 0 3px #ef4444,
    0 0 24px rgba(239, 68, 68, 0.55);
  animation: tm-vi-pulse-border 1.1s ease-in-out infinite;
}
.tm-vi-expanded.tm-vi-window-alert {
  background: #fff5f5;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.18),
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 0 0 3px #ef4444,
    0 0 28px rgba(239, 68, 68, 0.5);
  animation-name: tm-vi-pulse-border-expanded;
}
@keyframes tm-vi-pulse-border {
  0%, 100% {
    background: #fff5f5;
    box-shadow:
      var(--tm-vi-shadow),
      0 0 0 3px #ef4444,
      0 0 18px rgba(239, 68, 68, 0.45);
  }
  50% {
    background: #ffe4e4;
    box-shadow:
      var(--tm-vi-shadow),
      0 0 0 4px #dc2626,
      0 0 36px rgba(220, 38, 38, 0.75),
      0 0 0 14px rgba(239, 68, 68, 0.18);
  }
}
@keyframes tm-vi-pulse-border-expanded {
  0%, 100% {
    background: #fff5f5;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.18),
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 0 0 3px #ef4444,
      0 0 22px rgba(239, 68, 68, 0.45);
  }
  50% {
    background: #ffe4e4;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.18),
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 0 0 4px #dc2626,
      0 0 40px rgba(220, 38, 38, 0.75),
      0 0 0 14px rgba(239, 68, 68, 0.18);
  }
}
.tm-vi-thumb-alert {
  background: #fecaca !important;
  color: #b91c1c;
  animation: tm-vi-thumb-pulse 1.1s ease-in-out infinite;
}
.tm-vi-text-alert {
  color: #b91c1c;
  font-weight: 700;
}
.tm-vi-badge-alert {
  background: #dc2626;
  animation: tm-vi-badge-pulse 1.1s ease-in-out infinite;
}
@keyframes tm-vi-thumb-pulse {
  0%, 100% { background: #fecaca !important; }
  50% { background: #f87171 !important; }
}
@keyframes tm-vi-badge-pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.5); }
  50% { transform: scale(1.08); box-shadow: 0 0 0 6px rgba(220, 38, 38, 0.15); }
}

.tm-vi-ev-alert {
  box-shadow:
    0 0 0 1px rgba(34, 197, 94, 0.45),
    var(--tm-vi-shadow),
    0 0 20px rgba(34, 197, 94, 0.25);
  animation: tm-vi-pulse-border-ev 1.4s ease-in-out infinite;
}
.tm-vi-expanded.tm-vi-ev-alert {
  animation-name: tm-vi-pulse-border-ev-expanded;
}
@keyframes tm-vi-pulse-border-ev {
  0%, 100% {
    box-shadow:
      0 0 0 1px rgba(34, 197, 94, 0.35),
      var(--tm-vi-shadow),
      0 0 12px rgba(34, 197, 94, 0.15);
  }
  50% {
    box-shadow:
      0 0 0 2px rgba(34, 197, 94, 0.65),
      var(--tm-vi-shadow),
      0 0 28px rgba(34, 197, 94, 0.35);
  }
}
@keyframes tm-vi-pulse-border-ev-expanded {
  0%, 100% {
    box-shadow:
      0 0 0 1px rgba(34, 197, 94, 0.35),
      var(--tm-vi-shadow),
      0 0 16px rgba(34, 197, 94, 0.12);
  }
  50% {
    box-shadow:
      0 0 0 2px rgba(34, 197, 94, 0.6),
      var(--tm-vi-shadow),
      0 0 32px rgba(34, 197, 94, 0.28);
  }
}
.tm-vi-thumb-ev-alert {
  background: #dcfce7;
  color: #16a34a;
  animation: tm-vi-thumb-pulse-ev 1.4s ease-in-out infinite;
}
.tm-vi-text-ev-alert {
  color: #15803d;
  font-weight: 700;
}
.tm-vi-ring-ev {
  --tm-vi-accent: #22c55e;
  --tm-vi-track: #bbf7d0;
}
.tm-vi-ring-ev .tm-vi-progress-icon {
  color: #16a34a;
}
.tm-vi-timer-value-ev {
  color: #15803d;
}
.tm-vi-ev-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.tm-vi-timer-value-secondary {
  font-size: 1.5rem;
}
@keyframes tm-vi-thumb-pulse-ev {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.35); }
  50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
}

.tm-vi-window-row-overdue {
  background: #fecaca;
  border: 1px solid #f87171;
}
.tm-vi-window-row-overdue .tm-vi-window-name {
  color: #991b1b;
}
.tm-vi-window-row-overdue .tm-vi-window-state {
  color: #dc2626;
  font-weight: 700;
}
@media (prefers-reduced-motion: reduce) {
  .tm-vi-window-alert,
  .tm-vi-ev-alert,
  .tm-vi-thumb-alert,
  .tm-vi-thumb-ev-alert,
  .tm-vi-badge-alert,
  .tm-alarm-widget.armed,
  .tm-alarm-widget.triggered {
    animation: none;
  }
  .tm-contact-icon-badge--open,
  .tm-contact-icon-badge--moving {
    animation: none;
  }
  .tm-vi,
  .tm-vi-bar,
  .tm-vi-detail,
  .tm-vi-detail-inner {
    transition: none;
  }
}

.tm-sankey-widget {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  color: white;
  min-height: 0;
}
.tm-sankey-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  min-height: 0;
}
.tm-sankey-header {
  flex-shrink: 0;
  margin-bottom: 0.75rem;
}
.tm-sankey-header-main {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.tm-sankey-total-value {
  font-size: 2rem;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  margin-top: 0.125rem;
}
.tm-sankey-canvas {
  flex: 1;
  min-height: 0;
  position: relative;
}
.tm-sankey-canvas svg {
  display: block;
  width: 100%;
  height: 100%;
}
.tm-sankey-link {
  transition: opacity 0.15s ease;
}
.tm-sankey-node-label {
  fill: rgba(255, 255, 255, 0.95);
  font-size: 12px;
  font-weight: 600;
}
.tm-sankey-node-value {
  fill: rgba(255, 255, 255, 0.55);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
}
.tm-sankey-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: auto;
  padding-top: 0.75rem;
  flex-shrink: 0;
}
.tm-sankey-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  opacity: 0.75;
}
.tm-sankey-legend-swatch {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  flex-shrink: 0;
}

.tm-energy-tile {
  cursor: default;
  min-height: 0;
}
.tm-energy-device-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  height: 100%;
  min-height: 0;
}
.tm-energy-tile--mini {
  padding: 0.625rem 0.75rem;
  gap: 0.35rem;
}
.tm-energy-metric-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  min-height: 0;
}
.tm-energy-metric-col {
  min-width: 0;
}
.tm-energy-metric-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.6875rem;
  line-height: 1.35;
  margin-bottom: 0.2rem;
}
.tm-energy-metric-dot {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  flex-shrink: 0;
}
.tm-energy-metric-name {
  opacity: 0.85;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-energy-metric-value {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.tm-energy-device-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--tm-radius-xl);
  border: 1px solid var(--tm-white-05);
  height: 100%;
  min-height: 0;
  color: white;
}
.tm-energy-device-card--mini {
  border-radius: var(--tm-radius-lg);
}
.tm-energy-device-card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.tm-energy-device-card-bg--empty {
  background: var(--tm-white-05);
}
.tm-energy-device-card-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.2) 55%, rgba(0, 0, 0, 0.35) 100%);
  pointer-events: none;
}
.tm-energy-device-card-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem 0.875rem;
  min-height: 0;
}
.tm-energy-device-card--mini .tm-energy-device-card-content {
  padding: 0.625rem 0.75rem;
}
.tm-energy-device-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.tm-energy-device-card-icon {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.tm-energy-device-card--mini .tm-energy-device-card-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.tm-energy-device-state {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  white-space: nowrap;
}
.tm-energy-device-card-body {
  margin-top: auto;
}
.tm-ha-card {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  position: relative;
}
.tm-ha-card-slot {
  display: none;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
}
.tm-ha-card--live .tm-ha-card-slot {
  display: flex;
  flex-direction: column;
}
.tm-ha-card-slot::slotted(.tm-ha-card-host) {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.tm-ha-card-host {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  box-sizing: border-box;
}
.tm-ha-card-host.is-editing {
  pointer-events: none;
}
.tm-ha-card-host-message {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  color: white;
  font: 500 0.875rem/1.4 system-ui, sans-serif;
  background: rgba(0, 0, 0, 0.35);
  border-radius: var(--tm-radius-xl, 1.25rem);
}
.tm-ha-card-fallback {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.35rem;
  padding: 0.9rem 1rem;
}
.tm-ha-card-fallback p {
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.4;
  opacity: 0.7;
}
.tm-ha-card-fallback-kicker {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
}
.tm-ha-card-fallback-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25;
}
.tm-ha-card-yaml {
  min-height: 9rem;
  resize: vertical;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.75rem;
  line-height: 1.45;
  margin-top: 0.35rem;
}
.tm-ha-card-error {
  margin-top: 0.4rem;
  font-size: 0.75rem;
  line-height: 1.4;
  color: #fecaca;
}
.tm-ha-picker-overlay {
  position: fixed;
  inset: 0;
  z-index: 460;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.tm-ha-picker-backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.55);
}
.tm-ha-picker-panel {
  position: relative;
  z-index: 1;
  width: min(36rem, 100%);
  max-height: min(40rem, calc(100dvh - 2rem));
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: var(--tm-radius-xl);
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #f2f2f7;
  color: #111111;
  -webkit-text-fill-color: #111111;
  color-scheme: only light;
  forced-color-adjust: none;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}
.tm-ha-picker-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}
.tm-ha-picker-title {
  font-size: 1.05rem;
  font-weight: 700;
}
.tm-ha-picker-subtitle {
  margin-top: 0.15rem;
  font-size: 0.75rem;
  opacity: 0.6;
}
.tm-ha-picker-close {
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.tm-ha-picker-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.3rem;
  flex-shrink: 0;
  padding: 0.2rem;
  border-radius: 0.85rem;
  background: rgba(0, 0, 0, 0.05);
}
.tm-ha-picker-tab {
  border: none;
  background: transparent;
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  border-radius: 0.7rem;
  padding: 0.55rem 0.4rem;
  font-weight: 650;
  font-size: 0.75rem;
  cursor: pointer;
}
.tm-ha-picker-tab.active {
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.tm-ha-picker-search {
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  font-size: 0.875rem;
  outline: none;
}
.tm-ha-picker-dashboards {
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  flex-shrink: 0;
}
.tm-ha-picker-dash {
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-weight: 600;
  font-size: 0.75rem;
  cursor: pointer;
  white-space: nowrap;
}
.tm-ha-picker-dash.active {
  background: #4338ca;
  color: white;
  -webkit-text-fill-color: #ffffff;
}
.tm-ha-picker-views .tm-ha-picker-view {
  background: rgba(67, 56, 202, 0.08);
}
.tm-ha-picker-views .tm-ha-picker-view.active {
  background: #1d1d1f;
  color: white;
}
.tm-ha-picker-list {
  overflow: auto;
  min-height: 12rem;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  background: #f2f2f7;
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
}
.tm-ha-picker-list > * {
  flex-shrink: 0;
}
.tm-ha-picker-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.tm-ha-picker-group > * {
  flex-shrink: 0;
}
.tm-ha-picker-group-title {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(29, 29, 31, 0.5);
  -webkit-text-fill-color: rgba(29, 29, 31, 0.5);
  margin-bottom: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-picker-item {
  display: block;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  border: none;
  background: #ffffff;
  color: #111111 !important;
  -webkit-text-fill-color: #111111 !important;
  color-scheme: only light;
  forced-color-adjust: none;
  border-radius: 0.75rem;
  padding: 0.7rem 0.85rem;
  font-size: 0.875rem;
  line-height: 1.35;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-picker-item-rich {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  white-space: normal;
}
.tm-ha-picker-item-title {
  display: block;
  width: 100%;
  font-weight: 600;
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-picker-item-meta {
  display: block;
  width: 100%;
  font-size: 0.7rem;
  color: rgba(29, 29, 31, 0.55);
  -webkit-text-fill-color: rgba(29, 29, 31, 0.55);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-picker-item:hover {
  background: #e8e8ff;
}
.tm-ha-picker-more {
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: #1d1d1f;
  -webkit-text-fill-color: #1d1d1f;
  border-radius: 0.75rem;
  padding: 0.75rem;
  font-weight: 650;
  font-size: 0.8rem;
  cursor: pointer;
}
.tm-ha-picker-empty {
  font-size: 0.875rem;
  line-height: 1.45;
  color: rgba(29, 29, 31, 0.7);
  -webkit-text-fill-color: rgba(29, 29, 31, 0.7);
  padding: 0.5rem 0.15rem;
}
.tm-ha-picker-dash.active,
.tm-ha-picker-views .tm-ha-picker-view.active {
  -webkit-text-fill-color: #ffffff;
}
.tm-widget-inspector-section .tm-btn-block + .tm-btn-block {
  margin-top: 0.5rem;
}

.tm-ha-editor-panel {
  position: relative;
  z-index: 1;
  width: min(64rem, 100%);
  height: min(46rem, calc(100dvh - 2rem));
  display: flex;
  flex-direction: column;
  border-radius: var(--ha-dialog-border-radius, 1.5rem);
  background: var(--card-background-color, var(--ha-card-background, #ffffff));
  color: var(--primary-text-color, #1d1d1f);
  -webkit-text-fill-color: currentColor;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, system-ui, -apple-system, sans-serif));
}
.tm-ha-editor-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
}
.tm-ha-editor-heading {
  min-width: 0;
}
.tm-ha-editor-title {
  font-size: 1.25rem;
  font-weight: 500;
}
.tm-ha-editor-subtitle {
  margin-top: 0.15rem;
  font-size: 0.8rem;
  color: var(--secondary-text-color, #6b6b70);
  -webkit-text-fill-color: currentColor;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tm-ha-editor-icon-btn {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.tm-ha-editor-icon-btn:hover {
  background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
}
.tm-ha-editor-body {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}
.tm-ha-editor-pane {
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 1rem 1.25rem;
}
.tm-ha-editor-pane--form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.tm-ha-editor-pane--form > * {
  flex-shrink: 0;
}
.tm-ha-editor-pane--preview {
  background: var(--primary-background-color, #f2f2f7);
  border-left: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
}
.tm-ha-editor-pane-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--secondary-text-color, #6b6b70);
  -webkit-text-fill-color: currentColor;
  margin-bottom: 0.75rem;
}
.tm-ha-editor-slot {
  display: block;
}
.tm-ha-editor-preview {
  display: block;
}
.tm-ha-editor-preview-card {
  display: block;
  width: 100%;
}
.tm-ha-editor-note {
  font-size: 0.875rem;
  line-height: 1.45;
  color: var(--secondary-text-color, #6b6b70);
  -webkit-text-fill-color: currentColor;
}
.tm-ha-editor-yaml {
  width: 100%;
  min-height: 22rem;
  flex: 1 1 auto;
  resize: vertical;
  padding: 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  background: var(--code-editor-background-color, var(--secondary-background-color, #f7f7f9));
  color: var(--primary-text-color, #1d1d1f);
  -webkit-text-fill-color: currentColor;
  font: 0.8125rem/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  outline: none;
}
.tm-ha-editor-error {
  font-size: 0.8rem;
  color: var(--error-color, #db4437);
  -webkit-text-fill-color: currentColor;
}
.tm-ha-editor-footer {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
}
.tm-ha-editor-actions {
  display: flex;
  gap: 0.5rem;
}
.tm-ha-editor-text-btn,
.tm-ha-editor-primary-btn {
  min-height: 2.5rem;
  padding: 0 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}
.tm-ha-editor-text-btn {
  border: none;
  background: transparent;
  color: var(--primary-color, #03a9f4);
  -webkit-text-fill-color: currentColor;
}
.tm-ha-editor-text-btn:hover {
  background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
}
.tm-ha-editor-primary-btn {
  border: none;
  background: var(--primary-color, #03a9f4);
  color: var(--text-primary-color, #ffffff);
  -webkit-text-fill-color: currentColor;
}
.tm-ha-native-picker-body {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
}
.tm-ha-native-picker-note {
  padding: 1rem 1.25rem;
}
.tm-ha-native-picker-slot {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.tm-ha-native-picker-slot > hui-card-picker {
  flex: 1 1 auto;
  min-height: 0;
}
@media (max-width: 760px) {
  .tm-ha-editor-body {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) auto;
  }
  .tm-ha-editor-pane--preview {
    border-left: none;
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    max-height: 40%;
  }
}

/* —— Schwarz bunt: pastel cards on black —— */
[data-tm-theme="blackColorful"] .tm-card,
[data-tm-theme="blackColorful"] .tm-quick-action,
[data-tm-theme="blackColorful"] .tm-sensor-widget,
[data-tm-theme="blackColorful"] .tm-alarm-widget,
[data-tm-theme="blackColorful"] .tm-contact-widget,
[data-tm-theme="blackColorful"] .tm-brightness-action,
[data-tm-theme="blackColorful"] .tm-cover-action {
  background: var(--tm-surface);
  color: var(--tm-tile-fg);
  border: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border-radius: var(--tm-radius-xl, 2rem);
}

[data-tm-theme="blackColorful"] .tm-scene-btn {
  color: var(--tm-tile-fg, #1a1a1a);
  border: none;
  border-radius: var(--tm-radius-xl, 2rem);
}

[data-tm-theme="blackColorful"] .tm-scene-btn.empty,
[data-tm-theme="blackColorful"] .tm-quick-action.empty {
  background: transparent;
  color: rgba(255, 255, 255, 0.72);
  border: 1px dashed rgba(255, 255, 255, 0.28);
}

[data-tm-theme="blackColorful"] .tm-scene-gradient {
  opacity: 1;
}

[data-tm-theme="blackColorful"] .tm-scene-btn .tm-scene-icon {
  background: rgba(0, 0, 0, 0.12);
  color: inherit;
}

[data-tm-theme="blackColorful"] .tm-scene-btn--pastel-active {
  box-shadow: inset 0 0 0 2.5px var(--tm-tile-fg, #1a1a1a);
}

.tm-contact-card {
  container: tm-contact / size;
  cursor: default;
  padding: 0;
  overflow: hidden;
  --tm-contact-strong: #4cd97b;
  --tm-contact-muted: color-mix(in srgb, currentColor 55%, transparent);
  --tm-contact-chip: color-mix(in srgb, currentColor 7%, transparent);
}
.tm-contact-card:active { transform: none; }
.tm-contact-card-inner {
  --tm-contact-pad: clamp(0.85rem, 6cqmin, 2rem);
  height: 100%;
  box-sizing: border-box;
  padding: var(--tm-contact-pad);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    "head art"
    "hero art"
    "stats stats";
  column-gap: clamp(0.5rem, 3cqw, 1.5rem);
  row-gap: clamp(0.5rem, 4cqh, 1.4rem);
}
.tm-contact-card-head { grid-area: head; min-width: 0; }
.tm-contact-card-title {
  --tm-contact-title-room: 78cqw;
  font-size: max(0.95rem, min(clamp(1rem, 8cqmin, 2.5rem), calc(var(--tm-contact-title-room) / var(--tm-contact-title-chars, 10))));
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-contact-card-type {
  margin-top: 0.3em;
  font-size: clamp(0.8rem, 4.4cqmin, 1.45rem);
  color: var(--tm-contact-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-contact-card-hero { grid-area: hero; align-self: end; min-width: 0; }
.tm-contact-card-state {
  --tm-contact-state-room: 82cqw;
  font-size: max(1.2rem, min(clamp(1.8rem, 17cqmin, 6rem), calc(var(--tm-contact-state-room) / var(--tm-contact-state-chars, 6))));
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.035em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-contact-card--active .tm-contact-card-state,
.tm-contact-card--active .tm-contact-card-stat-value--state {
  color: var(--tm-contact-strong);
}
.tm-contact-card--unavailable .tm-contact-card-state { color: var(--tm-contact-muted); }
.tm-contact-card-since {
  margin-top: 0.4em;
  font-size: clamp(0.8rem, 4.4cqmin, 1.45rem);
  color: var(--tm-contact-muted);
  white-space: nowrap;
}
.tm-contact-card-art {
  grid-area: art;
  min-width: 0;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.tm-contact-card-art img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 15rem;
  object-fit: contain;
  user-select: none;
}
.tm-contact-card-stats {
  grid-area: stats;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr) minmax(0, 1.1fr);
  gap: clamp(0.4rem, 2cqw, 0.9rem);
}
.tm-contact-card-stat {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25em;
  padding: min(clamp(0.6rem, 3.4cqmin, 1.15rem), 2.6cqw) min(clamp(0.7rem, 4cqmin, 1.4rem), 3cqw);
  border-radius: clamp(0.75rem, 3.5cqmin, 1.25rem);
  background: var(--tm-contact-chip);
  color: inherit;
  font: inherit;
  text-align: left;
  border: 0;
}
.tm-contact-card-stat--history {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  cursor: pointer;
}
.tm-contact-card-stat--history:active { transform: scale(0.98); }
.tm-contact-card-stat-text {
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 0.35em;
}
.tm-contact-card-stat-label {
  font-size: max(0.72rem, min(clamp(0.75rem, 3.8cqmin, 1.2rem), 3cqw));
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-contact-card-stat-value {
  font-size: max(0.72rem, min(clamp(0.75rem, 3.8cqmin, 1.2rem), 3cqw));
  color: var(--tm-contact-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-variant-numeric: tabular-nums;
}
.tm-contact-card-stat-value--state { font-weight: 500; color: inherit; }
.tm-contact-card-stat-chevron {
  flex: none;
  width: clamp(1rem, 4.5cqmin, 1.5rem);
  height: clamp(1rem, 4.5cqmin, 1.5rem);
  color: var(--tm-contact-muted);
}
.tm-contact-card-timeline {
  position: relative;
  display: block;
  height: clamp(0.45rem, 2.2cqmin, 0.75rem);
  border-radius: 999px;
  background: color-mix(in srgb, currentColor 10%, transparent);
  overflow: hidden;
}
.tm-contact-card-timeline-on {
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background: var(--tm-contact-strong);
}
@container tm-contact (max-width: 30rem) {
  .tm-contact-card-stats { grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); }
  .tm-contact-card-stat--status { display: none; }
}
@container tm-contact (max-height: 16rem) {
  .tm-contact-card-stats { display: none; }
  .tm-contact-card-inner {
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-areas: "head art" "hero art";
  }
}
@container tm-contact (max-width: 17rem) {
  .tm-contact-card-art { display: none; }
  .tm-contact-card-inner { grid-template-columns: minmax(0, 1fr); grid-template-areas: "head" "hero" "stats"; }
  .tm-contact-card-state { --tm-contact-state-room: 150cqw; }
  .tm-contact-card-title { --tm-contact-title-room: 170cqw; }
  .tm-contact-card-stat--changed { display: none; }
  .tm-contact-card-stats { grid-template-columns: minmax(0, 1fr); }
}
@container tm-contact (max-width: 17rem) and (max-height: 16rem) {
  .tm-contact-card-inner { grid-template-areas: "head" "hero"; }
}
@container tm-contact (max-aspect-ratio: 4 / 5) and (min-height: 26rem) {
  .tm-contact-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto auto;
    grid-template-areas: "head" "art" "hero" "stats";
  }
  .tm-contact-card-state { --tm-contact-state-room: 150cqw; }
  .tm-contact-card-title { --tm-contact-title-room: 170cqw; }
  .tm-contact-card-stats { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .tm-contact-card-stat--status { display: none; }
  .tm-contact-card-stat-label,
  .tm-contact-card-stat-value { font-size: clamp(0.7rem, 4cqw, 1.2rem); }
  .tm-contact-card-stat { padding: clamp(0.55rem, 3cqw, 1.1rem) clamp(0.6rem, 3.6cqw, 1.3rem); }
}
[data-tm-theme="light"] .tm-contact-card,
[data-tm-theme="colorful"] .tm-contact-card {
  --tm-contact-strong: #1f9d55;
}
[data-tm-theme="blackColorful"] .tm-contact-card {
  --tm-contact-strong: oklch(from var(--tm-surface) calc(1.37 - l) min(calc(c * 2.2 + 0.05), 0.16) h);
  --tm-contact-chip: rgba(255, 255, 255, 0.42);
  --tm-contact-muted: color-mix(in srgb, var(--tm-tile-fg, #1a1a1a) 55%, transparent);
  background: radial-gradient(110% 90% at 80% 15%, rgba(255, 255, 255, 0.4), transparent 60%), var(--tm-surface);
}

.tm-weather-card {
  container: tm-weather / size;
  --tm-wx-fg: #fff;
  --tm-wx-muted: rgba(255, 255, 255, 0.58);
  --tm-wx-chip: rgba(255, 255, 255, 0.06);
  --tm-wx-divider: rgba(255, 255, 255, 0.09);
  --tm-wx-glow: 96, 165, 250;
  --tm-wx-high: #f4906b;
  --tm-wx-low: #64a8f2;
  color: var(--tm-wx-fg);
  background:
    radial-gradient(85% 65% at 85% 8%, rgba(var(--tm-wx-glow), 0.26), transparent 70%),
    var(--tm-surface, #1c1c1e);
}
.tm-weather-card--sunny { --tm-wx-glow: 250, 204, 21; }
.tm-weather-card--cloudy { --tm-wx-glow: 148, 163, 184; }
.tm-weather-card--rain { --tm-wx-glow: 59, 130, 246; }
.tm-weather-card--snow { --tm-wx-glow: 226, 232, 240; }
.tm-weather-card--night { --tm-wx-glow: 139, 92, 246; }
.tm-weather-card-inner {
  --tm-wx-pad: clamp(0.85rem, 5.5cqmin, 2rem);
  height: 100%;
  box-sizing: border-box;
  padding: var(--tm-wx-pad);
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 3cqh, 1.4rem);
  min-height: 0;
}
.tm-weather-card-summary {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);
  grid-template-areas: "head art" "now art";
  column-gap: clamp(0.5rem, 3cqw, 1.5rem);
}
.tm-weather-card-head { grid-area: head; min-width: 0; }
.tm-weather-card-title {
  font-size: clamp(1rem, 7cqmin, 2.4rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.015em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-weather-card-location {
  display: flex;
  align-items: center;
  gap: 0.3em;
  margin-top: 0.35em;
  font-size: clamp(0.78rem, 3.8cqmin, 1.3rem);
  color: var(--tm-wx-muted);
  min-width: 0;
}
.tm-weather-card-location span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tm-weather-card-location-icon { width: 1em; height: 1em; flex: none; }
.tm-weather-card-now {
  grid-area: now;
  align-self: end;
  min-width: 0;
}
.tm-weather-card-temp {
  font-size: clamp(2.4rem, 22cqmin, 8rem);
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -0.05em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.tm-weather-card-condition {
  margin-top: 0.35em;
  font-size: clamp(0.8rem, 4.2cqmin, 1.45rem);
  color: var(--tm-wx-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-weather-card-hilo {
  display: flex;
  gap: 1em;
  margin-top: 0.45em;
  font-size: clamp(0.85rem, 4.4cqmin, 1.5rem);
  font-variant-numeric: tabular-nums;
}
.tm-weather-card-hilo-item { display: inline-flex; align-items: center; gap: 0.3em; }
.tm-weather-card-hilo-item svg { width: 1em; height: 1em; }
.tm-weather-card-hilo-item--high svg { color: var(--tm-wx-high); }
.tm-weather-card-hilo-item--low svg { color: var(--tm-wx-low); }
.tm-weather-card-art {
  grid-area: art;
  min-width: 0;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.tm-weather-card-art img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 17rem;
  object-fit: contain;
  filter: drop-shadow(0 0.8rem 1.4rem rgba(var(--tm-wx-glow), 0.25));
  user-select: none;
}
.tm-weather-card-forecast {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 3cqh, 1.25rem);
  min-width: 0;
}
.tm-weather-card-section {
  border-top: 1px solid var(--tm-wx-divider);
  padding-top: clamp(0.5rem, 2.6cqh, 1.1rem);
  min-width: 0;
}
.tm-weather-card-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: clamp(0.4rem, 2.2cqh, 0.9rem);
  font-size: clamp(0.85rem, 3.6cqmin, 1.3rem);
  font-weight: 500;
}
.tm-weather-card-section-chevron {
  width: 1.1em;
  height: 1.1em;
  color: var(--tm-wx-muted);
}
.tm-weather-card-tiles {
  display: grid;
  grid-template-columns: repeat(var(--tm-weather-tiles, 4), minmax(0, 1fr));
  gap: 0.6rem;
}
.tm-weather-card-tile {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.15rem, 0.8cqh, 0.4rem);
  padding: clamp(0.45rem, 2cqh, 0.95rem) 0.25rem;
  border-radius: clamp(0.7rem, 3cqmin, 1.15rem);
  background: var(--tm-wx-chip);
}
.tm-weather-card-tile-label {
  font-size: clamp(0.72rem, 3cqmin, 1.05rem);
  color: var(--tm-wx-muted);
  white-space: nowrap;
}
.tm-weather-card-tile-label--day { color: inherit; font-weight: 500; }
.tm-weather-card-tile-icon {
  width: clamp(1.8rem, 9cqmin, 3.4rem);
  height: clamp(1.8rem, 9cqmin, 3.4rem);
  object-fit: contain;
  user-select: none;
}
.tm-weather-card-tile-temp {
  font-size: clamp(0.9rem, 4.4cqmin, 1.5rem);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.tm-weather-card-tile-low {
  margin-top: -0.15rem;
  font-size: clamp(0.72rem, 3.2cqmin, 1.1rem);
  color: var(--tm-wx-muted);
  font-variant-numeric: tabular-nums;
}
@container tm-weather (max-aspect-ratio: 6 / 5) and (max-height: 38rem) {
  .tm-weather-card-section--days { display: none; }
}
@container tm-weather (max-aspect-ratio: 6 / 5) and (max-height: 25rem) {
  .tm-weather-card-forecast { display: none; }
}
@container tm-weather (min-aspect-ratio: 6 / 5) {
  .tm-weather-card-inner { flex-direction: row; }
  .tm-weather-card-summary { flex: 0 0 46%; }
  .tm-weather-card-forecast {
    flex: 1 1 auto;
    justify-content: center;
    padding-left: clamp(0.75rem, 3cqw, 1.75rem);
    border-left: 1px solid var(--tm-wx-divider);
  }
  .tm-weather-card-section:first-child { border-top: 0; padding-top: 0; }
}
@container tm-weather (min-aspect-ratio: 6 / 5) and (max-height: 22rem) {
  .tm-weather-card-section--days { display: none; }
}
@container tm-weather (min-aspect-ratio: 6 / 5) and (max-width: 30rem) {
  .tm-weather-card-forecast { display: none; }
  .tm-weather-card-summary { flex: 1 1 auto; }
}
@container tm-weather (max-width: 15rem) {
  .tm-weather-card-summary { grid-template-columns: minmax(0, 1fr); grid-template-areas: "head" "now"; }
  .tm-weather-card-art { display: none; }
}
@container tm-weather (max-height: 9rem) {
  .tm-weather-card-hilo { display: none; }
}
[data-tm-theme="light"] .tm-weather-card.tm-weather-card,
[data-tm-theme="blackColorful"] .tm-weather-card.tm-weather-card {
  --tm-wx-fg: #1a1a1a;
  --tm-wx-muted: rgba(26, 26, 26, 0.55);
  --tm-wx-chip: rgba(255, 255, 255, 0.45);
  --tm-wx-divider: rgba(26, 26, 26, 0.08);
  --tm-wx-high: #ef8354;
  --tm-wx-low: #4f9be8;
  --tm-wx-bg: linear-gradient(165deg, #eaf3fd 0%, #d2e4f8 100%);
  color: var(--tm-wx-fg);
  background:
    radial-gradient(70% 55% at 78% 22%, rgba(255, 255, 255, 0.6), transparent 70%),
    var(--tm-wx-bg);
}
[data-tm-theme="light"] .tm-weather-card--sunny,
[data-tm-theme="blackColorful"] .tm-weather-card--sunny { --tm-wx-bg: linear-gradient(165deg, #fdf2d6 0%, #dbeafb 75%); }
[data-tm-theme="light"] .tm-weather-card--cloudy,
[data-tm-theme="blackColorful"] .tm-weather-card--cloudy { --tm-wx-bg: linear-gradient(165deg, #eef2f7 0%, #d4dde9 100%); }
[data-tm-theme="light"] .tm-weather-card--rain,
[data-tm-theme="blackColorful"] .tm-weather-card--rain { --tm-wx-bg: linear-gradient(165deg, #e0e8f2 0%, #bccee2 100%); }
[data-tm-theme="light"] .tm-weather-card--snow,
[data-tm-theme="blackColorful"] .tm-weather-card--snow { --tm-wx-bg: linear-gradient(165deg, #f6f9fc 0%, #dce5ef 100%); }
[data-tm-theme="light"] .tm-weather-card--night,
[data-tm-theme="blackColorful"] .tm-weather-card--night { --tm-wx-bg: linear-gradient(165deg, #e7e2f8 0%, #c8c2ea 100%); }

.tm-ev-card {
  container: tm-ev / size;
  cursor: default;
  padding: 0;
  overflow: hidden;
  --tm-ev-green: #34c759;
  --tm-ev-green-soft: #8fe3a8;
  --tm-ev-chip: color-mix(in srgb, currentColor 7%, transparent);
  --tm-ev-track: color-mix(in srgb, currentColor 8%, transparent);
  --tm-ev-muted: color-mix(in srgb, currentColor 55%, transparent);
}
.tm-ev-card:active { transform: none; }
.tm-ev-card-inner {
  --tm-ev-pad: clamp(0.85rem, 5.5cqmin, 1.9rem);
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: var(--tm-ev-pad);
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  grid-template-rows: auto minmax(0, 1fr) auto auto;
  grid-template-areas:
    "head art"
    "hero art"
    "bar bar"
    "stats stats";
  column-gap: clamp(0.5rem, 3cqw, 1.5rem);
  row-gap: clamp(0.5rem, 3.4cqh, 1.25rem);
}
.tm-ev-card-head { grid-area: head; min-width: 0; position: relative; z-index: 1; }
.tm-ev-card-title {
  font-size: clamp(1rem, 7.5cqmin, 2.4rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.015em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-ev-card-status {
  display: flex;
  align-items: center;
  gap: 0.35em;
  margin-top: 0.4em;
  font-size: clamp(0.8rem, 4cqmin, 1.3rem);
  color: var(--tm-ev-muted);
  white-space: nowrap;
}
.tm-ev-card-status-icon {
  width: 1.15em;
  height: 1.15em;
  flex: none;
  color: var(--tm-ev-green);
}
.tm-ev-card-hero {
  grid-area: hero;
  min-width: 0;
  align-self: end;
  position: relative;
  z-index: 1;
}
.tm-ev-card-value {
  font-size: clamp(2rem, 17cqmin, 6rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.tm-ev-card-unit {
  margin-left: 0.15em;
  font-size: 0.32em;
  font-weight: 500;
  letter-spacing: 0;
}
.tm-ev-card-caption {
  margin-top: 0.45em;
  font-size: clamp(0.8rem, 4cqmin, 1.3rem);
  color: var(--tm-ev-muted);
  white-space: nowrap;
}
.tm-ev-card-art {
  grid-area: art;
  min-width: 0;
  min-height: 0;
  margin: calc(var(--tm-ev-pad) * -1) calc(var(--tm-ev-pad) * -1) 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  pointer-events: none;
}
.tm-ev-card-art img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right bottom;
  user-select: none;
}
.tm-ev-card-bar {
  grid-area: bar;
  position: relative;
  height: clamp(1.4rem, 8cqh, 2.6rem);
}
.tm-ev-card-bar-track {
  height: 100%;
  border-radius: 999px;
  background: var(--tm-ev-track);
  overflow: hidden;
}
.tm-ev-card-bar-fill {
  height: 100%;
  min-width: 2.5rem;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--tm-ev-green-soft), var(--tm-ev-green));
  transition: width 600ms ease;
}
.tm-ev-card--off .tm-ev-card-bar-fill,
.tm-ev-card--idle .tm-ev-card-bar-fill {
  filter: saturate(0.55);
}
.tm-ev-card-bar-label {
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%);
  font-size: clamp(0.75rem, 3.4cqmin, 1.15rem);
  color: var(--tm-ev-muted);
  font-variant-numeric: tabular-nums;
}
.tm-ev-card-stats {
  grid-area: stats;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: clamp(0.4rem, 2cqw, 0.9rem);
}
.tm-ev-card-stat {
  min-width: 0;
  padding: min(clamp(0.55rem, 3.2cqmin, 1.15rem), 2.4cqw);
  border-radius: clamp(0.75rem, 3.5cqmin, 1.25rem);
  background: var(--tm-ev-chip);
  display: flex;
  flex-direction: column;
}
.tm-ev-card-stat-icon {
  width: clamp(1rem, 5cqmin, 1.75rem);
  height: clamp(1rem, 5cqmin, 1.75rem);
  color: var(--tm-ev-muted);
  margin-bottom: clamp(0.35rem, 3cqmin, 1rem);
}
.tm-ev-card-stat-value {
  font-size: max(0.8rem, min(clamp(0.85rem, 4.6cqmin, 1.45rem), 3.2cqw));
  font-weight: 600;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-variant-numeric: tabular-nums;
}
.tm-ev-card-stat-label {
  margin-top: 0.2em;
  font-size: max(0.68rem, min(clamp(0.7rem, 3.4cqmin, 1.1rem), 2.5cqw));
  color: var(--tm-ev-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@container tm-ev (max-aspect-ratio: 4 / 5) and (min-height: 28rem) {
  .tm-ev-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto auto auto;
    grid-template-areas: "head" "art" "hero" "bar" "stats";
  }
  .tm-ev-card-art {
    margin: 0 calc(var(--tm-ev-pad) * -1);
    justify-content: center;
  }
  .tm-ev-card-art img { object-position: center bottom; }
  .tm-ev-card-value { font-size: clamp(2rem, 20cqw, 6rem); }
  .tm-ev-card-stats { grid-auto-flow: row; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-columns: auto; }
  .tm-ev-card-stat-value { font-size: clamp(0.9rem, 6cqw, 1.45rem); }
  .tm-ev-card-stat-label { font-size: clamp(0.72rem, 4.4cqw, 1.1rem); }
  .tm-ev-card-stat { padding: clamp(0.6rem, 4cqw, 1.15rem); }
}
@container tm-ev (max-aspect-ratio: 4 / 5) and (max-height: 40rem) {
  .tm-ev-card-stat:nth-child(n + 3) { display: none; }
}
@container tm-ev (max-width: 32rem) and (min-aspect-ratio: 4 / 5) {
  .tm-ev-card-stat:nth-child(4) { display: none; }
  .tm-ev-card-stat-value { font-size: max(0.8rem, min(clamp(0.85rem, 4.6cqmin, 1.45rem), 4.2cqw)); }
  .tm-ev-card-stat-label { font-size: max(0.68rem, min(clamp(0.7rem, 3.4cqmin, 1.1rem), 3.2cqw)); }
}
@container tm-ev (max-height: 19rem) {
  .tm-ev-card-stat-icon { display: none; }
}
@container tm-ev (max-height: 15rem) {
  .tm-ev-card-stats { display: none; }
  .tm-ev-card-inner {
    grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-areas: "head art" "hero art" "bar bar";
  }
}
@container tm-ev (max-height: 9.5rem) {
  .tm-ev-card-bar,
  .tm-ev-card-caption { display: none; }
  .tm-ev-card-inner {
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-areas: "head art" "hero art";
  }
}
@container tm-ev (max-width: 20rem) {
  .tm-ev-card-art { display: none; }
  .tm-ev-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "head" "hero" "bar" "stats";
  }
  .tm-ev-card-stat:nth-child(n + 3) { display: none; }
}
@container tm-ev (max-width: 20rem) and (max-height: 15rem) {
  .tm-ev-card-inner { grid-template-areas: "head" "hero" "bar"; }
}
@container tm-ev (max-width: 20rem) and (max-height: 9.5rem) {
  .tm-ev-card-inner { grid-template-areas: "head" "hero"; }
}
[data-tm-theme="light"] .tm-ev-card,
[data-tm-theme="colorful"] .tm-ev-card {
  --tm-ev-green: #23b04b;
}
[data-tm-theme="blackColorful"] .tm-ev-card {
  --tm-ev-green: #2fbf5b;
  --tm-ev-green-soft: #a6ecbc;
  --tm-ev-chip: rgba(255, 255, 255, 0.42);
  --tm-ev-track: rgba(255, 255, 255, 0.55);
  --tm-ev-muted: color-mix(in srgb, var(--tm-tile-fg, #1a1a1a) 55%, transparent);
  background: radial-gradient(120% 90% at 75% 10%, rgba(255, 255, 255, 0.45), transparent 60%), var(--tm-surface);
}

[data-tm-theme="blackColorful"] .tm-weather-widget,
[data-tm-theme="blackColorful"] .tm-weather-widget--pastel {
  color: var(--tm-tile-fg, #1a1a1a);
  background: var(--tm-surface);
}

[data-tm-theme="blackColorful"] .tm-media-card {
  background: var(--tm-surface) !important;
  color: var(--tm-tile-fg, #1a1a1a);
}

[data-tm-theme="blackColorful"] .tm-media-device-brand,
[data-tm-theme="blackColorful"] .tm-media-track-artist {
  color: var(--tm-tile-fg, #1a1a1a);
  opacity: 0.5;
}

[data-tm-theme="blackColorful"] .tm-media-power-btn,
[data-tm-theme="blackColorful"] .tm-media-control-btn {
  color: var(--tm-tile-fg, #1a1a1a);
}

[data-tm-theme="blackColorful"] .tm-media-panel {
  background: color-mix(in srgb, var(--tm-tile-fg, #1a1a1a) 10%, transparent);
  border-color: transparent;
}

[data-tm-theme="blackColorful"] .tm-brightness-fill {
  background: linear-gradient(to top, rgba(26, 26, 26, 0.28), rgba(26, 26, 26, 0.06));
}

[data-tm-theme="blackColorful"] .tm-brightness-header .tm-font-bold,
[data-tm-theme="blackColorful"] .tm-brightness-header .tm-text-xs {
  color: var(--tm-tile-fg, #1a1a1a);
}

[data-tm-theme="blackColorful"] .tm-brightness-action state-icon,
[data-tm-theme="blackColorful"] .tm-brightness-action ha-icon,
[data-tm-theme="blackColorful"] .tm-brightness-header state-icon,
[data-tm-theme="blackColorful"] .tm-brightness-header ha-icon,
[data-tm-theme="blackColorful"] .tm-cover-header state-icon,
[data-tm-theme="blackColorful"] .tm-cover-header ha-icon {
  color: var(--tm-tile-fg, #1a1a1a) !important;
}

[data-tm-theme="blackColorful"] .tm-cover-card {
  --tm-cover-stop-fg: #ffffff;
}

[data-tm-theme="blackColorful"] .tm-cover-fill {
  background: linear-gradient(to top, rgba(26, 26, 26, 0.28), rgba(26, 26, 26, 0.06));
}

[data-tm-theme="blackColorful"] .tm-sankey-widget,
[data-tm-theme="blackColorful"] .tm-energy-device-card {
  background: var(--tm-surface);
  color: var(--tm-tile-fg, #1a1a1a);
  border: none;
  backdrop-filter: none;
}

[data-tm-theme="blackColorful"] .tm-btn-round {
  background: #1a1a1a;
  color: #ffffff;
}

[data-tm-theme="blackColorful"] .tm-btn-round:hover {
  background: #333333;
}

[data-tm-theme="blackColorful"] .tm-overlay-gradient {
  display: none;
}

[data-tm-theme="blackColorful"] .tm-title-xl,
[data-tm-theme="blackColorful"] .tm-title-lg {
  text-shadow: none !important;
}

.tm-ssx {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #000;
  color: white;
}
.tm-ssx-photo {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}
.tm-ssx-shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0) 22%, rgba(0, 0, 0, 0) 58%, rgba(0, 0, 0, 0.55) 100%);
  pointer-events: none;
}
.tm-ssx-clock {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6vh 4vw 2vh;
  text-align: center;
}
.tm-ssx-time {
  margin: 0;
  font-size: clamp(7.5rem, 22vw, 16rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 0.82;
  color: rgba(255, 255, 255, 0.86);
  font-variant-numeric: tabular-nums;
  text-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
}
.tm-ssx-date {
  margin: 1.25rem 0 0;
  font-size: clamp(1.35rem, 2.6vw, 2.15rem);
  font-weight: 500;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.82);
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
}
.tm-ssx-dock {
  position: relative;
  z-index: 2;
  flex: 0 0 auto;
  height: min(26vh, 220px);
  margin: 0 2.25vw 2.4vh;
  padding: 0.7rem;
  display: flex;
  gap: 0.7rem;
  border-radius: 1.85rem;
  background: rgba(12, 12, 16, 0.38);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow:
    0 22px 50px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(28px) saturate(1.45);
  -webkit-backdrop-filter: blur(28px) saturate(1.45);
  overflow: hidden;
}
.tm-ssx-tile {
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.85rem 1rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}
.tm-ssx-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.15rem;
}
.tm-ssx-kicker {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
}
.tm-ssx-label {
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.88);
}
.tm-ssx-value {
  font-size: clamp(2.6rem, 4.2vw, 3.6rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.9;
  font-variant-numeric: tabular-nums;
}
.tm-ssx-value span {
  font-size: 0.55em;
  font-weight: 500;
  margin-left: 0.05em;
  opacity: 0.8;
}
.tm-ssx-title {
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-ssx-sub {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.68);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-ssx-icon {
  flex: 0 0 auto;
  width: 4.25rem;
  height: 4.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
.tm-ssx-art {
  flex: 0 0 auto;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 1.05rem;
  background: rgba(255, 255, 255, 0.12) center / cover no-repeat;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
}
.tm-ssx-progress {
  margin-top: 0.55rem;
  width: 100%;
  max-width: 9rem;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  overflow: hidden;
}
.tm-ssx-progress > span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.88);
}
.tm-ssx-avatars {
  display: flex;
  align-items: center;
  padding-left: 0.15rem;
}
.tm-ssx-avatar {
  width: 3.15rem;
  height: 3.15rem;
  margin-left: -0.55rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.16);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
}
.tm-ssx-avatar:first-child { margin-left: 0; }
.tm-ssx-avatar.away {
  opacity: 0.38;
  filter: grayscale(0.8);
}
.tm-ssx-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tm-ssx-tile--people,
.tm-ssx-tile--stat {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.35rem;
}
.tm-ssx-tile--people .tm-ssx-sub,
.tm-ssx-tile--stat .tm-ssx-sub {
  max-width: 100%;
}
@media (max-height: 760px) {
  .tm-ssx-time { font-size: clamp(5.5rem, 16vw, 9rem); }
  .tm-ssx-dock { height: min(24vh, 168px); }
  .tm-ssx-art { width: 3.4rem; height: 3.4rem; }
  .tm-ssx-value { font-size: 1.7rem; }
}
[data-tone="red"] { --tm-tone: #ef4444; --tm-tone-pastel: #F4978E; }
[data-tone="orange"] { --tm-tone: #f97316; --tm-tone-pastel: #F7AE6C; }
[data-tone="yellow"] { --tm-tone: #eab308; --tm-tone-pastel: #F6D85A; }
[data-tone="green"] { --tm-tone: #22c55e; --tm-tone-pastel: #9EE3B2; }
[data-tone="blue"] { --tm-tone: #3b82f6; --tm-tone-pastel: #9DC4F5; }
[data-tone="purple"] { --tm-tone: #a855f7; --tm-tone-pastel: #CFA6F7; }

.tm-history-card {
  container: tm-history / size;
  cursor: default;
  padding: 0;
  overflow: hidden;
  --tm-history-accent: var(--tm-accent);
  --tm-history-muted: color-mix(in srgb, currentColor 55%, transparent);
  --tm-history-chip: color-mix(in srgb, currentColor 7%, transparent);
  --tm-history-pill: color-mix(in srgb, currentColor 9%, transparent);
  --tm-history-track: color-mix(in srgb, var(--tm-history-accent) 20%, transparent);
  transition: background-color 0.3s ease;
}
.tm-history-card:active { transform: none; }
.tm-history-card-inner {
  --tm-history-pad: clamp(0.85rem, 6cqmin, 2rem);
  height: 100%;
  box-sizing: border-box;
  padding: var(--tm-history-pad);
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.6fr);
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    "head head"
    "hero chart"
    "stats stats";
  column-gap: clamp(0.75rem, 4cqw, 2.5rem);
  row-gap: clamp(0.5rem, 4cqh, 1.4rem);
}
.tm-history-card.is-loading .tm-history-card-chart { opacity: 0.55; }
.tm-history-card-head {
  grid-area: head;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}
.tm-history-card-heading { min-width: 0; }
.tm-history-card-title {
  --tm-history-title-room: 62cqw;
  font-size: max(0.95rem, min(clamp(1rem, 8cqmin, 2.6rem), calc(var(--tm-history-title-room) / var(--tm-history-title-chars, 10))));
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-history-card-sub {
  margin-top: 0.3em;
  font-size: clamp(0.8rem, 4.4cqmin, 1.45rem);
  color: var(--tm-history-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-history-card-range {
  position: relative;
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
  padding: 0.55em 0.9em;
  border-radius: 0.9em;
  background: var(--tm-history-pill);
  font-size: max(0.75rem, min(clamp(0.75rem, 3.8cqmin, 1.15rem), 3.2cqw));
  font-weight: 500;
  white-space: nowrap;
}
.tm-history-card-range select {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  font: inherit;
}
.tm-history-card-range select:disabled { cursor: default; }
.tm-history-card-range-chevron { width: 1.1em; height: 1.1em; }
.tm-history-card-hero {
  grid-area: hero;
  align-self: center;
  min-width: 0;
}
.tm-history-card-value {
  --tm-history-hero-room: 30cqw;
  display: flex;
  align-items: baseline;
  gap: 0.18em;
  font-size: max(1.4rem, min(clamp(2rem, 15cqmin, 6rem), calc(var(--tm-history-hero-room) / var(--tm-history-hero-chars, 5) * 1.75)));
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.045em;
  color: var(--tm-history-accent);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.tm-history-card-unit {
  font-size: 0.5em;
  font-weight: 650;
  letter-spacing: -0.01em;
}
.tm-history-card-compare {
  margin-top: 0.55em;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  min-width: 0;
}
.tm-history-card-delta {
  font-size: clamp(1rem, 6.5cqmin, 2.1rem);
  font-weight: 650;
  letter-spacing: -0.02em;
  color: color-mix(in srgb, currentColor 62%, transparent);
  font-variant-numeric: tabular-nums;
}
.tm-history-card-caption {
  margin-top: 0.35em;
  font-size: clamp(0.75rem, 3.8cqmin, 1.2rem);
  line-height: 1.3;
  color: var(--tm-history-muted);
}
.tm-history-card-compare .tm-history-card-caption { margin-top: 0; }
.tm-history-card-chart {
  grid-area: chart;
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr) auto;
  grid-template-areas: "axis plot" ". labels";
  column-gap: 0.7em;
  row-gap: 0.55em;
  font-size: max(0.65rem, min(clamp(0.68rem, 3.2cqmin, 1.05rem), 2.6cqw));
  color: var(--tm-history-muted);
  transition: opacity 0.2s ease;
}
.tm-history-card-axis {
  grid-area: axis;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  line-height: 1;
  margin: -0.5em 0;
  font-variant-numeric: tabular-nums;
}
.tm-history-card-plot {
  grid-area: plot;
  position: relative;
  min-height: 2.5rem;
  touch-action: pan-y;
}
.tm-history-card-grid span {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: color-mix(in srgb, currentColor 18%, transparent);
  transform: translateY(50%);
}
.tm-history-card-rule {
  position: absolute;
  left: 0;
  right: 0;
  border-top: 2px dashed var(--tm-tone);
  opacity: 0.85;
  transform: translateY(50%);
  pointer-events: none;
}
.tm-history-card-bars,
.tm-history-card-labels {
  display: grid;
  grid-template-columns: repeat(var(--tm-history-count, 7), minmax(0, 1fr));
}
.tm-history-card-bars { position: absolute; inset: 0; }
.tm-history-card-labels {
  grid-area: labels;
  text-align: center;
  white-space: nowrap;
  line-height: 1;
}
.tm-history-card-labels span { overflow: visible; }
.tm-history-card-slot {
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 0;
}
.tm-history-card-track {
  position: relative;
  width: min(62%, 2.6rem);
  height: 100%;
  border-radius: 999px;
  background: var(--tm-history-track);
  overflow: hidden;
  transition: background-color 0.15s ease;
}
.tm-history-card-slot.is-future .tm-history-card-track { opacity: 0.55; }
.tm-history-card-slot.is-active .tm-history-card-track {
  background: color-mix(in srgb, var(--tm-history-accent) 34%, transparent);
}
.tm-history-card-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 999px;
  background: var(--tm-history-accent);
  transition: height 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.tm-history-card-bar[data-tone] { background: var(--tm-tone); }
.tm-history-card-line {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.tm-history-card-line-area { fill: color-mix(in srgb, var(--tm-history-accent) 18%, transparent); }
.tm-history-card-line-stroke {
  fill: none;
  stroke: var(--tm-history-accent);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.tm-history-card-dot {
  position: absolute;
  left: 50%;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background: var(--tm-history-accent);
  box-shadow: 0 0 0 3px var(--tm-surface, #1c1c1e);
  transform: translate(-50%, 50%);
}
.tm-history-card-stats {
  grid-area: stats;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.4rem, 2cqw, 0.9rem);
}
.tm-history-card-stat {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: clamp(0.45rem, 2.4cqmin, 0.9rem);
  padding: min(clamp(0.55rem, 3.2cqmin, 1.1rem), 2.6cqw) min(clamp(0.6rem, 3.6cqmin, 1.3rem), 3cqw);
  border-radius: clamp(0.75rem, 3.5cqmin, 1.25rem);
  background: var(--tm-history-chip);
  color: inherit;
  font: inherit;
  text-align: left;
  border: 0;
}
.tm-history-card-stat--history { cursor: pointer; }
.tm-history-card-stat--history:active { transform: scale(0.98); }
.tm-history-card-stat-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: clamp(1.9rem, 9cqmin, 3.1rem);
  height: clamp(1.9rem, 9cqmin, 3.1rem);
  border-radius: 50%;
  background: color-mix(in srgb, var(--tm-history-accent) 20%, transparent);
  color: var(--tm-history-accent);
}
.tm-history-card-stat-icon svg { width: 50%; height: 50%; }
.tm-history-card-stat-text {
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
}
.tm-history-card-stat-label {
  font-size: max(0.7rem, min(clamp(0.72rem, 3.6cqmin, 1.1rem), 2.8cqw));
  color: var(--tm-history-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-history-card-stat-value {
  font-size: max(0.8rem, min(clamp(0.85rem, 4.6cqmin, 1.45rem), 3.4cqw));
  font-weight: 650;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-variant-numeric: tabular-nums;
}
.tm-history-card-stat-chevron {
  flex: none;
  width: clamp(1rem, 4.5cqmin, 1.5rem);
  height: clamp(1rem, 4.5cqmin, 1.5rem);
  color: var(--tm-history-muted);
}
@container tm-history (max-width: 36rem) {
  .tm-history-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto minmax(0, 1fr) auto;
    grid-template-areas: "head" "hero" "chart" "stats";
  }
  .tm-history-card-hero {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    column-gap: 0.9em;
    row-gap: 0.2em;
  }
  .tm-history-card-value { --tm-history-hero-room: 52cqw; }
  .tm-history-card-title { --tm-history-title-room: 110cqw; }
  .tm-history-card-compare { margin-top: 0; }
  .tm-history-card-caption { margin-top: 0; }
  .tm-history-card-stats { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .tm-history-card-stat:nth-child(2) { display: none; }
}
@container tm-history (max-height: 19rem) {
  .tm-history-card-stats { display: none; }
  .tm-history-card-inner {
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-areas: "head head" "hero chart";
  }
}
@container tm-history (max-width: 36rem) and (max-height: 19rem) {
  .tm-history-card-inner {
    grid-template-rows: auto auto minmax(0, 1fr);
    grid-template-areas: "head" "hero" "chart";
  }
}
@container tm-history (max-width: 36rem) and (max-height: 27rem) {
  .tm-history-card-axis { display: none; }
  .tm-history-card-chart { grid-template-areas: "plot plot" "labels labels"; }
}
@container tm-history (max-height: 14rem) {
  .tm-history-card-compare .tm-history-card-caption { display: none; }
  .tm-history-card-axis { display: none; }
  .tm-history-card-chart { grid-template-areas: "plot plot" "labels labels"; }
}
@container tm-history (max-width: 22rem) {
  .tm-history-card-range-text { display: none; }
  .tm-history-card-range { padding: 0.5em; }
  .tm-history-card-axis { display: none; }
  .tm-history-card-chart { grid-template-areas: "plot plot" "labels labels"; }
  .tm-history-card-stat-icon { display: none; }
}
@container tm-history (max-height: 9.5rem) {
  .tm-history-card-chart { display: none; }
  .tm-history-card-inner { grid-template-rows: auto minmax(0, 1fr); grid-template-areas: "head" "hero"; grid-template-columns: minmax(0, 1fr); }
  .tm-history-card-hero { align-self: end; }
}
@container tm-history (max-aspect-ratio: 4 / 5) and (min-height: 26rem) {
  .tm-history-card-hero { display: block; }
  .tm-history-card-compare { margin-top: 0.5em; }
  .tm-history-card-value { --tm-history-hero-room: 80cqw; }
}
[data-tm-theme="blackColorful"] .tm-history-card {
  --tm-history-accent: oklch(from var(--tm-surface) 0.7 min(calc(c * 2.6 + 0.08), 0.17) h);
  --tm-history-chip: rgba(255, 255, 255, 0.42);
  --tm-history-pill: rgba(255, 255, 255, 0.55);
  --tm-history-track: color-mix(in srgb, var(--tm-history-accent) 22%, rgba(255, 255, 255, 0.35));
}
.tm-history-card--toned {
  --tm-surface: color-mix(in srgb, var(--tm-tone) 30%, #161618);
  --tm-history-accent: color-mix(in srgb, var(--tm-tone) 70%, white);
}
[data-tm-theme="light"] .tm-history-card--toned,
[data-tm-theme="colorful"] .tm-history-card--toned,
[data-tm-theme="blackColorful"] .tm-history-card--toned {
  --tm-surface: var(--tm-tone-pastel);
  --tm-history-accent: oklch(from var(--tm-tone-pastel) 0.5 min(calc(c * 2.2 + 0.1), 0.2) h);
  --tm-history-chip: rgba(255, 255, 255, 0.42);
  --tm-history-pill: rgba(255, 255, 255, 0.55);
  --tm-history-track: color-mix(in srgb, var(--tm-history-accent) 22%, rgba(255, 255, 255, 0.35));
  color: #1a1a1a;
}

.tm-sensor-chart-fields { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem; }
.tm-sensor-chart-fields-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; }
.tm-sensor-chart-rule {
  display: grid;
  grid-template-columns: 0.75rem minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.35rem;
}
.tm-sensor-chart-rule .tm-input { min-width: 0; padding-left: 0.5rem; padding-right: 0.4rem; }
.tm-sensor-chart-rule-swatch {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--tm-tone);
}
.tm-sensor-chart-rule-remove {
  display: grid;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 0;
  border-radius: 50%;
  background: rgba(127, 127, 127, 0.15);
  color: inherit;
  cursor: pointer;
}
.tm-sensor-chart-rule-add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  min-height: 2.25rem;
  font-size: 0.75rem;
}

.tm-vacuum-card {
  container: tm-vacuum / size;
  position: relative;
  cursor: default;
  padding: 0;
  overflow: hidden;
  --tm-vacuum-strong: #4cd97b;
  --tm-vacuum-warn: #f5a524;
  --tm-vacuum-error: #f26d6d;
  --tm-vacuum-muted: color-mix(in srgb, currentColor 55%, transparent);
  --tm-vacuum-chip: color-mix(in srgb, currentColor 7%, transparent);
  --tm-vacuum-chip-primary: color-mix(in srgb, currentColor 16%, transparent);
}
.tm-vacuum-card:active { transform: none; }
.tm-vacuum-card-inner {
  --tm-vacuum-pad: clamp(0.85rem, 6cqmin, 2rem);
  height: 100%;
  box-sizing: border-box;
  padding: var(--tm-vacuum-pad);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    "head art"
    "hero art"
    "actions actions";
  column-gap: clamp(0.5rem, 3cqw, 1.5rem);
  row-gap: clamp(0.5rem, 4cqh, 1.3rem);
}
.tm-vacuum-head {
  grid-area: head;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.tm-vacuum-title {
  max-width: 100%;
  font-size: max(0.95rem, min(clamp(1rem, 8cqmin, 2.5rem), calc(78cqw / var(--tm-vacuum-title-chars, 10))));
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-vacuum-subtitle {
  max-width: 100%;
  margin-top: 0.3em;
  font-size: clamp(0.8rem, 4.4cqmin, 1.45rem);
  color: var(--tm-vacuum-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-vacuum-hero { grid-area: hero; align-self: end; min-width: 0; }
.tm-vacuum-status {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: clamp(0.8rem, 4.4cqmin, 1.4rem);
  font-weight: 500;
  white-space: nowrap;
  --tm-vacuum-dot: var(--tm-vacuum-muted);
}
.tm-vacuum-status--active { --tm-vacuum-dot: var(--tm-vacuum-strong); }
.tm-vacuum-status--warn { --tm-vacuum-dot: var(--tm-vacuum-warn); }
.tm-vacuum-status--error { --tm-vacuum-dot: var(--tm-vacuum-error); }
.tm-vacuum-status-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.tm-vacuum-dot {
  flex: none;
  width: 0.62em;
  height: 0.62em;
  border-radius: 50%;
  background: var(--tm-vacuum-dot);
}
.tm-vacuum-status--active .tm-vacuum-dot { animation: tm-vacuum-dot 1.8s ease-out infinite; }
.tm-vacuum-battery {
  display: flex;
  align-items: center;
  gap: 0.12em;
  margin-top: 0.12em;
  font-size: clamp(2rem, 19cqmin, 6.5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.tm-vacuum-battery-icon {
  flex: none;
  width: 0.42em;
  height: 0.42em;
  color: var(--tm-vacuum-muted);
}
.tm-vacuum-battery-unit { font-size: 0.6em; margin-left: 0.04em; letter-spacing: 0; }
.tm-vacuum-subline {
  margin-top: 0.25em;
  font-size: clamp(0.8rem, 4.4cqmin, 1.45rem);
  color: var(--tm-vacuum-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tm-vacuum-art {
  grid-area: art;
  container-type: size;
  min-width: 0;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.tm-vacuum-stage {
  position: relative;
  width: min(100cqw, 112cqh, 18rem);
  aspect-ratio: 1;
}
.tm-vacuum-bot {
  position: absolute;
  inset: 8% 9% 10%;
}
.tm-vacuum-bot img {
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
}
.tm-vacuum-floor {
  position: absolute;
  z-index: 0;
  left: 6%;
  right: 6%;
  bottom: -5%;
  height: 22%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.12) 60%, transparent);
  filter: blur(4px);
}
.tm-vacuum-brush {
  position: absolute;
  z-index: 1;
  width: 42%;
  aspect-ratio: 1;
  top: 83%;
  transform: translate(-50%, -50%) scaleY(0.4);
}
.tm-vacuum-brush--left { left: 13%; }
.tm-vacuum-brush--right { left: 87%; }
.tm-vacuum-brush-spin {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.tm-vacuum-brush-spin path {
  fill: none;
  stroke: var(--tm-vacuum-bristle, #6a7079);
  stroke-width: 2.2;
  stroke-linecap: round;
}
.tm-vacuum-brush-spin circle { fill: #2f3338; }
.tm-vacuum-led {
  position: absolute;
  z-index: 3;
  left: 49.5%;
  top: 66.2%;
  width: 9.5%;
  height: 4.6%;
  border-radius: 999px;
  transform: translate(-50%, -50%);
  background: var(--tm-vacuum-led, transparent);
  mix-blend-mode: multiply;
  opacity: 0;
  transition: opacity 0.4s;
}
.tm-vacuum-art[data-phase="cleaning"] .tm-vacuum-led,
.tm-vacuum-art[data-phase="returning"] .tm-vacuum-led {
  --tm-vacuum-led: var(--tm-vacuum-strong);
  animation: tm-vacuum-led 1.6s ease-in-out infinite;
}
.tm-vacuum-art[data-phase="paused"] .tm-vacuum-led { --tm-vacuum-led: var(--tm-vacuum-warn); opacity: 0.75; }
.tm-vacuum-art[data-phase="docked"] .tm-vacuum-led {
  --tm-vacuum-led: var(--tm-vacuum-strong);
  animation: tm-vacuum-led 3.2s ease-in-out infinite;
}
.tm-vacuum-art[data-phase="error"] .tm-vacuum-led { --tm-vacuum-led: var(--tm-vacuum-error); opacity: 0.9; }
.tm-vacuum-waves {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.tm-vacuum-wave {
  fill: none;
  stroke: var(--tm-vacuum-strong);
  stroke-width: 2.4;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
  opacity: 0;
}

.tm-vacuum-art--moving .tm-vacuum-bot { animation: tm-vacuum-roam 11s ease-in-out infinite; }
.tm-vacuum-art--moving .tm-vacuum-bot img { animation: tm-vacuum-hum 0.34s ease-in-out infinite alternate; }
.tm-vacuum-art--moving .tm-vacuum-brush-spin { animation: tm-vacuum-spin 0.5s linear infinite; }
.tm-vacuum-art--moving .tm-vacuum-brush--left .tm-vacuum-brush-spin { animation-direction: reverse; }
.tm-vacuum-art--moving .tm-vacuum-wave { animation: tm-vacuum-wave 2s ease-out infinite; --tm-vacuum-wave-x: 4%; }
.tm-vacuum-art--moving .tm-vacuum-wave--2 { animation-delay: 0.35s; }
.tm-vacuum-art--moving .tm-vacuum-wave--3 { animation-delay: 1s; --tm-vacuum-wave-x: -4%; }
.tm-vacuum-art[data-phase="returning"] .tm-vacuum-bot { animation: tm-vacuum-return 6s ease-in-out infinite; }

@keyframes tm-vacuum-roam {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  18% { transform: translate(-6%, 3%) rotate(-9deg); }
  40% { transform: translate(-2%, 6%) rotate(-3deg); }
  62% { transform: translate(5%, 3%) rotate(8deg); }
  82% { transform: translate(4%, -3%) rotate(4deg); }
}
@keyframes tm-vacuum-return {
  0%, 100% { transform: translate(-4%, 1%) rotate(-4deg); }
  50% { transform: translate(5%, -1%) rotate(3deg); }
}
@keyframes tm-vacuum-hum {
  from { transform: translateY(0); }
  to { transform: translateY(-0.7%); }
}
@keyframes tm-vacuum-spin {
  to { transform: rotate(360deg); }
}
@keyframes tm-vacuum-wave {
  0% { opacity: 0; transform: translate(calc(var(--tm-vacuum-wave-x) * -1), 2%); }
  30% { opacity: 0.9; }
  100% { opacity: 0; transform: translate(var(--tm-vacuum-wave-x), -2%); }
}
@keyframes tm-vacuum-led {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.95; }
}
@keyframes tm-vacuum-dot {
  0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--tm-vacuum-dot) 60%, transparent); }
  100% { box-shadow: 0 0 0 0.55em transparent; }
}

.tm-vacuum-actions {
  grid-area: actions;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.35rem, 1.8cqw, 0.75rem);
}
.tm-vacuum-card--zones .tm-vacuum-actions {
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 0.9fr) minmax(0, 1.3fr) minmax(0, 1.25fr);
}
.tm-vacuum-action {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.55em;
  padding: min(clamp(0.6rem, 3.4cqmin, 1.1rem), 2.6cqw) min(clamp(0.65rem, 3.6cqmin, 1.2rem), 2.6cqw);
  border: 0;
  border-radius: clamp(0.75rem, 3.5cqmin, 1.25rem);
  background: var(--tm-vacuum-chip);
  color: inherit;
  font: inherit;
  font-size: max(0.72rem, min(clamp(0.75rem, 3.8cqmin, 1.15rem), 2.8cqw));
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: transform 0.12s, opacity 0.2s, background 0.2s;
}
.tm-vacuum-action:active:not(:disabled) { transform: scale(0.96); }
.tm-vacuum-action:disabled { opacity: 0.42; cursor: default; }
.tm-vacuum-action--primary { background: var(--tm-vacuum-chip-primary); }
.tm-vacuum-action-icon {
  flex: none;
  width: 1.3em;
  height: 1.3em;
}
.tm-vacuum-action--primary .tm-vacuum-action-icon { fill: currentColor; }
.tm-vacuum-action-text {
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 0.15em;
}
.tm-vacuum-action-label,
.tm-vacuum-action-sub {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-vacuum-action-label--short { display: none; }
.tm-vacuum-action-sub { font-size: 0.85em; font-weight: 400; color: var(--tm-vacuum-muted); }
.tm-vacuum-action-chevron {
  flex: none;
  width: 1.1em;
  height: 1.1em;
  margin-left: -0.2em;
  color: var(--tm-vacuum-muted);
}

.tm-vacuum-zones {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 3cqmin, 1rem);
  padding: clamp(0.85rem, 6cqmin, 2rem);
  box-sizing: border-box;
  background: var(--tm-surface, #1c1c1e);
  border-radius: inherit;
  animation: tm-vacuum-sheet 0.22s ease-out;
}
.tm-vacuum-zones-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: clamp(0.95rem, 6cqmin, 1.8rem);
  font-weight: 600;
}
.tm-vacuum-zones-close {
  display: grid;
  place-items: center;
  width: 2.2em;
  height: 2.2em;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--tm-vacuum-chip);
  color: inherit;
  font-size: clamp(0.75rem, 3.6cqmin, 1rem);
  cursor: pointer;
}
.tm-vacuum-zones-close svg { width: 1.1em; height: 1.1em; }
.tm-vacuum-zones-list {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 11rem), 1fr));
  grid-auto-rows: minmax(clamp(2.75rem, 18cqh, 5.5rem), auto);
  align-content: start;
  gap: clamp(0.4rem, 2cqmin, 0.75rem);
}
.tm-vacuum-zone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  padding: 0.85em 1em;
  border: 0;
  border-radius: clamp(0.75rem, 3.5cqmin, 1.25rem);
  background: var(--tm-vacuum-chip);
  color: inherit;
  font: inherit;
  font-size: clamp(0.85rem, 4.6cqmin, 1.4rem);
  font-weight: 500;
  text-align: left;
  cursor: pointer;
}
.tm-vacuum-zone:active { transform: scale(0.97); }
.tm-vacuum-zone--active { background: var(--tm-vacuum-chip-primary); }
.tm-vacuum-zone-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tm-vacuum-zone-icon { flex: none; width: 1em; height: 1em; fill: currentColor; color: var(--tm-vacuum-muted); }
@keyframes tm-vacuum-sheet {
  from { opacity: 0; transform: translateY(6%); }
  to { opacity: 1; transform: none; }
}

@container tm-vacuum (max-width: 46rem) {
  .tm-vacuum-card--zones .tm-vacuum-action-label--long { display: none; }
  .tm-vacuum-card--zones .tm-vacuum-action-label--short { display: block; }
  .tm-vacuum-card--zones .tm-vacuum-actions {
    grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(0, 1.45fr);
  }
}
@container tm-vacuum (max-width: 36rem) {
  .tm-vacuum-action {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4em;
  }
  .tm-vacuum-action-label--long { display: none; }
  .tm-vacuum-action-label--short { display: block; }
  .tm-vacuum-action-chevron { position: absolute; right: 0.6em; top: 0.7em; margin: 0; }
  .tm-vacuum-action--menu { position: relative; }
}
@container tm-vacuum (max-width: 22rem) {
  .tm-vacuum-action-sub { display: none; }
  .tm-vacuum-action { align-items: center; }
  .tm-vacuum-action-chevron { display: none; }
}
@container tm-vacuum (max-height: 17rem) {
  .tm-vacuum-actions { display: none; }
  .tm-vacuum-card-inner {
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-areas: "head art" "hero art";
  }
}
@container tm-vacuum (max-height: 17rem) and (min-width: 36rem) {
  .tm-vacuum-actions { display: grid; align-self: center; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .tm-vacuum-card--zones .tm-vacuum-actions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .tm-vacuum-card-inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.75fr) minmax(0, 1.25fr);
    grid-template-areas: "head art actions" "hero art actions";
  }
  .tm-vacuum-action { flex-direction: row; align-items: center; padding: 0.5em 0.7em; }
  .tm-vacuum-action-sub, .tm-vacuum-action-chevron { display: none; }
}
@container tm-vacuum (max-width: 17rem) {
  .tm-vacuum-art { display: none; }
  .tm-vacuum-card-inner { grid-template-columns: minmax(0, 1fr); grid-template-areas: "head" "hero" "actions"; }
  .tm-vacuum-title { font-size: max(0.95rem, min(clamp(1rem, 8cqmin, 2.5rem), calc(170cqw / var(--tm-vacuum-title-chars, 10)))); }
}
@container tm-vacuum (max-width: 17rem) and (max-height: 17rem) {
  .tm-vacuum-card-inner { grid-template-areas: "head" "hero"; }
}
@container tm-vacuum (max-aspect-ratio: 4 / 5) and (min-height: 26rem) {
  .tm-vacuum-card-inner {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto auto;
    grid-template-areas: "head" "art" "hero" "actions";
  }
  .tm-vacuum-actions,
  .tm-vacuum-card--zones .tm-vacuum-actions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .tm-vacuum-action { flex-direction: row; align-items: center; }
  .tm-vacuum-action-label--long { display: block; }
  .tm-vacuum-action-label--short { display: none; }
  .tm-vacuum-action-chevron { position: static; margin-left: -0.2em; }
}
[data-tm-theme="light"] .tm-vacuum-card,
[data-tm-theme="colorful"] .tm-vacuum-card {
  --tm-vacuum-strong: #1f9d55;
  --tm-vacuum-warn: #c77800;
  --tm-vacuum-error: #d93a3a;
  --tm-vacuum-bristle: #3a3e44;
}
[data-tm-theme="blackColorful"] .tm-vacuum-card {
  --tm-vacuum-strong: oklch(from var(--tm-surface) calc(1.37 - l) min(calc(c * 2.2 + 0.05), 0.16) h);
  --tm-vacuum-warn: #b86a00;
  --tm-vacuum-error: #c93030;
  --tm-vacuum-chip: rgba(255, 255, 255, 0.42);
  --tm-vacuum-chip-primary: rgba(255, 255, 255, 0.86);
  --tm-vacuum-bristle: #3a3e44;
  --tm-vacuum-muted: color-mix(in srgb, var(--tm-tile-fg, #1a1a1a) 55%, transparent);
  background: radial-gradient(110% 90% at 80% 15%, rgba(255, 255, 255, 0.4), transparent 60%), var(--tm-surface);
}
[data-tm-theme="blackColorful"] .tm-vacuum-zones {
  background: radial-gradient(110% 90% at 80% 15%, rgba(255, 255, 255, 0.4), transparent 60%), var(--tm-surface);
}
@media (prefers-reduced-motion: reduce) {
  .tm-vacuum-art *,
  .tm-vacuum-art--moving .tm-vacuum-bot,
  .tm-vacuum-status--active .tm-vacuum-dot { animation: none !important; }
  .tm-vacuum-art--moving .tm-vacuum-wave { opacity: 0.7; }
}

`;

export const haShellStyles = `
the-monitor-dashboard {
  display: block !important;
  width: 100% !important;
  min-width: 100% !important;
  height: 100% !important;
  min-height: 0 !important;
  box-sizing: border-box !important;
}

ha-card:has(the-monitor-dashboard),
hui-card:has(the-monitor-dashboard) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  height: 100% !important;
  width: 100% !important;
}
`;

export const haCardHostStyles = `
.tm-ha-card-host {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  box-sizing: border-box;
}
.tm-ha-card-host.is-editing {
  pointer-events: none;
}
.tm-ha-card-host > * {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
}
.tm-ha-card-host-message {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  color: white;
  font: 500 0.875rem/1.4 system-ui, sans-serif;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 1.25rem;
}

`;
