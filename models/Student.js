const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    department: String,
    year: Number,
    semester: Number,
    section: String
});
module.exports = mongoose.model("Student", studentSchema);