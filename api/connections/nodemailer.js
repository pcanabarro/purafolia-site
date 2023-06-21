const nodemailer = require('nodemailer')
const constants = require('../utils/constants.js')

const transporter = () => {
  return nodemailer.createTransport({
    service: constants.NODEMAILER_SERVICE,
    auth: {
      user: process.env.SERVER_EMAIL,
      pass: process.env.SERVER_EMAIL_PASSWORD,
    }
  })
}

module.exports = {
  transporter
}
