const mongoose = require("mongoose");

const constactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add contact phone number"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email addrass"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone number"],
    },
  }, 
  {
    timestamps: true,

  }
);

module.exports = mongoose.model("contact", constactSchema);