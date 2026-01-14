const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Applied"
  },
  appliedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Internship", internshipSchema);
