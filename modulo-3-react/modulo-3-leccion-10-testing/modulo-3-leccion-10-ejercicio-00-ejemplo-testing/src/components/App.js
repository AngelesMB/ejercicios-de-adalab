import "../stylesheets/App.scss";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [newUserData, setNewUserData] = useState({ username: "", email: "" });

  const handleChangeInput = (name, value) => {
    setNewUserData({ ...newUserData, [name]: value });
  };

  return (
    <div className="App page">
      <header className="header">
        <h1 className="tittle--big mb-1">Probando ando!</h1>
      </header>
      <main>
        <h2 className="tittle--medium mb-1">Rellena el formulario</h2>
        <form action="">
          <ul>
            <Input
              text="Nombre de usuario"
              id="username"
              value={newUserData.username}
              onChange={handleChangeInput}
            />
            <Input
              text="Email"
              id="email"
              value={newUserData.email}
              onChange={handleChangeInput}
            />
          </ul>
          <button>Enviar</button>
          <p>{newUserData.username}</p>
          <p>{newUserData.email}</p>
        </form>
      </main>
    </div>
  );
}

export default App;
