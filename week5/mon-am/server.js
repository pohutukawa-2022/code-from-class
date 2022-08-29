const express = require('express')

const users = require('./routes/users')

const server = express()

// Middleware
server.use(express.json())
// Previously we've used:
// server.use(express.urlencoded({ extended: false }))

// Routes
server.use('/users', users)

module.exports = server
