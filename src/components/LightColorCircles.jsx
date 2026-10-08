import { LIGHT_COLOR_PRESETS, rgbToCss } from '../lib/lightColors';

export default function LightColorCircles({ activeRgb, onPick, className = '' }) {
  return (
    <div className={`tm-light-color-circles${className ? ` ${className}` : ''}`} role="group" aria-label="Lichtfarbe wählen">
      {LIGHT_COLOR_PRESETS.map((preset) => {
        const isActive = activeRgb
          && Math.abs(activeRgb[0] - preset.rgb[0]) <= 18
          && Math.abs(activeRgb[1] - preset.rgb[1]) <= 18
          && Math.abs(activeRgb[2] - preset.rgb[2]) <= 18;
        return (
          <button
            key={preset.id}
            type="button"
            className={`tm-light-color-circle${isActive ? ' active' : ''}`}
            style={{ '--tm-light-color': rgbToCss(preset.rgb) }}
            onClick={() => onPick(preset.rgb)}
            aria-label={preset.label}
            title={preset.label}
          />
        );
      })}
    </div>
  );
}
