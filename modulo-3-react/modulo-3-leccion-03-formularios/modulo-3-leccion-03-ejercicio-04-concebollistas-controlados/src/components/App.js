import "../styles/App.css";
import { useState } from "react";

function App() {
  // Para checkbox guardar estado en ARRAY, no en objeto
  const [ingredients, setIngredients] = useState([]);

  const handleCheck = (ev) => {
    const checked = ev.currentTarget.checked;
    const value = ev.currentTarget.value;
    // Si está marcado, añado al array de estado
    if (checked) {
      // Pero NO podemos hacer push, sino spread
      setIngredients([...ingredients, value]);
      // Si está desmarcado, borro del array de estado
    } else {
      // Con filter, generamos un nuevo array que filtrará aquellos ingredientes que NO coincidan con el value desmarcado. Eso es lo que le pasamos a setIngredients (todos los que estaban, menos el desmarcado)
      setIngredients(
        ingredients.filter((eachIngredient) => eachIngredient !== value)
      );
    }
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    // Volvemos el array estado a su estado original vacío
    // Si solo hacemos esto, vaciamos el estado pero no se desmarcan los checkbox, hay que re-renderizar controlando los inputs
    setIngredients([]);
  };

  const handleSelectAll = (ev) => {
    ev.preventDefault();
    setIngredients(["mac", "pot", "nuts", "eggs", "onion", "beer"]);
  };

  const renderMessage = () => {
    let message = "";
    if (
      ingredients.includes("pot") &&
      ingredients.includes("eggs") &&
      ingredients.includes("onion") &&
      !ingredients.includes("mac") &&
      !ingredients.includes("nuts") &&
      !ingredients.includes("beer")
    ) {
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
        <label htmlFor="ingre-mac">
          Macarrones
          <input
            type="checkbox"
            name="ingredients"
            value="mac"
            id="ingre-mac"
            // Si el includes devuelve true, se marcará, siempre que esté presente en el array de estados
            checked={ingredients.includes("mac")}
            onChange={handleCheck}
          />
        </label>
        <label htmlFor="ingre-pot">
          Patatas
          <input
            type="checkbox"
            name="ingredients"
            value="pot"
            id="ingre-pot"
            checked={ingredients.includes("pot")}
            onChange={handleCheck}
          />
        </label>
        <label htmlFor="ingre-nuts">
          Nueces
          <input
            type="checkbox"
            name="ingredients"
            value="nuts"
            id="ingre-nuts"
            checked={ingredients.includes("nuts")}
            onChange={handleCheck}
          />
        </label>
        <label htmlFor="ingre-eggs">
          Huevos
          <input
            type="checkbox"
            name="ingredients"
            value="eggs"
            id="ingre-eggs"
            checked={ingredients.includes("eggs")}
            onChange={handleCheck}
          />
        </label>
        <label htmlFor="ingre-onion">
          Cebolla
          <input
            type="checkbox"
            name="ingredients"
            value="onion"
            id="ingre-onion"
            checked={ingredients.includes("onion")}
            onChange={handleCheck}
          />
        </label>
        <label htmlFor="ingre-beer">
          Cerveza
          <input
            type="checkbox"
            name="ingredients"
            value="beer"
            id="ingre-beer"
            checked={ingredients.includes("beer")}
            onChange={handleCheck}
          />
        </label>
        <p>{renderMessage()}</p>
        <button onClick={handleReset}>Desmarcar todos</button>
        <button onClick={handleSelectAll}>Marcar todos</button>
      </form>
    </div>
  );
}

export default App;
