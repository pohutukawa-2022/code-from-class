import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form(props) {
  const  navigate = useNavigate();

  const [form, setForm] = useState({
    product: '',
    price: '',
  })

  function handleFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    console.log('handle submit called');
    event.preventDefault()
    props.setProducts((purchases) => [...purchases, form])
    setForm({
      product: '',
      price: '',
    })
    navigate('/')
  }

  return (
    <form>
      <input
        type="text"
        name="product"
        onChange={handleFormChange}
        value={form.product}
      />
      <input
        type="text"
        name="price"
        onChange={handleFormChange}
        value={form.price}
      />
      <button onClick={handleSubmit}>ADD</button>
    </form>
  )
}

export default Form
