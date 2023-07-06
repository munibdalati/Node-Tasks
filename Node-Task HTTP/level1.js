const http = require("http");
const express = require("express");
const app = express();

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("Hello, World!");
//   res.end();
// });

const server = http.createServer(app);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  res.send("Welcome to the Users endpoint.");
});

const port = 3000; // Port number
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
