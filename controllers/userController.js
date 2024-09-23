const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(400);
    throw new Error("Please enter all details");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(200).json({ user });
});

const loginUser = asyncHandler(async (req, res) => {});
module.exports = {
  loginUser,
  registerUser,
};
