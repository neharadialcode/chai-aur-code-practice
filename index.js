const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/login", function (req, res) {
  res.send("<h1>Neha</h1>");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
