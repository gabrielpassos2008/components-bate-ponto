import "./Tabela.css";

function Tabela({ colunas = [], dados = [] }) {
  return (
    <div className="tabela__wrapper">
      <table className="tabela">
        <thead>
          <tr>
            {colunas.map((coluna) => (
              <th key={coluna.chave}>{coluna.titulo}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((linha, indice) => (
            <tr key={linha.id ?? indice}>
              {colunas.map((coluna) => (
                <td key={coluna.chave}>
                  {coluna.renderizar
                    ? coluna.renderizar(linha)
                    : linha[coluna.chave]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
