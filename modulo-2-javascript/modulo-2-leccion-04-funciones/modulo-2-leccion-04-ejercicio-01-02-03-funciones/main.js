// Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().

function multiplyMe(num1, num2) {
  return num1 * num2;
}
console.log(multiplyMe(2, 3));
console.log(multiplyMe(2, 4));
console.log(multiplyMe(2, 5));

// Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

function average(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

console.log(average(2, 4, 6, 8));
console.log(average(12, 14, 16, 18));

// Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

function calculateVat(price) {
  const vat = price * 0.21;
  const total = price + vat;
  console.log(`Precio sin IVA: ${price}, IVA:${vat} y Total: ${total} `);
  return total;
}

const myTotal = calculateVat(10);
console.log(myTotal);
