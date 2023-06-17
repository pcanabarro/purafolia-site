const database = require('../connections/database.js')

class OrderController {
  constructor() {
    this.db = database.db('purafolia');
    this.ordersCollection = this.db.collection('order');
  }

  async createOrder(req, res) {
    console.log(req.body)
    const { customer, type, details } = req.body
    const newOrder = {
      customer: customer,
      type: type,
      details: details
    }

    try {
      await this.ordersCollection.insertOne(newOrder)
      res.status(201).json(newOrder)
    } catch (err) {
      res.status(500).json({ data: 'Something went wrong', err: err})
    }
  }

  static getOrder(req, res) {
    //  add method to get from database
    res.status(200).json({ "orders": orders });
  }

  static deleteOrder(req, res) {
    // add method to delete from database
    const { orderId } = req.body
    res.status(200).json({ msg: `Order ${orderId} deleted` }) //adicionar id
  }
}

module.exports = OrderController
