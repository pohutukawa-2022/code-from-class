// IMPORT THE BASICS
const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')

const players = require('./routes/players')
const genres = require('./routes/genres')

const server = express()
module.exports = server

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))
server.engine('hbs', engine({ extname: 'hbs' }))

server.set('view engine', 'hbs')
server.set('views', './views')

server.use('/players', players)
server.use('/genres', genres)

server.get('/', (req, res) => {
  res.render('home')
})
