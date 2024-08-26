// controllers/studentController.js
const { addStudent } = require('../models/studentModel');

const addStudentController = (req, res) => {
  const studentData = req.body;

  addStudent(studentData, (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).send('Error inserting data into the database.');
    } else {
      res.status(201).send('Student data added successfully!');
    }
  });
};

module.exports = { addStudentController };
