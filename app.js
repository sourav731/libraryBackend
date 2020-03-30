const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

//MIDDLE WARES
app.use(bodyParser.json());

//IMPORT ROUTES
const studentLogin = require("./routes/studentLogin");
app.use("/loginStudent", studentLogin);

//ROUTES
app.get("/", (req, res) => {
  res.send("Connected");
  console.log("connected");
});

//CONNECT TO DATABASE
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("connected to DB!")
);

app.listen(4000, () => {
  console.log("server running on port 4000");
});
