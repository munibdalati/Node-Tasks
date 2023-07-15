const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;

//1
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
  