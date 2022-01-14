// elemento de HTML
const inputName = document.querySelector(".inputName");
const textContainer = document.querySelector(".text");

// handler
// function printInputValue() {
//   const inputValue = inputName.value;
//   textContainer.innerHTML = inputValue;
// }

// usando event.currentTarget
function printInputValue(event) {
  const inputValue = event.currentTarget.value;
  textContainer.innerHTML = inputValue;
}

// listener sobre el elemento, con tipo de evento y handler
inputName.addEventListener("keyup", printInputValue);
