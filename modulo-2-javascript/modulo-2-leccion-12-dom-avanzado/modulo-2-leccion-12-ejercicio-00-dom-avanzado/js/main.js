"use strict";

const item1 = document.querySelector(".item--1");
console.log(item1); // Devuelve una representación del elemento como HTML
console.dir(item1); // Devuelve una representación del elemento como objeto

const mother = item1.parentElement;
console.log(mother);
console.log(
  `La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${
    mother.className
  }`
);
// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"

// Creamos un elemento nuevo, un <li>
const newItem = document.createElement("li");
console.log(newItem); // Devuelve "<li></li>"

// Ahora creamos algo de contenido
const newContent = document.createTextNode("Item nuevo");

// Asignamos el contenido
newItem.appendChild(newContent);

// Y se lo añadimos a nuestro <li>
const items = document.querySelector(".items");
items.appendChild(newItem);

// Prueba de remove a todo el elemento ul
// items.remove();

// Prueba remove únicamente al hijo item 2 dentro del ul
const item2 = items.querySelector(".item--2");
items.removeChild(item2);
