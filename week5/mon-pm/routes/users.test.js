const request = require('supertest')
const server = require('../server')
const db = require('../db')

jest.mock('../db')

test('GET /users returns all users', () => {
  db.getUsers.mockImplementation(() => {
    const users = [
      { id: 99901, name: 'Karl', email: 'aardvark@example.org' },
      { id: 99902, name: 'Oscar', email: 'baboon@example.org' },
      { id: 99903, name: 'Ron', email: 'capybara@example.org' },
    ]

    return Promise.resolve(users)
  })

  return request(server)
    .get('/users')
    .expect(200) // OK
    .then((res) => {
      expect(res.body.users).toHaveLength(3)
    })
})

test('GET /users/:id returns a single user', () => {
  db.getUser.mockImplementation(() => {
    const user = { id: 99901, name: 'Xavier', email: 'aardvark@example.org' }

    return Promise.resolve(user)
  })

  return request(server)
    .get('/users/3')
    .expect(200)
    .then((res) => {
      expect(res.body.user.name).toBe('Xavier')
    })
})

test('GET /users/:id should fail when passing a non-numeric id', () => {
  return request(server)
    .get('/users/camel')
    .expect(500) // Internal error
    .then((res) => {
      expect(res.body.error).toBe('invalid id format')
    })
})

test('POST /users should return 201 status code', () => {
  db.addNewUser.mockImplementation((user) => {
    console.log(user)
    return Promise.resolve()
  })

  const userData = {
    name: 'Bryden',
    email: 'goingToMelbourne@here.com',
  }

  return request(server)
    .post('/users')
    .send(userData)
    .expect(201) // Created
    .then((res) => {
      expect(res.status).toBe(201) // Created
    })
})
