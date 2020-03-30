const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  transID: {
    type: Number,
    required: true
  },
  borrowerId: {
    type: String,
    required: true
  },
  ISBN: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  submissionDate: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model("TransactionSchema", transactionSchema);
