const MovieFormInput = (props) => {
  // funciones traductoras que pasan param limpios a app (vs pasar el ev entero)
  const handleChangeNewTitle = (ev) => {
    props.changeForm("newTitle", ev.currentTarget.value);
  };
  return (
    <div className="col2 mb-1">
      <label className="form__label" htmlFor="title">
        Título:
      </label>
      <input
        type="text"
        placeholder="Ej: Die hard"
        className="form__input-text"
        name="title"
        id="title"
        value={props.newTitle}
        onChange={handleChangeNewTitle}
      />
    </div>
  );
};
export default MovieFormInput;
