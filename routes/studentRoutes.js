const express = require("express");
const router = express.Router();
const { addStudents, getStudents } = require("../controllers/studentController");

router.post("/add-student", addStudents);
router.get("/students", getStudents);

module.exports = router;