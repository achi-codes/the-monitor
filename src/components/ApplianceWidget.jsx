import { Timer, WashingMachine, Check } from 'lucide-react';
import { readAppliance } from '../lib/appliance';
import { getEntityAreaName } from '../lib/entities';

const RING = 2 * Math.PI * 80;

export default function ApplianceWidget({ widget, hass, editMode, onConfigure }) {
  const model = readAppliance(hass, widget);
  const area = widget.entity_id ? getEntityAreaName(hass, widget.entity_id) : '';

  if (!widget.entity_id) {
    return (
      <button type="button" className="tm-appliance tm-appliance--empty" onClick={onConfigure} disabled={!editMode && !onConfigure}>
        <WashingMachine size={28} />
        <span>Haushaltsgerät einrichten</span>
      </button>
    );
  }

  const progress = model.progress ?? (model.phase === 'done' ? 100 : 0);
  return (
    <section className={`tm-appliance tm-appliance--${model.phase}`} aria-label={`${model.name}: ${model.statusLabel}`}>
      <div className="tm-appliance-head">
        <h2 className="tm-appliance-title">{model.name}</h2>
        <p className="tm-appliance-sub">{area || model.statusLabel}</p>
      </div>
      <div className="tm-appliance-ring">
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="80" className="tm-appliance-track" />
          <circle
            cx="100"
            cy="100"
            r="80"
            className="tm-appliance-bar"
            strokeDasharray={`${((progress / 100) * RING).toFixed(1)} ${RING.toFixed(1)}`}
            transform="rotate(-90 100 100)"
          />
        </svg>
        <div className="tm-appliance-center">
          {model.phase === 'done' ? <Check className="tm-appliance-check" /> : (
            <strong>{model.progress != null ? `${model.progress}%` : model.statusLabel}</strong>
          )}
          {model.program && <span>{model.program}</span>}
        </div>
      </div>
      <div className="tm-appliance-foot">
        {model.phase === 'running' && model.remainingLabel ? (
          <>
            <Timer size={18} />
            {model.remainingLabel}
          </>
        ) : model.statusLabel}
      </div>
    </section>
  );
}
