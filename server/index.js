const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://hoha881:asd123cvb456@cluster0.3ljkgpq.mongodb.net/digitalpaintings?retryWrites=true&w=majority"
);
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, resualt) => {
    if (err) {
      res.json(err);
    } else {
      res.json(resualt);
    }
  });
});
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});
app.listen(3001, () => {
  console.log("server is runnign");
});
