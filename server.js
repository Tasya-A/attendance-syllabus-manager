const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");
const facultyRoutes = require("./routes/facultyRoutes");

app.use("/", studentRoutes);
app.use("/", facultyRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});