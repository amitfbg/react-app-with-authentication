/**
 * Description: Here we defined all the routes of login and exporting all the routes too
 */
const express = require("express");
const router = express.Router();

const UserData = require("../controller/user-controller");

// user details
router.get("/", UserData.userDetails);

module.exports = router;
