"use strict";

// Crear un cronómetro que vaya aumentando en segundos y cuando se pulse el botón de parar deje de aumentar. Cuando pulsemos el de continuar, vuelva a empezar de nuevo.

const hoursElement = document.querySelector(".js_hours");
const minutesElement = document.querySelector(".js_minutes");
const secElement = document.querySelector(".js_seconds");
const btnStart = document.querySelector(".js-start");
const btnStop = document.querySelector(".js-stop");
const btnPlayStop = document.querySelector(".js-playStop");

let idIntervalClock = "";

const updateClock = () => {
  const now = new Date();
  hoursElement.innerHTML = now.getHours();
  minutesElement.innerHTML = now.getMinutes();
  secElement.innerHTML = now.getSeconds();
};

const startClock = () => {
  idIntervalClock = setInterval(updateClock, 1000);
};

updateClock();
startClock();

const stopClock = () => {
  //espera un parámetro
  clearInterval(idIntervalClock);
  idIntervalClock = "";
};

function playStopClock() {
  if (idIntervalClock === "") {
    startClock();
  } else {
    stopClock();
  }
}

btnStop.addEventListener("click", stopClock);
btnStart.addEventListener("click", startClock);
btnPlayStop.addEventListener("click", playStopClock);
