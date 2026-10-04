import Modal from "../Modal/Modal";
import Botao from "../Botao/Botao";
import "./Confirmacao.css";

function Confirmacao({
  aberto,
  titulo,
  mensagem,
  onConfirmar,
  onCancelar,
}) {
  return (
    <Modal aberto={aberto} titulo={titulo} onFechar={onCancelar}>
      <p className="confirmacao__mensagem">{mensagem}</p>
      <div className="confirmacao__acoes">
        <Botao texto="Cancelar" variante="cancelar" onClick={onCancelar} />
        <Botao texto="Confirmar" variante="perigo" onClick={onConfirmar} />
      </div>
    </Modal>
  );
}

export default Confirmacao;
