const express = require('express');
const Router = require('./routes/router.js')
require('dotenv').config()

const app = express();

const PORT = process.env.SERVER_PORT;

app.use(Router.getRouter());

app.listen(PORT, () =>
    console.log('Server running on port', PORT)
)
