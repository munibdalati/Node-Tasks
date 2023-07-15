const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;

app.get("/greet/John", (req, res) => {
  res.send("Hello John!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
