import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)


  function handleClick() {
    setCount(count + 1)
  }

  function handleChange(event) {
    const newCount = Number(event.target.value)

    if (isNaN(newCount)) return
    setCount(newCount)
  }

  return (
    <div className="counter">
      <h1>The current count is: {count}</h1>
      <button onClick={handleClick}>Increase</button>
      <input onChange={handleChange} value={count} />
      <button>This button does nothing</button>
    </div>
  )
}

export default Counter
