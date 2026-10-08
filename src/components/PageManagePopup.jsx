import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronUp, Plus, Trash2, X } from 'lucide-react';
import { getOverlayRoot, useOverlayLock } from '../lib/overlayPortal';
import { SLOT_LIMITS } from '../lib/layout';

export default function PageManagePopup({
  pages,
  activePageIndex,
  onClose,
  onSelectPage,
  onAddPage,
  onRemovePage,
  onMovePage,
  onRenamePage,
}) {
  useOverlayLock(true);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const canAdd = pages.length < SLOT_LIMITS.pages;
  const canRemove = pages.length > 1;

  return createPortal(
    <div className="tm-page-manage-overlay" role="presentation">
      <button
        type="button"
        className="tm-page-manage-backdrop"
        onClick={onClose}
        aria-label="Schließen"
      />
      <div
        className="tm-page-manage-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Seiten verwalten"
      >
        <div className="tm-page-manage-header">
          <div>
            <div className="tm-page-manage-title">Seiten verwalten</div>
            <div className="tm-page-manage-subtitle">Reihenfolge ändern, umbenennen oder löschen</div>
          </div>
          <button type="button" className="tm-page-manage-close" onClick={onClose} aria-label="Schließen">
            <X size={18} />
          </button>
        </div>

        <ul className="tm-page-manage-list">
          {pages.map((page, index) => (
            <li
              key={page.id}
              className={`tm-page-manage-row${index === activePageIndex ? ' active' : ''}`}
            >
              <button
                type="button"
                className="tm-page-manage-select"
                onClick={() => onSelectPage(index)}
                aria-current={index === activePageIndex ? 'true' : undefined}
              >
                <span className="tm-page-manage-index">{index + 1}</span>
                <input
                  type="text"
                  className="tm-page-manage-name"
                  value={page.name}
                  onChange={(event) => onRenamePage(index, event.target.value)}
                  onClick={(event) => event.stopPropagation()}
                  aria-label={`Name für Seite ${index + 1}`}
                />
              </button>

              <div className="tm-page-manage-actions">
                <button
                  type="button"
                  className="tm-page-manage-action"
                  onClick={() => onMovePage(index, index - 1)}
                  disabled={index === 0}
                  aria-label={`Seite ${index + 1} nach oben`}
                >
                  <ChevronUp size={18} />
                </button>
                <button
                  type="button"
                  className="tm-page-manage-action"
                  onClick={() => onMovePage(index, index + 1)}
                  disabled={index === pages.length - 1}
                  aria-label={`Seite ${index + 1} nach unten`}
                >
                  <ChevronDown size={18} />
                </button>
                <button
                  type="button"
                  className="tm-page-manage-action tm-page-manage-action--danger"
                  onClick={() => onRemovePage(index)}
                  disabled={!canRemove}
                  aria-label={`Seite ${index + 1} löschen`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="tm-page-manage-add"
          onClick={onAddPage}
          disabled={!canAdd}
        >
          <Plus size={18} />
          Neue Seite
        </button>

        {!canAdd && (
          <p className="tm-page-manage-hint">Maximal {SLOT_LIMITS.pages} Seiten.</p>
        )}
      </div>
    </div>,
    getOverlayRoot(),
  );
}
