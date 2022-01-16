"use strict";

// Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
// Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
// Haz lo mismo para París y Nueva York
// Nota: Usa imágenes que encuentres por Internet.

const container = document.querySelector(".container");
const list = document.querySelector(".list");
const cities = document.querySelector(".cities");
const button = document.querySelector(".button");

const imgList = [
  {
    city: "madrid",
    imgs: ["./img/madrid1.jpg", "./img/madrid2.jpg", "./img/madrid3.jpg"],
  },
  {
    city: "paris",
    imgs: ["./img/paris1.jpg", "./img/paris2.jpg", "./img/paris3.jpg"],
  },
  {
    city: "newYork",
    imgs: ["./img/newyork1.jpg", "./img/newyork2.jpg", "./img/newyork3.jpg"],
  },
];

let userSelection = "";

function getUserSelection() {
  if (cities.value === "madrid") {
    userSelection = "madrid";
  } else if (cities.value === "paris") {
    userSelection = "paris";
  } else {
    userSelection = "newYork";
  }
}

function renderImages() {
  // Vacío ul
  list.innerHTML = "";
  // Recorro lista de ciudades
  for (let i = 0; i < imgList.length; i++) {
    // Busco el match con userSelection
    if (userSelection === imgList[i].city) {
      // Cuando lo encuentra, recorro lista de rutas de imgs de esa ciudad [i] y para cada una creo el li>img y asigno src
      for (let j = 0; j < imgList[i].imgs.length; j++) {
        // Creo li
        const liItem = document.createElement("li");
        // Añado li a ul
        list.appendChild(liItem);
        // Creo img
        const img = document.createElement("img");
        // Añado img al li
        liItem.appendChild(img);
        // Asigno el atributo src con la ruta de la imagen
        img.setAttribute("src", imgList[i].imgs[j]);
        img.classList.add("img");
      }
    }
    // Añado ul al container del html
    container.appendChild(list);
  }
}

function handleButtonClick(event) {
  getUserSelection(event);
  renderImages();
}

button.addEventListener("click", handleButtonClick);
