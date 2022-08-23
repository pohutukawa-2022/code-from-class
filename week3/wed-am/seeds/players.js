/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    {id: 1, name: 'bob'},
    {id: 2, name: 'mike'},
    {id: 3, name: 'chazza'}
  ]);
};
