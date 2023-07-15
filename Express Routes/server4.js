const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;


app.get("/data", (req, res) => {
    res.send(users);
  });
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
