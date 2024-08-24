const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;

// Create a database connection (e.g., MySQL)
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Create a route to handle form submission
app.post('/submit', (req, res) => {
  const {
    studentName,
    fatherName,
    rollNumber,
    gender,
    admissionDate,
    nationality,
    cnicNumber,
    passportNumber,
    dateOfBirth,
    contactNumber,
    email,
    province,
    domicileDistrict,
    mailingAddress,
    city,
    sscDegreeName,
    sscBoardName,
    sscTotalMarks,
    sscObtainedMarks,
    hsscDegreeName,
    hsscDegreeNomenclature,
    hsscBoardName,
    hsscTotalMarks,
    hsscObtainedMarks,
    graduationDate,
    totalCgpa,
    obtainedCgpa
  } = req.body;

  // Validate the input data (e.g., check for empty fields, invalid formats)
  // ...

  // Insert the data into the database
  const query = `INSERT INTO students (
    student_name,
    father_name,
    roll_number,
    gender,
    admission_date,
    nationality,
    cnic_number,
    passport_number,
    date_of_birth,
    contact_number,
    email,
    province,
    domicile_district,
    mailing_address,
    city,
    ssc_degree_name,
    ssc_board_name,
    ssc_total_marks,
    ssc_obtained_marks,
    hssc_degree_name,
    hssc_degree_nomenclature,
    hssc_board_name,
    hssc_total_marks,
    hssc_obtained_marks,
    graduation_date,
    total_cgpa,
    obtained_cgpa
  ) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
  )`;

  db.query(query, [
    studentName,
    fatherName,
    rollNumber,
    gender,
    admissionDate,
    nationality,
    cnicNumber,
    passportNumber,
    dateOfBirth,
    contactNumber,
    email,
    province,
    domicileDistrict,
    mailingAddress,
    city,
    sscDegreeName,
    sscBoardName,
    sscTotalMarks,
    sscObtainedMarks,
    hsscDegreeName,
    hsscDegreeNomenclature,
    hsscBoardName,
    hsscTotalMarks,
    hsscObtainedMarks,
    graduationDate,
    totalCgpa,
    obtainedCgpa
  ], (err, results) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      res.status(500).send('Error inserting data into database');
    } else {
      res.send('Data inserted successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});