"use strict";

// Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

const myArray = [];

function getNumbers(arr) {
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  return arr;
}

function getReversedNumbers() {
  let myReversedArray = getNumbers(myArray);
  myReversedArray.reverse();
  for (const num of myReversedArray) {
    console.log(num);
  }
  return myReversedArray;
}

getReversedNumbers();
