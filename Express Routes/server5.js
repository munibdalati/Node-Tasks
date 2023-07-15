const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;

let newUser = { name: "John", age: 25 };
app.post("/info", (req, res) => {
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
