class HomeController {
    static getHome (req, res) {
        res.render('index.pug')
    }
}

module.exports = HomeController
