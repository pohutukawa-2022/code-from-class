import React, { useEffect, useState } from 'react'
import request from 'superagent'
import { getFruits } from '../api'

function App() {
  const [fruit, setFruits] = useState([])

  useEffect(() => {
    getFruits()
      .then((res) => {
        setFruits(res.body)
      })
      .catch((err) => {
        console.error(`Oh no!: ${err.message}`)
      })
  }, [])

  console.log(fruit)

  return (
    <>
      <h1>Fruits</h1>
    </>
  )
}

export default App
