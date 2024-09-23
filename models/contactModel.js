const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name "],
    },
    email: {
      type: String,
      required: [true, "Please add the email name "],
    },
    phone: {
      type: String,
      required: [true, "Please add the Phone Number "],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contacts", contactSchema);
