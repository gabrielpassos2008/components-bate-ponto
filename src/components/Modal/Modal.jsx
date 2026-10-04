import "./Modal.css";

function Modal({ aberto, titulo, onFechar, children }) {
  if (!aberto) {
    return null;
  }

  return (
    <div className="modal__overlay" onClick={onFechar}>
      <div className="modal" onClick={(evento) => evento.stopPropagation()}>
        <div className="modal__cabecalho">
          <h2 className="modal__titulo">{titulo}</h2>
          <button
            type="button"
            className="modal__fechar"
            onClick={onFechar}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
        <div className="modal__conteudo">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
