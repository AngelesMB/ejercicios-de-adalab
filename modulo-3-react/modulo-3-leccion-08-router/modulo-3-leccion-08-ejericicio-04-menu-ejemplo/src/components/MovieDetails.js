import { Link } from "react-router-dom";

function MovieDetails(props) {
  return (
    <div>
      <p>Detalle de película </p>
      <ul>
        <li>Titulo: {props.movieToShow.title}</li>
        <li>Año: {props.movieToShow.year}</li>
      </ul>
      <Link to="/list" className="menu__item">Volver al listado</Link>
    </div>
  );
}

export default MovieDetails;
