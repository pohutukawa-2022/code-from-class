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
<<<<<<< HEAD
    // console.log(input)
    addLanguage(input)
      .then((id) => {
        console.log(id)
      })
      .catch((err) => {
        console.error(err)
      })
=======
    addLanguage(input).then((id) => {
      console.log(id)
    })
    .catch(err => {
      console.error(err);
    })
>>>>>>> 7f626348fbd35098d6777d67972ddc2a20c94484
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
