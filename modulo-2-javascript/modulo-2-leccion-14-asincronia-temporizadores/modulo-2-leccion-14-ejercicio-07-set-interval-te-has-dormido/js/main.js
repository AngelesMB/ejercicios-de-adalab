"use strict";

// Crear una página con un botón que transcurridos 10 segundos te pregunte: "¿te has dormido?". Si pulsas en el botón la cuenta volverá a cero y otra vez, si transcurren 10 segundos sin pulsar volverá a preguntar de nuevo "¿te has dormido?"

const buttonAwake = document.querySelector(".awake");
const paragraph = document.querySelector(".message");

// Si queremos ver el 0, debemos comenzar en -1
let counter = -1;

const checkIfAwake = () => {
  if (counter === 4) {
    paragraph.innerHTML = "¿Te has dormido? Pulsa en el botón";
  } else if (counter === 10) {
    counter = 0;
    paragraph.innerHTML = "";
  }
};

const incCounter = () => {
  counter++;
  console.log(counter);
  checkIfAwake();
};

const interval = setInterval(incCounter, 1000);

checkIfAwake();

const handleClick = () => {
  // En este caso no hace falta clearInterval, bastaría con reiniciar counter
  // clearInterval(interval);
  // interval = setInterval(time, 1000);
  counter = -1;
  paragraph.innerHTML = "";
};

buttonAwake.addEventListener("click", handleClick);
