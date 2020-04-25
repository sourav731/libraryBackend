const express = require("express");
const router = express.Router();
const bookSchema = require("../models/book");

//bookDatabase
router.get("/", async (req, res) => {
  res.send("Books database connected");
});

//find all books in database
router.get("/books", async (req, res) => {
  try {
    const books = await bookSchema.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

//add books to database
router.post("/", async (req, res) => {
  const books = new bookSchema({
    ISBN: req.body.ISBN,
    Author: req.body.Author.toLowerCase(),
    Title: req.body.Title.toLowerCase(),
    Price: req.body.Price,
    ClassNo: req.body.ClassNo,
    BookNo: req.body.BookNo,
    AccessionNo: req.body.AccessionNo,
    DateOfPurchase: req.body.DateOfPurchase,
    Edition: req.body.Edition,
  });

  try {
    const booksAdd = await books.save();
    res.json(booksAdd);
  } catch (err) {
    res.json({ message: err });
  }
});

//find a book using ISBN number
router.get("/find", async (req, res) => {
  try {
    const requiredBook = await bookSchema.find({ ISBN: req.body.ISBN });
    res.send(requiredBook);
    console.log(requiredBook);
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

//delete a book using ISBN number
router.delete("/delete/:ISBN", async (req, res) => {
  try {
    const removeBook = await bookSchema.remove({ ISBN: req.params.ISBN });
    res.send("deleted book from book store");
  } catch (err) {
    res.send({ message: err });
  }
});

//update book data using ISBN number
router.patch("/update/:ISBN", async (req, res) => {
  const books = {
    Author: req.body.Author,
    Title: req.body.Title,
    Price: req.body.Price,
    ClassNo: req.body.ClassNo,
    BookNo: req.body.BookNo,
    AccessionNo: req.body.AccessionNo,
    DateOfPurchase: req.body.DateOfPurchase,
    Edition: req.body.Edition,
  };

  try {
    const updateBook = await bookSchema.updateOne(
      { ISBN: req.params.ISBN },
      { $set: books }
    );

    res.json(updateBook);
    res.send("updated book in book store");
  } catch (err) {
    res.json({ message: err });
  }
});

//find book using book name
router.get("/findBookName", async (req, res) => {
  try {
    const requiredBook = await bookSchema.find({
      Title: req.body.Title.toLowerCase(),
    });
    res.send(requiredBook);
    console.log(requiredBook);
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

//find using author name
router.get("/findAuthorName", async (req, res) => {
  try {
    const requiredBook = await bookSchema.find({
      Author: req.body.Author.toLowerCase(),
    });
    res.send(requiredBook);
    console.log(requiredBook);
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

//find using partial book name
router.get("/findPartialBookName", async (req, res) => {
  try {
    const requiredBook = await bookSchema.find({
      Title: { $regex: req.body.Title.toLowerCase(), $options: "i" },
    });
    res.send(requiredBook);
    console.log(requiredBook);
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

module.exports = router;
