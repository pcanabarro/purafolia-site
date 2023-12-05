import database from '../connections/database.js'
import emailController from './emailController.js'

class OrderController {
  static async getOrder(req, res) {
    const ordersToDisplay = []
    try {
      await database.connect()

      const allOrders = await database.order.find().toArray()
      allOrders.forEach(item => {
        ordersToDisplay.push(item)
      })

      res.status(201).json({ data: ordersToDisplay })
    } catch (error) {
      res.status(500).json({ data: 'Erro ao visualizar ordens', err })
    }
  }

  static async createOrder(req, res, next) {
    const { customerName, customerEmail, message } = req.body
    const newOrder = {
      'customerName': customerName,
      'customerEmail': customerEmail,
      'message': message
    }

    try {
      await database.connect()
      await database.order.insertOne(newOrder)

      // res.status(201).json({ data: 'Ordem Criada', newOrder })
      next()
    } catch (error) {
      res.status(500).json({ data: 'Erro na criação', err })
    }
  }

  static async deleteOrder(req, res) {
    try {
      const { orderId } = req.params

      await database.connect()

      await database.order.deleteOne(orderId)
      res.status(200).json({ msg: `Ordem ${orderId} deletada` })
    } catch (error) {
      res.status(500).json({ data: 'Erro na deleção', error })
    }
  }
}

export default OrderController
