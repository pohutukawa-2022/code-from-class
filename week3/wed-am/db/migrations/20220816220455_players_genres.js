exports.up = function (knex) {
  return knex.schema.createTable('player_genres', (table) => {
    table.increments('id')
    table.integer('player_id').references('players.id')
    table.integer('genre_id').references('genres.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('player_genres')
}
