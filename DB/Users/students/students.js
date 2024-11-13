const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

module.exports = mongoose.model("students", studentSchema);
