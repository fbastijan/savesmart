const express = require("express");
const passport = require("passport");
const router = express.Router();
const user = require("../../model/User.js");
router.patch(
  "/add",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let doc = req.body;
    console.log(doc);
    try {
      let db = await user.findOneAndUpdate(
        { _id: doc._id },
        { $push: { friends: doc.friend_id } }
      );
      if (db) {
        return res.status(200).json({ message: "updated user", success: true });
      } else {
        return res.status(400).json({ message: "greska", sucess: false });
      }
    } catch (er) {
      console.log(er);
      return res
        .status(400)
        .json({ message: "greska ali smo tu izasli", sucess: false });
    }
  }
);

module.exports = router;
