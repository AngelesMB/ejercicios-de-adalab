// elementos del html
const container = document.querySelector(".js-container");
const favList = document.querySelector(".js-fav-list");

// variables globales
let princessArray = [];
let princessFavArray = [];

// Petición fetch para traer listado de princesas al cargar la página
fetch("./api/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Verificamos qué contiene la respuesta data
    console.log(data);
    // Volcamos en variable global
    princessArray = data;
    // Llamamos función pintar todos los articles
    renderArticle();
  });

// Función general de renderizar article
function renderArticle() {
  for (const eachPrincess of princessArray) {
    // Creamos de forma dinámica un article con un div dentro donde volcar la info del array de princesas. Ponemos clases y data-id
    const article = document.createElement("article");
    article.classList.add("article");
    article.setAttribute("data-id", eachPrincess.name);
    const divImg = document.createElement("div");
    divImg.classList.add("img--container");
    // Llamamos funciones individuales para renderizar elem
    renderImg(eachPrincess, divImg);
    renderSubtitle(eachPrincess, divImg);
    renderDescription(eachPrincess, article);
    // Agregamos ese article y ese div a nuestro html
    article.appendChild(divImg);
    container.appendChild(article);
    // Agregamos listener a cada article para marcar como favorita si hacen click en el div
    article.addEventListener("click", setAsFriend);
  }
}

function renderImg(princess, div) {
  const img = document.createElement("img");
  img.classList.add("img");
  img.src = princess.picture;
  div.appendChild(img);
}

function renderSubtitle(princess, div) {
  const imgSubtitle = document.createElement("h3");
  const name = document.createTextNode(princess.name);
  imgSubtitle.appendChild(name);
  div.appendChild(imgSubtitle);
}

function renderDescription(princess, article) {
  const paragraph = document.createElement("p");
  paragraph.classList.add("description");
  const description = document.createTextNode(princess.comment);
  paragraph.appendChild(description);
  article.appendChild(paragraph);
}

// Cada vez que se modifica el array de princesas favoritas, vaciamos el listado del html y lo pintamos de nuevo
function renderFavList(nameArray) {
  favList.innerHTML = "";
  for (const eachName of nameArray) {
    favList.innerHTML += `<li>${eachName}</li>`;
  }
}

// Función para cambiar el fondo según si es favorita o no y agregar/quitar el nombre de listado favoritas
function setAsFriend(event) {
  event.currentTarget.classList.toggle("article--friend");
  // Cogemos nombre princesa seleccionada a través de su data-id
  const princessFav = event.currentTarget.dataset.id;
  const favIndex = princessFavArray.findIndex(
    (princess) => princess === princessFav
  );
  // Si está seleccionada como favorita, añadimos su nombre al array de princesas favoritas
  if (event.currentTarget.classList.contains("article--friend")) {
    princessFavArray.push(princessFav);
  }
  // Si no está seleccionada como favorita (es decir, la desmarcamos) pero su nombre está dentro del array de favoritas, quitamos su nombre usando el index
  else {
    princessFavArray.splice(favIndex, 1);
  }
  // Cada vez que terminamos de modificar el array de favoritas lanzamos la función de pintar la lista de favoritas para añadir/quitar
  renderFavList(princessFavArray);
}
