
exports.seed = (knex) => {
  return knex('todos').del()
    .then(() => {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Hulk out'},
        {id: 2, task: 'Hunt beast'},
        {id: 3, task: 'Guitar solo'}
      ]);
    });
};
