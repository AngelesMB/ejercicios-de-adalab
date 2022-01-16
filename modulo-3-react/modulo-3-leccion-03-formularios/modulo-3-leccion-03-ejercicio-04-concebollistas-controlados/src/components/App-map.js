import "../styles/App.css";
import { useState } from "react";

function App() {
  const [ingredientsRender, setIngredientesRender] = useState([
    "Macarrones",
    "Patatas",
    "Nueces",
    "Huevos",
    "Cebolla",
    "Cerveza",
  ]);
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
    setIngredients([
      "Macarrones",
      "Patatas",
      "Nueces",
      "Huevos",
      "Cebolla",
      "Cerveza",
    ]);
  };

  const renderMessage = () => {
    let message = "";
    if (
      ingredients.includes("Patatas") &&
      ingredients.includes("Huevos") &&
      ingredients.includes("Cebolla") &&
      !ingredients.includes("Macarrones") &&
      !ingredients.includes("Nueces") &&
      !ingredients.includes("Cerveza")
    ) {
      message = "Eres una persona concebollista";
    } else {
      message = "Eres un robot sin paladar";
    }
    return message;
  };

  const renderCheckbox = () => {
    return ingredientsRender.map((eachIngredient, index) => {
      return (
        <label key={index} htmlFor={`ingre-${eachIngredient}`}>
          {eachIngredient}
          <input
            type="checkbox"
            name="ingredients"
            value={eachIngredient}
            id={`ingre-${eachIngredient}`}
            checked={ingredients.includes(eachIngredient)}
            onChange={handleCheck}
          />
        </label>
      );
    });
  };

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action="">
        {renderCheckbox()}
        <p>{renderMessage()}</p>
        <button onClick={handleReset}>Desmarcar todos</button>
        <button onClick={handleSelectAll}>Marcar todos</button>
      </form>
    </div>
  );
}

export default App;
