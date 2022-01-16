import { useState } from "react";
import "../styles/App.css";
import menuImg from "../images/ico-menu.svg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (ev) => {
    // Evitamos que navegue a otra página
    ev.preventDefault();
    setIsOpen(true);
  };

  const handleCloseClick = (ev) => {
    ev.preventDefault();
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Prueba de menú colapsable</h1>
      <div className={`containerMenuImg ${isOpen ? "hidden" : ""}`}>
        <a href="./" onClick={handleMenuClick}>
          <img src={menuImg} alt="" className="menuImg" />
        </a>
      </div>
      <div className={`containerMenu ${isOpen ? "" : "hidden"}`}>
        <a className="closeIcon" href="./" onClick={handleCloseClick}>
          X
        </a>
        <ul>
          <li>Quiénes somos</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
