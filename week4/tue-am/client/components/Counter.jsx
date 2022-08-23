import React, { useState } from 'react'

function Counter() {
  const [apple, potato] = useState(500)

  // let count = 0

  function handleClick() {
    potato(apple + 1)
    // count++
    console.log(apple)
  }
  function handleClickDown() {
    potato(apple - 1)
    // count++
    console.log(apple)
  }

  function handleChange(event) {
    if (isNaN(event.target.value)) return
    const value = Number(event.target.value)
    potato(value)
  }

  return (
    <>
      <p>The current count is: {apple} </p>
      <button onClick={handleClick}>PLUS</button>
      <button onClick={handleClickDown}>-</button>
      <br />
      <input onChange={handleChange} />
    </>
  )
}

export default Counter
