const express = require("express");

const {
  getContacts,
  createContact,
  getContact,
  deletContact,
  updateContact,
} = require("../controllers/contactController");

const router = express.Router();

router.get("/", getContacts);

router.put("/:id", updateContact);

router.get("/:id", getContact);

router.post("/", createContact);
router.delete("/:id", deletContact);

module.exports = router;
