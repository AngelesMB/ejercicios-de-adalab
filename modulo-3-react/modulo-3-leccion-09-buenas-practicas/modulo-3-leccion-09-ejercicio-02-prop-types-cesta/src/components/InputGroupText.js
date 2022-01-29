import PropTypes from "prop-types";

const InputGroupText = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <input
        className="input-text"
        type="text"
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.value}
        onChange={handleInputChange}
      />
    </div>
  );
};

InputGroupText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default InputGroupText;
