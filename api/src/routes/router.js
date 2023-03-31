const express = require('express');
const ContactController = require('../controller/contactController.js');
const homeController = require('../controller/homeController.js');
const orderController = require('../controller/orderController.js');

class Router {
    static getRouter () {
        const router = express.Router();

        router.use(express.json());

        router.get('/home', homeController.getHome);
        router.get('/order', orderController.getOrder);
        router.post('/order', orderController.createOrder);
        router.get('/contact', ContactController.getContact);

        return router;
    }
}

module.exports = Router;
