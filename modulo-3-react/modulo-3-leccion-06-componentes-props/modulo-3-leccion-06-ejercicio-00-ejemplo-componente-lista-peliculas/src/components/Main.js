import Form from "./Form";
import MovieList from "./MovieList";

const Main = (props) => {
  return (
    <main>
      <h2 className="title--medium mb-1">Lista de películas</h2>
      {/* <MovieItem
          title="El diario de Noa"
          description="Un joven pobre pero apasionado.."
        />
        <MovieItem
          title="Orgullo y prejuicio"
          description="Saltan chispas cuando la enérg.."
        />
        <MovieItem
          title="Lo que el viento se llevó"
          description="La hija manipuladora del propi.."
        />
        <MovieItem
          title="Historia de amor (Love story)"
          description="Un chico y una chica de difere.."
        />
        <MovieItem
          title="Un paseo para recordar"
          description="Dos adolescentes de Carolina d.."
        /> */}

      {/* AHORA DESDE LA API CON UN MAP Ver MovieList.js*/}
      <MovieList moviesData={props.moviesData} />
      <Form />
    </main>
  );
};
export default Main;
