const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  try {
    const viewData = {
      players: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
    }

    res.render('players', viewData)
  } catch (error) {
    console.error(error)
  }
})

router.get('/add', async (req, res) => {
  try {
    const viewData = {
      genres: [
        { id: 1, name: 'genre1' },
        { id: 2, name: 'genre2' },
      ],
      players: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
    }
    res.render('playerForm', viewData)
  } catch (error) {
    console.error(error)
  }
})

router.post('/add', async (req, res) => {
  try {
    res.redirect('/players')
  } catch (error) {
    console.error(error)
    res.send('ops something went wrong')
  }
})
