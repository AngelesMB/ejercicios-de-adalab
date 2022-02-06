const express = require("express");
const cors = require("cors");
const server = express();
const posts = require("./data/posts.json");

server.use(cors());
server.use(express.json());
server.set("view engine", "ejs");

// static server

server.use(express.static("./static"));

const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// api endpoints

// un único endpoint que servirá para múltiples peticiones
server.get("/posts/:slug", (req, res) => {
  // guardamos slug que viene por url params
  const slug = req.params.slug;
  // buscamos los datos a través de ese slug
  const foundPost = posts.find((eachPost) => eachPost.slug === slug);
  // creamos array de categorías para hacer luego un forEach
  foundPost.catList = foundPost.categories.split(",");
  // volcamos ese post al motor de plantillas
  res.render("post", foundPost);
});
