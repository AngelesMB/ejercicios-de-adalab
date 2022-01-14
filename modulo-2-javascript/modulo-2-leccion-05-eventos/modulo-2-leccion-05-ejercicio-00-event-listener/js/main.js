// elemento de HTML
const button = document.querySelector(".alert");

// handler
function showAlert() {
  console.log("Alerta");
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", showAlert);

// Como hemos visto, cuando registramos un listener para escuchar un evento, es el navegador quien ejecuta la función handler. Al ejecutarla, le pasa unos argumentos que podremos recoger si definimos parámetros en nuestra función handler. El primero de ellos es un objeto que se suele denominar event y que contiene información acerca del evento.

const buttonElement = document.querySelector(".alert2");

function handleButtonClick(event) {
  console.log(event);
}

buttonElement.addEventListener("click", handleButtonClick);

// event.currentTarget contiene el elemento sobre el que pusimos el listener.

const buttonElement2 = document.querySelector(".alert3");

function handleButtonClick2(event) {
  console.log(event.currentTarget);
}

buttonElement2.addEventListener("click", handleButtonClick2);
