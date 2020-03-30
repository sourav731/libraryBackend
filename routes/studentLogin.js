const express = require("express");
const router = express.Router();
const StudentLoginSchema = require("../models/studentLogin");

router.get("/", (req, res) => {
  res.send("Connected to post");
  console.log("connection is activated.");
});

router.post("/", async (req, res) => {
  const login = new StudentLoginSchema({
    cardNumber: req.body.cardNumber,
    studentName: req.body.studentName
  });

  try {
    const loginPost = await login.save();
    res.json(loginPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
