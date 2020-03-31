const mongoose = require("mongoose");

const borrowerSchema = mongoose.Schema({
  cardNumber: {
    type: String,
    required: true,
    unique: true
  },
  dateOfMembership: {
    type: Date,
    require: true
  },
  numberOfIssues: {
    type: Number,
    require: true
  },
  borrowerName: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: Number,
    require: false
  }
});

module.exports = mongoose.model("BorrowerSchema", borrowerSchema);
