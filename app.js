const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page.");
});

app.listen(80, () => {
  console.log("Server working at port 80.");
});
