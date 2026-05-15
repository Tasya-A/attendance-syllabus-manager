const Student = require("../models/Student");
exports.addStudents = async (req, res) => {
    try {
        const students = await Student.insertMany(req.body);
        res.status(201).json({ message: "Students Added Successfully", students });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ message: "Students fetched successfully", students });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};