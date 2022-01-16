"use strict";
// Vamos a explorar un API abierto de información sobre el mundo Star Wars. En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:
// - la URL base del API
// - si necesita autenticación
// - método HTTP que deben usar las peticiones a este API
// - URL para acceder a la info del personaje "Luke Skywalker"
// - URL para acceder a la info de la película "A New Hope"
// - a qué otros recursos puedo acceder desde el API además de personajes y pelis
// - URL para acceder al listado de personajes, ¿está paginada?
// - cómo puedo buscar personajes mediante la URL
// - cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee

// Traer datos de película con id 1
fetch("https://www.swapi.tech/api/films/1/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log("Nombre película: " + data.result.properties.title);
  })
  .catch((err) => console.error(err));

// Traer datos de película con id 4
fetch("https://www.swapi.tech/api/films/4/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log("Nombre película: " + data.result.properties.title);
  })
  .catch((err) => console.error(err));

// Traer datos personajes para ver si está paginada
fetch("https://www.swapi.tech/api/people/")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Traer datos personajes para BUSCAR un personaje en particular
fetch("https://www.swapi.tech/api/people/?name=luke")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Traer datos planeta 1 traducido a wookie
fetch("https://www.swapi.tech/api/planets/1/?format=wookiee")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
