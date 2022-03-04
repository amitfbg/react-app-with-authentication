/**
 * Description: Here we defined all the routes of login and exporting all the routes too
 */
const express = require("express");
const router = express.Router();

const Login = require("../controller/login-controller");

// user login
router.post("/", Login.userLogin);

module.exports = router;
