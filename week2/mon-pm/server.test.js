const server = require('./server')

const request = require('supertest')

test('GET / and check it contains "frog foundation".', (done) => {
  // Make a request to on / route
  request(server)
    .get('/')
    .end((err, res) => {
      // Check that there are no errors
      expect(err).toBeNull()
      // Status code
      expect(res.status).toBe(200)

      // Check for 'frog foundation' text
      expect(res.text).toMatch('frog foundation')
      done()
    })
})

test('POST to /favFrog with a valid name redirects to /frogs/id', (done) => {
  const frogData = { frogName: 'Roxanne' }
  request(server)
    .post('/favFrog')
    .send(frogData)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .end((err, res) => {
      // Check errors
      expect(err).toBeNull()
      // Check status code = ?
      expect(res.status).toBe(302) // Found status
      // Check redirected to /frogs/id
      expect(res.headers.location).toBe('/frogs/3')

      done()
    })
})
