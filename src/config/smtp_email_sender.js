const nodemailer = require('nodemailer');

// Create a nodemailer transporter
exports.transporter = nodemailer.createTransport({
  service: 'SMTP',
  auth: {
    user: 'your-email@example.com', // Replace with your email address
    pass: 'your-email-password' // Replace with your email password or app-specific password
  }
});
