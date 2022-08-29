const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addNewUser,
  deleteUser,
}

function getUsers(db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users')
    .select()
    .where('id', id)
    .first()
    .then((user) => {
      if (!user) {
        throw new Error(`User with id ${id} not found`)
      }
      return user
    })
}

function addNewUser(newUser, db = connection) {
  const { name, email } = newUser
  return db('users')
    .insert(newUser)
    .then((ids) => ids[0])
}

function deleteUser(id, db = connection) {
  return db('users').where('id', id).delete()
}
