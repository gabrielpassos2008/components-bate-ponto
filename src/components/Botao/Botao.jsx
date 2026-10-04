import "./Botao.css";

function Botao({
  texto,
  tipo = "button",
  variante = "primario",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={tipo}
      className={`botao botao--${variante}`}
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
}

export default Botao;
