import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import { createHaCardEditor } from '../lib/haCardEditor';
import {
  canRenderHaCards,
  cardToYaml,
  describeCard,
  mountHaCard,
  parseCardYaml,
} from '../lib/haCards';

const PREVIEW_DELAY_MS = 250;

export default function HaCardEditorDialog({ card, hass, onClose, onSave, initialMode = 'visual' }) {
  useOverlayLock(true);
  const [config, setConfig] = useState(card);
  const [mode, setMode] = useState(initialMode);
  const [editorState, setEditorState] = useState('loading');
  const [yamlDraft, setYamlDraft] = useState(() => cardToYaml(card));
  const [yamlError, setYamlError] = useState('');
  const editorSlotRef = useRef(null);
  const previewRef = useRef(null);
  const editorRef = useRef(null);
  const hassRef = useRef(hass);
  const configRef = useRef(card);
  const editorTypeRef = useRef(null);

  hassRef.current = hass;
  configRef.current = config;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (mode !== 'visual') return undefined;
    const slot = editorSlotRef.current;
    if (!slot) return undefined;
    const current = configRef.current;

    if (editorRef.current && editorTypeRef.current === current?.type) {
      slot.replaceChildren(editorRef.current);
      try {
        editorRef.current.setConfig(current);
        setEditorState('ready');
      } catch {
        setEditorState('unsupported');
      }
      return undefined;
    }

    let cancelled = false;
    setEditorState('loading');
    slot.replaceChildren();

    const onConfigChanged = (event) => {
      event.stopPropagation();
      const next = event.detail?.config;
      if (!next || typeof next !== 'object') return;
      setConfig(next);
      try {
        event.currentTarget.setConfig(next);
      } catch {
        // The editor keeps its own state when it rejects a round-trip.
      }
    };

    (async () => {
      try {
        const editor = await createHaCardEditor(current, hassRef.current);
        if (cancelled) return;
        if (!editor) {
          editorRef.current = null;
          editorTypeRef.current = null;
          setEditorState('unsupported');
          return;
        }
        editor.addEventListener('config-changed', onConfigChanged);
        editorRef.current = editor;
        editorTypeRef.current = current?.type;
        slot.replaceChildren(editor);
        setEditorState('ready');
      } catch (error) {
        if (cancelled) return;
        console.warn('The Monitor: card editor failed', error);
        editorRef.current = null;
        editorTypeRef.current = null;
        setEditorState('unsupported');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [mode, config?.type]);

  useEffect(() => {
    if (editorRef.current && hass) editorRef.current.hass = hass;
  }, [hass]);

  const previewKey = JSON.stringify(config || null);

  useEffect(() => {
    const target = previewRef.current;
    if (!target || !config || !canRenderHaCards()) return undefined;
    let cancelled = false;
    const timer = window.setTimeout(async () => {
      const holder = document.createElement('div');
      holder.className = 'tm-ha-editor-preview-card';
      try {
        await mountHaCard(holder, config, hassRef.current, { preview: true });
        if (cancelled) return;
        target.replaceChildren(holder);
      } catch (error) {
        if (cancelled) return;
        const message = document.createElement('div');
        message.className = 'tm-ha-editor-note';
        message.textContent = error?.message || 'Vorschau nicht verfügbar';
        target.replaceChildren(message);
      }
    }, PREVIEW_DELAY_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [previewKey]);

  const switchToYaml = () => {
    setYamlDraft(cardToYaml(configRef.current));
    setYamlError('');
    setMode('yaml');
  };

  const readYaml = () => {
    try {
      const parsed = parseCardYaml(yamlDraft);
      if (!parsed) throw new Error('Die Karte braucht mindestens einen type.');
      setYamlError('');
      return parsed;
    } catch (error) {
      setYamlError(error.message);
      return null;
    }
  };

  const switchToVisual = () => {
    const parsed = readYaml();
    if (!parsed) return;
    setConfig(parsed);
    setMode('visual');
  };

  const save = () => {
    if (mode === 'yaml') {
      const parsed = readYaml();
      if (!parsed) return;
      onSave(parsed);
      return;
    }
    onSave(configRef.current);
  };

  return createPortal(
    <div className="tm-ha-picker-overlay" role="presentation">
      <button type="button" className="tm-ha-picker-backdrop" onClick={onClose} aria-label="Schließen" />
      <div className="tm-ha-editor-panel" role="dialog" aria-modal="true" aria-label="Karte bearbeiten">
        <div className="tm-ha-editor-header">
          <div className="tm-ha-editor-heading">
            <div className="tm-ha-editor-title">Karte bearbeiten</div>
            <div className="tm-ha-editor-subtitle">{describeCard(config)}</div>
          </div>
          <button type="button" className="tm-ha-editor-icon-btn" onClick={onClose} aria-label="Schließen">
            <X size={18} />
          </button>
        </div>

        <div className="tm-ha-editor-body">
          <div className="tm-ha-editor-pane tm-ha-editor-pane--form">
            {mode === 'visual' ? (
              <>
                {editorState === 'loading' ? (
                  <div className="tm-ha-editor-note">Editor wird geladen…</div>
                ) : null}
                {editorState === 'unsupported' ? (
                  <div className="tm-ha-editor-note">
                    Für diese Karte gibt es keinen visuellen Editor. Bearbeite sie im Code-Editor.
                  </div>
                ) : null}
                <div ref={editorSlotRef} className="tm-ha-editor-slot" />
              </>
            ) : (
              <>
                <textarea
                  className="tm-ha-editor-yaml"
                  value={yamlDraft}
                  onChange={(event) => {
                    setYamlDraft(event.target.value);
                    setYamlError('');
                  }}
                  spellCheck={false}
                  aria-label="Karten-YAML"
                />
                {yamlError ? <div className="tm-ha-editor-error">{yamlError}</div> : null}
              </>
            )}
          </div>
          <div className="tm-ha-editor-pane tm-ha-editor-pane--preview">
            <div className="tm-ha-editor-pane-label">Vorschau</div>
            <div ref={previewRef} className="tm-ha-editor-preview">
              {!canRenderHaCards() ? (
                <div className="tm-ha-editor-note">Die Vorschau erscheint im Home-Assistant-Dashboard.</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="tm-ha-editor-footer">
          <button
            type="button"
            className="tm-ha-editor-text-btn"
            onClick={mode === 'visual' ? switchToYaml : switchToVisual}
          >
            {mode === 'visual' ? 'Code-Editor anzeigen' : 'Visuellen Editor anzeigen'}
          </button>
          <div className="tm-ha-editor-actions">
            <button type="button" className="tm-ha-editor-text-btn" onClick={onClose}>
              Abbrechen
            </button>
            <button type="button" className="tm-ha-editor-primary-btn" onClick={save}>
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>,
    getOverlayRoot(),
  );
}
