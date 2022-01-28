import { Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Github</h1>
      <nav>
        <ul>
          <li className="menu__item">
            <Link to="/">Overview</Link>
          </li>
          <li className="menu__item">
            <Link to="/repos">Repositories</Link>
          </li>
          <li className="menu__item">
            <Link to="/packages">Packages</Link>
          </li>
          <li className="menu__item">
            <Link to="/teams">Teams</Link>
          </li>
          <li className="menu__item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="menu__item">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      {/* Array of paths */}
      <Route path={["/projects", "/settings"]}>
        <div>No apta para manazas.</div>
      </Route>
    </header>
  );
};
export default Header;
