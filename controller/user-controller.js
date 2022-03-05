/**
 * @description: Here we defined all the controller of the user routes means once we go to that route how our function behaves
 */

const User = require("../modal/user");

//User Details fetching
exports.userDetails = async (req, res) => {
  // Checking if user already exits anf getting the user data
  const userExist = await User.findOne({ _id: req.user.id });
  if (!userExist) return res.status(404).json({ msg: "Not found" });

  const { name, email, id } = userExist;

  return res.status(200).json({ userInfo: { name, email, id } });
};
