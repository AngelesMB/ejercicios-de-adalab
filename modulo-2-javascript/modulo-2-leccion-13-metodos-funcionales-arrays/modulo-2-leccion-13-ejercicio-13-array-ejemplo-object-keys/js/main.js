"use strict";
// En algunas ocasiones necesitaremos acceder al listado de propiedades de un objeto, que a priori no sabemos cuáles son. Por ejemplo, nos puede llegar la información de un libro de una petición a un API y queremos pintar en pantalla todas las propiedades que comienzan por 'ds_'. Para poder hacer esto usamos el método Object.keys que nos devuelve el listado de las propiedades de un objeto en un array.

const book = {
  title: "Harry Potter and the Deathly Hallows",
  ds_title: "Harry Potter 7",
  author: "J. K. Rowling",
  ds_author: "Rowling",
};

const keys = Object.keys(book);
console.log(keys); //['title', 'ds_title', 'author', 'ds_author', ...]
