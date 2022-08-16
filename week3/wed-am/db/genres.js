const connection = require('./index')

function getGenres(db = connection) {
  return db('genres').select()
}

// function getPlayersByGenre(id, db = connection) {
//   return db('genres')
//     .join('player_genres', 'genres.id', 'player_genres.genre_id')
//     .join('players', 'player_genres.player_id', 'players.id')
//     .select('players.id as playerId', 'players.name as playerName')
//     .where('genres.id', id)
// }

function getPlayersByGenre(id, db = connection) {
  return db('players')
    .join('player_genres', 'player_genres.player_id', 'players.id')
    .select('players.id as playerId', 'players.name as playerName')
    .where('player_genres.genre_id', id)
}

module.exports = {
  getGenres,
  getPlayersByGenre,
}
