"use strict";

// Sintaxis básica
// Crea una variable con un array vacío
const arr1 = [];

// Crea un array con dos números
const arr2 = [1, 2];

// Crea un array con cuatro datos
const arr3 = ["Laura", "Pedro", "Marta", "Diego"];

// Acceder a un índice
const fruits = ["pera", "manzana", "naranja", "plátano"];

console.log(fruits); // Muestra el array completo
console.log(fruits[1]); // Muestra 'manzana'
console.log(fruits[3]); // Muestra 'plátano'

// Un dato importante es que para obtener el valor que queremos del array podemos utilizar una variable en vez de un número. Imaginemos que queremos hacer una aplicación que simule el típico sorteo en el que cada uno de los participantes saca un papel de una urna y tiene un premio asociado.

const options = ["coche", "viaje", "crucero", "llavero"];
const lotteryNumberInput = document.querySelector("#lotteryNumber");

function handleLotteryNumberChange(event) {
  const input = event.currentTarget;
  const selectedNumber = parseInt(input.value);
  const ind = selectedNumber - 1; // El índice empieza en 0
  const result = options[ind]; // Utilizamos una constante que contiene un número como valor
  console.log("Premio:", result);
}

lotteryNumberInput.addEventListener("keyup", handleLotteryNumberChange);
