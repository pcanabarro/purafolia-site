import database from '../connections/database.js'

class OrderController {

  static async createOrder(req, res) {
    console.log(req)
    const { customerName, customerEmail, message } = req.query
    const newOrder = {
      'customerName': customerName,
      'customerEmail': customerEmail,
      'message': message
    }

    try {
      await database.connect()
      await database.order.insertOne(newOrder)
      console.log('Data Inserted')
      res.status(201).json({ data: 'Order created', newOrder })
    } catch (err) {
      res.status(500).json({ data: 'Something went wrong', err })
    }
  }

  static async getOrder(req, res) {
    const ordersToDisplay = []
    try {
      await database.connect()
      const allOrders = await database.order.find().toArray()
      allOrders.forEach(item => {
        ordersToDisplay.push(item)
      })
      res.status(201).json({ data: ordersToDisplay })
    } catch (err) {
      res.status(500).json({ data: 'Something went wrong', err })
    }
  }

  static async deleteOrder(req, res) {
    // add method to delete from database
    const { orderId } = req.body
    res.status(200).json({ msg: `Order ${orderId} deleted` })
  }
}

export default OrderController
