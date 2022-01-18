import { useEffect, useState } from "react";
import ls from "../services/localStorage";

const App = () => {
  // Estados

  // En vez de leer la propiedad name leemos la propiedad data y su valor por defecto es un objeto vacío: ls.get('data', {})
  // Del objeto (vacío o relleno que nos devuelve ls.get) obtenemos la propiedad name: ls.get('data', {}).name
  // Si la propiedad name existe la usamos, si no, usamos un string vacío: ls.get('data', {}).name || ''
  const [name, setName] = useState(ls.get("data", {}).name || "");
  // Lo mismo para el email
  const [email, setEmail] = useState(ls.get("data", {}).email || "");

  // useEffect

  // Usamos useEffect para guardar los datos en el local storage
  useEffect(() => {
    // En vez de guardar el nombre por un lado y el email por otro
    // Guardamos en el local storage un objeto data con las propiedad name y email: { name: 'loquesea', email: 'loquefuere' }
    ls.set("data", {
      name: name,
      email: email,
    });
  }, [name, email]);

  // Eventos

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  return (
    <div>
      <h2>Usando el local storage:</h2>

      <form>
        <label htmlFor="name">Escribe tu nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Maricarmen"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="email">Escribe tu email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="mari.carmen@gmail.com"
          value={email}
          onChange={handleEmail}
        />
      </form>

      <h2>Tus datos son:</h2>
      <p>Tu nombre es: {name}</p>
      <p>Tu email es: {email}</p>
    </div>
  );
};

export default App;
