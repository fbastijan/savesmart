const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const db = require("./config/keys").mongoUri;
const app = express();
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(passport.initialize());
require("./config/passport")(passport);
mongoose
  .connect(db)
  .then(console.log("uspio sam"))
  .catch((e) => {
    console.log(e);
  });

const users = require("./routes/api/users");
const image = require("./routes/api/image");
const friends = require("./routes/api/friends");
app.use("/api/users", users);
app.use("/api/image", image);
app.use("/api/friends", friends);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(3000, () => console.log("server started"));
