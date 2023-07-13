const express = require('express');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const authenticateToken = require('./middlewares/authenticateToken');
require('./config/database');
require("dotenv").config();

const app = express();
app.use(express.json());

// app routes
app.use('/auth', authRoutes);
app.use('/protected', authenticateToken, protectedRoutes);

//start server at port PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server started on port 3000');
});
