// app.js
const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// Routes
app.use('/api/students', studentRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
