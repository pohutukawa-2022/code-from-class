import React, { useEffect, useState } from 'react'
import request from 'superagent'

function App() {
  const [fruits, setFruits] = useState([])

  useEffect(() => {}, [])

  return (
    <>
      <h1>Fruits</h1>
      <ul>
        {fruits?.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.name} - ({fruit.family} {fruit.genus})
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
