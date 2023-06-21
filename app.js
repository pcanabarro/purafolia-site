const express = require('express')
const Router = require('./api/routes/router.js')
const path = require('path')
require('dotenv').config()

class App {
	constructor() {
		this.app = express()
		this.port = process.env.SERVER_PORT
		this.app.set('view engine', 'pug')
		this.app.set("views", path.join(__dirname, "web"))
		this.app.use(express.static(path.join(__dirname, 'web/public')))
		this.app.use(express.json())
		this.app.use(Router.getRouter())
	}

	start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

const app = new App()
app.start()
