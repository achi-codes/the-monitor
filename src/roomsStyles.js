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
`;
