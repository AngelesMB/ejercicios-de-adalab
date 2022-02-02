## 1. Filtrando usuarias por nombre

Queremos añadir un filtro a la web y al servidor para que el servidor nos devuelva las usuarias filtradas por nombre. Para ello:

- Añade un campo de filtro a la web:
- Edita `public/index.html` para añadir un input de texto en el segundo rectángulo.
- Edita `public/js/main.js` para que cuando ejecutamos `fetch('http://localhost:3000/users')` se envíen con el verbo POST.
- Edita `public/js/main.js` para que se envíe por body params un nuevo dato con el nombre filterByName.
- Comprueba desde DevTools > Network > Selecciona tu petición > Subpestaña Headers (abajo del todo) que la llamada que estás haciendo tiene el formato correcto, es decir, la URL concatenada con el body param. Si este formato es correcto ya puedes empezar a editar el servidor.
- Añade el filtro al servidor:
- Edita `src/index.js`.
- Puesto que en main.js has cambiado el verbo del endpoint de GET a POST, debes cambiar el verbo de `server.get('/users', (req, res) => {...})`.
- En el endpoint `server.post('/users', (req, res) => {...})` debes recoger el body param filterByName y guardarlo en una constante.
- En el ejercicio del vídeo estamos devolviendo todo el array de usuarias, lo que hacemos con el código:
`res.json({
result: users,
});`

- Filtra el array users con el body param filterByName y guarda el array filtrado en una constante.
- Responde a la petición con el nuevo array filtrado.
- Recuerda que para que el array users contenga usuarias, hay que añadirlas a través del primer formulario de la web.

## 2. Filtrando usuarias por nombre e email

Partiendo del ejercicio anterior:

- Añade un segundo campo de texto a la web para filtrar por email y envíalo también por body params al servidor.
- Añade un segundo filtro en el servidor en la función `server.post('/users', (req, res) => {...})` para que el servidor solo devuelva las usuarias cuyo nombre contenga el texto del filtro de nombre y cuyo email contenga el texto del filtro de email.
