const path = require('path')
const express = require('express')

const films = require('./routes/films')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/films', films)

server.get('*', (req, res) => {
  res.sendFile(path.join('public', 'index.html'))
})

module.exports = server
