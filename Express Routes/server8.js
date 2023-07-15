const express = require("express");
const users = require("./users");

const app = express();
const port = 3000;

const { body, validationResult } = require("express-validator");
app.use(express.json());

app.post(
  "/register",
  [body("email").isEmail().withMessage("Your email is not valid")],
  function (req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      res.send("Registration successful");
    }
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
