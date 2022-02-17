// Elementos del html
const container = document.querySelector(".js-container");
const searchElem = document.querySelector(".js-search");

// Variables globales
let paletteArray = [];

// Petición fetch para traer listado de paletas
function getDataApi() {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      // Volcamos en variable global la info completa de las paletas
      paletteArray = data.palettes;
      // Guardamos en LS
      saveToLS();
      // Llamamos función pintar todas las paletas
      renderPalettes(paletteArray);
      searchElem.addEventListener("keyup", getSearchValue);
    });
}

// Función guardar data fetch en localStorage
function saveToLS() {
  localStorage.setItem("paletteArray", JSON.stringify(paletteArray));
}

// Función general de renderizar paletas
function renderPalettes(paletteArray) {
  for (const eachPalette of paletteArray) {
    const divPalette = document.createElement("div");
    renderTitle(eachPalette, divPalette);
    for (const eachColor of eachPalette.colors) {
      renderColors(eachColor, divPalette);
    }
  }
}

function renderTitle(palette, div) {
  const title = document.createElement("h4");
  const paletteName = document.createTextNode(palette.name);
  title.appendChild(paletteName);
  div.classList.add("palette");
  div.appendChild(title);
  container.appendChild(div);
  div.addEventListener("click", saveAsFavorite);
}

function renderColors(color, div) {
  const box = document.createElement("div");
  box.setAttribute("style", `background-color:#${color}`);
  box.classList.add("box");
  div.appendChild(box);
}

// Guardamos como favorito, cambio color fondo
function saveAsFavorite(event) {
  const selectedPalette = event.currentTarget;
  selectedPalette.classList.toggle("favorite");
}

// Comparamos valor buscado con nuestro array de paletas
function compareSearchWithArray(searchValue) {
  // Filtramos en nuestro array las paletas cuyo nombre coincide
  const searchValueArray = paletteArray.filter((palette) =>
    palette.name.toLowerCase().includes(searchValue)
  );
  // Si se realiza una búsqueda vaciamos el elem html contenedor
  container.innerHTML = "";
  // Ahora lo volvemos a pintar pero únicamente con el array de paletas que coinciden
  renderPalettes(searchValueArray);
}

// Obtenemos valor buscado por la usuaria
function getSearchValue() {
  const searchValue = searchElem.value.toLowerCase();
  compareSearchWithArray(searchValue);
}

// Función revisar LS
function getDataLS() {
  const paletteArrayLS = JSON.parse(localStorage.getItem("paletteArray"));
  paletteArray = paletteArrayLS;
  if (paletteArray !== null) {
    renderPalettes(paletteArray);
    searchElem.addEventListener("keyup", getSearchValue);
    console.log("Desde el LS");
  } else {
    getDataApi();
    console.log("Desde la API");
  }
}

getDataLS();
