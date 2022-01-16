"use strict";

// Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.

// traer elementos del html
const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const list = document.querySelector(".js-list");

let userInput = "";

// Recoger nombre a buscar por la usuaria
function getUserInput() {
  userInput = input.value;
}

// Función fetch datos
function fetchData() {
  list.innerHTML = "";
  // Traer datos personajes para BUSCAR un personaje en particular
  fetch(`https://www.swapi.tech/api/people/?name=${userInput}`)
    .then((res) => res.json())
    .then((data) => {
      const characterArray = data.result;
      for (const character of characterArray) {
        const characterName = character.properties.name;
        const characterGender = character.properties.gender;
        list.innerHTML += `<li>Nombre del personaje: ${characterName}`;
        list.innerHTML += `Género del personaje: ${characterGender}</li>`;
      }
    })
    .catch((err) => console.error(err));
}

function handleButtonClick() {
  getUserInput();
  fetchData();
}

// listener botón
button.addEventListener("click", handleButtonClick);
