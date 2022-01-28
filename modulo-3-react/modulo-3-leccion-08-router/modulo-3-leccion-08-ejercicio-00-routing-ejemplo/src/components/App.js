import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Switch>
        <Route path="/contacto/formulario">
          <h2>Página del formulario de contacto</h2>
        </Route>

        <Route path="/contacto">
          <h2>Página de contacto</h2>
        </Route>
      </Switch>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Ir a contacto</Link>
          </li>
          <li>
            <Link to="/contacto/formulario">Ir al formulario de contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
