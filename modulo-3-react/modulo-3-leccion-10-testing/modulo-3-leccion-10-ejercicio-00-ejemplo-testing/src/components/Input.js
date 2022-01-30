import PropTypes from "prop-types";

function Input({ text, id, value, onChange, error }) {
  const handleChange = (ev) => {
    onChange(id, ev.currentTarget.value);
  };

  return (
    <li>
      <label className="form__label display-block" htmlFor={id}>
        {text}:
      </label>
      <input
        className="form__input-text"
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
      />
      {error && <p className="ml-1 text--error">{error}</p>}
    </li>
  );
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;
