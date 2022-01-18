import { useEffect, useState } from "react";
// Importamos el servicio del local storage
import ls from "../services/localStorage";

// Si consoleas ls verás que es el objeto con las 4 funciones que hemos exportado en el servicio
console.log(ls);

const App = () => {
  // Estados

  // Obtenemos el nombre del local storage
  // Si hay datos en el local storage esta función los devolverá
  // Si no hay datos en el local storage esta función devolverá el segundo parámetro, es decir, un string vacío
  const localStorageName = ls.get("name", "");
  // Usamos localStorageName como parámetro de useState porque queremos que al arrancar la página name tenga lo que había en el local storage
  const [name, setName] = useState(localStorageName);

  // Hacemos lo mismo con el email pero en una sola línea
  // Programarlo en una sola línea nos gusta más
  const [email, setEmail] = useState(ls.get("email", ""));

  // useEffect

  // Usamos useEffect para guardar los datos en el local storage
  // Cuando React renderice y pinte el HTML en la página ejecutará este useEffect
  useEffect(() => {
    // Guardamos el nombre y el email en el local storage
    ls.set("name", name);
    ls.set("email", email);

    // Este useEffect solo se ejecutará cuando cambie el nombre o el email
    console.log("Ha cambiado el nombre o el email");
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
      <h1>Usando el local storage:</h1>

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
