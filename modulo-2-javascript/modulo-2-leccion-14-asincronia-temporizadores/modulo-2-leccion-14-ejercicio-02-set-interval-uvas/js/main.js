"use strict";

// Todos sabemos lo que pasó en Canal Sur hace unos años, en mitad de las campanadas pusieron anuncios y aguaron la noche a millones de personas. Para estar preparados, vamos a crear un contador de uvas. Este contador empezará en 0 y cada segundo incrementará en 1, así hasta 12, en ese momento terminará la cuenta y se dejará de contar más.
// La cuenta se mostrará en la pantalla con números y si lo deseas puedes añadir una imagen de una uva cada vez que pase un segundo.

const timeCounter = document.querySelector(".counterElem");
const grapeContainer = document.querySelector(".grapeContainer");

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  if (counter <= 12) {
    timeCounter.innerHTML = counter;
    const grapeImg = document.createElement("img");
    grapeImg.src = "./images/uva.jpg";
    grapeContainer.appendChild(grapeImg);
  }
};

setInterval(incrementAndShowCounter, 1000);
