const express = require('express')
const homeController = require('../controller/homeController.js')
const orderController = require('../controller/orderController.js')
const emailController = require('../controller/emailController.js')

class Router {
    static getRouter () {
        const router = express.Router()
        router.use(express.json())
        router.get('/home', homeController.getHome)
        router.get('/email', emailController.sendEmail) // TODO
        router.get('/getorders', orderController.getOrder)
        router.get('/order', orderController.createOrder)

        return router
    }
}

module.exports = Router
