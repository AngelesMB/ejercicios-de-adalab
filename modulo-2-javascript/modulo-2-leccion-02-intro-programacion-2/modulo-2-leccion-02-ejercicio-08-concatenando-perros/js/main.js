const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

// Con el atributo title al pasar el ratón por encima podemos ver el nombre del perro
const listElem = document.querySelector(".js-list");

listElem.innerHTML = `<li><img src="${firstDogImage}" title="${firstDogName}"/> </li>`;

listElem.innerHTML += `<li><img src="${secondDogImage}" title="${secondDogName}"/> </li>`;

listElem.innerHTML += `<li><img src="${thirdDogImage}" title="${thirdDogName}"/> </li>`;
