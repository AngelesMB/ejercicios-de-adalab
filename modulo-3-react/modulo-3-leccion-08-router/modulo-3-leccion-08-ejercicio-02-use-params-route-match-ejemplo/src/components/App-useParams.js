import { Link, Route, Switch } from "react-router-dom";
import Product from "./Product";

const App = () => {
  return (
    <div>
      <h1>Tienda virtual de móviles</h1>

      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <h2>Página de inicio</h2>
        </Route>
        <Route path="/contact">
          <h2>Página de contacto</h2>
        </Route>
        <Route path="/products">
          <h2>Catálogo de móviles</h2>
          <nav>
            <ul>
              <li>
                <Link to="/product/43823">Ver detalle del iPhone</Link>
              </li>
              <li>
                <Link to="/product/345565">Ver detalle del Nokia</Link>
              </li>
            </ul>
          </nav>
        </Route>

        {/* Creo una ruta dinámica */}
        <Route path="/product/:productId">
          {/* Cuando la usuaria entre en una ruta que cumpla este patrón se renderizará el componente Product */}
          <Product />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
