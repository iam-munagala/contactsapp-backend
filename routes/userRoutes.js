const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/current", async (req, res) => {
  res.json({ message: "Current User Here" });
});

module.exports = router;
