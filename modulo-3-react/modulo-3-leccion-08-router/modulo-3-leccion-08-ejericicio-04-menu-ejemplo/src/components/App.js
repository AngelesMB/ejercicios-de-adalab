import "../styles/App.css";
import { useState, useEffect } from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import getMoviesFromApis from "../services/fetchMovies";
import Contact from "./Contact";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getMoviesFromApis().then((data) => {
      setMoviesData(data);
    });
  }, []);

  // Volcamos en objeto routerData toda la info de la ruta
  const routerData = useRouteMatch("/movie/:movieId");
  // Encontramos el id de la película de la ruta seleccionada
  const movieId = routerData !== null ? routerData.params.movieId : null;
  // Buscamos ese id en nuestro array de películas para saber cuál mostrar
  const movieToShow = moviesData.find((eachMovie) => eachMovie.id === movieId);

  return (
    <div>
      <header>Este es el header de todas</header>
      <nav>
        <ul>
          <li className="menu__item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="menu__item">
            <Link to="/about-us">Quiénes somos</Link>
          </li>
          <li className="menu__item">
            <Link to="/list">Listado</Link>
          </li>
          <li className="menu__item">
            <Link to="/add">Añade una</Link>
          </li>
          <li className="menu__item">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {/* EJEMPLO IMPORTANDO COMPONENTE */}
        <Route exact path="/about-us">
          <Contact />
        </Route>
        <Route exact path="/list">
          <MovieList moviesData={moviesData}></MovieList>
        </Route>
        <Route exact path="/add">
          <h2>Añade una más</h2>
        </Route>
        <Route exact path="/contact">
          <h2>Algo más sobre nosotras</h2>
        </Route>
        <Route exact path="/movie/:movieId">
          <MovieDetails movieToShow={movieToShow}></MovieDetails>
        </Route>
        <Route exact path="/">
          <h2>Bienvenida</h2>
          <p>Esto es la página de inicio</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
