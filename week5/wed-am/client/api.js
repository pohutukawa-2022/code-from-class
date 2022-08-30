import request from 'superagent'

export function fetchLanguages() {
  return request.get('/api/v1/languages').then((res) => res.body)
}

export function addLanguage(newLanguage) {
  return request
    .post('/api/v1/languages')
    .send({ name: newLanguage })
    .then((res) => res.body)
}
