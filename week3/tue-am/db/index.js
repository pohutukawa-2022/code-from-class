const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

