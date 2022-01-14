"use strict";

// a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.

const numbers = [5, 10, 15, 20, 25];
let acc = 0;

function getAverage(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  const average = acc / numbers.length;
  return average;
}
console.log(`La media del array es: ${getAverage(numbers)}`);

// b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

numbers[5] = 30; // añadimos nuevo número en última posición
acc = 0; // reseteamos el acumulador a 0

console.log(`La media del array ahora es: ${getAverage(numbers)}`);
