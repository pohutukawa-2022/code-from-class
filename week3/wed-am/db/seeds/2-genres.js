exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('genres').del()
  await knex('genres').insert([
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Puzzle' },
    { id: 4, name: 'RPG' },
    { id: 5, name: 'Simulation' },
    { id: 6, name: 'Strategy' },
    { id: 7, name: 'MMO' },
    { id: 8, name: 'Open World' },
  ])
}
