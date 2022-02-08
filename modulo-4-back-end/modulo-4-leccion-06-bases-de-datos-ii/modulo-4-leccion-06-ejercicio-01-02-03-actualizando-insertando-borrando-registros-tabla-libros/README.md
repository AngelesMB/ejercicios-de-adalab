## Actualizando libros

- Partiendo del ejercicio 2 de la lección de SQL SELECT, añade nuevos endpoints a tu API para que hagan los siguientes cambios en la tabla books:

- Crea un endpoint de tipo PATCH que modifique el título de un libro y:
  - Reciba por URL params el id del libro que quieres modificar.
  - Reciba por body params el nuevo título del libro.

- Crea un endpoint de tipo PUT que cambie todos los datos de un libro y:
  - Reciba por URL params el id del libro que quieres cambiar.
  - Reciba por body params todos los datos del libro que quieres cambiar.

##  Añadiendo nuevos libros

- Partiendo del ejercicio 1 de la lección SQL UPDATE, añade nuevos endpoints a tu API para meter nuevos libros en la base de datos:

- Crea un endpoint de tipo POST que añada un nuevo libro:
  - Y que reciba por body params todos los datos del nuevo libro.
  - Y que responda con el id del libro creado.
  - Mira en SQLite browser qué ocurre si desde Postman atacas a ese endpoint sin pasar ninguno de los datos del libro.

- Modifica el endpoint anterior para hacer que algunos campos sean obligatorios:
  - Los campos obligatorios son el título y la autora.
  - Si el endpoint no recibe alguno de esos datos o están vacíos debes responder a la petición con el código de error 400 y el mensaje { error: 'Invalid input data }.
  - Si el endpoint recibe el título y la autora pero no recibe ningún otro dato, debes poner por defecto los campos que vengan vacíos, por ejemplo, el valor por defecto del stock es 0.

## Borrando libros

- Partiendo del ejercicio 1 de la lección SQL INSERT, añade nuevos endpoints a tu API para borrar libros de la base de datos:

- Crea un endpoint de tipo DELETE que borre el libro cuyo id llegue por URL params.

