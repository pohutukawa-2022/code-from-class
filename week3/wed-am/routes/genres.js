const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  try {
    const viewData = { genres: [{ id: 1, name: 'some random genres here' }] }

    res.render('genres', viewData)
  } catch (error) {
    console.error(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const viewData = {
      players: [
        { id: 1, playerName: 'Alice' },
        { id: 2, playerName: 'Bob' },
      ],
    }

    res.render('genre', viewData)
  } catch (error) {
    console.error(error)
  }
})
