class PagesController {
    static getHome (req, res) {
        res.render('index.pug')
    }

    static getContact (req, res) {
        res.render('contact.pug')
    }

    static getSimulate (req, res) {
        res.render('simulate.pug')
    }

    static getGallery (req, res) {
        res.render('gallery.pug')
    }

    static getAbout (req, res) {
        res.render('about.pug')
    }
}

module.exports = PagesController
