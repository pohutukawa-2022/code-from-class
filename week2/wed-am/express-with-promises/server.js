const express = require('express')
const server = express()
const fs = require('fs').promises
const path = require('path')
const hbs = require('express-handlebars')

module.exports = server

// Middleware
server.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
  })
)
server.set('view engine', 'hbs')
server.use(express.static('public'))

server.get('/', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json')

  fs.readFile(dataPath, 'utf8')
    .then((contents) => {
      const data = JSON.parse(contents)
      const genres = Object.keys(data)

      const viewData = {
        genres,
      }

      res.render('genres', viewData)
    })
    .catch((error) => {
      console.error(error)
    })
  console.log('finished')
})

server.get('/:genre', async (req, res) => {
  const genre = req.params.genre

  const dataPath = path.join(__dirname, 'data.json')
  const contents = await fs.readFile(dataPath, 'utf-8')
  const data = JSON.parse(contents)

  const players = data[genre]

  const viewData = {
    players: players,
  }

  res.render('players', viewData)
})
