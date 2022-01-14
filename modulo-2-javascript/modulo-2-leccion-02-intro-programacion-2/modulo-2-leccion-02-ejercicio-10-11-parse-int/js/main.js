const years = document.querySelector(".js-age");
const days = 365;
const hours = 24;

let resultingHours = parseInt(years.innerHTML) * days * hours;
console.log("La persona ha vivido " + resultingHours + " horas");

console.log("----------------------------------------------------------");

// Pruebas strings/numbers Ejercicio 11
console.log(2 + 3 + "5");
console.log("2" + 3 + 5);
console.log(123);
console.log("123");
