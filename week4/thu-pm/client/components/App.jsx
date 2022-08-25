import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Form from './Form'
import List from './List'
import Details from './Details'
import data from '../data'

function App() {
  console.log('app rendered')
  const [products, setProducts] = useState(data)

  return (
    <main className="container">
      <header className="row">
        <h1>My Cool App</h1>
      </header>
      <div className="row">
        <div className="column column-10 ">
          <Link className="button" to="/add">Add New</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<List products={products} />} />
        <Route path="/add" element={<Form setProducts={setProducts} />} />
        <Route path="/details/:id" element={<Details products={products} />} />
      </Routes>
    </main>
  )
}

export default App
