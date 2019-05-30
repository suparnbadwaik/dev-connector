const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");

  // Check if token is not returned
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token found. Authorization Denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
  } catch (err) {}
};
