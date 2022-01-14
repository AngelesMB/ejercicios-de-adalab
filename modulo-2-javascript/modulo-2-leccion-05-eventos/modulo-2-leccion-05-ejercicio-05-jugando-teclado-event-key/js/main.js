// Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document.

const body = document.querySelector(".container");

// handler
function changeColor(event) {
  if (event.key === "r") {
    body.classList.add("r");
    body.classList.remove("m");
  } else if (event.key === "m") {
    body.classList.add("m");
    body.classList.remove("r");
  }
}

// listener sobre el elemento, con tipo de evento y handler
document.addEventListener("keydown", changeColor);
