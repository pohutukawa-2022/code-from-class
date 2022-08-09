const express = require('express')
const server = express()
const fs = require('fs').promises
const path = require('path')
const hbs = require('express-handlebars')

module.exports = server

// Middleware
server.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
  })
)
server.set('view engine', 'hbs')
server.use(express.static('public'))

server.get('/', async (req, res) => {
  res.send('Nothing important, just another Wednesday morning lecture 🥱')
})
