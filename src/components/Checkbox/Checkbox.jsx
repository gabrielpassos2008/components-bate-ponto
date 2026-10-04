import "./Checkbox.css";

function Checkbox({
  label,
  checked,
  onChange,
  name,
  id,
  disabled = false,
}) {
  const checkboxId = id || name;

  return (
    <label className="checkbox" htmlFor={checkboxId}>
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox__input"
      />
      <span className="checkbox__texto">{label}</span>
    </label>
  );
}

export default Checkbox;
