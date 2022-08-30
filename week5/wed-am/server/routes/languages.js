const express = require('express')
const router = express.Router()
const db = require('../db/db')

// should return [{ id: 1, name: 'some langauge'  }]
router.get('/', (req, res) => {
  // TODO: call a db function to retrieve the languages and respond with a json
  res.json([
    { id: 1, name: 'Ruby' },
    { id: 2, name: 'C++' },
  ])
})

// should recieve {name: 'some language'}send
router.post('/', async (req, res) => {
  // TODO: extract the body of the request
  // insert the object in database
  // respond with the id
  res.json({ id: 987 })
})

module.exports = router
