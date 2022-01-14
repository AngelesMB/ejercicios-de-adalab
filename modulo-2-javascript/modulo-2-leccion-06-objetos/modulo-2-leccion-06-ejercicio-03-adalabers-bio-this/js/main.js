"use strict";

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profession = "periodista";
adalaber1.showBio = function () {
  return console.log(
    `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}.`
  );
};

const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.profession = "actriz";
adalaber2.showBio = function () {
  return console.log(
    `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}.`
  );
};

const container = document.querySelector(".container");

container.innerHTML = `<p> Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.</p>`;

adalaber1.showBio();
adalaber2.showBio();
