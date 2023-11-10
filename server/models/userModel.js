const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
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
  phone: {
    type: Number,
    require: [true, " Please provide your phone number!"],
    length: 10,
  },
  dob: {
    type: Date,
    require: [true, "Please provide your Date of birth"],
  },
  role: {
    type: String,
    // enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  address: {
    type: String,
    require: [true, "Please provide your Address!"],
  },
  current_location: {
    type: String,
  },
  last_company: {
    type: String,
    require: [
      True,
      "Please provide your last company or curruent company name!",
    ],
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});
userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("Employee", userSchema);

module.exports = User;
