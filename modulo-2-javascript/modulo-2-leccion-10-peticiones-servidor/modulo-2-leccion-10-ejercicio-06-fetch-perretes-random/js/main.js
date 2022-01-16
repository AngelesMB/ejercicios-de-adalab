"use strict";

// PETICIONES ANIDADAS
// Vamos a realizar un ejercicio con la API de 'https://dog.ceo/dog-api/' y la api de 'https://rand.fun/'. Tenemos que pedir un listado de razas de perros, y con un número aleatorio elegir una raza del listado:
// -pintar un mensaje que muestre la raza elegida al azar.
// -pedir una imagen aleatoria de un perro de esa raza y pintarla.

const message = document.querySelector(".message");
const image = document.querySelector(".img");

let randomNumber = 0;

function getRandomDog() {
  // pedimos lista de razas completa
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breedsData) => {
      // Como devuelve un objeto completo, seleccionamos de ese objeto solo los nombres de las razas
      const breedsNameList = Object.keys(breedsData.message);
      console.log(breedsNameList);
      console.log(`El número de razas posible es: ${breedsNameList.length}`);
      // Cuando tenga el resultado de la anterior, tomar una aleatoria hasta 94 (95-1)
      return fetch("https://api.rand.fun/number/integer?max=94").then(
        (numberResponse) =>
          numberResponse.json().then((numberData) => {
            randomNumber = numberData.result;
            consoleNumber(randomNumber, "DENTRO");
            console.log(`El número aleatorio es: ${randomNumber}`);
            // Random number pasa a ser el index del array de lista de razas
            const selectedBreed = breedsNameList[randomNumber];
            console.log(`La raza aleatoria es la número: ${selectedBreed}`);
            message.innerHTML = `<h4>La raza elegida al azar es: ${selectedBreed}</h4>`;
            // Cuando tenga ya este resultado, pintar la imagen de esa raza aleatoria
            return fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
              .then((dogResponse) => dogResponse.json())
              .then((dogData) => {
                renderImg(dogData);
              });
          })
      );
    });
}

function renderImg(dogData) {
  console.log(
    "Cantidad de fotos en api: " +
      dogData.message.length +
      " Número aleatorio: " +
      randomNumber
  );
  if (randomNumber <= dogData.message.length) {
    const selectedDogImg = dogData.message[randomNumber];
    image.src = selectedDogImg;
    // Si el número aleatorio es más grande que la cantidad de fotos, alert
  } else {
    alert("Error: no tenemos foto para este número aleatorio");
  }
}

function consoleNumber(num, situation) {
  console.log(`Resultado de la función ${situation}: ${num}`);
}
consoleNumber(randomNumber, "FUERA");

// Listener para lanzar la función general al hacer click en todo el document
document.addEventListener("click", getRandomDog);
