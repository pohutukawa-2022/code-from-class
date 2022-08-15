exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('actors').del()
  await knex('actors').insert([
    { id: 1, name: 'Christian Bale', country: 'UK', character_id: 1 },
    { id: 2, name: 'Adam West', country: 'USA', character_id: 1 },
    { id: 3, name: 'Ben Affleck', country: 'USA', character_id: 1 },
    { id: 4, name: 'Tobey Maguire', country: 'USA', character_id: 2 },
    { id: 5, name: 'Andrew Garflied', country: 'USA', character_id: 2 },
    { id: 6, name: 'Tom Holland', country: 'UK', character_id: 2 },
    { id: 7, name: 'Heath Ledger', country: 'AUS', character_id: 3 },
    { id: 8, name: 'Jack Nicholson', country: 'USA', character_id: 3 },
    { id: 9, name: 'Joaquin Pheonix', country: 'USA', character_id: 3 },
    { id: 10, name: 'Ian McKellen', country: 'USA', character_id: 4 },
    {
      id: 11,
      name: 'Michael Fassbender',
      country: 'IRE',
      character_id: 4,
    },
  ])
}
