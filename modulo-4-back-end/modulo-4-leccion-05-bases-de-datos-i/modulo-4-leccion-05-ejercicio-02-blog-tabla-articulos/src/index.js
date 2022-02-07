const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database("./src/database.db", {
  // this line log in console all data base queries
  verbose: console.log,
});

// api endpoints

app.get("/all-articles/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM articles`);
  const users = query.all();
  res.json(users);
});

app.get("/all-articles-with-id-2/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM articles WHERE id = ?`);
  const users = query.all(2);
  res.json(users);
});

app.get("/all-articles-with-title-including-datos/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM articles WHERE title LIKE '%datos%'`);
  const user = query.all();
  res.json(user);
});
