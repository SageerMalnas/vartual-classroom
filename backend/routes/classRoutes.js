const express = require('express');
const { createClass, getClasses } = require('../controllers/classController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createClass).get(protect, getClasses);

module.exports = router;