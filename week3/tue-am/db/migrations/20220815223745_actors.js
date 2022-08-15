exports.up = function (knex) {
  return knex.schema.createTable('actors', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('country')
    table.integer('character_id').references('characters.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('actors')
}
