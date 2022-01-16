import { useState } from "react";
import "../styles/App.css";

function App() {
  // estados
  const [pageClass, setPageClass] = useState("");

  // eventos
  const handleLinkClick = () => {
    if (pageClass === "") {
      setPageClass("dark");
    } else {
      setPageClass("");
    }
  };

  // Como este valor depende de pageClass, no necesitamos declarar otra variable estado sino que podemos "calcular" su valor en base a pageClass
  const text = pageClass === "" ? "claro" : "oscuro";

  // render
  return (
    <div className={`page ${pageClass}`}>
      <h1>Modo claro/oscuro</h1>
      <p>Tienes activado el modo {text}</p>
      <button onClick={handleLinkClick}>Des/activar el modo oscuro</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil
        necessitatibus. Eius laborum in officia nisi enim error, iure ad
        laboriosam excepturi, eveniet eaque ducimus vel. Accusantium repudiandae
        commodi non!
      </p>
    </div>
  );
}

export default App;
