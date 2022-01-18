// imporamos useEffect además de useState
import { useEffect, useState } from "react";

const App = () => {
  // Estados

  const [starWarsData, setStarWarsData] = useState({});

  // Llamar al api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos al API
    fetch("https://swapi.dev/api/people/5") // El 5 es el id de la Princesa Leia
      .then((response) => response.json())
      .then((responseData) => {
        // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
        setStarWarsData(responseData);
      });
  }, []);

  return (
    <div>
      <h1>Llamar al API de Star Wars</h1>
      <h2>Características de {starWarsData.name}</h2>

      <ul>
        <li>Año de nacimiento: {starWarsData.birth_year}</li>
        <li>Estatura: {starWarsData.height} cm</li>
        <li>Peso: {starWarsData.mass} Kg</li>
        <li>Color de ojos: {starWarsData.eye_color}</li>
      </ul>
    </div>
  );
};

export default App;
