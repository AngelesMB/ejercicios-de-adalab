import MovieItem from "./MovieItem";

function MovieList(props) {
  const listHTML = props.moviesData.map((eachMovie) => (
    <MovieItem key={eachMovie.id} movieData={eachMovie}></MovieItem>
  ));

  return (
    <>
      <h2>Listado de películas</h2>
      <ul>{listHTML}</ul>
    </>
  );
}

export default MovieList;
