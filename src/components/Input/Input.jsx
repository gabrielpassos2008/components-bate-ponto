import Label from "../Label/Label";
import "./Input.css";

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  erro,
}) {
  const inputId = id || name;

  return (
    <div className="campo">
      {label && <Label texto={label} htmlFor={inputId} required={required} />}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`input ${erro ? "input--erro" : ""}`}
      />
      {erro && <span className="campo__erro">{erro}</span>}
    </div>
  );
}

export default Input;
