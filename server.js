const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const { authRoutes } = require("./routes/authRoutes");

dotenv.config();

// Initialize express application
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => {
  res.send("This is the root endpoint");
});

// Auth routes
app.use("/api/v1/auth", require("./routes/authRoutes"));

// Start the server
const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
