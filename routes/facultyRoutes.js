const express = require("express");
const router = express.Router();
const { addFaculty, getFaculty } = require("../controllers/facultyController");

router.post("/add-faculty", addFaculty);
router.get("/faculty", getFaculty);

module.exports = router;