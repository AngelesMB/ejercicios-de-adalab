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

app.get("/all-books/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM books ORDER BY price`);
  const users = query.all();
  res.json(users);
});

app.get("/all-books-with-price-over-15/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM books WHERE price > ?`);
  const users = query.all(15);
  res.json(users);
});

app.get("/all-books-with-available-stock/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM books WHERE stock > 0`);
  const user = query.all();
  res.json(user);
});

app.get("/all-books-paper-and-available-stock/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM books WHERE stock > 0 AND ebook = ?`);
  const user = query.all("yes");
  res.json(user);
});

app.get("/one-book-id-1/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM books WHERE id = ?`);
  const user = query.get(1);
  res.json(user);
});

app.get("/three-books-order-by-title/all-fields", (req, res) => {
  const query = db.prepare(`SELECT * FROM books ORDER BY title LIMIT 3`);
  const users = query.all();
  res.json(users);
});

app.get("/next-three-books-order-by-title/all-fields", (req, res) => {
  const query = db.prepare(
    `SELECT * FROM books ORDER BY title LIMIT 3 OFFSET 3`
  );
  const users = query.all();
  res.json(users);
});
