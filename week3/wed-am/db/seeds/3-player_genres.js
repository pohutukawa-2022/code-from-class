/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('player_genres').del()
  await knex('player_genres').insert([
    { id: 1, player_id: 1, genre_id: 9 },
    { id: 2, player_id: 1, genre_id: 3 },
    { id: 3, player_id: 2, genre_id: 8 },
    { id: 4, player_id: 3, genre_id: 2 },
    { id: 5, player_id: 4, genre_id: 9 },
    { id: 6, player_id: 4, genre_id: 8 },
    { id: 7, player_id: 6, genre_id: 4 },
    { id: 8, player_id: 6, genre_id: 8 },
    { id: 9, player_id: 6, genre_id: 1 },
    { id: 10, player_id: 6, genre_id: 2 },
    { id: 11, player_id: 7, genre_id: 6 },
    { id: 12, player_id: 8, genre_id: 9 },
    { id: 13, player_id: 9, genre_id: 1 },
    { id: 14, player_id: 11, genre_id: 2 },
    { id: 15, player_id: 12, genre_id: 1 },
    { id: 16, player_id: 14, genre_id: 4 },
    { id: 17, player_id: 16, genre_id: 4 },
    { id: 18, player_id: 16, genre_id: 8 },
    { id: 19, player_id: 17, genre_id: 6 },
    { id: 20, player_id: 17, genre_id: 4 },
    { id: 21, player_id: 18, genre_id: 5 },
    { id: 22, player_id: 18, genre_id: 6 },
    { id: 23, player_id: 18, genre_id: 7 },
    { id: 24, player_id: 19, genre_id: 1 },
    { id: 25, player_id: 20, genre_id: 6 },
  ])
}
