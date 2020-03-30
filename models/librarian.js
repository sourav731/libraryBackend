const mongoose = require("mongoose");

const librarianSchema = mongoose.Schema({
  librarianName: {
    type: String,
    required: true
  },
  librarianEmail: {
    type: String,
    required: true
  },
  librarianPassword: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("LibrarianSchema", librarianSchema);
