## El blog: tabla de artículos

Vamos a suponer que tenemos que crear una base de datos para gestionar un blog. Entre las muchas tablas que tendría la base de datos, nos toca crear una para almacenar los artículos escritos por la autora:

- Crea un proyecto de Node JS; si quieres puedes utilizar el ejercicio del vídeo de esta sección.
- Instala (si no lo has hecho ya) SQLite browser.
- Crea una base de datos a través SQLite browser dentro del proyecto.
- Crea una tabla llamada articles con las siguientes columnas:

    - Título del artículo
    - Cuerpo del artículo
    - URL de la imagen principal
    - Fecha de publicación
    - Borrador o publicado
    - Cualquier otro campo que te parezca bien
    
- Antes de continuar:
    - Revisa qué tipos y opciones le has puesto a cada columna.
    - ¿Has puesto alguna columna para identificar cada artículo?
- Crea 3 artículos rellenando todas las columnas. Haz que dos de ellos contengan las palabras bases de datos en el título.
- Desde el editor SQL de SQLite browser ejecuta las siguientes queries:
    - Selecciona todos los artículos.
    - Selecciona el artículo con el artículo que tiene el id = 2.
    - Selecciona todos los artículos que tengan en el título la palabra datos. Te ayudará buscar en Internet SQL like.
- Después de cada consulta comprueba que los resultados que muestra SQLite browser tienen sentido.