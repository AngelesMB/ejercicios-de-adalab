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
  verbose: console.log,
});

// api endpoints
app.patch("/books/:bookId", (req, res) => {
  const titleUpdate = req.body.title;
  const id = req.params.bookId;
  const query = db.prepare("UPDATE books SET title = ? WHERE id = ? ");
  const resultUpdate = query.run(titleUpdate, id);
  if (resultUpdate.changes !== 0) {
    res.json({
      success: true,
      errorMessage: "Libro modificado",
    });
  } else {
    res.json({
      success: false,
      errorMessage: "Ha ocurrido un error al modificar los datos.",
    });
  }
});

app.put("/books/:bookId", (req, res) => {
  const id = req.params.bookId;
  const titleUpdate = req.body.title;
  const authorUpdate = req.body.author;
  const synopsisUpdate = req.body.synopsis;
  const priceUpdate = req.body.price;
  const stockUpdate = req.body.stock;
  const ebookUpdate = req.body.ebook;
  const query = db.prepare(
    "UPDATE books SET title = ?, author = ?, synopsis = ?, price = ?, stock = ?, ebook = ? WHERE id = ? "
  );
  const resultUpdate = query.run(
    titleUpdate,
    authorUpdate,
    synopsisUpdate,
    priceUpdate,
    stockUpdate,
    ebookUpdate,
    id
  );
  if (resultUpdate.changes !== 0) {
    res.json({
      success: true,
      errorMessage: "Libro modificado",
    });
  } else {
    res.json({
      success: false,
      errorMessage: "Ha ocurrido un error al modificar los datos.",
    });
  }
});

app.post("/book", (req, res) => {
  const titleInsert = req.body.title;
  const authorInsert = req.body.author;
  const synopsisInsert = req.body.synopsis || "No conocida";
  const priceInsert = req.body.price || 0;
  const stockInsert = req.body.stock || 0;
  const ebookInsert = req.body.ebook || 0;
  if (titleInsert && authorInsert) {
    const query = db.prepare(
      "INSERT INTO books (title, author, synopsis, price, stock, ebook) VALUES (?, ?, ?, ?, ?, ?) "
    );
    const result = query.run(
      titleInsert,
      authorInsert,
      synopsisInsert,
      priceInsert,
      stockInsert,
      ebookInsert
    );
    res.json({
      success: true,
      userId: result.lastInsertRowid,
    });
  } else {
    res.status(400).json({
      success: false,
      errorMessage: "Debes introducir al menos el título y la autora",
    });
  }
});

app.delete("/books/:bookId", (req, res) => {
  const id = req.params.bookId;
  const query = db.prepare("DELETE FROM books WHERE id = ? ");
  const resultUpdate = query.run(id);
  if (resultUpdate.changes !== 0) {
    res.json({
      success: true,
      errorMessage: "Libro borrado correctamente.",
    });
  } else {
    res.json({
      success: false,
      errorMessage: "Ha ocurrido un error al borrar los datos.",
    });
  }
});
