import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncButtonClick = () => {
    parseInt(count);
    // No podemos hacer count++ por ser const
    // Equivalente a count = count + 1
    setCount(count + 1);
  };
  const handleDecButtonClick = () => {
    parseInt(count);
    // Equivalente a count = count - 1
    setCount(count - 1);
  };
  const handleResetButtonClick = () => {
    // Equivalente a count = 0
    setCount(0);
  };
  return (
    <div>
      <p>Contador {count}</p>
      <button onClick={handleIncButtonClick}>+</button>
      <button onClick={handleDecButtonClick}>-</button>
      <button onClick={handleResetButtonClick}>Reset</button>
    </div>
  );
}

export default App;
