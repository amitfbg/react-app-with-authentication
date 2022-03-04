const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).send({ msg: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).send({ msg: "Access Denied" });
  }
}

module.exports = auth;
