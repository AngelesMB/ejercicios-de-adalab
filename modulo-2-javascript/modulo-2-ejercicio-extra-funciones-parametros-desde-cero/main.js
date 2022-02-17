"use strict";

function ten() {
  for (let i = 0; i < 10; i++) {
    console.log("Patata");
  }
}
ten();

function tenWithParam(word) {
  for (let i = 0; i < 10; i++) {
    console.log(word);
  }
}
tenWithParam("Aguacate");

function writeThis(word, times) {
  for (let i = 0; i < times; i++) {
    console.log(word);
  }
}
writeThis("Pizza", 3);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
writeThis("Manzana", getRandomNumber(10));

const myWordList = [
  {
    text: "Pencil",
    total: 6,
  },
  {
    text: "Thermo",
    total: 2,
  },
  {
    text: "TV",
    total: 8,
  },
  {
    text: "Phone",
    total: 4,
  },
];

function writeMyArray(arr) {
  for (const item of arr) {
    writeThis(item.text, item.total);
  }
}
writeMyArray(myWordList);

function writeMyApiResponse(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => writeMyArray(data.results));
}

writeMyApiResponse(
  "https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json"
);
