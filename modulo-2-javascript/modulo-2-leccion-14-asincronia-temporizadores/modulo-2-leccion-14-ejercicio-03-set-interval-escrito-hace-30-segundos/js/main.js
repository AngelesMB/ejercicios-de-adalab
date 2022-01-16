"use strict";

// Vamos a realizar el típico mensaje que aparece en un blog con la información de hace cuanto se escribió un post. Por ejemplo, con el texto: "escrito hace 30 segundos". Al principio escribiremos en pantalla "escrito hace 1 segundo" e iremos aumentando el número de segundos. Cuando lleve más de 59 segundos queremos que ponga "escrito hace 1 min".

const counterContainer = document.querySelector(".counterContainer");

let counter = 1;

const incrementAndShowCounter = () => {
  counter++;
  if (counter < 60) {
    counterContainer.innerHTML = `<p>Escrito hace <span class="counterElem">${counter}</span> segundos</p>`;
  } else if (counter === 60) {
    counterContainer.innerHTML = `<p>Escrito hace 1 minuto</p>`;
  }
};

setInterval(incrementAndShowCounter, 1000);
