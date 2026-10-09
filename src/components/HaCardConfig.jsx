import { useEffect, useState } from 'react';
import HaCardPicker from './HaCardPicker';
import {
  cardSelectionPatch,
  cardToYaml,
  describeCard,
  parseCardYaml,
} from '../lib/haCards';

export default function HaCardConfig({ widget, pageIndex, onUpdate, hass }) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [draft, setDraft] = useState(() => cardToYaml(widget.card));
  const [yamlError, setYamlError] = useState('');
  const cardKey = JSON.stringify(widget.card || null);

  useEffect(() => {
    const card = cardKey === 'null' ? null : JSON.parse(cardKey);
    setDraft(cardToYaml(card));
    setYamlError('');
  }, [cardKey]);

  const applyCard = (card) => {
    onUpdate(pageIndex, widget.id, card ? cardSelectionPatch(widget, card) : { card: null });
  };

  const applyDraft = () => {
    try {
      applyCard(parseCardYaml(draft));
      setYamlError('');
    } catch (error) {
      setYamlError(error.message);
    }
  };

  return (
    <div className="tm-widget-inspector-section">
      <div className="tm-widget-inspector-label">Home-Assistant-Karte</div>
      <p className="tm-widget-inspector-hint">
        {widget.card
          ? describeCard(widget.card)
          : 'Karte aus Mobile, Übersicht oder einem anderen Dashboard übernehmen.'}
      </p>
      <button
        type="button"
        className="tm-btn-secondary tm-btn-block"
        onClick={() => setPickerOpen(true)}
      >
        Karte wählen
      </button>
      <div className="tm-widget-inspector-field">
        <label className="tm-widget-inspector-field-label" htmlFor={`ha-card-yaml-${widget.id}`}>Karten-YAML</label>
        <textarea
          id={`ha-card-yaml-${widget.id}`}
          className="tm-input tm-ha-card-yaml"
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
            setYamlError('');
          }}
          placeholder={'type: tile\nentity: light.wohnzimmer'}
          spellCheck={false}
        />
      </div>
      {yamlError ? (
        <div className="tm-ha-card-error">{yamlError}</div>
      ) : null}
      <button
        type="button"
        className="tm-btn-secondary tm-btn-block"
        onClick={applyDraft}
      >
        YAML übernehmen
      </button>
      {pickerOpen && (
        <HaCardPicker
          hass={hass}
          onClose={() => setPickerOpen(false)}
          onSelect={(card) => {
            applyCard(card);
            setPickerOpen(false);
          }}
        />
      )}
    </div>
  );
}
