const express = require("express");
const router = express.Router();
const mongoConnect = require("../mongoConnect");

router.put("/addUser", (req, res) => {
  const db = mongoConnect.db();
  const user = {
    user: req.body.user,
    roomCode: req.body.roomCode,
  };
  db.collection("users").findOneAndUpdate(
    { roomCode: req.body.roomCode },
    { user }
  );
  res.send("user added");
});

router.post("/postRoom", (req, res) => {
  const db = mongoConnect.db();
  const users = {
    users: req.body.users,
    roomCode: req.body.roomCodeode,
  };
  db.collection("users").insertOne({
    users,
  });
  res.send("users for room created");
});

module.exports = router;
