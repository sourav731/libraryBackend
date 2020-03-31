const express = require("express");
const router = express.Router();
const borrowerSchema = require("../models/borrower");

//student Schema page connected
router.get("/", (req, res) => {
  res.send("student Schema page connected");
});

//show all student data
router.get("/showStudent", async (req, res) => {
  try {
    const showStudent = await borrowerSchema.find();
    res.json(showStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

//show specific student data using card number
router.get("/showSpecificStudent", async (req, res) => {
  try {
    const findStudent = await borrowerSchema.find({
      cardNumber: req.body.cardNumber
    });
    res.json(findStudent);
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

//add a student
router.post("/", async (req, res) => {
  const studentAdd = new borrowerSchema({
    cardNumber: req.body.cardNumber,
    dateOfMembership: req.body.dateOfMembership,
    numberOfIssues: req.body.numberOfIssues,
    borrowerName: req.body.borrowerName,
    phoneNumber: req.body.phoneNumber
  });

  try {
    const addStudent = await studentAdd.save();
    res.json(addStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a student using card number
router.delete("/delete", async (req, res) => {
  try {
    const deleteStudent = await borrowerSchema.remove({
      cardNumber: req.body.cardNumber
    });
    res.send("deleted a Student");
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

module.exports = router;
