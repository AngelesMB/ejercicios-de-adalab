import { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";

const App = () => {
  const [email, setEmail] = useState("");

  // Creamos la función updateEmail que le vamos a pasar a la hija Form
  // El componente Form ejecutará esta función cuando la usuaria cambie el email
  const updateEmail = (email) => {
    // Cuando Form ejecute esta función nos pasará el email por parámetros
    // En esta función guardamos el email en el estado
    setEmail(email);
  };

  return (
    <div>
      <h1>Generador de emails:</h1>
      <Form updateEmail={updateEmail} />
      <Preview email={email} />
    </div>
  );
};

export default App;
