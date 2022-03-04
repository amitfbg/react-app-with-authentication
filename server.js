const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const url = require("./config/db-config");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Database Connection
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

//Middleware
app.use(express.json());

//Importing Routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");

app.use("/register", registerRoute);
app.use("/login", loginRoute);

app.listen(4000, () => {
  console.log("Server Running on 4000");
});
