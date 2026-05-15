const Faculty = require("../models/Faculty");
exports.addFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.insertMany(req.body);
        res.status(201).json({ message: "Faculty Added Successfully", faculty });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.status(200).json({ message: "Faculty fetched successfully", faculty });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};