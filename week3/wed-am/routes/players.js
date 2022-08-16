const express = require('express')
const dbPlayers = require('../db/players')
const dbGenres = require('../db/genres')
const router = express.Router()

module.exports = router

// GET /players/
router.get('/', async (req, res) => {
  try {
    const players = await dbPlayers.getPlayers()
    const viewData = {
      players,
    }

    res.render('players', viewData)
  } catch (error) {
    console.error(error)
  }
})

// GET /players/add
router.get('/add', async (req, res) => {
  try {
    const players = await dbPlayers.getPlayers()
    const genres = await dbGenres.getGenres()

    const viewData = {
      genres,
      players,
    }
    res.render('playerForm', viewData)
  } catch (error) {
    console.error(error)
  }
})

router.post('/add', async (req, res) => {
  try {
    const player = req.body
    await dbPlayers.addPlayerGenres(player)
    res.redirect('/players')
  } catch (error) {
    console.error(error)
    res.send('ops something went wrong')
  }
})
