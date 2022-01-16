import "../styles/App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleKeyUp = (ev) => {
    const message = ev.currentTarget.value;
    setText(message.replace(/[aeiou]/gi, "i"));
  };
  return (
    <div>
      <h1>Traductor mimimi</h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onKeyUp={handleKeyUp}
      ></textarea>
      <p>{text}</p>
    </div>
  );
}

export default App;
