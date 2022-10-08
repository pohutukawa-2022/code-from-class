import React, { useState } from 'react'

function Form(props) {

  const [form, setForm] = useState({
    product: '',
    price: '',
  })

  function handleFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    console.log('handle submit called')
    event.preventDefault()
    props.setProducts((purchases) => [...purchases, {...form, id: purchases.length + 1}])
    setForm({
      product: '',
      price: '',
    })
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit} className="shadow-2xl rounded-lg p-12">
            <div className="mb-5">
              <label
                htmlFor="product"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product name
              </label>
              <input
                type="text"
                name="product"
                id="product"
                onChange={handleFormChange}
                value={form.product}
                placeholder="Avocado"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Price
              </label>
              <input
                type="number"
                min="1"
                step="any"
                name="price"
                id="price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleFormChange}
                value={form.price}
              />
            </div>

            <button className="hover:shadow-form rounded-md bg-ultraviolet py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
