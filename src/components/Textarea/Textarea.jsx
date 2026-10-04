import Label from "../Label/Label";
import "./Textarea.css";

function Textarea({
  label,
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  erro,
  linhas = 4,
}) {
  const textareaId = id || name;

  return (
    <div className="campo">
      {label && (
        <Label texto={label} htmlFor={textareaId} required={required} />
      )}
      <textarea
        id={textareaId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        rows={linhas}
        className={`textarea ${erro ? "textarea--erro" : ""}`}
      />
      {erro && <span className="campo__erro">{erro}</span>}
    </div>
  );
}

export default Textarea;
