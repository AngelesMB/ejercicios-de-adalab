import { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";
import CounterButton from "./CounterButton";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClickCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Header text="Lifting" />
      <Counter counter={counter} />
      <CounterButton handleClickCounter={handleClickCounter} />
    </div>
  );
}

export default App;
