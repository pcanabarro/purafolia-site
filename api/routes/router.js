const express = require('express')
const pagesController = require('../controller/pagesController.js')
const orderController = require('../controller/orderController.js')
const emailController = require('../controller/emailController.js')

class Router {
    static getRouter () {
        const router = express.Router()
        router.use(express.json())

        // Pages
        router.get('/home', pagesController.getHome)
        router.get('/contact', pagesController.getContact)
        router.get('/simulate', pagesController.getSimulate)
        router.get('/gallery', pagesController.getGallery)
        router.get('/about', pagesController.getAbout)

        // Orders
        router.get('/order', orderController.getOrder)
        router.post('/order', orderController.createOrder)

        // Email
        router.post('/email', emailController.sendEmail) // TODO

        // Gallery TODO

        return router
    }
}

module.exports = Router
