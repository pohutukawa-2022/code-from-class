
exports.up = function(knex) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary
    table.string('name')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('players')
};
