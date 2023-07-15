const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;

app.get("/echo", (req, res) => {
    const message = req.query.message;
    res.send(message);
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
