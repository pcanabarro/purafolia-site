
const orders = []

function createOrder (req, res) {
    console.log(req.body)
    const { customer, type, details } = req.body 
    const newOrder = {}

    newOrder.customer = customer
    newOrder.type = type
    newOrder.details = details
    orders.push(newOrder)

    res.status(201).json(newOrder)
}

function getOrder (req, res) {
    res.status(200).json({ "orders": orders });
}

function deleteOrder (req, res) {
    res.status(200).json({}) //adicionar id
}

module.exports = {
    createOrder,
    getOrder,
    deleteOrder
}
