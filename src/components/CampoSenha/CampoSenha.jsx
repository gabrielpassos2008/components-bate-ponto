import { useState } from "react";
import Label from "../Label/Label";
import "./CampoSenha.css";

function CampoSenha({
  label,
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  erro,
}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const campoId = id || name;

  return (
    <div className="campo">
      {label && <Label texto={label} htmlFor={campoId} required={required} />}
      <div className={`campo-senha ${erro ? "campo-senha--erro" : ""}`}>
        <input
          id={campoId}
          name={name}
          type={mostrarSenha ? "text" : "password"}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="campo-senha__input"
        />
        <button
          type="button"
          className="campo-senha__alternar"
          onClick={() => setMostrarSenha((atual) => !atual)}
          disabled={disabled}
        >
          {mostrarSenha ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      {erro && <span className="campo__erro">{erro}</span>}
    </div>
  );
}

export default CampoSenha;
