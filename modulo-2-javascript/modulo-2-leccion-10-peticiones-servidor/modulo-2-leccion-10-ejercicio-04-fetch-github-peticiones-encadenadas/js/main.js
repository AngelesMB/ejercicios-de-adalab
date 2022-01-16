"use strict";

// El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub.

const btn = document.querySelector(".js-btn");
const userInput = document.querySelector(".js-input");
const list = document.querySelector(".js-list");

let value = "";

function getValue() {
  value = userInput.value;
  return value;
}

function getRepos() {
  getValue();
  fetch(`https://api.github.com/orgs/${value}`)
    .then((orgResponse) => orgResponse.json())
    .then((orgData) => {
      const reposDataURL = orgData.repos_url;
      console.log(reposDataURL);
      return fetch(`https://api.github.com/orgs/${value}/repos`);
    })
    .then((reposResponse) => reposResponse.json())
    .then((reposData) => {
      let html = "";
      for (const repo of reposData) {
        const repoContent = `<li>${repo.name}</li>`;
        html += repoContent;
      }
      list.innerHTML = html;
    });
}
btn.addEventListener("click", getRepos);
