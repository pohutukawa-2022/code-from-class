const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

function getCharacters(db = connection) {
  return db('characters')
    .join('actors', 'characters.id', 'actors.character_id')
    .select(
      'characters.name as characterName',
      'actors.name as actorName',
      'actors.country as nationality'
    )
    .where('power', 'Wealthy')
}

module.exports = {
  getCharacters,
}
