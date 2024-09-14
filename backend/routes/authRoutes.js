const express = require('express');
const router = express.Router();
const { registerUser, login } = require('../controllers/authController'); // Ensure correct path and names

// Route for user registration
router.post('/register', registerUser); // Ensure registerUser is a valid function

// Route for user login
router.post('/login', login); // Ensure login is a valid function

module.exports = router;
