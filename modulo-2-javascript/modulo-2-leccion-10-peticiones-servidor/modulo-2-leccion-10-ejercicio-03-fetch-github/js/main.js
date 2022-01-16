"use strict";

// Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:

const btn = document.querySelector(".js-button");
const inputValue = document.querySelector(".js-userName");
const user = document.querySelector(".js-user");
const name = document.querySelector(".js-name");
const img = document.querySelector(".js-img");
const repos = document.querySelector(".js-repos");

let userName = "";

function getInputValue() {
  userName = inputValue.value;
}

function getUserData() {
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      user.innerHTML = data.login;
      name.innerHTML = data.name;
      img.src = data.avatar_url;
      repos.innerHTML = data.public_repos;
    });
}

inputValue.addEventListener("keyup", getInputValue);
btn.addEventListener("click", getUserData);
