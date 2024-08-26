// models/studentModel.js
const db = require('../config/dbConfig');

const addStudent = (studentData, callback) => {
  const query = `INSERT INTO students (student_name, father_name, roll_number, gender, admission_date, nationality, cnic_number, passport_number, date_of_birth, contact_number, email, domicile_province, domicile_district, mailing_address, city_mailing_address, ssc_degree_name, ssc_board_name, ssc_total_marks, ssc_obtained_marks, hssc_degree_name, hssc_degree_nomenclature, hssc_board_name, hssc_total_marks, hssc_obtained_marks, graduation_date, total_cgpa, obtained_cgpa) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, Object.values(studentData), callback);
};

module.exports = { addStudent };
