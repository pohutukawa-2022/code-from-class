// IMPORT THE BASICS
const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
// Import data
const data = require('./data')

// CREATE YOUR SERVER
const server = express()
module.exports = server

// ADD PUBLIC FOLDER
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// CREATE A NEW VIEW ENGINE
server.engine('hbs', engine({ extname: 'hbs' }))

// CONNECT ENGINE TO SERVER
server.set('view engine', 'hbs')
server.set('views', './views')

server.get('/', (req, res) => {
  const viewData = {
    blogs: data.blogs,
  }
  res.render('home', viewData)
})

server.get('/contact', (req, res) => {
  res.render('contact')
})

server.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'old-about.html'))
})
