import Label from "../Label/Label";
import "./Select.css";

function Select({
  label,
  options = [],
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  erro,
  placeholder = "Selecione...",
}) {
  const selectId = id || name;

  return (
    <div className="campo">
      {label && <Label texto={label} htmlFor={selectId} required={required} />}
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`select ${erro ? "select--erro" : ""}`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opcao) => (
          <option key={opcao.value} value={opcao.value}>
            {opcao.label}
          </option>
        ))}
      </select>
      {erro && <span className="campo__erro">{erro}</span>}
    </div>
  );
}

export default Select;
