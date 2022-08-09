// IMPORT THE BASICS
const path = require('path')
const express = require('express')
<<<<<<< HEAD
//import the engine for handlebars
const { engine } = require('express-handlebars')

=======
const { engine } = require('express-handlebars')
>>>>>>> 0f3bd0fca5536a3d1fbc9e4c89b7e6d6e5e83d49
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
<<<<<<< HEAD
// handlebars
server.engine('hbs', engine({ extname: 'hbs' }))

//CONNECT ENGINE TO SERVER
// handlebars
=======
server.engine('hbs', engine({ extname: 'hbs' }))

// CONNECT ENGINE TO SERVER
>>>>>>> 0f3bd0fca5536a3d1fbc9e4c89b7e6d6e5e83d49
server.set('view engine', 'hbs')
server.set('views', './views')

server.get('/', (req, res) => {
<<<<<<< HEAD
  //creating the data to pass from data.js
  const viewData = {
    blogs: data.blogs,
  }
  // sending the home template with the viewData object from above (which comes from the data.js file)

=======
  const viewData = {
    blogs: data.blogs,
  }
>>>>>>> 0f3bd0fca5536a3d1fbc9e4c89b7e6d6e5e83d49
  res.render('home', viewData)
})

server.get('/contact', (req, res) => {
  res.render('contact')
})

server.get('/about', (req, res) => {
  res.render('about')
})
