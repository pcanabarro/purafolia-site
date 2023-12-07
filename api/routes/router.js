import express from 'express'
import orderController from '../controller/orderController.js'
import emailController from '../controller/emailController.js'

class Router {
    static getRouter () {
        const router = express.Router()
        router.use(express.json())

        // Orders
        router.get('/order', orderController.getOrder)
        router.post('/order', orderController.createOrder, emailController.sendEmail)
        router.delete('/order', orderController.deleteOrder)

        // Email
        router.get('/email', emailController.getEmails)
        router.delete('/email', emailController.deleteEmail)

        return router
    }
}

export default Router
