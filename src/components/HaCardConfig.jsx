import { useState } from 'react';
import HaCardPicker from './HaCardPicker';
import HaCardEditorDialog from './HaCardEditorDialog';
import { cardSelectionPatch, describeCard } from '../lib/haCards';

export default function HaCardConfig({ widget, pageIndex, onUpdate, hass }) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  const applyCard = (card) => {
    onUpdate(pageIndex, widget.id, card ? cardSelectionPatch(widget, card) : { card: null });
  };

  return (
    <div className="tm-widget-inspector-section">
      <div className="tm-widget-inspector-label">Home-Assistant-Karte</div>
      <p className="tm-widget-inspector-hint">
        {widget.card
          ? describeCard(widget.card)
          : 'Entität, Kartenart oder eine vorhandene Dashboard-Karte wählen.'}
      </p>
      {widget.card ? (
        <button
          type="button"
          className="tm-btn-primary tm-btn-block"
          onClick={() => setEditingCard(widget.card)}
        >
          Karte bearbeiten
        </button>
      ) : null}
      <button
        type="button"
        className="tm-btn-secondary tm-btn-block"
        onClick={() => setPickerOpen(true)}
      >
        {widget.card ? 'Andere Karte wählen' : 'Karte wählen'}
      </button>
      {pickerOpen && (
        <HaCardPicker
          hass={hass}
          onClose={() => setPickerOpen(false)}
          onSelect={(card) => {
            setPickerOpen(false);
            setEditingCard(card);
          }}
        />
      )}
      {editingCard && (
        <HaCardEditorDialog
          card={editingCard}
          hass={hass}
          onClose={() => setEditingCard(null)}
          onSave={(card) => {
            applyCard(card);
            setEditingCard(null);
          }}
        />
      )}
    </div>
  );
}
