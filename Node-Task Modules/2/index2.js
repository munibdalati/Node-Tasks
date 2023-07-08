const fs = require("fs");


fs.writeFile("example.txt", "this is a modification of writing", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});



