"use strict";
// Ya hemos conseguido los nombres de los competidores y nos gustaría que usases reduce para averiguar quién ha ganado.
// PISTA: en este caso el acumulador puede ser no sólo un número sino cualquier valor. Por ejemplo un objeto que sea nuestro candidato a ganador :)

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

// Como no ponemos param de valor inicial, toma como valor inicial el primer elem del arr, es decir, un objeto runner
const winner = runners.reduce((acc, runner) => {
  // Comprobamos si el tiempo del valor inicial es mayor que el tiempo del corredor, si lo es, devolvemos el tiempo menor que será el ganador.
  if (acc.time > runner.time) {
    acc = runner;
  }
  return acc;
});

console.log(runners);
console.log("La ganadora es:", winner.name);
