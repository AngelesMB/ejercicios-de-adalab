import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

const Main = (props) => {
  return (
    <main>
      <h2 className="title--medium mb-1">Lista de películas</h2>
      {/* DESDE LA API CON UN MAP Ver MovieList.js*/}
      <MovieList moviesData={props.moviesData} />
      <MovieForm
        newTitle={props.newTitle}
        newDescription={props.newDescription}
        changeForm={props.changeForm}
        handleNewMovie={props.handleNewMovie}
        // handleChangeNewTitle={props.handleChangeNewTitle}
        // handleChangeNewDescription={props.handleChangeNewDescription}
      />
    </main>
  );
};
export default Main;
