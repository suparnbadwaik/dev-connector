// profile add, update

const express = require("express");
const router = express.Router();

// @route   /api/profile/
// @access  public
// @desc    This is a test route
router.get("/", (req, res) => {
  res.send("Profile /");
});

module.exports = router;
