/**
 * @description: Here we defined all the controller of the register routes means once we go to that route how our function behaves
 */

const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const User = require("../modal/user");

//Validation using Joi
const validateUser = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().required().email(),
  password: Joi.string().min(6).required(),
});

//Creating a User
exports.create = async (req, res) => {
  // Validate the data
  const { error } = validateUser.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  //Checking if user already exits
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json({ msg: "Email already exists" });

  // Password hashing
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // creating user
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      msg: "User registered successfully.......",
      createdUser: {
        id: savedUser.id,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
