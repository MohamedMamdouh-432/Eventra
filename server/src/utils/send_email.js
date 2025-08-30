const nodemailer = require('nodemailer');
const Env = require('../config/env');


const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: Env.EMAIL_USERNAME,
      pass: Env.EMAIL_PASSWORD,
    },
  });

  const mailOpts = {
    from: `Eventra Center ${Env.EMAIL_USERNAME}`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOpts);
};

module.exports = sendEmail;
