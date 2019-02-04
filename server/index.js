const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const cr = require('./controller')

const app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public/build'))

massive(process.env.CONNECTION_STRING)
    .then(db => { app.set('db', db) })

app.get('/api/houses', cr.getAll)
app.post('/api/createhouse', cr.createHouse)
app.delete('/api/house/:id', cr.deleteHouse)

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})     