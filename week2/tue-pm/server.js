// IMPORT THE BASICS
const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')

const data = require('./data')

// CREATE YOUR SERVER
const server = express()
module.exports = server

// ADD PUBLIC FOLDER
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Create a new view engine
server.engine('hbs', engine({ extname: 'hbs' }))

// Connect the view engine to server
server.set('view engine', 'hbs')
server.set('views', './views')

// WRITE THOSE ROUTES
server.get('/', (req, res) => {
  const viewData = {
    artists: data.artists,
  }
  // res.sendFile(path.join(__dirname, 'public', 'old.html'))
  res.render('home', viewData)
})

server.get('/about', (req, res) => {
  res.render('about')
})
