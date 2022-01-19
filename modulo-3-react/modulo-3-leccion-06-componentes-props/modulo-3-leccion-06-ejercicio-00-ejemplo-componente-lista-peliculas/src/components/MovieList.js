import MovieItem from "./MovieItem";

const MovieList = (props) => {
  return (
    <ul className="cards">
      {props.moviesData.map((eachMovie) => (
        <MovieItem
          key={eachMovie.id}
          title={eachMovie.title}
          description={eachMovie.synopsis.substring(0, 40)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
