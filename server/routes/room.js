const express = require("express");
const router = express.Router();
const mongoConnect = require("../mongoConnect");

// router.put("/addUser", (req, res) => {
//   const db = mongoConnect.db();
//   const user = {
//     user: req.body.user,
//     roomCode: req.body.roomCode,
//   };
//   db.collection("users").findOneAndUpdate(
//     { roomCode: req.body.roomCode },
//     { user }
//   );
//   res.send("user added");
// });

router.get("/get", (req, res) => {
  res.send("room");
});

router.post("/postRoom", (req, res) => {
  const db = mongoConnect.db();
  const { users, roomCode } = {
    users: req.body.users,
    roomCode: req.body.roomCode,
  };
  db.collection("rooms").insertOne({
    users,
    roomCode,
  });
  res.send(`room ${roomCode} created`);
});

router.put("/updateRoom", (req, res) => {
  const db = mongoConnect.db();
  const { users, roomCode } = {
    users: req.body.users,
    roomCode: req.body.roomCode,
  };
  db.collection("rooms").findOneAndReplace(
    { roomCode: roomCode },
    {
      users,
      roomCode,
    }
  );
  res.send(`room ${roomCode} updated with users`);
});

module.exports = router;
