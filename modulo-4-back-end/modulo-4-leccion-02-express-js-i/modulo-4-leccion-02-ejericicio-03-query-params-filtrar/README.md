## 1. Filtrando usuarias por nombre

Vamos a partir del ejercicio del vídeo y a añadir una nueva funcionalidad. Ya sabemos que cuando pulsamos en el segundo botón del ejercicio, se llama al endpoint `http://localhost:3000/users` y el servidor nos devuelve el listado completo de usuarias.

Pues bien, queremos añadir un filtro a la web y al servidor para que este nos devuelva las usuarias filtradas por nombre. Para ello:

- Añade un campo de filtro a la web:
  - Edita `public/index.html` para añadir un input de texto en el segundo rectángulo.
  - Edita `public/js/main.js` para que cuando ejecutamos `fetch('http://localhost:3000/users')` se envíe por query params un nuevo dato con el nombre filterByName añadiéndolo al final de la URL.
  - Comprueba desde DevTools > Network que la llamada que estás haciendo tiene el formato correcto, es decir, la URL concatenada con el query param. Si este formato es correcto ya puedes empezar a editar el servidor.
- Añade el filtro al servidor:
  - Edita `src/index.js`.
  - En el endpoint `server.get('/users', (req, res) => {...})` debes recoger el query param filterByName y guardarlo en una constante.
  - En el ejercicio del vídeo estamos devolviendo todo el array de usuarias, que lo hacemos con el código:
    `res.json({ result: users, });`
  - Filtra el array users con el query param filterByName y guarda el array filtrado en una constante.
  - Responde a la petición con el nuevo array filtrado.

Recuerda que para que el array users contenga usuarias, hay que añadirlas a través del primer formulario de la web.

## 2. Filtrando usuarias por nombre e email

Partiendo del ejercicio anterior:

- Añade un segundo campo de texto a la web para filtrar por email y envíalo también por query params al servidor.
- Añade un segundo filtro en el servidor en la función `server.get('/users', (req, res) => {...})` para que el servidor solo devuelva las usuarias cuyo nombre contenga el texto del filtro de nombre y cuyo email contenga el texto del filtro de email.
