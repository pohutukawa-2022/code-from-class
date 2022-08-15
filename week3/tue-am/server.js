// IMPORT THE BASICS
const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')

const server = express()
module.exports = server

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))
server.engine('hbs', engine({ extname: 'hbs' }))

server.set('view engine', 'hbs')
server.set('views', './views')

// WRITE THOSE ROUTES
server.get('/', (req, res) => {
  // TODO: render characters in the home page

  res.send('This page should show all the characters.')
})
