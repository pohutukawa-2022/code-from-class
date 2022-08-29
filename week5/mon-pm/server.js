const express = require('express')

const users = require('./routes/users')

const server = express()

// Middleware
server.use(express.json())

// Routes
server.use('/users', users)

module.exports = server
