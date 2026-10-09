import { useState } from 'react';
import HaCardPicker from './HaCardPicker';
import HaNativeCardPicker from './HaNativeCardPicker';
import HaCardEditorDialog from './HaCardEditorDialog';
import { canRenderHaCards, cardSelectionPatch, describeCard } from '../lib/haCards';

export default function HaCardConfig({ widget, pageIndex, onUpdate, hass }) {
  const [picker, setPicker] = useState(null);
  const [editing, setEditing] = useState(null);

  const applyCard = (card) => {
    onUpdate(pageIndex, widget.id, card ? cardSelectionPatch(widget, card) : { card: null });
  };

  const openPicker = () => setPicker(canRenderHaCards() ? 'native' : 'dashboard');

  const editPicked = (card) => {
    setPicker(null);
    const manual = !card?.type;
    setEditing({
      card: manual ? { type: '' } : card,
      mode: manual ? 'yaml' : 'visual',
    });
  };

  return (
    <div className="tm-widget-inspector-section">
      <div className="tm-widget-inspector-label">Home-Assistant-Karte</div>
      <p className="tm-widget-inspector-hint">
        {widget.card
          ? describeCard(widget.card)
          : 'Karte aus der Home-Assistant-Kartenauswahl hinzufügen.'}
      </p>
      {widget.card ? (
        <button
          type="button"
          className="tm-btn-primary tm-btn-block"
          onClick={() => setEditing({ card: widget.card, mode: 'visual' })}
        >
          Karte bearbeiten
        </button>
      ) : null}
      <button
        type="button"
        className="tm-btn-secondary tm-btn-block"
        onClick={openPicker}
      >
        {widget.card ? 'Andere Karte wählen' : 'Karte wählen'}
      </button>
      {picker === 'native' && (
        <HaNativeCardPicker
          hass={hass}
          onClose={() => setPicker(null)}
          onSelect={editPicked}
          onUnavailable={() => setPicker('dashboard')}
          onOpenDashboardCopy={() => setPicker('dashboard')}
        />
      )}
      {picker === 'dashboard' && (
        <HaCardPicker
          hass={hass}
          onClose={() => setPicker(null)}
          onSelect={editPicked}
        />
      )}
      {editing && (
        <HaCardEditorDialog
          card={editing.card}
          initialMode={editing.mode}
          hass={hass}
          onClose={() => setEditing(null)}
          onSave={(card) => {
            applyCard(card);
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}
