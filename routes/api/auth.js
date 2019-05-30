// handling authentication using JWT

const express = require("express");
const router = express.Router();
const authT = require("../../middleware/auth");

// @route   /api/auth
// @access  public
// @desc    To check validity of the json web token
router.get("/", authT, (req, res) => {
  res.send("Auth /");
});

module.exports = router;
