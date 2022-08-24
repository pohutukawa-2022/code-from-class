import React from 'react'

import Form from './Form'
import List from './List'
import products from '../data'

function App() {

  return (
    <main className="container">
      <header className="row">
        <h1>My Cool App</h1>
      </header>
      <div className="row">
        <div className="column column-10 button">Create New</div>
      </div>
      <Form />
      <List products={products} />
    </main>
  )
}

export default App
