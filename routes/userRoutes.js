const express = require("express");
const {
  loginUser,
  registerUser,
  currentUser,
} = require("../controllers/userController");
const ValidateToken = require("../middlewares/validateToken");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", ValidateToken, currentUser);

module.exports = router;
