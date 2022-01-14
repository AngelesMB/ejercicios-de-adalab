"use strict";

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profession = "periodista";

const container = document.querySelector(".container");

container.innerHTML = `<p> Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}</p>`;

const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.profession = "actriz";

container.innerHTML += `<p> Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}</p>`;
