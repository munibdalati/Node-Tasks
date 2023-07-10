const express = require ("express")
const app = express()
const bodyParser = require("body-parser");


app.use(bodyParser.json());
let users = ["userOne", "userTwo", "userThree", "userFour", "userFive"];


app.get("/api", (req, res) =>{
    res.json({"users": users})
})

app.post("/api/create", (req, res) => {
    const { value } = req.body;
    users.push(value);
    res.json({ message: "User created successfully" });
  });

  app.post("/api/deleteItem", (req, res) => {
    const { value } = req.body;
    users = users.filter((user) => user !== value);
    res.json({ message: "User deleted successfully" });
  });

  app.post("/api/updateItem", (req, res) => {
    const { value, newValue } = req.body;
    const index = users.indexOf(value);
  
    if (index !== -1) {
      users[index] = newValue;
      res.json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
  

app.listen(5000, () =>{
    console.log("Server is running on port 5000")
})
