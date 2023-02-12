const nodemailer = require('nodemailer');
const { config } = require('./../config/config')

module.exports = {
  sendMail: async ({email, subject, text, html}) => {
    await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.emailAccount,
        pass: config.emailPass,
      },
    });

    const info = await transporter.sendMail({
      from: config.emailAccount,
      to: email,
      subject: subject,
      text: text,
      html: html    //'<b>Hello dev</b>'
    });
    return(info);
  },
};