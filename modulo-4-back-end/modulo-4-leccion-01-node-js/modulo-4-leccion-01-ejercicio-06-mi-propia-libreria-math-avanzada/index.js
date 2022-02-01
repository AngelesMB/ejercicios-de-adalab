// Crea un math-add.js que sea un módulo que exporta una función de suma.
// Crea un math-sub.js que sea un módulo que exporta una función de resta.
// Crea un math.js que sea un módulo que importa los dos módulos anteriores y los exporta dentro de un objeto.
// Crea un index.js.
// Importa en index.js el módulo math.js.
// Haz una suma y consolea el resultado.
// Haz una resta y consolea el resultado.

const math = require("./math");

const resultAdd = math.add(1, 2);
const resultSubtract = math.subtract(200, 80);

console.log("El resultado de la suma es " + resultAdd);
console.log("El resultado de la resta es " + resultSubtract);
