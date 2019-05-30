// registering and managing users

const express = require("express");
const { check, validationResult } = require("express-validator/check");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");
const router = express.Router();

// @route   /api/users/
// @access  public
// @desc    This is a test route
router.get("/", (req, res) => {
  res.send("User /");
});

// @route   /api/users/register
// @access  public
// @desc    This is a test route
router.post(
  "/register",
  [
    check("name", "Enter name !!!")
      .not()
      .isEmpty(),
    check("email", "Enter valid email !!!").isEmail(),
    check("password", "Password must match the given criteria !!!").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // If there is no error, check if the user already exists in the database
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ msg: "User already exists" });
      }

      // Get user gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      // Encrypt the password using bcrypt
      user = new User({ name, password, email, avatar });

      // make sure you put ""await"" infront of anything that returns a promise
      const salt = await bcrypt.genSalt(10); // the more rounds, the more secure, the more slower
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return web token to get the users logged in right away as soon as they register

      res.send("User registered !!!");
    } catch (err) {
      res.status(500).send("This is an internal server error !!!");
    }
  }
);

module.exports = router;
