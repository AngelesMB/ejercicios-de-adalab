"use strict";
// Como en el ejemplo anterior vamos a averiguar quién ha ganado usando reduce, pero queremos saber el ganador de los estudiantes, por lo que tendremos que filtrar primero quiénes lo son.

const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

// Como no ponemos param de valor inicial, toma como valor inicial el primer elem del arr, es decir, un objeto runner
const winner = runners
  // Filtramos solo los que sean estudiantes true
  .filter((runner) => runner.student)
  .reduce((acc, runner) => {
    // Comprobamos si el tiempo del valor inicial es mayor que el tiempo del corredor, si lo es, devolvemos el tiempo menor que será el ganador.
    if (acc.time > runner.time) {
      acc = runner;
    }
    return acc;
  });

console.log(runners);
console.log("La ganadora es:", winner.name);
