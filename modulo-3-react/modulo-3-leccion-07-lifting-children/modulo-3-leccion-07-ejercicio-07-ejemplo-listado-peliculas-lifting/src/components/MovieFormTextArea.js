const MovieFormTextArea = (props) => {
  // funciones traductoras que pasan param limpios a app (vs pasar el ev entero)
  const handleChangeNewDescription = (ev) => {
    props.changeForm("newDescription", ev.currentTarget.value);
  };
  return (
    <div className="col2 mb-1">
      <label htmlFor="synopsis">Sinopsis:</label>
      <textarea
        placeholder="Érase una vez..."
        name="synopsis"
        id="synopsis"
        value={props.newDescription}
        onChange={handleChangeNewDescription}
      ></textarea>
    </div>
  );
};
export default MovieFormTextArea;
