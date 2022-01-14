"use strict";

const button = document.querySelector(".button");

function consoleEvent(event) {
  console.log(event);
}

button.addEventListener("click", consoleEvent);
