// elemento de HTML
const button = document.querySelector(".button");

// handler

// function changeColor() {
//   if (button.classList.contains("extraClass")) {
//     button.classList.remove("extraClass");
//   } else {
//     button.classList.add("extraClass");
//   }
// }

// ahora usando TOGGLE y currentTarget
function changeColor(event) {
  event.currentTarget.classList.toggle("extraClass");
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", changeColor);

// ----------------------------------------------------------------------------
// event.currentTarget es muy útil cuando queremos que varios elementos tengan el mismo handler. Así podemos tener una sola función manejadora para dominarlos a todos :)

const strawberry = document.querySelector(".fruit-strawberry");
const banana = document.querySelector(".fruit-banana");
const kiwi = document.querySelector(".fruit-kiwi");

function handleFruitClick(event) {
  // Asignamos a una constante el elemento sobre el que pusimos el `listener` para trabajar cómodamente con él
  const selectedFruit = event.currentTarget;

  selectedFruit.classList.toggle("fruit--selected");
}

strawberry.addEventListener("click", handleFruitClick);
banana.addEventListener("click", handleFruitClick);
kiwi.addEventListener("click", handleFruitClick);
