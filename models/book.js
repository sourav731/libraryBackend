const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  ISBN: {
    type: String,
    required: true
  },
  Author: {
    type: String,
    required: true
  },
  Title: {
    type: String,
    required: true
  },
  Price: {
    type: String,
    required: true
  },
  ClassNo: {
    type: String,
    required: true
  },
  BookNo: {
    type: String,
    required: true
  },
  AccessionNo: {
    type: String,
    required: true
  },
  DateOfPurchase: {
    type: Date,
    required: true
  },
  Edition: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("BookSchema", bookSchema);
