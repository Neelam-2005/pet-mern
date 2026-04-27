const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/petDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

// API Routes
const petRoutes = require("./routes/petRoutes");
app.use("/api/pets", petRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "build")));

app.get("/:path(*)", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Server (KEEP THIS LAST)
app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});