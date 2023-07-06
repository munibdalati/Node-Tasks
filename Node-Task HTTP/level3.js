const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const users = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
    },
  ],
};

const trainees = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 23 },
  { id: 3, name: "Bob Johnson", age: 27 },
];

const server = http.createServer((req, res) => {
  // Route handling
  if (req.url === "/") {
    //Home page
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, World!");
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
    }

    //users page
  } else if (req.url === "/users") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    } else if (req.method === "POST") {
      //We create a body variable to accumulate the chunks of data received in the request body.
      let body = "";
      //using the req.on() method to handle the request body
      //Inside the data event listener, we append each chunk of data to the body variable
      req.on("data", (chunk) => {
        body += chunk;
      });
      //end event is triggered when the entire request has been received.
      req.on("end", () => {
        const user = JSON.parse(body);
        //assign a unique ID to the user by incrementing the userIdCounter variable, and then we add the user to the users list.
        user.id = ++userIdCounter;
        users.users.push(user);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
      });
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
    }

    //Trainees page
  } else if (req.url === "/trainees") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(trainees));
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
    }


    //bounus question
  } else if (req.url === "/image") {
    if (req.method === "GET") {
      // Serve a static image file
      const imagePath = path.join(__dirname, "images", "example.jpg");
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "image/jpeg" });
          res.end(data);
        }
      });
    }
  } else if (req.url === "/data.csv") {
    if (req.method === "GET") {
      // Return data as CSV
      const csvData = "Name,Age\nJohn Doe,25\nJane Smith,23\nBob Johnson,27";
      res.writeHead(200, { "Content-Type": "text/csv" });
      res.end(csvData);
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = 3000; // Port number
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
