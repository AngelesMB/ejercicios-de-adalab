const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
// const contactsData = require("./data/contacts.json");

//Crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//Iniciar el servidor
const serverPort = 3001;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

// Especificar cuál es la bbdd
const db = new Database("./src/linkedin.db", { verbose: console.log });

// api login
server.post("/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  if (!email || !pass) {
    res.status(404).json({ success: false, error: "Faltan datos" });
  } else {
    // buscamos en la bbdd a la usuaria y comprobamos la contraseña
    const query = db.prepare(
      "SELECT * FROM users WHERE pass = ? AND email = ?"
    );
    const foundUser = query.get(pass, email);
    // si la usuaria existe devolvemos id
    if (foundUser !== undefined) {
      res.json({ success: true, userId: foundUser.id });
    } else {
      res.json({ success: false, error: "Error en el login" });
    }
  }
});

server.get("/contacts", (req, res) => {
  const userId = req.headers["userId"];
  // Traemos de la bbdd
  const query = db.prepare("SELECT * FROM contacts ORDER BY firstName");
  const contactsData = query.all();
  if (userId !== "") {
    res.json(contactsData);
  } else {
    res.json({ success: false, message: "Usuario no autorizado", results: [] });
  }
});
// server.get('/contacts', (req, res) => {
//   const query = db.prepare(`SELECT * FROM contacts `);
//   const contactsData = query.all();
//   console.log(contactsData);
//   res.json(contactsData);
// });

// add new user
server.post("/user/signUp", (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  // comprobamos si ya existe el usuario
  const queryFoundUser = db.prepare("SELECT * FROM users WHERE email =?");
  const foundUser = queryFoundUser.get(email);
  // si no está, la añadimos
  if (foundUser === undefined) {
    const query = db.prepare("INSERT INTO users (email, pass) VALUES (?, ?)");
    const resultUserInsert = query.run(email, pass);
    res.json({
      error: false,
      userId: resultUserInsert.lastInsertRowId,
    });
    // si está, devolvemos mensaje de error
  } else {
    res.json({
      error: true,
      message: "Usuaria ya registrada",
    });
  }
});

server.patch("/contact/update", (res, req) => {
  // recogemos valores de body params
  const firstName = req.body.firstName;
  const gender = req.body.gender;
  const id = req.body.id;
  // update con esos body params
  const query = dp.prepare(
    "UPDATE contacts SET firstName =?, gender =? WHERE id =?"
  );
  const resultUpdate = query.run(firstName, gender, id);
  // si el resultado devuelve propiedad change mayor a 0 es que ha habido modificaciones, devolvemos mensaje de éxito
  if (resultUpdate.change !== 0) {
    res.json({
      error: false,
      message: `Usuaria con nombre: ${firstName} actualizada`,
    });
    // si devuelve 0 es que nada se ha actualizado, mensaje de error
  } else {
    res.json({
      error: true,
      message: "No hemos podido modificar los datos de la usuaria.",
    });
  }
});

server.delete("contact/delete", (res, req) => {
  // recogemos valores de body params
  const firstName = req.body.firstName;
  const gender = req.body.gender;
  const id = req.body.id;
  // comprobamos si ya existe el usuario
  const queryFoundUser = db.prepare("SELECT * FROM users WHERE email =?");
  const foundUser = queryFoundUser.get(email);
  // delete con esos body params
  const query = dp.prepare(
    "UPDATE contacts SET firstName =?, gender =? WHERE id =?"
  );
  if (resultUpdate.change !== 0) {
    res.json({
      error: false,
      message: `Usuaria con nombre: ${firstName} actualizada`,
    });
    // si devuelve 0 es que nada se ha actualizado, mensaje de error
  } else {
    res.json({
      error: true,
      message: "No hemos podido modificar los datos de la usuaria.",
    });
  }
});

// Configurar el servidor de estáticos:
const staticServerPath = "./src/public";
server.use(express.static(staticServerPath));
