const mongoose = require("mongoose");

const billSchema = mongoose.Schema({
  billNo: {
    type: String,
    required: true
  },
  billDate: {
    type: Date,
    default: Date.now,
    require: true
  },
  borrowerId: {
    type: String,
    required: true
  },
  billAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("BillSchema", billSchema);
