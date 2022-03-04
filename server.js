const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = require("./config/db-config");

//Middleware
app.use(express.json());

//Databse Connectiong
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(url);
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server Running");
});
