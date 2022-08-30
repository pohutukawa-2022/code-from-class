const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getLanguages(db = connection) {
  return db('languages').select()
}

function createLanguage(languageName, db = connection) {
  const newLanguageToAdd = { name: languageName }
  return db('languages')
    .insert(newLanguageToAdd)
    .then((ids) => ids[0])
}

module.exports = {
  getLanguages,
  createLanguage,
}
