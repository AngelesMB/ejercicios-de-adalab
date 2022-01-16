import "../styles/App.scss";
import logo from "../images/adalab-logo-155x61.png";

function App() {
  return (
    <div>
      <header className="header">
        <a href="https://adalab.es/">
          <img
            className="header-img"
            src={logo}
            alt="Adalab logo"
            title="Adalab logo"
          />
        </a>
        <nav>
          <ul className="header-menu">
            <li>
              <a className="header-menu-item" href="https://adalab.es/blog/">
                Blog
              </a>
            </li>
            <li>
              <a
                className="header-menu-item"
                href="https://adalab.es/contacto/"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="main-title">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
