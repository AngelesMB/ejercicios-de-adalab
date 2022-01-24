import MovieFormInput from "./MovieFormInput";
import MovieFormTextArea from "./MovieFormTextArea";

const Form = (props) => {
  const handleNewMovie = () => {
    props.handleNewMovie();
  };

  return (
    <>
      <h2 className="title--medium mt-1 mb-1">Añadir película</h2>
      <form action="" className="form" onSubmit={(ev) => ev.preventDefault()}>
        <MovieFormInput
          newTitle={props.newTitle}
          changeForm={props.changeForm}
        />
        <MovieFormTextArea
          newDescription={props.newDescription}
          changeForm={props.changeForm}
        />
        <button onClick={handleNewMovie}>Guardar</button>
      </form>
    </>
  );
};
export default Form;
