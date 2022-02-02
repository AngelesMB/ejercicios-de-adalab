const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get("/response-a", (req, res) => {
  res.json({ result: "OK" });
});

app.get("/response-b", (req, res) => {
  const htmlCode = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Express</title>
      </head>
    <body class="page">
      <header>
        <h1>Esta es una página de prueba</h1>
      </header>
    </body>
  </html>`;
  res.send(htmlCode);
});

app.get("/response-c", (req, res) => {
  let responseURL = "";
  const randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber % 2 === 0) {
    responseURL = "https://www.youtube.com/";
  } else {
    responseURL = "https://www.instagram.com/";
  }
  res.redirect(responseURL);
});

app.get("/response-d", (req, res) => {
  if (req.query.user === "1" || req.query.user === "2") {
    res.status(200).json({
      result: "OK",
    });
  } else {
    res.status(404).json({
      result: "error: invalid query param",
    });
  }
});

app.get("/", (req, res) => {
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
      </head>
      <body class="page">
        <header>
          <h1>Express: Respondiendo muchas cosas</h1>
          <h2>Prueba /response-a /response-b...</h2>
        </header>
      </body>
    </html>`;
  res.send(htmlCode);
});
