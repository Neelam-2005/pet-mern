const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/petDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

// Routes
const petRoutes = require("./routes/petRoutes");
app.use("/api/pets", petRoutes);

// Server
app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});