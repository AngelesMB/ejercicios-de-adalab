import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

const App = () => {
  // Con el hook useRouteMatch compruebo si la ruta actual coincide con /product/:productId
  const routeData = useRouteMatch("/product/:productId");
  // Si no coincide, routeData es null
  // Si sí coincide, routeData es un objeto con mucha información útil
  // La información que me interesa está en routeData.params.productId
  const productId = routeData !== null ? routeData.params.productId : "";
  console.log(routeData);

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
        <Route path="/product/:productId">
          <h2>Detalle del móvil con id: {productId}</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
