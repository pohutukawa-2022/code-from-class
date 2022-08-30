import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    // TODO: post the input using an HTTP call then navigate
    navigate('/')
  }

  return (
    <form>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default Form
