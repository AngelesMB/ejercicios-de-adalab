import { useEffect, useState } from "react";
import callToApi from "../services/api-3";

const App = () => {
  // Estados

  // Creamos characters para guardar los personajes respondidos por el API, por eso es un array vacío
  const [characters, setCharacters] = useState([]);
  // Creamos searchName para gestionar el input de búsqueda, por eso es un string vacío
  const [searchName, setSearchName] = useState("");

  // useEffect

  useEffect(() => {
    // Aquí podemos poner código JS, por ejemplo podríamos llamar a callToApi dentro de un if

    // Llamamos al API pasando por parámetros el searchName
    callToApi(searchName).then((response) => {
      // Cuando el API responde guardamos los personajes en el estado
      setCharacters(response);
    });
    // Este useEffect depende de searchName por eso ponemos [searchName]
    // Cuando la usuaria cambia el searchName este useEffect se vuelve a ejecutar porque necesitamos llamar otra vez al API para obtener nuevos datos
  }, [searchName]);

  // Eventos

  const handleSearchName = (ev) => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchName(ev.target.value);
  };

  // Renderizado

  const renderCharacters = () => {
    // Pintamos el listado de personajes respondido por el API
    return characters.map((character, index) => {
      // El API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
      return <li key={index}>Nombre: {character.name}</li>;
    });
  };

  return (
    <div>
      <h1>Llamar al API de Star Wars:</h1>

      <form>
        <label htmlFor="name">
          Busca por el nombre de tu personaje favorito:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchName}
          onChange={handleSearchName}
        />
      </form>

      <h2>Personajes con el nombre: {searchName}</h2>
      <ul>{renderCharacters()}</ul>
    </div>
  );
};

export default App;
