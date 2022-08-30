import request from 'superagent'

export function fetchLanguages() {
  const initial = [
    { id: 1, name: 'Rust' },
    { id: 2, name: 'F#' },
    { id: 3, name: 'C++' },
  ]
  return Promise.resolve(initial)
}

export function addLanguage(newLanguage) {
  return Promise.resolve({ id: 1 })
}
