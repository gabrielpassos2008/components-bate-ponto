import "./EmptyState.css";

function EmptyState({ titulo, mensagem }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icone">∅</div>
      <h3 className="empty-state__titulo">{titulo}</h3>
      {mensagem && <p className="empty-state__mensagem">{mensagem}</p>}
    </div>
  );
}

export default EmptyState;
