const express = require("express");
const cors = require("cors");
const charactersData = require("./data/rick-and-morty.json");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.get("/characters/:characterId/", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.characterId);
  const paramsId = req.params.characterId;
  const foundCharacter = charactersData.results.find(
    (eachCharacter) => eachCharacter.id === parseInt(paramsId)
  );
  if (foundCharacter !== undefined) {
    res.json({ result: foundCharacter });
  } else {
    res.json({ result: "Personaje no encontrado" });
  }
});

app.get("/characters/:characterId/episodes", (req, res) => {
  const paramsId = req.params.characterId;
  const foundCharacter = charactersData.results.find(
    (eachCharacter) => eachCharacter.id === parseInt(paramsId)
  );
  if (foundCharacter !== undefined) {
    res.json({ result: foundCharacter.episode });
  } else {
    res.json({ result: "Personaje no encontrado" });
  }
});
