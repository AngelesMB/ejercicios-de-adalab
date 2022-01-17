import "../styles/App.css";
import { useState } from "react";

function App() {
  const [series, setSeries] = useState([
    { id: "123", name: "Juego de tronos" },
    { id: "456", name: "Las chicas Gilmore" },
    { id: "678", name: "Gambita de Dama" },
  ]);
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    const foundInFavorties = favorites.find(
      (favorite) => favorite.id === clickedSerieId
    );
    if (foundInFavorties === undefined) {
      setFavorites([...favorites, foundSerie]);
    } else {
      setFavorites(
        favorites.filter((favorite) => favorite.id !== clickedSerieId)
      );
    }
  };

  const renderSeries = () => {
    return series.map((serie) => {
      return (
        <li key={serie.id} id={serie.id} onClick={handleFavorite}>
          <h2>{serie.name}</h2>
          <p>Es mi serie favorita: {favorites.includes(serie) ? "Sí" : "No"}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Trabajando con Arrays</h1>
      <h1>Lista de series favoritas: haz click y márcalas como favoritas</h1>
      <ul>{renderSeries()}</ul>
    </div>
  );
}

export default App;
