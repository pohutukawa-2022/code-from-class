import React from 'react'
import Form from './Form'
import List from './List'
import { Route, Routes } from 'react-router-dom'

function App () {

  return (
    <>
      <h1>Programming Languages</h1>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/add' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
