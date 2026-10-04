import "./Label.css";

function Label({ texto, htmlFor, required = false }) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {texto}
      {required && <span className="label__obrigatorio"> *</span>}
    </label>
  );
}

export default Label;
