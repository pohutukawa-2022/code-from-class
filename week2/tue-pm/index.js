const server = require('./server')

const PORT = 3000

server.listen(PORT, function () {
  console.log('Server listening on port', PORT)
})