const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
// const cr = require('./products_controller')

const app = express();
app.use(bodyParser.json())

// massive(process.env.CONNECTION_STRING)
//     .then(db => { app.set('db', db) })

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})