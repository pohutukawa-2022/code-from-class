exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    { id: 1, name: 'Al' },
    { id: 2, name: 'Benson' },
    { id: 3, name: 'Bryden' },
    { id: 4, name: 'Fergus' },
    { id: 5, name: 'Ford' },
    { id: 6, name: 'Fred' },
    { id: 7, name: 'Frey' },
    { id: 8, name: 'Gracie' },
    { id: 9, name: 'Henry' },
    { id: 10, name: 'Karl' },
    { id: 11, name: 'Livi' },
    { id: 12, name: 'Luke' },
    { id: 13, name: 'Mikesh' },
    { id: 14, name: 'Oscar' },
    { id: 15, name: 'Rong' },
    { id: 16, name: 'Sebastian' },
    { id: 17, name: 'Taylor' },
    { id: 18, name: 'Vanessa' },
    { id: 19, name: 'Xavier' },
    { id: 20, name: 'Yara' },
  ])
}
