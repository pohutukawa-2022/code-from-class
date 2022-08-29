# CORS & proxy servers

Lecture slides here! https://www.figma.com/file/5bJ62f7NU2uog8swcuxlGe/CORS-(Elise)?node-id=0%3A1

```
import React, { useState, useEffect } from 'react'
import { getAllFruitAPI } from '../api'

function App() {
  const [fruits, setFruits] = useState([])
  const [loadingIcon, setLoadingIcon] = useState(false)

  useEffect(() => {
    setLoadingIcon(true)
    getAllFruitAPI()
      .then((resFruits) => {
        setFruits(resFruits)
        setLoadingIcon(false)
      }).catch(err => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>Fruits</h1>
      <ul>
        {fruits.map(fruit => {
          return (<li key={fruit.id}>{fruit.name} - {fruit.genus}</li>)
        })}
      </ul>
      {loadingIcon && <img src='/busy.gif' alt='loading icon' />}
    </>
  )
}
```

```
  export function getAllFruitAPI() {
  return request
    .get('/api/fruit')
    .then(res => {
      return res.body.fruits
    })
    .catch(err => {
      console.error(err.message)
    })
}
```