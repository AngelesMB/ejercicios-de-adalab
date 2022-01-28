import "../styles/App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <h2>Este título aparece en la página de inicio/overview.</h2>
        </Route>
        <Route exact path="/repos">
          <h2>Este título solo aparece en la página de repositorios.</h2>
        </Route>
        <Route exact path="/packages">
          <h2>Este título solo aparece en la página de packages.</h2>
        </Route>
        <Route exact path="/teams">
          <h2>Este título solo aparece en la página de equipos.</h2>
        </Route>
        <Route exact path="/projects">
          <h2>Este título solo aparece en la página de proyectos.</h2>
        </Route>
        <Route exact path="/settings">
          <h2>Este título solo aparece en la página de configuración.</h2>
        </Route>
        <Route>
          <h2>Página no encontrada.</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
