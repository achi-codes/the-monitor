// Styles for the rooms mode (side rail, card strip, filter dock).
export const roomsStyles = `
.tm-rooms {
  position: relative;
  display: flex;
  gap: 1.75rem;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 1.75rem 0 1.75rem 1.75rem;
  box-sizing: border-box;
  color: #f1f1ef;
}
.tm-rooms-rail {
  position: relative;
  z-index: 6;
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tm-rooms-pill {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  border-radius: 999px;
  background: rgba(14, 15, 15, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
}
.tm-rooms-rail-btn {
  position: relative;
  flex: none;
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #e9e9e7;
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.tm-rooms-rail-btn.active {
  background: #5ccf85;
  color: #0d2716;
}
.tm-rooms-dot {
  position: absolute;
  right: 11px;
  bottom: 11px;
  width: 11px;
  height: 11px;
  border-radius: 999px;
  background: #ff4d4d;
  border: 2px solid #161717;
}
.tm-rooms-main {
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding-bottom: 5.5rem;
}
.tm-rooms-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  padding-right: 1.75rem;
}
.tm-rooms-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.9rem);
  font-weight: 700;
  line-height: 1.05;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.tm-rooms-subtitle {
  margin: 0.4rem 0 0;
  font-size: 1.05rem;
  opacity: 0.72;
}
.tm-rooms-header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.tm-rooms-clock {
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  margin: 0 0.5rem;
}
.tm-rooms-alert {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 44px;
  padding: 0 1rem;
  border-radius: 999px;
  background: rgba(255, 77, 77, 0.18);
  color: #ffb3b3;
  font-weight: 500;
  white-space: nowrap;
}
.tm-rooms-alert span {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #ff4d4d;
}
.tm-rooms-strip {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  padding: 2px 3rem 2px 0;
  scrollbar-width: none;
}
.tm-rooms-strip::-webkit-scrollbar { display: none; }
.tm-rooms-dock {
  position: absolute;
  left: 50%;
  bottom: 1.25rem;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  padding: 8px;
  border-radius: 999px;
  background: rgba(14, 15, 15, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  z-index: 5;
}
.tm-rooms-dock-btn {
  height: 52px;
  border: 0;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0 1.2rem 0 1rem;
  font: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  color: #e9e9e7;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.tm-rooms-dock-btn.active {
  background: rgba(255, 255, 255, 0.92);
  color: #151616;
}

.tm-rooms-main--no-dock { padding-bottom: 0; }
.tm-rooms-rail-more { background: transparent; }
.tm-rooms-more {
  position: absolute;
  left: calc(100% + 12px);
  bottom: max(0px, calc(50% - 280px));
  width: 290px;
  max-height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0.9rem;
  border-radius: 28px;
  background: rgba(22, 23, 23, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.5);
  animation: tmRoomsMoreIn 0.18s ease-out;
}
@keyframes tmRoomsMoreIn { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .tm-rooms-more { animation: none; } }
.tm-rooms-more-title { margin: 0.2rem 0.5rem 0.6rem; font-size: 0.85rem; opacity: 0.6; }
.tm-rooms-more ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
.tm-rooms-more-item, .tm-rooms-more-edit {
  width: 100%; min-height: 48px; border: 0; border-radius: 16px; padding: 0 0.85rem;
  display: flex; align-items: center; gap: 0.75rem; font: inherit; font-size: 1rem;
  color: #f1f1ef; background: transparent; cursor: pointer; text-align: left;
}
.tm-rooms-more-item:hover, .tm-rooms-more-edit:hover { background: rgba(255, 255, 255, 0.07); }
.tm-rooms-more-item.active { background: #5ccf85; color: #0d2716; }
.tm-rooms-more-item span:first-of-type { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tm-rooms-more-alert { font-size: 0.8rem; color: #ffb3b3; white-space: nowrap; }
.tm-rooms-more-empty { margin: 0.4rem 0.5rem 0.8rem; font-size: 0.9rem; opacity: 0.7; }
.tm-rooms-more-edit { margin-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.08); border-radius: 0 0 16px 16px; font-size: 0.92rem; opacity: 0.85; }
.tm-rooms-tile-col {
  flex: none;
  height: 100%;
  max-height: 560px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  scroll-snap-align: start;
}
.tm-rooms-tile {
  flex: 0 0 calc(50% - 0.625rem);
  min-height: 0;
  border-radius: var(--tm-radius-xl);
}
.tm-rooms-tile-col.tall .tm-rooms-tile { flex: 1 1 auto; }

/* Cards */
.tm-rc {
  flex: none;
  width: 300px;
  height: 100%;
  max-height: 560px;
  scroll-snap-align: start;
  box-sizing: border-box;
  border-radius: 34px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  background: rgba(32, 33, 33, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  color: #f1f1ef;
  font: inherit;
  text-align: left;
}
.tm-rc--wide { width: 400px; }
.tm-rc--alert { background: rgba(120, 32, 32, 0.6); }
.tm-rc--on { background: rgba(92, 207, 133, 0.85); color: #0d2716; }
.tm-rc--tile { cursor: pointer; justify-content: space-between; }
.tm-rc--empty { width: 400px; justify-content: center; align-items: center; text-align: center; }
.tm-rc-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; }
.tm-rc-head-text { min-width: 0; }
.tm-rc-head-actions { display: flex; align-items: center; gap: 0.5rem; flex: none; }
.tm-rc-title { margin: 0; font-size: 1.35rem; font-weight: 600; line-height: 1.15; }
.tm-rc-sub { margin: 0.2rem 0 0; font-size: 0.9rem; opacity: 0.65; }
.tm-rc-fav {
  width: 36px; height: 36px; border: 0; border-radius: 999px;
  display: grid; place-items: center; cursor: pointer;
  color: inherit; opacity: 0.45; background: rgba(255, 255, 255, 0.06);
}
.tm-rc-fav.active { opacity: 1; color: #ffcf5c; }
.tm-rc-switch {
  width: 56px; height: 32px; border: 0; border-radius: 999px; padding: 3px;
  display: flex; cursor: pointer; background: rgba(255, 255, 255, 0.16); transition: background 0.2s;
}
.tm-rc-switch span {
  width: 26px; height: 26px; border-radius: 999px; background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); transition: transform 0.2s;
}
.tm-rc-switch.on { background: #5ccf85; }
.tm-rc-switch.on span { transform: translateX(24px); }
.tm-rc-light-panel {
  position: relative; flex: 1; min-height: 0; overflow: hidden;
  border-radius: 28px; background: #262626; touch-action: none; cursor: ns-resize;
}
.tm-rc-light-fill { position: absolute; left: 0; right: 0; bottom: 0; transition: height 0.35s ease, background 0.35s; }
.tm-rc-light-pct {
  position: absolute; top: 1.2rem; right: 1.5rem;
  font-size: 3.6rem; font-weight: 700; line-height: 1; color: #ededeb; font-variant-numeric: tabular-nums;
}
.tm-rc-light-pct.dark, .tm-rc-light-icon.dark { color: #1c1a16; }
.tm-rc-light-icon { position: absolute; left: 1.4rem; bottom: 1.4rem; color: #8a8a88; }
.tm-rc-chips, .tm-rc-scenes { display: flex; gap: 0.6rem; }
.tm-rc-scenes { flex-wrap: wrap; }
.tm-rc-chip {
  flex: 1; min-width: 0; height: 44px; padding: 0 0.8rem; border-radius: 999px;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  border: 2px solid transparent; background: rgba(255, 255, 255, 0.07);
  color: #f1f1ef; font: inherit; font-size: 0.95rem; font-weight: 500; cursor: pointer; white-space: nowrap;
}
.tm-rc-scenes .tm-rc-chip { flex: none; }
.tm-rc-chip.active { border-color: #f1f1ef; }
.tm-rc-chip--static { flex: none; cursor: default; }
.tm-rc-chip--static.ok { background: rgba(92, 207, 133, 0.16); color: #9fe3b6; }
.tm-rc-chip--static.alert { background: rgba(255, 77, 77, 0.18); color: #ffb3b3; }
.tm-rc-dot { width: 14px; height: 14px; border-radius: 999px; }
.tm-rc-climate-dial { position: relative; display: grid; place-items: center; padding-top: 0.5rem; }
.tm-rc-climate-dial svg { width: 100%; max-width: 240px; }
.tm-rc-arc-track, .tm-rc-arc { fill: none; stroke-width: 16; stroke-linecap: round; }
.tm-rc-arc-track { stroke: rgba(255, 255, 255, 0.1); }
.tm-rc-climate-now { position: absolute; bottom: 0; text-align: center; }
.tm-rc-climate-now strong { display: block; font-size: 3rem; line-height: 1; }
.tm-rc-climate-now span, .tm-rc-stepper span { font-size: 0.85rem; opacity: 0.65; }
.tm-rc-stepper {
  margin-top: auto; display: flex; align-items: center; justify-content: space-between;
  padding: 0.6rem; border-radius: 24px; background: rgba(255, 255, 255, 0.06); text-align: center;
}
.tm-rc-stepper strong { display: block; font-size: 1.7rem; }
.tm-rc-stepper button, .tm-rc-round {
  width: 48px; height: 48px; border: 0; border-radius: 999px; display: grid; place-items: center;
  background: rgba(255, 255, 255, 0.08); color: #f1f1ef; font-size: 1.5rem; cursor: pointer;
}
.tm-rc-cover-art {
  flex: 1; min-height: 120px; border-radius: 24px; display: grid; place-items: center;
  background: linear-gradient(180deg, #0f1c2b, #08101a) center / cover no-repeat; color: rgba(255, 255, 255, 0.4);
}
.tm-rc-progress { height: 6px; border-radius: 999px; background: rgba(255, 255, 255, 0.12); }
.tm-rc-progress div { height: 100%; border-radius: 999px; background: #f1f1ef; }
.tm-rc-media-controls { display: flex; justify-content: space-between; align-items: center; }
.tm-rc-round--main { width: 68px; height: 68px; background: #5ccf85; color: #0d2716; }
.tm-rc-window {
  position: relative; flex: 1; min-height: 0; overflow: hidden; border-radius: 22px;
  border: 6px solid rgba(255, 255, 255, 0.14); background: linear-gradient(180deg, #8fb6d8, #d7c7a6);
}
.tm-rc-slats {
  position: absolute; left: 0; right: 0; top: 0; transition: height 0.4s ease;
  background: repeating-linear-gradient(180deg, #4a4c4b 0 14px, #3a3c3b 14px 16px);
}
.tm-rc-status { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 1rem; }
.tm-rc-status strong { font-size: 2.3rem; line-height: 1.1; }
.tm-rc-status small { font-size: 1.1rem; opacity: 0.7; }
.tm-rc-big-toggle {
  flex: 1; border: 0; border-radius: 28px; display: grid; place-items: center; cursor: pointer;
  background: rgba(0, 0, 0, 0.12); color: inherit;
}
.tm-rc-tile-temp { font-size: 3rem; font-weight: 600; line-height: 1; }
.tm-rc-lines { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.tm-rc-lines li { padding: 0.8rem 1rem; border-radius: 18px; background: rgba(255, 255, 255, 0.06); font-size: 0.95rem; }
.tm-rooms button:focus-visible { outline: 2px solid #9fe3b6; outline-offset: 2px; }
/* Rooms-mode configurator (settings) */
.tm-rmc-list { list-style: none; margin: 0.5rem 0 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.tm-rmc-room { border-radius: 18px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.06); }
.tm-rmc-room.open { background: rgba(255, 255, 255, 0.07); }
.tm-rmc-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; padding: 0.5rem; }
.tm-rmc-kind { width: 36px; display: grid; place-items: center; opacity: 0.7; }
.tm-rmc-name { flex: 1 1 10rem; min-width: 8rem; }
.tm-rmc-area { flex: 0 1 13rem; min-width: 10rem; }
.tm-rmc-icon-btn {
  width: 40px; height: 40px; border: 0; border-radius: 12px; display: grid; place-items: center;
  background: rgba(255, 255, 255, 0.06); color: inherit; cursor: pointer;
}
.tm-rmc-icon-btn:disabled { opacity: 0.3; cursor: default; }
.tm-rmc-icon-btn.active { background: rgba(var(--tm-accent-rgb), 0.35); }
.tm-rmc-tiles-btn.active { background: rgba(var(--tm-accent-rgb), 0.35); }
.tm-rmc-tiles { padding: 0.25rem 0.75rem 0.9rem 3.1rem; display: flex; flex-direction: column; gap: 0.6rem; }
.tm-rmc-tile-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.35rem; }
.tm-rmc-tile { display: flex; align-items: center; gap: 0.35rem; padding: 0.3rem 0.3rem 0.3rem 0.8rem; border-radius: 14px; background: rgba(0, 0, 0, 0.18); }
.tm-rmc-tile.active { outline: 2px solid rgba(var(--tm-accent-rgb), 0.6); }
.tm-rmc-tile-name { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.tm-rmc-tile-name small { opacity: 0.6; font-size: 0.8rem; }
.tm-rmc-inspector { border-radius: 16px; overflow: hidden; }
.tm-rmc-add-group { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.75rem; }
.tm-rmc-add { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
.tm-rmc-add .tm-input { flex: 1 1 12rem; }
.tm-rmc-add .tm-btn-secondary { display: inline-flex; align-items: center; gap: 0.35rem; }
.tm-rmc-visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.tm-rmc-sub-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.tm-rmc-sub { border-radius: 14px; background: rgba(0, 0, 0, 0.18); }
.tm-rmc-sub.open { background: rgba(0, 0, 0, 0.28); }
.tm-rmc-sub-body { padding: 0 0.75rem 0.9rem; display: flex; flex-direction: column; gap: 1rem; }
.tm-rmc-icon-select { flex: 0 0 8.5rem; }
.tm-rmc-badge { font-size: 0.8rem; padding: 0.25rem 0.6rem; border-radius: 999px; background: rgba(255, 255, 255, 0.08); white-space: nowrap; }
.tm-rmc-block { display: flex; flex-direction: column; gap: 0.5rem; }
.tm-rmc-block-title { margin: 0; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.55; }
.tm-rmc-device-list { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)); gap: 0.25rem 1rem; }
.tm-rmc-picker { max-width: 28rem; }
.tm-rooms-dock { max-width: calc(100% - 12rem); overflow-x: auto; scrollbar-width: none; }

/* Edit mode (pencil next to the settings) */
.tm-rooms-strip { position: relative; }
.tm-rooms--editing .tm-rooms-strip { scroll-snap-type: none; }
.tm-rooms-col { flex: none; height: 100%; max-height: 560px; display: flex; scroll-snap-align: start; }
.tm-rooms-done {
  height: 48px; padding: 0 1.3rem; border-radius: 999px; border: 0; cursor: pointer;
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #5ccf85; color: #0d2716; font: inherit; font-weight: 700;
}
.tm-rooms-edit-item {
  position: relative; flex: none; height: 100%; max-height: 560px; border-radius: 34px;
  touch-action: none; cursor: grab; transition: transform 0.15s ease; scroll-snap-align: start;
}
.tm-rooms-edit-item.dragging { z-index: 5; opacity: 0.88; transition: none; cursor: grabbing; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); }
.tm-rooms-edit-content { height: 100%; pointer-events: none; display: flex; }
.tm-rooms-edit-content > * { height: 100%; }
.tm-rooms-edit-overlay {
  position: absolute; inset: 0; border-radius: 34px; pointer-events: none;
  outline: 2px dashed rgba(255, 255, 255, 0.35); outline-offset: -2px; background: rgba(0, 0, 0, 0.14);
}
.tm-rooms-edit-grip {
  position: absolute; left: 50%; bottom: 10px; transform: translateX(-50%);
  padding: 4px 10px; border-radius: 999px; background: rgba(20, 20, 20, 0.8); color: #fff; display: grid; place-items: center;
}
.tm-rooms-edit-actions { position: absolute; top: 10px; right: 10px; display: flex; gap: 6px; pointer-events: auto; }
.tm-rooms-edit-btn {
  width: 44px; height: 44px; border-radius: 999px; border: 0; cursor: pointer;
  display: grid; place-items: center; background: rgba(20, 20, 20, 0.88); color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
}
.tm-rooms-edit-btn--remove { background: #ff4d4d; }
.tm-rc--add {
  width: 260px; align-items: center; justify-content: center; cursor: pointer; text-align: center;
  border: 2px dashed rgba(255, 255, 255, 0.28); background: rgba(255, 255, 255, 0.04); font-size: 1rem; opacity: 0.85;
}
.tm-rooms-drop-marker {
  position: absolute; top: 0; bottom: 0; width: 4px; margin-left: -2px; border-radius: 4px;
  background: #5ccf85; pointer-events: none; z-index: 6; box-shadow: 0 0 12px rgba(92, 207, 133, 0.7);
}
.tm-rooms-drop-marker--dock { top: 10px; bottom: 10px; }
.tm-rooms--editing .tm-rooms-dock { outline: 2px dashed rgba(255, 255, 255, 0.25); outline-offset: 3px; }
.tm-rooms-dock-btn.dragging { opacity: 0.85; z-index: 2; transition: none; }
.tm-rooms--editing .tm-rooms-dock-btn { touch-action: none; }
.tm-rooms-dock-edit { opacity: 0.6; }
.tm-rooms-dock-add { padding: 0 1rem; }
.tm-rooms-panel {
  position: absolute; z-index: 20; box-sizing: border-box; padding: 1.1rem 1.2rem 1.2rem;
  border-radius: 28px; color: #f1f1ef; background: rgba(22, 23, 23, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
  max-height: calc(100% - 2.5rem); overflow-y: auto;
}
.tm-rooms-panel--center { left: 50%; top: calc(50% + 2.5rem); transform: translate(-50%, -50%); width: min(660px, calc(100% - 2rem)); max-height: calc(100% - 8rem); }
.tm-rooms-panel .tm-widget-inspector-meta { display: none; }
.tm-rooms-panel--side { right: 1.25rem; top: 6rem; bottom: 1.25rem; width: min(430px, calc(100% - 2rem)); }
.tm-rooms-panel--dock { left: 50%; bottom: 6.75rem; transform: translateX(-50%); width: min(360px, calc(100% - 2rem)); }
.tm-rooms-panel-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.tm-rooms-panel-head h2 { margin: 0; font-size: 1.25rem; }
.tm-rooms-panel-close {
  width: 44px; height: 44px; border-radius: 999px; border: 0; cursor: pointer;
  display: grid; place-items: center; background: rgba(255, 255, 255, 0.08); color: inherit;
}
.tm-rooms-panel-label { display: block; margin: 1rem 0 0.45rem; font-size: 0.85rem; opacity: 0.65; }
.tm-rooms-panel-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); gap: 0.5rem; }
.tm-rooms-panel-type {
  min-height: 76px; border-radius: 16px; border: 0; cursor: pointer; padding: 0.5rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.4rem;
  background: rgba(255, 255, 255, 0.06); color: inherit; font: inherit; font-size: 0.85rem; text-align: center;
}
.tm-rooms-panel-type:hover { background: rgba(255, 255, 255, 0.12); }
.tm-rooms-panel-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.6rem; }
.tm-rooms-panel-chips .tm-rc-chip { flex: none; }
.tm-rooms-panel-icons { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 0.4rem; }
.tm-rooms-panel-icon {
  height: 44px; border-radius: 12px; border: 0; cursor: pointer;
  display: grid; place-items: center; background: rgba(255, 255, 255, 0.06); color: inherit;
}
.tm-rooms-panel-icon.active { background: #5ccf85; color: #0d2716; }
.tm-rooms-panel-danger {
  margin-top: 1.1rem; width: 100%; height: 46px; border-radius: 14px; border: 0; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  background: rgba(255, 77, 77, 0.16); color: #ffb3b3; font: inherit;
}
.tm-rooms-panel-list { display: flex; flex-direction: column; gap: 4px; margin-top: 0.6rem; }
`;
