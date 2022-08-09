// IMPORT THE BASICS
const path = require('path')
const express = require('express')
//import the engine for handlebars
const { engine } = require('express-handlebars')

// Import data
// here is the data for handlebars
const data = require('./data')

// CREATE YOUR SERVER
const server = express()
module.exports = server

// ADD PUBLIC FOLDER
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// CREATE A NEW VIEW ENGINE
// handlebars
server.engine('hbs', engine({ extname: 'hbs' }))

//CONNECT ENGINE TO SERVER
// handlebars
server.set('view engine', 'hbs')
server.set('views', './views')

server.get('/', (req, res) => {
  //creating the data to pass from data.js
  const viewData = {
    blogs: data.blogs,
  }
  // sending the home template with the viewData object from above (which comes from the data.js file)

  res.render('home', viewData)
})

server.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'old-contact.html'))
})

server.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'old-about.html'))
})
