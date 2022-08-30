import React, { useEffect, useState } from 'react'
import { getFruits } from '../api'

function App() {
  const [fruits, setFruits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getFruits()
      .then((res) => {
        setFruits(res.body)
      })
      .finally(() => {
        setLoading(false)
      })
      .catch((err) => {
        console.error(`Oh no!: ${err.message}`)
      })
  }, [])

  console.log(fruits)

  return (
    <>
      <h1>Fruits</h1>
      {loading ? (
        <img src="busy.gif" />
      ) : (
        <ul>
          {fruits.map((fruit) => {
            return (
              <li>{`${fruit.name} has ${fruit.nutritions.protein} grams of protein`}</li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default App
