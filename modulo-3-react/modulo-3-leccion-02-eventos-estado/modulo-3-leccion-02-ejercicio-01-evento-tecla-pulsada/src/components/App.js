import "../styles/App.css";

function App() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleKeyUp = (ev) => {
    ev.preventDefault();
    console.log("El evento lanzado es: ", ev._reactName);
    console.log("La tecla pulsada es: ", ev.key);
    console.log("El valor del input es: ", ev.target.value);
  };
  return (
    <div>
      <h1>Consolea la tecla pulsada</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" onKeyUp={handleKeyUp} />
      </form>
    </div>
  );
}

export default App;
