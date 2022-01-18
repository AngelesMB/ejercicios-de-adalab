// Fichero src/components/App.js
import { useEffect, useState } from "react";
import callToApi from "../services/api-2"; // Importamos el servicio que acabamos de crear

const App = () => {
  // Estados

  const [starWarsData, setStarWarsData] = useState({});

  // Llamar al api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi().then((response) => {
      // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
      setStarWarsData(response);
    });
    // Aquí ponemos un array vacío porque queremos que se llame al API solo la primera vez
  }, []);

  return (
    <div>
      <h1>Llamar al API de Star Wars</h1>
      <h2>Características de {starWarsData.name}</h2>

      <ul>
        <li>Año de nacimiento: {starWarsData.birthYear}</li>
        <li>Estatura: {starWarsData.height} cm</li>
        <li>Peso: {starWarsData.mass} Kg</li>
        <li>Color de ojos: {starWarsData.eyeColor}</li>
      </ul>
    </div>
  );
};

export default App;
