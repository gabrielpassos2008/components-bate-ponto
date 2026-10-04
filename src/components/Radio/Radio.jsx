import "./Radio.css";

function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
}) {
  return (
    <label className="radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="radio__input"
      />
      <span className="radio__texto">{label}</span>
    </label>
  );
}

export default Radio;
