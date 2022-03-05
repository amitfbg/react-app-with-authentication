/**
 * @description: Here we defined all the controller of the user routes means once we go to that route how our function behaves
 */

const User = require("../modal/user");

//User Details fetching
exports.userDetails = async (req, res) => {
  // Checking if user already exits
  const userExist = await User.findOne({ email: req.body.email });
  if (!userExist) return res.status(404).json({ msg: "Not found" });

  return res
    .status(200)
    .json({ email: userExist.email, id: userExist.id, name: userExist.name });
};
