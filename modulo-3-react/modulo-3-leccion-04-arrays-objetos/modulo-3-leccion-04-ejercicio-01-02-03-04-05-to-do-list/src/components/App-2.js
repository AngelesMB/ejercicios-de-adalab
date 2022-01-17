import "../styles/App.css";

function App() {
  const tasks = [
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ];
  const renderTitle = () => {
    return <h1>Mi lista de tareas</h1>;
  };
  const renderList = () => {
    return tasks.map((task, index) => {
      return (
        <li key={index} className={task.completed ? "task done" : "task"}>
          {task.task}
        </li>
      );
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
