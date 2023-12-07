import transporter from '../connections/nodemailer.js'
import database from '../connections/database.js'
import dotenv from 'dotenv'

dotenv.config({ path: '../../../.env' })

class EmailController {
  static async getEmails(req, res) {
    const emailsToDisplay = []
    try {
      await database.connect()
      const allEmails = await database.email.find().toArray()
      allEmails.forEach(item => {
        emailsToDisplay.push(item)
      })

      res.status(200).json({ message: allEmails })
    } catch (error) {
      res.status(500).json({ msg: 'Erro na visualizacao dos emails', error: error })
    }
  }

  static async sendEmail(req, res) {
    try {
      const { customerEmail, customerName, phone, type, year } = req.body
      const message = `${customerName}, esta solicitando um orçamento para o ano de ${year}, uma festa ${type}. Contato: ${phone}`
      const mailOptions = {
        from: customerEmail,
        to: process.env.SERVER_EMAIL,
        subject: `Orçamento ${customerName}, ${customerEmail}`,
        text: message
      }

      const promises = [
        database.email.insertOne(mailOptions),
        // transporter.sendMail(mailOptions)
      ]

      await Promise.all(promises)

      res.status(201).json({ msg: 'Email Enviado!'})
    } catch (error) {
      res.status(500).json({ msg: 'Erro no envio do email!', error: error })
    }
  }

  static async deleteEmail(req, res) {
    try {
      const { emailId } = req.body
      await database.email.deleteOne({ _id: emailId })

      res.status(200).json({ msg: 'Email Deletado!'})
    } catch (error) {
      res.status(500).json({ msg: 'Erro na exclusão do email!', error: error })
    }
  }
}

export default EmailController
