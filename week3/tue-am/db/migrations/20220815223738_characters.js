exports.up = function (knex) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('franchise')
    table.string('power')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('characters')
}
