"use strict";

// Ahora vamos a partir del ejemplo anterior para pedir al servidor una foto de una raza concreta de perro. Para ello, por tanto, necesitamos conocer primero el listado de razas (como en el ejemplo anterior) y luego, con esta información, pedir al servidor una foto de una raza concreta. Por tanto son dos callbacks encadenados, es decir, que la segunda petición depende de los datos que llegan en la primera. Vamos a ver un ejemplo:

// PROMESAS:
// 0. petición al servidor de las razas
// 1. convertir a JSON la respuesta
// 2. segunda petición de la foto de una raza
// 3. convertir la segunda respuesta a JSON
// 4. renderizar en html

function getBreedsImage() {
  fetch("https://dog.ceo/api/breeds/list")
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      const breeds = breedsData.message;
      return fetch("https://dog.ceo/api/breed/" + breeds[0] + "/images/random");
    })
    .then((imageResponse) => imageResponse.json())
    .then((imageData) => {
      const img = document.querySelector("img");
      img.src = imageData.message;
      img.alt = "Un perro";
    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getBreedsImage);
