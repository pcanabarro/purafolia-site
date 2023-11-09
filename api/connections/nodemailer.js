import nodemailer from 'nodemailer'
import constants from '../utils/constants.js'

const transporter = () => {
  return nodemailer.createTransport({
    service: constants.NODEMAILER_SERVICE,
    auth: {
      user: process.env.SERVER_EMAIL,
      pass: process.env.SERVER_EMAIL_PASSWORD,
    }
  })
}

export default transporter
