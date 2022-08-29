const environment = 'test'
const config = require('./knexfile')[environment]
const testDb = require('knex')(config)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

// Sometimes you need this
// afterAll(() => {
//   return testDb.destroy()
// })

test('getUsers returns all users', () => {
  return db.getUsers(testDb)
    .then(users => {
      expect(users).toHaveLength(26)
    })
})