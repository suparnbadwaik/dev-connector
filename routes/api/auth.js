// handling authentication using JWT

const express = require("express");
const router = express.Router();

// @route   /api/auth
// @access  public
// @desc    This is a test route
router.get("/", (req, res) => {
  res.send("Auth /");
});

module.exports = router;
