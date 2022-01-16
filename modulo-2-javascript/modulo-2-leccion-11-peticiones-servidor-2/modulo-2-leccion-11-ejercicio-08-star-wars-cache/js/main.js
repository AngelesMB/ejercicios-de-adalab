"use strict";

// Sobre el ejercicio 2 vamos a cachear las búsquedas al servidor. De forma que cuando a busquemos una cadena a través del campo de búsqueda, primero busque en localStorage si ya tenemos un resultado en local para esa cadena. Si no lo hay se pide al servidor y luego se guarda en localStorage usando como clave el texto de la búsqueda; si al buscarlo en localStorage lo encontramos pues le enseñamos el resultado directamente al usuario y nos evitamos una petición al servidor.

// traer elementos del html
const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const list = document.querySelector(".js-list");

let userInput = "";

// Recoger nombre a buscar por la usuaria
function getUserInput() {
  userInput = input.value;
  console.log("User input:" + userInput);
}

function getDataLS() {
  const characterLS = JSON.parse(localStorage.getItem("characterList"));
  if (characterLS !== null) {
    for (let i = 0; i < characterLS.length; i++) {
      if (characterLS[i].name.includes(userInput)) {
        console.log(
          "Encontrada en localStorage info con ese mismo nombre. Se muestra en pantalla."
        );
        list.innerHTML += `<li>Nombre del personaje: ${characterLS[i].name}`;
        list.innerHTML += `Género del personaje: ${characterLS[i].gender}</li>`;
      } else {
        console.log(
          "No hay nada en localStorage con ese nombre. Enviada petición a servidor."
        );
        fetchDataApi();
      }
    }
  } else {
    console.log("LocalStorage está vacío");
    fetchDataApi();
  }
}

// Función fetch datos
function fetchDataApi() {
  list.innerHTML = "";
  // Traer datos personajes para BUSCAR un personaje en particular
  fetch(`https://www.swapi.tech/api/people/?name=${userInput}`)
    .then((res) => res.json())
    .then((data) => {
      const characterArray = data.result;
      console.log(characterArray);
      if (characterArray.length === 0) {
        alert("No hay personajes con ese nombre");
      } else {
        let characterList = [];
        for (const character of characterArray) {
          const characterName = character.properties.name;
          const characterGender = character.properties.gender;
          list.innerHTML += `<li>Nombre del personaje: ${characterName}`;
          list.innerHTML += `Género del personaje: ${characterGender}</li>`;
          const characterObject = {
            name: characterName,
            gender: characterGender,
          };
          console.log(characterObject);
          characterList.push(characterObject);
        }
        localStorage.setItem("characterList", JSON.stringify(characterList));
      }
    })
    .catch((err) => console.error(err));
}

function handleButtonClick() {
  getUserInput();
  getDataLS();
}

// listener botón
button.addEventListener("click", handleButtonClick);
