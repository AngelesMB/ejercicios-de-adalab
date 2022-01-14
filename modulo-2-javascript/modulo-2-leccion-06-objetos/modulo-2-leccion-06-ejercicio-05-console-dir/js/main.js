"use strict";

const input = document.querySelector(".input");

function consoleInput() {
  console.log(input.value);
  console.log(input);
  console.dir(input);
}

input.addEventListener("change", consoleInput);
