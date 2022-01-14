// elemento de HTML
const textContainer = document.querySelector(".container");

// handler
function changeColor() {
  console.log(window.scrollY);
  // cuando el scroll sea 0, que vuelva a su diseño original, quitamos todas las clases añadidas, sin color
  if (window.scrollY === 0) {
    textContainer.classList.remove("green");
    textContainer.classList.remove("pink");
    // si el scroll es mayor, primer color
  } else if (window.scrollY <= 250) {
    textContainer.classList.add("green");
    textContainer.classList.remove("pink");
    // si el scroll continúa, segundo color
  } else if (window.scrollY > 250) {
    textContainer.classList.add("pink");
    textContainer.classList.remove("green");
  }
}

// listener sobre el elemento, con tipo de evento y handler
window.addEventListener("scroll", changeColor);
