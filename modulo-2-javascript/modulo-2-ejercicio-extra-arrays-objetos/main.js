"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

const resultElem = document.querySelector(".js-result");

function writeNames() {
  let html = "<ul>";
  for (const item of promos) {
    html += `<li>${item.name}</li>`;
  }
  resultElem.innerHTML += html + "</ul>";
}
// writeNames();

function writeNamesAndLetters() {
  let html = "<ul>";
  for (const item of promos) {
    html += "<li>";
    html += `<p>Nombre: ${item.name}</p>`;
    html += `<p>Promo: ${item.promo}</p>`;
    html += "</li>";
  }
  resultElem.innerHTML += html + "</ul>";
}
// writeNamesAndLetters();

function writeNamesLettersAndNumber() {
  let html = "<ul>";
  for (const item of promos) {
    html += "<li>";
    html += `<p>Nombre: ${item.name}</p>`;
    html += `<p>Promo: ${item.promo}</p>`;
    html += `<p>Número de alumnas: ${item.students.length}</p>`;
    html += "</li>";
  }
  resultElem.innerHTML += html + "</ul>";
}
// writeNamesLettersAndNumber();

function writeNamesLettersAgeAndId() {
  let html = "<ul>";
  for (const item of promos) {
    html += "<li>";
    html += `<p>Nombre: ${item.name}</p>`;
    html += "<ul>";
    for (const student of item.students) {
      if (student.age % 2 === 0) {
        html += `<li id=${student.id}>`;
        html += `<p>${student.name} ${student.age}</p>`;
        html += "</li>";
      }
    }
    html += "</ul>";
    html += "</li>";
  }
  resultElem.innerHTML += html + "</ul>";
}
// writeNamesLettersAgeAndId();

function writeNamesLettersAgeAndIdFromGoogle() {
  let html = "<ul>";
  for (const item of promos) {
    html += "<li>";
    html += `<p>Nombre: ${item.name}</p>`;
    html += "<ul>";
    for (const student of item.students) {
      for (const id of studentsWorkingInGoogle) {
        if (id === student.id) {
          html += `<li id=${student.id}>`;
          html += `<p>${student.name} ${student.age}</p>`;
          html += "</li>";
        }
      }
    }
    html += "</ul>";
    html += "</li>";
  }
  resultElem.innerHTML += html + "</ul>";
}

// writeNamesLettersAgeAndIdFromGoogle();

const handleClick = (ev) => {
  console.log("Current target:", ev.currentTarget);
  console.log("Target:", ev.target);
  console.log("El ID clickado es el:", ev.target.parentNode.id);
};

function writeNamesLettersAgeAndConsoleId() {
  let html = "<ul>";
  for (const item of promos) {
    html += "<li>";
    html += `<p>Nombre: ${item.name}</p>`;
    html += "<ul>";
    for (const student of item.students) {
      html += `<li id=${student.id} class=${student.id}>`;
      html += `<p>${student.name} ${student.age}</p>`;
      html += "</li>";
    }
    html += "</ul>";
    html += "</li>";
  }
  resultElem.innerHTML += html + "</ul>";
}

writeNamesLettersAgeAndConsoleId();
resultElem.addEventListener("click", handleClick);
