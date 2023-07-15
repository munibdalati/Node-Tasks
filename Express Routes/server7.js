const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;

var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/", function (req, res) {
  const username = req.cookies.username;
  res.cookie("username", "John");
  res.send(`Hello, ${username}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
