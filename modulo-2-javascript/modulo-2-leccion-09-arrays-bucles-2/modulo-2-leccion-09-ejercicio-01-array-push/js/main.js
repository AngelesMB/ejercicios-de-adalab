"use strict";

// Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.

const myArray = [];

function getNumbers(arr) {
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
    console.log(`Vuelta ${i}`);
  }
  return arr;
}

getNumbers(myArray);
