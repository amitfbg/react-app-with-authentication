/**
 * @description: Here we defined all the controller of the login routes means once we go to that route how our function behaves
 */

const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const User = require("../modal/user");

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

  res.send("found");
};
