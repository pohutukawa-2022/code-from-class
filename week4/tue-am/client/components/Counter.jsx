import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
    // setCount(state => state + 1)

    console.log(count)
  }

  function handleChange(event) {
    if (isNaN(event.target.value)) return

    const value = Number(event.target.value)
    setCount(value)
  }

  return (
    <>
      <p>The current count is: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <input onChange={handleChange} />
    </>
  )
}

export default Counter
