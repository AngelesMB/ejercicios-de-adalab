// Crea un math.js que sea un módulo.
// Exporta dos funciones, una para sumar y otra para restar.
// Estas dos funciones deben recibir dos números como parámetros.
// Estas dos funciones deben retornar el resultado de la operación.
// Crea un index.js. e importa el módulo math.js.
// Usa el módulo importado para hacer una suma y consolea el resultado.
// Usa el módulo importado para hacer una resta y consolea el resultado.

const math = require("./math");

const resultAdd = math.add(10, 20);
const resultSubtract = math.subtract(20, 8);

console.log("El resultado de la suma es " + resultAdd);
console.log("El resultado de la resta es " + resultSubtract);
