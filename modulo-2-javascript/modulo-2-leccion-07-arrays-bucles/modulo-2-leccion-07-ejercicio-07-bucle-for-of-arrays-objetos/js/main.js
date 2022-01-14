"use strict";

// Vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers.

const adalabers = [
  { name: "María", age: 29, proffession: "Diseñadora" },
  { name: "Lucía", age: 31, proffession: "Ingeniera" },
  { name: "Susana", age: 34, proffession: "Periodista" },
  { name: "Rocío", age: 25, proffession: "Actriz" },
  { name: "Inma", age: 21, proffession: "Diseñadora" },
];

// Una función countAdalabers que devuelve el número de adalabers en el listado.
function countAdalabers(list) {
  let acc = 0;
  for (const adalaber of list) {
    acc++;
  }
  return acc;
  // O directamente
  // return list.length;
}
console.log(`El número total de adalabers es ${countAdalabers(adalabers)}`);

// Una función averageAge que devuelve la media de edad de listado.
function averageAge(list) {
  let acc = 0;
  for (const adalaber of list) {
    acc += adalaber.age;
  }
  return acc / list.length;
}
console.log(
  `La media de edad de las adalabers es de ${averageAge(adalabers)} años`
);

// Una función theYoungest que devuelve el nombre de la adalaber más joven.
function theYoungest(list) {
  // Creo nuevo arrays con las edades
  const ages = [];
  for (let i = 0; i < list.length; i++) {
    ages[i] = list[i].age;
  }
  // Ordeno edades de menor a mayor, CUIDADO, sort ordena números como string
  ages.sort();
  // Busco match entre la menor edad y las edades de la lista
  let youngestAdalaber;
  for (let i = 0; i < list.length; i++) {
    if (ages[0] === list[i].age) {
      youngestAdalaber = list[i];
    }
  }
  // Devuelvo objeto adalaber con menor edad
  return youngestAdalaber;
}
console.log(
  `La adalaber más joven es ${theYoungest(adalabers).name} y tiene ${
    theYoungest(adalabers).age
  } años`
);

// Otra opción para calcular theYoungest
function theYoungest2(list) {
  let min = list[0].age;
  let name;
  for (let i = 0; i < list.length; i++) {
    if (min > list[i].age) {
      min = list[i].age;
      name = list[i].name;
    }
  }
  console.log(
    `VERSIÓN 2: La adalaber más joven es ${name} y tiene ${min} años`
  );
}
theYoungest2(adalabers);

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras.
function countDesigners(list) {
  let acc = 0;
  for (const adalaber of list) {
    if (adalaber.proffession === "Diseñadora") {
      acc++;
    }
  }
  return acc;
}
console.log(`Entre las adalabers hay ${countDesigners(adalabers)} diseñadoras`);
