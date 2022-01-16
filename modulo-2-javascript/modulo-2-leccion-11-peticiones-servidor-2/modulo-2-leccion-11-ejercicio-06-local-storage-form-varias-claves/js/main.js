"use strict";

// El formulario nos ha quedado un poco pobretón, añadamos al menos un campo más para el apellido.
// ¡Pero, ojo! Queremos tener nuestros datos agrupaditos. El reto es guardar y recoger del localStorage un objeto con dos propiedades, nombre y apellido.

// traer elementos del html
const allInputs = document.querySelectorAll(".js-input");
const message = document.querySelector(".js-message");

// Creamos objeto vacío donde volcaremos los datos de la usuaria
let userInput = {};

// Recoger nombre de la usuaria
function getUserInput() {
  // Para cada input creamos una clave del objeto y asignamos valor
  for (const eachInput of allInputs) {
    const id = eachInput.id;
    const value = eachInput.value;
    userInput[id] = value;
  }
  console.log(userInput);
  return userInput;
}

// Pintar datos
function renderMessage() {
  message.innerHTML = "";
  for (const key in userInput) {
    const input = document.querySelector(`#${key}`);
    message.innerHTML += `${input.value} `;
  }
}

// Guardar datos en LS
function saveLocalStorage() {
  // Para guardar un objeto necesitamos pasarlo a string
  localStorage.setItem("fullName", JSON.stringify(userInput));
}

let savedName = {};

// Recoger datos de localStorage
function getUserInputFromLS() {
  savedName = localStorage.getItem("fullName");
  if (savedName !== null) {
    // Devuelve objeto json
    console.log(savedName);
    // Convertimos a objeto js
    const parsedName = JSON.parse(savedName);
    savedName = parsedName;
    console.log(savedName);
    // Accedemos a sus propiedades
    console.log(`Nombre en localStorage: ${savedName.name}`);
    console.log(`Apellido en localStorage: ${savedName.surname}`);
  }
}
getUserInputFromLS();

// Pintar datos en el input y el mensaje SI hay datos en LS
function renderNameFromLS() {}
if (savedName !== null) {
  for (const key in savedName) {
    const input = document.querySelector(`#${key}`);
    input.value = savedName[key];
    message.innerHTML += `${savedName[key]} `;
  }
}
renderNameFromLS();

function handleKeyUp() {
  getUserInput();
  renderMessage();
  saveLocalStorage();
  getUserInputFromLS();
}

function addListeners() {
  for (const eachInput of allInputs) {
    eachInput.addEventListener("keyup", handleKeyUp);
  }
}
addListeners();
