const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const useSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    require: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please porvide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    require: [true, "Please confirm your password"],
    validator: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password are not the Same!",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  action: {
    type: Boolean,
    default: true,
    select: false,
  },
});
