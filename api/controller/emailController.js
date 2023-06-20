const transporter = require('../connections/nodemailer.js')
require('dotenv').config({ path: '../../../.env' })

class EmailController {
  static getInfo(req, res) {
    res.render('index')
  }

  static async sendEmail(req, res) {
    try {
      const { customerName, customerEmail, message } = req.query
      const mailOptions = {
        from: process.env.SERVER_EMAIL,
        to: process.env.SERVER_EMAIL,
        subject: `Orçamento ${customerName}, ${customerEmail}`,
        text: message
      }

      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Email enviado com sucesso!' })
    } catch (error) {
      res.status(500).json({ msg: 'Erro no envio do email', error: error })
    }
  }
}

module.exports = EmailController
