"use strict";

// Vamos a crear una función bestLostNumber que nos devuelve algunos números del array de los números de la serie Lost que tenemos arriba. La función, debe seguir estos pasos:

const lostNumbers = [4, 8, 15, 16, 23, 42];
console.log(`El array original ${lostNumbers}`);

function bestLostNumber(arr) {
  // Crear un nuevo array que contiene solo los números pares que hay en lostNumbers.
  const lostNumbersEven = [];
  for (const num of arr) {
    if (num % 2 === 0) lostNumbersEven.push(num);
  }
  console.log(`Los números pares son ${lostNumbersEven}`);
  // Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.
  const lostNumbersMultiple3 = [];
  for (const num of arr) {
    if (num % 3 === 0) lostNumbersMultiple3.push(num);
  }
  console.log(`Los números múltiplos de 3 son ${lostNumbersMultiple3}`);
  // Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.
  const lostNumbersBackTogether = lostNumbersEven.concat(lostNumbersMultiple3);
  console.log(`Los 2 anteriores concatenados ${lostNumbersBackTogether}`);
}

bestLostNumber(lostNumbers);
