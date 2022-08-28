import React, { useState } from 'react'
import Confetti from 'react-confetti'

function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    // setCount(state => state + 1)

    setCount(count + 1)
    if (count === 3) {
      alert('you won')
      return <Confetti width={width} height={height} />
    }
    console.log(count)
  }

  function handleChange(event) {
    if (isNaN(event.target.value)) return

    const value = Number(event.target.value)
    setCount(value)
  }

  return (
    <>
      {/* <p>The current count is: {count}</p> */}
      <button onClick={handleClick}>Player one</button>
      <button onClick={handleClick}>Player two</button>
      {/* <input onChange={handleChange} /> */}
    </>
  )
}

export default Counter

// //INPUT
// this.getInput = function () {
//   if (wPressed && !keyboard.isPressed(keyboard.w)) wPressed = false

//   if (!wPressed && keyboard.isPressed(keyboard.w)) {
//     //SHIP 1
//     ship1.boost()
//     wPressed = true
//   }

//   if (upPressed && !keyboard.isPressed(keyboard.up)) upPressed = false

//   if (!upPressed && keyboard.isPressed(keyboard.up)) {
//     //SHIP 2
//     ship2.boost()
//     upPressed = true
//   }
// }
