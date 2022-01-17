## Ejercicios

**ToDo list con array de strings (App.js)**

Vamos a empezar una serie de ejercicios sobre un ToDo list (o una lista de tareas). Para ello:

1. Crea un ejercicio nuevo a partir de tu React stater kit.
2. Añade en la primera línea de tu componente App el array:
```
const tasks = [
  'Comprar harina, jamón y pan rallado',
  'Hacer croquetas ricas',
  'Ir a la puerta de un gimnasio',
  'Comerme las croquetas mirando a la gente que entra en el gimnasio'
];
```

3. Renderiza un título que sea "Mi lista de tareas".
4. Renderiza un ```<ol />``` con sus ```<li />``` pintando las 4 tareas del array.

---

**ToDo list con array de objetos (App-2.js)**

Ahora vamos a mejorar el ejercicio anterior sustituyendo el array de strings por un array de objetos.

1. Sustituye el array de tareas por:
```
const tasks = [
  { task: 'Comprar harina, jamón y pan rallado', completed: true },
  { task: 'Hacer croquetas ricas', completed: true },
  { task: 'Ir a la puerta de un gimnasio', completed: false },
  { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
];
```
2. Refactoriza la función en la que pintas el listado de tareas para que se vuelva a pintar el listado correctamente.
3. Añade una clase CSS a cada ```<li />``` para que si la tarea está completada se pinte tachada.
  - Esta lógica la debes hacer dentro del map.
  - Para saber si lo estás haciendo bien debes inspeccionar el HTML generado por React y comprobar que solo los dos primeros ```<li />``` tienen la clase CSS.
  - Cuando el HTML generado esté correcto debes meter la correspiente clase CSS en tus estilos para que los ```<li />``` se muestren bien.

---

**ToDo list con los datos en el estado (App-3.js)**

Partiendo del ejercicio anterior del ToDo list vamos a programar su interacción: queremos que cuando la usuaria pulse en una tarea se des / marca como tachada. Para ello:

1. Mete el array de objetos de las tareas en el estado con:
```
const [tasks, setTasks] = useState([
  { task: 'Comprar harina, jamón y pan rallado', completed: true },
  { task: 'Hacer croquetas ricas', completed: true },
  { task: 'Ir a la puerta de un gimnasio', completed: false },
  { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
]);
```
2. Añade a cada ```<li />``` un evento de tipo click con una función manejadora.
3. Añade a cada ```<li />``` un id con un índice para identificar de manera única cada tarea.
4. Crea la función manejadora en la que:
  - Obtener el índice de la tarea clickada.
  - Invertir la propiedad completed de la tarea clickada.
  - Guardar en el estado el array modificado.

---

**ToDo list filtrando por nombre (App-4.js)**

Partiendo de la última versión del ejercicio del ToDo list debemos:
  - Añadir un input de texto.
  - Cuando la usuaria cambie el input se debe guardar su valor en el estado.
  - Al renderizar se debemos mostrar las tareas filtradas por nombre.

---

**ToDo list con recuento de tareas (App-5.js)**

Partiendo del ejercicio anterior queremos mostrar un recuento de las tareas. Añade tres párrafos al componente que pongan:
  - Tareas totales: 4
  - Tareas completadas: 3
  - Tareas pendientes: 1