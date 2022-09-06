import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todos'

function AddWord() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  function handleChange(event) {
    setInput(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log('Todo: ', input)
    dispatch(addTodo(input))
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
