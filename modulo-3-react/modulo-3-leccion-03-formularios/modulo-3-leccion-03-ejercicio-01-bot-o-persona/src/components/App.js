import "../styles/App.css";
import { useState } from "react";

function App() {
  const [mac, setMac] = useState(false);
  const [pot, setPot] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [onion, setOnion] = useState(false);
  const [beer, setBeer] = useState(false);

  const handleCheck = (ev) => {
    const id = ev.currentTarget.id;
    if (id === "mac") {
      setMac(ev.target.checked);
    } else if (id === "pot") {
      setPot(ev.target.checked);
    } else if (id === "nuts") {
      setNuts(ev.target.checked);
    } else if (id === "eggs") {
      setEggs(ev.target.checked);
    } else if (id === "onion") {
      setOnion(ev.target.checked);
    } else if (id === "beer") {
      setBeer(ev.target.checked);
    }
  };

  const renderMessage = () => {
    let message = "";
    if (pot && eggs && onion && !mac && !beer && !nuts) {
      message = "Eres una persona concebollista";
    } else {
      message = "Eres un robot sin paladar";
    }
    return message;
  };

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action="">
        <label htmlFor="">Macarrones</label>
        <input
          type="checkbox"
          name="ingredients"
          value="mac"
          id="mac"
          checked={mac}
          onChange={handleCheck}
        />
        <label htmlFor="">Patatas</label>
        <input
          type="checkbox"
          name="ingredients"
          value="pot"
          id="pot"
          checked={pot}
          onChange={handleCheck}
        />
        <label htmlFor="">Nueces</label>
        <input
          type="checkbox"
          name="ingredients"
          value="nuts"
          id="nuts"
          checked={nuts}
          onChange={handleCheck}
        />
        <label htmlFor="">Huevos</label>
        <input
          type="checkbox"
          name="ingredients"
          value="eggs"
          id="eggs"
          checked={eggs}
          onChange={handleCheck}
        />
        <label htmlFor="">Cebolla</label>
        <input
          type="checkbox"
          name="ingredients"
          value="onion"
          id="onion"
          checked={onion}
          onChange={handleCheck}
        />
        <label htmlFor="">Cerveza</label>
        <input
          type="checkbox"
          name="ingredients"
          value="beer"
          id="beer"
          checked={beer}
          onChange={handleCheck}
        />
        <p>{renderMessage()}</p>
      </form>
    </div>
  );
}

export default App;
