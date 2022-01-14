"use strict";

// traer elementos del html
const smiley = document.querySelector(".js-smiley");
const smileySelect = document.querySelector(".js-smileySelect");
const button = document.querySelector(".js-button");
const background = document.querySelector(".js-mainContainer");

// función número aleatorio
function getRandom(max) {
  // Generar núm aleatorio entre 0 y max
  const randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}

// función cambio de color fondo según num aleatorio
function changeBackgroundColor() {
  // Llamo a la función para generar num aleatorio
  const randomNumber = getRandom(100);
  console.log(randomNumber);
  // Comprobar si el num es par
  if (randomNumber % 2 === 0) {
    background.classList.add("yellow");
    background.classList.remove("orange");
  } else {
    background.classList.remove("yellow");
    background.classList.add("orange");
  }
}

// función pintar carita
function renderSmiley(value) {
  smiley.innerHTML = value;
}

// función check el valor del value del select
function checkSmileyValue() {
  // Coger el valor de la usuaria en variable
  const userSelection = smileySelect.value;
  // Comparar ese value
  if (userSelection === "happy") {
    renderSmiley(":)");
  } else if (userSelection === "sad") {
    renderSmiley(":(");
  }
}

// función manejadora del click que incluye a todas las demás
function handleButtonClick(event) {
  event.preventDefault(); // Siempre la primera
  changeBackgroundColor();
  checkSmileyValue();
}

button.addEventListener("click", handleButtonClick);
