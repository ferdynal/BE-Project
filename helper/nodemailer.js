const nodemailer = require('nodemailer');

// Step 1
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abc@gmail.com', // your gmail account
        pass: '1234' // your gmail password
    }
})

module.exports = transporter

// Step 2
// let mailOptions = {
//     from: 'abc@gmail.com', // email sender
//     to: 'cba@gmail.com', // email receiver
//     subject: 'Nodemailer - Test',
//     text: 'Wooohooo it works!!'
// };

// // Step 3
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return log('Error occurs');
//     }
//     return log('Email sent!!!');
// });