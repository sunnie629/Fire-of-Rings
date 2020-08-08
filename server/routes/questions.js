const express = require("express");
const router = express.Router();
const mongoConnect = require("../mongoConnect");

router.get("/get", (req, res) => {
  const db = mongoConnect.db();
  console.log(db.collection("questions"));
  res.send("db");
});

router.post("/postQuestion", (req, res) => {
  const db = mongoConnect.db();
  if (req.body.type != "voting") {
    res.status(400).send("Invalid question type");
    return;
  }
  const question = {
    type: req.body.type,
    prompt: req.body.prompt,
  };
  db.collection("questions").insertOne({
    question,
  });
  res.send("hee");
});

module.exports = router;
