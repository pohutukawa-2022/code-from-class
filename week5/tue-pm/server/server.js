const path = require('path')
const express = require('express')
const request = require('superagent')

const key = process.env.FRUIT_APIKEY

const server = express()

module.exports = server

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.get('/proxy', (req, res) => {
  request
<<<<<<< HEAD
    .get('https://www.fruityvice.com/api/fruit/all')
=======
    .get(`https://www.fruityvice.com/api/fruit/all`)
>>>>>>> d8d29c0879535f5c213134a7c8374ec183d5706b
    .set('Accept', 'application/json')
    .then((response) => {
      res.json(response.body)
    })
<<<<<<< HEAD
    .catch((err) => console.err(error.message))
=======
    .catch((err) => console.error(err.message))
>>>>>>> d8d29c0879535f5c213134a7c8374ec183d5706b
})
