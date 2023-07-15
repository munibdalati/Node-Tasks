const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;

const helmet = require("helmet");

// Use Helmet!
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(
  helmet({
    xXssProtection: false,
    xFrameOptions: false,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
