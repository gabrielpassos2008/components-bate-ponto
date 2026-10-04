import "./Paginacao.css";

function Paginacao({ paginaAtual, totalPaginas, onMudarPagina }) {
  if (totalPaginas <= 1) {
    return null;
  }

  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <div className="paginacao">
      <button
        type="button"
        className="paginacao__botao"
        onClick={() => onMudarPagina(paginaAtual - 1)}
        disabled={paginaAtual === 1}
      >
        Anterior
      </button>

      <div className="paginacao__paginas">
        {paginas.map((pagina) => (
          <button
            key={pagina}
            type="button"
            className={`paginacao__numero ${
              pagina === paginaAtual ? "paginacao__numero--ativo" : ""
            }`}
            onClick={() => onMudarPagina(pagina)}
          >
            {pagina}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="paginacao__botao"
        onClick={() => onMudarPagina(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
      >
        Próxima
      </button>
    </div>
  );
}

export default Paginacao;
