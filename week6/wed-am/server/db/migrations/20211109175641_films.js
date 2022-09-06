exports.up = function (knex) {
  return knex.schema.createTable('films', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('quote')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('films')
}
