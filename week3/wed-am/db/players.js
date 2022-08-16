const connection = require('./index')

function getPlayers(db = connection) {
  return db('players').select()
}

function addPlayerGenres(player, db = connection) {
  const newPlayer = {
    genre_id: Number(player.genreId),
    player_id: Number(player.playerId),
  }
  return db('player_genres').insert(newPlayer)
}

module.exports = {
  getPlayers,
  addPlayerGenres,
}
