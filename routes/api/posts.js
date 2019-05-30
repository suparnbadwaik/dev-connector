const express = require("express");
const router = express.Router();

// @route   /api/posts/
// @access  public
// @desc    This is a test route
router.get("/", (req, res) => {
  res.send("Posts /");
});

module.exports = router;
