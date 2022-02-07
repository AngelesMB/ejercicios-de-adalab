import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(ev) {
    setName(ev.currentTarget.value);
  }

  function handleFetch() {
    fetch(`http://localhost:3001/users?name=${name}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleAdd() {
    const dataUser = {
      name: name,
    };
    fetch(`http://localhost:3001/user/add`, {
      method: "POST",
      body: JSON.stringify(dataUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="App">
      <header>
        <h1>Probando nuestro servidor</h1>
      </header>
      <main>
        <input type="text" value={name} onChange={handleChange}></input>
        <button onClick={handleAdd}>Agregar Usuario</button>
        <button onClick={handleFetch}>Listado usuarios</button>
        <a href="http://localhost:3001/users/export">Descargar</a>
      </main>
    </div>
  );
}

export default App;
