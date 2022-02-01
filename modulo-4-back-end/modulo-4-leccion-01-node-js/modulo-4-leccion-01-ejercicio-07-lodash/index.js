// Crea un index.js.
// Importa el módulo Lodash. Para ello, antes tienes que instalarlo dentro del package.json.
// Crea dos constantes para los arrays: [1, 2, 3] y [2, 3, 4].
// Usa el módulo lodash para hallar la unión de estos dos arrays. Para ello necesitas buscar en la documentación de Lodash.
// Si consoleas el resultado que te devuelve la función de Lodash el resultado debe ser [1, 2, 3, 4].

const _ = require("lodash");

const arrA = [1, 2, 3];
const arrB = [2, 3, 4];

const unitedArrays = _.union(arrA, arrB);
console.log(unitedArrays);
