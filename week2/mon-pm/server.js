const express = require('express')
const path = require('path')

const frogData = require('./frog')

const server = express()

// Static folder (for html, css, images etc.)
const staticPath = path.join(__dirname, 'public')
server.use(express.static(staticPath))

// Tell Express how to process the body of POST routes
server.use(express.urlencoded({ extended: false }))

// Simple GET routes
server.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the frog foundation</h1>
    <ul>
      <li><a href="/about">About us</a></li>
      <li><a href="/html/frogs.html">Favourite frog?</a></li>
    </ul>
  `)
})

server.get('/about', (req, res) => {
  res.send('<h1>We love frogs</h1>')
})

// URL Params
server.get('/frogs/:id', (req, res) => {
  const id = Number(req.params.id)

  const frog = frogData.find((frog) => frog.id === id)

  res.send(frog.name)
})

//POST route
server.post('/favFrog', (req, res) => {
  const { frogName } = req.body

  const foundFrog = frogData.find((frog) => frog.name === frogName)

  res.redirect(`/frogs/${foundFrog.id}`)
})

module.exports = server
