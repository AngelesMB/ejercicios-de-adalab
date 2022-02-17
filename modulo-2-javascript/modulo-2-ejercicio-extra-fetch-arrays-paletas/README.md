# Paletas

Esta vez tenemos una URL `https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json` que nos devuelve datos de una paleta y tenemos que pintarla. Podemos crear los estilos que estimemos oportunos pero el color de la paleta lo añadiremos con un atributo style="".

Una vez las tengas todas pintadas vamos a permitir que la usuaria seleccione sus paletas preferidas. Ahora vamos a dejar que la usuaria filtre por nombre, para ello tenemos que añadir una caja de búsqueda. Cada vez que se escriba una letra filtraremos.

Vamos a cachear la respuesta de nuestro fetch en localStorage. La idea es que al cargar la página podamos consultar el LS, si ya están las paletas guardadas las pintamos directamente y nos ahorramos una petición.