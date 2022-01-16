"use strict";

// Podemos jugar añadiendo parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un string con determinada longitud, la url quedaría así https://api.rand.fun/text/password?length=20

document.querySelector(".js-button").addEventListener("click", getEmoji);

function getEmoji() {
  // fetch("https://api.rand.fun/text/password?length=20")
  // fetch("https://api.rand.fun/games/dice")
  // fetch("https://api.rand.fun/number/integer")
  fetch("https://api.rand.fun/movies/actressoractor")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
