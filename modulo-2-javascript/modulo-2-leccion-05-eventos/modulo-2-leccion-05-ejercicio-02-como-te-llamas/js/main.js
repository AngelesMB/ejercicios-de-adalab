// elemento de HTML
const button = document.querySelector(".alert");
const inputName = document.querySelector(".inputName");

// handler
function printInputValue() {
  const inputValue = inputName.value;
  console.log(`Hola ${inputValue}`);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", printInputValue);
