const express = require ("express")
const app = express()
const bodyParser = require("body-parser");


app.use(bodyParser.json());
let users = ["userOne", "userTwo", "userThree", "userFour", "userFive"];

// Write the updated users array back to the users.json file
function updateJSONVsCode(res) {
  
  // Sort the users array based on the id property
  users.sort((a, b) => a.id - b.id);

  fs.writeFile("./users.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error("Error writing to users.json:", err);
      return res.status(500).send("Error writing to users.json");
    }
    res.send({ users });
  });
}

//display all the users
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
  

app.listen(5001, () =>{
    console.log("Server is running on port 5000")
})

//to start this server write on the terminal "npm run dev"
//then open new terminal to run the React App by writing "npm start"
