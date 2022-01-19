const Form = () => {
  return (
    <>
      <h2 className="title--medium mt-1 mb-1">Añadir película</h2>
      <form action="" className="form">
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
          />
          <div className="form__error">Error</div>
        </div>
        <div className="col2 mb-1">
          <label htmlFor="synopsis">Sinopsis:</label>
          <textarea
            placeholder="Érase una vez..."
            name="synopsis"
            id="synopsis"
          ></textarea>
          <div className="form__error">Error</div>
        </div>
        <button>Guardar</button>
      </form>
    </>
  );
};
export default Form;
