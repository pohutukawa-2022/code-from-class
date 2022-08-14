const knex = require('knex')
const config = require('./knexfile')
const db = knex(config.development)

function showAllCustomers() {
  db('customers')
    .select()
    .then((customers) => {
      console.log(customers)
    })
}

function addNewCustomer(newCustomer) {
  db('customers')
    .insert(newCustomer)
    .then((id) => console.log(id))
}

const newCustomer = { name: 'Eli', drink_order: 'water' }

showAllCustomers()
addNewCustomer(newCustomer)
