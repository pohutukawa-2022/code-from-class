const path = require('path')
const express = require('express')

const server = express()

module.exports = server

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))
