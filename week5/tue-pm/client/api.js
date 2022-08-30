import request from 'superagent'

export function getFruits() {
  return request.get('/proxy')
}
