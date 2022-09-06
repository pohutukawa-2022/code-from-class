const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getFilms()
    .then((films) => {
      setTimeout(() => res.json(films), 700)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.post('/', (req, res) => {
  const { name, quote } = req.body

  db.addFilms({ name, quote })
    .then(() => {
      // ignore ids from db function
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

module.exports = router
