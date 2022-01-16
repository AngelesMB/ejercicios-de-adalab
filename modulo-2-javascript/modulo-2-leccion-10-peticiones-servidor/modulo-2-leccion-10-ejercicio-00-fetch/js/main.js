"use strict";

document.querySelector(".js-emoji").addEventListener("click", getEmoji);

fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector(".container1").innerHTML = data.result;
  });

// Lo mismo con arrow functions
fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
  .then((response) => response.json())
  .then(
    (data) => (document.querySelector(".container2").innerHTML = data.result)
  );

function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
