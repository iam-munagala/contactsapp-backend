const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  console.log(`user Created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data is not valid");
  }
  res.json({ message: "Registeer the user" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Errror("All fields are mandatory");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(400);
    throw new Error("email or password wrong");
  }
});
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});
module.exports = {
  loginUser,
  registerUser,
  currentUser,
};
