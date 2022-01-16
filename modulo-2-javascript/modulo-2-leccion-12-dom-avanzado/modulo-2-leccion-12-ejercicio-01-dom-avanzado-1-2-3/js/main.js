"use strict";

// Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.

const list = document.querySelector(".list");
const button = document.querySelector(".button");
const numbers = [1, 2, 3];

function renderNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    // Creamos un elemento nuevo, un <li>
    const newItem = document.createElement("li");
    // Creamos contenido
    const newContent = document.createTextNode(numbers[i]);
    // Asignamos el contenido
    newItem.appendChild(newContent);
    // Añadimos al html dedntro del elem list
    list.appendChild(newItem);
  }
}

button.addEventListener("click", renderNumbers);
