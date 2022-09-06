const express = require('express')
const router = express.Router()
const db = require('../db/db')

<<<<<<< HEAD
// should return [{ id: 1, name: 'some langauge'  }]
// GET /api/v1/languages
router.get('/', async (req, res) => {
  try {
    const langauges = await db.getLanguages()
    res.json(langauges)
  } catch (error) {
    console.error(console.error(error))
    res.status(500).json({ message: 'wpoops' })
  }

  // TODO: call a db function to retrieve the languages and respond with a json
  // res.json([
  //   { id: 1, name: 'Ruby' },
  //   { id: 2, name: 'C++' },
  // ])
=======
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
>>>>>>> 7f626348fbd35098d6777d67972ddc2a20c94484
})

// should recieve {name: 'some language'}send
router.post('/', async (req, res) => {
<<<<<<< HEAD
  // TODO: extract the body of the request
  // insert the object in database
  // respond with the id
  try {
    const input = req.body
    const id = await db.createLanguage(input.name)
    res.json({ id })
  } catch (error) {
    console.error(console.error(error))
    res.status(500).json({ message: 'wpoops' })
=======
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
>>>>>>> 7f626348fbd35098d6777d67972ddc2a20c94484
  }
})

module.exports = router
