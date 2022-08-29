const request = require('supertest')
const server = require('../server')
const db = require('../db')

jest.mock('../db')

test('GET /users returns all users', () => {
  db.getUsers.mockImplementation(() => {
    const users = [
      { id: 99901, name: 'karl', email: 'aardvark@example.org' },
      { id: 99902, name: 'oscer', email: 'baboon@example.org' },
      { id: 99903, name: 'vron', email: 'capybara@example.org' },
    ]
    return Promise.resolve(users)
  })

  // fail('Empty test.')
  return request(server)
    .get('/users')
    .expect(200) // ok
    .then((res) => {
      expect(res.body.users).toHaveLength(3)
    })
})

test('GET /users/:id returns a single user', () => {
  // fail('Empty test.')
  db.getUser.mockImplementation(() => {
    const user = { id: 99901, name: 'karl', email: 'aardvark@example.org' }
    return Promise.resolve(user)
  })

  return request(server)
    .get('/users/3')
    .expect(200) // ok
    .then((res) => {
      expect(res.body.user.name).toBe('karl')
    })
})

// test('GET /users/:id should fail when passing a non-numeric id', () => {
//   // fail('Empty test.')
//   db.getUser.mockImplementation(() => {
//     const user = { id: 99901, name: 'karl', email: 'aardvark@example.org' }
//     return Promise.resolve(user)
//   })

//   return request(server)
//     .get('/users/3')
//     .expect(500) // internal error
//     .then((res) => {
//       expect(res.body, error)
//     })
// })

test('POST /users should return 201 status code', () => {
  // fail('Empty test.')
  db.addNewUser.mockImplementation((user) => {
    return Promise.resolve()
  })

  const userData = {
    name: 'potato',
    email: 'vegpatch@gmail.com',
  }

  return request(server)
    .post('/users')
    .send(userData)
    .expect(201) //ok
    .then((res) => {
      expect(res.status).toBe(201)
    })
})
