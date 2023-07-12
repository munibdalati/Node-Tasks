const express = require("express");
const app = express();
const usersRouter = require("./routes/routes");

app.use(express.json());
app.use(usersRouter);

//home page
app.get("/", (req, res) => {
  res.send("this is the home page");
});


app.listen(5000, () => {
  console.log("server is running on port 5000");
});
