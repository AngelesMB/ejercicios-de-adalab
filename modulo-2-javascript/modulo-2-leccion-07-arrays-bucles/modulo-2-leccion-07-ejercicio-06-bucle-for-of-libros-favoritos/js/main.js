"use strict";

// Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

const books = document.querySelectorAll(".book");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

let userFavouriteBooks = [];

function showAnswer() {
  // Limpiamos array y mensaje por si tocan más de una vez el botón
  userFavouriteBooks = [];
  message.innerHTML = "";
  // Recorremos el array de libros del html y metemos su valor en un array
  for (const book of books) {
    if (book.value !== "") {
      userFavouriteBooks.push(book.value);
    }
  }
  // Recorremos al array de libros y pintamos un mensaje para cada uno
  for (const book of userFavouriteBooks) {
    message.innerHTML += `<p>¡A mí también me encantó ${book}! Tenemos mucho en común, humana.</p>`;
  }
  console.log(userFavouriteBooks);
}

button.addEventListener("click", showAnswer);
