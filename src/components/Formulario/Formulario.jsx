import "./Formulario.css";

function Formulario({ onSubmit, children }) {
  function handleSubmit(evento) {
    evento.preventDefault();
    if (onSubmit) {
      onSubmit(evento);
    }
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Formulario;
