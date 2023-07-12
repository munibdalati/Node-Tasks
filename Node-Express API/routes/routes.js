const express = require("express");
const router = express.Router();
const users = require("../users.json");
const fs = require("fs");

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
router.get("/users", (req, res) => {
  res.json({ users });
});

//show user by his id
router.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = users.find((user) => user.id === parseInt(userId));

  if (user) {
    res.send(users[userId - 1]);
  } else {
    res.send(`User with ID ${userId} not found`);
  }
});

//post request to add users
router.post("/users/create", (req, res) => {
  const user = {
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
  };

  users.push(user);
  updateJSONVsCode(res);
});

//patch request to edit some user details
router.patch("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const userIndex = users.findIndex((user) => user.id === parseInt(userId));

  if (userIndex !== -1) {
    //merging the existing user at users[userIndex] with the updated properties from req.body using the spread syntax (...). This allows you to update specific properties of the user while keeping the rest unchanged.
    const updatedUser = { ...users[userIndex], ...req.body };
    users[userIndex] = updatedUser;
    res.json(updatedUser);

    updateJSONVsCode(res);
  } else {
    res.send(`User with ID ${userId} not found`);
  }
});

//delete request to delete user
router.delete("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const userIndex = users.findIndex((user) => user.id === parseInt(userId));

  //The findIndex() method returns -1 if no match is found.
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];

    updateJSONVsCode(res);
  } else {
    res.send(`User with ID ${userId} not found`);
  }
});

module.exports = router;
