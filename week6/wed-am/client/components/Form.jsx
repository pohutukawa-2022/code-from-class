import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchFilms, postNewFilm } from '../slices/films'

function Form() {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    quote: '',
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    
    await dispatch(postNewFilm(form))
    await dispatch(fetchFilms())

  }

  return (
    <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
      <h1 className="text-2xl text-gray-600 font-bold mb-6">🎥 Filmfest</h1>
      <h1 className="text-lg text-gray-400 mb-8">Add new films and quotes</h1>
      <form id="form" noValidate>
        <div className="relative z-0 w-full mb-5">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={form.name}
            onChange={handleChange}
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            htmlFor="name"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Enter film name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5">
          <input
            type="text"
            name="quote"
            placeholder=" "
            value={form.quote}
            onChange={handleChange}
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            htmlFor="password"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Enter quote
          </label>
        </div>
      </form>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default Form
