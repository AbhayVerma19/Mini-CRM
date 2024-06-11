const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: (value) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value),
      message: "Invalid email format",
    },
  },
  totalSpends: {
    type: Number,
    required: false,
    default: 0,
  },
  visits: {
    type: Number,
    required: false,
    default: 0,
  },
  lastVisit: {
    type: Date,
    required: false,
  },
});

const Customer=mongoose.model("Customer", customerSchema);
module.exports = Customer
