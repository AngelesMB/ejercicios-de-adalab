import { Link } from "react-router-dom";

function MovieItem(props) {
  return (
    <li>
      <article>
        <h3>{props.movieData.title}</h3>
        <p>{props.movieData.synopsis}...</p>
        <Link to={`/movie/${props.movieData.id}`} className="menu__item">Más info</Link>
      </article>
    </li>
  );
}

export default MovieItem;
