import "../styles/App.css";
import { useState } from "react";

function App() {
  // Pintar usando push
  const list = [];
  for (let index = 0; index < 10; index++) {
    list.push(<li key={index}>Elemento #{index}</li>);
  }
  // Pintar usando map MEJOR
  const adalabers = ["María", "Lucía", "Sofía", "Nerea"];

  const renderAdalabers = () => {
    // Map nos da el índice de cada elemento del array
    return adalabers.map((adalaber, index) => {
      return (
        // Este es el index que nos da el map
        <li key={index}>
          <span className="adalaber__prefix">El nombre de la alumna es: </span>
          <strong className="adalaber__name">{adalaber}</strong>
        </li>
      );
    });
  };
  const adalabers2 = [
    // Aquí sí tenemos un id
    { id: "8341", name: "Juana" },
    { id: "2676", name: "Jimena" },
    { id: "1004", name: "Jara" },
  ];

  const renderAdalabers2 = () => {
    return adalabers2.map((adalaber) => {
      return (
        // Este es el id de cada elemento del array
        <li key={adalaber.id}>
          <span className="adalaber__prefix">El nombre de la alumna es: </span>
          <strong className="adalaber__name">{adalaber.name}</strong>
        </li>
      );
    });
  };

  // -----------------------------------------------------------------------------
  // Crearmos las series en el estado indicando el array inicial
  const [series, setSeries] = useState([
    { id: "123", isFavorite: false, name: "Juego de tronos" },
    { id: "456", isFavorite: false, name: "Las chicas Gilmore" },
    { id: "678", isFavorite: false, name: "Gambita de Dama" },
  ]);

  // Función manejadora que se ejecuta cuando la usuaria pulsa en una serie
  const handleFavorite = (ev) => {
    // Obtenemos el id de la serie pintada. Este id lo estamos renderizando dentro del map
    // Por cierto aquí solo puedo usar currentTarget y no target porque quiero leer el id de li escuchado
    const clickedSerieId = ev.currentTarget.id;
    // Buscamos la serie pulsada
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    // Invertimos la propiedad de serie pintada, si antes era false ahora es true y viceversa
    foundSerie.isFavorite = !foundSerie.isFavorite;
    // Guardamos las series en el estado usando spread (lo explicamos más abajo)
    setSeries([...series]);
  };

  const renderSeries = () => {
    return series.map((serie) => {
      return (
        // Renderizamos cada serie añdiendo el atributo id
        <li key={serie.id} id={serie.id} onClick={handleFavorite}>
          <h2>{serie.name}</h2>
          {/* Pintamos si cada serie es favorita usando el atributo isFavorite */}
          <p>Es mi serie favorita: {serie.isFavorite ? "Sí" : "No"}</p>
        </li>
      );
    });
  };
  // Estados

  const [series2, setSeries2] = useState([
    { id: "123", isFavorite: false, name: "Juego de tronos" },
    { id: "456", isFavorite: false, name: "Las chicas Gilmore" },
    { id: "678", isFavorite: false, name: "Gambita de Dama" },
  ]);
  const [searchName, setSearchName] = useState("");
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);

  // Eventos

  const handleFavorite2 = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerie = series2.find((serie) => serie.id === clickedSerieId);
    foundSerie.isFavorite = !foundSerie.isFavorite;
    setSeries2([...series2]);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked);
  };

  // Funciones de renderizado

  const renderSeries2 = () => {
    return (
      series2
        // Filtramos por nombre
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // Filtramos por favorito
        .filter((serie) => {
          if (searchIsFavorite === true) {
            return serie.isFavorite === true;
          } else {
            return true;
          }
        })
        // Mapeamos
        .map((serie) => {
          return (
            <li key={serie.id} id={serie.id} onClick={handleFavorite2}>
              <h2>{serie.name}</h2>
              <p>Es mi serie favorita: {serie.isFavorite ? "Sí" : "No"}</p>
            </li>
          );
        })
    );
  };
  // -------------------------------------------------------------------------
  // Estados

  const [shipping, setShipping] = useState({});

  // Eventos

  const handleAddress = (ev) => {
    shipping.address = ev.target.value;
    setShipping({ ...shipping });
  };

  const handleCity = (ev) => {
    // Equivalente a la forma de hacerlo arriba
    setShipping({ ...shipping, city: ev.target.value });
  };

  return (
    <div>
      <h1>Trabajando con Arrays</h1>
      <ul>{list}</ul>
      <ul>{renderAdalabers()}</ul>
      <ul>{renderAdalabers2()}</ul>
      <h1>Lista de series favoritas: haz click y márcalas como favoritas</h1>
      <ul>{renderSeries()}</ul>
      <h2>Busca y marca como favorita</h2>
      <ul>{renderSeries2()}</ul>
      <form>
        <label htmlFor="searchName">Buscar por nombre de serie</label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={handleSearchName}
        />
        <label htmlFor="searchIsFavorite">Mostrar solo las favoritas</label>
        <input
          type="checkbox"
          id="searchIsFavorite"
          checked={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
      <h1>Indica tu dirección para el envío:</h1>

      <form>
        <label htmlFor="address">Indica tu dirección postal:</label>
        <input
          type="text"
          id="address"
          value={shipping.address}
          onChange={handleAddress}
        />
        <label htmlFor="city">Indica tu ciudad:</label>
        <input
          type="text"
          id="city"
          value={shipping.city}
          onChange={handleCity}
        />
      </form>

      <p>
        Te lo vamos a enviar a la dirección <strong>{shipping.address}</strong>{" "}
        en la ciudad
        <strong> {shipping.city}</strong>.
      </p>
    </div>
  );
}

export default App;
