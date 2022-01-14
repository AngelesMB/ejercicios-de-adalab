"use strict";

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profession = "periodista";
adalaber1.run = (phrase) => console.log(phrase);
adalaber1.runAMarathon = (distance) =>
  console.log(`Estoy corriendo una maratón de ${distance} kilómetros`);

const container = document.querySelector(".container");

container.innerHTML = `<p> Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.</p>`;

adalaber1.run("Estoy corriendo");
adalaber1.runAMarathon(50);
adalaber1.run("Estoy caminando");
adalaber1.runAMarathon(100);
