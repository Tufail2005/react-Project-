const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbUrl = process.env.db_string;
mongoose.connect(dbUrl);

const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  petType: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 30,
  },
  Bread: {
    type: String,
  },
  yourName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  phone: {
    type: Number,
    minLength: 10,
    maxLength: 10,
  },
});

const Pet = mongoose.model("pet", petSchema);

module.exports = { Pet };
