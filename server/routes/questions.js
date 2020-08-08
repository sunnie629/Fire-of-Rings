const express = require("express");
const router = express.Router();
const mongoConnect = require("../mongoConnect");

router.get("/getAllQuestions", (req, res) => {
  const db = mongoConnect.db();
  // const docs = db.collection("questions").find({}).data;
  console.log(docs);
  const arr = [];
  for (doc in docs) arr.push(doc);
  res.send(arr);
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
