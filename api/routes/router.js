import express from 'express'
import pagesController from '../controller/pagesController.js'
import orderController from '../controller/orderController.js'
import emailController from '../controller/emailController.js'
import galleryController from '../controller/galleryController.js'

class Router {
    static getRouter () {
        const router = express.Router()
        router.use(express.json())

        // Pages
        router.get('/home', pagesController.getHome)
        router.get('/simulate', pagesController.getSimulate)
        // router.get('/gallery', pagesController.getGallery)

        // Orders
        router.get('/order', orderController.getOrder)
        router.post('/order', orderController.createOrder)
        router.delete('/order', orderController.deleteOrder)

        // Email
        router.get('/email', emailController.getEmails) // TODO
        router.post('/email', emailController.sendEmail) // TODO

        // Gallery TODO
        router.get('/gallery', galleryController.getImages)
        router.post('/gallery', galleryController.createImage)

        return router
    }
}

export default Router
