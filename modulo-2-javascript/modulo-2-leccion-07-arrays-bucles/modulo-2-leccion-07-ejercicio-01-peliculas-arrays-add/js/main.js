"use strict";

const movies = ["Cinderella", "Snowwhite", "Shrek"];

// Añade al array anterior otra película más que le guste. No vale modificar la declaración del array, sino que añadiremos la nueva película en la posición 3 del array

movies[3] = "Sleeping Beauty";
console.log(movies);

// Tienes que modificar la película que menos te guste de las que hay en el array

movies[2] = "Little Mermaid";
console.log(movies);

// Encapsula en una función el código anterior
function workWithMovies() {
  movies[4] = "Mulan"; // añado
  movies[2] = "Beauty and the Beast"; // modifico
  return movies;
}

console.log(workWithMovies());
