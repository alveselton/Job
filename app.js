const express = require('express');
const app = express();
const cron = require('node-cron');

const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'alveselton@gmail.com',
        pass: 'XXXXXXX'
    }
});

function sendEmail(message){
    transporter.sendMail({
        from: '"Elton" <codeheadservice@gmail.com>',
        to: '"Elton" <codeheadservice@gmail.com>',
        subject: 'Scheduled Email',
        text: message
    })
        .then(_ => {console.log("Email sent on " + new Date())})
        .catch(error => {console.log(error)});
}

cron.schedule('*/1 * * * *', () => {
    console.log("Task is running every minute " + new Date());
    sendEmail("Hey there, this email was sent to you automatically");
});

app.listen(2400, () => {console.log("Server started at port 2400")});