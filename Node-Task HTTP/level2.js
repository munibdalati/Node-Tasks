const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  res.send("Welcome to the Users endpoint.");
});

//calling html page
app.get("/trainees", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const port = 3000; // Port number
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
