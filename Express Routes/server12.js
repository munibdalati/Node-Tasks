
const express = require("express");
const app = express();
const port = 3000;

const morgan = require("morgan")

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


// Use the morgan middleware to log HTTP requests.
// Input: A GET request to http://localhost:3000; 
// Output: "GET / 200" in the console