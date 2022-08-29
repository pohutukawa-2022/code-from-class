import request from 'superagent'

export function getFruits() {
  return request
    .get('https://www.fruityvice.com/api/fruit/all')
    .set('Accept', 'application/json')
}
