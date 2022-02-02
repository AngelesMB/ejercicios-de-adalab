const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.post("/user", (req, res) => {
  console.log("Query params:", req.query);
  console.log("Query param userName:", req.query.userName);
  console.log("Query param userEmail:", req.query.userEmail);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail,
  });

  res.json({
    result: "User created",
  });
});

server.get("/users", (req, res) => {
  // save filter value from query params
  const filterByName = req.query.filterByName;
  const filterByEmail = req.query.filterByEmail;
  // filter users array
  const filteredUsers = users.filter(
    (eachUser) =>
      eachUser.name.toLowerCase().includes(filterByName.toLowerCase()) &&
      eachUser.email.toLowerCase().includes(filterByEmail.toLowerCase())
  );
  res.json({
    result: filteredUsers,
  });
});
