const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

//MIDDLE WARES
app.use(bodyParser.json());

//IMPORT ROUTES
//student login page
const studentLogin = require("./routes/studentLogin");
app.use("/loginStudent", studentLogin);

//book store page
const bookStore = require("./routes/bookStore");
app.use("/bookStore", bookStore);

//student database page
const studentMember = require("./routes/studentMember");
app.use("/borrower", studentMember);

//ROUTES
app.get("/", (req, res) => {
  res.send("Connected");
  console.log("connected");
});

//CONNECT TO DATABASE
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  console.log("connected to DB!")
);

app.listen(4000, () => {
  console.log("server running on port 4000");
});
