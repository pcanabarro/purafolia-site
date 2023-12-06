import express from 'express'
import Router from './api/routes/router.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

class App {
	constructor() {
		this.app = express()
		this.port = process.env.SERVER_PORT
		this.app.use(express.json())
		this.app.use(cors())
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
