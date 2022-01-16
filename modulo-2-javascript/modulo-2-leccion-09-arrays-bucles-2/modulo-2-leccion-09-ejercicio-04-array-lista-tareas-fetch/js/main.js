"use strict";

// Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
// -Mostrar una frase que indique cuántas tareas hay.
// -Pintar todas las tareas en pantalla.
// -Tachar las ya realizadas.
// -Permitir marcar una tarea como 'completa' o 'incompleta'.

let tasks = [];

// Obtenemos tareas de la api con fetch
fetch("https://api.igarrido.es/tasks.json")
  .then((response) => response.json())
  .then((taskData) => {
    // Guardamos en variable vacía tasks
    tasks = taskData;
    // Llamamos a las funciones una vez que tenemos los datos
    // No podemos acceder desde fuera, es una promesa, no están listos los datos desde fuera aún siendo variable global (línea 9)
    console.log(`En la lista hay ${showTaskNumber(tasks)} tareas`);
    renderList(tasks);
    renderMessage();
    // variable para traer array de checkbox del html
    const checkbox = document.querySelectorAll(".checkbox");
    addListeners(checkbox);
  });

// traer elementos del html
const listContainer = document.querySelector(".list");
const messageContainer = document.querySelector(".message");

// variables globales
let completedCount = 0;
let toDoCount = 0;
let html = "";

// función para calcular número de tareas
function showTaskNumber(arr) {
  const num = arr.length;
  return num;
}

// función para renderizar lista en el html
function renderList(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Comprobamos si la tarea está completada, si es true
    if (arr[i].completed) {
      // Separamos etiqueta de apertura y de cierre para poder poner más elem dentro del li
      html += `<li class="listItem completed">`;
      html += arr[i].name;
      html += `<input type="checkbox" name="" id="${i}" checked class="checkbox">`;
      html += `</li>`;
      // Aumentamos contador de tareas completadas
      completedCount++;
    } else {
      html += `<li class="listItem">`;
      html += arr[i].name;
      html += `<input type="checkbox" name="" id="${i}" class="checkbox">`;
      html += `</li>`;
      // Aumentamos contador de tareas por hacer
      toDoCount++;
    }
  }
  // Pintamos todo el contenido del bucle dentro del elem html
  listContainer.innerHTML += html;
}

// función para renderizar mensaje con el contador de tareas
function renderMessage() {
  messageContainer.innerHTML = `<p>Tienes ${showTaskNumber(
    tasks
  )} tareas. ${completedCount} completadas y ${toDoCount} por realizar</p>`;
}

// función para actualizar el estado de la tarea según el checkbox
function handleCheckboxChange(event) {
  // Recogemos el id del input checkbox clickado que equivale al index dentro del array tasks y así poder vincularlos
  const taskIndex = event.currentTarget.id;
  if (tasks[taskIndex].completed) {
    tasks[taskIndex].completed = false;
    // Quitamos o añadimos la clase para tachar el texto
    event.currentTarget.parentNode.classList.toggle("completed");
    // Actualizamos contadores
    toDoCount++;
    completedCount--;
  } else {
    tasks[taskIndex].completed = true;
    event.currentTarget.parentNode.classList.toggle("completed");
    toDoCount--;
    completedCount++;
  }
  renderMessage();
}

// función añadir listeners al array de checkbox
function addListeners(arr) {
  for (const item of arr) {
    item.addEventListener("click", handleCheckboxChange);
  }
}
