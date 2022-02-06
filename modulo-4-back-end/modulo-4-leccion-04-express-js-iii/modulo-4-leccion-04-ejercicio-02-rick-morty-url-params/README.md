## Troceando a Rick y Morty

Vamos a crear una API que devuelva los datos de Rick y Morty que ya conocemos, pero separados en varios endpoints diferentes.

Queremos crear varios endpoints y que cada uno devuelva la información de un único personaje, como por ejemplo:

`https://rickandmortyapi.com/api/character/1` devuelve solo los datos de Rick Sánchez.

- Crea un nuevo proyecto con un servidor de Express JS.

- Crea el fichero `src/data/rick-and-morty.json` y copia dentro los datos de Rick y Morty desde aquí.

- Importa dentro de `src/index.js` el fichero `rick-and-morty.json` para poder usar los datos.

- Crea un endpoint para recuperar los datos de un personaje:

    - El endpoint debe ser GET, con la ruta `http://localhost:3000/users/1/` y tiene que devolver:

    `{
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive"
        ...
    }`

    - Recuerda que los datos que vienen dentro de req.params siembre son string, pero el "id": 1 es un número. ¿Sabes qué tienes que hacer para compararlos?

- Crea otro endpoint para obtener el listado de episodios de un personaje:

    - También debe ser de tipo GET, con la URL `http://localhost:3000/users/1/episodes` y tiene que devolver:

    ```
    [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",        
        "https://rickandmortyapi.com/api/episode/3",
        ...
    ]
    ```