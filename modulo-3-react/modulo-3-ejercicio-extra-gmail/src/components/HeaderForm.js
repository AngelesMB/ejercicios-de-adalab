import "../styles/HeaderForm.scss";

const HeaderForm = (props) => {
  const handleSearchChange = (ev) => {
    props.updateSearch(ev.currentTarget.value);
  };
  return (
    <form action="">
      <label htmlFor="emailSearch">
        <input
          className="header__input"
          type="text"
          name="emailSearch"
          id="emailSearch"
          placeholder="Buscar un correo"
          value={props.searchValue}
          onChange={handleSearchChange}
        />
      </label>
    </form>
  );
};

export default HeaderForm;
