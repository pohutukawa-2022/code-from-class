exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('films')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('films').insert([
        {
          id: 1,
          name: 'The Shining',
          quote: "Here's Jonny",
        },
        { id: 2, name: 'Forrest Gump', quote: 'Run Forrest! Run!' },
        {
          id: 3,
          name: 'Intersetllar',
          quote: "Hey TARS, what's your honesty parameter?",
        },
        { id: 4, name: 'Start Wars', quote: 'May the force be with you' },
        {
          id: 5,
          name: 'Terminator 2: Judggment Day',
          quote: 'Hasta la visa, baby',
        },
      ])
    })
}
