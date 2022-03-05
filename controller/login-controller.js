/**
 * @description: Here we defined all the controller of the login routes means once we go to that route how our function behaves
 */

const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../modal/user");
const dotenv = require("dotenv");
dotenv.config();

//Validation using Joi
const validateUser = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().min(6).required(),
});

//User login
exports.userLogin = async (req, res) => {
  // Validate the data
  const { error } = validateUser.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // Checking if user already exits
  const userExist = await User.findOne({ email: req.body.email });
  if (!userExist)
    return res.status(400).json({ msg: "Email or password not found" });

  // validating password
  const validPassword = await bcrypt.compare(
    req.body.password,
    userExist.password
  );
  if (!validPassword)
    return res.status(400).json({ msg: "Email or password not found" });

  // Creating and sending token to user
  const token = jwt.sign({ id: userExist.id }, process.env.SECRET_TOKEN);
  return res.status(200).json({ userId: userExist.id, "auth-token": token });
};
