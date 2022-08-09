const request = require('supertest')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom')

const server = require('./server')

test('GET /about includes exactly one h1 element', (done) => {
  expect.assertions(3)

  request(server)
    .get('/about')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200) // OK

      // Inject response text into simulated DOM
      document.body.innerHTML = res.text
      const h1Elements = document.getElementsByTagName('h1')
      expect(h1Elements).toHaveLength(1)

      done()
    })
})

test('GET / includes three article elements', (done) => {
  expect.assertions(3)

  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200) // OK

      // Inject response text into simulated DOM
      document.body.innerHTML = res.text
      const articleElements = document.getElementsByTagName('article')
      expect(articleElements).toHaveLength(3)

      done()
    })
})

test('GET / includes text "My music collection!!"', (done) => {
  expect.assertions(3)

  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200) // OK

      // Inject response text into simulated DOM
      document.body.innerHTML = res.text
      const title = screen.getByText('My music collection!!')
      expect(title).toBeInTheDocument()

      done()
    })
})
