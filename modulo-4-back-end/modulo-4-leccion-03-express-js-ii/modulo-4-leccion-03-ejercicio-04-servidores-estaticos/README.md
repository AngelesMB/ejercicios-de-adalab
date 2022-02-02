## 1. Añade una de tus páginas al servidor de estáticos

Ahora que ya sabemos montar un servidor de estáticos, qué mejor forma de celebrarlo que creando con tus propias páginas:

- Crea un servidor de estáticos.
- Crea un proyecto nuevo con un servidor de Express.
- Añade el código de tu servidor de estáticos.
- Configura el servidor de estáticos para que utilice la carpeta public/.
- Elige una de las páginas que hayas hecho durante el curso:
- Si eliges una página hecha con el starter kit de Adalab tienes que:
  - En el proyecto del starter kit crea la carpeta docs/ con npm run docs.
  - Copia los ficheros de dicha carpeta docs/.
  - Pega los ficheros copias en la carpeta public/ del servidor.
- Si eliges una página hecha con React:
  - Abre el proyecto y ejecuta npm run build.
  - Copia los ficheros de la carpeta build/.
  - Pega los ficheros copiados en la carpeta public/ del servidor.

## 2. Dos servidores de estáticos en un solo servidor

Nos interesa tener dos servidores de estáticos en el mismo servidor. Por ejemplo uno para servir las páginas públicas y otro para servir las páginas del área de administración.

- Añade una carpeta hermana de public/ que se llame admin/.
- Añade dentro de admin/ dos ficheros, un index.html y un admin.html. Escribe en estos ficheros un texto cualquiera.
- Añade en src/index.js el siguiente código después del servidor de estáticos que ya tenemos:
  `const staticServerPathAdmin = "./admin"; app.use(express.static(staticServerPathAdmin));`
- Arranca el servidor y:
  - Entra en `http://localhost:3000`. ¿Qué fichero te está devolviendo el servidor, el public/index.html o el admin/index.html? ¿Por qué?
  - Entra en `http://localhost:3000/admin.html` y mira qué fichero está devolviendo.
