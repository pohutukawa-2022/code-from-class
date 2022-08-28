# REST Web APIs

## Concepts

* Web APIs: HTTP for data
* REST and resources
    - Create: POST
    - Read: GET
    - Update: PATCH/PUT
    - Delete: DELETE
* URL paths (`/users/23`)
* JSON, AJAX and HTTP clients
* The server-side/backend route
* Responding with JSON
* Postman/Insomnia
* Accepting JSON


## Demo

```
  npm install
  npx knex migrate:latest
  npx knex seed:run
  npm run dev
```
- Routes

``` js
// GET /users/23
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then((user) => {
      res.json({ user: user })
    })
    .catch((err) => {
      res.status(500).json({error: err.message})
    })
})

// POST /users
router.post('/', (req, res) => {
  const newUser = req.body
  db.addNewUser(newUser)
    .then(() => {
      res.status(201).send()
    })
    .catch((err) => {
      res.status(500).json({error: err.message})
    })
})

// DELETE /users/23
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteUser(id)
    .then((user) => {
      res.json({ user: user })
    })
    .catch((err) => {
      res.status(500).json({error: err.message})
    })
})
```

- DB functions

``` js
function getUser (id, db = connection) {
  return db('users')
    .select()
    .where('id', id)
    .first()
    .then((user) => {
      if (!user) {
        throw new Error(`User with id ${id} not found`)
      }
      return user
    })
}

function addNewUser (newUser, db = connection) {
  const { name, email } = newUser
  return db('users')
    .insert(newUser)
    .then((ids) => {
      return {
        id: ids[0],
        name,
        email
      }
    })
}

function deleteUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .delete()
}
```
