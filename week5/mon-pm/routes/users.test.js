const request = require('supertest')
const server = require('../server')
const db = require('../db')

jest.mock('../db')

test('GET /users returns all users', () => {
  db.getUsers.mockImplementation(() => {
    const users = [
<<<<<<< HEAD
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
=======
      { id: 99901, name: 'Karl', email: 'aardvark@example.org' },
      { id: 99902, name: 'Oscar', email: 'baboon@example.org' },
      { id: 99903, name: 'Ron', email: 'capybara@example.org' },
    ]

    return Promise.resolve(users)
  })

  return request(server)
    .get('/users')
    .expect(200) // OK
>>>>>>> 5cbc74233e56cbe1cc02abedf98310783c5590fa
    .then((res) => {
      expect(res.body.users).toHaveLength(3)
    })
})

test('GET /users/:id returns a single user', () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 5cbc74233e56cbe1cc02abedf98310783c5590fa
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
<<<<<<< HEAD
  // fail('Empty test.')
  db.addNewUser.mockImplementation((user) => {
=======
  db.addNewUser.mockImplementation((user) => {
    console.log(user)
>>>>>>> 5cbc74233e56cbe1cc02abedf98310783c5590fa
    return Promise.resolve()
  })

  const userData = {
<<<<<<< HEAD
    name: 'potato',
    email: 'vegpatch@gmail.com',
=======
    name: 'Bryden',
    email: 'goingToMelbourne@here.com',
>>>>>>> 5cbc74233e56cbe1cc02abedf98310783c5590fa
  }

  return request(server)
    .post('/users')
    .send(userData)
<<<<<<< HEAD
    .expect(201) //ok
    .then((res) => {
      expect(res.status).toBe(201)
=======
    .expect(201) // Created
    .then((res) => {
      expect(res.status).toBe(201) // Created
>>>>>>> 5cbc74233e56cbe1cc02abedf98310783c5590fa
    })
})
