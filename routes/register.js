/**
 * Description: Here we defined all the routes of register and exporting all the routes too
 */
const express = require("express");
const router = express.Router();

const Register = require("../controller/register-controller");

// Create a new User
router.post("/", Register.create);

module.exports = router;
