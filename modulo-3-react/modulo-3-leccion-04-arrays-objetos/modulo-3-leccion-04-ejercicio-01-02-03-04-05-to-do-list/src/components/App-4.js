import "../styles/App.css";
import { useState } from "react";
import originalData from "../data/tasks-4.json";

function App() {
  // Traemos datos del fichero data y metemos en variable estado
  const [tasks, setTasks] = useState(originalData);
  const [newTask, setNewTask] = useState("");
  const [filterTask, setFilterTask] = useState("");

  const handleNewTaskChange = (ev) => {
    setNewTask(ev.currentTarget.value);
  };
  const handleFilterChange = (ev) => {
    setFilterTask(ev.currentTarget.value);
  };

  // Función para agregar tarea
  const handleAddClick = () => {
    const newObject = {
      // Como la usuaria no nos da un id seguimos el orden consecutivo
      id: tasks.length,
      task: newTask,
      completed: false,
    };
    // NO hacemos push directamente a tasks
    // tasks.push(newObject);
    if (newTask !== "") {
      // Debemos "clonar" tasks y agregarle el nuevo objeto, el setTasks NO acepta el mismo array original, necesita uno nuevo
      setTasks([...tasks, newObject]);
      // Vaciamos el input
      setNewTask("");
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  // Función manejadora del click de cada li
  const handleClick = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    // Usamos el idClickado como index en el array e invertimos ! su propiedad completed
    console.log(clickedTaskId)
    tasks[clickedTaskId].completed = !tasks[clickedTaskId].completed;
    setTasks([...tasks]);
  };

  // Renderizar título
  const renderTitle = () => {
    return <h1>Mi lista de tareas</h1>;
  };

  // Renderizar lista
  const renderList = () => {
    return (
      tasks
        // Filtramos acorde al valor del input
        .filter((eachTask) => eachTask.task.toLowerCase().includes(filterTask.toLowerCase()))
        // Pintamos cada elemento ya filtrado
        .map((eachTask) => {
          return (
            <li
              key={eachTask.id}
              id={eachTask.id}
              className={eachTask.completed ? "task done" : "task"}
              onClick={handleClick}
            >
              {eachTask.task}
            </li>
          );
        })
    );
  };
  return (
    <div>
      {renderTitle()}
      <ol>{renderList()}</ol>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Filtrar por tarea</label>
        <input
          type="text"
          name="filterTask"
          id="filterTask"
          onChange={handleFilterChange}
          value={filterTask}
        />
        <label htmlFor="">Añade una nueva tarea</label>
        <input
          type="text"
          name="newTask"
          id="idTask"
          onChange={handleNewTaskChange}
          value={newTask}
        />
        <button onClick={handleAddClick}>Agregar</button>
      </form>
    </div>
  );
}

export default App;
