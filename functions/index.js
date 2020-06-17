const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const CORS = require('cors')({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: functions.config().someservice.email,     // 'yourgmailaccount@gmail.com'
        pass: functions.config().someservice.password   // 'yourgmailaccpassword'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    CORS(req, res, () => {
        const dest = req.query.dest;

        const mailOptions = {
            from: 'John Doe <example@example.com>',
            to: dest,
            subject: 'Test Mail', // email subject
            text: 'Plain Text Test Email',
            html: '' // HTML Mail
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                return res.send(error.toString());
            }

            return res.send('Mail Sended');
        });
    })
});
