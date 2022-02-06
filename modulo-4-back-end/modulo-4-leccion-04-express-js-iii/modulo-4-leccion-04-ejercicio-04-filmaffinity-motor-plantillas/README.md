## 1. Crea una plantilla para directoras

- Añade un fichero en `src/directors-data.json` con datos sobre dos directoras.
- Añade a `src/index.js` un nuevo endpoint del tipo `app.get('/es/directora/:directorId', ...)` para gestionar peticiones del tipo `http://localhost:3000/es/directora/iciar-bollain`.
- Obtén los datos de la directora que nos llegan por req.params.
- Crea una plantilla en views/pages/director.ejs con el HTML que quieras.
- Usa los datos de la directora para pintarlos en la plantilla.

## 2. Filtra por el año de los premios

- Añade un filtro en src/index.js para que solo se pinten los premios del año 2004.
- Una vez lo hayas conseguido, obtén el año de filtrado de los query params, es decir:
- Si entras a la página http://localhost:3000/es/film942734.html?adwarsYear=2003 se deben pintar solo los premios de 2003.
- Si entras a la página http://localhost:3000/es/film942734.html?adwarsYear=2004 se deben pintar solo los premios de 2004.

## 3. Plantillas dentro de plantillas

- Crea una nueva plantilla en views/partials/search.ejs que sea un formulario de búsqueda. Cualquier código HTML vale, ya que no vamos a crear la funcionalidad del formulario. Como si pones un "hola mundo".
- Añade este partial a los partials de la cabecera y el footer. Para ello elige bien la ruta relativa.
