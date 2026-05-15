const mongoose = require("mongoose");
const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    employeeID: { type: String, required: true },
    department: String,
    designation: String,
    qualification: String,
    specialization: String
});
module.exports = mongoose.model("Faculty", facultySchema);