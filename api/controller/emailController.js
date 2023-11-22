import transporter from '../connections/nodemailer.js'
import database from '../connections/database.js'
import dotenv from 'dotenv'

dotenv.config({ path: '../../../.env' })

class EmailController {
  static async getEmails(req, res) {
    try {
      await database.connect()
      const allEmails = database.email.find().toArray()

      res.status(200).json({ message: allEmails })
    } catch (error) {
      res.status(500).json({ msg: 'Erro na visualizacao dos emails', error: error })
    }
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

      const promises = [
        database.email.insertOne(mailOptions),
        transporter.sendMail(mailOptions)
      ]

      await Promise.all(promises)

      res.status(200).json({ message: 'Email enviado com sucesso!' })
    } catch (error) {
      res.status(500).json({ msg: 'Erro no envio do email', error: error })
    }
  }
}

export default EmailController
