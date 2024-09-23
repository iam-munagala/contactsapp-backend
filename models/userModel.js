const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the username"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email"],
      unique: [true, "Email already Exists"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
