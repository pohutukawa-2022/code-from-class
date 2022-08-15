exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('characters').del()
  await knex('characters').insert([
    { id: 1, name: 'Batman', franchise: 'DC', power: 'Wealthy' },
    { id: 2, name: 'Spider-man', franchise: 'MCU', power: 'Web' },
    { id: 3, name: 'Joker', franchise: 'DC' },
    { id: 4, name: 'Magneto', franchise: 'MCU', power: 'Magnetism' },
    {
      id: 5,
      name: 'Homelander',
      franchise: 'The Boys',
      power: 'Strength & Laser',
    },
  ])
}
