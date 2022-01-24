const InputGroupRadio = (props) => {
    const handleInputChange = (ev) => {
      props.handleChange(ev.target.value);
    };
    return (
        <div className="input-group-radio">
        <label className="label-radio" htmlFor={props.id}>
          {props.name}
        </label>
        {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
        <input
          type="radio"
          name="paymentType"
          id={props.id}
          value={props.id}
          checked={props.paymentType === props.id}
          onChange={handleInputChange}
        />
      </div>
    );
  };
  export default InputGroupRadio;