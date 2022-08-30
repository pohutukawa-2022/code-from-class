const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

module.exports = server

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.get('/proxy', (req, res) => {
  request
    .get('https://www.fruityvice.com/api/fruit/all')
    .set('Accept', 'application/json')
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => console.err(error.message))
})
