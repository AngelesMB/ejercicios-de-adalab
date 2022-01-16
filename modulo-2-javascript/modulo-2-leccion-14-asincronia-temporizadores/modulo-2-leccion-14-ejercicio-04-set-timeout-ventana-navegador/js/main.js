"use strict";

// Con JavaScript, crear un código para mostrar una ventana en nuestro navegador una vez transcurridos 15 segundos que ponga "su sesión ha expirado"

const container = document.querySelector(".container");

const createPopUp = () => {
  container.innerHTML += `<div class="popup"><span>Su sesión ha expirado</span><div/>`;
};

setTimeout(createPopUp, 15000);
