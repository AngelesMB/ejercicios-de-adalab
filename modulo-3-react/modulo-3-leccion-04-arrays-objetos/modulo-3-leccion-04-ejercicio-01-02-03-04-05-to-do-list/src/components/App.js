import "../styles/App.css";

function App() {
  const tasks = [
    "Comprar harina, jamón y pan rallado",
    "Hacer croquetas ricas",
    "Ir a la puerta de un gimnasio",
    "Comerme las croquetas mirando a la gente que entra en el gimnasio",
  ];
  const renderTitle = () => {
    return <h1>Mi lista de tareas</h1>;
  };
  const renderList = () => {
    return tasks.map((task, index) => {
      return <li key={index}>{task}</li>;
    });
  };
  return (
    <div>
      {renderTitle()}
      <ol>{renderList()}</ol>
    </div>
  );
}

export default App;
