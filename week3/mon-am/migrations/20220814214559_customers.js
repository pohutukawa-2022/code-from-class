exports.up = function (knex) {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id')
    table.string('name')
    table.string('drink_order')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('customers')
}
