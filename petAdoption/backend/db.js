const mongoose = require("mongoose");
const { minLength, maxLength } = require("zod");

const dotenv = require("dotenv").config();
const dbUrl = process.env.mongo_url;
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
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  breed: {
    type: String,
  },
  userName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  userEmail: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 30,
  },
  phone: {
    type: Number,
  },
});

const Pet = mongoose.model("pet", petSchema);

module.exports = { Pet };
