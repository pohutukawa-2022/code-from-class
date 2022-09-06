import request from 'superagent'

const url = '/api/v1/films/'

export function getFilms() {
  return request.get(url).then((response) => {
    return response.body
  })
}

export function addNewFilm(film) {
  const { name, quote } = film
  return request
    .post(url)
    .send({ name, quote })
    .then((response) => response.body)
}
