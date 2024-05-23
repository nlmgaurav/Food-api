const express = require("express");

// Register Controller
const registerController = (req, res) => {
  res.send("this is signup page");
};

// Login Controller
const loginController = (req, res) => {
  res.send("this is Login APi");
};

module.exports = { registerController, loginController };
