## 1. Crea un servidor desde cero

Sigue los pasos que hemos visto antes en el apartado: Pasos para crear un servidor con Express JS

## 2. Cambio de endpoints y verbos

- Descarga el ejercicio del vídeo.
- Haz npm install para que NPM instale Express JS dentro de node_modules/.
- Haz npm start para arrancar (o levantar) el servidor.
- En el fichero `src/index.js`:
    - Cambia la ruta `app.post('/new-user', (req, res) => { por app.post('/users/add', (req, res) => {`
    ¿Qué debes cambiar en public/main.js para que la web siga funcionando?
    - Cambia la ruta `app.get('/users', (req, res) => { por app.post('/users', (req, res) => {`
    ¿Qué debes cambiar en public/main.js para que la web siga funcionando?
    - Cambia el puerto `const serverPort = 3000;` por `const serverPort = 3500;`
    ¿Qué debes cambiar en public/main.js para que la web siga funcionando?
