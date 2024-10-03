const express = require("express");

const {
  getContacts,
  createContact,
  getContact,
  deletContact,
  updateContact,
} = require("../controllers/contactController");
const ValidateToken = require("../middlewares/validateToken");

const router = express.Router();
router.use(ValidateToken);
router.get("/", getContacts);

router.put("/:id", updateContact);

router.get("/:id", getContact);

router.post("/", createContact);
router.delete("/:id", deletContact);

module.exports = router;
