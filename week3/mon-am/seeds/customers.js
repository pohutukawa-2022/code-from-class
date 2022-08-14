exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('customers').del()
  await knex('customers').insert([
    { id: 1, name: 'Sophia', drink_order: 'tea' },
    { id: 2, name: 'Ahmad', drink_order: 'tea' },
    { id: 3, name: 'Clementine', drink_order: 'coffee' },
  ])
}
