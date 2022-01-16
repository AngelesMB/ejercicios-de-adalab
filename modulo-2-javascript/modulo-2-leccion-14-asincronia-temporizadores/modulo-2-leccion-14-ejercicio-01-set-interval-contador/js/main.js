"use strict";

// Partiendo del ejemplo anterior, vamos a realizar un temporizador que empiece en 0 y cada 2 segundos se incremente.

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const timeCounter = document.querySelector(".counterElem");
  timeCounter.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);

let counterReverse = 60;

const incrementAndShowCounterReverse = () => {
  counterReverse--;
  const timeCounterReverse = document.querySelector(".counterElemReverse");
  timeCounterReverse.innerHTML = counterReverse;
};

setInterval(incrementAndShowCounterReverse, 2000);
