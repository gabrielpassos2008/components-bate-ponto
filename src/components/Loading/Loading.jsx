import "./Loading.css";

function Loading({ texto = "Carregando..." }) {
  return (
    <div className="loading">
      <div className="loading__spinner" />
      {texto && <span className="loading__texto">{texto}</span>}
    </div>
  );
}

export default Loading;
