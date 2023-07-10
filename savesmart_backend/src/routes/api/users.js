const express = require("express");
const router = express.Router();
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../model/User.js");

router.post("/register", async (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  let email = req.body.email;
  let confirm_password = req.body.confirm_password;
  let username = req.body.username;
  if (password !== confirm_password) {
    return res.status(400).json({
      message: "not matching password",
    });
  }

  const foundUsername = await User.findOne({ username: username });
  if (foundUsername) {
    console.log("User Already exists!");
    return res.status(400).json({
      msg: "Username is already taken",
    });
  }
  const foundEmail = await User.findOne({ email: email });
  if (foundEmail) {
    console.log("Email Already exists!");
    return res.status(400).json({
      msg: "Email is already registered. Forgot your password?",
    });
  }
  let newUser = new User({
    name: name,
    username: username,
    password: password,
    email: email,
    avatar: "",
    friends: [],
  });
  bycrypt.genSalt(10, (err, salt) => {
    bycrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json({
          success: "true",
          msg: "pass encrypted",
        });
      });
    });
  });
});
router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({ msg: "user not found", success: false });
    }
    bycrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        //daj mu token
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
        };
        jwt.sign(payload, "secret", { expiresIn: 604800 }, (err, token) => {
          res.status(200).json({
            msg: "you are logged in",
            success: true,
            token: `bearer ${token}`,
          });
        });
      } else {
        return res.status(404).json({
          msg: "inncorrect password",
          success: false,
        });
      }
    });
  });
});
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      user: req.user,
    });
  }
);
router.get("/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  return res.json({
    user: {
      username: user.username,
      name: user.name,
      avatar: user.avatar,
      date: user.date,
      friends: user.friends,
    },
  });
});

module.exports = router;
