/* Imagina que vamos a la frutería y compramos lo siguiente:
2 kilos de kiwis a 5€ / kg
3 kilos de peras conferencia (no una cualquiera) a 2€ / kg
Medio kilo de uvas a 4€ / kg */

const kiwi = 5;
const pear = 2;
const grape = 4;

const result = 2 * 5 + 3 * 2 + 0.5 * 4;
console.log("El precio total de la fruta es: " + result);

console.log("----------------------------------------------------------------");

/* Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? */

const pax = 9;
const bill = 128;
const anaExtra = 2;

const updatedBill = bill - anaExtra;
console.log("Cuenta final: " + updatedBill);
const individualBill = updatedBill / pax;
console.log("Cada persona pagará: " + individualBill);
console.log("Menos Ana que pagará: " + (individualBill + anaExtra));

console.log("----------------------------------------------------------------");

/*En este caso vamos a crear un código que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.*/

let years = 60;
const days = 365;
const hours = 24;

let resultingHours = years * days * hours;
console.log("La persona ha vivido " + resultingHours + " horas");

years = 30;
resultingHours = years * days * hours;
console.log("La persona ha vivido " + resultingHours + " horas");
