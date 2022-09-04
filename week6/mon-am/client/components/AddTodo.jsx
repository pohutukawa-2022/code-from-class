import React from 'react'
import { useState } from 'react'


function AddWord() {
  const [input, setInput] = useState('')

  function handleChange(event) {
    setInput(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log('Todo: ', input);
    // clear input
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter todo" onChange={handleChange} value={input} />
    </form>
  )
}

export default AddWord
