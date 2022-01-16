"use strict";
// Ya hemos visto la utilidad de tener peticiones encadenadas, en las que una petición depende de las anteriores. Ahora vamos a ver por qué usar peticiones en paralelo, es decir, peticiones que se ejecutan a la vez para poder realizar alguna acción cuando todas se han completado.
// Hemos creado una función createPromise que crea las promesas de las peticiones al servidor con fetch y parsea a JSON en el then(). Luego creamos el array de promesas ejecutando 2 veces la función anterior. Después ejecutamos Promise.all pasándole como argumento el array de promesas, cuando todas las peticiones al servidor hayan terminado, se ejecutará la función del then() a la que le llegan todos los resultados mediante el parámetro responses. Finalmente recorremos el array que se encuentra en responses para ir pintando las imágenes en los img del HTML.

const createPromise = () =>
  fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [createPromise(), createPromise()];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector(".dog" + (i + 1));
      img.src = responses[i].message;
    }
  });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getBreedImages);
