"use strict";

// Cada vez que la usuaria escriba su nombre (keyUp) tenemos que pintar el valor en el párrafo y guardarlo en localStorage.

// Al recargar la página tenemos que consultar localStorage y, si hay algún nombre guardado, rellenar el input y el párrafo.

// traer elementos del html
const input = document.querySelector(".js-input");
const message = document.querySelector(".js-message");

let userInput = "";

// Recoger nombre de la usuaria
function getUserInput() {
  userInput = input.value;
}

// Pintar datos
function renderMessage() {
  message.innerHTML = userInput;
}

// Guardar datos en LS
function saveLocalStorage() {
  localStorage.setItem("name", userInput);
}

let savedName = "";

// Recoger datos de localStorage
function getUserInputFromLS() {
  savedName = localStorage.getItem("name");
  console.log(`Nombre en localStorage: ${savedName}`);
}
getUserInputFromLS();

// Pintar datos en el input y el mensaje SI hay datos en LS
function renderNameFromLS() {
  if (savedName !== "") {
    input.value = savedName;
    message.innerHTML = savedName;
  }
}
renderNameFromLS();

function handleKeyUp() {
  getUserInput();
  renderMessage();
  saveLocalStorage();
  getUserInputFromLS();
}

// listener input
input.addEventListener("keyup", handleKeyUp);
