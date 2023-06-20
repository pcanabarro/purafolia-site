const express = require('express')
const Router = require('./api/routes/router.js')
const path = require('path')
require('dotenv').config()

const app = express()

const PORT = process.env.SERVER_PORT

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "web"))

app.use(express.static(path.join(__dirname, 'web/public')));
app.use(Router.getRouter())

app.listen(PORT, () =>
    console.log('Server running on port', PORT)
)
