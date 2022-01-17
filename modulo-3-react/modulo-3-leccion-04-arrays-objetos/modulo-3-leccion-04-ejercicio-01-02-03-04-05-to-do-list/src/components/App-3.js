import "../styles/App.css";
import { useState } from "react";
import originalData from "../data/tasks.json";

function App() {
  // Traemos datos del fichero data y metemos en variable estado
  const [tasks, setTasks] = useState(originalData);

  // Función manejadora del click de cada li
  const handleClick = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    // Usamos el idClickado como index en el array e invertimos ! su propiedad completed
    tasks[clickedTaskId].completed = !tasks[clickedTaskId].completed;
    setTasks([...tasks]);
  };

  // Renderizar título
  const renderTitle = () => {
    return <h1>Mi lista de tareas</h1>;
  };

  // Renderizar lista
  const renderList = () => {
    return tasks.map((task, index) => {
      return (
        <li
          key={index}
          id={index}
          className={task.completed ? "task done" : "task"}
          onClick={handleClick}
        >
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
