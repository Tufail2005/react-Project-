const mongoose = require("mongoose");
const dotenv = require("dotenv");

const dbUrl = process.env.db_string;
mongoose.connect("dbUrl");

const userSchema = new mongoose.Schema({

    userName:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
    },
    password:{
        type: String,
        required:true,
        minLength: 3,
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        minLength:3,
        maxLength:10
    },
        lastName:{
        type: String,
        required: true,
        trim: true,
        minLength:3,
        maxLength:10
    }
    
})

const accountSchema = new mongoose.Schema({
    userName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        reuired: true,
    },
    balance:{
        type: Number,
        required: true,
    }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User,
    Account
}