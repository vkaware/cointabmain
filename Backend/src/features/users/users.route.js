const express = require("express");
const Users = require("./users.model");

const app = express.Router();

app.get("/", async (req, res) => {
  let user = await Users.find();
  res.send(user);
});

module.exports = app;
