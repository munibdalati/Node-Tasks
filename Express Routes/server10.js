const express = require("express");
const users = require("./users");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// Use the cors middleware to enable CORS on the server.
// Input: A GET request to http://localhost:3000 from a different origin;
// Output: Response with headers "Access-Control-Allow-Origin
