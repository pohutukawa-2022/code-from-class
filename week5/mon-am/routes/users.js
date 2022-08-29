const express = require('express')

const db = require('../db')

const router = express.Router()

// GET /users/
router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    console.log(users)
    res.json({ users: users })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get /users/:id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await db.getUser(id)
    res.json({ user: user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// POST /users/ - create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    await db.addNewUser(newUser)
    res.sendStatus(201) //Created
  } catch (error) {}
})

// DELETE /users
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await db.deleteUser(id)
    res.sendStatus(200) // ALG
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
