const express = require("express");
const path = require("path");

// create app server
const app = express();
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// config express static server
const staticServerPath = "./public"; // relative to the root of the project
app.use(express.static(staticServerPath));
// segundo servidor de estáticos en el mismo servidor app
const staticServerPathAdmin = "./admin";
app.use(express.static(staticServerPathAdmin));

// not found error
// si escribimos una ruta que no existe, nos mandará al html del error 404
app.get("*", (req, res) => {
  // relative to this directory
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
