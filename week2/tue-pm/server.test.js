const request = require('supertest')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom')

const server = require('./server')

test('GET /about includes exactly one h1 element', (done) => {
  request(server)
    .get('/about')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      // Set the Body of the document to be the response text, to be able to search it
      document.body.innerHTML = res.text
      const h1Elements = document.getElementsByTagName('h1')
      expect(h1Elements).toHaveLength(1)
      done()
    })
})

test('GET /about includes three article elements', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      // Set the Body of the document to be the response text, to be able to search it
      document.body.innerHTML = res.text
      const articleElems = document.getElementsByTagName('article')
      expect(articleElems).toHaveLength(3)
      done()
    })
})

test('GET /about includes text "my music collection', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      // Set the Body of the document to be the response text, to be able to search it
      document.body.innerHTML = res.text
      const title = screen.getByText('My music collection')

      expect(title).toBeInTheDocument()

      done()
    })
})
