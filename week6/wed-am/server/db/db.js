const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getFilms,
  addFilms
}

function getFilms (db = connection) {
  return db('films')
    .select()
}

function addFilms (film, db = connection) {
  const { name, quote } = film
  return db('films')
    .insert({ name, quote })
}
