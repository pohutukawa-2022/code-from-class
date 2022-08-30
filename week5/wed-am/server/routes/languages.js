const express = require('express')
const router = express.Router()
const db = require('../db/db')

// should returPromise.resolve(initial)n [{ id: 1, name: 'some langauge'  }]
// GET /api/v1/langauges/
router.get('/', async (req, res) => {
  // TODO: call a db function to retrieve the languages and respond with a json
  try {
    const languages = await db.getLanguages()
    res.json(languages)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'ops there was something wrong' })
  }
})

// should recieve {name: 'some language'}send
router.post('/', async (req, res) => {
  try {
    const input = req.body
    const id = await db.createLanguage(input.name)
    // TODO: extract the body of the request
    // insert the object in database
    // respond with the id
    res.json({ id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'ops there was something wrong' })
  }
})

module.exports = router
