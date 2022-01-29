import "../styles/App.css";
import { useRef } from "react";
import ImageReader from "./ImageReader";

function App() {
  // Creamos una referencia a un etiqueta HTML y la llamamos inputEl
  const inputEl = useRef();

  const handleButton = () => {
    // current apunta a la etiqueta input
    inputEl.current.focus();
  };

  // Ejemplo para input de tipo file
  const handleImage = (imageData) => {
    console.log(imageData);
  };

  return (
    <div>
      {/* Asociamos esta etiqueta input a la referencia que hemos creado arriba inputEl*/}
      <input ref={inputEl} type="text" />
      <button onClick={handleButton}>Poner el foco en el input</button>
      <div>
        <ImageReader handleImage={handleImage} />
      </div>
    </div>
  );
}

export default App;
