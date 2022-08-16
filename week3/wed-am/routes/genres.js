const express = require('express')
const router = express.Router()
const dbGenres = require('../db/genres')
module.exports = router

// GET /genres/
router.get('/', async (req, res) => {
  try {
    const genres = await dbGenres.getGenres()
    console.log(genres)
    const viewData = { genres }

    res.render('genres', viewData)
  } catch (error) {
    console.error(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const playerGenres = await dbGenres.getPlayersByGenre(id)
    const viewData = {
      players: playerGenres,
    }

    res.render('genre', viewData)
  } catch (error) {
    console.error(error)
  }
})
