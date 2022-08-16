const config = require('./knexfile').test
const testDb = require('knex')(config)
const { getAll, addTodo } = require('./db')

// At start of test file
beforeAll(() => {
  return testDb.migrate.latest()
})

// At end of test file
afterAll(() => {
  return testDb.destroy()
})

// Before every single test
beforeEach(() => {
  return testDb.seed.run()
})

test('getaAll returns all Todos from the database', () => {
  return getAll(testDb).then((tasks) => {
    console.log(tasks)
    // Check for 3 records
    expect(tasks).toHaveLength(3)
  })
})

test('addTodo adds a new task to the database', () => {
  // Add a task to TODO table
  const todoTask = 'Do a cartwheel'
  return addTodo(todoTask, testDb)
    .then((returned) => {
      console.log(returned)
      expect(returned[0]).toEqual(4)

      return getAll(testDb)
    })
    .then((tasks) => {
      // Check the last row / data is the one we added
      expect(tasks[3].task).toMatch(todoTask)
    })
})
