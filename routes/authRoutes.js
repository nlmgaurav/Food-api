const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");
const router = express.Router();

// Register API
router.post("/register", registerController);

// Login API
router.post("/login", loginController);

module.exports = router;
