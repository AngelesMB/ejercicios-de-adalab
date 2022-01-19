import { useState } from "react";
import Preview from "./Preview";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(
    `Se renderiza el componente App con el nombre ${name} y el email ${email}`
  );

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Escribe tu nombre</label>
        <input id="name" value={name} onChange={handleName} />
        <label htmlFor="email">Escribe tu email</label>
        <input id="email" value={email} onChange={handleEmail} />
      </form>
      <Preview name={name} email={email} />
    </div>
  );
};

export default App;
