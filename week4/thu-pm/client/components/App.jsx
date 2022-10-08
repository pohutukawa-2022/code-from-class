import React, { useState } from 'react'

import Form from './Form'
import List from './List'
import data from '../data'

function App() {
  const [products, setProducts] = useState(data)
  
  return (
    <main className='grid h-screen' >
     <Form setProducts={setProducts} /> 
     <List products={products} />
    </main>
  )
}

export default App
