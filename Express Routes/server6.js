const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;

const session = require("express-session");
app.use(
  session({
    secret: require("crypto").randomBytes(64).toString("hex"),
    resave: false,
    saveUninitialized: false,
  })
);

app.get(`/`, (req, res) => {
  const username = req.session.username;
  if (username) {
    res.send(`Hello, ${username}`);
  } else {
    res.send("No username found in the session.");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
