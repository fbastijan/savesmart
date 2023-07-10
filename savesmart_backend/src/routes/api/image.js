const express = require("express");
const passport = require("passport");
const router = express.Router();
const user = require("../../model/User.js");
router.patch(
  "/change",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let doc = req.body;
    try {
      let db = await user.findByIdAndUpdate(
        { _id: doc._id },
        { avatar: req.body.avatar },
        {
          new: true,
        }
      );
      if (db) {
        console.log(db);
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
