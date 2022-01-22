import "../styles/Form.scss";

const Form = (props) => {
  const handleChange = (ev) => {
    props.updateSearch(ev.currentTarget.value);
  };
  return (
    <form action="" className="form">
      <label htmlFor="nameFilter" className="form__label">
        Filtra empleados por nombre o apellido:
        <input
          className="form__input"
          type="text"
          name="nameFilter"
          id="nameFilter"
          value={props.searchValue}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Form;
