
## Pure Functions Vs Side-effects

### Examples of Pure Functions
A function that accepts the same input and returns the same output is a pure function.

Here are examples of pure functions: 
```js

function add(num1, num2) {
  return num1 + num2
}

function capitalize(city) {
  return city.toUpperCase()
}

function addWombat(name) {
  return {
    type: 'ADD_WOMBAT',
    value: name
  }
}

function map(arr, func) {
  let newArr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const newElement = func(element)
    newArr.push(newElement)
  }
  return newArr
}

arr.filter((element) => ...)
arr.reduce((total, element) => ...)
```

## Examples of Side-Effects
A side-effect is any kind of logic that interacts with the outside world (outside a function).
Functions that make an HTTP request has a side-effect and this function can return different results each time it's called.

Here are examples for side-effects:

```js
// this function changes the state of the database
function deleteOrder(id, db = database) {
  return db('order')
    .where('id', id)
    .del()
}

// this function could return 1 or 2 or hundreds. 
// The same function could return less or more when called later
function fetchOrders() {
  return request
    .get('/api/v1/orders')
    .then(res => res.body)
}

function printBanana() {
  console.log('🍌')
}
```

## Test your knowledge
Is it a pure or an impure function?

```js
function reducer(state, action) {
  switch (action.type) {
    case 'SNUGGLE':
      return "I snuggled my pet"
    default: 
      return state
  }
}
```
<details>
  <summary>Check your answer</summary>
  
  ## Pure
</details>

<br />

```js
function getCurrentDate () {
  return new Date(Date.now())
}
```
<details>
  <summary>Check your answer</summary>
  
  ## Impure
</details>

<br />

```js
  let score = 0
  function increment() {
    score += 1
    return score
  }
```
<details>
  <summary>Check your answer</summary>
  
  ## Impure
</details>

<br />

```js
  function increment(score) {
    return score + 1
  }
```
<details>
  <summary>Check your answer</summary>
  
  ## Pure
</details>

<br />
<br />
