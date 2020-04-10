const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://tarunsingh:audiq741@ecomerce-website-qfwmi.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  console.log("Fired!");
});

app.listen(5000);
