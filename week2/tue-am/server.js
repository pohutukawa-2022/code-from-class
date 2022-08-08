// IMPORT THE BASICS
const path = require('path')
const express = require('express')
// Import data
const data = require('./data')

// CREATE YOUR SERVER
const server = express()
module.exports = server

// ADD PUBLIC FOLDER
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'old.html'))
})

server.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'old-contact.html'))
})

server.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'old-about.html'))
})
