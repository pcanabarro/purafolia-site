class HomeController {
    static getHome (req, res) {
        res.status(200).send('Hello World');
    }
}

module.exports = HomeController
