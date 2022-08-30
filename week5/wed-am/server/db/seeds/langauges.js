exports.seed = function (knex) {
  return knex('languages')
    .del()
    .then(function () {
      return knex('languages').insert([
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 3, name: 'Python' },
      ])
    })
}
