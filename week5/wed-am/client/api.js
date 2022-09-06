import request from 'superagent'

export function fetchLanguages() {
<<<<<<< HEAD
  // const initial = [
  //   { id: 1, name: 'Rust' },
  //   { id: 2, name: 'F#' },
  //   { id: 3, name: 'Brainfuck' },
  // ]
  // return Promise.resolve(initial)

  //

  // we want to get the body back from
  return request.get('/api/v1/languages').then((res) => res.body)
}

=======
  return request.get('/api/v1/languages').then((res) => res.body)
}

>>>>>>> 7f626348fbd35098d6777d67972ddc2a20c94484
export function addLanguage(newLanguage) {
  return request
    .post('/api/v1/languages')
    .send({ name: newLanguage })
    .then((res) => res.body)
<<<<<<< HEAD
  // return Promise.resolve({ id: 1 })
=======
>>>>>>> 7f626348fbd35098d6777d67972ddc2a20c94484
}
