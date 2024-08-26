const express = require('express');
const router = express.Router();
const { addStudentController } = require('../controllers/studentController');

router.post('/add-student', addStudentController);

module.exports = router;
