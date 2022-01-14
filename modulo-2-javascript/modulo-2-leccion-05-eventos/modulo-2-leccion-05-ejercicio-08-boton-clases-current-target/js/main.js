// elemento de HTML
const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");

// handler
function changeColor(event) {
  event.currentTarget.classList.toggle("extraClass");
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", changeColor);
button2.addEventListener("click", changeColor);
