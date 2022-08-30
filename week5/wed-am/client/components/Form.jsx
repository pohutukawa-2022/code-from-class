import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addLanguage } from '../api'

function Form() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    // TODO: post the input using an HTTP call then navigate
    addLanguage(input).then((id) => {
      console.log(id)
    })
    .catch(err => {
      console.error(err);
    })
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
