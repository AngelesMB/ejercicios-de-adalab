// Importamos useState desde React porque lo vamos a necesitar más abajo
import { useState } from 'react';

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {
  // Creamos la constante de estado email y la función para modificarla setEmail.
  // El valor inicial que va a tener email es un string vacío.
  const [email, setEmail] = useState("");

  // Creamos una función manejadora que se ejecutará cuando la usuaria cambie el input.
  const handleEmail = (ev) => {
    // Cogemos el valor del input.
    const inputValue = ev.target.value;
    // Ejecutamos la función setEmail para actualizar el valor del estado email.
    // Cuando ejecutamos la función setEmail, React guarda el valor del input en la constante email y re-renderiza la página.
    // Esta función no la hemos creado nosotras, nos la ha creado React al utilizar el useState.
    setEmail(inputValue);
  };

  // Retornamos todo el código HTML que queremos que React pinte en la página.
  return (
    <div>
      <h1>Generador de emails:</h1>
      <form>
        <label>
          Escribe un email:
          {/* En esta línea indicamos que cuando cambie el input se ejecute la función manejadora handleEmail. */}
          <input
            className="form__input-text"
            type="email"
            name="name"
            onChange={handleEmail}
          />
        </label>
      </form>
      {/* En esta línea usamos la constante email para pintar el HTML. */}
      <p>Tu email es: {email}</p>
      <p>
        {/* En esta línea usamos la constante email para pintar la propiedad href del link. */}
        {/* Estamos interpolando para conseguir que el valor de href sea algo como mailto:maria@gmail.com. */}
        {/* También estamos usando la constante email para pintar el texto del link. */}
        Pulsa en <a href={`mailto:${email}`}>{email}</a> para enviar un email.
      </p>
    </div>
  );
};

export default App;
