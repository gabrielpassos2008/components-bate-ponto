import "./Mensagem.css";

function Mensagem({ tipo = "info", texto }) {
  return <div className={`mensagem mensagem--${tipo}`}>{texto}</div>;
}

export default Mensagem;
