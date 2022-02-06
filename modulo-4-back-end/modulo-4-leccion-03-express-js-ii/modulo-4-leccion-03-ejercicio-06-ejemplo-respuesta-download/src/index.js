//importar dependencias
const express = require("express");
const cors = require("cors");
const fs = require("fs");

//crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//servidor de estáticos
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

//iniciar el servidor
const serverPort = 3001;
server.listen(serverPort, () =>
  console.log(`Server listening ah http://localhost:${serverPort}`)
);

const users = [
  { name: "Isa" },
  { name: "Norma" },
  { name: "Paula" },
  { name: "María" },
  { name: "Marina" },
];

//listado de usuarios
server.get("/users", (req, res) => {
  console.log("Petición a la ruta GET /users");
  console.log(req.query);
  const filteredData = users.filter((user) =>
    user.name.toLowerCase().includes(req.query.name.toLowerCase())
  );
  res.json(filteredData);
});

//añadir un nuevo usuario
server.post("/user/add", (req, res) => {
  console.log("Petición a la ruta POST /user/add");
  const nameUser = req.body.name;
  users.push({ name: nameUser });
  res.json({ success: true, result: `user created ${nameUser}` });
});

//crear fichero con los datos del usuario
const handleWrite = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Fichero users.json creado");
  }
};

// guardar usuarios en txt
server.get("/users/save", (req, res) => {
  fs.writeFile("./src/users.txt", JSON.stringify(users), handleWrite);
  res.json({ result: "OK" });
});

//exportar usuarios
server.get("/users/export", (req, res) => {
  res.download(__dirname + "/users.txt", "listado.txt");
});
