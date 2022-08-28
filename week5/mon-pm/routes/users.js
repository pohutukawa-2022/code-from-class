const express = require('express')

const db = require('../db')

const router = express.Router()

// GET /users
router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.json({ users: users })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// GET /users/23
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    res.status(500).json({error: 'invalid id format' })
    return
  }
  db.getUser(id)
    .then((user) => {
      res.json({ user: user })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// POST /users
router.post('/', (req, res) => {
  const newUser = req.body
  db.addNewUser(newUser)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// DELETE /users/23
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteUser(id)
    .then((user) => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
