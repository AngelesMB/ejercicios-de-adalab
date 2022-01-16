"use strict";

// Aplicaremos a nuestra página una clase u otra según la selección de la usuaria, apoyándonos en el value del input seleccionado.

// Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en localStorage.

// Al cargar la página buscaremos en localStorage el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción.

const background = document.querySelector(".js-background");
const title = document.querySelector(".js-title");
const texts = document.querySelectorAll(".js-text");
const radioLight = document.querySelector(".js-light");
const radioDark = document.querySelector(".js-dark");

let savedSelection = "";

function getSelectionFromLS() {
  savedSelection = localStorage.getItem("mode");
  console.log("Última selección modo:" + savedSelection);
}
getSelectionFromLS();

function getRefreshMode() {
  if (savedSelection === "light") {
    changeModeLight();
  } else if (savedSelection === "dark") {
    changeModeDark();
  }
}
getRefreshMode();

function changeModeLight() {
  background.classList.add("lightBackground");
  background.classList.remove("darkBackground");
  title.classList.add("darkText");
  title.classList.remove("lightText");
  for (const text of texts) {
    text.classList.add("darkText");
    text.classList.remove("lightText");
  }
}

function changeModeDark() {
  background.classList.add("darkBackground");
  background.classList.remove("lightBackground");
  title.classList.add("lightText");
  title.classList.remove("darkText");
  for (const text of texts) {
    text.classList.add("lightText");
    text.classList.remove("darkText");
  }
}

function changeMode() {
  if (radioLight.checked) {
    changeModeLight();
  } else {
    changeModeDark();
  }
}

function saveSelectionLS() {
  if (radioLight.checked) {
    localStorage.setItem("mode", "light");
  } else if (radioDark.checked) {
    localStorage.setItem("mode", "dark");
  }
}

function handleRadioCheck() {
  changeMode();
  saveSelectionLS();
}

radioLight.addEventListener("click", handleRadioCheck);
radioDark.addEventListener("click", handleRadioCheck);
