const mongoose = require("mongoose");

const studentLoginSchema = mongoose.Schema({
  cardNumber: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  loginDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("StudentLoginSchema", studentLoginSchema);
