## La tienda online: tabla de libros

Ahora vamos a suponer que tenemos que crear una base de datos para una tienda online de libros. Sobre el proyecto del ejercicio anterior o sobre uno nuevo:

- Crea una nueva tabla para guardar la siguiente información:

  - Nombre del libro
  - Autora del libro
  - Resumen del libro
  - Precio del libro
  - Stock del libro

  - ¿Es un libro descargable como un ebook o es un libro físico que debemos enviar por mensajería?
- Crea 5 libros.
- Crea una API en Node JS que devuelva la siguiente información en diferentes endpoints:

  - Un array con todos los libros ordenados de menor a mayor precio
  - Un array con los libros con precio superior a 15 €
  - Un array con los libros en stock
  - Un array con los libros físicos y en stock
  - Un objeto con el libro con id = 1
  - Un array con los 3 primeros libros ordenados alfabéticamente por nombre
  - Un array con los 3 siguientes libros ordenados alfabéticamente por nombre
  
- Todos los endpoints que hagas deben:
  - Ser con el método GET.
  - Recibir la información necesaria para hacer la petición por query params.
- Revisa que la ruta de los endpoints sea coherente con lo que hacen.
