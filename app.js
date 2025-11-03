const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, My name is Ehak!");
});
module.exports = app;
