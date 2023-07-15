const express = require("express");
const app = express();
const port = 3000;
var compression = require("compression");

// compress responses
app.use(compression());


app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// 11. Use the compression middleware to compress the response.
// Input: A GET request to http://localhost:3000;
// Output: Compressed response
